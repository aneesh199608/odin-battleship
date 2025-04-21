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
  font-family: 'Space Grotesk', system-ui, sans-serif;
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

h1, h2, h3 {
  font-weight: 600;
}

.feedback {
  font-weight: 500;
  font-size: 16px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,mDAAmD;EACnD,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;EACR,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;AACF","sourcesContent":["body {\n  font-family: 'Space Grotesk', system-ui, sans-serif;\n  margin: 30px;\n  background-color: #f5f7fa;\n  color: #333;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n}\n\nh1, h2, h3 {\n  font-weight: 600;\n}\n\n.feedback {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n#turn-indicator,\n#feedback-indicator {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.boards-container {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  gap: 4px;\n  padding: 10px;\n  background-color: #dce6f1;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.cell {\n  width: 40px;\n  height: 40px;\n  background: #b3d4fc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.cell:hover {\n  background: #9cc3e6;\n}\n\n.cell:active {\n  background: #6ea1d\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDRGhHLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBR2lCLElBQUksRUFBRWlGLEtBQUssRUFBSztJQUNoQyxJQUFNRCxFQUFFLEdBQUcxQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztJQUN4RCxJQUFJLENBQUN5QixFQUFFLEVBQUU7SUFDVEEsRUFBRSxDQUFDbkIsV0FBVyxHQUNab0IsS0FBSyxLQUFLLFFBQVEsNkJBQUFyRixNQUFBLENBQ1lJLElBQUksQ0FBQ2MsSUFBSSxpREFBQWxCLE1BQUEsQ0FDUkksSUFBSSxDQUFDYyxJQUFJLCtCQUFRO0VBQ3BELENBQUM7RUFDRDlCLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFHK0IsTUFBTSxFQUFLO0lBQ3hCbUUsS0FBSyxlQUFBdEYsTUFBQSxDQUFlbUIsTUFBTSxXQUFRLENBQUM7RUFDckM7QUFDRixDQUFDLENBQUM7QUFFRnFDLElBQUksQ0FBQ3hFLEVBQUUsQ0FBQ0MsWUFBWSxDQUFDdUUsSUFBSSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7XG4gIGNvbG9yOiAjMzMzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5oMSwgaDIsIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZlZWRiYWNrIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jdHVybi1pbmRpY2F0b3IsXG4jZmVlZGJhY2staW5kaWNhdG9yIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDUwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2U2ZjE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNlbGwge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzljYzNlNjtcbn1cblxuLmNlbGw6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzZlYTFkXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1EQUFtRDtFQUNuRCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLFFBQVE7RUFDUixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYTtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbmgxLCBoMiwgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZlZWRiYWNrIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiN0dXJuLWluZGljYXRvcixcXG4jZmVlZGJhY2staW5kaWNhdG9yIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDUwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlNmYxO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNlbGwge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjOWNjM2U2O1xcbn1cXG5cXG4uY2VsbDphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzZlYTFkXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9HYW1lYm9hcmQuanMnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwLmpzJztcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcih1aUhhbmRsZXJzID0ge30pIHtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLmNvbXB1dGVyID0gbmV3IFBsYXllcih0cnVlKTtcblxuICAgIHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5jb21wdXRlckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgdGhpcy5wbGF5ZXIucGxhY2VTaGlwc1JhbmRvbWx5KHRoaXMucGxheWVyQm9hcmQsICdQbGF5ZXInKTtcbiAgICB0aGlzLmNvbXB1dGVyLnBsYWNlU2hpcHNSYW5kb21seSh0aGlzLmNvbXB1dGVyQm9hcmQsICdDb21wdXRlcicpO1xuXG5cbiAgICB0aGlzLmN1cnJlbnRUdXJuID0gJ3BsYXllcic7XG4gICAgdGhpcy51aSA9IHtcbiAgICAgIHJlbmRlckJvYXJkczogdWlIYW5kbGVycy5yZW5kZXJCb2FyZHMgfHwgKCgpID0+IHt9KSxcbiAgICAgIHNob3dGZWVkYmFjazogdWlIYW5kbGVycy5zaG93RmVlZGJhY2sgfHwgKCgpID0+IHt9KSxcbiAgICAgIHNob3dTdW5rTWVzc2FnZTogdWlIYW5kbGVycy5zaG93U3Vua01lc3NhZ2UgfHwgKCgpID0+IHt9KSxcbiAgICAgIHNob3dHYW1lT3ZlcjogdWlIYW5kbGVycy5zaG93R2FtZU92ZXIgfHwgKCgpID0+IHt9KVxuICAgIH07XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgcGxheVR1cm4oeCwgeSkge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyIHx8IHRoaXMuY3VycmVudFR1cm4gIT09ICdwbGF5ZXInKSByZXR1cm47XG5cbiAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSB0aGlzLnBsYXllci5hdHRhY2sodGhpcy5jb21wdXRlckJvYXJkLCB4LCB5KTtcbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy51aS5zaG93RmVlZGJhY2soYFlvdSBhbHJlYWR5IGF0dGFja2VkICgke3h9LCAke3l9KSFgKTtcbiAgICAgIHJldHVybiAnaW52YWxpZCc7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jb21wdXRlckJvYXJkLmdyaWRbeV1beF07XG4gICAgY29uc3QgaXNIaXQgPSB0YXJnZXQgIT09IG51bGw7XG5cbiAgICBpZiAodGFyZ2V0Py5zaGlwPy5pc1N1bmsoKSkge1xuICAgICAgdGhpcy51aS5zaG93U3Vua01lc3NhZ2UodGFyZ2V0LnNoaXAsICdjb21wdXRlcicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoJ1BsYXllcicpO1xuICAgICAgdGhpcy51aS5yZW5kZXJCb2FyZHModGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51aS5yZW5kZXJCb2FyZHModGhpcyk7XG5cbiAgICB0aGlzLmN1cnJlbnRUdXJuID0gJ2NvbXB1dGVyJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgIHRoaXMuY29tcHV0ZXIuYXR0YWNrUmFuZG9tKHRoaXMucGxheWVyQm9hcmQpO1xuICAgICAgY29uc3QgbGFzdEF0dGFjayA9IHRoaXMucGxheWVyQm9hcmQuYXR0YWNrZWRDb29yZGluYXRlcy5hdCgtMSk7XG5cbiAgICAgIGlmIChsYXN0QXR0YWNrKSB7XG4gICAgICAgIGNvbnN0IFtjeCwgY3ldID0gbGFzdEF0dGFjaztcbiAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMucGxheWVyQm9hcmQuZ3JpZFtjeV1bY3hdO1xuICAgICAgICBpZiAoY2VsbD8uc2hpcCkge1xuICAgICAgICAgIHRoaXMudWkuc2hvd0ZlZWRiYWNrKGBDb21wdXRlciBoaXQgeW91ciAke2NlbGwuc2hpcC5uYW1lfSBhdCAoJHtjeH0sICR7Y3l9KSEg8J+SpWApO1xuICAgICAgICAgIGlmIChjZWxsLnNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHRoaXMudWkuc2hvd1N1bmtNZXNzYWdlKGNlbGwuc2hpcCwgJ3BsYXllcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVpLnNob3dGZWVkYmFjayhgQ29tcHV0ZXIgbWlzc2VkIGF0ICgke2N4fSwgJHtjeX0pIOKdjGApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoJ0NvbXB1dGVyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRUdXJuID0gJ3BsYXllcic7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudWkucmVuZGVyQm9hcmRzKHRoaXMpO1xuICAgIH0sIDMwMCk7XG5cbiAgICByZXR1cm4gaXNIaXQgPyAnaGl0JyA6ICdtaXNzJztcbiAgfVxuXG4gIGhhbmRsZUdhbWVPdmVyKHdpbm5lcikge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHRoaXMudWkuc2hvd0dhbWVPdmVyKHdpbm5lcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gQ3JlYXRlIGEgMTB4MTAgZ3JpZCBpbml0aWFsaXplZCB3aXRoIG51bGxzXG4gICAgICB0aGlzLmdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgIHRoaXMuYXR0YWNrZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIH1cbiAgXG4gICAgY2FuUGxhY2VTaGlwKGxlbmd0aCwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGlmICh4ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW3ldW3ggKyBpXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBpZiAoeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFt5ICsgaV1beF0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3ldW3ggKyBpXSA9IHNoaXA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3kgKyBpXVt4XSA9IHNoaXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIH1cblxuICAgICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG5cbiAgICAgICAgY29uc3QgYWxyZWFkeUF0dGFja2VkID0gdGhpcy5hdHRhY2tlZENvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAoW3ByZXZYLCBwcmV2WV0pID0+IHByZXZYID09PSB4ICYmIHByZXZZID09PSB5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAgIHRoaXMuYXR0YWNrZWRDb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ3JpZFt5XVt4XTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldC5oaXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgICAgfVxuXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8vIHNyYy9QbGF5ZXIuanNcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcC5qcyc7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICAgIHRoaXMuaXNDb21wdXRlciA9IGlzQ29tcHV0ZXI7XG4gICAgdGhpcy5hdmFpbGFibGVNb3ZlcyA9IFtdO1xuXG4gICAgaWYgKGlzQ29tcHV0ZXIpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgICAgICB0aGlzLmF2YWlsYWJsZU1vdmVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF0dGFjayhib2FyZCwgeCwgeSkge1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH1cblxuICBwbGFjZVNoaXBzUmFuZG9tbHkoYm9hcmQsIGxhYmVsID0gJ1BsYXllcicpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAyLCAxXTtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG5cbiAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKGxlbmd0aCA9PiB7XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcblxuICAgICAgICBpZiAoYm9hcmQuY2FuUGxhY2VTaGlwKGxlbmd0aCwgeCwgeSwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpOyAvLyDinIUgQ3JlYXRlIGFjdHVhbCBTaGlwIGluc3RhbmNlXG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtsYWJlbH06IFBsYWNlZCBzaGlwIG9mIGxlbmd0aCAke2xlbmd0aH0gYXQgKCR7eH0sICR7eX0pIHdpdGggZGlyZWN0aW9uICR7ZGlyZWN0aW9ufWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBGYWlsZWQgdG8gcGxhY2Ugc2hpcCBvZiBsZW5ndGggJHtsZW5ndGh9IGF0ICgke3h9LCAke3l9KSB3aXRoIGRpcmVjdGlvbiAke2RpcmVjdGlvbn1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXR0YWNrUmFuZG9tKGJvYXJkKSB7XG4gICAgaWYgKCF0aGlzLmF2YWlsYWJsZU1vdmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF2YWlsYWJsZU1vdmVzLmxlbmd0aCk7XG4gICAgY29uc3QgW3gsIHldID0gdGhpcy5hdmFpbGFibGVNb3Zlcy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgY29uc29sZS5sb2coYENvbXB1dGVyIGF0dGFja3MgKCR7eH0sICR7eX0pYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiLy8gc3JjL1NoaXAuanNcbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZT0nU2hpcCcpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgfVxuICBcbiAgICBoaXQoKSB7XG4gICAgICBpZiAodGhpcy5oaXRzIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiAgIiwiLy8gc3JjL2RvbS5qc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvYXJkcyhnYW1lKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ib2FyZCcpO1xuICAgIGNvbnN0IHR1cm5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4taW5kaWNhdG9yJyk7XG4gICAgY29uc3QgZmVlZGJhY2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrLWluZGljYXRvcicpO1xuICBcbiAgICBwbGF5ZXJCb2FyZERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBjb21wdXRlckJvYXJkRGl2LmlubmVySFRNTCA9ICcnO1xuXG4gICAgcGxheWVyQm9hcmREaXYuY2xhc3NOYW1lID0gJ2JvYXJkJztcbiAgICBjb21wdXRlckJvYXJkRGl2LmNsYXNzTmFtZSA9ICdib2FyZCc7XG5cbiAgICB0dXJuVGV4dC50ZXh0Q29udGVudCA9IGdhbWUuY3VycmVudFR1cm4gPT09ICdwbGF5ZXInID8gXCJQbGF5ZXIncyB0dXJuXCIgOiBcIkNvbXB1dGVyJ3MgdHVyblwiO1xuICAgIC8vIGZlZWRiYWNrVGV4dC50ZXh0Q29udGVudCA9ICcnO1xuICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICAvLyBQbGF5ZXIgYm9hcmRcbiAgICAgICAgY29uc3QgcGxheWVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJIYXNTaGlwID0gZ2FtZS5wbGF5ZXJCb2FyZC5ncmlkW3ldW3hdO1xuICAgICAgICBjb25zdCB3YXNBdHRhY2tlZCA9IGdhbWUucGxheWVyQm9hcmQuYXR0YWNrZWRDb29yZGluYXRlcy5zb21lKFxuICAgICAgICAgIChbYXgsIGF5XSkgPT4gYXggPT09IHggJiYgYXkgPT09IHlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAod2FzQXR0YWNrZWQgJiYgcGxheWVySGFzU2hpcCkge1xuICAgICAgICAgIHBsYXllckNlbGwudGV4dENvbnRlbnQgPSAn4pyFJzsgLy8gQ29tcHV0ZXIgaGl0IGEgc2hpcFxuICAgICAgICB9IGVsc2UgaWYgKHdhc0F0dGFja2VkICYmICFwbGF5ZXJIYXNTaGlwKSB7XG4gICAgICAgICAgcGxheWVyQ2VsbC50ZXh0Q29udGVudCA9ICfinYwnOyAvLyBDb21wdXRlciBtaXNzZWRcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJIYXNTaGlwKSB7XG4gICAgICAgICAgcGxheWVyQ2VsbC50ZXh0Q29udGVudCA9ICfwn5qiJzsgLy8gU2hvdyBzaGlwIG9ubHkgaWYgbm90IHlldCBoaXRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXJDZWxsLnRleHRDb250ZW50ID0gJyc7IC8vIGVtcHR5IGNlbGxcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKHBsYXllckNlbGwpO1xuXG4gIFxuICAgICAgICAvLyBDb21wdXRlciBib2FyZFxuICAgICAgICBjb25zdCBjb21wQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb21wQ2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGNvbnN0IGlzSGl0ID0gZ2FtZS5jb21wdXRlckJvYXJkLmF0dGFja2VkQ29vcmRpbmF0ZXMuc29tZSgoW2F4LCBheV0pID0+IGF4ID09PSB4ICYmIGF5ID09PSB5KTtcbiAgICAgICAgY29uc3QgaGFzU2hpcCA9IGdhbWUuY29tcHV0ZXJCb2FyZC5ncmlkW3ldW3hdO1xuICBcbiAgICAgICAgaWYgKGlzSGl0ICYmIGhhc1NoaXApIHtcbiAgICAgICAgICBjb21wQ2VsbC50ZXh0Q29udGVudCA9ICfinIUnO1xuICAgICAgICB9IGVsc2UgaWYgKGlzSGl0KSB7XG4gICAgICAgICAgY29tcENlbGwudGV4dENvbnRlbnQgPSAn4p2MJztcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29tcENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZ2FtZS5wbGF5VHVybih4LCB5KTtcbiAgICAgICAgXG4gICAgICAgICAgY29uc3QgZmVlZGJhY2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWRiYWNrLWluZGljYXRvcicpO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICBmZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSBgWW91IGhpdCBhIHNoaXAgYXQgKCR7eH0sICR7eX0pISDwn46vYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICBmZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSBgWW91IG1pc3NlZCBhdCAoJHt4fSwgJHt5fSkg4p2MYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2ludmFsaWQnKSB7XG4gICAgICAgICAgICBmZWVkYmFja1RleHQudGV4dENvbnRlbnQgPSBgWW91IGFscmVhZHkgYXR0YWNrZWQgKCR7eH0sICR7eX0pIWA7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICByZW5kZXJCb2FyZHMoZ2FtZSk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gIFxuICAgICAgICBjb21wdXRlckJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXBDZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tICcuL0dhbWVDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IHJlbmRlckJvYXJkcyB9IGZyb20gJy4vZG9tLmpzJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcih7XG4gIHJlbmRlckJvYXJkcyxcbiAgc2hvd0ZlZWRiYWNrOiAobXNnKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlZGJhY2staW5kaWNhdG9yJyk7XG4gICAgaWYgKGVsKSBlbC50ZXh0Q29udGVudCA9IG1zZztcbiAgfSxcbiAgc2hvd1N1bmtNZXNzYWdlOiAoc2hpcCwgb3duZXIpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjay1pbmRpY2F0b3InKTtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgZWwudGV4dENvbnRlbnQgPVxuICAgICAgb3duZXIgPT09ICdwbGF5ZXInXG4gICAgICAgID8gYFRoZSBjb21wdXRlciBzdW5rIHlvdXIgJHtzaGlwLm5hbWV9ISDwn5KAYFxuICAgICAgICA6IGBZb3Ugc3VuayB0aGUgY29tcHV0ZXIncyAke3NoaXAubmFtZX0hIPCfmqLwn5SlYDtcbiAgfSxcbiAgc2hvd0dhbWVPdmVyOiAod2lubmVyKSA9PiB7XG4gICAgYWxlcnQoYEdhbWUgT3ZlciEgJHt3aW5uZXJ9IHdpbnMhYCk7XG4gIH0sXG59KTtcblxuZ2FtZS51aS5yZW5kZXJCb2FyZHMoZ2FtZSk7XG5cblxuIl0sIm5hbWVzIjpbIlBsYXllciIsIkdhbWVib2FyZCIsIlNoaXAiLCJHYW1lQ29udHJvbGxlciIsInVpSGFuZGxlcnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJwbGF5ZXIiLCJjb21wdXRlciIsInBsYXllckJvYXJkIiwiY29tcHV0ZXJCb2FyZCIsInBsYWNlU2hpcHNSYW5kb21seSIsImN1cnJlbnRUdXJuIiwidWkiLCJyZW5kZXJCb2FyZHMiLCJzaG93RmVlZGJhY2siLCJzaG93U3Vua01lc3NhZ2UiLCJzaG93R2FtZU92ZXIiLCJnYW1lT3ZlciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicGxheVR1cm4iLCJ4IiwieSIsIl90YXJnZXQkc2hpcCIsIl90aGlzIiwiYXR0YWNrUmVzdWx0IiwiYXR0YWNrIiwiY29uY2F0IiwidGFyZ2V0IiwiZ3JpZCIsImlzSGl0Iiwic2hpcCIsImlzU3VuayIsImFyZUFsbFNoaXBzU3VuayIsImhhbmRsZUdhbWVPdmVyIiwic2V0VGltZW91dCIsImF0dGFja1JhbmRvbSIsImxhc3RBdHRhY2siLCJhdHRhY2tlZENvb3JkaW5hdGVzIiwiYXQiLCJfbGFzdEF0dGFjayIsIl9zbGljZWRUb0FycmF5IiwiY3giLCJjeSIsImNlbGwiLCJuYW1lIiwid2lubmVyIiwiQXJyYXkiLCJmcm9tIiwiZmlsbCIsIm1pc3NlZEF0dGFja3MiLCJzaGlwcyIsImNhblBsYWNlU2hpcCIsImRpcmVjdGlvbiIsImkiLCJwbGFjZVNoaXAiLCJwdXNoIiwicmVjZWl2ZUF0dGFjayIsImFscmVhZHlBdHRhY2tlZCIsInNvbWUiLCJfcmVmIiwiX3JlZjIiLCJwcmV2WCIsInByZXZZIiwiaGl0IiwiZXZlcnkiLCJpc0NvbXB1dGVyIiwiYXZhaWxhYmxlTW92ZXMiLCJib2FyZCIsImxhYmVsIiwic2hpcExlbmd0aHMiLCJkaXJlY3Rpb25zIiwiZm9yRWFjaCIsInBsYWNlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIl90aGlzJGF2YWlsYWJsZU1vdmVzJCIsInNwbGljZSIsImhpdHMiLCJnYW1lIiwicGxheWVyQm9hcmREaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29tcHV0ZXJCb2FyZERpdiIsInR1cm5UZXh0IiwiZmVlZGJhY2tUZXh0IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJfbG9vcCIsIl9sb29wMiIsInBsYXllckNlbGwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicGxheWVySGFzU2hpcCIsIndhc0F0dGFja2VkIiwiYXgiLCJheSIsImFwcGVuZENoaWxkIiwiY29tcENlbGwiLCJfcmVmMyIsIl9yZWY0IiwiaGFzU2hpcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJtc2ciLCJlbCIsIm93bmVyIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9