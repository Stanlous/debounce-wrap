# debounce-wrap 
[![Build Status](https://www.travis-ci.org/Stanlous/debounce-wrap.svg?branch=master)](https://www.travis-ci.org/Stanlous/debounce-wrap)  
  
Wrap function into a debounce function.

# Install
```sh
$ npm install debounce-wrap --save
```

# Usage

**debounce:**
```js
const debounceWrap = require('debounce-wrap')
const debounce = debounceWrap(input, { wait: 100 })

function input(a) {
  console.log(a)
}

debounce('hi') 
debounce('hi') 
// log 'hi' once after 100ms.
```
**excute immediately, then debounce:**
```js
const debounceWrap = require('debounce-wrap')
const debounce = debounceWrap(input, { wait: 100, first: true })

function input(a) {
  console.log(a)
}

debounce('hi') // log 'hi' immediately, no delay.
debounce('hi2') // log 'hi2' after 100ms.
```
**bind this:**
```js
const debounceWrap = require('debounce-wrap')
const debounce = debounceWrap(function () {
  console.log(this === window)
}, { wait: 100 })

window.onresize = debounce

// log 'true' when resizing the window
```
**cancel debounce:**
```js
const debounceWrap = require('debounce-wrap')
const debounce = debounceWrap(input, { wait: 100 })

function input(a) {
  console.log(a)
}

debounce('hi')
debounce('hi2')

debounce.cancel() // cancel `debounce('hi2')`, no log.

setTimeout(function () {
  debounce('hi3') // log 'hi3' after 100ms
}, 300)
```

# API

# License
MIT 