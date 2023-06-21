/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _lmages_lomito2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lmages/lomito2.jpg */ \"./src/lmages/lomito2.jpg\");\n/* harmony import */ var _lmages_lomito3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lmages/lomito3.jpg */ \"./src/lmages/lomito3.jpg\");\n/* harmony import */ var _lmages_classicLomito_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lmages/classicLomito.jpg */ \"./src/lmages/classicLomito.jpg\");\n/* harmony import */ var _lmages_cheddarLomito_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lmages/cheddarLomito.jpg */ \"./src/lmages/cheddarLomito.jpg\");\n/* harmony import */ var _lmages_mexicanLomito_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lmages/mexicanLomito.jpg */ \"./src/lmages/mexicanLomito.jpg\");\n/* harmony import */ var _lmages_vegetarianLomito_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lmages/vegetarianLomito.jpg */ \"./src/lmages/vegetarianLomito.jpg\");\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menu = () => {\r\n  let menuContainer = document.createElement('div');\r\n  menuContainer.classList.add('menu');\r\n  let sizeContainer = createSizeContainer();\r\n  menuContainer.appendChild(sizeContainer);\r\n  let flavourContainer = createFlavourContainer();\r\n  menuContainer.appendChild(flavourContainer);\r\n\r\n  return menuContainer;\r\n};\r\n\r\nconst createSizeContainer = () => {\r\n  let sizeContainer = document.createElement(\"div\");\r\n  sizeContainer.classList.add(\"size-container\");\r\n  let image = createImage(_lmages_lomito2_jpg__WEBPACK_IMPORTED_MODULE_0__, \"menu-size-image\", \"lomito2\");\r\n  let div = createDiv(\"menu-div\", image);\r\n  sizeContainer.appendChild(div);\r\n\r\n  let title = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)(\"Burger Bread\", \"size-title\", \"h2\");\r\n  let text = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)(\r\n    \"A smaller lomito made with burger bread\",\r\n    \"size-text\",\r\n    \"p\"\r\n  );\r\n  div = createDiv(\"menu-div\", title, text);\r\n  div.classList.add(\"text\");\r\n  sizeContainer.appendChild(div);\r\n\r\n  title = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)(\"Lomito Bread\", \"size-title\", \"h2\");\r\n  text = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)(\r\n    \"A classic lomito, you can take half home and eat it next morning\",\r\n    \"size-text\",\r\n    \"p\"\r\n  );\r\n  div = createDiv(\"menu-div\", title, text);\r\n  div.classList.add(\"text\");\r\n  sizeContainer.appendChild(div);\r\n\r\n  image = createImage(_lmages_lomito3_jpg__WEBPACK_IMPORTED_MODULE_1__, \"menu-size-image\", \"lomito3\");\r\n  div = createDiv(\"menu-div\", image);\r\n  sizeContainer.appendChild(div);\r\n  return sizeContainer;\r\n};\r\n\r\n\r\nconst createDiv = (className, ...content) => {\r\n  let div = document.createElement(\"div\");\r\n  div.classList.add(className);\r\n  for (let item of content) {\r\n    if (typeof item === \"string\") {\r\n      div.appendChild(document.createTextNode(item));\r\n    } else {\r\n      div.appendChild(item);\r\n    }\r\n  }\r\n  return div;\r\n};\r\nconst createImage = (source, className, alternative) => {\r\n  const image = new Image();\r\n  image.src = `${source}`;\r\n  image.classList.add(`${className}`);\r\n  image.alt = `${alternative}`;\r\n\r\n  return image;\r\n};\r\n\r\nconst createFlavourContainer = () =>{\r\n  let flavourContainer = document.createElement('div');\r\n  flavourContainer.classList.add('flavour-container');\r\n  let image = createImage(_lmages_classicLomito_jpg__WEBPACK_IMPORTED_MODULE_2__, 'menu-flavour-image', 'classicLomito');\r\n  let title = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)('Classic','flavour-title','h2');\r\n  let text = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText) ('Loin beef, lettuce, tomato, mayonnaise', 'flavour-text','p');\r\n  let div = createDiv('flavour-text-container',title,text);\r\n  let flavourDiv = createDiv('menu-flavour', image, div);\r\n  flavourContainer.appendChild(flavourDiv);\r\n\r\n  image = createImage(_lmages_cheddarLomito_jpg__WEBPACK_IMPORTED_MODULE_3__, 'menu-flavour-image', 'cheddarLomito');\r\n  title = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)('Cheddar','flavour-title','h2');\r\n  text = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText) ('Loin beef, lettuce, cheddar, tomato, mayonnaise, bacon', 'flavour-text','p')\r\n  div = createDiv('flavour-text-container',title,text);\r\n  flavourDiv = createDiv('menu-flavour', image, div);\r\n  flavourContainer.appendChild(flavourDiv);\r\n\r\n  image = createImage(_lmages_mexicanLomito_jpg__WEBPACK_IMPORTED_MODULE_4__, 'menu-flavour-image', 'mexicanLomito');\r\n  title = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)('Mexican','flavour-title','h2');\r\n  text = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText) ('Loin beef, guacamole, cheddar, tomato, mayonnaise, peppers', 'flavour-text','p')\r\n  div = createDiv('flavour-text-container',title,text);\r\n  flavourDiv = createDiv('menu-flavour', image, div);\r\n  flavourContainer.appendChild(flavourDiv);\r\n\r\n  image = createImage(_lmages_vegetarianLomito_jpg__WEBPACK_IMPORTED_MODULE_5__, 'menu-flavour-image', 'vegetarianLomito');\r\n  title = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText)('Vegetarian','flavour-title','h2');\r\n  text = (0,_website__WEBPACK_IMPORTED_MODULE_6__.createText) ('Vegetarian beef, lettuce, tomato, mayonnaise', 'flavour-text','p')\r\n  div = createDiv('flavour-text-container',title,text);\r\n  flavourDiv = createDiv('menu-flavour', image, div);\r\n  flavourContainer.appendChild(flavourDiv);\r\n\r\n  return flavourContainer;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createText: () => (/* binding */ createText),\n/* harmony export */   website: () => (/* binding */ website)\n/* harmony export */ });\nconst website = (body) => {\r\n    const createHeader = () =>{\r\n        let header = document.createElement('header');\r\n        let navBar = createNav();\r\n        let title_header = createText('UFO','title-header','h2')\r\n        \r\n        header.appendChild(title_header);\r\n        header.appendChild(navBar);\r\n        return header\r\n    }\r\n\r\n    const createMain = () =>{\r\n        let main = document.createElement('main')\r\n        let content = document.createElement('div');\r\n        content.id = 'content';\r\n        \r\n        main.appendChild(content);\r\n        return main;\r\n    }\r\n\r\n    const createFooter = () => {\r\n        let footer = document.createElement('footer');\r\n        let footerTitle = createText('Copyright 2023 andyspal','copyright-footer','p');\r\n        let githubLink = createGithubLink();\r\n        \r\n        footerTitle.appendChild(githubLink);\r\n        footer.appendChild(footerTitle);\r\n        return footer\r\n    }\r\n    const createNav = () =>{\r\n        let nav = document.createElement('nav');\r\n        let homeButton = createButton('home','button-nav');\r\n        homeButton.classList.add('homeBtn');\r\n        let menuButton = createButton('menu','button-nav')\r\n        menuButton.classList.add('menuBtn');\r\n        let contactButton = createButton('contact','button-nav');\r\n        contactButton.classList.add('contactBtn');\r\n    \r\n        let navButtons = [homeButton,menuButton,contactButton];\r\n        navButtons.forEach(navButton => {\r\n            nav.appendChild(navButton);\r\n        });\r\n        return nav;\r\n    }\r\n    \r\n    const createButton = (name, className) => {\r\n        let button = document.createElement('button');\r\n        button.textContent = `${name}`;\r\n        button.classList.add(`${className}`);\r\n        return button;\r\n    }\r\n    \r\n    const createText = (content, className, textType) => {\r\n        let text = document.createElement(`${textType}`)\r\n        text.textContent = `${content}`;\r\n        text.classList.add(className);\r\n        return text;\r\n    }\r\n\r\n    const createGithubLink = () => {\r\n        const link = document.createElement('a');\r\n        link.href = 'https://github.com/andyspal';\r\n        link.target = '_blank';\r\n\r\n        const image = document.createElement('img');\r\n        image.src = './github.svg';\r\n        image.alt = 'GitHub';\r\n        image.width = '28';\r\n        image.height = '28';     \r\n\r\n        link.appendChild(image);\r\n        return link;\r\n    }\r\n\r\n    let header = createHeader();\r\n    let main = createMain();\r\n    let footer = createFooter();\r\n\r\n    let elements = [header,main,footer];\r\n\r\n    elements.forEach(element => {\r\n        body.appendChild(element);\r\n    });\r\n}\r\n\r\nconst createText = (content, className, textType) => {\r\n    let text = document.createElement(`${textType}`)\r\n    text.textContent = `${content}`;\r\n    text.classList.add(className);\r\n    return text;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ }),

/***/ "./src/lmages/cheddarLomito.jpg":
/*!**************************************!*\
  !*** ./src/lmages/cheddarLomito.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd092be543d9132d7493.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lmages/cheddarLomito.jpg?");

/***/ }),

/***/ "./src/lmages/classicLomito.jpg":
/*!**************************************!*\
  !*** ./src/lmages/classicLomito.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89db9f2d9b4fe4fa6c49.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lmages/classicLomito.jpg?");

/***/ }),

/***/ "./src/lmages/lomito2.jpg":
/*!********************************!*\
  !*** ./src/lmages/lomito2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b74e2d3d859876d2734.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lmages/lomito2.jpg?");

/***/ }),

/***/ "./src/lmages/lomito3.jpg":
/*!********************************!*\
  !*** ./src/lmages/lomito3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4c25002f164cd0dd40e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lmages/lomito3.jpg?");

/***/ }),

/***/ "./src/lmages/mexicanLomito.jpg":
/*!**************************************!*\
  !*** ./src/lmages/mexicanLomito.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cda9c1839fd91954e6c0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lmages/mexicanLomito.jpg?");

/***/ }),

/***/ "./src/lmages/vegetarianLomito.jpg":
/*!*****************************************!*\
  !*** ./src/lmages/vegetarianLomito.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"702296919d16608e800a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lmages/vegetarianLomito.jpg?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;