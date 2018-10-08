webpackHotUpdate("main",{

/***/ "./client/src/FollowButton.jsx":
/*!*************************************!*\
  !*** ./client/src/FollowButton.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.css */ \"./client/src/styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n\n\n\n\n\n\nvar FollowBtnClass = function FollowBtnClass(isFollowed) {\n  return classnames__WEBPACK_IMPORTED_MODULE_4___default()(_styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.textButton, _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.follow, _defineProperty({}, _styles_header_css__WEBPACK_IMPORTED_MODULE_3___default.a.followed, isFollowed));\n};\n\nvar FollowButton =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(FollowButton, _Component);\n\n  function FollowButton(props) {\n    var _this;\n\n    _classCallCheck(this, FollowButton);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FollowButton).call(this, props));\n    _this.state = {\n      hover: false\n    };\n    _this.hoverToggle = _this.hoverToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(FollowButton, [{\n    key: \"hoverToggle\",\n    value: function hoverToggle() {\n      this.setState({\n        hover: !this.state.hover\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var BtnTXT = this.props.followed ? this.state.hover ? \"UNFOLLOW\" : \"FOLLOWING\" : \"FOLLOW\";\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: FollowBtnClass(this.props.followed),\n        onClick: this.props.handleFollowToggle,\n        onMouseEnter: this.hoverToggle,\n        onMouseLeave: this.hoverToggle\n      }, BtnTXT);\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return FollowButton;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(FollowButton);\n\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FollowBtnClass, \"FollowBtnClass\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(FollowButton, \"FollowButton\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  leaveModule(module);\n})();\n\n;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_typeof, \"_typeof\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_classCallCheck, \"_classCallCheck\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_defineProperties, \"_defineProperties\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_createClass, \"_createClass\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_possibleConstructorReturn, \"_possibleConstructorReturn\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_getPrototypeOf, \"_getPrototypeOf\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_inherits, \"_inherits\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_setPrototypeOf, \"_setPrototypeOf\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_assertThisInitialized, \"_assertThisInitialized\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_defineProperty, \"_defineProperty\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(FollowBtnClass, \"FollowBtnClass\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(FollowButton, \"FollowButton\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_default, \"_default\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  reactHotLoader.register(_default2, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/FollowButton.jsx\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0ZvbGxvd0J1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9Gb2xsb3dCdXR0b24uanN4P2JhMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcbmltcG9ydCBoZWFkZXJTdHlsZSBmcm9tIFwiLi9zdHlsZXMvaGVhZGVyLmNzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgRm9sbG93QnRuQ2xhc3MgPSBpc0ZvbGxvd2VkID0+XG4gIGNsYXNzTmFtZXMoaGVhZGVyU3R5bGUudGV4dEJ1dHRvbiwgaGVhZGVyU3R5bGUuZm9sbG93LCB7XG4gICAgW2hlYWRlclN0eWxlLmZvbGxvd2VkXTogaXNGb2xsb3dlZFxuICB9KTtcblxuY2xhc3MgRm9sbG93QnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5ob3ZlclRvZ2dsZSA9IHRoaXMuaG92ZXJUb2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhvdmVyVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgQnRuVFhUID0gdGhpcy5wcm9wcy5mb2xsb3dlZFxuICAgICAgPyB0aGlzLnN0YXRlLmhvdmVyXG4gICAgICAgID8gXCJVTkZPTExPV1wiXG4gICAgICAgIDogXCJGT0xMT1dJTkdcIlxuICAgICAgOiBcIkZPTExPV1wiO1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Rm9sbG93QnRuQ2xhc3ModGhpcy5wcm9wcy5mb2xsb3dlZCl9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlRm9sbG93VG9nZ2xlfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaG92ZXJUb2dnbGV9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5ob3ZlclRvZ2dsZX1cbiAgICAgID5cbiAgICAgICAge0J0blRYVH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoRm9sbG93QnV0dG9uKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBOzs7Ozs7Ozs7OztBQS9CQTtBQUNBO0FBaUNBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUF2Q0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEE7QUFLQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/FollowButton.jsx\n");

/***/ })

})