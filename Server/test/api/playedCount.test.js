const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../server');

chai.should();
chai.use(chaiHttp);

const send = {
    id: 101
}

describe('To validate number of times played', ()=> {
    it('POST /playedcount testing', done => {
        chai.request(server)
            .post('/playedcount')
            .send(send)
            .end((err, response) => {
                response.should.be.status(200);
                response.should.be.a('object');
                response.body.should.have.property('id');
                response.body.should.have.property('count');
                done();
            });
    })
});