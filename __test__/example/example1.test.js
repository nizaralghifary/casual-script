const { execCmd } = require("../../lib/utils/execCmd")
const flexing = require("../../lib/utils/flexing")
const e2eTest = require("./e2e-test")

describe('End To End Test example 1', () => {
  it('Should return as expected value', done => {
    e2eTest({
      target: "example/example1.nzr",
      contain: "umur kamu 21\nkamu tua\nkalo umurku 31\naku lebih tua\nudahan lah\n"
    }, done)
  })
})