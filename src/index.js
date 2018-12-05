
function debounceWrap (fn, { wait = 200, first = false }) {
  let tm, called
  function debounce() {
    const args = arguments
    const context = this
    if (first && !called) {
      called = true
      fn.apply(context, args)
      return
    }
    if (tm) {
      clearTimeout(tm)
    }
    tm = setTimeout(function () {
      fn.apply(context, args)
      tm = null
    }, wait)
  }
  debounce.cancel = function () {
    if (tm) {
      clearTimeout(tm)
      tm = null
    }
  }
  return debounce
}

module.exports = debounceWrap