const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-http'))

describe('Node app', function () {
  const server = require('./index')

  it('responds to / with 200', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        done()
      })
  })

  it('responds to /foo/bar with 404 status and error', function (done) {
    chai.request(server)
    .get('/foo/bar')
    .end(function (err, res) {
      expect(err).to.be.not.null
      expect(res).to.have.status(404)
      done()
    })
  })

  /********************
   ********************
   * You can copy/paste this to use as a template for your test
   ********************
   ********************
   */
  it('responds to / with body including "Hello Austin! 🌵"', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        expect(err).to.be.null
        expect(res.text).to.include('Hello Austin! 🌵')
        done()
      })
  })

  it('responds to / with body including "Yay Austin! 🌵🌇😎"', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        expect(err).to.be.null
        expect(res.text).to.include('Yay Austin! 🌵🌇😎')
        done()
      })
  })

  it('responds to / with body including "Hello, beautiful"', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        expect(err).to.be.null
        expect(res.text).to.include('Hello, beautiful')
        done()
      })
  })
})
