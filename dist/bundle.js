(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var bar = {
	saySomething: function (msg) {
		return msg;
	}	
};

module.exports = bar;
},{}],2:[function(require,module,exports){
var foo = require('./foo.js'),
	bar = require('./bar.js');

console.log(foo.doSomething());
console.log(bar.saySomething('Hello dude!'));
},{"./bar.js":1,"./foo.js":3}],3:[function(require,module,exports){
var foo = {
	doSomething: function () {
		return "Something is done!";
	}
}

module.exports = foo;
},{}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFx4YW1wcFxcaHRkb2NzXFxicm93c2VyaWZ5MDFcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsImM6L3hhbXBwL2h0ZG9jcy9icm93c2VyaWZ5MDEvanMvYmFyLmpzIiwiYzoveGFtcHAvaHRkb2NzL2Jyb3dzZXJpZnkwMS9qcy9mYWtlX2E5NmVkN2IuanMiLCJjOi94YW1wcC9odGRvY3MvYnJvd3NlcmlmeTAxL2pzL2Zvby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJhciA9IHtcclxuXHRzYXlTb21ldGhpbmc6IGZ1bmN0aW9uIChtc2cpIHtcclxuXHRcdHJldHVybiBtc2c7XHJcblx0fVx0XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhcjsiLCJ2YXIgZm9vID0gcmVxdWlyZSgnLi9mb28uanMnKSxcclxuXHRiYXIgPSByZXF1aXJlKCcuL2Jhci5qcycpO1xyXG5cclxuY29uc29sZS5sb2coZm9vLmRvU29tZXRoaW5nKCkpO1xyXG5jb25zb2xlLmxvZyhiYXIuc2F5U29tZXRoaW5nKCdIZWxsbyBkdWRlIScpKTsiLCJ2YXIgZm9vID0ge1xyXG5cdGRvU29tZXRoaW5nOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gXCJTb21ldGhpbmcgaXMgZG9uZSFcIjtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZm9vOyJdfQ==
