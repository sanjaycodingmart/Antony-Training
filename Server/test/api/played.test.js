const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../../server');

chai.should();
chai.use(chaiHTTP);

const times = {
    "id": "101",
    "times": 5
}



describe('Favourites POST route verification',()=> {
    it('Favourites validation', done => {
        chai.request(server)
            .post('/played')
            .send(times)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
                done();
            })
    });
})