webpackHotUpdate("main",{

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.jsx */ \"./client/src/Header.jsx\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n\n\n\n\n //[TBD] Adjust this function, to get numbers in less than 1000 for example\n// Newly added: get random integer between 2 numbers (e.g. 1 and 100K)\n// Note: inclusive for both numbers\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max + 1);\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\nvar getArtistInfo = function getArtistInfo(id, callback) {\n  // let id = getRandomInt(1, 100000);\n  axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/artists/\".concat(id)).then(function (response) {\n    callback(response.data); //data\n  }).catch(function (error) {\n    console.error(error);\n  });\n};\n\nvar getLocationsInfo = function getLocationsInfo(callback) {\n  axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/locations/\".concat(id)).then(function (response) {\n    callback(response.data);\n  }).catch(function (error) {\n    console.error(error);\n  });\n};\n\nvar blackBG = {\n  backgroundColor: \"#191414\"\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n    _this.state = {\n      // artistDisp: null\n      artistID: null,\n      artistName: null,\n      followed: null,\n      followersNumber: null,\n      verified: null,\n      Biography: null,\n      artistImages: [],\n      locations: {} // From table 2, locations\n\n    };\n    _this.handleFollowToggle = _this.handleFollowToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var id = getRandomInt(1, 100000);\n      var context = this; // Newly added\n\n      getArtistInfo(id, function (data) {\n        var artistImagesStr = data.artistImages.slice(1, data.artistImages.length - 1); // this.setState({ artistDisp: data });\n\n        context.setState({\n          artistID: data.artistID,\n          artistName: data.artistName,\n          followed: data.followed,\n          followersNumber: data.followersNumber,\n          verified: data.verified,\n          Biography: data.Biography,\n          // Convert from string to array\n          artistImages: data.artistImages // artistImages: data.artistImages.slice(1, data.artistImages.length - 1)\n          // artistImages: data.artistImagesStr.split(\",\")\n\n        });\n      });\n    }\n  }, {\n    key: \"handleFollowToggle\",\n    value: function handleFollowToggle(event) {\n      event.preventDefault(); // console.log('###FOLLOW CLICK###');\n\n      this.setState(function (prevState) {\n        // NOTE: trick when you want to update a part of an object\n        return {\n          artistDisp: _objectSpread({}, prevState.artistDisp, {\n            followed: !prevState.artistDisp.followed\n          })\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var toRender = !!this.state.artistID ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        artistName: this.state.artistName,\n        artistImages: this.state.artistImages,\n        followersNumber: this.state.followersNumber,\n        handleFollowToggle: this.handleFollowToggle\n      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"placeHolder\"\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, toRender);\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(App);\n\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getRandomInt, \"getRandomInt\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getArtistInfo, \"getArtistInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getLocationsInfo, \"getLocationsInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(blackBG, \"blackBG\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(App, \"App\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  leaveModule(module);\n})();\n\n;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_typeof, \"_typeof\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_objectSpread, \"_objectSpread\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_defineProperty, \"_defineProperty\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_classCallCheck, \"_classCallCheck\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_defineProperties, \"_defineProperties\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_createClass, \"_createClass\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_possibleConstructorReturn, \"_possibleConstructorReturn\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_getPrototypeOf, \"_getPrototypeOf\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_inherits, \"_inherits\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_setPrototypeOf, \"_setPrototypeOf\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_assertThisInitialized, \"_assertThisInitialized\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getRandomInt, \"getRandomInt\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getArtistInfo, \"getArtistInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getLocationsInfo, \"getLocationsInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(blackBG, \"blackBG\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(App, \"App\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_default, \"_default\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_default2, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9hcHAuanN4PzFhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyLmpzeFwiO1xuXG4vL1tUQkRdIEFkanVzdCB0aGlzIGZ1bmN0aW9uLCB0byBnZXQgbnVtYmVycyBpbiBsZXNzIHRoYW4gMTAwMCBmb3IgZXhhbXBsZVxuLy8gTmV3bHkgYWRkZWQ6IGdldCByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDIgbnVtYmVycyAoZS5nLiAxIGFuZCAxMDBLKVxuLy8gTm90ZTogaW5jbHVzaXZlIGZvciBib3RoIG51bWJlcnNcbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXggKyAxKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuY29uc3QgZ2V0QXJ0aXN0SW5mbyA9IGZ1bmN0aW9uKGlkLCBjYWxsYmFjaykge1xuICAvLyBsZXQgaWQgPSBnZXRSYW5kb21JbnQoMSwgMTAwMDAwKTtcbiAgYXhpb3NcbiAgICAuZ2V0KGAvYXJ0aXN0cy8ke2lkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7IC8vZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufTtcbmNvbnN0IGdldExvY2F0aW9uc0luZm8gPSBjYWxsYmFjayA9PiB7XG4gIGF4aW9zXG4gICAgLmdldChgL2xvY2F0aW9ucy8ke2lkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59O1xuXG5jb25zdCBibGFja0JHID0geyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE5MTQxNFwiIH07XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGFydGlzdERpc3A6IG51bGxcbiAgICAgIGFydGlzdElEOiBudWxsLFxuICAgICAgYXJ0aXN0TmFtZTogbnVsbCxcbiAgICAgIGZvbGxvd2VkOiBudWxsLFxuICAgICAgZm9sbG93ZXJzTnVtYmVyOiBudWxsLFxuICAgICAgdmVyaWZpZWQ6IG51bGwsXG4gICAgICBCaW9ncmFwaHk6IG51bGwsXG4gICAgICBhcnRpc3RJbWFnZXM6IFtdLFxuICAgICAgbG9jYXRpb25zOiB7fSAvLyBGcm9tIHRhYmxlIDIsIGxvY2F0aW9uc1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb2xsb3dUb2dnbGUgPSB0aGlzLmhhbmRsZUZvbGxvd1RvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGlkID0gZ2V0UmFuZG9tSW50KDEsIDEwMDAwMCk7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzOyAvLyBOZXdseSBhZGRlZFxuICAgIGdldEFydGlzdEluZm8oaWQsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGxldCBhcnRpc3RJbWFnZXNTdHIgPSBkYXRhLmFydGlzdEltYWdlcy5zbGljZShcbiAgICAgICAgMSxcbiAgICAgICAgZGF0YS5hcnRpc3RJbWFnZXMubGVuZ3RoIC0gMVxuICAgICAgKTtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBhcnRpc3REaXNwOiBkYXRhIH0pO1xuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgIGFydGlzdElEOiBkYXRhLmFydGlzdElELFxuICAgICAgICBhcnRpc3ROYW1lOiBkYXRhLmFydGlzdE5hbWUsXG4gICAgICAgIGZvbGxvd2VkOiBkYXRhLmZvbGxvd2VkLFxuICAgICAgICBmb2xsb3dlcnNOdW1iZXI6IGRhdGEuZm9sbG93ZXJzTnVtYmVyLFxuICAgICAgICB2ZXJpZmllZDogZGF0YS52ZXJpZmllZCxcbiAgICAgICAgQmlvZ3JhcGh5OiBkYXRhLkJpb2dyYXBoeSxcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBhcnJheVxuICAgICAgICBhcnRpc3RJbWFnZXM6IGRhdGEuYXJ0aXN0SW1hZ2VzXG4gICAgICAgIC8vIGFydGlzdEltYWdlczogZGF0YS5hcnRpc3RJbWFnZXMuc2xpY2UoMSwgZGF0YS5hcnRpc3RJbWFnZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgLy8gYXJ0aXN0SW1hZ2VzOiBkYXRhLmFydGlzdEltYWdlc1N0ci5zcGxpdChcIixcIilcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRm9sbG93VG9nZ2xlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnIyMjRk9MTE9XIENMSUNLIyMjJyk7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgLy8gTk9URTogdHJpY2sgd2hlbiB5b3Ugd2FudCB0byB1cGRhdGUgYSBwYXJ0IG9mIGFuIG9iamVjdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXJ0aXN0RGlzcDoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5hcnRpc3REaXNwLFxuICAgICAgICAgIGZvbGxvd2VkOiAhcHJldlN0YXRlLmFydGlzdERpc3AuZm9sbG93ZWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b1JlbmRlciA9ICEhdGhpcy5zdGF0ZS5hcnRpc3RJRCA/IChcbiAgICAgIDxIZWFkZXJcbiAgICAgICAgYXJ0aXN0TmFtZT17dGhpcy5zdGF0ZS5hcnRpc3ROYW1lfVxuICAgICAgICBhcnRpc3RJbWFnZXM9e3RoaXMuc3RhdGUuYXJ0aXN0SW1hZ2VzfVxuICAgICAgICBmb2xsb3dlcnNOdW1iZXI9e3RoaXMuc3RhdGUuZm9sbG93ZXJzTnVtYmVyfVxuICAgICAgICBoYW5kbGVGb2xsb3dUb2dnbGU9e3RoaXMuaGFuZGxlRm9sbG93VG9nZ2xlfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZUhvbGRlclwiIC8+XG4gICAgKTtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50Pnt0b1JlbmRlcn08L1JlYWN0LkZyYWdtZW50PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShBcHApO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQU1BO0FBTkE7QUFGQTtBQUNBO0FBVUE7QUFDQTtBQUdBO0FBSEE7QUFNQTtBQU5BO0FBREE7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBV0E7QUFiQTtBQWNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVhBO0FBTkE7QUFtQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQURBO0FBRkE7QUFTQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFuRUE7QUFDQTtBQXFFQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7O0FBcEdBO0FBTUE7QUFXQTtBQVdBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE5QkE7QUFNQTtBQVdBO0FBV0E7QUFFQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/app.jsx\n");

/***/ })

})