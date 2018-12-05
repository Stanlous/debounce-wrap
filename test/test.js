const debounceWrap = require('..')

const debounce = debounceWrap(test, {
  wait: 200
})

function test (a, b) {
  console.log(a, b)
}

debounce(1)
debounce(1,2,3)