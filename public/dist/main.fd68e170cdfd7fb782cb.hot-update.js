webpackHotUpdate("main",{

/***/ "./client/src/Header.jsx":
/*!*******************************!*\
  !*** ./client/src/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.css */ \"./client/src/styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_NavBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/NavBar.css */ \"./client/src/styles/NavBar.css\");\n/* harmony import */ var _styles_NavBar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_NavBar_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _PlayButton_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayButton.jsx */ \"./client/src/PlayButton.jsx\");\n/* harmony import */ var _FollowButton_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FollowButton.jsx */ \"./client/src/FollowButton.jsx\");\n/* harmony import */ var _EtcButton_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EtcButton.jsx */ \"./client/src/EtcButton.jsx\");\n/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./About.jsx */ \"./client/src/About.jsx\");\n/* harmony import */ var _NavBar_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavBar.jsx */ \"./client/src/NavBar.jsx\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var artistImages = _ref.artistImages,\n      followersNumber = _ref.followersNumber,\n      artistName = _ref.artistName,\n      handleFollowToggle = _ref.handleFollowToggle; // background styling has to be done in-line.\n\n  var blackBG = {\n    //linear-gradient(transparent, black),\n    background: \"linear-gradient(transparent -30%, rgb(24,24,24)), url(\".concat(artistImages[0], \") no-repeat top\"),\n    backgroundSize: \"cover\"\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar_jsx__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: blackBG,\n    className: _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.artistPortraitBG\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.scrollSectionContainer\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.monthlyListeners\n  }, followersNumber.toLocaleString(\"en\"), \" Followers\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.artistName\n  }, artistName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSection\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlayButton_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FollowButton_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"] // artist={artist}\n  , {\n    handleFollowToggle: handleFollowToggle\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EtcButton_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"] // artist={artist}\n  , {\n    handleFollowToggle: handleFollowToggle\n  })))));\n};\n\nvar _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(Header);\n\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Header, \"Header\", \"/Users/huanl/Desktop/header-lancy/client/src/Header.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/Header.jsx\");\n  leaveModule(module);\n})();\n\n;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Header, \"Header\", \"/Users/huanl/Desktop/header-lancy/client/src/Header.jsx\");\n  reactHotLoader.register(_default, \"_default\", \"/Users/huanl/Desktop/header-lancy/client/src/Header.jsx\");\n  reactHotLoader.register(_default2, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/Header.jsx\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0hlYWRlci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9IZWFkZXIuanN4PzNkNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcbmltcG9ydCBoZWFkZXJTdHlsZSBmcm9tIFwiLi9zdHlsZXMvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IE5hdkJhclN0eWxlIGZyb20gXCIuL3N0eWxlcy9OYXZCYXIuY3NzXCI7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tIFwiLi9QbGF5QnV0dG9uLmpzeFwiO1xuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b24uanN4XCI7XG5pbXBvcnQgRXRjQnV0dG9uIGZyb20gXCIuL0V0Y0J1dHRvbi5qc3hcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9BYm91dC5qc3hcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyLmpzeFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoe1xuICBhcnRpc3RJbWFnZXMsXG4gIGZvbGxvd2Vyc051bWJlcixcbiAgYXJ0aXN0TmFtZSxcbiAgaGFuZGxlRm9sbG93VG9nZ2xlXG59KSA9PiB7XG4gIC8vIGJhY2tncm91bmQgc3R5bGluZyBoYXMgdG8gYmUgZG9uZSBpbi1saW5lLlxuICBjb25zdCBibGFja0JHID0ge1xuICAgIC8vbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCBibGFjayksXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAtMzAlLCByZ2IoMjQsMjQsMjQpKSwgdXJsKCR7XG4gICAgICBhcnRpc3RJbWFnZXNbMF1cbiAgICB9KSBuby1yZXBlYXQgdG9wYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8ZGl2IHN0eWxlPXtibGFja0JHfSBjbGFzc05hbWU9e2hlYWRlclN0eWxlLmFydGlzdFBvcnRyYWl0Qkd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGVyU3R5bGUuc2Nyb2xsU2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtoZWFkZXJTdHlsZS5tb250aGx5TGlzdGVuZXJzfT5cbiAgICAgICAgICAgIHtmb2xsb3dlcnNOdW1iZXIudG9Mb2NhbGVTdHJpbmcoXCJlblwiKX0gRm9sbG93ZXJzXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2hlYWRlclN0eWxlLmFydGlzdE5hbWV9PnthcnRpc3ROYW1lfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hlYWRlclN0eWxlLmJ1dHRvblNlY3Rpb259PlxuICAgICAgICAgICAgPFBsYXlCdXR0b24gLz5cbiAgICAgICAgICAgIDxGb2xsb3dCdXR0b25cbiAgICAgICAgICAgICAgLy8gYXJ0aXN0PXthcnRpc3R9XG4gICAgICAgICAgICAgIGhhbmRsZUZvbGxvd1RvZ2dsZT17aGFuZGxlRm9sbG93VG9nZ2xlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFdGNCdXR0b25cbiAgICAgICAgICAgICAgLy8gYXJ0aXN0PXthcnRpc3R9XG4gICAgICAgICAgICAgIGhhbmRsZUZvbGxvd1RvZ2dsZT17aGFuZGxlRm9sbG93VG9nZ2xlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8QWJvdXQgYXJ0aXN0PXthcnRpc3R9IC8+ICovfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShIZWFkZXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBRkE7QUE5QkE7QUFDQTtBQXlDQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7O0FBMUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/Header.jsx\n");

/***/ })

})