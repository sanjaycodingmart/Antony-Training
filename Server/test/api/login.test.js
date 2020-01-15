const chai = require('chai');
const chaiHTTP = require('chai-http');

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
    "E-mail": "anto22998@gmail.com",
    "oauth": "ambh3ej2bb234hb23kbh23b4n32",
    "Password": "abcd@1234"
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