// test/test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Путь к вашему серверу
const should = chai.should();

chai.use(chaiHttp);

describe('API', () => {
    // Тест для GET-запроса
    describe('GET /api/data', () => {
        it('должен вернуть данные', (done) => {
            chai.request(server)
                .get('/api/data')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });

    // Тест для POST-запроса
    describe('POST /api/data', () => {
        it('должен отправить данные', (done) => {
            chai.request(server)
                .post('/api/data')
                .send({ name: 'Test' })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.text.should.equal('Данные получены');
                    done();
                });
        });
    });
});
