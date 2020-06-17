const supertest = require('supertest')
const assert = require('assert')
const app = require('../server')

describe('GET /', () => {
    it("it should has status code 200",function (done) {
        supertest(app)
            .get('/')
            .expect(200)
            .end(function (err,res) {
                if(err)
                    done(Err)
                done()
            })
    })
})
