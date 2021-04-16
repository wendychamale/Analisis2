const { describe, it, after, before } = require('mocha');

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


const Page = require('../lib/funciones');
process.on('unhandledRejection', () => {});

(async function example() {
    try {

        describe('Testeo  automatizado autentificacion correcta', async function() { 
            this.timeout(50000);
            var driver, page;


            beforeEach(async() => {
                page = new Page();
                driver = page.driver;
                await page.visit('http://localhost:4200/login');

            });

            afterEach(async() => {
                await page.quit();
            });


            it('Buscar caja usuario, contraseña y el boton de login', async() => {                
                const result = await page.findInputAndButton();
                expect(result.inputEnabledU).to.equal(true);
                expect(result.inputEnabledC).to.equal(true);
                expect(result.buttonText).to.include('Entrar');
            });

            it('Mostrar Pagina de Inicio de Sesion', async() => {
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

        describe('Testeo  automatizado autentificacion incorrecta', async function() { 
            this.timeout(50000);
            var driver, page;


            beforeEach(async() => {
                page = new Page();
                driver = page.driver;
                await page.visit('http://localhost:4200/login');

            });

            afterEach(async() => {
                await page.quit();
            });


            it('Buscar caja usuario, contraseña y el boton de login', async() => {                
                const result = await page.findInputAndButton();
                expect(result.inputEnabledU).to.equal(true);
                expect(result.inputEnabledC).to.equal(true);
                expect(result.buttonText).to.include('Entrar');
            });

            it('Mostrar mensaje credenciales incorrectas', async() => {
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

