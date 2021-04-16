const faker = require('faker');

module.exports = {
    nameKeyword: faker.name.findName(),
    usernameKeyword: faker.internet.userName(),
    passwordKeyWord: faker.internet.password()
};
