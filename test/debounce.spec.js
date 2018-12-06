const debounceWrap = require('..')

describe('Call times:', function () {
  let fn
  beforeEach(() => {
    jasmine.clock().install();
    fn = jasmine.createSpy('fn')
  })

  afterEach(function() {
    jasmine.clock().uninstall()
  })

  it('one call', function () {
    const debounce = debounceWrap(fn)
    debounce()

    jasmine.clock().tick(100) 
    expect(fn).toHaveBeenCalledTimes(0)

    jasmine.clock().tick(50) 
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('multiple call', function () {
    const debounce = debounceWrap(fn)
    debounce()
    debounce()
    expect(fn).toHaveBeenCalledTimes(0)
    debounce()
    debounce()

    jasmine.clock().tick(150) 
    expect(fn).toHaveBeenCalledTimes(1)
    debounce()
    debounce()

    jasmine.clock().tick(150) 
    expect(fn).toHaveBeenCalledTimes(2)
  })
})

describe('Call at first:', function () {
  let fn
  beforeEach(() => {
    jasmine.clock().install();
    fn = jasmine.createSpy('fn')
  })
  
  afterEach(function() {
    jasmine.clock().uninstall()
  })

  it('first', function () {
    const debounce = debounceWrap(fn, { wait: 100, first: true })
    debounce()
    expect(fn).toHaveBeenCalledTimes(1)
    debounce()
    debounce()
    expect(fn).toHaveBeenCalledTimes(1)

    jasmine.clock().tick(100) 
    expect(fn).toHaveBeenCalledTimes(2)
  })
})

describe('Bind this and proxy arguments:', function () {
  let fn
  beforeEach(() => {
    jasmine.clock().install();
    fn = jasmine.createSpy('fn')
  })

  afterEach(function() {
    jasmine.clock().uninstall()
  })

  it('this', function () {
    const fakeContext = {}
    const debounce = debounceWrap(function () { 
      return this 
    }, { first: true })
    const result = debounce.call(fakeContext) === fakeContext
    expect(result).toBe(true)
  })

  it('arguments', function () {
    const debounce = debounceWrap(fn, { wait:20 })
    const a = {}
    debounce(1)
    jasmine.clock().tick(100) 
    expect(fn).toHaveBeenCalledWith(1)
    debounce(1, '2')
    jasmine.clock().tick(100) 
    expect(fn).toHaveBeenCalledWith(1, '2')
    debounce(1, '2', a)
    jasmine.clock().tick(100) 
    expect(fn).toHaveBeenCalledWith(1, '2', a)
  })

})

describe('cancel():', function () {
  let fn
  beforeEach(() => {
    jasmine.clock().install();
    fn = jasmine.createSpy('fn')
  })

  afterEach(function () {
    jasmine.clock().uninstall()
  })

  it('cancel', function () {
    const debounce = debounceWrap(fn, { wait: 20 })
    debounce(1)
    debounce(1)

    debounce.cancel()

    jasmine.clock().tick(100) 
    expect(fn).toHaveBeenCalledTimes(0)

    debounce(1)
    jasmine.clock().tick(100) 
    expect(fn).toHaveBeenCalledTimes(1) 
  })
})
