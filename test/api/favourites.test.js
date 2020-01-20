const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../../server');

chai.should();
chai.use(chaiHTTP);

const Auth = {
    "email": "anto22998@gmail.com",
    "favourite": `{"id":10168052,"name":"Sambô","img":"https://e-cdns-images.dzcdn.net/images/cover/88632a1d0910597537fd9578e698bae2/250x250-000000-80-0-0.jpg","preview":"https://cdns-preview-b.dzcdn.net/stream/c-b151e94d7149162bd1756972b767afbe-2.mp3","duration":190}`
}

describe('Favourites GET route verification',()=>{
    it('Favourites validation',done => {
        chai.request(server)
            .get('/favourites')
            .end((err, response)=>{
                response.should.have.status(200);
                response.should.be.a('object');
            done();
            })
    })
});

describe('Favourites POST route verification',()=> {
    it('Favourites validation', done => {
        chai.request(server)
            .post('/favourites')
            .send(Auth)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
                done();
            })
    });
})