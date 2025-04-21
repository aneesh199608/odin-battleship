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
___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles.css */
.board {
    display: grid;
    grid-template-columns: repeat(10, 30px);
    grid-gap: 2px;
    margin: 20px;
  }
  
  .cell {
    width: 30px;
    height: 30px;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  `, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;IACI,aAAa;IACb,uCAAuC;IACvC,aAAa;IACb,YAAY;EACd;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;EACjB","sourcesContent":["/* src/styles.css */\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-gap: 2px;\n    margin: 20px;\n  }\n  \n  .cell {\n    width: 30px;\n    height: 30px;\n    background: lightblue;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n  }\n  "],"sourceRoot":""}]);
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
  function GameController(renderBoards) {
    _classCallCheck(this, GameController);
    this.player = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.computer = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"](true);
    this.playerBoard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.computerBoard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.playerBoard.placeShip(new _Ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](5, 'Carrier'), 0, 0, 'horizontal');
    this.playerBoard.placeShip(new _Ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](4, 'Battleship'), 1, 0, 'horizontal');
    this.computerBoard.placeShip(new _Ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](5, 'Carrier'), 0, 0, 'horizontal');
    this.computerBoard.placeShip(new _Ship_js__WEBPACK_IMPORTED_MODULE_2__["default"](4, 'Battleship'), 1, 0, 'horizontal');
    this.currentTurn = 'player';
    this.renderBoards = renderBoards;
    this.gameOver = false;
  }
  return _createClass(GameController, [{
    key: "playTurn",
    value: function playTurn(x, y) {
      var _this = this;
      if (this.gameOver || this.currentTurn !== 'player') return;
      var attackResult = this.player.attack(this.computerBoard, x, y);
      if (attackResult === false) {
        var feedback = document.getElementById('feedback-indicator');
        feedback.textContent = "You already attacked (".concat(x, ", ").concat(y, ")!");
        return 'invalid';
      }
      var target = this.computerBoard.grid[y][x];
      var isHit = target !== null;
      if (target && target.ship && target.ship.isSunk()) {
        this.showSunkMessage(target.ship);
      }
      if (this.computerBoard.areAllShipsSunk()) {
        this.handleGameOver('Player');
        this.renderBoards(this);
        return;
      }
      this.renderBoards(this); // Render board after player's move

      this.currentTurn = 'computer';
      setTimeout(function () {
        if (_this.gameOver) return;
        var compAttackResult = _this.computer.attackRandom(_this.playerBoard);

        // Get last attacked coordinate by computer
        var lastAttack = _this.playerBoard.attackedCoordinates.at(-1);
        var feedback = document.getElementById('feedback-indicator');
        if (lastAttack) {
          var _lastAttack = _slicedToArray(lastAttack, 2),
            cx = _lastAttack[0],
            cy = _lastAttack[1];
          var cell = _this.playerBoard.grid[cy][cx];
          if (cell && cell.ship) {
            feedback.textContent = "Computer hit your ".concat(cell.ship.name, " at (").concat(cx, ", ").concat(cy, ")! \uD83D\uDCA5");
            if (cell.ship.isSunk()) {
              _this.showSunkMessage(cell.ship, 'player');
            }
          } else {
            feedback.textContent = "Computer missed at (".concat(cx, ", ").concat(cy, ") \u274C");
          }
        }
        if (_this.playerBoard.areAllShipsSunk()) {
          _this.handleGameOver('Computer');
        } else {
          _this.currentTurn = 'player';
        }
        _this.renderBoards(_this);
      }, 300);
      return isHit ? 'hit' : 'miss';
    }
  }, {
    key: "showSunkMessage",
    value: function showSunkMessage(ship) {
      var owner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'computer';
      var feedbackText = document.getElementById('feedback-indicator');
      var message = owner === 'player' ? "The computer sunk your ".concat(ship.name, "! \uD83D\uDC80") : "You sunk the computer's ".concat(ship.name, "! \uD83D\uDEA2\uD83D\uDD25");
      feedbackText.textContent = message;
    }
  }, {
    key: "handleGameOver",
    value: function handleGameOver(winner) {
      this.gameOver = true;
      alert("Game Over! ".concat(winner, " wins!"));
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



var game = new _GameController_js__WEBPACK_IMPORTED_MODULE_1__["default"](_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards); // Pass renderBoards to constructor

game.player.placeShipsRandomly(game.playerBoard, 'Player');
game.computer.placeShipsRandomly(game.computerBoard, 'Computer');
(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.renderBoards)(game);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMyQjtBQUNUO0FBRXhDLElBQU15RSxJQUFJLEdBQUcsSUFBSXhGLDBEQUFjLENBQUNDLGlEQUFZLENBQUMsQ0FBQyxDQUFDOztBQUUvQ3VGLElBQUksQ0FBQ3JGLE1BQU0sQ0FBQ3NFLGtCQUFrQixDQUFDZSxJQUFJLENBQUNuRixXQUFXLEVBQUUsUUFBUSxDQUFDO0FBQzFEbUYsSUFBSSxDQUFDcEYsUUFBUSxDQUFDcUUsa0JBQWtCLENBQUNlLElBQUksQ0FBQ2xGLGFBQWEsRUFBRSxVQUFVLENBQUM7QUFFaEVMLHFEQUFZLENBQUN1RixJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHNyYy9zdHlsZXMuY3NzICovXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICAgIGdyaWQtZ2FwOiAycHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIFxuICAuY2VsbCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzcmMvc3R5bGVzLmNzcyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC1nYXA6IDJweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAuY2VsbCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihyZW5kZXJCb2FyZHMpIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLmNvbXB1dGVyID0gbmV3IFBsYXllcih0cnVlKTtcblxuICAgIHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5jb21wdXRlckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgdGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoNSwgJ0NhcnJpZXInKSwgMCwgMCwgJ2hvcml6b250YWwnKTtcbiAgICB0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcChuZXcgU2hpcCg0LCAnQmF0dGxlc2hpcCcpLCAxLCAwLCAnaG9yaXpvbnRhbCcpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAobmV3IFNoaXAoNSwgJ0NhcnJpZXInKSwgMCwgMCwgJ2hvcml6b250YWwnKTtcbiAgICB0aGlzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKG5ldyBTaGlwKDQsICdCYXR0bGVzaGlwJyksIDEsIDAsICdob3Jpem9udGFsJyk7XG5cbiAgICB0aGlzLmN1cnJlbnRUdXJuID0gJ3BsYXllcic7XG4gICAgdGhpcy5yZW5kZXJCb2FyZHMgPSByZW5kZXJCb2FyZHM7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgcGxheVR1cm4oeCwgeSkge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyIHx8IHRoaXMuY3VycmVudFR1cm4gIT09ICdwbGF5ZXInKSByZXR1cm47XG5cbiAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSB0aGlzLnBsYXllci5hdHRhY2sodGhpcy5jb21wdXRlckJvYXJkLCB4LCB5KTtcblxuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjay1pbmRpY2F0b3InKTtcbiAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gYFlvdSBhbHJlYWR5IGF0dGFja2VkICgke3h9LCAke3l9KSFgO1xuICAgICAgcmV0dXJuICdpbnZhbGlkJztcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNvbXB1dGVyQm9hcmQuZ3JpZFt5XVt4XTtcbiAgICBjb25zdCBpc0hpdCA9IHRhcmdldCAhPT0gbnVsbDtcblxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnNoaXAgJiYgdGFyZ2V0LnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIHRoaXMuc2hvd1N1bmtNZXNzYWdlKHRhcmdldC5zaGlwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCdQbGF5ZXInKTtcbiAgICAgIHRoaXMucmVuZGVyQm9hcmRzKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyQm9hcmRzKHRoaXMpOyAvLyBSZW5kZXIgYm9hcmQgYWZ0ZXIgcGxheWVyJ3MgbW92ZVxuXG4gICAgdGhpcy5jdXJyZW50VHVybiA9ICdjb21wdXRlcic7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuO1xuXG4gICAgICBjb25zdCBjb21wQXR0YWNrUmVzdWx0ID0gdGhpcy5jb21wdXRlci5hdHRhY2tSYW5kb20odGhpcy5wbGF5ZXJCb2FyZCk7XG5cbiAgICAgIC8vIEdldCBsYXN0IGF0dGFja2VkIGNvb3JkaW5hdGUgYnkgY29tcHV0ZXJcbiAgICAgIGNvbnN0IGxhc3RBdHRhY2sgPSB0aGlzLnBsYXllckJvYXJkLmF0dGFja2VkQ29vcmRpbmF0ZXMuYXQoLTEpO1xuICAgICAgY29uc3QgZmVlZGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZGJhY2staW5kaWNhdG9yJyk7XG5cbiAgICAgIGlmIChsYXN0QXR0YWNrKSB7XG4gICAgICAgIGNvbnN0IFtjeCwgY3ldID0gbGFzdEF0dGFjaztcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMucGxheWVyQm9hcmQuZ3JpZFtjeV1bY3hdO1xuXG4gICAgICAgIGlmIChjZWxsICYmIGNlbGwuc2hpcCkge1xuICAgICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gYENvbXB1dGVyIGhpdCB5b3VyICR7Y2VsbC5zaGlwLm5hbWV9IGF0ICgke2N4fSwgJHtjeX0pISDwn5KlYDtcbiAgICAgICAgICBpZiAoY2VsbC5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTdW5rTWVzc2FnZShjZWxsLnNoaXAsICdwbGF5ZXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmVlZGJhY2sudGV4dENvbnRlbnQgPSBgQ29tcHV0ZXIgbWlzc2VkIGF0ICgke2N4fSwgJHtjeX0pIOKdjGA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGxheWVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcignQ29tcHV0ZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudFR1cm4gPSAncGxheWVyJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW5kZXJCb2FyZHModGhpcyk7XG4gICAgfSwgMzAwKTtcblxuICAgIHJldHVybiBpc0hpdCA/ICdoaXQnIDogJ21pc3MnO1xuICB9XG5cbiAgc2hvd1N1bmtNZXNzYWdlKHNoaXAsIG93bmVyID0gJ2NvbXB1dGVyJykge1xuICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjay1pbmRpY2F0b3InKTtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgIG93bmVyID09PSAncGxheWVyJ1xuICAgICAgICA/IGBUaGUgY29tcHV0ZXIgc3VuayB5b3VyICR7c2hpcC5uYW1lfSEg8J+SgGBcbiAgICAgICAgOiBgWW91IHN1bmsgdGhlIGNvbXB1dGVyJ3MgJHtzaGlwLm5hbWV9ISDwn5qi8J+UpWA7XG5cbiAgICBmZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICB9XG5cbiAgaGFuZGxlR2FtZU92ZXIod2lubmVyKSB7XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgYWxlcnQoYEdhbWUgT3ZlciEgJHt3aW5uZXJ9IHdpbnMhYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gQ3JlYXRlIGEgMTB4MTAgZ3JpZCBpbml0aWFsaXplZCB3aXRoIG51bGxzXG4gICAgICB0aGlzLmdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgIHRoaXMuYXR0YWNrZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIH1cbiAgXG4gICAgY2FuUGxhY2VTaGlwKGxlbmd0aCwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW3ldW3ggKyBpXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFt5ICsgaV1beF0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3ldW3ggKyBpXSA9IHNoaXA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3kgKyBpXVt4XSA9IHNoaXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIH1cblxuICAgICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG5cbiAgICAgICAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gdGhpcy5hdHRhY2tlZENvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAoW3ByZXZYLCBwcmV2WV0pID0+IHByZXZYID09PSB4ICYmIHByZXZZID09PSB5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAgIHRoaXMuYXR0YWNrZWRDb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ3JpZFt5XVt4XTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5oaXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgICAgfVxuXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8vIHNyYy9QbGF5ZXIuanNcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICAgIHRoaXMuaXNDb21wdXRlciA9IGlzQ29tcHV0ZXI7XG4gICAgdGhpcy5hdmFpbGFibGVNb3ZlcyA9IFtdO1xuXG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgICB0aGlzLmF2YWlsYWJsZU1vdmVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF0dGFjayhib2FyZCwgeCwgeSkge1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH1cblxuICBwbGFjZVNoaXBzUmFuZG9tbHkoYm9hcmQsIGxhYmVsID0gJ1BsYXllcicpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAyLCAxXTtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG5cbiAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKGxlbmd0aCA9PiB7XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcblxuICAgICAgICBpZiAoYm9hcmQuY2FuUGxhY2VTaGlwKGxlbmd0aCwgeCwgeSwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpOyAvLyDinIUgQ3JlYXRlIGFjdHVhbCBTaGlwIGluc3RhbmNlXG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsYWJlbH06IFBsYWNlZCBzaGlwIG9mIGxlbmd0aCAke2xlbmd0aH0gYXQgKCR7eH0sICR7eX0pIHdpdGggZGlyZWN0aW9uICR7ZGlyZWN0aW9ufWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gcGxhY2Ugc2hpcCBvZiBsZW5ndGggJHtsZW5ndGh9IGF0ICgke3h9LCAke3l9KSB3aXRoIGRpcmVjdGlvbiAke2RpcmVjdGlvbn1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXR0YWNrUmFuZG9tKGJvYXJkKSB7XG4gICAgaWYgKCF0aGlzLmF2YWlsYWJsZU1vdmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF2YWlsYWJsZU1vdmVzLmxlbmd0aCk7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5hdmFpbGFibGVNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgY29uc29sZS5sb2coYENvbXB1dGVyIGF0dGFja3MgKCR7eH0sICR7eX0pYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiLy8gc3JjL1NoaXAuanNcbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZT0nU2hpcCcpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuICBcbiAgICBoaXQoKSB7XG4gICAgICBpZiAodGhpcy5oaXRzIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiAgIiwiLy8gc3JjL2RvbS5qc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkcyhnYW1lKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ib2FyZCcpO1xuICAgIGNvbnN0IHR1cm5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4taW5kaWNhdG9yJyk7XG4gICAgY29uc3QgZmVlZGJhY2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrLWluZGljYXRvcicpO1xuICBcbiAgICBwbGF5ZXJCb2FyZERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBjb21wdXRlckJvYXJkRGl2LmlubmVySFRNTCA9ICcnO1xuICAgIHR1cm5UZXh0LnRleHRDb250ZW50ID0gZ2FtZS5jdXJyZW50VHVybiA9PT0gJ3BsYXllcicgPyBcIlBsYXllcidzIHR1cm5cIiA6IFwiQ29tcHV0ZXIncyB0dXJuXCI7XG4gICAgLy8gZmVlZGJhY2tUZXh0LnRleHRDb250ZW50ID0gJyc7XG4gIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICAgIC8vIFBsYXllciBib2FyZFxuICAgICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllckNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllckhhc1NoaXAgPSBnYW1lLnBsYXllckJvYXJkLmdyaWRbeV1beF07XG4gICAgICAgIGNvbnN0IHdhc0F0dGFja2VkID0gZ2FtZS5wbGF5ZXJCb2FyZC5hdHRhY2tlZENvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgKFtheCwgYXldKSA9PiBheCA9PT0geCAmJiBheSA9PT0geVxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh3YXNBdHRhY2tlZCAmJiBwbGF5ZXJIYXNTaGlwKSB7XG4gICAgICAgICAgcGxheWVyQ2VsbC50ZXh0Q29udGVudCA9ICfinIUnOyAvLyBDb21wdXRlciBoaXQgYSBzaGlwXG4gICAgICAgIH0gZWxzZSBpZiAod2FzQXR0YWNrZWQgJiYgIXBsYXllckhhc1NoaXApIHtcbiAgICAgICAgICBwbGF5ZXJDZWxsLnRleHRDb250ZW50ID0gJ+KdjCc7IC8vIENvbXB1dGVyIG1pc3NlZFxuICAgICAgICB9IGVsc2UgaWYgKHBsYXllckhhc1NoaXApIHtcbiAgICAgICAgICBwbGF5ZXJDZWxsLnRleHRDb250ZW50ID0gJ/CfmqInOyAvLyBTaG93IHNoaXAgb25seSBpZiBub3QgeWV0IGhpdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllckNlbGwudGV4dENvbnRlbnQgPSAnJzsgLy8gZW1wdHkgY2VsbFxuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyQm9hcmREaXYuYXBwZW5kQ2hpbGQocGxheWVyQ2VsbCk7XG5cbiAgXG4gICAgICAgIC8vIENvbXB1dGVyIGJvYXJkXG4gICAgICAgIGNvbnN0IGNvbXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbXBDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgY29uc3QgaXNIaXQgPSBnYW1lLmNvbXB1dGVyQm9hcmQuYXR0YWNrZWRDb29yZGluYXRlcy5zb21lKChbYXgsIGF5XSkgPT4gYXggPT09IHggJiYgYXkgPT09IHkpO1xuICAgICAgICBjb25zdCBoYXNTaGlwID0gZ2FtZS5jb21wdXRlckJvYXJkLmdyaWRbeV1beF07XG4gIFxuICAgICAgICBpZiAoaXNIaXQgJiYgaGFzU2hpcCkge1xuICAgICAgICAgIGNvbXBDZWxsLnRleHRDb250ZW50ID0gJ+KchSc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNIaXQpIHtcbiAgICAgICAgICBjb21wQ2VsbC50ZXh0Q29udGVudCA9ICfinYwnO1xuICAgICAgICB9XG4gIFxuICAgICAgICBjb21wQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBnYW1lLnBsYXlUdXJuKHgsIHkpO1xuICAgICAgICBcbiAgICAgICAgICBjb25zdCBmZWVkYmFja1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZGJhY2staW5kaWNhdG9yJyk7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgaGl0IGEgc2hpcCBhdCAoJHt4fSwgJHt5fSkhIPCfjq9gO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgbWlzc2VkIGF0ICgke3h9LCAke3l9KSDinYxgO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnaW52YWxpZCcpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgYWxyZWFkeSBhdHRhY2tlZCAoJHt4fSwgJHt5fSkhYDtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIHJlbmRlckJvYXJkcyhnYW1lKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgXG4gICAgICAgIGNvbXB1dGVyQm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcENlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IEdhbWVDb250cm9sbGVyIGZyb20gJy4vR2FtZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgcmVuZGVyQm9hcmRzIH0gZnJvbSAnLi9kb20uanMnO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKHJlbmRlckJvYXJkcyk7IC8vIFBhc3MgcmVuZGVyQm9hcmRzIHRvIGNvbnN0cnVjdG9yXG5cbmdhbWUucGxheWVyLnBsYWNlU2hpcHNSYW5kb21seShnYW1lLnBsYXllckJvYXJkLCAnUGxheWVyJyk7XG5nYW1lLmNvbXB1dGVyLnBsYWNlU2hpcHNSYW5kb21seShnYW1lLmNvbXB1dGVyQm9hcmQsICdDb21wdXRlcicpO1xuXG5yZW5kZXJCb2FyZHMoZ2FtZSk7XG4iXSwibmFtZXMiOlsiUGxheWVyIiwiR2FtZWJvYXJkIiwiU2hpcCIsIkdhbWVDb250cm9sbGVyIiwicmVuZGVyQm9hcmRzIiwiX2NsYXNzQ2FsbENoZWNrIiwicGxheWVyIiwiY29tcHV0ZXIiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyQm9hcmQiLCJwbGFjZVNoaXAiLCJjdXJyZW50VHVybiIsImdhbWVPdmVyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwbGF5VHVybiIsIngiLCJ5IiwiX3RoaXMiLCJhdHRhY2tSZXN1bHQiLCJhdHRhY2siLCJmZWVkYmFjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImNvbmNhdCIsInRhcmdldCIsImdyaWQiLCJpc0hpdCIsInNoaXAiLCJpc1N1bmsiLCJzaG93U3Vua01lc3NhZ2UiLCJhcmVBbGxTaGlwc1N1bmsiLCJoYW5kbGVHYW1lT3ZlciIsInNldFRpbWVvdXQiLCJjb21wQXR0YWNrUmVzdWx0IiwiYXR0YWNrUmFuZG9tIiwibGFzdEF0dGFjayIsImF0dGFja2VkQ29vcmRpbmF0ZXMiLCJhdCIsIl9sYXN0QXR0YWNrIiwiX3NsaWNlZFRvQXJyYXkiLCJjeCIsImN5IiwiY2VsbCIsIm5hbWUiLCJvd25lciIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZlZWRiYWNrVGV4dCIsIm1lc3NhZ2UiLCJ3aW5uZXIiLCJhbGVydCIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJtaXNzZWRBdHRhY2tzIiwic2hpcHMiLCJjYW5QbGFjZVNoaXAiLCJkaXJlY3Rpb24iLCJpIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJhbHJlYWR5QXR0YWNrZWQiLCJzb21lIiwiX3JlZiIsIl9yZWYyIiwicHJldlgiLCJwcmV2WSIsImhpdCIsImV2ZXJ5IiwiaXNDb21wdXRlciIsImF2YWlsYWJsZU1vdmVzIiwiYm9hcmQiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJsYWJlbCIsInNoaXBMZW5ndGhzIiwiZGlyZWN0aW9ucyIsImZvckVhY2giLCJwbGFjZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJfdGhpcyRhdmFpbGFibGVNb3ZlcyQiLCJzcGxpY2UiLCJoaXRzIiwiZ2FtZSIsInBsYXllckJvYXJkRGl2IiwiY29tcHV0ZXJCb2FyZERpdiIsInR1cm5UZXh0IiwiaW5uZXJIVE1MIiwiX2xvb3AiLCJfbG9vcDIiLCJwbGF5ZXJDZWxsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInBsYXllckhhc1NoaXAiLCJ3YXNBdHRhY2tlZCIsImF4IiwiYXkiLCJhcHBlbmRDaGlsZCIsImNvbXBDZWxsIiwiX3JlZjMiLCJfcmVmNCIsImhhc1NoaXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==