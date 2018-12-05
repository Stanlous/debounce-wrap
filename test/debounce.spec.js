
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  console.log('123')
  const debounceWrap = require('..')

  const debounce = debounceWrap(test, {
    wait: 200
  })

  function test (a, b) {
    console.log(a, b)
  }

  debounce(1)
  debounce(1,2,3)
});




