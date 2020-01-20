const chai = require('chai');
const chaiHTTP = require('chai-http');
const {email, token, password} = require('../data/data');
const server = require('../../server');

chai.should();
chai.use(chaiHTTP);

describe('Login GET route verification',()=>{
    it('Login validation',done => {
        chai.request(server)
            .get('/login')
            .end((err, response)=>{
                response.should.have.status(200);
                response.should.be.a('object');
            done();
            })
    })
});

const user = {
    "E-mail": email,
    "oauth": token,
    "Password": password
}

describe('Login POST route verification',()=> {
    it('Login validation', done => {
        chai.request(server)
            .post('/login')
            .send(user)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
                response.body.should.have.property('message');
                response.body.should.have.property('token');
                response.body.should.have.property('id');
                response.body.should.have.property('language');
                response.body.should.have.property('favourites');
                response.body.should.have.property('deleted');
                response.body.should.have.property('subscribe');
                done();
            })
    });
})