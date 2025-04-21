/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: 'Segoe UI', sans-serif;
  margin: 30px;
  background-color: #f5f7fa;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

#turn-indicator,
#feedback-indicator {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
}

.boards-container {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 4px;
  padding: 10px;
  background-color: #dce6f1;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cell {
  width: 40px;
  height: 40px;
  background: #b3d4fc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.cell:hover {
  background: #9cc3e6;
}

.cell:active {
  background: #6ea1d
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;EACR,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;AACF","sourcesContent":["body {\n  font-family: 'Segoe UI', sans-serif;\n  margin: 30px;\n  background-color: #f5f7fa;\n  color: #333;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n}\n\n#turn-indicator,\n#feedback-indicator {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.boards-container {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  gap: 4px;\n  padding: 10px;\n  background-color: #dce6f1;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.cell {\n  width: 40px;\n  height: 40px;\n  background: #b3d4fc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.cell:hover {\n  background: #9cc3e6;\n}\n\n.cell:active {\n  background: #6ea1d\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/GameController.js":
/*!*******************************!*\
  !*** ./src/GameController.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var GameController = /*#__PURE__*/function () {
  function GameController() {
    var uiHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, GameController);
    this.player = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.computer = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"](true);
    this.playerBoard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.computerBoard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.player.placeShipsRandomly(this.playerBoard, 'Player');
    this.computer.placeShipsRandomly(this.computerBoard, 'Computer');
    this.currentTurn = 'player';
    this.ui = {
      renderBoards: uiHandlers.renderBoards || function () {},
      showFeedback: uiHandlers.showFeedback || function () {},
      showSunkMessage: uiHandlers.showSunkMessage || function () {},
      showGameOver: uiHandlers.showGameOver || function () {}
    };
    this.gameOver = false;
  }
  return _createClass(GameController, [{
    key: "playTurn",
    value: function playTurn(x, y) {
      var _target$ship,
        _this = this;
      if (this.gameOver || this.currentTurn !== 'player') return;
      var attackResult = this.player.attack(this.computerBoard, x, y);
      if (attackResult === false) {
        this.ui.showFeedback("You already attacked (".concat(x, ", ").concat(y, ")!"));
        return 'invalid';
      }
      var target = this.computerBoard.grid[y][x];
      var isHit = target !== null;
      if (target !== null && target !== void 0 && (_target$ship = target.ship) !== null && _target$ship !== void 0 && _target$ship.isSunk()) {
        this.ui.showSunkMessage(target.ship, 'computer');
      }
      if (this.computerBoard.areAllShipsSunk()) {
        this.handleGameOver('Player');
        this.ui.renderBoards(this);
        return;
      }
      this.ui.renderBoards(this);
      this.currentTurn = 'computer';
      setTimeout(function () {
        if (_this.gameOver) return;
        _this.computer.attackRandom(_this.playerBoard);
        var lastAttack = _this.playerBoard.attackedCoordinates.at(-1);
        if (lastAttack) {
          var _lastAttack = _slicedToArray(lastAttack, 2),
            cx = _lastAttack[0],
            cy = _lastAttack[1];
          var cell = _this.playerBoard.grid[cy][cx];
          if (cell !== null && cell !== void 0 && cell.ship) {
            _this.ui.showFeedback("Computer hit your ".concat(cell.ship.name, " at (").concat(cx, ", ").concat(cy, ")! \uD83D\uDCA5"));
            if (cell.ship.isSunk()) {
              _this.ui.showSunkMessage(cell.ship, 'player');
            }
          } else {
            _this.ui.showFeedback("Computer missed at (".concat(cx, ", ").concat(cy, ") \u274C"));
          }
        }
        if (_this.playerBoard.areAllShipsSunk()) {
          _this.handleGameOver('Computer');
        } else {
          _this.currentTurn = 'player';
        }
        _this.ui.renderBoards(_this);
      }, 300);
      return isHit ? 'hit' : 'miss';
    }
  }, {
    key: "handleGameOver",
    value: function handleGameOver(winner) {
      this.gameOver = true;
      this.ui.showGameOver(winner);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    // Create a 10x10 grid initialized with nulls
    this.grid = Array.from({
      length: 10
    }, function () {
      return Array(10).fill(null);
    });
    this.missedAttacks = [];
    this.ships = [];
    this.attackedCoordinates = [];
  }
  return _createClass(Gameboard, [{
    key: "canPlaceShip",
    value: function canPlaceShip(length, x, y, direction) {
      if (direction === 'horizontal') {
        if (x + length > 10) return false;
        for (var i = 0; i < length; i++) {
          if (this.grid[y][x + i] !== null) return false;
        }
      } else if (direction === 'vertical') {
        if (y + length > 10) return false;
        for (var _i = 0; _i < length; _i++) {
          if (this.grid[y + _i][x] !== null) return false;
        }
      }
      return true;
    }
  }, {
    key: "placeShip",
    value: function placeShip(ship, x, y, direction) {
      if (direction === 'horizontal') {
        for (var i = 0; i < ship.length; i++) {
          this.grid[y][x + i] = ship;
        }
      } else if (direction === 'vertical') {
        for (var _i2 = 0; _i2 < ship.length; _i2++) {
          this.grid[y + _i2][x] = ship;
        }
      }
      this.ships.push(ship);
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      var alreadyAttacked = this.attackedCoordinates.some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          prevX = _ref2[0],
          prevY = _ref2[1];
        return prevX === x && prevY === y;
      });
      if (alreadyAttacked) return false;
      this.attackedCoordinates.push([x, y]);
      var target = this.grid[y][x];
      if (target) {
        target.hit();
      } else {
        this.missedAttacks.push([x, y]);
      }
      return true;
    }
  }, {
    key: "areAllShipsSunk",
    value: function areAllShipsSunk() {
      return this.ships.every(function (ship) {
        return ship.isSunk();
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/Player.js

var Player = /*#__PURE__*/function () {
  function Player() {
    var isComputer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    _classCallCheck(this, Player);
    this.isComputer = isComputer;
    this.availableMoves = [];
    if (isComputer) {
      for (var y = 0; y < 10; y++) {
        for (var x = 0; x < 10; x++) {
          this.availableMoves.push([x, y]);
        }
      }
    }
  }
  return _createClass(Player, [{
    key: "attack",
    value: function attack(board, x, y) {
      board.receiveAttack(x, y);
    }
  }, {
    key: "placeShipsRandomly",
    value: function placeShipsRandomly(board) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Player';
      var shipLengths = [5, 4, 3, 2, 1];
      var directions = ['horizontal', 'vertical'];
      shipLengths.forEach(function (length) {
        var placed = false;
        while (!placed) {
          var x = Math.floor(Math.random() * 10);
          var y = Math.floor(Math.random() * 10);
          var direction = directions[Math.floor(Math.random() * 2)];
          if (board.canPlaceShip(length, x, y, direction)) {
            var ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](length); // ✅ Create actual Ship instance
            board.placeShip(ship, x, y, direction);
            placed = true;
            console.log("".concat(label, ": Placed ship of length ").concat(length, " at (").concat(x, ", ").concat(y, ") with direction ").concat(direction));
          } else {
            console.log("Failed to place ship of length ".concat(length, " at (").concat(x, ", ").concat(y, ") with direction ").concat(direction));
          }
        }
      });
    }
  }, {
    key: "attackRandom",
    value: function attackRandom(board) {
      if (!this.availableMoves.length) return;
      var index = Math.floor(Math.random() * this.availableMoves.length);
      var _this$availableMoves$ = _slicedToArray(this.availableMoves.splice(index, 1)[0], 2),
        x = _this$availableMoves$[0],
        y = _this$availableMoves$[1];
      board.receiveAttack(x, y);
      console.log("Computer attacks (".concat(x, ", ").concat(y, ")"));
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/Ship.js
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Ship';
    _classCallCheck(this, Ship);
    this.length = length;
    this.name = name;
    this.hits = 0;
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      if (this.hits < this.length) {
        this.hits += 1;
      }
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hits >= this.length;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBoards: () => (/* binding */ renderBoards)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// src/dom.js
function renderBoards(game) {
  var playerBoardDiv = document.getElementById('player-board');
  var computerBoardDiv = document.getElementById('computer-board');
  var turnText = document.getElementById('turn-indicator');
  var feedbackText = document.getElementById('feedback-indicator');
  playerBoardDiv.innerHTML = '';
  computerBoardDiv.innerHTML = '';
  playerBoardDiv.className = 'board';
  computerBoardDiv.className = 'board';
  turnText.textContent = game.currentTurn === 'player' ? "Player's turn" : "Computer's turn";
  // feedbackText.textContent = '';
  var _loop = function _loop(y) {
    var _loop2 = function _loop2(x) {
      // Player board
      var playerCell = document.createElement('div');
      playerCell.classList.add('cell');
      var playerHasShip = game.playerBoard.grid[y][x];
      var wasAttacked = game.playerBoard.attackedCoordinates.some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          ax = _ref2[0],
          ay = _ref2[1];
        return ax === x && ay === y;
      });
      if (wasAttacked && playerHasShip) {
        playerCell.textContent = '✅'; // Computer hit a ship
      } else if (wasAttacked && !playerHasShip) {
        playerCell.textContent = '❌'; // Computer missed
      } else if (playerHasShip) {
        playerCell.textContent = '🚢'; // Show ship only if not yet hit
      } else {
        playerCell.textContent = ''; // empty cell
      }
      playerBoardDiv.appendChild(playerCell);

      // Computer board
      var compCell = document.createElement('div');
      compCell.classList.add('cell');
      var isHit = game.computerBoard.attackedCoordinates.some(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          ax = _ref4[0],
          ay = _ref4[1];
        return ax === x && ay === y;
      });
      var hasShip = game.computerBoard.grid[y][x];
      if (isHit && hasShip) {
        compCell.textContent = '✅';
      } else if (isHit) {
        compCell.textContent = '❌';
      }
      compCell.addEventListener('click', function () {
        var result = game.playTurn(x, y);
        var feedbackText = document.getElementById('feedback-indicator');
        if (result === 'hit') {
          feedbackText.textContent = "You hit a ship at (".concat(x, ", ").concat(y, ")! \uD83C\uDFAF");
        } else if (result === 'miss') {
          feedbackText.textContent = "You missed at (".concat(x, ", ").concat(y, ") \u274C");
        } else if (result === 'invalid') {
          feedbackText.textContent = "You already attacked (".concat(x, ", ").concat(y, ")!");
        }
        renderBoards(game);
      });
      computerBoardDiv.appendChild(compCell);
    };
    for (var x = 0; x < 10; x++) {
      _loop2(x);
    }
  };
  for (var y = 0; y < 10; y++) {
    _loop(y);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _GameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController.js */ "./src/GameController.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



var game = new _GameController_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  renderBoards: _dom_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards,
  showFeedback: function showFeedback(msg) {
    var el = document.getElementById('feedback-indicator');
    if (el) el.textContent = msg;
  },
  showSunkMessage: function showSunkMessage(ship, owner) {
    var el = document.getElementById('feedback-indicator');
    if (!el) return;
    el.textContent = owner === 'player' ? "The computer sunk your ".concat(ship.name, "! \uD83D\uDC80") : "You sunk the computer's ".concat(ship.name, "! \uD83D\uDEA2\uD83D\uDD25");
  },
  showGameOver: function showGameOver(winner) {
    alert("Game Over! ".concat(winner, " wins!"));
  }
});
game.ui.renderBoards(game);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ3hELElBQUksQ0FBQ3lCLEVBQUUsRUFBRTtJQUNUQSxFQUFFLENBQUNuQixXQUFXLEdBQ1pvQixLQUFLLEtBQUssUUFBUSw2QkFBQXJGLE1BQUEsQ0FDWUksSUFBSSxDQUFDYyxJQUFJLGlEQUFBbEIsTUFBQSxDQUNSSSxJQUFJLENBQUNjLElBQUksK0JBQVE7RUFDcEQsQ0FBQztFQUNEOUIsWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQUcrQixNQUFNLEVBQUs7SUFDeEJtRSxLQUFLLGVBQUF0RixNQUFBLENBQWVtQixNQUFNLFdBQVEsQ0FBQztFQUNyQztBQUNGLENBQUMsQ0FBQztBQUVGcUMsSUFBSSxDQUFDeEUsRUFBRSxDQUFDQyxZQUFZLENBQUN1RSxJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xuICBjb2xvcjogIzMzMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3R1cm4taW5kaWNhdG9yLFxuI2ZlZWRiYWNrLWluZGljYXRvciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlNmYxO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jZWxsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xufVxuXG4uY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5Y2MzZTY7XG59XG5cbi5jZWxsOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM2ZWExZFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsUUFBUTtFQUNSLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7XFxuICBjb2xvcjogIzMzMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jdHVybi1pbmRpY2F0b3IsXFxuI2ZlZWRiYWNrLWluZGljYXRvciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTZmMTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZDogI2IzZDRmYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzljYzNlNjtcXG59XFxuXFxuLmNlbGw6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM2ZWExZFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkLmpzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XG5cbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IodWlIYW5kbGVycyA9IHt9KSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgdGhpcy5jb21wdXRlciA9IG5ldyBQbGF5ZXIodHJ1ZSk7XG5cbiAgICB0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIHRoaXMucGxheWVyLnBsYWNlU2hpcHNSYW5kb21seSh0aGlzLnBsYXllckJvYXJkLCAnUGxheWVyJyk7XG4gICAgdGhpcy5jb21wdXRlci5wbGFjZVNoaXBzUmFuZG9tbHkodGhpcy5jb21wdXRlckJvYXJkLCAnQ29tcHV0ZXInKTtcblxuXG4gICAgdGhpcy5jdXJyZW50VHVybiA9ICdwbGF5ZXInO1xuICAgIHRoaXMudWkgPSB7XG4gICAgICByZW5kZXJCb2FyZHM6IHVpSGFuZGxlcnMucmVuZGVyQm9hcmRzIHx8ICgoKSA9PiB7fSksXG4gICAgICBzaG93RmVlZGJhY2s6IHVpSGFuZGxlcnMuc2hvd0ZlZWRiYWNrIHx8ICgoKSA9PiB7fSksXG4gICAgICBzaG93U3Vua01lc3NhZ2U6IHVpSGFuZGxlcnMuc2hvd1N1bmtNZXNzYWdlIHx8ICgoKSA9PiB7fSksXG4gICAgICBzaG93R2FtZU92ZXI6IHVpSGFuZGxlcnMuc2hvd0dhbWVPdmVyIHx8ICgoKSA9PiB7fSlcbiAgICB9O1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIHBsYXlUdXJuKHgsIHkpIHtcbiAgICBpZiAodGhpcy5nYW1lT3ZlciB8fCB0aGlzLmN1cnJlbnRUdXJuICE9PSAncGxheWVyJykgcmV0dXJuO1xuXG4gICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gdGhpcy5wbGF5ZXIuYXR0YWNrKHRoaXMuY29tcHV0ZXJCb2FyZCwgeCwgeSk7XG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMudWkuc2hvd0ZlZWRiYWNrKGBZb3UgYWxyZWFkeSBhdHRhY2tlZCAoJHt4fSwgJHt5fSkhYCk7XG4gICAgICByZXR1cm4gJ2ludmFsaWQnO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY29tcHV0ZXJCb2FyZC5ncmlkW3ldW3hdO1xuICAgIGNvbnN0IGlzSGl0ID0gdGFyZ2V0ICE9PSBudWxsO1xuXG4gICAgaWYgKHRhcmdldD8uc2hpcD8uaXNTdW5rKCkpIHtcbiAgICAgIHRoaXMudWkuc2hvd1N1bmtNZXNzYWdlKHRhcmdldC5zaGlwLCAnY29tcHV0ZXInKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCdQbGF5ZXInKTtcbiAgICAgIHRoaXMudWkucmVuZGVyQm9hcmRzKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudWkucmVuZGVyQm9hcmRzKHRoaXMpO1xuXG4gICAgdGhpcy5jdXJyZW50VHVybiA9ICdjb21wdXRlcic7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuO1xuXG4gICAgICB0aGlzLmNvbXB1dGVyLmF0dGFja1JhbmRvbSh0aGlzLnBsYXllckJvYXJkKTtcbiAgICAgIGNvbnN0IGxhc3RBdHRhY2sgPSB0aGlzLnBsYXllckJvYXJkLmF0dGFja2VkQ29vcmRpbmF0ZXMuYXQoLTEpO1xuXG4gICAgICBpZiAobGFzdEF0dGFjaykge1xuICAgICAgICBjb25zdCBbY3gsIGN5XSA9IGxhc3RBdHRhY2s7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnBsYXllckJvYXJkLmdyaWRbY3ldW2N4XTtcbiAgICAgICAgaWYgKGNlbGw/LnNoaXApIHtcbiAgICAgICAgICB0aGlzLnVpLnNob3dGZWVkYmFjayhgQ29tcHV0ZXIgaGl0IHlvdXIgJHtjZWxsLnNoaXAubmFtZX0gYXQgKCR7Y3h9LCAke2N5fSkhIPCfkqVgKTtcbiAgICAgICAgICBpZiAoY2VsbC5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICB0aGlzLnVpLnNob3dTdW5rTWVzc2FnZShjZWxsLnNoaXAsICdwbGF5ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51aS5zaG93RmVlZGJhY2soYENvbXB1dGVyIG1pc3NlZCBhdCAoJHtjeH0sICR7Y3l9KSDinYxgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCdDb21wdXRlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VHVybiA9ICdwbGF5ZXInO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVpLnJlbmRlckJvYXJkcyh0aGlzKTtcbiAgICB9LCAzMDApO1xuXG4gICAgcmV0dXJuIGlzSGl0ID8gJ2hpdCcgOiAnbWlzcyc7XG4gIH1cblxuICBoYW5kbGVHYW1lT3Zlcih3aW5uZXIpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB0aGlzLnVpLnNob3dHYW1lT3Zlcih3aW5uZXIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIENyZWF0ZSBhIDEweDEwIGdyaWQgaW5pdGlhbGl6ZWQgd2l0aCBudWxsc1xuICAgICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzID0gW107XG4gICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICB0aGlzLmF0dGFja2VkQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICB9XG4gIFxuICAgIGNhblBsYWNlU2hpcChsZW5ndGgsIHgsIHksIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFt5XVt4ICsgaV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgaWYgKHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbeSArIGldW3hdICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgcGxhY2VTaGlwKHNoaXAsIHgsIHksIGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt5XVt4ICsgaV0gPSBzaGlwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt5ICsgaV1beF0gPSBzaGlwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICB9XG5cbiAgICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuXG4gICAgICAgIGNvbnN0IGFscmVhZHlBdHRhY2tlZCA9IHRoaXMuYXR0YWNrZWRDb29yZGluYXRlcy5zb21lKFxuICAgICAgICAgICAgKFtwcmV2WCwgcHJldlldKSA9PiBwcmV2WCA9PT0geCAmJiBwcmV2WSA9PT0geVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGFscmVhZHlBdHRhY2tlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgICB0aGlzLmF0dGFja2VkQ29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgIFxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmdyaWRbeV1beF07XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXQuaGl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICAgIH1cblxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIvLyBzcmMvUGxheWVyLmpzXG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAuanMnO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgICB0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xuICAgIHRoaXMuYXZhaWxhYmxlTW92ZXMgPSBbXTtcblxuICAgIGlmIChpc0NvbXB1dGVyKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgICAgdGhpcy5hdmFpbGFibGVNb3Zlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhdHRhY2soYm9hcmQsIHgsIHkpIHtcbiAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9XG5cbiAgcGxhY2VTaGlwc1JhbmRvbWx5KGJvYXJkLCBsYWJlbCA9ICdQbGF5ZXInKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMiwgMV07XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuXG4gICAgc2hpcExlbmd0aHMuZm9yRWFjaChsZW5ndGggPT4ge1xuICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG5cbiAgICAgICAgaWYgKGJvYXJkLmNhblBsYWNlU2hpcChsZW5ndGgsIHgsIHksIGRpcmVjdGlvbikpIHtcbiAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTsgLy8g4pyFIENyZWF0ZSBhY3R1YWwgU2hpcCBpbnN0YW5jZVxuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pO1xuICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7bGFiZWx9OiBQbGFjZWQgc2hpcCBvZiBsZW5ndGggJHtsZW5ndGh9IGF0ICgke3h9LCAke3l9KSB3aXRoIGRpcmVjdGlvbiAke2RpcmVjdGlvbn1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIHBsYWNlIHNoaXAgb2YgbGVuZ3RoICR7bGVuZ3RofSBhdCAoJHt4fSwgJHt5fSkgd2l0aCBkaXJlY3Rpb24gJHtkaXJlY3Rpb259YCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGF0dGFja1JhbmRvbShib2FyZCkge1xuICAgIGlmICghdGhpcy5hdmFpbGFibGVNb3Zlcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hdmFpbGFibGVNb3Zlcy5sZW5ndGgpO1xuICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuYXZhaWxhYmxlTW92ZXMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGNvbnNvbGUubG9nKGBDb21wdXRlciBhdHRhY2tzICgke3h9LCAke3l9KWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIi8vIHNyYy9TaGlwLmpzXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWU9J1NoaXAnKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLmhpdHMgPSAwO1xuICAgIH1cbiAgXG4gICAgaGl0KCkge1xuICAgICAgaWYgKHRoaXMuaGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaXNTdW5rKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFNoaXA7XG4gICIsIi8vIHNyYy9kb20uanNcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZHMoZ2FtZSkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKTtcbiAgICBjb25zdCB0dXJuVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dXJuLWluZGljYXRvcicpO1xuICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjay1pbmRpY2F0b3InKTtcbiAgXG4gICAgcGxheWVyQm9hcmREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tcHV0ZXJCb2FyZERpdi5pbm5lckhUTUwgPSAnJztcblxuICAgIHBsYXllckJvYXJkRGl2LmNsYXNzTmFtZSA9ICdib2FyZCc7XG4gICAgY29tcHV0ZXJCb2FyZERpdi5jbGFzc05hbWUgPSAnYm9hcmQnO1xuXG4gICAgdHVyblRleHQudGV4dENvbnRlbnQgPSBnYW1lLmN1cnJlbnRUdXJuID09PSAncGxheWVyJyA/IFwiUGxheWVyJ3MgdHVyblwiIDogXCJDb21wdXRlcidzIHR1cm5cIjtcbiAgICAvLyBmZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSAnJztcbiAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgLy8gUGxheWVyIGJvYXJkXG4gICAgICAgIGNvbnN0IHBsYXllckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVySGFzU2hpcCA9IGdhbWUucGxheWVyQm9hcmQuZ3JpZFt5XVt4XTtcbiAgICAgICAgY29uc3Qgd2FzQXR0YWNrZWQgPSBnYW1lLnBsYXllckJvYXJkLmF0dGFja2VkQ29vcmRpbmF0ZXMuc29tZShcbiAgICAgICAgICAoW2F4LCBheV0pID0+IGF4ID09PSB4ICYmIGF5ID09PSB5XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHdhc0F0dGFja2VkICYmIHBsYXllckhhc1NoaXApIHtcbiAgICAgICAgICBwbGF5ZXJDZWxsLnRleHRDb250ZW50ID0gJ+KchSc7IC8vIENvbXB1dGVyIGhpdCBhIHNoaXBcbiAgICAgICAgfSBlbHNlIGlmICh3YXNBdHRhY2tlZCAmJiAhcGxheWVySGFzU2hpcCkge1xuICAgICAgICAgIHBsYXllckNlbGwudGV4dENvbnRlbnQgPSAn4p2MJzsgLy8gQ29tcHV0ZXIgbWlzc2VkXG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVySGFzU2hpcCkge1xuICAgICAgICAgIHBsYXllckNlbGwudGV4dENvbnRlbnQgPSAn8J+aoic7IC8vIFNob3cgc2hpcCBvbmx5IGlmIG5vdCB5ZXQgaGl0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyQ2VsbC50ZXh0Q29udGVudCA9ICcnOyAvLyBlbXB0eSBjZWxsXG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXJCb2FyZERpdi5hcHBlbmRDaGlsZChwbGF5ZXJDZWxsKTtcblxuICBcbiAgICAgICAgLy8gQ29tcHV0ZXIgYm9hcmRcbiAgICAgICAgY29uc3QgY29tcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29tcENlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBjb25zdCBpc0hpdCA9IGdhbWUuY29tcHV0ZXJCb2FyZC5hdHRhY2tlZENvb3JkaW5hdGVzLnNvbWUoKFtheCwgYXldKSA9PiBheCA9PT0geCAmJiBheSA9PT0geSk7XG4gICAgICAgIGNvbnN0IGhhc1NoaXAgPSBnYW1lLmNvbXB1dGVyQm9hcmQuZ3JpZFt5XVt4XTtcbiAgXG4gICAgICAgIGlmIChpc0hpdCAmJiBoYXNTaGlwKSB7XG4gICAgICAgICAgY29tcENlbGwudGV4dENvbnRlbnQgPSAn4pyFJztcbiAgICAgICAgfSBlbHNlIGlmIChpc0hpdCkge1xuICAgICAgICAgIGNvbXBDZWxsLnRleHRDb250ZW50ID0gJ+KdjCc7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNvbXBDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGdhbWUucGxheVR1cm4oeCwgeSk7XG4gICAgICAgIFxuICAgICAgICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjay1pbmRpY2F0b3InKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgICAgICAgZmVlZGJhY2tUZXh0LnRleHRDb250ZW50ID0gYFlvdSBoaXQgYSBzaGlwIGF0ICgke3h9LCAke3l9KSEg8J+Or2A7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdtaXNzJykge1xuICAgICAgICAgICAgZmVlZGJhY2tUZXh0LnRleHRDb250ZW50ID0gYFlvdSBtaXNzZWQgYXQgKCR7eH0sICR7eX0pIOKdjGA7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdpbnZhbGlkJykge1xuICAgICAgICAgICAgZmVlZGJhY2tUZXh0LnRleHRDb250ZW50ID0gYFlvdSBhbHJlYWR5IGF0dGFja2VkICgke3h9LCAke3l9KSFgO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgcmVuZGVyQm9hcmRzKGdhbWUpO1xuICAgICAgICB9KTsgICAgICAgIFxuICBcbiAgICAgICAgY29tcHV0ZXJCb2FyZERpdi5hcHBlbmRDaGlsZChjb21wQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSAnLi9HYW1lQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyByZW5kZXJCb2FyZHMgfSBmcm9tICcuL2RvbS5qcyc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIoe1xuICByZW5kZXJCb2FyZHMsXG4gIHNob3dGZWVkYmFjazogKG1zZykgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrLWluZGljYXRvcicpO1xuICAgIGlmIChlbCkgZWwudGV4dENvbnRlbnQgPSBtc2c7XG4gIH0sXG4gIHNob3dTdW5rTWVzc2FnZTogKHNoaXAsIG93bmVyKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZGJhY2staW5kaWNhdG9yJyk7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgIG93bmVyID09PSAncGxheWVyJ1xuICAgICAgICA/IGBUaGUgY29tcHV0ZXIgc3VuayB5b3VyICR7c2hpcC5uYW1lfSEg8J+SgGBcbiAgICAgICAgOiBgWW91IHN1bmsgdGhlIGNvbXB1dGVyJ3MgJHtzaGlwLm5hbWV9ISDwn5qi8J+UpWA7XG4gIH0sXG4gIHNob3dHYW1lT3ZlcjogKHdpbm5lcikgPT4ge1xuICAgIGFsZXJ0KGBHYW1lIE92ZXIhICR7d2lubmVyfSB3aW5zIWApO1xuICB9LFxufSk7XG5cbmdhbWUudWkucmVuZGVyQm9hcmRzKGdhbWUpO1xuXG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJHYW1lYm9hcmQiLCJTaGlwIiwiR2FtZUNvbnRyb2xsZXIiLCJ1aUhhbmRsZXJzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwicGxheWVyIiwiY29tcHV0ZXIiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJjdXJyZW50VHVybiIsInVpIiwicmVuZGVyQm9hcmRzIiwic2hvd0ZlZWRiYWNrIiwic2hvd1N1bmtNZXNzYWdlIiwic2hvd0dhbWVPdmVyIiwiZ2FtZU92ZXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInBsYXlUdXJuIiwieCIsInkiLCJfdGFyZ2V0JHNoaXAiLCJfdGhpcyIsImF0dGFja1Jlc3VsdCIsImF0dGFjayIsImNvbmNhdCIsInRhcmdldCIsImdyaWQiLCJpc0hpdCIsInNoaXAiLCJpc1N1bmsiLCJhcmVBbGxTaGlwc1N1bmsiLCJoYW5kbGVHYW1lT3ZlciIsInNldFRpbWVvdXQiLCJhdHRhY2tSYW5kb20iLCJsYXN0QXR0YWNrIiwiYXR0YWNrZWRDb29yZGluYXRlcyIsImF0IiwiX2xhc3RBdHRhY2siLCJfc2xpY2VkVG9BcnJheSIsImN4IiwiY3kiLCJjZWxsIiwibmFtZSIsIndpbm5lciIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJtaXNzZWRBdHRhY2tzIiwic2hpcHMiLCJjYW5QbGFjZVNoaXAiLCJkaXJlY3Rpb24iLCJpIiwicGxhY2VTaGlwIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJhbHJlYWR5QXR0YWNrZWQiLCJzb21lIiwiX3JlZiIsIl9yZWYyIiwicHJldlgiLCJwcmV2WSIsImhpdCIsImV2ZXJ5IiwiaXNDb21wdXRlciIsImF2YWlsYWJsZU1vdmVzIiwiYm9hcmQiLCJsYWJlbCIsInNoaXBMZW5ndGhzIiwiZGlyZWN0aW9ucyIsImZvckVhY2giLCJwbGFjZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJfdGhpcyRhdmFpbGFibGVNb3ZlcyQiLCJzcGxpY2UiLCJoaXRzIiwiZ2FtZSIsInBsYXllckJvYXJkRGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbXB1dGVyQm9hcmREaXYiLCJ0dXJuVGV4dCIsImZlZWRiYWNrVGV4dCIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiX2xvb3AiLCJfbG9vcDIiLCJwbGF5ZXJDZWxsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInBsYXllckhhc1NoaXAiLCJ3YXNBdHRhY2tlZCIsImF4IiwiYXkiLCJhcHBlbmRDaGlsZCIsImNvbXBDZWxsIiwiX3JlZjMiLCJfcmVmNCIsImhhc1NoaXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwibXNnIiwiZWwiLCJvd25lciIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==