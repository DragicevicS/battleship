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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-1: #F6F1F1;\n  --color-2: #19A7CE;\n  --color-3: #146C94;\n  --color-4: #404040;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', sans-serif;;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4em;\n  padding: 3em;\n  background-color: #ebe0e0;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  font-size: 1.5rem;\n  font-style: italic;\n}\n\n.wrapper {\n  width: 100%;\n  padding: 2em;\n  background-color: var(--color-3);\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n.game-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n}\n\n.player-container,\n.opponent-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n\n/* ship lists */\n\n.player-ships,\n.opponent-ships {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  width: 100%;\n  color: var(--color-1);\n  font-size: 1.2rem;\n}\n\n.ship-status {\n  display: grid;\n  grid-template: 1fr / 1fr 1fr;\n  align-items: center;\n  gap: 1em\n}\n\n.ship-size {\n  display: flex;\n}\n\n.p_ship-block,\n.o_ship-block {\n  width: 0.9em;\n  height: 0.9em;\n  background-color: #b8ff4d;\n  border: solid 1px black;\n  border-collapse: collapse;\n}\n\n\n/* grids */\n\n.player-grid,\n.opponent-grid {\n  width: 100%;\n  background-color: var(--color-2);\n}\n\n.opponent-grid:hover {\n  cursor: crosshair;\n}\n\ntr {\n  display: flex;\n}\n\ntd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.2em;\n  height: 2.2em;\n  border: solid 1px var(--color-4);\n}\n\ntd:hover{\n  border: solid 2px black;\n}\n\n.ship {\n  background-color: var(--color-4);\n}\n\n.miss {\n  background-color: #60cdeb;\n}\n\n.hit {\n  color: red;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #707070;\n}\n\n.miss:hover,\n.hit:hover {\n  cursor: default;\n  border: solid 1px var(--color-4);\n}\n\n.hidden {\n  background-color: var(--color-2);\n}\n\n\n/* buttons */\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n}\n\n.random-btn,\n.start-btn {\n  padding: 8px 0;\n  width: 8em;\n  color: var(--color-1);\n  background-color: var(--color-2);\n  font-size: 1rem;\n  border: solid 2px transparent;\n  border-radius: 5px;\n  transition: transform .4s ease;\n}\n\n.random-btn:hover,\n.start-btn:hover {\n  border: solid 2px var(--color-4);\n  transform: scale(1.08);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;AACb;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;;AAGA,eAAe;;AAEf;;EAEE,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,WAAW;EACX,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,yBAAyB;AAC3B;;;AAGA,UAAU;;AAEV;;EAEE,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,yDAAyC;EACzC,4BAA4B;EAC5B,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;;EAEE,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;;AAGA,YAAY;;AAEZ;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;;EAEE,cAAc;EACd,UAAU;EACV,qBAAqB;EACrB,gCAAgC;EAChC,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;;EAEE,gCAAgC;EAChC,sBAAsB;AACxB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n\n:root {\n  --color-1: #F6F1F1;\n  --color-2: #19A7CE;\n  --color-3: #146C94;\n  --color-4: #404040;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Ubuntu', sans-serif;;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4em;\n  padding: 3em;\n  background-color: #ebe0e0;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  font-size: 1.5rem;\n  font-style: italic;\n}\n\n.wrapper {\n  width: 100%;\n  padding: 2em;\n  background-color: var(--color-3);\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n.game-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n}\n\n.player-container,\n.opponent-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n}\n\n\n/* ship lists */\n\n.player-ships,\n.opponent-ships {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  width: 100%;\n  color: var(--color-1);\n  font-size: 1.2rem;\n}\n\n.ship-status {\n  display: grid;\n  grid-template: 1fr / 1fr 1fr;\n  align-items: center;\n  gap: 1em\n}\n\n.ship-size {\n  display: flex;\n}\n\n.p_ship-block,\n.o_ship-block {\n  width: 0.9em;\n  height: 0.9em;\n  background-color: #b8ff4d;\n  border: solid 1px black;\n  border-collapse: collapse;\n}\n\n\n/* grids */\n\n.player-grid,\n.opponent-grid {\n  width: 100%;\n  background-color: var(--color-2);\n}\n\n.opponent-grid:hover {\n  cursor: crosshair;\n}\n\ntr {\n  display: flex;\n}\n\ntd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.2em;\n  height: 2.2em;\n  border: solid 1px var(--color-4);\n}\n\ntd:hover{\n  border: solid 2px black;\n}\n\n.ship {\n  background-color: var(--color-4);\n}\n\n.miss {\n  background-color: #60cdeb;\n}\n\n.hit {\n  color: red;\n  background-image: url('./images/hit.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #707070;\n}\n\n.miss:hover,\n.hit:hover {\n  cursor: default;\n  border: solid 1px var(--color-4);\n}\n\n.hidden {\n  background-color: var(--color-2);\n}\n\n\n/* buttons */\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n}\n\n.random-btn,\n.start-btn {\n  padding: 8px 0;\n  width: 8em;\n  color: var(--color-1);\n  background-color: var(--color-2);\n  font-size: 1rem;\n  border: solid 2px transparent;\n  border-radius: 5px;\n  transition: transform .4s ease;\n}\n\n.random-btn:hover,\n.start-btn:hover {\n  border: solid 2px var(--color-4);\n  transform: scale(1.08);\n}"],"sourceRoot":""}]);
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
/* harmony export */   opponentAttackHandler: () => (/* binding */ opponentAttackHandler),
/* harmony export */   placeOpponentShip: () => (/* binding */ placeOpponentShip),
/* harmony export */   placePlayerShip: () => (/* binding */ placePlayerShip),
/* harmony export */   receiveAttack: () => (/* binding */ receiveAttack)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const shipSizes = document.getElementsByClassName('p_ship-block');
const p_totalHits = playerGrid.getElementsByClassName('hit');
const o_totalHits = opponentGrid.getElementsByClassName('hit');

const createGrid = (grid, size) => { // create a grid (size x size)
  for (let i=0; i < size; i++) {
    let gridRow = document.createElement('tr');
    grid.appendChild(gridRow);
    for (let j=0; j < size; j++) {
      let cell = document.createElement('td');
      grid.children[i].appendChild(cell);
      cell.classList = 'empty'
      // set an unique id for each cell depending on which grid it's placed
      if (grid === playerGrid) cell.setAttribute('id', `${i},${j},p`);
      if (grid === opponentGrid) cell.setAttribute('id', `${i},${j},o`);
    };
  };

  return grid;
};

const placePlayerShip = (ship) => { // places player ships on player grid at random coords
  let empty = true;
  let rotation = Math.random() < 0.5 ? 'h' : 'v';
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let td = document.getElementById(`${x},${y},p`);
  // checks if the random selected cell is empty and if the rest of the cell empty, depending on the ship's length and rotation
  if (td.classList.contains('empty')) {
    if (rotation === 'h') {
      for (let i=0; i < ship.length; i++) {
        if (y + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x},${y + i},p`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placePlayerShip(ship);
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
        if (x + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x + i},${y},p`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placePlayerShip(ship); // if it's not a valid position, try again in a different place
      if (empty === true) { // if it's a valid position, place ship
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x + i},${y},p`).classList.remove('empty');
          document.getElementById(`${x + i},${y},p`).classList.add('ship', `${ship.name}`);
          ship.playerCoords.push([x + i, y]);
        };
      };
    };
  } else placePlayerShip(ship); // if the selected cell is not empty, try again in a different place
};

const placeOpponentShip = (ship) => { // same as the placePlayerShip function, but uses a ships and coords for the opponent's grid
  let empty = true;
  let rotation = Math.random() < 0.5 ? 'h' : 'v';
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let td = document.getElementById(`${x},${y},o`);
  if (td.classList.contains('empty')) {
    if (rotation === 'h') {
      for (let i=0; i < ship.length; i++) {
        if (y + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x},${y + i},o`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placeOpponentShip(ship);
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
        if (x + i > 9) {
          empty = false;
          break;
        };
        if (!document.getElementById(`${x + i},${y},o`).classList.contains('empty')) {
          empty = false;
          break;
        };
      };
      if (empty === false) placeOpponentShip(ship);
      if (empty === true) {
        for (let i=0; i < ship.length; i++) {
          document.getElementById(`${x + i},${y},o`).classList.remove('empty');
          document.getElementById(`${x + i},${y},o`).classList.add('ship', `${ship.name}`, 'hidden');
          ship.opponentCoords.push([x + i, y]);
        };
      };
    };
  } else placeOpponentShip(ship);
};

const receiveAttack = (grid, x, y) => { // display attack on grids if a valid cell is selected
  let td;
  if (grid === playerGrid) {
    td = document.getElementById(`${x},${y},p`);
    if (td.classList.contains('empty')) {
      td.innerHTML = `&#8226;`;
      td.classList.replace('empty', 'miss');
      td.classList.remove('hidden');
      (0,_player__WEBPACK_IMPORTED_MODULE_1__.switchPlayer)();
      // event listener swapping if 2 players are playing, instead of player vs AI
      // grid.removeEventListener('click', playerAttackHandler);
      // opponentGrid.addEventListener('click', opponentAttackHandler);
    }
    else if (td.classList.contains('ship')) {
      td.classList.replace('ship', 'hit');
      td.classList.remove('hidden');
      for (let i=0; i < _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList.length; i++) {
        for (let j=0; j < _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i].playerCoords.length; j++) {
          if (JSON.stringify(_ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i].playerCoords[j]) == JSON.stringify([parseInt(x), parseInt(y)])) {
            _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i].hit();
            checkShipStatus(playerGrid, _ship__WEBPACK_IMPORTED_MODULE_0__.p_shipList[i]);
            setTimeout(() => { // if the AI makes a hit, it does another move until it misses
              (0,_player__WEBPACK_IMPORTED_MODULE_1__.AIattack)();
            }, 500);
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
      // event listener swapping if 2 players are playing, instead of player vs AI
      // grid.removeEventListener('click', opponentAttackHandler);
      // playerGrid.addEventListener('click', playerAttackHandler);
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

const checkShipStatus = (grid, ship) => { // checks if the current ship being hit is destroyed, updates the ship list if it is and also checks if all ships are destroyed
  if (grid === playerGrid) if (ship.isSunk()) {
      const shipListDisplay = document.getElementsByClassName(`p_ship-block ${ship.name}`);
      for (let i=0; i < shipListDisplay.length; i++) {
        shipListDisplay[i].style.backgroundColor = '#ff4d4d';
      };
      if (p_totalHits.length === shipSizes.length) setTimeout(() => { alert(`${_player__WEBPACK_IMPORTED_MODULE_1__.players[1]} won!`); location.reload(); }, 100);
    };

  if (grid === opponentGrid) if (ship.isSunk()) {
    const shipListDisplay = document.getElementsByClassName(`o_ship-block ${ship.name}`);
      for (let i=0; i < shipListDisplay.length; i++) {
        shipListDisplay[i].style.backgroundColor = '#ff4d4d';
      };
      if (o_totalHits.length === shipSizes.length) setTimeout(() => { alert(`${_player__WEBPACK_IMPORTED_MODULE_1__.players[0]} won!`); location.reload(); } , 100);
  };
};

function playerAttackHandler(event) { // handler function for the player's grid event listener
  let e = event;
  if (e.target !== playerGrid) {
    let coords = e.target.id.split(',');
    receiveAttack(playerGrid, coords[0], coords[1]);
  };
};

function opponentAttackHandler(event) { // handler function for the opponent's grid event listener
  let e = event;
  if (e.target !== opponentGrid) {
    let coords = e.target.id.split(',');
    receiveAttack(opponentGrid, coords[0], coords[1]);
  };
};

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIattack: () => (/* binding */ AIattack),
/* harmony export */   activePlayer: () => (/* binding */ activePlayer),
/* harmony export */   players: () => (/* binding */ players),
/* harmony export */   switchPlayer: () => (/* binding */ switchPlayer)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn');

const players = ['Player', 'AI overlord']; // define player names

let activePlayer = players[0];

const switchPlayer = () => { // switch player on end of the turn
  if (activePlayer === players[0]) {
    opponentGrid.removeEventListener('click', _grid__WEBPACK_IMPORTED_MODULE_0__.opponentAttackHandler);
    playerGrid.style.opacity = '1';
    opponentGrid.style.opacity = '0.5';
    activePlayer = players[1];
    setTimeout(() => {
      AIattack();
    }, 500);
  } else {
    opponentGrid.addEventListener('click', _grid__WEBPACK_IMPORTED_MODULE_0__.opponentAttackHandler);
    opponentGrid.style.opacity = '1';
    playerGrid.style.opacity = '0.5';
    activePlayer = players[0];
  };
};

randomBtn.addEventListener('click', () => { // randomize player 1 ship placement
  playerGrid.textContent = '';
  (0,_grid__WEBPACK_IMPORTED_MODULE_0__.createGrid)(playerGrid, 10);
  for (let i=0; i < _ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList.length; i++) {
    (0,_grid__WEBPACK_IMPORTED_MODULE_0__.placePlayerShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList[i]);
  };
});

startBtn.addEventListener('click', () => { // start the game removing buttons and adding an event listener for player one to make move
  randomBtn.style.visibility = 'hidden';
  startBtn.style.visibility = 'hidden';
  playerGrid.style.opacity = '0.5';
  opponentGrid.addEventListener('click', _grid__WEBPACK_IMPORTED_MODULE_0__.opponentAttackHandler); 
});

const AImoves = []; // array of AI moves

const AIattack = function() { // make the AI choose a random, unselected cell
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let newMove = `${x},${y}`;
  if (AImoves.includes(newMove)) AIattack();
  else {
    AImoves.push(newMove);
    (0,_grid__WEBPACK_IMPORTED_MODULE_0__.receiveAttack)(playerGrid, x, y); // display move if it's a valid (unselected) cell
    console.log(newMove, AImoves);
  };
};





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
const shipFactory = (length, name) => { // factory function for creating ships with specific length, name and methods
  let numOfHits = 0;
  let playerCoords = [];
  let opponentCoords = [];
  const hit = () => numOfHits += 1;
  const isSunk = () => numOfHits === length ? true : false;
  return { numOfHits, playerCoords, opponentCoords, length, name, hit, isSunk};
};

// creating ship for each player and adding them to ship lists
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

const p_shipList = [p_carrier, p_battleship, p_destroyer, p_submarine, p_patrolBoat];
const o_shipList = [o_carrier, o_battleship, o_destroyer, o_submarine, o_patrolBoat];


const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

const displayShipList = (player, list) => { // displays ship names and their size
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




const playerGrid = document.querySelector('.player-grid');
const opponentGrid = document.querySelector('.opponent-grid');
const playerShips = document.querySelector('.player-ships');
const opponentShips = document.querySelector('.opponent-ships');

// create both grids and display a list of ships for each player
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.createGrid)(playerGrid, 10);
(0,_ship__WEBPACK_IMPORTED_MODULE_1__.displayShipList)(playerShips, _ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList);
(0,_grid__WEBPACK_IMPORTED_MODULE_2__.createGrid)(opponentGrid, 10);
(0,_ship__WEBPACK_IMPORTED_MODULE_1__.displayShipList)(opponentShips, _ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList);

// place the ships at random coords
for (let i=0; i < _ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList.length; i++) {
  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.placePlayerShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.p_shipList[i]);
  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.placeOpponentShip)(_ship__WEBPACK_IMPORTED_MODULE_1__.o_shipList[i]);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEM7QUFDTzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBVTtBQUNWLHNEQUFlLGNBQWMsNkNBQVU7QUFDdkMsaURBQVU7QUFDVixzREFBZSxnQkFBZ0IsNkNBQVU7O0FBRXpDO0FBQ0EsY0FBYyxJQUFJLG9EQUFpQixFQUFFO0FBQ3JDLEVBQUUsc0RBQWUsQ0FBQyw2Q0FBVTtBQUM1QixFQUFFLHdEQUFpQixDQUFDLDZDQUFVO0FBQzlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9oaXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY29sb3ItMTogI0Y2RjFGMTtcXG4gIC0tY29sb3ItMjogIzE5QTdDRTtcXG4gIC0tY29sb3ItMzogIzE0NkM5NDtcXG4gIC0tY29sb3ItNDogIzQwNDA0MDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjs7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRlbTtcXG4gIHBhZGRpbmc6IDNlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmUwZTA7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcblxcbi8qIHNoaXAgbGlzdHMgKi9cXG5cXG4ucGxheWVyLXNoaXBzLFxcbi5vcHBvbmVudC1zaGlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5zaGlwLXN0YXR1cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbVxcbn1cXG5cXG4uc2hpcC1zaXplIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wX3NoaXAtYmxvY2ssXFxuLm9fc2hpcC1ibG9jayB7XFxuICB3aWR0aDogMC45ZW07XFxuICBoZWlnaHQ6IDAuOWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZmY0ZDtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuXFxuLyogZ3JpZHMgKi9cXG5cXG4ucGxheWVyLWdyaWQsXFxuLm9wcG9uZW50LWdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG59XFxuXFxuLm9wcG9uZW50LWdyaWQ6aG92ZXIge1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbnRyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbnRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMi4yZW07XFxuICBoZWlnaHQ6IDIuMmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbnRkOmhvdmVye1xcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBjZGViO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4ubWlzczpob3ZlcixcXG4uaGl0OmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTIpO1xcbn1cXG5cXG5cXG4vKiBidXR0b25zICovXFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5yYW5kb20tYnRuLFxcbi5zdGFydC1idG4ge1xcbiAgcGFkZGluZzogOHB4IDA7XFxuICB3aWR0aDogOGVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZTtcXG59XFxuXFxuLnJhbmRvbS1idG46aG92ZXIsXFxuLnN0YXJ0LWJ0bjpob3ZlciB7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci00KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7OztBQUdBLGVBQWU7O0FBRWY7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7OztBQUdBLFVBQVU7O0FBRVY7O0VBRUUsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlEQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOzs7QUFHQSxZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLTE6ICNGNkYxRjE7XFxuICAtLWNvbG9yLTI6ICMxOUE3Q0U7XFxuICAtLWNvbG9yLTM6ICMxNDZDOTQ7XFxuICAtLWNvbG9yLTQ6ICM0MDQwNDA7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0ZW07XFxuICBwYWRkaW5nOiAzZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlMGUwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBsYXllci1jb250YWluZXIsXFxuLm9wcG9uZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbn1cXG5cXG5cXG4vKiBzaGlwIGxpc3RzICovXFxuXFxuLnBsYXllci1zaGlwcyxcXG4ub3Bwb25lbnQtc2hpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci0xKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc2hpcC1zdGF0dXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxZW1cXG59XFxuXFxuLnNoaXAtc2l6ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucF9zaGlwLWJsb2NrLFxcbi5vX3NoaXAtYmxvY2sge1xcbiAgd2lkdGg6IDAuOWVtO1xcbiAgaGVpZ2h0OiAwLjllbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGZmNGQ7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcblxcbi8qIGdyaWRzICovXFxuXFxuLnBsYXllci1ncmlkLFxcbi5vcHBvbmVudC1ncmlkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblxcbi5vcHBvbmVudC1ncmlkOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG50ciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG50ZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIuMmVtO1xcbiAgaGVpZ2h0OiAyLjJlbTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLTQpO1xcbn1cXG5cXG50ZDpob3ZlcntcXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci00KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwY2RlYjtcXG59XFxuXFxuLmhpdCB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9oaXQucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbi5taXNzOmhvdmVyLFxcbi5oaXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItNCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItMik7XFxufVxcblxcblxcbi8qIGJ1dHRvbnMgKi9cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLnJhbmRvbS1idG4sXFxuLnN0YXJ0LWJ0biB7XFxuICBwYWRkaW5nOiA4cHggMDtcXG4gIHdpZHRoOiA4ZW07XFxuICBjb2xvcjogdmFyKC0tY29sb3ItMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlO1xcbn1cXG5cXG4ucmFuZG9tLWJ0bjpob3ZlcixcXG4uc3RhcnQtYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLTQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwX3NoaXBMaXN0LCBvX3NoaXBMaXN0IH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgQUlhdHRhY2ssIHBsYXllcnMsIHN3aXRjaFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ncmlkJyk7XG5jb25zdCBvcHBvbmVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtZ3JpZCcpO1xuY29uc3Qgc2hpcFNpemVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncF9zaGlwLWJsb2NrJyk7XG5jb25zdCBwX3RvdGFsSGl0cyA9IHBsYXllckdyaWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGl0Jyk7XG5jb25zdCBvX3RvdGFsSGl0cyA9IG9wcG9uZW50R3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoaXQnKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdyaWQgPSAoZ3JpZCwgc2l6ZSkgPT4geyAvLyBjcmVhdGUgYSBncmlkIChzaXplIHggc2l6ZSlcbiAgZm9yIChsZXQgaT0wOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgbGV0IGdyaWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZFJvdyk7XG4gICAgZm9yIChsZXQgaj0wOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICBncmlkLmNoaWxkcmVuW2ldLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnZW1wdHknXG4gICAgICAvLyBzZXQgYW4gdW5pcXVlIGlkIGZvciBlYWNoIGNlbGwgZGVwZW5kaW5nIG9uIHdoaWNoIGdyaWQgaXQncyBwbGFjZWRcbiAgICAgIGlmIChncmlkID09PSBwbGF5ZXJHcmlkKSBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfSwke2p9LHBgKTtcbiAgICAgIGlmIChncmlkID09PSBvcHBvbmVudEdyaWQpIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9LCR7an0sb2ApO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcGxhY2VQbGF5ZXJTaGlwID0gKHNoaXApID0+IHsgLy8gcGxhY2VzIHBsYXllciBzaGlwcyBvbiBwbGF5ZXIgZ3JpZCBhdCByYW5kb20gY29vcmRzXG4gIGxldCBlbXB0eSA9IHRydWU7XG4gIGxldCByb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaCcgOiAndic7XG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IHRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0sJHt5fSxwYCk7XG4gIC8vIGNoZWNrcyBpZiB0aGUgcmFuZG9tIHNlbGVjdGVkIGNlbGwgaXMgZW1wdHkgYW5kIGlmIHRoZSByZXN0IG9mIHRoZSBjZWxsIGVtcHR5LCBkZXBlbmRpbmcgb24gdGhlIHNoaXAncyBsZW5ndGggYW5kIHJvdGF0aW9uXG4gIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcbiAgICBpZiAocm90YXRpb24gPT09ICdoJykge1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoeSArIGkgPiA5KSB7XG4gICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fSwke3kgKyBpfSxwYCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBpZiAoZW1wdHkgPT09IGZhbHNlKSBwbGFjZVBsYXllclNoaXAoc2hpcCk7XG4gICAgICBpZiAoZW1wdHkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eSArIGl9LHBgKS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eSArIGl9LHBgKS5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7c2hpcC5uYW1lfWApO1xuICAgICAgICAgIHNoaXAucGxheWVyQ29vcmRzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gICAgaWYgKHJvdGF0aW9uID09PSAndicpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHggKyBpID4gOSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eCArIGl9LCR7eX0scGApLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgaWYgKGVtcHR5ID09PSBmYWxzZSkgcGxhY2VQbGF5ZXJTaGlwKHNoaXApOyAvLyBpZiBpdCdzIG5vdCBhIHZhbGlkIHBvc2l0aW9uLCB0cnkgYWdhaW4gaW4gYSBkaWZmZXJlbnQgcGxhY2VcbiAgICAgIGlmIChlbXB0eSA9PT0gdHJ1ZSkgeyAvLyBpZiBpdCdzIGEgdmFsaWQgcG9zaXRpb24sIHBsYWNlIHNoaXBcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ggKyBpfSwke3l9LHBgKS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ggKyBpfSwke3l9LHBgKS5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7c2hpcC5uYW1lfWApO1xuICAgICAgICAgIHNoaXAucGxheWVyQ29vcmRzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH0gZWxzZSBwbGFjZVBsYXllclNoaXAoc2hpcCk7IC8vIGlmIHRoZSBzZWxlY3RlZCBjZWxsIGlzIG5vdCBlbXB0eSwgdHJ5IGFnYWluIGluIGEgZGlmZmVyZW50IHBsYWNlXG59O1xuXG5leHBvcnQgY29uc3QgcGxhY2VPcHBvbmVudFNoaXAgPSAoc2hpcCkgPT4geyAvLyBzYW1lIGFzIHRoZSBwbGFjZVBsYXllclNoaXAgZnVuY3Rpb24sIGJ1dCB1c2VzIGEgc2hpcHMgYW5kIGNvb3JkcyBmb3IgdGhlIG9wcG9uZW50J3MgZ3JpZFxuICBsZXQgZW1wdHkgPSB0cnVlO1xuICBsZXQgcm90YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2gnIDogJ3YnO1xuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGxldCB0ZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eX0sb2ApO1xuICBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgaWYgKHJvdGF0aW9uID09PSAnaCcpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHkgKyBpID4gOSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0sJHt5ICsgaX0sb2ApLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgaWYgKGVtcHR5ID09PSBmYWxzZSkgcGxhY2VPcHBvbmVudFNoaXAoc2hpcCk7XG4gICAgICBpZiAoZW1wdHkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eSArIGl9LG9gKS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eSArIGl9LG9gKS5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7c2hpcC5uYW1lfWAsICdoaWRkZW4nKTtcbiAgICAgICAgICBzaGlwLm9wcG9uZW50Q29vcmRzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gICAgaWYgKHJvdGF0aW9uID09PSAndicpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHggKyBpID4gOSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eCArIGl9LCR7eX0sb2ApLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgaWYgKGVtcHR5ID09PSBmYWxzZSkgcGxhY2VPcHBvbmVudFNoaXAoc2hpcCk7XG4gICAgICBpZiAoZW1wdHkgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ggKyBpfSwke3l9LG9gKS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ggKyBpfSwke3l9LG9gKS5jbGFzc0xpc3QuYWRkKCdzaGlwJywgYCR7c2hpcC5uYW1lfWAsICdoaWRkZW4nKTtcbiAgICAgICAgICBzaGlwLm9wcG9uZW50Q29vcmRzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH0gZWxzZSBwbGFjZU9wcG9uZW50U2hpcChzaGlwKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlQXR0YWNrID0gKGdyaWQsIHgsIHkpID0+IHsgLy8gZGlzcGxheSBhdHRhY2sgb24gZ3JpZHMgaWYgYSB2YWxpZCBjZWxsIGlzIHNlbGVjdGVkXG4gIGxldCB0ZDtcbiAgaWYgKGdyaWQgPT09IHBsYXllckdyaWQpIHtcbiAgICB0ZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3h9LCR7eX0scGApO1xuICAgIGlmICh0ZC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcbiAgICAgIHRkLmlubmVySFRNTCA9IGAmIzgyMjY7YDtcbiAgICAgIHRkLmNsYXNzTGlzdC5yZXBsYWNlKCdlbXB0eScsICdtaXNzJyk7XG4gICAgICB0ZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgICAgLy8gZXZlbnQgbGlzdGVuZXIgc3dhcHBpbmcgaWYgMiBwbGF5ZXJzIGFyZSBwbGF5aW5nLCBpbnN0ZWFkIG9mIHBsYXllciB2cyBBSVxuICAgICAgLy8gZ3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFja0hhbmRsZXIpO1xuICAgICAgLy8gb3Bwb25lbnRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Bwb25lbnRBdHRhY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgIHRkLmNsYXNzTGlzdC5yZXBsYWNlKCdzaGlwJywgJ2hpdCcpO1xuICAgICAgdGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBwX3NoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGo9MDsgaiA8IHBfc2hpcExpc3RbaV0ucGxheWVyQ29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHBfc2hpcExpc3RbaV0ucGxheWVyQ29vcmRzW2pdKSA9PSBKU09OLnN0cmluZ2lmeShbcGFyc2VJbnQoeCksIHBhcnNlSW50KHkpXSkpIHtcbiAgICAgICAgICAgIHBfc2hpcExpc3RbaV0uaGl0KCk7XG4gICAgICAgICAgICBjaGVja1NoaXBTdGF0dXMocGxheWVyR3JpZCwgcF9zaGlwTGlzdFtpXSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gaWYgdGhlIEFJIG1ha2VzIGEgaGl0LCBpdCBkb2VzIGFub3RoZXIgbW92ZSB1bnRpbCBpdCBtaXNzZXNcbiAgICAgICAgICAgICAgQUlhdHRhY2soKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgaWYgKGdyaWQgPT09IG9wcG9uZW50R3JpZCkge1xuICAgIHRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0sJHt5fSxvYCk7XG4gICAgaWYgKHRkLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgdGQuaW5uZXJIVE1MID0gYCYjODIyNjtgO1xuICAgICAgdGQuY2xhc3NMaXN0LnJlcGxhY2UoJ2VtcHR5JywgJ21pc3MnKTtcbiAgICAgIHRkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgICAvLyBldmVudCBsaXN0ZW5lciBzd2FwcGluZyBpZiAyIHBsYXllcnMgYXJlIHBsYXlpbmcsIGluc3RlYWQgb2YgcGxheWVyIHZzIEFJXG4gICAgICAvLyBncmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Bwb25lbnRBdHRhY2tIYW5kbGVyKTtcbiAgICAgIC8vIHBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJBdHRhY2tIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgIHRkLmNsYXNzTGlzdC5yZXBsYWNlKCdzaGlwJywgJ2hpdCcpO1xuICAgICAgdGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBvX3NoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGo9MDsgaiA8IG9fc2hpcExpc3RbaV0ub3Bwb25lbnRDb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkob19zaGlwTGlzdFtpXS5vcHBvbmVudENvb3Jkc1tqXSkgPT0gSlNPTi5zdHJpbmdpZnkoW3BhcnNlSW50KHgpLCBwYXJzZUludCh5KV0pKSB7XG4gICAgICAgICAgICBvX3NoaXBMaXN0W2ldLmhpdCgpO1xuICAgICAgICAgICAgY2hlY2tTaGlwU3RhdHVzKG9wcG9uZW50R3JpZCwgb19zaGlwTGlzdFtpXSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IGNoZWNrU2hpcFN0YXR1cyA9IChncmlkLCBzaGlwKSA9PiB7IC8vIGNoZWNrcyBpZiB0aGUgY3VycmVudCBzaGlwIGJlaW5nIGhpdCBpcyBkZXN0cm95ZWQsIHVwZGF0ZXMgdGhlIHNoaXAgbGlzdCBpZiBpdCBpcyBhbmQgYWxzbyBjaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBkZXN0cm95ZWRcbiAgaWYgKGdyaWQgPT09IHBsYXllckdyaWQpIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICBjb25zdCBzaGlwTGlzdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBwX3NoaXAtYmxvY2sgJHtzaGlwLm5hbWV9YCk7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBzaGlwTGlzdERpc3BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcExpc3REaXNwbGF5W2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmY0ZDRkJztcbiAgICAgIH07XG4gICAgICBpZiAocF90b3RhbEhpdHMubGVuZ3RoID09PSBzaGlwU2l6ZXMubGVuZ3RoKSBzZXRUaW1lb3V0KCgpID0+IHsgYWxlcnQoYCR7cGxheWVyc1sxXX0gd29uIWApOyBsb2NhdGlvbi5yZWxvYWQoKTsgfSwgMTAwKTtcbiAgICB9O1xuXG4gIGlmIChncmlkID09PSBvcHBvbmVudEdyaWQpIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgY29uc3Qgc2hpcExpc3REaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgb19zaGlwLWJsb2NrICR7c2hpcC5uYW1lfWApO1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgc2hpcExpc3REaXNwbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNoaXBMaXN0RGlzcGxheVtpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmNGQ0ZCc7XG4gICAgICB9O1xuICAgICAgaWYgKG9fdG90YWxIaXRzLmxlbmd0aCA9PT0gc2hpcFNpemVzLmxlbmd0aCkgc2V0VGltZW91dCgoKSA9PiB7IGFsZXJ0KGAke3BsYXllcnNbMF19IHdvbiFgKTsgbG9jYXRpb24ucmVsb2FkKCk7IH0gLCAxMDApO1xuICB9O1xufTtcblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrSGFuZGxlcihldmVudCkgeyAvLyBoYW5kbGVyIGZ1bmN0aW9uIGZvciB0aGUgcGxheWVyJ3MgZ3JpZCBldmVudCBsaXN0ZW5lclxuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS50YXJnZXQgIT09IHBsYXllckdyaWQpIHtcbiAgICBsZXQgY29vcmRzID0gZS50YXJnZXQuaWQuc3BsaXQoJywnKTtcbiAgICByZWNlaXZlQXR0YWNrKHBsYXllckdyaWQsIGNvb3Jkc1swXSwgY29vcmRzWzFdKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHBvbmVudEF0dGFja0hhbmRsZXIoZXZlbnQpIHsgLy8gaGFuZGxlciBmdW5jdGlvbiBmb3IgdGhlIG9wcG9uZW50J3MgZ3JpZCBldmVudCBsaXN0ZW5lclxuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS50YXJnZXQgIT09IG9wcG9uZW50R3JpZCkge1xuICAgIGxldCBjb29yZHMgPSBlLnRhcmdldC5pZC5zcGxpdCgnLCcpO1xuICAgIHJlY2VpdmVBdHRhY2sob3Bwb25lbnRHcmlkLCBjb29yZHNbMF0sIGNvb3Jkc1sxXSk7XG4gIH07XG59OyIsImltcG9ydCB7IGNyZWF0ZUdyaWQsIHBsYWNlUGxheWVyU2hpcCwgb3Bwb25lbnRBdHRhY2tIYW5kbGVyLCByZWNlaXZlQXR0YWNrIH0gZnJvbSBcIi4vZ3JpZFwiO1xuaW1wb3J0IHsgcF9zaGlwTGlzdCB9IGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZ3JpZCcpO1xuY29uc3Qgb3Bwb25lbnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LWdyaWQnKTtcbmNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20tYnRuJyk7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKTtcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSBbJ1BsYXllcicsICdBSSBvdmVybG9yZCddOyAvLyBkZWZpbmUgcGxheWVyIG5hbWVzXG5cbmV4cG9ydCBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcblxuZXhwb3J0IGNvbnN0IHN3aXRjaFBsYXllciA9ICgpID0+IHsgLy8gc3dpdGNoIHBsYXllciBvbiBlbmQgb2YgdGhlIHR1cm5cbiAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSkge1xuICAgIG9wcG9uZW50R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9wcG9uZW50QXR0YWNrSGFuZGxlcik7XG4gICAgcGxheWVyR3JpZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIG9wcG9uZW50R3JpZC5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1sxXTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIEFJYXR0YWNrKCk7XG4gICAgfSwgNTAwKTtcbiAgfSBlbHNlIHtcbiAgICBvcHBvbmVudEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHBvbmVudEF0dGFja0hhbmRsZXIpO1xuICAgIG9wcG9uZW50R3JpZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIHBsYXllckdyaWQuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG4gIH07XG59O1xuXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vIHJhbmRvbWl6ZSBwbGF5ZXIgMSBzaGlwIHBsYWNlbWVudFxuICBwbGF5ZXJHcmlkLnRleHRDb250ZW50ID0gJyc7XG4gIGNyZWF0ZUdyaWQocGxheWVyR3JpZCwgMTApO1xuICBmb3IgKGxldCBpPTA7IGkgPCBwX3NoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgcGxhY2VQbGF5ZXJTaGlwKHBfc2hpcExpc3RbaV0pO1xuICB9O1xufSk7XG5cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvLyBzdGFydCB0aGUgZ2FtZSByZW1vdmluZyBidXR0b25zIGFuZCBhZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHBsYXllciBvbmUgdG8gbWFrZSBtb3ZlXG4gIHJhbmRvbUJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgcGxheWVyR3JpZC5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gIG9wcG9uZW50R3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wcG9uZW50QXR0YWNrSGFuZGxlcik7IFxufSk7XG5cbmNvbnN0IEFJbW92ZXMgPSBbXTsgLy8gYXJyYXkgb2YgQUkgbW92ZXNcblxuZXhwb3J0IGNvbnN0IEFJYXR0YWNrID0gZnVuY3Rpb24oKSB7IC8vIG1ha2UgdGhlIEFJIGNob29zZSBhIHJhbmRvbSwgdW5zZWxlY3RlZCBjZWxsXG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgbGV0IG5ld01vdmUgPSBgJHt4fSwke3l9YDtcbiAgaWYgKEFJbW92ZXMuaW5jbHVkZXMobmV3TW92ZSkpIEFJYXR0YWNrKCk7XG4gIGVsc2Uge1xuICAgIEFJbW92ZXMucHVzaChuZXdNb3ZlKTtcbiAgICByZWNlaXZlQXR0YWNrKHBsYXllckdyaWQsIHgsIHkpOyAvLyBkaXNwbGF5IG1vdmUgaWYgaXQncyBhIHZhbGlkICh1bnNlbGVjdGVkKSBjZWxsXG4gICAgY29uc29sZS5sb2cobmV3TW92ZSwgQUltb3Zlcyk7XG4gIH07XG59O1xuXG5cblxuIiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoLCBuYW1lKSA9PiB7IC8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHNoaXBzIHdpdGggc3BlY2lmaWMgbGVuZ3RoLCBuYW1lIGFuZCBtZXRob2RzXG4gIGxldCBudW1PZkhpdHMgPSAwO1xuICBsZXQgcGxheWVyQ29vcmRzID0gW107XG4gIGxldCBvcHBvbmVudENvb3JkcyA9IFtdO1xuICBjb25zdCBoaXQgPSAoKSA9PiBudW1PZkhpdHMgKz0gMTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gbnVtT2ZIaXRzID09PSBsZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gIHJldHVybiB7IG51bU9mSGl0cywgcGxheWVyQ29vcmRzLCBvcHBvbmVudENvb3JkcywgbGVuZ3RoLCBuYW1lLCBoaXQsIGlzU3Vua307XG59O1xuXG4vLyBjcmVhdGluZyBzaGlwIGZvciBlYWNoIHBsYXllciBhbmQgYWRkaW5nIHRoZW0gdG8gc2hpcCBsaXN0c1xuY29uc3QgcF9jYXJyaWVyID0gc2hpcEZhY3RvcnkoNSwgJ0NhcnJpZXInKTtcbmNvbnN0IHBfYmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KDQsICdCYXR0bGVzaGlwJyk7XG5jb25zdCBwX2Rlc3Ryb3llciA9IHNoaXBGYWN0b3J5KDMsICdEZXN0cm95ZXInKTtcbmNvbnN0IHBfc3VibWFyaW5lID0gc2hpcEZhY3RvcnkoMywgJ1N1Ym1hcmluZScpO1xuY29uc3QgcF9wYXRyb2xCb2F0ID0gc2hpcEZhY3RvcnkoMiwgJ1BhdHJvbC1ib2F0Jyk7XG5cbmNvbnN0IG9fY2FycmllciA9IHNoaXBGYWN0b3J5KDUsICdDYXJyaWVyJyk7XG5jb25zdCBvX2JhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSg0LCAnQmF0dGxlc2hpcCcpO1xuY29uc3Qgb19kZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgzLCAnRGVzdHJveWVyJyk7XG5jb25zdCBvX3N1Ym1hcmluZSA9IHNoaXBGYWN0b3J5KDMsICdTdWJtYXJpbmUnKTtcbmNvbnN0IG9fcGF0cm9sQm9hdCA9IHNoaXBGYWN0b3J5KDIsICdQYXRyb2wtYm9hdCcpO1xuXG5leHBvcnQgY29uc3QgcF9zaGlwTGlzdCA9IFtwX2NhcnJpZXIsIHBfYmF0dGxlc2hpcCwgcF9kZXN0cm95ZXIsIHBfc3VibWFyaW5lLCBwX3BhdHJvbEJvYXRdO1xuZXhwb3J0IGNvbnN0IG9fc2hpcExpc3QgPSBbb19jYXJyaWVyLCBvX2JhdHRsZXNoaXAsIG9fZGVzdHJveWVyLCBvX3N1Ym1hcmluZSwgb19wYXRyb2xCb2F0XTtcblxuXG5jb25zdCBwbGF5ZXJTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItc2hpcHMnKTtcbmNvbnN0IG9wcG9uZW50U2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtc2hpcHMnKTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTaGlwTGlzdCA9IChwbGF5ZXIsIGxpc3QpID0+IHsgLy8gZGlzcGxheXMgc2hpcCBuYW1lcyBhbmQgdGhlaXIgc2l6ZVxuICBsZXQgc2hpcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpPTA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNoaXBTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwU3RhdHVzLmNsYXNzTmFtZSA9ICdzaGlwLXN0YXR1cyc7XG4gICAgbGV0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcE5hbWUuY2xhc3NOYW1lID0gJ3NoaXAtbmFtZSc7XG4gICAgbGV0IHNoaXBTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcFNpemUuY2xhc3NOYW1lID0gJ3NoaXAtc2l6ZSc7XG5cbiAgICBsZXQgbGlzdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGlzdFAudGV4dENvbnRlbnQgPSBgJHtsaXN0W2ldLm5hbWV9OmA7XG5cbiAgICBzaGlwTmFtZS5hcHBlbmRDaGlsZChsaXN0UCk7XG5cbiAgICBmb3IgKGxldCBqPTA7IGogPCBsaXN0W2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc2hpcEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpZiAocGxheWVyID09IHBsYXllclNoaXBzKSBzaGlwQmxvY2suY2xhc3NMaXN0ID0gYHBfc2hpcC1ibG9jayAke2xpc3RbaV0ubmFtZX1gO1xuICAgICAgaWYgKHBsYXllciA9PSBvcHBvbmVudFNoaXBzKSBzaGlwQmxvY2suY2xhc3NMaXN0ID0gYG9fc2hpcC1ibG9jayAke2xpc3RbaV0ubmFtZX1gO1xuICAgICAgc2hpcFNpemUuYXBwZW5kQ2hpbGQoc2hpcEJsb2NrKTtcbiAgICB9O1xuXG4gICAgc2hpcFN0YXR1cy5hcHBlbmRDaGlsZChzaGlwTmFtZSk7XG4gICAgc2hpcFN0YXR1cy5hcHBlbmRDaGlsZChzaGlwU2l6ZSk7XG4gICAgXG4gICAgc2hpcEluZm8uYXBwZW5kQ2hpbGQoc2hpcFN0YXR1cylcbiAgfTtcblxuICBwbGF5ZXIuYXBwZW5kQ2hpbGQoc2hpcEluZm8pO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcF9zaGlwTGlzdCwgb19zaGlwTGlzdCwgZGlzcGxheVNoaXBMaXN0IH0gZnJvbSAnLi9zaGlwJztcbmltcG9ydCB7IGNyZWF0ZUdyaWQsIHBsYWNlT3Bwb25lbnRTaGlwLCBwbGFjZVBsYXllclNoaXAgfSBmcm9tICcuL2dyaWQnO1xuXG5jb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ncmlkJyk7XG5jb25zdCBvcHBvbmVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtZ3JpZCcpO1xuY29uc3QgcGxheWVyU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNoaXBzJyk7XG5jb25zdCBvcHBvbmVudFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LXNoaXBzJyk7XG5cbi8vIGNyZWF0ZSBib3RoIGdyaWRzIGFuZCBkaXNwbGF5IGEgbGlzdCBvZiBzaGlwcyBmb3IgZWFjaCBwbGF5ZXJcbmNyZWF0ZUdyaWQocGxheWVyR3JpZCwgMTApO1xuZGlzcGxheVNoaXBMaXN0KHBsYXllclNoaXBzLCBwX3NoaXBMaXN0KTtcbmNyZWF0ZUdyaWQob3Bwb25lbnRHcmlkLCAxMCk7XG5kaXNwbGF5U2hpcExpc3Qob3Bwb25lbnRTaGlwcywgb19zaGlwTGlzdCk7XG5cbi8vIHBsYWNlIHRoZSBzaGlwcyBhdCByYW5kb20gY29vcmRzXG5mb3IgKGxldCBpPTA7IGkgPCBwX3NoaXBMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gIHBsYWNlUGxheWVyU2hpcChwX3NoaXBMaXN0W2ldKTtcbiAgcGxhY2VPcHBvbmVudFNoaXAob19zaGlwTGlzdFtpXSk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==