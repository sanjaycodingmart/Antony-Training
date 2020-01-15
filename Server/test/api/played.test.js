const chai = require('chai');
const chaiHTTP = require('chai-http');
const {id, times} = require('../data/data');

const server = require('../../server');

chai.should();
chai.use(chaiHTTP);

const time = {
    "id": id,
    "times": times
}



describe('Favourites POST route verification',()=> {
    it('Favourites validation', done => {
        chai.request(server)
            .post('/played')
            .send(time)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
                done();
            })
    });
})