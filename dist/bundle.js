/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return require(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open 'H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\css-loader\\lib\\css-base.js'\n    at runLoaders (H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\webpack\\lib\\NormalModule.js:192:19)\n    at H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\loader-runner\\lib\\LoaderRunner.js:200:19\n    at H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:62:14\n    at _combinedTickCallback (internal/process/next_tick.js:67:7)\n    at process._tickCallback (internal/process/next_tick.js:98:9)");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open 'H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\css-loader\\lib\\css-base.js'\n    at runLoaders (H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\webpack\\lib\\NormalModule.js:192:19)\n    at H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\loader-runner\\lib\\LoaderRunner.js:200:19\n    at H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:62:14\n    at _combinedTickCallback (internal/process/next_tick.js:67:7)\n    at process._tickCallback (internal/process/next_tick.js:98:9)");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\showdown\\dist\\showdown.min.js'");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'H:\\常用组件函数\\Project_Pritect\\myfirstchrome\\node_modules\\vue\\dist\\vue.min.js'");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"bounce": "@keyframes bounce { gs sp from, 20%, 53%, 80%, to {gs sp2 animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); gs sp2 transform: translate3d(0,0,0); gs sp } gs sp 40%, 43% { gs sp2 animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);gs sp2 transform: translate3d(0, -30px, 0);gs sp } gs sp 70% {gs sp2 animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);gs sp2 transform: translate3d(0, -15px, 0);gs sp } gs sp 90% { gs sp transform: translate3d(0,-4px,0);}gs}gs",
	"flash": "@keyframes flash { gs sp from, 50%, to { gs sp2 opacity: 1;gs sp }gs sp 25%, 75% { gs sp2 opacity: 0;gs sp } gs } gs",
	"pulse": "@keyframes pulse { gs sp from { gs sp2 transform: scale3d(1, 1, 1);gs sp } gs sp 50% { gs sp2 transform: scale3d(1.05, 1.05, 1.05); gs sp } gs sp to { gs sp2 transform: scale3d(1, 1, 1); gs sp } gs } gs",
	"rubberBand": "@keyframes rubberBand { gs sp from { gs sp2 transform: scale3d(1, 1, 1); gs sp } gs sp 30% { gs sp2 transform: scale3d(1.25, 0.75, 1); gs sp } gs sp 40% { gs sp2 transform: scale3d(0.75, 1.25, 1); gs sp } gs sp 50% { gs sp2 transform: scale3d(1.15, 0.85, 1); gs sp } gs sp 65% { gs sp2 transform: scale3d(.95, 1.05, 1); gs sp } gs sp 75% { gs sp2 transform: scale3d(1.05, .95, 1); gs sp } gs sp to { gs sp2 transform: scale3d(1, 1, 1); gs sp } gs } gs",
	"shake": "@keyframes shake { gs sp from, to { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs sp 10%, 30%, 50%, 70%, 90% { gs sp2 transform: translate3d(-10px, 0, 0); gs sp } gs sp 20%, 40%, 60%, 80% { gs sp2 transform: translate3d(10px, 0, 0); gs sp } gs } gs",
	"headShake": "@keyframes headShake { gs sp 0% { gs sp2 transform: translateX(0); gs sp } gs sp 6.5% { gs sp2 transform: translateX(-6px) rotateY(-9deg); gs sp } gs sp 18.5% { gs sp2 transform: translateX(5px) rotateY(7deg); gs sp } gs sp 31.5% { gs sp2 transform: translateX(-3px) rotateY(-5deg); gs sp } gs sp 43.5% { gs sp2 transform: translateX(2px) rotateY(3deg); gs sp } gs sp 50% { gs sp2 transform: translateX(0); gs sp } gs } gs",
	"swing": "@keyframes swing { gs sp 20% { gs sp2 transform: rotate3d(0, 0, 1, 15deg); gs sp } gs sp 40% { gs sp2 transform: rotate3d(0, 0, 1, -10deg); gs sp } gs sp 60% { gs sp2 transform: rotate3d(0, 0, 1, 5deg); gs sp } gs sp 80% { gs sp2 transform: rotate3d(0, 0, 1, -5deg); gs sp } gs sp to { gs sp2 transform: rotate3d(0, 0, 1, 0deg); gs sp } gs } gs",
	"tada": "@keyframes tada { gs sp from { gs sp2 transform: scale3d(1, 1, 1); gs sp } gs sp 10%, 20% { gs sp2 transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg); gs sp } gs sp 30%, 50%, 70%, 90% { gs sp2 transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); gs sp } gs sp 40%, 60%, 80% { gs sp2 transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); gs sp } gs sp to { gs sp2 transform: scale3d(1, 1, 1); gs sp } gs } gs",
	"wobble": "@keyframes wobble { gs sp from { gs sp2 transform: none; gs sp } gs sp 15% { gs sp transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); gs sp } gs sp 30% { gs sp2 transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); gs sp } gs sp 45% { gs sp2 transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); gs sp } gs sp 60% { gs sp2 transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); gs sp } gs sp 75% { gs sp2 transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); gs sp } gs sp to { gs sp2 transform: none; gs sp  } gs } gs",
	"jello": "@keyframes jello { gs sp from, 11.1%, to { gs sp2 transform: none; gs sp } gs sp 22.2% { gs sp2 transform: skewX(-12.5deg) skewY(-12.5deg); gs sp } gs sp 33.3% { gs sp2 transform: skewX(6.25deg) skewY(6.25deg); gs sp } gs sp 44.4% { gs sp2 transform: skewX(-3.125deg) skewY(-3.125deg); gs sp } gs sp 55.5% { gs sp2 transform: skewX(1.5625deg) skewY(1.5625deg); gs sp } gs sp 66.6% { gs sp2 transform: skewX(-0.78125deg) skewY(-0.78125deg); gs sp } gs sp 77.7% { gs sp2 transform: skewX(0.390625deg) skewY(0.390625deg); gs sp } gs  } gs",
	"bounceIn": "@keyframes bounceIn { gs sp from, 20%, 40%, 60%, 80%, to { gs sp2 animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); gs sp } gs sp 0% { gs sp2 opacity: 0; gs sp2 transform: scale3d(.3, .3, .3); gs sp } gs sp 20% { gs sp2 transform: scale3d(1.1, 1.1, 1.1); gs sp } gs sp 40% { gs sp2 transform: scale3d(.9, .9, .9); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: scale3d(1.03, 1.03, 1.03); gs sp } gs sp 80% { gs sp2 transform: scale3d(.97, .97, .97); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: scale3d(1, 1, 1); gs sp } gs } gs",
	"bounceInDown": "@keyframes bounceInDown { gs sp from, 60%, 75%, 90%, to { gs sp2 animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); gs sp  } gs sp 0% { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, -3000px, 0); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: translate3d(0, 25px, 0); gs sp } gs sp 75% { gs sp2 transform: translate3d(0, -10px, 0); gs sp } gs sp 90% { gs sp2 transform: translate3d(0, 5px, 0); gs sp } gs sp to { gs sp2 transform: none; gs sp } gs } gs",
	"bounceInLeft": "@keyframes bounceInLeft { gs sp from, 60%, 75%, 90%, to { gs sp2 animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); gs sp } gs sp 0% { gs sp2 opacity: 0; gs sp2 transform: translate3d(-3000px, 0, 0); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: translate3d(25px, 0, 0); gs sp2 } gs sp 75% { gs sp2 transform: translate3d(-10px, 0, 0); gs sp2 } gs sp 90% { gs sp2 transform: translate3d(5px, 0, 0); gs sp2 } gs sp to { gs sp2 transform: none; gs sp } gs } gs",
	"bounceInRight": "@keyframes bounceInRight { gs sp from, 60%, 75%, 90%, to { gs sp2 animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); gs sp } gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(3000px, 0, 0); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: translate3d(-25px, 0, 0); gs sp } gs sp 75% { gs sp2 transform: translate3d(10px, 0, 0); gs sp } gs sp 90% { gs sp2 transform: translate3d(-5px, 0, 0); gs sp } gs sp to { gs sp2 transform: none; gs sp } gs } gs",
	"bounceInUp": "@keyframes bounceInUp { gs sp from, 60%, 75%, 90%, to { gs sp2 animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); gs sp } gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, 3000px, 0); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: translate3d(0, -20px, 0); gs sp } gs sp 75% { gs sp2 transform: translate3d(0, 10px, 0); gs sp } gs sp 90% { gs sp2 transform: translate3d(0, -5px, 0); gs sp} gs sp to { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs } gs",
	"bounceOut": "@keyframes bounceOut { gs sp 20% { gs sp2 transform: scale3d(.9, .9, .9); gs sp } gs sp 50%, 55% { gs sp2 opacity: 1; gs sp2 transform: scale3d(1.1, 1.1, 1.1); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: scale3d(.3, .3, .3); gs sp } gs } gs",
	"bounceOutDown": "@keyframes bounceOutDown { gs sp 20% { gs sp2 transform: translate3d(0, 10px, 0); gs sp } gs sp 40%, 45% { gs sp2 opacity: 1; gs sp2 transform: translate3d(0, -20px, 0); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, 200%, 0); gs sp } gs } gs",
	"bounceOutLeft": "@keyframes bounceOutLeft { gs sp 20% { gs sp2 opacity: 1; gs sp2 transform: translate3d(20px, 0, 0); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(-2000px, 0, 0); gs sp } gs } gs",
	"bounceOutRight": "@keyframes bounceOutRight { gs sp 20% { gs sp2 opacity: 1; gs sp2 transform: translate3d(-20px, 0, 0); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(2000px, 0, 0); gs sp } gs } gs",
	"bounceOutUp": "@keyframes bounceOutUp { gs sp 20% { gs sp2 transform: translate3d(0, -10px, 0); gs sp } gs sp 40%, 45% { gs sp2 opacity: 1; gs sp2 transform: translate3d(0, 20px, 0); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, -2000px, 0); gs sp } gs } gs",
	"fadeIn": "@keyframes fadeIn { gs sp from { gs sp2 opacity: 0; gs sp } gs sp to { gs sp2 opacity: 1; gs sp } gs } gs",
	"fadeInDown": "@keyframes fadeInDown { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, -100%, 0); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeInDownBig": "@keyframes fadeInDownBig { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, -2000px, 0); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeInLeft": "@keyframes fadeInLeft { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(-100%, 0, 0); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeInLeftBig": "@keyframes fadeInLeftBig { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(-2000px, 0, 0); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeInRight": "@keyframes fadeInRight { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(100%, 0, 0); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeInRightBig": "@keyframes fadeInRightBig { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(2000px, 0, 0); gs sp } gs sp  to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeInUp": "@keyframes fadeInUp { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, 100%, 0); gs sp } gs sp  to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeInUpBig": "@keyframes fadeInUpBig { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, 2000px, 0); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"fadeOut": "@keyframes fadeOut { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp } gs } gs",
	"fadeOutDown": "@keyframes fadeOutDown { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp transform: translate3d(0, 100%, 0); gs sp } gs } gs",
	"fadeOutDownBig": "@keyframes fadeOutDownBig { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, 2000px, 0); gs sp } gs } gs",
	"fadeOutLeft": "@keyframes fadeOutLeft { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(-100%, 0, 0); gs sp } gs } gs",
	"fadeOutLeftBig": "@keyframes fadeOutLeftBig { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(-2000px, 0, 0); gs sp } gs } gs",
	"fadeOutRight": "@keyframes fadeOutRight { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(100%, 0, 0); gs sp } gs } gs",
	"fadeOutRightBig": "@keyframes fadeOutRightBig { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(2000px, 0, 0); gs sp } gs } gs",
	"fadeOutUp": "@keyframes fadeOutUp { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, -100%, 0); gs sp } gs } gs",
	"fadeOutUpBig": "@keyframes fadeOutUpBig { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(0, -2000px, 0); gs sp } gs } gs",
	"flip": "@keyframes flip { gs sp from { gs sp2 transform: perspective(400px) rotate3d(0, 1, 0, -360deg); gs sp2 animation-timing-function: ease-out; gs sp } gs sp 40% { gs sp2 transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg); gs sp2 animation-timing-function: ease-out; gs sp } gs sp 50% { gs sp2 transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg); gs sp2 animation-timing-function: ease-in; gs sp } gs sp 80% { gs sp2 transform: perspective(400px) scale3d(.95, .95, .95); gs sp2 animation-timing-function: ease-in; gs sp } gs sp to { gs sp2 transform: perspective(400px); gs sp2 animation-timing-function: ease-in; gs sp } gs } gs",
	"flipInX": "@keyframes flipInX { gs sp from { gs sp2 transform: perspective(400px) rotate3d(1, 0, 0, 90deg); gs sp2 animation-timing-function: ease-in; gs sp2 opacity: 0; gs sp } gs sp 40% { gs sp2 transform: perspective(400px) rotate3d(1, 0, 0, -20deg); gs sp2 animation-timing-function: ease-in; gs sp 60% { gs sp2 transform: perspective(400px) rotate3d(1, 0, 0, 10deg); gs sp2 opacity: 1; gs sp } gs sp 80% { gs sp2 transform: perspective(400px) rotate3d(1, 0, 0, -5deg); gs sp } gs sp to { gs sp2 transform: perspective(400px); gs sp } gs } gs",
	"flipInY": "@keyframes flipInY { gs sp from { gs sp2 transform: perspective(400px) rotate3d(0, 1, 0, 90deg); gs sp2 animation-timing-function: ease-in; gs sp2 opacity: 0; gs sp } gs sp 40% { gs sp2 transform: perspective(400px) rotate3d(0, 1, 0, -20deg); gs sp2 animation-timing-function: ease-in; gs sp } gs sp 60% { gs sp2 transform: perspective(400px) rotate3d(0, 1, 0, 10deg); gs sp2 opacity: 1; gs sp } gs sp 80% { gs sp2 transform: perspective(400px) rotate3d(0, 1, 0, -5deg); gs sp } gs sp to { gs sp2 transform: perspective(400px); gs sp } gs } gs",
	"flipOutX": "@keyframes flipOutX { gs sp from { gs sp2 transform: perspective(400px); gs sp } gs sp 30% { gs sp2 transform: perspective(400px) rotate3d(1, 0, 0, -20deg); gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform: perspective(400px) rotate3d(1, 0, 0, 90deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"flipOutY": "@keyframes flipOutY { gs sp from { gs sp2 transform: perspective(400px); gs sp } gs sp 30% { gs sp2 transform: perspective(400px) rotate3d(0, 1, 0, -15deg); gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform: perspective(400px) rotate3d(0, 1, 0, 90deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"lightSpeedIn": "@keyframes lightSpeedIn { gs sp from { gs sp2 transform: translate3d(100%, 0, 0) skewX(-30deg); gs sp2 opacity: 0; gs sp } gs sp 60% { gs sp2 transform: skewX(20deg); gs sp2 opacity: 1; gs sp } gs sp 80% { gs sp2 transform: skewX(-5deg); gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform: none; gs sp2 opacity: 1; gs sp } gs } gs",
	"lightSpeedOut": "@keyframes lightSpeedOut { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform: translate3d(100%, 0, 0) skewX(30deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"rotateIn": "@keyframes rotateIn { gs sp from { gs sp2 transform-origin: center; gs sp2 transform: rotate3d(0, 0, 1, -200deg); gs sp2 opacity: 0; gs sp } gs sp to { gs sp2 transform-origin: center; gs sp2 transform: none; gs sp2 opacity: 1; gs sp } gs } gs",
	"rotateInDownLeft": "@keyframes rotateInDownLeft { gs sp from { gs sp2 transform-origin: left bottom; gs sp2 transform: rotate3d(0, 0, 1, -45deg); gs sp2 opacity: 0; gs sp } gs sp to { gs sp2 transform-origin: left bottom; gs sp2 transform: none; gs sp2 opacity: 1; gs sp } gs } gs",
	"rotateInDownRight": "@keyframes rotateInDownRight { gs sp from { gs sp2 transform-origin: right bottom; gs sp2 transform: rotate3d(0, 0, 1, 45deg); gs sp2 opacity: 0; gs sp } gs sp to { gs sp2 transform-origin: right bottom; gs sp2 transform: none; gs sp2 opacity: 1; gs sp } gs } gs",
	"rotateInUpLeft": "@keyframes rotateInUpLeft { gs sp from { gs sp2 transform-origin: left bottom; gs sp2 transform: rotate3d(0, 0, 1, 45deg); gs sp2 opacity: 0; gs sp } gs sp to { gs sp2 transform-origin: left bottom; gs sp2 transform: none; gs sp2 opacity: 1; gs sp } gs } gs",
	"rotateInUpRight": "@keyframes rotateInUpRight { gs sp from { gs sp2 transform-origin: right bottom; gs sp2 transform: rotate3d(0, 0, 1, -90deg); gs sp2 opacity: 0; gs sp } gs sp to { gs sp2 transform-origin: right bottom; gs sp2 transform: none; gs sp2 opacity: 1; gs sp } gs } gs",
	"rotateOut": "@keyframes rotateOut { gs sp from { gs sp2 transform-origin: center; gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform-origin: center; gs sp2 transform: rotate3d(0, 0, 1, 200deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"rotateOutDownLeft": "@keyframes rotateOutDownLeft { gs sp from { gs sp2 transform-origin: left bottom; gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform-origin: left bottom; gs sp2 transform: rotate3d(0, 0, 1, 45deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"rotateOutDownRight": "@keyframes rotateOutDownRight { gs sp from { gs sp2 transform-origin: right bottom; gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform-origin: right bottom; gs sp2 transform: rotate3d(0, 0, 1, -45deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"rotateOutUpLeft": "@keyframes rotateOutUpLeft { gs sp from { gs sp2 transform-origin: left bottom; gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform-origin: left bottom; gs sp2 transform: rotate3d(0, 0, 1, -45deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"rotateOutUpRight": "@keyframes rotateOutUpRight { gs sp from { gs sp2 transform-origin: right bottom; gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform-origin: right bottom; gs sp2 transform: rotate3d(0, 0, 1, 90deg); gs sp2 opacity: 0; gs sp } gs } gs",
	"hinge": "@keyframes hinge { gs sp 0% { gs sp2 transform-origin: top left; gs sp2 animation-timing-function: ease-in-out; gs sp } gs sp 20%, 60% { gs sp2 transform: rotate3d(0, 0, 1, 80deg); gs sp2 transform-origin: top left; gs sp2 animation-timing-function: ease-in-out; gs sp } gs sp 40%, 80% { gs sp2 transform: rotate3d(0, 0, 1, 60deg); gs sp2 transform-origin: top left; gs sp2 animation-timing-function: ease-in-out; gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 transform: translate3d(0, 700px, 0); gs sp2 opacity: 0; gs sp } gs } gs",
	"rollIn": "@keyframes rollIn { gs sp from { gs sp2 opacity: 0; gs sp2 transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); gs sp } gs sp to { gs sp2 opacity: 1; gs sp2 transform: none; gs sp } gs } gs",
	"rollOut": "@keyframes rollOut { gs sp from { gs sp2 opacity: 1; gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); gs sp } gs } gs",
	"zoomIn": " @keyframes zoomIn { gs sp from { gs sp2 opacity: 0; gs sp2 transform: scale3d(.3, .3, .3); gs sp } gs sp 50% { gs sp2 opacity: 1; gs sp } gs } gs",
	"zoomInDown": "@keyframes zoomInDown { gs sp from { gs sp2 opacity: 0; gs sp2 transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0); gs sp2 animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0); gs sp2 animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); gs sp } gs } gs",
	"zoomInLeft": "@keyframes zoomInLeft { gs sp from { gs sp2 opacity: 0; gs sp2 transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0); gs sp2 animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0); gs sp2 animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); gs sp } gs } gs",
	"zoomInRight": "@keyframes zoomInRight { gs sp from { gs sp2 opacity: 0; gs sp2 transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0); gs sp2 animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0); gs sp2 animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); gs sp } gs } gs",
	"zoomInUp": "@keyframes zoomInUp { gs sp from { gs sp2 opacity: 0; gs sp2 transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0); gs sp2 animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); gs sp } gs sp 60% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0); gs sp2 animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); gs sp } gs } gs",
	"zoomOut": "@keyframes zoomOut { gs sp from { gs sp2 opacity: 1; gs sp } gs sp 50% { gs sp2 opacity: 0; gs sp2 transform: scale3d(.3, .3, .3); gs sp } gs sp to { gs sp2 opacity: 0; gs sp } gs } gs",
	"zoomOutDown": "@keyframes zoomOutDown { gs sp 40% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0); gs sp2 animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0); gs sp2 transform-origin: center bottom; gs sp2 animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); gs sp } gs } gs",
	"zoomOutLeft": "@keyframes zoomOutLeft { gs sp 40% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: scale(.1) translate3d(-2000px, 0, 0); gs sp2 transform-origin: left center; gs sp } gs } gs",
	"zoomOutRight": "@keyframes zoomOutRight { gs sp 40% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: scale(.1) translate3d(2000px, 0, 0); gs sp  gs sp2 transform-origin: right center; gs sp } gs } gs",
	"zoomOutUp": "@keyframes zoomOutUp { gs sp 40% { gs sp2 opacity: 1; gs sp2 transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0); gs sp2 animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); gs sp } gs sp to { gs sp2 opacity: 0; gs sp2 transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0); gs sp2 transform-origin: center bottom; gs sp2 animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); gs sp } gs } gs",
	"slideInDown": "@keyframes slideInDown { gs sp from { gs sp2 transform: translate3d(0, -100%, 0); gs sp2 visibility: visible; gs sp } gs sp to { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs } gs",
	"slideInLeft": "@keyframes slideInLeft { gs sp from { gs sp2 transform: translate3d(-100%, 0, 0); gs sp2 visibility: visible; gs sp } gs sp to { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs } gs",
	"slideInRight": "@keyframes slideInRight { gs sp from { gs sp2 transform: translate3d(100%, 0, 0); gs sp2 visibility: visible; gs sp } gs sp to { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs } gs",
	"slideInUp": "@keyframes slideInUp { gs sp from { gs sp2 transform: translate3d(0, 100%, 0); gs sp2 visibility: visible; gs sp } gs sp to { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs } gs",
	"slideOutDown": "@keyframes slideOutDown { gs sp from { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs sp to { gs sp2 visibility: hidden; gs sp2 transform: translate3d(0, 100%, 0); gs sp } gs } gs",
	"slideOutLeft": "@keyframes slideOutLeft { gs sp from { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs sp to { gs sp2 visibility: hidden; gs sp2 transform: translate3d(-100%, 0, 0); gs sp } gs } gs",
	"slideOutRight": "@keyframes slideOutRight { gs sp from { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs sp to { gs sp2 visibility: hidden; gs sp2 transform: translate3d(100%, 0, 0); gs sp } gs } gs",
	"slideOutUp": "@keyframes slideOutUp { gs sp from { gs sp2 transform: translate3d(0, 0, 0); gs sp } gs sp to { gs sp2 visibility: hidden; gs sp2 transform: translate3d(0, -100%, 0); gs sp } gs } gs"
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(1);

var _vueMin = __webpack_require__(4);

var _vueMin2 = _interopRequireDefault(_vueMin);

var _showdownMin = __webpack_require__(3);

var _showdownMin2 = _interopRequireDefault(_showdownMin);

var _clipboardMin = __webpack_require__(0);

var _clipboardMin2 = _interopRequireDefault(_clipboardMin);

var _info = __webpack_require__(5);

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vueMin2.default({
    el: "#app-prev-css",
    data: function data() {
        return {
            selected: 'bounce',
            activeClass: 'animated',
            errorClass: 'bounce',
            isShow: false,
            options: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'hinge', 'rollIn', 'rollOut']
        };
    },

    methods: {
        copyTips: function copyTips() {
            var that = this;
            this.isShow = true;
            setTimeout(function () {
                that.isShow = false;
            }, 1000);
        }
    },
    computed: {
        cssText: function cssText() {
            this.errorClass = this.selected;

            var converter = new _showdownMin2.default.Converter({
                tables: true
            });

            var baseData = _info2.default[this.selected];
            baseData = converter.makeHtml(baseData);

            baseData = baseData.replace(/(.*?)gs/g, "<div>$1</div>");
            baseData = baseData.replace(/<p>|<\/p>/g, "");
            baseData = baseData.replace(/\b(sp)\b/g, "<span class='space'></span>");
            baseData = baseData.replace(/\b(sp2)\b/g, "<span class='space2'></span>");

            return baseData;
        }
    },
    mounted: function mounted() {
        this.$nextTick(function () {
            new _clipboardMin2.default('.copy-btn');
        });
    }
});

/***/ })
/******/ ]);