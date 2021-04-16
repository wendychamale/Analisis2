const { describe, it, after, before } = require('mocha');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


const Page = require('../lib/funciones');
process.on('unhandledRejection', () => {});

(async function example() {
    try {

        describe('Testeo para la busqueda automatizada en Google', async function() { 
            this.timeout(50000);
            var driver, page;


            beforeEach(async() => {
                page = new Page();
                driver = page.driver;
                await page.visit('https://www.google.com/');
            });

            afterEach(async() => {
                await page.quit();
            });


            it('Buscar la caja texto y el boton de busqueda', async() => {                
                const result = await page.findInputAndButton();
                expect(result.inputEnabled).to.equal(true);
                expect(result.buttonText).to.include('Google');
            });

            it('Mostrar el numero total de resultados a partir de una busqueda', async() => {
                const result = await page.submitKeywordAndGetResult();
                //console.log(result);
                expect(result.length).to.be.above(10);

            });

            it('Mostrar el titulo de la ventana', async() => {
                var title = driver.getTitle();
                console.log(title)
                //expect(title).to.include('Google');                
            });

        });

    } catch (ex) {
        console.log(new Error(ex.message));
    } finally {

    }
})();
