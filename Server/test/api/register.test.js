const chai = require('chai');
const chaiHTTP = require('chai-http');
const { email, password, languages, favourites} = require('../data/data');

const server = require('../../server');

chai.should();
chai.use(chaiHTTP);

describe('Login GET route verification',()=>{
    it('Login validation',done => {
        chai.request(server)
            .get('/register')
            .end((err, response)=>{
                response.should.have.status(200);
                response.should.be.a('object');
            done();
            })
    })
});

const user = {
    "E-mail": email,
    "languages": languages,
    "favourites": favourites,
    "Password": password
}

describe('Login POST route verification',()=> {
    it('Login validation', done => {
        chai.request(server)
            .post('/register')
            .send(user)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
                done();
            })
    });
})