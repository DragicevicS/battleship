/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hit.png */ "./src/images/hit.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-1: #F6F1F1;\n  --color-2: #19A7CE;\n  --color-3: #146C94;\n  --color-4: #404040;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', sans-serif;;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5em;\n  padding: 3em;\n  background-color: #ebe0e0;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  font-size: 1.5rem;\n  font-style: italic;\n}\n\n.container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 3em;\n  width: 100%;\n  padding: 2em;\n  background-color: var(--color-3);\n}\n\n.player-container,\n.opponent-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n/* ship lists */\n\n.player-ships,\n.opponent-ships {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  width: 100%;\n  color: var(--color-1);\n  font-size: 1.2rem;\n}\n\n.ship-status {\n  display: grid;\n  grid-template: 1fr / 1fr 1fr;\n  align-items: center;\n  gap: 1em\n}\n\n.ship-size {\n  display: flex;\n}\n\n.p_ship-block,\n.o_ship-block {\n  width: 0.9em;\n  height: 0.9em;\n  background-color: #b8ff4d;\n  border: solid 1px black;\n  border-collapse: collapse;\n}\n\n\n/* grids */\n\n.player-grid,\n.opponent-grid {\n  width: 100%;\n  background-color: var(--color-2);\n}\n\n.player-grid:hover,\n.opponent-grid:hover {\n  cursor: crosshair;\n}\n\ntr {\n  display: flex;\n}\n\ntd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.2em;\n  height: 2.2em;\n  border: solid 1px var(--color-4);\n}\n\ntd:hover{\n  border: solid 2px black;\n}\n\n.ship {\n  background-color: var(--color-4);\n}\n\n.miss {\n  background-color: #60cdeb;\n}\n\n.hit {\n  color: red;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #707070;\n}\n\n.miss:hover,\n.hit:hover {\n  cursor: default;\n  border: solid 1px var(--color-4);\n}\n\n.hidden {\n  background-color: var(--color-2);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,gCAAgC;AAClC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA,eAAe;;AAEf;;EAEE,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,WAAW;EACX,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,yBAAyB;AAC3B;;;AAGA,UAAU;;AAEV;;EAEE,WAAW;EACX,gCAAgC;AAClC;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,yDAAyC;EACzC,4BAA4B;EAC5B,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n\n:root {\n  --color-1: #F6F1F1;\n  --color-2: #19A7CE;\n  --color-3: #146C94;\n  --color-4: #404040;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', sans-serif;;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5em;\n  padding: 3em;\n  background-color: #ebe0e0;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  font-size: 1.5rem;\n  font-style: italic;\n}\n\n.container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 3em;\n  width: 100%;\n  padding: 2em;\n  background-color: var(--color-3);\n}\n\n.player-container,\n.opponent-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n/* ship lists */\n\n.player-ships,\n.opponent-ships {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  width: 100%;\n  color: var(--color-1);\n  font-size: 1.2rem;\n}\n\n.ship-status {\n  display: grid;\n  grid-template: 1fr / 1fr 1fr;\n  align-items: center;\n  gap: 1em\n}\n\n.ship-size {\n  display: flex;\n}\n\n.p_ship-block,\n.o_ship-block {\n  width: 0.9em;\n  height: 0.9em;\n  background-color: #b8ff4d;\n  border: solid 1px black;\n  border-collapse: collapse;\n}\n\n\n/* grids */\n\n.player-grid,\n.opponent-grid {\n  width: 100%;\n  background-color: var(--color-2);\n}\n\n.player-grid:hover,\n.opponent-grid:hover {\n  cursor: crosshair;\n}\n\ntr {\n  display: flex;\n}\n\ntd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.2em;\n  height: 2.2em;\n  border: solid 1px var(--color-4);\n}\n\ntd:hover{\n  border: solid 2px black;\n}\n\n.ship {\n  background-color: var(--color-4);\n}\n\n.miss {\n  background-color: #60cdeb;\n}\n\n.hit {\n  color: red;\n  background-image: url('./images/hit.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #707070;\n}\n\n.miss:hover,\n.hit:hover {\n  cursor: default;\n  border: solid 1px var(--color-4);\n}\n\n.hidden {\n  background-color: var(--color-2);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGrid: () => (/* binding */ createGrid),
/* harmony export */   placeOpponentShip: () => (/* binding */ placeOpponentShip),
/* harmony export */   placePlayerShip: () => (/* binding */ placePlayerShip),
/* harmony export */   receiveAttack: () => (/* binding */ receiveAttack)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');

const createGrid = (grid, size) => {
  for (let i=0; i < size; i++) {
    let gridRow = document.createElement('tr');
    grid.appendChild(gridRow);
    for (let j=0; j < size; j++) {
      let cell = document.createElement('td');
      grid.children[i].appendChild(cell);
      cell.classList = 'empty'
      if (grid === playerGrid) cell.setAttribute('id', `${i},${j},p`);
      if (grid === opponentGrid) cell.setAttribute('id', `${i},${j},o`);
    };
  };

  return grid;
};

const placePlayerShip = (ship, x, y, rotation) => {
  let empty = true;
  let td = document.getElementById(`${x},${y},p`);
  if (td.classList.contains('empty')) {
    if (rotation === 'h') {
      for (let i=0; i < ship.length; i++) {
        if (!document.getElementById(`${x},${y + i},p`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x},${y + i},p`).classList.remove('empty');
          document.getElementById(`${x},${y + i},p`).classList.add('ship', `${ship.name}`);
          ship.playerCoords.push([x, y + i]);
        };
      };
    };
    if (rotation === 'v') {
      for (let i=0; i < ship.length; i++) {
        if (!document.getElementById(`${x + i},${y},p`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x + i},${y},p`).classList.remove('empty');
          document.getElementById(`${x + i},${y},p`).classList.add('ship', `${ship.name}`);
          ship.playerCoords.push([x + i, y]);
        };
      };
    };
  };
};

const placeOpponentShip = (ship, x, y, rotation) => {
  let empty = true;
  let td = document.getElementById(`${x},${y},o`);
  if (td.classList.contains('empty')) {
    if (rotation === 'h') {
      for (let i=0; i < ship.length; i++) {
        if (!document.getElementById(`${x},${y + i},o`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x},${y + i},o`).classList.remove('empty');
          document.getElementById(`${x},${y + i},o`).classList.add('ship', `${ship.name}`, 'hidden');
          ship.opponentCoords.push([x, y + i]);
        };
      };
    };
    if (rotation === 'v') {
      for (let i=0; i < ship.length; i++) {
        if (!document.getElementById(`${x + i},${y},o`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x + i},${y},o`).classList.remove('empty');
          document.getElementById(`${x + i},${y},o`).classList.add('ship', `${ship.name}`, 'hidden');
          ship.opponentCoords.push([x + i, y]);
        };
      };
    };
  };
};
  
const receiveAttack = (grid, x, y) => {
  let td;
  if (grid === playerGrid) {
    td = document.getElementById(`${x},${y},p`);
    if (td.classList.contains('empty')) {
      td.innerHTML = `&#8226;`;
      td.classList.replace('empty', 'miss');
      td.classList.remove('hidden');
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.switchPlayer)();
      grid.removeEventListener('click', playerAttackHandler);
      opponentGrid.addEventListener('click', opponentAttackHandler);
    }
    else if (td.classList.contains('ship')) {
      td.classList.replace('ship', 'hit');
      td.classList.remove('hidden');
      for (let i=0; i < _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList.length; i++) {
        for (let j=0; j < _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i].playerCoords.length; j++) {
          if (JSON.stringify(_ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i].playerCoords[j]) == JSON.stringify([parseInt(x), parseInt(y)])) {
            _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i].hit();
            checkShipStatus(playerGrid, _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i]);
          };
        };
      };
    };
  };
  if (grid === opponentGrid) {
    td = document.getElementById(`${x},${y},o`);
    if (td.classList.contains('empty')) {
      td.innerHTML = `&#8226;`;
      td.classList.replace('empty', 'miss');
      td.classList.remove('hidden');
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.switchPlayer)();
      grid.removeEventListener('click', opponentAttackHandler);
      playerGrid.addEventListener('click', playerAttackHandler);
    }
    else if (td.classList.contains('ship')) {
      td.classList.replace('ship', 'hit');
      td.classList.remove('hidden');
      for (let i=0; i < _ship__WEBPACK_IMPORTED_MODULE_0__.o_shipList.length; i++) {
        for (let j=0; j < _ship__WEBPACK_IMPORTED_MODULE_0__.o_shipList[i].opponentCoords.length; j++) {
          if (JSON.stringify(_ship__WEBPACK_IMPORTED_MODULE_0__.o_shipList[i].opponentCoords[j]) == JSON.stringify([parseInt(x), parseInt(y)])) {
            _ship__WEBPACK_IMPORTED_MODULE_0__.o_shipList[i].hit();
            checkShipStatus(opponentGrid, _ship__WEBPACK_IMPORTED_MODULE_0__.o_shipList[i]);
          };
        };
      };
    };
  };
};

const checkShipStatus = (grid, ship) => {
  if (grid === playerGrid) if (ship.isSunk()) {
      const shipListDisplay = document.getElementsByClassName(`p_ship-block ${ship.name}`);
      for (let i=0; i < shipListDisplay.length; i++) {
        shipListDisplay[i].style.backgroundColor = '#ff4d4d';
      };
    };

  if (grid === opponentGrid) if (ship.isSunk()) {
    const shipListDisplay = document.getElementsByClassName(`o_ship-block ${ship.name}`);
      for (let i=0; i < shipListDisplay.length; i++) {
        shipListDisplay[i].style.backgroundColor = '#ff4d4d';
      };
  };
};

function playerAttackHandler(event) {
  let e = event;
  if (e.target !== playerGrid) {
    let coords = e.target.id.split(',');
    receiveAttack(playerGrid, coords[0], coords[1]);
  };
};

function opponentAttackHandler(event) {
  let e = event;
  if (e.target !== opponentGrid) {
    let coords = e.target.id.split(',');
    receiveAttack(opponentGrid, coords[0], coords[1]);
  };
};

opponentGrid.addEventListener('click', opponentAttackHandler); 

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activePlayer: () => (/* binding */ activePlayer),
/* harmony export */   players: () => (/* binding */ players),
/* harmony export */   switchPlayer: () => (/* binding */ switchPlayer)
/* harmony export */ });
const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');

const players = ['Player', 'AI overlord'];

let activePlayer = players[0];

const switchPlayer = () => {
  if (activePlayer === players[0]) {
    playerGrid.style.opacity = '1';
    opponentGrid.style.opacity = '0.5';
    activePlayer = players[1];
  } else {
    opponentGrid.style.opacity = '1';
    playerGrid.style.opacity = '0.5';
    activePlayer = players[0];
  };
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayShipList: () => (/* binding */ displayShipList),
/* harmony export */   o_shipList: () => (/* binding */ o_shipList),
/* harmony export */   p_shipList: () => (/* binding */ p_shipList)
/* harmony export */ });
const shipFactory = (length, name) => {
  let numOfHits = 0;
  let playerCoords = [];
  let opponentCoords = [];
  const hit = () => numOfHits += 1;
  const isSunk = () => numOfHits === length ? true : false;
  return { numOfHits, playerCoords, opponentCoords, length, name, hit, isSunk};
};

const p_carrier = shipFactory(5, 'Carrier');
const p_battleship = shipFactory(4, 'Battleship');
const p_destroyer = shipFactory(3, 'Destroyer');
const p_submarine = shipFactory(3, 'Submarine');
const p_patrolBoat = shipFactory(2, 'Patrol-boat');

const o_carrier = shipFactory(5, 'Carrier');
const o_battleship = shipFactory(4, 'Battleship');
const o_destroyer = shipFactory(3, 'Destroyer');
const o_submarine = shipFactory(3, 'Submarine');
const o_patrolBoat = shipFactory(2, 'Patrol-boat');
// const one = shipFactory(1, 'One block boat')

const p_shipList = [p_carrier, p_battleship, p_destroyer, p_submarine, p_patrolBoat];

const o_shipList = [o_carrier, o_battleship, o_destroyer, o_submarine, o_patrolBoat];

const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

const displayShipList = (player, list) => {
  let shipInfo = document.createElement('div');

  for (let i=0; i < list.length; i++) {
    let shipStatus = document.createElement('div');
    shipStatus.className = 'ship-status';
    let shipName = document.createElement('div');
    shipName.className = 'ship-name';
    let shipSize = document.createElement('div');
    shipSize.className = 'ship-size';

    let listP = document.createElement('p');
    listP.textContent = `${list[i].name}:`;

    shipName.appendChild(listP);

    for (let j=0; j < list[i].length; j++) {
      let shipBlock = document.createElement('div');
      if (player == playerShips) shipBlock.classList = `p_ship-block ${list[i].name}`;
      if (player == opponentShips) shipBlock.classList = `o_ship-block ${list[i].name}`;
      shipSize.appendChild(shipBlock);
    };

    shipStatus.appendChild(shipName);
    shipStatus.appendChild(shipSize);
    
    shipInfo.appendChild(shipStatus)
  };

  player.appendChild(shipInfo);
};

/***/ }),

/***/ "./src/images/hit.png":
/*!****************************!*\
  !*** ./src/images/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6ab420da729a1cffcb3.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");





const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

(0,_grid__WEBPACK_IMPORTED_MODULE_2__.createGrid)(playerGrid, 10);
(0,_ship__WEBPACK_IMPORTED_MODULE_1__.displayShipList)(playerShips, _ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList);
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.createGrid)(opponentGrid, 10);
(0,_ship__WEBPACK_IMPORTED_MODULE_1__.displayShipList)(opponentShips, _ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList);

(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placePlayerShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList[0], 0, 0, 'h');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placePlayerShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList[1], 2, 3, 'v');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placePlayerShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList[2], 8, 2, 'h');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placePlayerShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList[3], 5, 7, 'v');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placePlayerShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList[4], 3, 7, 'h');

(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placeOpponentShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList[0], 0, 0, 'h');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placeOpponentShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList[1], 2, 3, 'v');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placeOpponentShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList[2], 8, 2, 'h');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placeOpponentShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList[3], 5, 7, 'v');
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.placeOpponentShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList[4], 3, 7, 'h');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0QztBQUNrRTtBQUNwRTs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQVU7QUFDVixzREFBZSxjQUFjLDZDQUFVO0FBQ3ZDLGlEQUFVO0FBQ1Ysc0RBQWUsZ0JBQWdCLDZDQUFVOztBQUV6QyxzREFBZSxDQUFDLGdEQUFhO0FBQzdCLHNEQUFlLENBQUMsZ0RBQWE7QUFDN0Isc0RBQWUsQ0FBQyxnREFBYTtBQUM3QixzREFBZSxDQUFDLGdEQUFhO0FBQzdCLHNEQUFlLENBQUMsZ0RBQWE7O0FBRTdCLHdEQUFpQixDQUFDLGdEQUFhO0FBQy9CLHdEQUFpQixDQUFDLGdEQUFhO0FBQy9CLHdEQUFpQixDQUFDLGdEQUFhO0FBQy9CLHdEQUFpQixDQUFDLGdEQUFhO0FBQy9CLHdEQUFpQixDQUFDLGdEQUFhLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY29sb3ItMTogI0Y2RjFGMTtcXG4gIC0tY29sb3ItMjogIzE5QTdDRTtcXG4gIC0tY29sb3ItMzogIzE0NkM5NDtcXG4gIC0tY29sb3ItNDogIzQwNDA0MDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjs7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVlbTtcXG4gIHBhZGRpbmc6IDNlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmUwZTA7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM2VtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0zKTtcXG59XFxuXFxuLnBsYXllci1jb250YWluZXIsXFxuLm9wcG9uZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4vKiBzaGlwIGxpc3RzICovXFxuXFxuLnBsYXllci1zaGlwcyxcXG4ub3Bwb25lbnQtc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc2hpcC1zdGF0dXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW1cXG59XFxuXFxuLnNoaXAtc2l6ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucF9zaGlwLWJsb2NrLFxcbi5vX3NoaXAtYmxvY2sge1xcbiAgd2lkdGg6IDAuOWVtO1xcbiAgaGVpZ2h0OiAwLjllbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGZmNGQ7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcblxcbi8qIGdyaWRzICovXFxuXFxuLnBsYXllci1ncmlkLFxcbi5vcHBvbmVudC1ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi5wbGF5ZXItZ3JpZDpob3ZlcixcXG4ub3Bwb25lbnQtZ3JpZDpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxudHIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxudGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyLjJlbTtcXG4gIGhlaWdodDogMi4yZW07XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxudGQ6aG92ZXJ7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MGNkZWI7XFxufVxcblxcbi5oaXQge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5taXNzOmhvdmVyLFxcbi5oaXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBLGVBQWU7O0FBRWY7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7OztBQUdBLFVBQVU7O0FBRVY7O0VBRUUsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5REFBeUM7RUFDekMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1jb2xvci0xOiAjRjZGMUYxO1xcbiAgLS1jb2xvci0yOiAjMTlBN0NFO1xcbiAgLS1jb2xvci0zOiAjMTQ2Qzk0O1xcbiAgLS1jb2xvci00OiAjNDA0MDQwO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmOztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNWVtO1xcbiAgcGFkZGluZzogM2VtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZTBlMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi8qIHNoaXAgbGlzdHMgKi9cXG5cXG4ucGxheWVyLXNoaXBzLFxcbi5vcHBvbmVudC1zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5zaGlwLXN0YXR1cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbVxcbn1cXG5cXG4uc2hpcC1zaXplIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wX3NoaXAtYmxvY2ssXFxuLm9fc2hpcC1ibG9jayB7XFxuICB3aWR0aDogMC45ZW07XFxuICBoZWlnaHQ6IDAuOWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZmY0ZDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuXFxuLyogZ3JpZHMgKi9cXG5cXG4ucGxheWVyLWdyaWQsXFxuLm9wcG9uZW50LWdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuLnBsYXllci1ncmlkOmhvdmVyLFxcbi5vcHBvbmVudC1ncmlkOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG50ciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG50ZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIuMmVtO1xcbiAgaGVpZ2h0OiAyLjJlbTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG50ZDpob3ZlcntcXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwY2RlYjtcXG59XFxuXFxuLmhpdCB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9oaXQucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5taXNzOmhvdmVyLFxcbi5oaXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcF9zaGlwTGlzdCwgb19zaGlwTGlzdCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGFjdGl2ZVBsYXllciwgcGxheWVycywgc3dpdGNoUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWdyaWQnKTtcbmNvbnN0IG9wcG9uZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvbmVudC1ncmlkJyk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVHcmlkID0gKGdyaWQsIHNpemUpID0+IHtcbiAgZm9yIChsZXQgaT0wOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgbGV0IGdyaWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZFJvdyk7XG4gICAgZm9yIChsZXQgaj0wOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICBncmlkLmNoaWxkcmVuW2ldLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnZW1wdHknXG4gICAgICBpZiAoZ3JpZCA9PT0gcGxheWVyR3JpZCkgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX0sJHtqfSxwYCk7XG4gICAgICBpZiAoZ3JpZCA9PT0gb3Bwb25lbnRHcmlkKSBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfSwke2p9LG9gKTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBncmlkO1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYWNlUGxheWVyU2hpcCA9IChzaGlwLCB4LCB5LCByb3RhdGlvbikgPT4ge1xuICBsZXQgZW1wdHkgPSB0cnVlO1xuICBsZXQgdGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSwke3l9LHBgKTtcbiAgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgIGlmIChyb3RhdGlvbiA9PT0gJ2gnKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0sJHt5ICsgaX0scGApLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgaWYgKGVtcHR5ID09PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSwke3kgKyBpfSxwYCkuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSwke3kgKyBpfSxwYCkuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke3NoaXAubmFtZX1gKTtcbiAgICAgICAgICBzaGlwLnBsYXllckNvb3Jkcy5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICAgIGlmIChyb3RhdGlvbiA9PT0gJ3YnKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eCArIGl9LCR7eX0scGApLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgaWYgKGVtcHR5ID09PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4ICsgaX0sJHt5fSxwYCkuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4ICsgaX0sJHt5fSxwYCkuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke3NoaXAubmFtZX1gKTtcbiAgICAgICAgICBzaGlwLnBsYXllckNvb3Jkcy5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYWNlT3Bwb25lbnRTaGlwID0gKHNoaXAsIHgsIHksIHJvdGF0aW9uKSA9PiB7XG4gIGxldCBlbXB0eSA9IHRydWU7XG4gIGxldCB0ZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eX0sb2ApO1xuICBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgaWYgKHJvdGF0aW9uID09PSAnaCcpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSwke3kgKyBpfSxvYCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBpZiAoZW1wdHkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eSArIGl9LG9gKS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eSArIGl9LG9gKS5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7c2hpcC5uYW1lfWAsICdoaWRkZW4nKTtcbiAgICAgICAgICBzaGlwLm9wcG9uZW50Q29vcmRzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gICAgaWYgKHJvdGF0aW9uID09PSAndicpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4ICsgaX0sJHt5fSxvYCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBpZiAoZW1wdHkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ggKyBpfSwke3l9LG9gKS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ggKyBpfSwke3l9LG9gKS5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7c2hpcC5uYW1lfWAsICdoaWRkZW4nKTtcbiAgICAgICAgICBzaGlwLm9wcG9uZW50Q29vcmRzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59O1xuICBcbmV4cG9ydCBjb25zdCByZWNlaXZlQXR0YWNrID0gKGdyaWQsIHgsIHkpID0+IHtcbiAgbGV0IHRkO1xuICBpZiAoZ3JpZCA9PT0gcGxheWVyR3JpZCkge1xuICAgIHRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0sJHt5fSxwYCk7XG4gICAgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgdGQuaW5uZXJIVE1MID0gYCYjODIyNjtgO1xuICAgICAgdGQuY2xhc3NMaXN0LnJlcGxhY2UoJ2VtcHR5JywgJ21pc3MnKTtcbiAgICAgIHRkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgICBncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheWVyQXR0YWNrSGFuZGxlcik7XG4gICAgICBvcHBvbmVudEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHBvbmVudEF0dGFja0hhbmRsZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgdGQuY2xhc3NMaXN0LnJlcGxhY2UoJ3NoaXAnLCAnaGl0Jyk7XG4gICAgICB0ZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHBfc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgcF9zaGlwTGlzdFtpXS5wbGF5ZXJDb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocF9zaGlwTGlzdFtpXS5wbGF5ZXJDb29yZHNbal0pID09IEpTT04uc3RyaW5naWZ5KFtwYXJzZUludCh4KSwgcGFyc2VJbnQoeSldKSkge1xuICAgICAgICAgICAgcF9zaGlwTGlzdFtpXS5oaXQoKTtcbiAgICAgICAgICAgIGNoZWNrU2hpcFN0YXR1cyhwbGF5ZXJHcmlkLCBwX3NoaXBMaXN0W2ldKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xuICBpZiAoZ3JpZCA9PT0gb3Bwb25lbnRHcmlkKSB7XG4gICAgdGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSwke3l9LG9gKTtcbiAgICBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgICB0ZC5pbm5lckhUTUwgPSBgJiM4MjI2O2A7XG4gICAgICB0ZC5jbGFzc0xpc3QucmVwbGFjZSgnZW1wdHknLCAnbWlzcycpO1xuICAgICAgdGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICAgIGdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHBvbmVudEF0dGFja0hhbmRsZXIpO1xuICAgICAgcGxheWVyR3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFja0hhbmRsZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgdGQuY2xhc3NMaXN0LnJlcGxhY2UoJ3NoaXAnLCAnaGl0Jyk7XG4gICAgICB0ZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IG9fc2hpcExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgb19zaGlwTGlzdFtpXS5vcHBvbmVudENvb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShvX3NoaXBMaXN0W2ldLm9wcG9uZW50Q29vcmRzW2pdKSA9PSBKU09OLnN0cmluZ2lmeShbcGFyc2VJbnQoeCksIHBhcnNlSW50KHkpXSkpIHtcbiAgICAgICAgICAgIG9fc2hpcExpc3RbaV0uaGl0KCk7XG4gICAgICAgICAgICBjaGVja1NoaXBTdGF0dXMob3Bwb25lbnRHcmlkLCBvX3NoaXBMaXN0W2ldKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tTaGlwU3RhdHVzID0gKGdyaWQsIHNoaXApID0+IHtcbiAgaWYgKGdyaWQgPT09IHBsYXllckdyaWQpIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICBjb25zdCBzaGlwTGlzdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBwX3NoaXAtYmxvY2sgJHtzaGlwLm5hbWV9YCk7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBzaGlwTGlzdERpc3BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcExpc3REaXNwbGF5W2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY0ZDRkJztcbiAgICAgIH07XG4gICAgfTtcblxuICBpZiAoZ3JpZCA9PT0gb3Bwb25lbnRHcmlkKSBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgIGNvbnN0IHNoaXBMaXN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYG9fc2hpcC1ibG9jayAke3NoaXAubmFtZX1gKTtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXBMaXN0RGlzcGxheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzaGlwTGlzdERpc3BsYXlbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjRkNGQnO1xuICAgICAgfTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHBsYXllckF0dGFja0hhbmRsZXIoZXZlbnQpIHtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUudGFyZ2V0ICE9PSBwbGF5ZXJHcmlkKSB7XG4gICAgbGV0IGNvb3JkcyA9IGUudGFyZ2V0LmlkLnNwbGl0KCcsJyk7XG4gICAgcmVjZWl2ZUF0dGFjayhwbGF5ZXJHcmlkLCBjb29yZHNbMF0sIGNvb3Jkc1sxXSk7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBvcHBvbmVudEF0dGFja0hhbmRsZXIoZXZlbnQpIHtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUudGFyZ2V0ICE9PSBvcHBvbmVudEdyaWQpIHtcbiAgICBsZXQgY29vcmRzID0gZS50YXJnZXQuaWQuc3BsaXQoJywnKTtcbiAgICByZWNlaXZlQXR0YWNrKG9wcG9uZW50R3JpZCwgY29vcmRzWzBdLCBjb29yZHNbMV0pO1xuICB9O1xufTtcblxub3Bwb25lbnRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Bwb25lbnRBdHRhY2tIYW5kbGVyKTsgIiwiY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ3JpZCcpO1xuY29uc3Qgb3Bwb25lbnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LWdyaWQnKTtcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSBbJ1BsYXllcicsICdBSSBvdmVybG9yZCddO1xuXG5leHBvcnQgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG5cbmV4cG9ydCBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIHtcbiAgICBwbGF5ZXJHcmlkLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgb3Bwb25lbnRHcmlkLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzFdO1xuICB9IGVsc2Uge1xuICAgIG9wcG9uZW50R3JpZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIHBsYXllckdyaWQuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG4gIH07XG59XG5cbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xuICBsZXQgbnVtT2ZIaXRzID0gMDtcbiAgbGV0IHBsYXllckNvb3JkcyA9IFtdO1xuICBsZXQgb3Bwb25lbnRDb29yZHMgPSBbXTtcbiAgY29uc3QgaGl0ID0gKCkgPT4gbnVtT2ZIaXRzICs9IDE7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IG51bU9mSGl0cyA9PT0gbGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICByZXR1cm4geyBudW1PZkhpdHMsIHBsYXllckNvb3Jkcywgb3Bwb25lbnRDb29yZHMsIGxlbmd0aCwgbmFtZSwgaGl0LCBpc1N1bmt9O1xufTtcblxuY29uc3QgcF9jYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ0NhcnJpZXInKTtcbmNvbnN0IHBfYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQsICdCYXR0bGVzaGlwJyk7XG5jb25zdCBwX2Rlc3Ryb3llciA9IHNoaXBGYWN0b3J5KDMsICdEZXN0cm95ZXInKTtcbmNvbnN0IHBfc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ1N1Ym1hcmluZScpO1xuY29uc3QgcF9wYXRyb2xCb2F0ID0gc2hpcEZhY3RvcnkoMiwgJ1BhdHJvbC1ib2F0Jyk7XG5cbmNvbnN0IG9fY2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdDYXJyaWVyJyk7XG5jb25zdCBvX2JhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnQmF0dGxlc2hpcCcpO1xuY29uc3Qgb19kZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgzLCAnRGVzdHJveWVyJyk7XG5jb25zdCBvX3N1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KDMsICdTdWJtYXJpbmUnKTtcbmNvbnN0IG9fcGF0cm9sQm9hdCA9IHNoaXBGYWN0b3J5KDIsICdQYXRyb2wtYm9hdCcpO1xuLy8gY29uc3Qgb25lID0gc2hpcEZhY3RvcnkoMSwgJ09uZSBibG9jayBib2F0JylcblxuZXhwb3J0IGNvbnN0IHBfc2hpcExpc3QgPSBbcF9jYXJyaWVyLCBwX2JhdHRsZXNoaXAsIHBfZGVzdHJveWVyLCBwX3N1Ym1hcmluZSwgcF9wYXRyb2xCb2F0XTtcblxuZXhwb3J0IGNvbnN0IG9fc2hpcExpc3QgPSBbb19jYXJyaWVyLCBvX2JhdHRsZXNoaXAsIG9fZGVzdHJveWVyLCBvX3N1Ym1hcmluZSwgb19wYXRyb2xCb2F0XTtcblxuY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNoaXBzJyk7XG5jb25zdCBvcHBvbmVudFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LXNoaXBzJyk7XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5U2hpcExpc3QgPSAocGxheWVyLCBsaXN0KSA9PiB7XG4gIGxldCBzaGlwSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAobGV0IGk9MDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc2hpcFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBTdGF0dXMuY2xhc3NOYW1lID0gJ3NoaXAtc3RhdHVzJztcbiAgICBsZXQgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwTmFtZS5jbGFzc05hbWUgPSAnc2hpcC1uYW1lJztcbiAgICBsZXQgc2hpcFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwU2l6ZS5jbGFzc05hbWUgPSAnc2hpcC1zaXplJztcblxuICAgIGxldCBsaXN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaXN0UC50ZXh0Q29udGVudCA9IGAke2xpc3RbaV0ubmFtZX06YDtcblxuICAgIHNoaXBOYW1lLmFwcGVuZENoaWxkKGxpc3RQKTtcblxuICAgIGZvciAobGV0IGo9MDsgaiA8IGxpc3RbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzaGlwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGlmIChwbGF5ZXIgPT0gcGxheWVyU2hpcHMpIHNoaXBCbG9jay5jbGFzc0xpc3QgPSBgcF9zaGlwLWJsb2NrICR7bGlzdFtpXS5uYW1lfWA7XG4gICAgICBpZiAocGxheWVyID09IG9wcG9uZW50U2hpcHMpIHNoaXBCbG9jay5jbGFzc0xpc3QgPSBgb19zaGlwLWJsb2NrICR7bGlzdFtpXS5uYW1lfWA7XG4gICAgICBzaGlwU2l6ZS5hcHBlbmRDaGlsZChzaGlwQmxvY2spO1xuICAgIH07XG5cbiAgICBzaGlwU3RhdHVzLmFwcGVuZENoaWxkKHNoaXBOYW1lKTtcbiAgICBzaGlwU3RhdHVzLmFwcGVuZENoaWxkKHNoaXBTaXplKTtcbiAgICBcbiAgICBzaGlwSW5mby5hcHBlbmRDaGlsZChzaGlwU3RhdHVzKVxuICB9O1xuXG4gIHBsYXllci5hcHBlbmRDaGlsZChzaGlwSW5mbyk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwX3NoaXBMaXN0LCBvX3NoaXBMaXN0LCBkaXNwbGF5U2hpcExpc3QgfSBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHsgY3JlYXRlR3JpZCwgcGxhY2VPcHBvbmVudFNoaXAsIHBsYWNlUGxheWVyU2hpcCwgcmVjZWl2ZUF0dGFjaywgcGxheWVyQXR0YWNrSGFuZGxlciwgb3Bwb25lbnRBdHRhY2tIYW5kbGVyIH0gZnJvbSAnLi9ncmlkJztcbmltcG9ydCB7IGFjdGl2ZVBsYXllciwgc3dpdGNoUGxheWVyLCBwbGF5ZXJzIH0gZnJvbSAnLi9wbGF5ZXInO1xuXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ncmlkJyk7XG5jb25zdCBvcHBvbmVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtZ3JpZCcpO1xuY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNoaXBzJyk7XG5jb25zdCBvcHBvbmVudFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LXNoaXBzJyk7XG5cbmNyZWF0ZUdyaWQocGxheWVyR3JpZCwgMTApO1xuZGlzcGxheVNoaXBMaXN0KHBsYXllclNoaXBzLCBwX3NoaXBMaXN0KTtcbmNyZWF0ZUdyaWQob3Bwb25lbnRHcmlkLCAxMCk7XG5kaXNwbGF5U2hpcExpc3Qob3Bwb25lbnRTaGlwcywgb19zaGlwTGlzdCk7XG5cbnBsYWNlUGxheWVyU2hpcChwX3NoaXBMaXN0WzBdLCAwLCAwLCAnaCcpO1xucGxhY2VQbGF5ZXJTaGlwKHBfc2hpcExpc3RbMV0sIDIsIDMsICd2Jyk7XG5wbGFjZVBsYXllclNoaXAocF9zaGlwTGlzdFsyXSwgOCwgMiwgJ2gnKTtcbnBsYWNlUGxheWVyU2hpcChwX3NoaXBMaXN0WzNdLCA1LCA3LCAndicpO1xucGxhY2VQbGF5ZXJTaGlwKHBfc2hpcExpc3RbNF0sIDMsIDcsICdoJyk7XG5cbnBsYWNlT3Bwb25lbnRTaGlwKG9fc2hpcExpc3RbMF0sIDAsIDAsICdoJyk7XG5wbGFjZU9wcG9uZW50U2hpcChvX3NoaXBMaXN0WzFdLCAyLCAzLCAndicpO1xucGxhY2VPcHBvbmVudFNoaXAob19zaGlwTGlzdFsyXSwgOCwgMiwgJ2gnKTtcbnBsYWNlT3Bwb25lbnRTaGlwKG9fc2hpcExpc3RbM10sIDUsIDcsICd2Jyk7XG5wbGFjZU9wcG9uZW50U2hpcChvX3NoaXBMaXN0WzRdLCAzLCA3LCAnaCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==