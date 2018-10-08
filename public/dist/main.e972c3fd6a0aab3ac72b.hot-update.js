webpackHotUpdate("main",{

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.jsx */ \"./client/src/Header.jsx\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n\n\n\n\n // const getArtistInfo = callback => {\n\nvar getArtistInfo = function getArtistInfo(id, callback) {\n  axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/artists/\".concat(id)).then(function (response) {\n    callback(response.data); //data\n  }).catch(function (error) {\n    console.error(error);\n  });\n};\n\nvar getLocationsInfo = function getLocationsInfo(id, callback) {\n  axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/locations/\".concat(id)).then(function (response) {\n    callback(response.data);\n  }).catch(function (error) {\n    console.error(error);\n  });\n};\n\nvar blackBG = {\n  backgroundColor: \"#191414\"\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n    _this.state = {\n      // artistDisp: null\n      artistID: null,\n      artistName: null,\n      followed: null,\n      followersNumber: null,\n      verified: null,\n      Biography: null,\n      artistImages: [],\n      locations: {} // From table 2, locations\n\n    };\n    _this.handleFollowToggle = _this.handleFollowToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  } // [TBD] Adjust this helper function, to get numbers in less than 1000 for example\n  // Note: inclusive for both numbers\n\n\n  _createClass(App, [{\n    key: \"getRandomInt\",\n    value: function getRandomInt(min, max) {\n      min = Math.ceil(min);\n      max = Math.floor(max + 1);\n      var random = Math.random();\n\n      if (random < 0.5) {\n        return Math.floor(random / 10000 * (max - min)) + min;\n      } else {\n        return Math.floor(random * (max - min)) + min;\n      }\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      // getArtistInfo(responseData => {\n      //   this.setState({ artistDisp: responseData });\n      // });\n      var id = this.getRandomInt(1, 10000000); // Between 1 and 10M\n\n      var context = this; // Newly added\n\n      getArtistInfo(id, function (data) {\n        // Process string from DB table, to fit front end's needs\n        var imagesStr = data.artistImages;\n        var imagesSubstr = imagesStr.slice(1, imagesStr.length - 1);\n        context.setState({\n          artistID: data.artistID,\n          artistName: data.artistName,\n          followed: data.followed,\n          followersNumber: data.followersNumber,\n          verified: data.verified,\n          Biography: data.Biography,\n          artistImages: imagesSubstr.split(\",\") // Convert from string to array\n\n        });\n      });\n      getLocationsInfo(id, function (data) {\n        var locaObj = {};\n\n        for (var i = 0; i < data.length; i++) {\n          var key = data[i].location;\n          var value = data[i].people;\n          locaObj[key] = value;\n        }\n\n        context.setState({\n          locations: locaObj\n        });\n      });\n    }\n  }, {\n    key: \"handleFollowToggle\",\n    value: function handleFollowToggle(event) {\n      event.preventDefault();\n      this.setState(function (prevState) {\n        // NOTE: trick when you want to update a part of an object\n        return {\n          // artistDisp: {\n          //   ...prevState.artistDisp,\n          //   followed: !prevState.artistDisp.followed\n          // }\n          followed: !prevState.followed\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var toRender = !!this.state.artistID ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        artistName: this.state.artistName,\n        followed: this.state.folowed,\n        followersNumber: this.state.followersNumber,\n        verified: this.state.verified,\n        Biography: this.state.Biography,\n        artistImages: this.state.artistImages,\n        locations: this.state.locations,\n        handleFollowToggle: this.handleFollowToggle\n      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"placeHolder\"\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, toRender);\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(App);\n\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getArtistInfo, \"getArtistInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getLocationsInfo, \"getLocationsInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(blackBG, \"blackBG\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(App, \"App\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  leaveModule(module);\n})();\n\n;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_typeof, \"_typeof\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_classCallCheck, \"_classCallCheck\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_defineProperties, \"_defineProperties\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_createClass, \"_createClass\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_possibleConstructorReturn, \"_possibleConstructorReturn\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_getPrototypeOf, \"_getPrototypeOf\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_inherits, \"_inherits\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_setPrototypeOf, \"_setPrototypeOf\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_assertThisInitialized, \"_assertThisInitialized\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getArtistInfo, \"getArtistInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(getLocationsInfo, \"getLocationsInfo\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(blackBG, \"blackBG\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(App, \"App\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_default, \"_default\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  reactHotLoader.register(_default2, \"default\", \"/Users/huanl/Desktop/header-lancy/client/src/app.jsx\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L3NyYy9hcHAuanN4PzFhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyLmpzeFwiO1xuXG4vLyBjb25zdCBnZXRBcnRpc3RJbmZvID0gY2FsbGJhY2sgPT4ge1xuY29uc3QgZ2V0QXJ0aXN0SW5mbyA9IGZ1bmN0aW9uKGlkLCBjYWxsYmFjaykge1xuICBheGlvc1xuICAgIC5nZXQoYC9hcnRpc3RzLyR7aWR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKTsgLy9kYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59O1xuY29uc3QgZ2V0TG9jYXRpb25zSW5mbyA9IGZ1bmN0aW9uKGlkLCBjYWxsYmFjaykge1xuICBheGlvc1xuICAgIC5nZXQoYC9sb2NhdGlvbnMvJHtpZH1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufTtcblxuY29uc3QgYmxhY2tCRyA9IHsgYmFja2dyb3VuZENvbG9yOiBcIiMxOTE0MTRcIiB9O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBhcnRpc3REaXNwOiBudWxsXG4gICAgICBhcnRpc3RJRDogbnVsbCxcbiAgICAgIGFydGlzdE5hbWU6IG51bGwsXG4gICAgICBmb2xsb3dlZDogbnVsbCxcbiAgICAgIGZvbGxvd2Vyc051bWJlcjogbnVsbCxcbiAgICAgIHZlcmlmaWVkOiBudWxsLFxuICAgICAgQmlvZ3JhcGh5OiBudWxsLFxuICAgICAgYXJ0aXN0SW1hZ2VzOiBbXSxcbiAgICAgIGxvY2F0aW9uczoge30gLy8gRnJvbSB0YWJsZSAyLCBsb2NhdGlvbnNcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRm9sbG93VG9nZ2xlID0gdGhpcy5oYW5kbGVGb2xsb3dUb2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIFtUQkRdIEFkanVzdCB0aGlzIGhlbHBlciBmdW5jdGlvbiwgdG8gZ2V0IG51bWJlcnMgaW4gbGVzcyB0aGFuIDEwMDAgZm9yIGV4YW1wbGVcbiAgLy8gTm90ZTogaW5jbHVzaXZlIGZvciBib3RoIG51bWJlcnNcbiAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXggKyAxKTtcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAocmFuZG9tIDwgMC41KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigocmFuZG9tIC8gMTAwMDApICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20gKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gZ2V0QXJ0aXN0SW5mbyhyZXNwb25zZURhdGEgPT4ge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGFydGlzdERpc3A6IHJlc3BvbnNlRGF0YSB9KTtcbiAgICAvLyB9KTtcblxuICAgIGxldCBpZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEsIDEwMDAwMDAwKTsgLy8gQmV0d2VlbiAxIGFuZCAxME1cbiAgICBsZXQgY29udGV4dCA9IHRoaXM7IC8vIE5ld2x5IGFkZGVkXG5cbiAgICBnZXRBcnRpc3RJbmZvKGlkLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAvLyBQcm9jZXNzIHN0cmluZyBmcm9tIERCIHRhYmxlLCB0byBmaXQgZnJvbnQgZW5kJ3MgbmVlZHNcbiAgICAgIGxldCBpbWFnZXNTdHIgPSBkYXRhLmFydGlzdEltYWdlcztcbiAgICAgIGxldCBpbWFnZXNTdWJzdHIgPSBpbWFnZXNTdHIuc2xpY2UoMSwgaW1hZ2VzU3RyLmxlbmd0aCAtIDEpO1xuXG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgYXJ0aXN0SUQ6IGRhdGEuYXJ0aXN0SUQsXG4gICAgICAgIGFydGlzdE5hbWU6IGRhdGEuYXJ0aXN0TmFtZSxcbiAgICAgICAgZm9sbG93ZWQ6IGRhdGEuZm9sbG93ZWQsXG4gICAgICAgIGZvbGxvd2Vyc051bWJlcjogZGF0YS5mb2xsb3dlcnNOdW1iZXIsXG4gICAgICAgIHZlcmlmaWVkOiBkYXRhLnZlcmlmaWVkLFxuICAgICAgICBCaW9ncmFwaHk6IGRhdGEuQmlvZ3JhcGh5LFxuICAgICAgICBhcnRpc3RJbWFnZXM6IGltYWdlc1N1YnN0ci5zcGxpdChcIixcIikgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBhcnJheVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBnZXRMb2NhdGlvbnNJbmZvKGlkLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBsZXQgbG9jYU9iaiA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBkYXRhW2ldLmxvY2F0aW9uO1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2ldLnBlb3BsZTtcbiAgICAgICAgbG9jYU9ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICBsb2NhdGlvbnM6IGxvY2FPYmpcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRm9sbG93VG9nZ2xlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAvLyBOT1RFOiB0cmljayB3aGVuIHlvdSB3YW50IHRvIHVwZGF0ZSBhIHBhcnQgb2YgYW4gb2JqZWN0XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBhcnRpc3REaXNwOiB7XG4gICAgICAgIC8vICAgLi4ucHJldlN0YXRlLmFydGlzdERpc3AsXG4gICAgICAgIC8vICAgZm9sbG93ZWQ6ICFwcmV2U3RhdGUuYXJ0aXN0RGlzcC5mb2xsb3dlZFxuICAgICAgICAvLyB9XG4gICAgICAgIGZvbGxvd2VkOiAhcHJldlN0YXRlLmZvbGxvd2VkXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvUmVuZGVyID0gISF0aGlzLnN0YXRlLmFydGlzdElEID8gKFxuICAgICAgPEhlYWRlclxuICAgICAgICBhcnRpc3ROYW1lPXt0aGlzLnN0YXRlLmFydGlzdE5hbWV9XG4gICAgICAgIGZvbGxvd2VkPXt0aGlzLnN0YXRlLmZvbG93ZWR9XG4gICAgICAgIGZvbGxvd2Vyc051bWJlcj17dGhpcy5zdGF0ZS5mb2xsb3dlcnNOdW1iZXJ9XG4gICAgICAgIHZlcmlmaWVkPXt0aGlzLnN0YXRlLnZlcmlmaWVkfVxuICAgICAgICBCaW9ncmFwaHk9e3RoaXMuc3RhdGUuQmlvZ3JhcGh5fVxuICAgICAgICBhcnRpc3RJbWFnZXM9e3RoaXMuc3RhdGUuYXJ0aXN0SW1hZ2VzfVxuICAgICAgICBsb2NhdGlvbnM9e3RoaXMuc3RhdGUubG9jYXRpb25zfVxuICAgICAgICBoYW5kbGVGb2xsb3dUb2dnbGU9e3RoaXMuaGFuZGxlRm9sbG93VG9nZ2xlfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZUhvbGRlclwiIC8+XG4gICAgKTtcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50Pnt0b1JlbmRlcn08L1JlYWN0LkZyYWdtZW50PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShBcHApO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUhBO0FBTUE7QUFOQTtBQURBO0FBQ0E7QUFTQTtBQUNBO0FBR0E7QUFIQTtBQU1BO0FBTkE7QUFEQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFXQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUxBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBWUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBbEdBO0FBQ0E7QUFvR0E7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQTVIQTtBQVVBO0FBV0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2QkE7QUFVQTtBQVdBO0FBRUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/app.jsx\n");

/***/ })

})