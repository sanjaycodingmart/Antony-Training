const chai = require('chai');
const chatHTTP = require('chai-http');

const server = require('../../server');

const user = {
    email: 'anto@codingmart.com'
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