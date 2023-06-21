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

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createText: () => (/* binding */ createText),\n/* harmony export */   website: () => (/* binding */ website)\n/* harmony export */ });\n/* harmony import */ var _lmages_github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lmages/github.svg */ \"./src/lmages/github.svg\");\n\r\n\r\nconst website = (body) => {\r\n    const createHeader = () =>{\r\n        let header = document.createElement('header');\r\n        let navBar = createNav();\r\n        let title_header = createText('BURGER','title-header','h2')\r\n        \r\n        header.appendChild(title_header);\r\n        header.appendChild(navBar);\r\n        return header\r\n    }\r\n\r\n    const createMain = () =>{\r\n        let main = document.createElement('main')\r\n        let content = document.createElement('div');\r\n        content.id = 'content';\r\n        \r\n        main.appendChild(content);\r\n        return main;\r\n    }\r\n\r\n    const createFooter = () => {\r\n        let footer = document.createElement('footer');\r\n        let footerTitle = createText('Copyright 2023 andyspal','copyright-footer','p');\r\n        let githubLink = createGithubLink();\r\n        \r\n        footerTitle.appendChild(githubLink);\r\n        footer.appendChild(footerTitle);\r\n        return footer\r\n    }\r\n    const createNav = () =>{\r\n        let nav = document.createElement('nav');\r\n        let homeButton = createButton('home','button-nav');\r\n        homeButton.classList.add('homeBtn');\r\n        let menuButton = createButton('menu','button-nav')\r\n        menuButton.classList.add('menuBtn');\r\n        let contactButton = createButton('contact','button-nav');\r\n        contactButton.classList.add('contactBtn');\r\n    \r\n        let navButtons = [homeButton,menuButton,contactButton];\r\n        navButtons.forEach(navButton => {\r\n            nav.appendChild(navButton);\r\n        });\r\n        return nav;\r\n    }\r\n    \r\n    const createButton = (name, className) => {\r\n        let button = document.createElement('button');\r\n        button.textContent = `${name}`;\r\n        button.classList.add(`${className}`);\r\n        return button;\r\n    }\r\n    \r\n    const createText = (content, className, textType) => {\r\n        let text = document.createElement(`${textType}`)\r\n        text.textContent = `${content}`;\r\n        text.classList.add(className);\r\n        return text;\r\n    }\r\n\r\n    const createGithubLink = () => {\r\n        const link = document.createElement('a');\r\n        link.href = 'https://github.com/andyspal';\r\n        link.target = '_blank';\r\n\r\n        const image = document.createElement('img');\r\n        image.src = _lmages_github_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n        image.alt = 'GitHub';\r\n        image.width = '28';\r\n        image.height = '28';     \r\n\r\n        link.appendChild(image);\r\n        return link;\r\n    }\r\n\r\n    let header = createHeader();\r\n    let main = createMain();\r\n    let footer = createFooter();\r\n\r\n    let elements = [header,main,footer];\r\n\r\n    elements.forEach(element => {\r\n        body.appendChild(element);\r\n    });\r\n}\r\n\r\nconst createText = (content, className, textType) => {\r\n    let text = document.createElement(`${textType}`)\r\n    text.textContent = `${content}`;\r\n    text.classList.add(className);\r\n    return text;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ }),

/***/ "./src/lmages/github.svg":
/*!*******************************!*\
  !*** ./src/lmages/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45b27747a75edac4d2e9.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/lmages/github.svg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/website.js");
/******/ 	
/******/ })()
;