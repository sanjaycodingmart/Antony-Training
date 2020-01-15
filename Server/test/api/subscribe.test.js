const chai = require('chai');
const chatHTTP = require('chai-http');
const {email} = require('../data/data');
const server = require('../../server');

const user = {
    email: email
}

describe('Add every subscribe for subscription', ()=> {
    it('POST /subscribe route', done => {
        chai.request(server)
            .post('/subscribe')
            .send(user)
            .end((err, response)=> {
                if(err) throw err;
                response.should.be.status(200);
                response.should.be.a('object');
                done();
            });
    });
});