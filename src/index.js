
function debounceWrap (fn, options) {
  if (typeof fn !== 'function') {
    return console.error(new Error('debounce-wrap: Expected the first argument to be a function, got '+ typeof fn))
  }

  !options && (options = {})
  var wait = options.wait || 150
  var first = options.first || false

  var tm, called
  function debounce() {
    var args = arguments
    var context = this
    if (first && !called) {
      called = true
      return fn.apply(context, args)
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