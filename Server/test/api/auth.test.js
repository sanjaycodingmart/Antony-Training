// const chai = require('chai');
// const chaiHTTP = require('chai-http');

// const server = require('../../server');

// chai.should();
// chai.use(chaiHTTP);

// const Auth = {
//     "token": "ambh3ej2bb234hb23kbh23b4n32",
//     "email": "anto22998@gmail.com"
// }

// describe('Login POST route verification',()=> {
//     it('Login validation', done => {
//         chai.request(server)
//             .post('/auth')
//             .send(Auth)
//             .end((err, response) => {
//                 response.should.have.status(200);
//                 response.should.be.a('object');
//                 response.body.should.have.property('msg');
//                 response.body.should.have.property('isAuth');
//                 done();
//             })
//     });
// })