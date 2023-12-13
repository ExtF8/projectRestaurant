"use strict";
(self["webpackChunkprojectrestaurant"] = self["webpackChunkprojectrestaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dark.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dark.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*-- -------------------------- -->
<---      Core Dark Styles      -->
<--- -------------------------- -*/
/* Mobile */
@media only screen and (min-width: 0rem) {
    :root {
        --dark: #082032;
        --medium: #2c394b;
        --accent: #334756;
        --bodyTextColorWhite: #fafbfc;
    }

    body.dark-mode {
        background-color: var(--dark);
    }

    body.dark-mode p,
    body.dark-mode li,
    body.dark-mode h1,
    body.dark-mode h2,
    body.dark-mode h3,
    body.dark-mode h4,
    body.dark-mode h5,
    body.dark-mode h6,
    body.dark-mode .cs-title,
    body.dark-mode .cs-text,
    body.dark-mode .cs-li,
    body.dark-mode .cs-h3,
    body.dark-mode .cs-item-p {
        color: var(--bodyTextColorWhite);
    }

    body.dark-mode .light {
        display: none;
    }

    body.dark-mode .dark {
        display: block !important;
    }

    .dark {
        /* class used to hide elements that only need to be seen when dark mode is enabled */
        display: none;
    }
}

/*-- -------------------------- -->
  <---      Dark Mode Toggle      -->
  <--- -------------------------- -*/
/* Mobile */
@media only screen and (min-width: 0rem) {
    body.dark-mode #dark-mode-toggle .cs-sun {
        transform: translate(-50%, -50%);
        opacity: 1;
    }

    body.dark-mode #dark-mode-toggle .cs-moon {
        transform: translate(-50%, -150%);
        opacity: 0;
    }

    #dark-mode-toggle {
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 3.75rem;
        width: 3rem;
        height: 3rem;
        background: transparent;
        border: none;
        overflow: hidden;
        padding: 0;
    }

    #dark-mode-toggle img,
    #dark-mode-toggle svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1.5625rem;
        height: 1.5625rem;
        pointer-events: none;
    }

    #dark-mode-toggle .cs-moon {
        z-index: 2;
        transition: transform 0.3s,
            opacity 0.3s,
            fill 0.3s;
        fill: #000;
    }

    #dark-mode-toggle .cs-sun {
        z-index: 1;
        transform: translate(-50%, 100%);
        opacity: 0;
        transition: transform 0.3s,
            opacity 0.3s;
    }
}

/* Desktop */
@media only screen and (min-width: 64rem) {
    #dark-mode-toggle {
        position: relative;
        top: auto;
        right: auto;
        transform: none;
        margin-left: 1.875rem;
        margin-bottom: 0rem;
    }

    #dark-mode-toggle:hover {
        cursor: pointer;
    }

    #dark-mode-toggle .moon {
        /* change to whatever you need */
        fill: #fff;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/dark.css"],"names":[],"mappings":"AAAA;;kCAEkC;AAClC,WAAW;AACX;IACI;QACI,eAAe;QACf,iBAAiB;QACjB,iBAAiB;QACjB,6BAA6B;IACjC;;IAEA;QACI,6BAA6B;IACjC;;IAEA;;;;;;;;;;;;;QAaI,gCAAgC;IACpC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,oFAAoF;QACpF,aAAa;IACjB;AACJ;;AAEA;;oCAEoC;AACpC,WAAW;AACX;IACI;QACI,gCAAgC;QAChC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,QAAQ;QACR,2BAA2B;QAC3B,cAAc;QACd,WAAW;QACX,YAAY;QACZ,uBAAuB;QACvB,YAAY;QACZ,gBAAgB;QAChB,UAAU;IACd;;IAEA;;QAEI,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,gCAAgC;QAChC,gBAAgB;QAChB,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,UAAU;QACV;;qBAEa;QACb,UAAU;IACd;;IAEA;QACI,UAAU;QACV,gCAAgC;QAChC,UAAU;QACV;wBACgB;IACpB;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,kBAAkB;QAClB,SAAS;QACT,WAAW;QACX,eAAe;QACf,qBAAqB;QACrB,mBAAmB;IACvB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gCAAgC;QAChC,UAAU;IACd;AACJ","sourcesContent":["/*-- -------------------------- -->\n<---      Core Dark Styles      -->\n<--- -------------------------- -*/\n/* Mobile */\n@media only screen and (min-width: 0rem) {\n    :root {\n        --dark: #082032;\n        --medium: #2c394b;\n        --accent: #334756;\n        --bodyTextColorWhite: #fafbfc;\n    }\n\n    body.dark-mode {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode p,\n    body.dark-mode li,\n    body.dark-mode h1,\n    body.dark-mode h2,\n    body.dark-mode h3,\n    body.dark-mode h4,\n    body.dark-mode h5,\n    body.dark-mode h6,\n    body.dark-mode .cs-title,\n    body.dark-mode .cs-text,\n    body.dark-mode .cs-li,\n    body.dark-mode .cs-h3,\n    body.dark-mode .cs-item-p {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode .light {\n        display: none;\n    }\n\n    body.dark-mode .dark {\n        display: block !important;\n    }\n\n    .dark {\n        /* class used to hide elements that only need to be seen when dark mode is enabled */\n        display: none;\n    }\n}\n\n/*-- -------------------------- -->\n  <---      Dark Mode Toggle      -->\n  <--- -------------------------- -*/\n/* Mobile */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #dark-mode-toggle .cs-sun {\n        transform: translate(-50%, -50%);\n        opacity: 1;\n    }\n\n    body.dark-mode #dark-mode-toggle .cs-moon {\n        transform: translate(-50%, -150%);\n        opacity: 0;\n    }\n\n    #dark-mode-toggle {\n        display: block;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        right: 3.75rem;\n        width: 3rem;\n        height: 3rem;\n        background: transparent;\n        border: none;\n        overflow: hidden;\n        padding: 0;\n    }\n\n    #dark-mode-toggle img,\n    #dark-mode-toggle svg {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 1.5625rem;\n        height: 1.5625rem;\n        pointer-events: none;\n    }\n\n    #dark-mode-toggle .cs-moon {\n        z-index: 2;\n        transition: transform 0.3s,\n            opacity 0.3s,\n            fill 0.3s;\n        fill: #000;\n    }\n\n    #dark-mode-toggle .cs-sun {\n        z-index: 1;\n        transform: translate(-50%, 100%);\n        opacity: 0;\n        transition: transform 0.3s,\n            opacity 0.3s;\n    }\n}\n\n/* Desktop */\n@media only screen and (min-width: 64rem) {\n    #dark-mode-toggle {\n        position: relative;\n        top: auto;\n        right: auto;\n        transform: none;\n        margin-left: 1.875rem;\n        margin-bottom: 0rem;\n    }\n\n    #dark-mode-toggle:hover {\n        cursor: pointer;\n    }\n\n    #dark-mode-toggle .moon {\n        /* change to whatever you need */\n        fill: #fff;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/global.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global Styles and Variables */
:root {
    --primary: #ff6a3e;
    --primaryLight: #ffba43;
    --secondary: #ffba43;
    --secondaryLight: #ffba43;
    --headerColor: #1a1a1a;
    --headerColorDark: #082032;
    --headerColorMedium: #2c394b;
    --bodyTextColor: #4e4b66;
    --bodyTextColorGray: #313131;
    --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);
    --headerFontSize: clamp(1rem, 2vw, 2rem);
    --bodyFontSize: 1rem;
    --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;
}

body {
    margin: 0;
    padding: 0;
    height: auto;
    font-size: var(--bodyFontSize);
    color: var(--bodyTextColor);
    background-color: #fff; /* Default background color */
}

#content {
    position: relative;
    min-height: 100vh;
    padding-bottom: 200px;
}

footer {
    position: absolute;
    margin-top: auto;
    bottom: 0;
    width: 100%;
    font-family: inherit;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

/* Basic Typography */
.cs-topper, .cs-title, .cs-text {
    text-align: inherit;
}

.cs-topper {
    font-size: var(--topperFontSize);
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.25rem;
}

.cs-title {
    font-size: var(--headerFontSize);
    font-weight: 900;
    color: var(--headerColor);
}

.cs-text {
    color: var(--bodyTextColor);
}

/* Navigation Links */
#cs-navigation .page-title, #cs-navigation>.page-title:visited {
    text-decoration: none;
    color: var(--headerColorMedium);
}

#cs-navigation .cs-li-link {
    cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA,gCAAgC;AAChC;IACI,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,yBAAyB;IACzB,sBAAsB;IACtB,0BAA0B;IAC1B,4BAA4B;IAC5B,wBAAwB;IACxB,4BAA4B;IAC5B,+CAA+C;IAC/C,wCAAwC;IACxC,oBAAoB;IACpB,sDAAsD;AAC1D;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB,EAAE,6BAA6B;AACzD;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,WAAW;IACX,oBAAoB;AACxB;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA,qBAAqB;AACrB;IACI,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA,qBAAqB;AACrB;IACI,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,eAAe;AACnB","sourcesContent":["/* Global Styles and Variables */\n:root {\n    --primary: #ff6a3e;\n    --primaryLight: #ffba43;\n    --secondary: #ffba43;\n    --secondaryLight: #ffba43;\n    --headerColor: #1a1a1a;\n    --headerColorDark: #082032;\n    --headerColorMedium: #2c394b;\n    --bodyTextColor: #4e4b66;\n    --bodyTextColorGray: #313131;\n    --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);\n    --headerFontSize: clamp(1rem, 2vw, 2rem);\n    --bodyFontSize: 1rem;\n    --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: auto;\n    font-size: var(--bodyFontSize);\n    color: var(--bodyTextColor);\n    background-color: #fff; /* Default background color */\n}\n\n#content {\n    position: relative;\n    min-height: 100vh;\n    padding-bottom: 200px;\n}\n\nfooter {\n    position: absolute;\n    margin-top: auto;\n    bottom: 0;\n    width: 100%;\n    font-family: inherit;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n}\n\n/* Basic Typography */\n.cs-topper, .cs-title, .cs-text {\n    text-align: inherit;\n}\n\n.cs-topper {\n    font-size: var(--topperFontSize);\n    font-weight: 700;\n    color: var(--primary);\n    margin-bottom: 0.25rem;\n}\n\n.cs-title {\n    font-size: var(--headerFontSize);\n    font-weight: 900;\n    color: var(--headerColor);\n}\n\n.cs-text {\n    color: var(--bodyTextColor);\n}\n\n/* Navigation Links */\n#cs-navigation .page-title, #cs-navigation>.page-title:visited {\n    text-decoration: none;\n    color: var(--headerColorMedium);\n}\n\n#cs-navigation .cs-li-link {\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*-- -------------------------- -->
  <---     Mobile Navigation      -->
  <--- -------------------------- -*/
/* Mobile - 1023px */
@media only screen and (max-width: 63.9375rem) {
    body.cs-open {
        overflow: hidden;
    }

    #main-content {
        padding-top: 18%;
    }

    #cs-navigation {
        width: 100%;
        box-sizing: border-box;
        padding: 0.75rem 1rem;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        position: fixed;
        z-index: 10000;
    }

    #cs-navigation:before {
        content: "";
        width: 100%;
        height: 0vh;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        display: block;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: -1100;
        transition: height 0.5s, opacity 0.5s;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }

    #cs-navigation.cs-active:before {
        height: 150vh;
        opacity: 1;
    }

    #cs-navigation.cs-active .cs-ul-wrapper {
        opacity: 1;
        transform: scaleY(1);
        transition-delay: 0.15s;
    }

    #cs-navigation.cs-active .cs-li {
        opacity: 1;
        transform: translateY(0);
    }

    #cs-navigation .cs-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #cs-navigation .page-title {
        width: 50%;
        max-width: 14rem;
        height: 100%;
        margin: 0 auto 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }


    #cs-navigation .cs-toggle {
        /* 44px - 48px */
        width: clamp(2.75rem, 6vw, 3rem);
        height: clamp(2.75rem, 6vw, 3rem);
        margin: 0 0 0 auto;
        background-color: transparent;
        border: none;
        border-radius: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #cs-navigation .cs-active .cs-line1 {
        top: 50%;
        transform: translate(-50%, -50%) rotate(225deg);
    }

    #cs-navigation .cs-active .cs-line2 {
        top: 50%;
        transform: translate(-50%, -50%) translateY(0) rotate(-225deg);
        transform-origin: center;
    }

    #cs-navigation .cs-active .cs-line3 {
        opacity: 0;
        bottom: 100%;
    }

    #cs-navigation .cs-box {
        /* 24px - 28px */
        width: clamp(1.5rem, 2vw, 1.75rem);
        /* 14px - 16px */
        height: clamp(0.875rem, 1.5vw, 1rem);
        position: relative;
    }

    #cs-navigation .cs-line {
        width: 100%;
        height: 2px;
        background-color: #1a1a1a;
        border-radius: 2px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    #cs-navigation .cs-line1 {
        top: 0;
        transition: transform 0.5s, top 0.3s, left 0.3s;
        animation-duration: 0.7s;
        animation-timing-function: ease;
        animation-direction: normal;
        animation-fill-mode: forwards;
        transform-origin: center;
    }

    #cs-navigation .cs-line2 {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        transition: top 0.3s, left 0.3s, transform 0.5s;
        animation-duration: 0.7s;
        animation-timing-function: ease;
        animation-direction: normal;
        animation-fill-mode: forwards;
    }

    #cs-navigation .cs-line3 {
        bottom: 0;
        transition: bottom 0.3s, opacity 0.3s;
    }

    #cs-navigation .cs-ul-wrapper {
        width: 100%;
        height: auto;
        padding-bottom: 2.4em;
        background-color: #fff;
        box-shadow: inset rgba(0, 0, 0, 0.2) 0px 8px 24px;
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: -1;
        overflow: hidden;
        transform: scaleY(0);
        transition: transform 0.4s, opacity 0.3s;
        transform-origin: top;
    }

    #cs-navigation .cs-ul {
        width: 100%;
        height: auto;
        max-height: 65vh;
        margin: 0;
        padding: 3rem 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1.25rem;
        overflow: scroll;
    }

    #cs-navigation .cs-li {
        text-align: center;
        list-style: none;
        width: 100%;
        margin-right: 0;
        opacity: 0;
        /* transition from these values */
        transform: translateY(-4.375rem);
        transition: transform 0.6s, opacity 0.9s;
    }

    #cs-navigation .cs-li:nth-of-type(1) {
        transition-delay: 0.05s;
    }

    #cs-navigation .cs-li:nth-of-type(2) {
        transition-delay: 0.1s;
    }

    #cs-navigation .cs-li:nth-of-type(3) {
        transition-delay: 0.15s;
    }

    #cs-navigation .cs-li:nth-of-type(4) {
        transition-delay: 0.2s;
    }

    #cs-navigation .cs-li:nth-of-type(5) {
        transition-delay: 0.25s;
    }

    #cs-navigation .cs-li:nth-of-type(6) {
        transition-delay: 0.3s;
    }

    #cs-navigation .cs-li:nth-of-type(7) {
        transition-delay: 0.35s;
    }

    #cs-navigation .cs-li:nth-of-type(8) {
        transition-delay: 0.4s;
    }

    #cs-navigation .cs-li:nth-of-type(9) {
        transition-delay: 0.45s;
    }

    #cs-navigation .cs-li:nth-of-type(10) {
        transition-delay: 0.5s;
    }

    #cs-navigation .cs-li:nth-of-type(11) {
        transition-delay: 0.55s;
    }

    #cs-navigation .cs-li:nth-of-type(12) {
        transition-delay: 0.6s;
    }

    #cs-navigation .cs-li:nth-of-type(13) {
        transition-delay: 0.65s;
    }

    #cs-navigation .cs-li-link {
        /* 16px - 24px */
        font-size: clamp(1.2rem, 2.5vw, 1.7rem);
        line-height: 1.2em;
        text-decoration: none;
        margin: 0;
        color: var(--headerColor);
        display: inline-block;
        position: relative;
    }

    #cs-navigation .cs-li-link:before {
        /* active state underline */
        content: "";
        width: 100%;
        height: 1px;
        background: currentColor;
        opacity: 1;
        display: none;
        position: absolute;
        bottom: -0.125rem;
        left: 0;
    }

    #cs-navigation .cs-li-link.cs-active:before {
        display: block;
    }

}

/* Dark Mode */
@media only screen and (max-width: 63.9375rem) {
    body.dark-mode #cs-navigation {
        background-color: var(--dark);
    }

    body.dark-mode #cs-navigation .page-title {
        /* makes it white */
        filter: grayscale(1) brightness(1000%);
    }

    body.dark-mode #cs-navigation .cs-line {
        background-color: #fff;
    }

    body.dark-mode #cs-navigation .cs-ul-wrapper {
        background-color: var(--medium);
    }

    body.dark-mode #cs-navigation .cs-li-link {
        color: var(--bodyTextColorWhite);
    }
}

/*-- -------------------------- -->
  <---     Desktop Navigation     -->
  <--- -------------------------- -*/
/* Small Desktop - 1024px */
@media only screen and (min-width: 64rem) {
    #cs-navigation {
        width: 100%;
        /* prevents padding and border from affecting height and width */
        box-sizing: border-box;
        padding: 0 1rem;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        /* position: fixed;
        z-index: 10000; */
    }

    #cs-navigation .cs-container {
        width: 100%;
        max-width: 80rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
    }

    #cs-navigation .cs-toggle {
        display: none;
    }

    #cs-navigation .page-title {
        width: 30%;
        max-width: 30rem;
        height: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    #cs-navigation .page-title h1 {
        font-size: 3em;
    }

    #cs-navigation .cs-ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        /* 20px - 36px */
        gap: clamp(1.25rem, 2.6vw, 2.25rem);
    }

    #cs-navigation .cs-li {
        list-style: none;
        padding: 2rem 0;
        /* prevent flexbox from squishing it */
        flex: none;
    }

    #cs-navigation .cs-li-link {
        font-size: clamp(1.2rem, 1vw, 1.2rem);
        line-height: 1.5em;
        text-decoration: none;
        margin: 0;
        color: var(--bodyTextColor);
        display: block;
        position: relative;
    }

    #cs-navigation .cs-li-link:hover:before {
        width: 100%;
    }

    #cs-navigation .cs-li-link.cs-active:before {
        width: 100%;
    }

    #cs-navigation .cs-li-link:before {
        /* active state underline */
        content: "";
        width: 0%;
        height: 2px;
        background: var(--primary);
        opacity: 1;
        display: block;
        position: absolute;
        bottom: 0rem;
        left: 0;
        transition: width 0.3s;
    }
}

/* Dark Mode */
@media only screen and (min-width: 64rem) {
    body.dark-mode #cs-navigation {
        background-color: var(--dark);
    }

    body.dark-mode #cs-navigation .page-title {
        /* makes it turn white */
        filter: grayscale(1) brightness(1000%);
    }

    body.dark-mode #cs-navigation .cs-li-link {
        color: var(--bodyTextColorWhite);
    }

    body.dark-mode #cs-navigation .cs-li-link:before {
        background-color: var(--primaryLight);
    }
}

/*-- -------------------------- -->
<---   Side By Side Reverse     -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
    #home-content-container {
        padding: var(--sectionPadding);
    }

    #home-content-container .home-content {
        width: 100%;
        /* changes to 1280px at tablet */
        max-width: 36.5rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* 48px - 64px */
        gap: clamp(3rem, 6vw, 4rem);
    }

    #home-content-container .home-content-right {
        /* set text align to left if content needs to be left aligned */
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* centers content horizontally, set to flex-start to left align */
        align-items: flex-start;
    }

    #home-content-container .cs-text {
        margin-bottom: 1rem;
    }

    #home-content-container .cs-text:last-of-type {
        margin-bottom: 2rem;
    }

    #home-content-container .cs-picture {
        width: 100%;
        display: block;
        position: relative;
        z-index: 1;
    }

    #home-content-container .cs-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    #home-content-container .cs-picture-right {
        height: 95vw;
        max-height: 25rem;
    }

    #home-content-container .cs-picture-left {
        height: 111vw;
        max-height: 31.25rem;
    }

    #home-content-container .home-content-left {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* 28px - 40px */
        gap: clamp(1.75rem, 3vw, 2.5rem);
    }

    #home-content-container .cs-stats {
        width: 100%;
        max-width: 39.375rem;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        row-gap: 1.5rem;
        column-gap: 0.75rem;
    }

    #home-content-container .cs-stat {
        list-style: none;
        margin: 0;
        padding: 0 0 1.5rem 0;
        border-bottom: 1px solid var(--primary);
        /* making flex so we can align a heading with 1 line to the bottom */
        display: flex;
        grid-column: span 4;
        flex-direction: column;
        align-self: stretch;
        align-content: space-between;
    }

    #home-content-container .cs-number {
        /* 31px - 39px */
        font-size: clamp(1.9375rem, 3vw, 2.4375rem);
        line-height: 1.2em;
        font-weight: 700;
        text-align: left;
        color: var(--headerColor);
        display: block;
        margin: 0 0 0.25rem 0;
    }

    #home-content-container .cs-desc {
        font-size: 1rem;
        line-height: 1.5em;
        font-weight: 400;
        text-align: left;
        /* auto margin top will push text to bottom if there's only one line */
        margin: 0;
        color: var(--bodyTextColor);
    }
}

/* Tablet - 768px */
@media only screen and (min-width: 48rem) {
    #home-content-container .home-content {
        max-width: 80rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    }

    #home-content-container .home-content-right {
        /* sends it to the right in the 2nd position */
        order: 2;
    }

    #home-content-container .cs-picture-right {
        /* 340px - 460px */
        min-height: clamp(21.25rem, 35vw, 28.75rem);
        height: 100%;
        max-height: 100%;
    }

    #home-content-container .cs-picture-left {
        /* 530px - 660px */
        min-height: clamp(33.125rem, 45vw, 41.25rem);
        height: 100%;
        max-height: 100%;
    }
}

/* Dark Mode */
@media only screen and (min-width: 0rem) {

    body.dark-mode #home-content-container .cs-title,
    body.dark-mode #home-content-container .cs-text,
    body.dark-mode #home-content-container .cs-number,
    body.dark-mode #home-content-container .cs-desc {
        color: var(--bodyTextColorWhite);
    }

    body.dark-mode #home-content-container .cs-text,
    body.dark-mode #home-content-container .cs-desc {
        opacity: .8;
    }
}

/*-- -------------------------- -->
<---           Footer           -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
    #cs-footer-108 {
        /* 40px - 100px top and bottom */
        padding: clamp(1rem, 4.9vw, 2.25rem) 1rem;
        /* 40px - 50px */
        padding-bottom: clamp(1.5rem, 6.9vw, 2.125rem);
    }

    #cs-footer-108 .cs-container {
        width: 100%;
        max-width: 80rem;
        margin: auto;
    }

    #cs-footer-108 .cs-ul {
        /* 40px - 60px*/
        padding: 0 0 clamp(2rem, 4.7vw, .75rem);
        margin: auto;
        border-bottom: 1px solid #eff0f6;
    }

    #cs-footer-108 .cs-li {
        list-style: none;
        text-align: center;
        margin-bottom: 1.25rem;
    }

    #cs-footer-108 .cs-li:last-of-type {
        margin-bottom: 0;
    }

    #cs-footer-108 .cs-link {
        /* 16px - 20px */
        font-size: clamp(0.8rem, 0.15s, 1rem);
        line-height: 1.5em;
        text-decoration: none;
        font-weight: 700;
        color: var(--bodyTextColor);
        position: relative;
    }

    #cs-footer-108 .cs-link:hover:before {
        width: 100%;
    }

    #cs-footer-108 .cs-link:before {
        /* top right box */
        content: "";
        width: 0%;
        height: 0.1875rem;
        background: var(--bodyTextColor);
        opacity: 1;
        position: absolute;
        display: block;
        bottom: -0.125rem;
        left: 0;
        transition: width 0.3s;
    }

    #cs-footer-108 .cs-copyright {
        /* 14px - 16px */
        font-size: clamp(0.875rem, 1.6vw, 1rem);
        text-align: center;
        color: #a0a3bd;
        display: block;
        /* 20px - 28px */
        margin: clamp(1.25rem, 2.8vw, 1.75rem) auto 0;
    }
}

/* Tablet - 600px */
@media only screen and (min-width: 37.5rem) {
    #cs-footer-108 .cs-ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #cs-footer-108 .cs-li {
        /* 44px - 88px */
        margin: 0 clamp(2.75rem, 6.2vw, 5.5rem) 0 0;
    }

    #cs-footer-108 .cs-li:last-of-type {
        margin: 0;
    }
}

/* Dark Mode */
@media only screen and (min-width: 0rem) {
    body.dark-mode #cs-footer-108 {
        background-color: rgba(0, 0, 0, 0.2);
    }

    body.dark-mode #cs-footer-108 .cs-link {
        color: #fff;
    }

    body.dark-mode #cs-footer-108 .cs-link:before {
        background: #fff;
    }
}

/*-- -------------------------- -->
<---            Menu            -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
    #menu-1005 {
        padding: var(--sectionPadding);
        background-color: transparent;
        position: relative;
        z-index: 1;
    }

    #menu-1005:before {
        /* static tiled pattern */
        content: "";
        height: 100%;
        width: 100%;
        opacity: 0.08;
        background: url("https://csimg.nyc3.cdn.digitaloceanspaces.com/Food-Menu/static-pattern.jpg");
        background-size: auto;
        background-position: center;
        background-repeat: repeat;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    #menu-1005 .cs-container {
        width: 100%;
        max-width: 80em;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* 48px - 64px */
        gap: clamp(3rem, 7vw, 4rem);
    }

    #menu-1005 .cs-content {
        /* set text align to left if content needs to be left aligned */
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* centers content horizontally, set to flex-start to left align */
        align-items: center;
    }

    #menu-1005 .cs-wrapper {
        /* 120px - 181px */
        width: clamp(7.5rem, 9vw, 11.3125rem);
        margin-bottom: 0.75rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    #menu-1005 .cs-wrapper:before {
        /* left line */
        content: "";
        /* 90px - 155px */
        width: clamp(5.625rem, 4vw, 9.6875rem);
        height: 1px;
        /* 12px - 24px */
        margin-right: clamp(0.75rem, 2vw, 1.5rem);
        background: #b4b2c7;
        opacity: 1;
        position: absolute;
        display: block;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
    }

    #menu-1005 .cs-wrapper:after {
        /* right line */
        content: "";
        /* 90px - 155px */
        width: clamp(5.625rem, 4vw, 9.6875rem);
        height: 1px;
        /* 12px - 24px */
        margin-left: clamp(0.75rem, 2vw, 1.5rem);
        background: #b4b2c7;
        opacity: 1;
        position: absolute;
        display: block;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
    }

    #menu-1005 .cs-wrapper img {
        width: 100%;
    }


    #menu-1005 .cs-text {
        opacity: 0.8;
    }

    #menu-1005 .cs-button-solid {
        font-size: 1rem;
        /* 46px - 56px */
        line-height: clamp(2.875em, 5.5vw, 3.5em);
        text-decoration: none;
        font-weight: 700;
        text-align: center;
        margin: auto;
        color: #fff;
        min-width: 9.375rem;
        padding: 0 2rem;
        background-color: var(--primary);
        display: inline-block;
        position: relative;
        z-index: 1;
        /* prevents padding from adding to the width */
        box-sizing: border-box;
        transition: color 0.3s;
    }

    #menu-1005 .cs-button-solid:before {
        content: "";
        position: absolute;
        height: 100%;
        width: 0%;
        background: #000;
        opacity: 1;
        top: 0;
        left: 0;
        z-index: -1;
        transition: width 0.3s;
    }

    #menu-1005 .cs-button-solid:hover {
        color: #fff;
    }

    #menu-1005 .cs-button-solid:hover:before {
        width: 100%;
    }

    #menu-1005 .cs-card-group {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        column-gap: 1.25rem;
        /* 32px - 60px */
        row-gap: clamp(2rem, 6vw, 3.75rem);
    }

    #menu-1005 .cs-item {
        list-style: none;
        width: 100%;
        max-width: 36.25rem;
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* 16px - 36px */
        gap: clamp(1rem, 3vw, 2.25rem);
    }

    #menu-1005 .cs-picture {
        /* 76px - 160px */
        width: clamp(4.75rem, 14vw, 10rem);
        height: clamp(4.75rem, 14vw, 10rem);
        overflow: hidden;
        /* 4px - 8px */
        border: clamp(0.25rem, 1vw, 0.5rem) solid rgba(255, 255, 255, 0.1);
        display: block;
        flex: none;
        position: relative;
    }

    #menu-1005 .cs-picture img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* makes it act like a background image */
        object-fit: cover;
    }

    #menu-1005 .cs-h3 {
        /* 16px - 24px */
        font-size: clamp(1rem, 2vw, 1.5rem);
        line-height: 1.2em;
        font-weight: 700;
        text-align: left;
        /* 8px - 16px */
        margin: 0 0 clamp(0.5rem, 1.5vw, 1rem);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        gap: 0.75rem;
    }

    #menu-1005 .cs-h3:after {
        content: "";
        width: 50%;
        height: 1px;
        background: #b4b2c7;
        opacity: 1;
        position: relative;
        display: block;
        order: 1;
    }

    #menu-1005 .cs-name {
        max-width: 13.75rem;
        flex: none;
    }

    #menu-1005 .cs-price {
        /* 16px - 25px */
        font-size: clamp(1rem, 2vw, 1.5625rem);
        /* 28px - 46px */
        line-height: clamp(1.75rem, 4vw, 2.875rem);
        font-weight: 700;
        /* 8px - 12px */
        padding: 0 clamp(0.5rem, 1vw, 0.75rem);
        color: var(--primary);
        background-color: #fff;
        border-radius: 5rem;
        border: 1px solid #b4b2c7;
        display: flex;
        align-items: center;
        order: 3;
    }

    #menu-1005 .cs-item-p {
        /* 14px - 16px */
        font-size: clamp(0.875rem, 2vw, 1rem);
        line-height: 1.5em;
        text-align: left;
        margin: 0;
        opacity: 0.8;
    }
}

/* Tablet - 768px */
@media only screen and (min-width: 48rem) {
    #menu-1005 .cs-card-group {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 1.25rem;
    }

    #menu-1005 .cs-item {
        width: 48.5%;
    }
}

/*-- -------------------------- -->
<---           Contacts         -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
    #contact-strip-324 {
        padding: var(--sectionPadding);
        background-color: #f7f7f7;
        height: 100%;

    }

    #contact-strip-324 .cs-container {
        width: 100%;
        max-width: 80em;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* 48px - 64px */
        gap: clamp(3rem, 7vw, 4rem);
    }

    #contact-strip-324 .cs-content {
        /* set text align to left if content needs to be left aligned */
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* centers content horizontally, set to flex-start to left align */
        align-items: center;
    }

    #contact-strip-324 .cs-stat-group {
        width: 100%;
        /* changes to 1280px at desktop */
        max-width: 37.5rem;
        margin: auto;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2.5rem;
    }

    #contact-strip-324 .cs-item {
        list-style: none;
        width: 18.125rem;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    #contact-strip-324 .cs-item:hover .cs-picture {
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        transform: scale(1.05);
    }

    #contact-strip-324 .cs-picture {
        width: 5rem;
        height: 5rem;
        /* 12px - 20px */
        margin-right: clamp(0.75rem, 3vw, 1.25rem);
        border-radius: 50%;
        border: 1px solid #bababa;
        display: flex;
        justify-content: center;
        align-items: center;
        /* prevents flexbox from squishing it */
        flex: none;
        transition:
            background-color 0.3s,
            box-shadow 0.3s,
            transform 0.6s;
    }

    #contact-strip-324 .cs-flex-group {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    }

    #contact-strip-324 .cs-icon {
        width: 1.75rem;
        height: auto;
    }

    #contact-strip-324 .cs-header {
        font-size: 1.25rem;
        color: var(--headerColor);
        font-weight: 900;
        line-height: 1.2em;
        margin: 0;
        margin-bottom: 0.75rem;
        display: block;
    }

    #contact-strip-324 .cs-link,
    #contact-strip-324 .cs-hours {
        font-size: var(--bodyFontSize);
        line-height: 1.5em;
        text-decoration: none;
        color: #767676;
        display: block;
    }

    #contact-strip-324 .cs-link:hover {
        text-decoration: underline;
    }
}

/* Tablet - 650px */
@media only screen and (min-width: 40.625rem) {
    #contact-strip-324 .cs-stat-group {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 1.25rem;
        row-gap: 2rem;
    }
}

/* Small Desktop - 1024px */
@media only screen and (min-width: 64rem) {
    #contact-strip-324 .cs-stat-group {
        max-width: 80rem;
        flex-wrap: nowrap;
        justify-content: space-evenly;
    }
}

/* Dark Mode */
@media only screen and (min-width: 0rem) {
    body.dark-mode #contact-strip-324 {
        background-color: transparent;
    }

    body.dark-mode #contact-strip-324 .cs-header,
    body.dark-mode #contact-strip-324 .cs-link,
    body.dark-mode #contact-strip-324 .cs-hours {
        color: var(--bodyTextColorWhite);
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/*-- -------------------------- -->\n  <---     Mobile Navigation      -->\n  <--- -------------------------- -*/\n/* Mobile - 1023px */\n@media only screen and (max-width: 63.9375rem) {\n    body.cs-open {\n        overflow: hidden;\n    }\n\n    #main-content {\n        padding-top: 18%;\n    }\n\n    #cs-navigation {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 0.75rem 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        position: fixed;\n        z-index: 10000;\n    }\n\n    #cs-navigation:before {\n        content: \"\";\n        width: 100%;\n        height: 0vh;\n        background: rgba(0, 0, 0, 0.6);\n        opacity: 0;\n        display: block;\n        position: absolute;\n        top: 100%;\n        right: 0;\n        z-index: -1100;\n        transition: height 0.5s, opacity 0.5s;\n        -webkit-backdrop-filter: blur(10px);\n        backdrop-filter: blur(10px);\n    }\n\n    #cs-navigation.cs-active:before {\n        height: 150vh;\n        opacity: 1;\n    }\n\n    #cs-navigation.cs-active .cs-ul-wrapper {\n        opacity: 1;\n        transform: scaleY(1);\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation.cs-active .cs-li {\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n\n    #cs-navigation .page-title {\n        width: 50%;\n        max-width: 14rem;\n        height: 100%;\n        margin: 0 auto 0 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 10;\n    }\n\n\n    #cs-navigation .cs-toggle {\n        /* 44px - 48px */\n        width: clamp(2.75rem, 6vw, 3rem);\n        height: clamp(2.75rem, 6vw, 3rem);\n        margin: 0 0 0 auto;\n        background-color: transparent;\n        border: none;\n        border-radius: 0.25rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-navigation .cs-active .cs-line1 {\n        top: 50%;\n        transform: translate(-50%, -50%) rotate(225deg);\n    }\n\n    #cs-navigation .cs-active .cs-line2 {\n        top: 50%;\n        transform: translate(-50%, -50%) translateY(0) rotate(-225deg);\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-active .cs-line3 {\n        opacity: 0;\n        bottom: 100%;\n    }\n\n    #cs-navigation .cs-box {\n        /* 24px - 28px */\n        width: clamp(1.5rem, 2vw, 1.75rem);\n        /* 14px - 16px */\n        height: clamp(0.875rem, 1.5vw, 1rem);\n        position: relative;\n    }\n\n    #cs-navigation .cs-line {\n        width: 100%;\n        height: 2px;\n        background-color: #1a1a1a;\n        border-radius: 2px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    #cs-navigation .cs-line1 {\n        top: 0;\n        transition: transform 0.5s, top 0.3s, left 0.3s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-line2 {\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        transition: top 0.3s, left 0.3s, transform 0.5s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n    }\n\n    #cs-navigation .cs-line3 {\n        bottom: 0;\n        transition: bottom 0.3s, opacity 0.3s;\n    }\n\n    #cs-navigation .cs-ul-wrapper {\n        width: 100%;\n        height: auto;\n        padding-bottom: 2.4em;\n        background-color: #fff;\n        box-shadow: inset rgba(0, 0, 0, 0.2) 0px 8px 24px;\n        opacity: 0;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        z-index: -1;\n        overflow: hidden;\n        transform: scaleY(0);\n        transition: transform 0.4s, opacity 0.3s;\n        transform-origin: top;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        height: auto;\n        max-height: 65vh;\n        margin: 0;\n        padding: 3rem 0 0 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1.25rem;\n        overflow: scroll;\n    }\n\n    #cs-navigation .cs-li {\n        text-align: center;\n        list-style: none;\n        width: 100%;\n        margin-right: 0;\n        opacity: 0;\n        /* transition from these values */\n        transform: translateY(-4.375rem);\n        transition: transform 0.6s, opacity 0.9s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(1) {\n        transition-delay: 0.05s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(2) {\n        transition-delay: 0.1s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(3) {\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(4) {\n        transition-delay: 0.2s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(5) {\n        transition-delay: 0.25s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(6) {\n        transition-delay: 0.3s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(7) {\n        transition-delay: 0.35s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(8) {\n        transition-delay: 0.4s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(9) {\n        transition-delay: 0.45s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(10) {\n        transition-delay: 0.5s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(11) {\n        transition-delay: 0.55s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(12) {\n        transition-delay: 0.6s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(13) {\n        transition-delay: 0.65s;\n    }\n\n    #cs-navigation .cs-li-link {\n        /* 16px - 24px */\n        font-size: clamp(1.2rem, 2.5vw, 1.7rem);\n        line-height: 1.2em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--headerColor);\n        display: inline-block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 100%;\n        height: 1px;\n        background: currentColor;\n        opacity: 1;\n        display: none;\n        position: absolute;\n        bottom: -0.125rem;\n        left: 0;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        display: block;\n    }\n\n}\n\n/* Dark Mode */\n@media only screen and (max-width: 63.9375rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-line {\n        background-color: #fff;\n    }\n\n    body.dark-mode #cs-navigation .cs-ul-wrapper {\n        background-color: var(--medium);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n}\n\n/*-- -------------------------- -->\n  <---     Desktop Navigation     -->\n  <--- -------------------------- -*/\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #cs-navigation {\n        width: 100%;\n        /* prevents padding and border from affecting height and width */\n        box-sizing: border-box;\n        padding: 0 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        /* position: fixed;\n        z-index: 10000; */\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 1.5rem;\n    }\n\n    #cs-navigation .cs-toggle {\n        display: none;\n    }\n\n    #cs-navigation .page-title {\n        width: 30%;\n        max-width: 30rem;\n        height: 7rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 100;\n    }\n\n    #cs-navigation .page-title h1 {\n        font-size: 3em;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        /* 20px - 36px */\n        gap: clamp(1.25rem, 2.6vw, 2.25rem);\n    }\n\n    #cs-navigation .cs-li {\n        list-style: none;\n        padding: 2rem 0;\n        /* prevent flexbox from squishing it */\n        flex: none;\n    }\n\n    #cs-navigation .cs-li-link {\n        font-size: clamp(1.2rem, 1vw, 1.2rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--bodyTextColor);\n        display: block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 0%;\n        height: 2px;\n        background: var(--primary);\n        opacity: 1;\n        display: block;\n        position: absolute;\n        bottom: 0rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 64rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it turn white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link:before {\n        background-color: var(--primaryLight);\n    }\n}\n\n/*-- -------------------------- -->\n<---   Side By Side Reverse     -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #home-content-container {\n        padding: var(--sectionPadding);\n    }\n\n    #home-content-container .home-content {\n        width: 100%;\n        /* changes to 1280px at tablet */\n        max-width: 36.5rem;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 6vw, 4rem);\n    }\n\n    #home-content-container .home-content-right {\n        /* set text align to left if content needs to be left aligned */\n        text-align: left;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: flex-start;\n    }\n\n    #home-content-container .cs-text {\n        margin-bottom: 1rem;\n    }\n\n    #home-content-container .cs-text:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    #home-content-container .cs-picture {\n        width: 100%;\n        display: block;\n        position: relative;\n        z-index: 1;\n    }\n\n    #home-content-container .cs-picture img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    #home-content-container .cs-picture-right {\n        height: 95vw;\n        max-height: 25rem;\n    }\n\n    #home-content-container .cs-picture-left {\n        height: 111vw;\n        max-height: 31.25rem;\n    }\n\n    #home-content-container .home-content-left {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* 28px - 40px */\n        gap: clamp(1.75rem, 3vw, 2.5rem);\n    }\n\n    #home-content-container .cs-stats {\n        width: 100%;\n        max-width: 39.375rem;\n        padding: 0;\n        margin: 0;\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        row-gap: 1.5rem;\n        column-gap: 0.75rem;\n    }\n\n    #home-content-container .cs-stat {\n        list-style: none;\n        margin: 0;\n        padding: 0 0 1.5rem 0;\n        border-bottom: 1px solid var(--primary);\n        /* making flex so we can align a heading with 1 line to the bottom */\n        display: flex;\n        grid-column: span 4;\n        flex-direction: column;\n        align-self: stretch;\n        align-content: space-between;\n    }\n\n    #home-content-container .cs-number {\n        /* 31px - 39px */\n        font-size: clamp(1.9375rem, 3vw, 2.4375rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        color: var(--headerColor);\n        display: block;\n        margin: 0 0 0.25rem 0;\n    }\n\n    #home-content-container .cs-desc {\n        font-size: 1rem;\n        line-height: 1.5em;\n        font-weight: 400;\n        text-align: left;\n        /* auto margin top will push text to bottom if there's only one line */\n        margin: 0;\n        color: var(--bodyTextColor);\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #home-content-container .home-content {\n        max-width: 80rem;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: stretch;\n    }\n\n    #home-content-container .home-content-right {\n        /* sends it to the right in the 2nd position */\n        order: 2;\n    }\n\n    #home-content-container .cs-picture-right {\n        /* 340px - 460px */\n        min-height: clamp(21.25rem, 35vw, 28.75rem);\n        height: 100%;\n        max-height: 100%;\n    }\n\n    #home-content-container .cs-picture-left {\n        /* 530px - 660px */\n        min-height: clamp(33.125rem, 45vw, 41.25rem);\n        height: 100%;\n        max-height: 100%;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n\n    body.dark-mode #home-content-container .cs-title,\n    body.dark-mode #home-content-container .cs-text,\n    body.dark-mode #home-content-container .cs-number,\n    body.dark-mode #home-content-container .cs-desc {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #home-content-container .cs-text,\n    body.dark-mode #home-content-container .cs-desc {\n        opacity: .8;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Footer           -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #cs-footer-108 {\n        /* 40px - 100px top and bottom */\n        padding: clamp(1rem, 4.9vw, 2.25rem) 1rem;\n        /* 40px - 50px */\n        padding-bottom: clamp(1.5rem, 6.9vw, 2.125rem);\n    }\n\n    #cs-footer-108 .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n    }\n\n    #cs-footer-108 .cs-ul {\n        /* 40px - 60px*/\n        padding: 0 0 clamp(2rem, 4.7vw, .75rem);\n        margin: auto;\n        border-bottom: 1px solid #eff0f6;\n    }\n\n    #cs-footer-108 .cs-li {\n        list-style: none;\n        text-align: center;\n        margin-bottom: 1.25rem;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin-bottom: 0;\n    }\n\n    #cs-footer-108 .cs-link {\n        /* 16px - 20px */\n        font-size: clamp(0.8rem, 0.15s, 1rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        font-weight: 700;\n        color: var(--bodyTextColor);\n        position: relative;\n    }\n\n    #cs-footer-108 .cs-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-footer-108 .cs-link:before {\n        /* top right box */\n        content: \"\";\n        width: 0%;\n        height: 0.1875rem;\n        background: var(--bodyTextColor);\n        opacity: 1;\n        position: absolute;\n        display: block;\n        bottom: -0.125rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n\n    #cs-footer-108 .cs-copyright {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 1.6vw, 1rem);\n        text-align: center;\n        color: #a0a3bd;\n        display: block;\n        /* 20px - 28px */\n        margin: clamp(1.25rem, 2.8vw, 1.75rem) auto 0;\n    }\n}\n\n/* Tablet - 600px */\n@media only screen and (min-width: 37.5rem) {\n    #cs-footer-108 .cs-ul {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-footer-108 .cs-li {\n        /* 44px - 88px */\n        margin: 0 clamp(2.75rem, 6.2vw, 5.5rem) 0 0;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin: 0;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #cs-footer-108 {\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link {\n        color: #fff;\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link:before {\n        background: #fff;\n    }\n}\n\n/*-- -------------------------- -->\n<---            Menu            -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #menu-1005 {\n        padding: var(--sectionPadding);\n        background-color: transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    #menu-1005:before {\n        /* static tiled pattern */\n        content: \"\";\n        height: 100%;\n        width: 100%;\n        opacity: 0.08;\n        background: url(\"https://csimg.nyc3.cdn.digitaloceanspaces.com/Food-Menu/static-pattern.jpg\");\n        background-size: auto;\n        background-position: center;\n        background-repeat: repeat;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n    }\n\n    #menu-1005 .cs-container {\n        width: 100%;\n        max-width: 80em;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 7vw, 4rem);\n    }\n\n    #menu-1005 .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: center;\n    }\n\n    #menu-1005 .cs-wrapper {\n        /* 120px - 181px */\n        width: clamp(7.5rem, 9vw, 11.3125rem);\n        margin-bottom: 0.75rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n    }\n\n    #menu-1005 .cs-wrapper:before {\n        /* left line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-right: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        right: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper:after {\n        /* right line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-left: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper img {\n        width: 100%;\n    }\n\n\n    #menu-1005 .cs-text {\n        opacity: 0.8;\n    }\n\n    #menu-1005 .cs-button-solid {\n        font-size: 1rem;\n        /* 46px - 56px */\n        line-height: clamp(2.875em, 5.5vw, 3.5em);\n        text-decoration: none;\n        font-weight: 700;\n        text-align: center;\n        margin: auto;\n        color: #fff;\n        min-width: 9.375rem;\n        padding: 0 2rem;\n        background-color: var(--primary);\n        display: inline-block;\n        position: relative;\n        z-index: 1;\n        /* prevents padding from adding to the width */\n        box-sizing: border-box;\n        transition: color 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:before {\n        content: \"\";\n        position: absolute;\n        height: 100%;\n        width: 0%;\n        background: #000;\n        opacity: 1;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        transition: width 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:hover {\n        color: #fff;\n    }\n\n    #menu-1005 .cs-button-solid:hover:before {\n        width: 100%;\n    }\n\n    #menu-1005 .cs-card-group {\n        margin: 0;\n        padding: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        column-gap: 1.25rem;\n        /* 32px - 60px */\n        row-gap: clamp(2rem, 6vw, 3.75rem);\n    }\n\n    #menu-1005 .cs-item {\n        list-style: none;\n        width: 100%;\n        max-width: 36.25rem;\n        margin: 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        /* 16px - 36px */\n        gap: clamp(1rem, 3vw, 2.25rem);\n    }\n\n    #menu-1005 .cs-picture {\n        /* 76px - 160px */\n        width: clamp(4.75rem, 14vw, 10rem);\n        height: clamp(4.75rem, 14vw, 10rem);\n        overflow: hidden;\n        /* 4px - 8px */\n        border: clamp(0.25rem, 1vw, 0.5rem) solid rgba(255, 255, 255, 0.1);\n        display: block;\n        flex: none;\n        position: relative;\n    }\n\n    #menu-1005 .cs-picture img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        /* makes it act like a background image */\n        object-fit: cover;\n    }\n\n    #menu-1005 .cs-h3 {\n        /* 16px - 24px */\n        font-size: clamp(1rem, 2vw, 1.5rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        /* 8px - 16px */\n        margin: 0 0 clamp(0.5rem, 1.5vw, 1rem);\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        position: relative;\n        gap: 0.75rem;\n    }\n\n    #menu-1005 .cs-h3:after {\n        content: \"\";\n        width: 50%;\n        height: 1px;\n        background: #b4b2c7;\n        opacity: 1;\n        position: relative;\n        display: block;\n        order: 1;\n    }\n\n    #menu-1005 .cs-name {\n        max-width: 13.75rem;\n        flex: none;\n    }\n\n    #menu-1005 .cs-price {\n        /* 16px - 25px */\n        font-size: clamp(1rem, 2vw, 1.5625rem);\n        /* 28px - 46px */\n        line-height: clamp(1.75rem, 4vw, 2.875rem);\n        font-weight: 700;\n        /* 8px - 12px */\n        padding: 0 clamp(0.5rem, 1vw, 0.75rem);\n        color: var(--primary);\n        background-color: #fff;\n        border-radius: 5rem;\n        border: 1px solid #b4b2c7;\n        display: flex;\n        align-items: center;\n        order: 3;\n    }\n\n    #menu-1005 .cs-item-p {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 2vw, 1rem);\n        line-height: 1.5em;\n        text-align: left;\n        margin: 0;\n        opacity: 0.8;\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #menu-1005 .cs-card-group {\n        flex-direction: row;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n    }\n\n    #menu-1005 .cs-item {\n        width: 48.5%;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Contacts         -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #contact-strip-324 {\n        padding: var(--sectionPadding);\n        background-color: #f7f7f7;\n        height: 100%;\n\n    }\n\n    #contact-strip-324 .cs-container {\n        width: 100%;\n        max-width: 80em;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 7vw, 4rem);\n    }\n\n    #contact-strip-324 .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: center;\n    }\n\n    #contact-strip-324 .cs-stat-group {\n        width: 100%;\n        /* changes to 1280px at desktop */\n        max-width: 37.5rem;\n        margin: auto;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 2.5rem;\n    }\n\n    #contact-strip-324 .cs-item {\n        list-style: none;\n        width: 18.125rem;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n    }\n\n    #contact-strip-324 .cs-item:hover .cs-picture {\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        transform: scale(1.05);\n    }\n\n    #contact-strip-324 .cs-picture {\n        width: 5rem;\n        height: 5rem;\n        /* 12px - 20px */\n        margin-right: clamp(0.75rem, 3vw, 1.25rem);\n        border-radius: 50%;\n        border: 1px solid #bababa;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        /* prevents flexbox from squishing it */\n        flex: none;\n        transition:\n            background-color 0.3s,\n            box-shadow 0.3s,\n            transform 0.6s;\n    }\n\n    #contact-strip-324 .cs-flex-group {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n        flex-direction: column;\n    }\n\n    #contact-strip-324 .cs-icon {\n        width: 1.75rem;\n        height: auto;\n    }\n\n    #contact-strip-324 .cs-header {\n        font-size: 1.25rem;\n        color: var(--headerColor);\n        font-weight: 900;\n        line-height: 1.2em;\n        margin: 0;\n        margin-bottom: 0.75rem;\n        display: block;\n    }\n\n    #contact-strip-324 .cs-link,\n    #contact-strip-324 .cs-hours {\n        font-size: var(--bodyFontSize);\n        line-height: 1.5em;\n        text-decoration: none;\n        color: #767676;\n        display: block;\n    }\n\n    #contact-strip-324 .cs-link:hover {\n        text-decoration: underline;\n    }\n}\n\n/* Tablet - 650px */\n@media only screen and (min-width: 40.625rem) {\n    #contact-strip-324 .cs-stat-group {\n        flex-direction: row;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n        row-gap: 2rem;\n    }\n}\n\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #contact-strip-324 .cs-stat-group {\n        max-width: 80rem;\n        flex-wrap: nowrap;\n        justify-content: space-evenly;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #contact-strip-324 {\n        background-color: transparent;\n    }\n\n    body.dark-mode #contact-strip-324 .cs-header,\n    body.dark-mode #contact-strip-324 .cs-link,\n    body.dark-mode #contact-strip-324 .cs-hours {\n        color: var(--bodyTextColorWhite);\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/dark.css":
/*!*****************************!*\
  !*** ./src/styles/dark.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dark_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dark.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/dark.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dark_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dark_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dark_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dark_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateNavigationActiveState: () => (/* binding */ updateNavigationActiveState)
/* harmony export */ });
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_dark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/dark.css */ "./src/styles/dark.css");
/* harmony import */ var _src_assets_img_favicons_android_chrome_192x192_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/img/favicons/android-chrome-192x192.png */ "./src/assets/img/favicons/android-chrome-192x192.png");
/* harmony import */ var _src_assets_img_favicons_android_chrome_512x512_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/assets/img/favicons/android-chrome-512x512.png */ "./src/assets/img/favicons/android-chrome-512x512.png");
/* harmony import */ var _src_assets_img_favicons_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/img/favicons/apple-touch-icon.png */ "./src/assets/img/favicons/apple-touch-icon.png");
/* harmony import */ var _src_assets_img_favicons_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/assets/img/favicons/favicon-16x16.png */ "./src/assets/img/favicons/favicon-16x16.png");
/* harmony import */ var _src_assets_img_favicons_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/assets/img/favicons/favicon-32x32.png */ "./src/assets/img/favicons/favicon-32x32.png");
/* harmony import */ var _modules_utility_darkMode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/utility/darkMode.js */ "./src/modules/utility/darkMode.js");
/* harmony import */ var _modules_utility_mobileNavigation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/utility/mobileNavigation.js */ "./src/modules/utility/mobileNavigation.js");
/* harmony import */ var _modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/pageLoaders/homePageLoader.js */ "./src/modules/pageLoaders/homePageLoader.js");
/* harmony import */ var _modules_pageLoaders_menuPageLoader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/pageLoaders/menuPageLoader.js */ "./src/modules/pageLoaders/menuPageLoader.js");
/* harmony import */ var _modules_pageLoaders_contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/pageLoaders/contactsPageLoader.js */ "./src/modules/pageLoaders/contactsPageLoader.js");
// Importing global, main, and dark mode CSS stylesheets









// import '../src/assets/img/favicons/favicon.ico';

// Importing functionality modules



// Importing page loader functions




// Activate dark mode toggle functionality
(0,_modules_utility_darkMode_js__WEBPACK_IMPORTED_MODULE_8__["default"])();

// Set up mobile navigation toggle functionality
(0,_modules_utility_mobileNavigation_js__WEBPACK_IMPORTED_MODULE_9__["default"])();

// Global variables setup
let pageNames = ['home', 'menu', 'contacts'];
// let currentTab = pageNames[0];
let content = document.querySelector('#main-content');

// Load the initial home page content
(0,_modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_10__["default"])(content);

/**
 * Set up click event listeners for tab navigation in the header
 * This allows switching between different pages (home, menu, contacts) and
 * ensures the appropriate content is loaded and displayed
 */
pageNames.forEach((pageName) => {
    const button = document.getElementById(pageName);
    button.addEventListener('click', () => {
        if (button.id == 'home') {
            (0,_modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_10__["default"])(content);
        } else if (button.id == 'menu') {
            (0,_modules_pageLoaders_menuPageLoader_js__WEBPACK_IMPORTED_MODULE_11__["default"])(content);
        } else {
            (0,_modules_pageLoaders_contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_12__["default"])(content);
        }
        updateNavigationActiveState(pageName);
    });
});

/**
 * Updates the active state of navigation buttons and removes active state in mobile navigation
 * @param {string} activeButtonId - The ID of the navigation button to be marked as active
 */
function updateNavigationActiveState(activeButtonId) {
    // Navigation button IDs
    const navigationButtons = ['home', 'menu', 'contacts'];

    // Selecting elements related to mobile navigation
    const body = document.querySelector('body');
    const navbarMenu = document.querySelector('#cs-navigation');
    const hamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

    navigationButtons.forEach((buttonId) => {
        const buttonElement = document.getElementById(buttonId);
        if (buttonElement) {
            if (buttonId === activeButtonId) {
                buttonElement.classList.add('cs-active');

                // Close mobile navigation menu when a navigation button is activated
                hamburgerMenu.classList.remove('cs-active');
                navbarMenu.classList.remove('cs-active');
                body.classList.remove('cs-open');
            } else {
                buttonElement.classList.remove('cs-active');
            }
        }
    });
}


/***/ }),

/***/ "./src/modules/pageData/contactsContent.js":
/*!*************************************************!*\
  !*** ./src/modules/pageData/contactsContent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactsContents: () => (/* binding */ contactsContents)
/* harmony export */ });
let contactsContents = [
    {
        contents: {
            title: 'Our Contacts',
            topper: 'We got food!',
            paragraph: 'Some clever text about reserving table via phone or email',
        },
        cardGroup: {
            phone: {
                info: {
                    header: 'Phone',
                    phoneNrOne: '+1 (555) 456 7899',
                    phoneNrTwo: '+1 (555) 456 7889',
                    href: `tel:555-456-7899`,
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone-grey.svg',
                        alt: 'icon',
                        width: '35',
                        height: '40',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
            email: {
                info: {
                    header: 'Email',
                    email: 'info@email.com',
                    href: `mailto:Info@email.com`
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-email.svg',
                        alt: 'icon',
                        width: '40',
                        height: '35',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
            address: {
                info: {
                    header: 'Address',
                    address: `123 Fake St, STE 100 Somewhere, FL 9875`,
                    href: 'https://www.google.com/maps'
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin-grey.svg',
                        alt: 'icon',
                        width: '40',
                        height: '40',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
            hours: {
                info: {
                    header: 'Open Hours',
                    days: 'Monday To Saturday',
                    hours: '9:00 - 22:30',
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/clock-grey.svg',
                        alt: 'icon',
                        width: '40',
                        height: '40',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
        },
    },
];


/***/ }),

/***/ "./src/modules/pageData/homeContents.js":
/*!**********************************************!*\
  !*** ./src/modules/pageData/homeContents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContents: () => (/* binding */ homeContents)
/* harmony export */ });
/* harmony import */ var _assets_img_home_homePageLeft_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/home/homePageLeft.jpg */ "./src/assets/img/home/homePageLeft.jpg");
/* harmony import */ var _assets_img_home_homePageRight_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/home/homePageRight.jpg */ "./src/assets/img/home/homePageRight.jpg");



let homeContents = [
    {
        content: {
            topper: 'Do you like food?',
            title: 'Accessible Food That Anyone Can Eat',
            paragraph: `Immerse yourself in the tantalizing world of gourmet dining at
        "Savor's Catch", a vibrant and electrifying restaurant brand
        crafted specifically for those who relish the thrill of culinary
        excellence. For avid food enthusiasts who feel their taste buds
        awaken at the first hint of exquisite flavors, "Savor's Catch"
        embodies the essence of that exhilarating moment when a
        perfectly prepared dish and a discerning diner engage in a
        delightful interplay of taste and craftsmanship.`,
        },
        imageLeft: {
            mobileImage: {
                media: '(max-width: 600px)',
                srcset: _assets_img_home_homePageLeft_jpg__WEBPACK_IMPORTED_MODULE_0__,
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: _assets_img_home_homePageLeft_jpg__WEBPACK_IMPORTED_MODULE_0__,
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: _assets_img_home_homePageLeft_jpg__WEBPACK_IMPORTED_MODULE_0__,
                alt: 'people',
                width: '608',
                height: '406',
            },
        },
        imageRight: {
            mobileImage: {
                media: '(max-width: 600px)',
                srcset: _assets_img_home_homePageRight_jpg__WEBPACK_IMPORTED_MODULE_1__,
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: _assets_img_home_homePageRight_jpg__WEBPACK_IMPORTED_MODULE_1__,
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: _assets_img_home_homePageRight_jpg__WEBPACK_IMPORTED_MODULE_1__,
                alt: 'people',
                width: '608',
                height: '662',
            },
        },
        stats: {
            firstStat: {
                num: '99%',
                text: 'Positive customer reviews',
            },
            secondStat: {
                num: '10',
                text: `Dish 'Try Again' Special`,
            },
            thirdStat: {
                num: '24/7',
                text: 'Online reservation and inquiry service',
            },
        },
    },
];


/***/ }),

/***/ "./src/modules/pageData/menuContent.js":
/*!*********************************************!*\
  !*** ./src/modules/pageData/menuContent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContents: () => (/* binding */ menuContents)
/* harmony export */ });
/* harmony import */ var _assets_img_menu_bisonBurger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/menu/bisonBurger.jpg */ "./src/assets/img/menu/bisonBurger.jpg");
/* harmony import */ var _assets_img_menu_chickenSaladMango_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/menu/chickenSaladMango.jpg */ "./src/assets/img/menu/chickenSaladMango.jpg");
/* harmony import */ var _assets_img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/menu/lasagna.jpg */ "./src/assets/img/menu/lasagna.jpg");
/* harmony import */ var _assets_img_menu_meatLoversPizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/menu/meatLoversPizza.jpg */ "./src/assets/img/menu/meatLoversPizza.jpg");
/* harmony import */ var _assets_img_menu_pricklyPearPorkSauce_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/menu/pricklyPearPorkSauce.jpg */ "./src/assets/img/menu/pricklyPearPorkSauce.jpg");
/* harmony import */ var _assets_img_menu_purpleCornTostada_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/menu/purpleCornTostada.jpg */ "./src/assets/img/menu/purpleCornTostada.jpg");







let menuContents = [
    {
        content: {
            title: 'Our Specials',
            paragraph: `Indulge in our Special Menu, where each dish is a masterpiece of
            flavor and creativity. From the heartiness of a Bison Burger to
            the exotic flair of Curried Chicken Salad with Mango, experience
            a culinary journey that delights and surprises with every bite.`,
        },
        cardGroup: {
            listItemOne: {
                info: {
                    name: 'Lasagna',
                    price: '56€',
                    itemParagraph: `A classic favorite, our lasagna layers tender pasta with
                    rich meat sauce and creamy béchamel, topped with golden,
                    bubbling cheese for a comforting and indulgent meal.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemTwo: {
                info: {
                    name: 'Bison Burger',
                    price: '56€',
                    itemParagraph: `This hearty burger features a juicy bison patty topped
                    with fresh vegetables and melted cheese, served in a
                    rustic bun for a robust and satisfying experience.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_bisonBurger_jpg__WEBPACK_IMPORTED_MODULE_0__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_bisonBurger_jpg__WEBPACK_IMPORTED_MODULE_0__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_bisonBurger_jpg__WEBPACK_IMPORTED_MODULE_0__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemThree: {
                info: {
                    name: 'Curried Chicken Salad',
                    price: '56€',
                    itemParagraph: `A refreshing mix of tender curried chicken and sweet
                    mango slices, tossed with vibrant greens for a light yet
                    flavorful salad.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_chickenSaladMango_jpg__WEBPACK_IMPORTED_MODULE_1__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_chickenSaladMango_jpg__WEBPACK_IMPORTED_MODULE_1__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_chickenSaladMango_jpg__WEBPACK_IMPORTED_MODULE_1__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemFour: {
                info: {
                    name: `Meat Lovers' Pizza`,
                    price: '56€',
                    itemParagraph: `Loaded with an assortment of meats like pepperoni,
                    sausage, and bacon, this pizza offers a carnivore's
                    delight with every crispy, cheesy bite.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_meatLoversPizza_jpg__WEBPACK_IMPORTED_MODULE_3__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_meatLoversPizza_jpg__WEBPACK_IMPORTED_MODULE_3__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_meatLoversPizza_jpg__WEBPACK_IMPORTED_MODULE_3__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemFive: {
                info: {
                    name: `Purple Corn Tostada`,
                    price: '56€',
                    itemParagraph: `A feast for the eyes and the palate, this tostada uses a
                    unique purple corn shell, piled high with seasoned meats
                    and fresh toppings for a crunchy, savory treat.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_purpleCornTostada_jpg__WEBPACK_IMPORTED_MODULE_5__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_purpleCornTostada_jpg__WEBPACK_IMPORTED_MODULE_5__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_purpleCornTostada_jpg__WEBPACK_IMPORTED_MODULE_5__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemSix: {
                info: {
                    name: `Prickly Pear Pork Sauce`,
                    price: '56€',
                    itemParagraph: `An innovative fusion, this sauce blends the sweetness of
                    prickly pear with rich pork, creating a perfect
                    complement to enhance any gourmet dish.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_pricklyPearPorkSauce_jpg__WEBPACK_IMPORTED_MODULE_4__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_pricklyPearPorkSauce_jpg__WEBPACK_IMPORTED_MODULE_4__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_pricklyPearPorkSauce_jpg__WEBPACK_IMPORTED_MODULE_4__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
        },
    },
];


/***/ }),

/***/ "./src/modules/pageLoaders/contactsPageLoader.js":
/*!*******************************************************!*\
  !*** ./src/modules/pageLoaders/contactsPageLoader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactsPageLoader)
/* harmony export */ });
/* harmony import */ var _pageData_contactsContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageData/contactsContent.js */ "./src/modules/pageData/contactsContent.js");
/* harmony import */ var _utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/elementRender.js */ "./src/modules/utility/elementRender.js");
// Importing home contents data from contactsContents module


// Importing utility functions from the 'elementRender' module. These functions are used
// for creating various HTML elements dynamically


/**
 * Loads and displays the contacts page content
 * @param {HTMLElement} content - The parent element where the contacts page will be rendered
 */
function contactsPageLoader(content) {
    (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)(content);

    // Create the main section for contacts and append it to the content area
    const section = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSection)('id', 'contact-strip-324');
    content.appendChild(section);

    // Render and append the container for the contacts content
    const container = renderContainer();
    section.appendChild(container);

    // Create and append a list of contact cards to the container using data from contactsContents
    const cardGroup = _pageData_contactsContent_js__WEBPACK_IMPORTED_MODULE_0__.contactsContents[0].cardGroup;
    const list = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createList)(
        'class',
        'cs-stat-group',
        Object.values(cardGroup),
        renderContactItem
    );
    container.appendChild(list);
}

/**
 * Renders the primary container for the contacts page
 * @returns {HTMLDivElement} - The container div element
 */
function renderContainer() {
    const container = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('class', 'cs-container');

    // Render and append the content section with title and paragraph to the container
    const content = renderContent();
    container.appendChild(content);

    return container;
}

/**
 * Renders the content section with title, topper, and paragraph
 * @returns {HTMLDivElement} - The content section div element
 */
function renderContent() {
    const content = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('class', 'cs-content');
    const title = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createTitle)(
        'class',
        'cs-title',
        _pageData_contactsContent_js__WEBPACK_IMPORTED_MODULE_0__.contactsContents[0].contents.title
    );
    const topper = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createTopper)(
        'class',
        'cs-topper',
        _pageData_contactsContent_js__WEBPACK_IMPORTED_MODULE_0__.contactsContents[0].contents.topper
    );
    const paragraph = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createParagraph)(
        'class',
        'cs-text',
        _pageData_contactsContent_js__WEBPACK_IMPORTED_MODULE_0__.contactsContents[0].contents.paragraph
    );

    content.appendChild(topper);
    content.appendChild(title);
    content.appendChild(paragraph);

    return content;
}

/**
 * Renders an individual contact item as a list item
 * @param {object} itemData - Data for a single contact item
 * @returns {HTMLLIElement} - The list item element with contact information
 */
function renderContactItem(itemData) {
    const listItem = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createListItem)(
        'class',
        'cs-item',
        itemData,
        renderListItemContent
    );
    return listItem;
}

/**
 * Renders the content for a contact list item
 * @param {object} itemData - Data for a single contact item
 * @returns {DocumentFragment} - The fragment containing contact item content
 */
function renderListItemContent(itemData) {
    const fragment = document.createDocumentFragment();
    const picture = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createPicture)('class', 'cs-picture', itemData.picture);
    const infoContainer = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('class', 'cs-flex-group');

    infoContainer.appendChild(
        (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSpan)('class', 'cs-header', itemData.info.header)
    );
    appendContactInfo(infoContainer, itemData.info);

    fragment.appendChild(picture);
    fragment.appendChild(infoContainer);

    return fragment;
}

/**
 * Appends specific contact details to a container based on the item type (phone, email, etc.)
 * @param {HTMLDivElement} container - The container to which additional info will be appended
 * @param {object} info - The specific contact information data
 */
function appendContactInfo(container, info) {
    // Logic to append various types of contact information
    if (info.phoneNrOne) {
        const phoneLinkOne = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createLink)(
            'href',
            info.href,
            'class',
            'cs-link',
            info.phoneNrOne
        );
        const phoneLinkTwo = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createLink)(
            'href',
            info.href,
            'class',
            'cs-link',
            info.phoneNrTwo
        );
        container.appendChild(phoneLinkOne);
        container.appendChild(phoneLinkTwo);
    } else if (info.email) {
        const emailLink = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createLink)(
            'href',
            `mailto:${info.email}`,
            'class',
            'cs-link',
            info.email
        );
        container.appendChild(emailLink);
    } else if (info.address) {
        const addressLink = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createLink)(
            'href',
            info.href,
            'class',
            'cs-link',
            info.address
        );
        container.appendChild(addressLink);
    } else if (info.days) {
        const daysSpan = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSpan)('class', 'cs-hours', info.days);
        const hoursSpan = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSpan)('class', 'cs-hours', info.hours);
        container.appendChild(daysSpan);
        container.appendChild(hoursSpan);
    }
}


/***/ }),

/***/ "./src/modules/pageLoaders/homePageLoader.js":
/*!***************************************************!*\
  !*** ./src/modules/pageLoaders/homePageLoader.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePageLoader)
/* harmony export */ });
/* harmony import */ var _pageData_homeContents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageData/homeContents.js */ "./src/modules/pageData/homeContents.js");
/* harmony import */ var _utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/elementRender.js */ "./src/modules/utility/elementRender.js");
// Importing home contents data from homeContents module


// Importing utility functions from the 'elementRender' module. These functions are used
// for creating various HTML elements dynamically


// Extracting the first item from home contents to use as home page content
const HOME_PAGE_CONTENTS = _pageData_homeContents_js__WEBPACK_IMPORTED_MODULE_0__.homeContents[0];

// Object mapping common attribute names to their respective string representations
const attributeName = { id: 'id', class: 'class' };

/**
 * Loads and displays the home page content
 * @param {HTMLElement} content - The parent element where the home page will be rendered
 */
function homePageLoader(content) {
    (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)(content);

    // Select the main content area in the DOM
    const mainContent = content;

    // Create and append the main section and content div
    const section = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSection)(attributeName.id, 'home-content-container');
    const homeContent = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(attributeName.class, 'home-content');
    mainContent.appendChild(section);
    section.appendChild(homeContent);

    // Create and append left and right content sections
    const contentLeft = renderContentLeft();
    const contentRight = renderContentRight();
    homeContent.appendChild(contentLeft);
    homeContent.appendChild(contentRight);
}

/**
 * Renders the left section of the home page content including image and stats
 * @returns {HTMLElement}
 */
function renderContentLeft() {
    const contentLeft = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(attributeName.class, 'home-content-left');
    const leftImage = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createPicture)(
        attributeName.class,
        'cs-picture cs-picture-left',
        HOME_PAGE_CONTENTS.imageLeft
    );
    const statsList = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createList)(
        attributeName.class,
        'cs-stats',
        HOME_PAGE_CONTENTS.stats,
        (itemData) =>
            (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createListItem)(
                attributeName.class,
                'cs-stat',
                itemData,
                renderListItemContent
            )
    );

    contentLeft.appendChild(leftImage);
    contentLeft.appendChild(statsList);

    return contentLeft;
}

/**
 * Renders the content of a statistics item for display in a list item
 * This function creates and returns a document fragment containing the stat's number and description
 * @param {object} itemData - The statistics data item, expected to have 'num' and 'text' properties
 * @returns {DocumentFragment} - The document fragment containing the rendered content
 */
function renderListItemContent(itemData) {
    const fragment = document.createDocumentFragment();

    const numberSpan = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSpan)(
        attributeName.class,
        'cs-number',
        itemData.num
    );
    const textSpan = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSpan)(attributeName.class, 'cs-desc', itemData.text);

    fragment.appendChild(numberSpan);
    fragment.appendChild(textSpan);

    return fragment;
}

/**
 * Renders the right section of the home page content including topper, title, paragraph, and image
 * @returns {HTMLElement} - The created right content section
 */
function renderContentRight() {
    const contentRight = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(attributeName.class, 'home-content-right');
    const topper = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createTopper)(
        attributeName.class,
        'cs-topper',
        HOME_PAGE_CONTENTS.content.topper
    );
    const title = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createTitle)(
        attributeName.class,
        'cs-title',
        HOME_PAGE_CONTENTS.content.title
    );
    const paragraph = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createParagraph)(
        attributeName.class,
        'cs-text',
        HOME_PAGE_CONTENTS.content.paragraph
    );
    const rightImage = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createPicture)(
        attributeName.class,
        'cs-picture cs-picture-right',
        HOME_PAGE_CONTENTS.imageRight
    );

    contentRight.appendChild(topper);
    contentRight.appendChild(title);
    contentRight.appendChild(paragraph);
    contentRight.appendChild(rightImage);

    return contentRight;
}


/***/ }),

/***/ "./src/modules/pageLoaders/menuPageLoader.js":
/*!***************************************************!*\
  !*** ./src/modules/pageLoaders/menuPageLoader.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPageLoader)
/* harmony export */ });
/* harmony import */ var _pageData_menuContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageData/menuContent.js */ "./src/modules/pageData/menuContent.js");
/* harmony import */ var _utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/elementRender.js */ "./src/modules/utility/elementRender.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index.js */ "./src/index.js");
/* harmony import */ var _contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactsPageLoader.js */ "./src/modules/pageLoaders/contactsPageLoader.js");
// Importing menu contents data form menuContents module


// Importing utility functions from the 'elementRenderer' module. These functions are used
// for creating various HTML elements dynamically


// Import updateNavigationActiveState to update the active state of navigation buttons


// Import contactsPageLoader to navigate to contacts


// Extracting the first item from menu contents to use as menu page content
const MENU_PAGE_CONTENTS = _pageData_menuContent_js__WEBPACK_IMPORTED_MODULE_0__.menuContents[0];

/**
 * Main function to load and display the menu page content
 * @param {HTMLElement} content - The parent element where the menu page will be rendered
 */
function menuPageLoader(content) {
    (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)(content);

    // Select the main content area of the DOM
    const mainContent = content;

    // Create a section for the menu and append it to the main content
    const section = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSection)('id', 'menu-1005');
    mainContent.appendChild(section);

    // Render the container that holds the menu's content and append it to the section
    const container = renderContainer();
    section.appendChild(container);
}

/**
 * Renders the primary container for the menu page
 * @returns {HTMLDivElement} - The container div element
 */
function renderContainer() {
    const container = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('class', 'cs-container');
    const content = renderContent();
    const cardGroupContent = renderCardGroup();
    const reserveButton = createReserveButton();

    container.appendChild(content);
    container.appendChild(cardGroupContent);
    container.appendChild(reserveButton);

    return container;
}

/**
 * Renders the content section with title and paragraph
 * @returns {HTMLDivElement} - The content section div element
 */
function renderContent() {
    const content = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('class', 'cs-content');
    const title = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createTitle)(
        'class',
        'cs-title',
        MENU_PAGE_CONTENTS.content.title
    );
    const paragraph = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createParagraph)(
        'class',
        'cs-text',
        MENU_PAGE_CONTENTS.content.paragraph
    );
    content.appendChild(title);
    content.appendChild(paragraph);

    return content;
}

/**
 * Renders a group of cards representing menu items
 * @returns {HTMLUListElement} - The card group list element
 */
function renderCardGroup() {
    const list = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createList)(
        'class',
        'cs-card-group',
        MENU_PAGE_CONTENTS.cardGroup,
        (itemData) =>
            (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createListItem)('class', 'cs-item', itemData, renderListItemContent)
    );

    return list;
}

/**
 * Renders the content for an individual list item in the card group
 * @param {object} itemData - Data for a single menu item
 * @returns {DocumentFragment} - The fragment containing the list item content
 */
function renderListItemContent(itemData) {
    // Create a document fragment to hold the item content
    const fragment = document.createDocumentFragment();
    const picture = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createPicture)('class', 'cs-picture', itemData.picture);
    const infoContainer = renderInfoContainer(itemData);

    picture.setAttribute('area-hidden', 'true');
    fragment.appendChild(picture);
    fragment.appendChild(infoContainer);

    return fragment;
}

/**
 * Renders the information container for a menu item
 * @param {object} itemData - Data for a single menu item
 * @returns {HTMLDivElement} - The info container div element
 */
function renderInfoContainer(itemData) {
    const info = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('class', 'cs-info');
    const headingContainer = renderHeadingContainer(itemData);
    const paragraph = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createParagraph)(
        'class',
        'cs-item-p',
        itemData.info.itemParagraph
    );

    info.appendChild(headingContainer);
    info.appendChild(paragraph);

    return info;
}

/**
 * Renders the heading container for a menu item
 * @param {object} itemData - Data for a single menu item
 * @returns {HTMLHeadingElement} - The heading container element
 */
function renderHeadingContainer(itemData) {
    const headingContainer = document.createElement('h3');
    const textSpan = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSpan)('class', 'cs-name', itemData.info.name);
    const numberSpan = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSpan)('class', 'cs-price', itemData.info.price);

    headingContainer.setAttribute('class', 'cs-h3');
    headingContainer.appendChild(textSpan);
    headingContainer.appendChild(numberSpan);

    return headingContainer;
}

/**
 * Creates a button for reserving a table and navigating to contacts page
 * @returns {HTMLAnchorElement} - The reserve button element
 */
function createReserveButton() {
    const reserveButton = document.createElement('a');

    const target = document.body.querySelector('#main-content');

    reserveButton.innerText = 'Reserve Your Table';
    reserveButton.setAttribute('href', '#');
    reserveButton.setAttribute('class', 'cs-button-solid');

    reserveButton.addEventListener('click', (event) => {
        event.preventDefault();
        (0,_contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target);
        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.updateNavigationActiveState)('contacts');
    });

    return reserveButton;
}


/***/ }),

/***/ "./src/modules/utility/darkMode.js":
/*!*****************************************!*\
  !*** ./src/modules/utility/darkMode.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ darkModeToggler)
/* harmony export */ });
//
//    The Dark Mode System
//

function darkModeToggler() {
    // helper functions to toggle dark mode
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }

    // determines a new users dark mode preferences
    function detectColorScheme() {
        // default to the light theme
        let theme = 'light';

        // check localStorage for a saved 'theme' variable. if it's there, the user has visited before, so apply the necessary theme choices
        if (localStorage.getItem('theme')) {
            theme = localStorage.getItem('theme');
        }
        // if it's not there, check to see if the user has applied dark mode preferences themselves in the browser
        else if (
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            theme = 'dark';
        }

        // if there is no preference set, the default of light will be used. apply accordingly
        theme === 'dark' ? enableDarkMode() : disableDarkMode();
    }

    // run on page load
    detectColorScheme();

    // add event listener to the dark mode button toggle
    document
        .getElementById('dark-mode-toggle')
        .addEventListener('click', () => {
            // on click, check localStorage for the dark mode value, use to apply the opposite of what's saved
            localStorage.getItem('theme') === 'light'
                ? enableDarkMode()
                : disableDarkMode();
        });
}


/***/ }),

/***/ "./src/modules/utility/elementRender.js":
/*!**********************************************!*\
  !*** ./src/modules/utility/elementRender.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPage: () => (/* binding */ clearPage),
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createLink: () => (/* binding */ createLink),
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createListItem: () => (/* binding */ createListItem),
/* harmony export */   createParagraph: () => (/* binding */ createParagraph),
/* harmony export */   createPicture: () => (/* binding */ createPicture),
/* harmony export */   createSection: () => (/* binding */ createSection),
/* harmony export */   createSpan: () => (/* binding */ createSpan),
/* harmony export */   createTitle: () => (/* binding */ createTitle),
/* harmony export */   createTopper: () => (/* binding */ createTopper),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
/* harmony export */ });
/**
 * Creates a section HTML element with specified attribute and value
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @returns {HTMLElement} - The created section element
 */
function createSection(attributeName, attributeValue) {
    const section = document.createElement('section');
    section.setAttribute(attributeName, attributeValue);
    return section;
}

/**
 * Creates a div HTML element with a specified attribute name and value
 * @param {object} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @returns {HTMLDivElement} - The created div element
 */
function createDiv(attributeName, attributeValue) {
    const div = document.createElement('div');
    div.setAttribute(attributeName, attributeValue);
    return div;
}

/**
 * Creates a picture element with provided attributes and sources
 * @param {object} attributeName - Name of the attribute
 * @param {string} attributeValue  - Value for the attribute
 * @param {object} imageSources - Object containing picture sources for different screen sizes
 * @returns {HTMLPictureElement} - The created picture element
 */
function createPicture(attributeName, attributeValue, imageSources) {
    const picture = document.createElement('picture');
    picture.setAttribute(attributeName, attributeValue);

    Object.keys(imageSources).forEach((key) => {
        if (key === 'img') {
            const img = document.createElement('img');
            setAttributes(img, imageSources[key]);
            picture.appendChild(img);
        } else {
            const source = document.createElement('source');
            setAttributes(source, imageSources[key]);
            picture.appendChild(source);
        }
    });

    return picture;
}

/**
 * Creates a list (ul) element with provided attributes. The list items are created using a rendering export function passed as an argument
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute (e.g., 'cs-stats')
 * @param {object} itemData - Data to populate the list with. Expects an object where each property can be rendered as a list item
 * @param {Function} renderItem - export function that takes an item of data and returns a list item (li) element
 * @returns {HTMLUListElement} - The created unordered list element
 */
function createList(
    attributeName,
    attributeValue,
    itemData,
    renderItem
) {
    const list = document.createElement('ul');
    list.setAttribute(attributeName, attributeValue);

    for (let key in itemData) {
        if (itemData.hasOwnProperty(key)) {
            list.appendChild(renderItem(itemData[key]));
        }
    }

    return list;
}

/**
 * Creates a list item (li) element using a provided rendering export function for the item's content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute (e.g., 'cs-stat')
 * @param {object} item - Data item to be rendered inside the list item
 * @param {Function} renderContent - export function that takes the item and returns the content to be placed inside the list item
 * @returns {HTMLLIElement} - The created list item
 */
function createListItem(
    attributeName,
    attributeValue,
    item,
    renderContent
) {
    const listItem = document.createElement('li');
    listItem.setAttribute(attributeName, attributeValue);

    const content = renderContent(item);
    listItem.appendChild(content);

    return listItem;
}

/**
 * Creates a span element with a specified class and text content
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the span
 * @returns {HTMLElement} - The created span element
 */
function createSpan(attributeName, attributeValue, text) {
    const span = document.createElement('span');
    span.setAttribute(attributeName, attributeValue);
    span.innerText = text;

    return span;
}

/**
 * Creates a topper element (span) with a specified class and text content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the topper
 * @returns {HTMLElement} - The created topper element
 */
function createTopper(attributeName, attributeValue, text) {
    const topper = document.createElement('span');
    topper.setAttribute(attributeName, attributeValue);
    topper.innerText = text;

    return topper;
}

/**
 * Creates a title element (h2) with a specified class and text content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the title
 * @returns {HTMLHeadingElement} - The created title element
 */
function createTitle(attributeName, attributeValue, text) {
    const title = document.createElement('h2');
    title.setAttribute(attributeName, attributeValue);
    title.textContent = text;

    return title;
}

/**
 * Creates a paragraph element (p) with a specified class and text content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the paragraph
 * @returns {HTMLParagraphElement} - The created paragraph element
 */
function createParagraph(attributeName, attributeValue, text) {
    const paragraph = document.createElement('p');
    paragraph.setAttribute(attributeName, attributeValue);
    paragraph.textContent = text;

    return paragraph;
}

/**
 * Sets multiple attributes on a DOM element based on a provided object
 * @param {HTMLElement} element - The DOM element to set attributes on
 * @param {object} attributes - Object containing key-value pairs for attributes
 */
function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}

/**
 * Clears the content of a specified parent element
 * @param {HTMLElement} parent - The parent element whose content is to be cleared
 * @returns {boolean} - Returns true to indicate the operation was successful
 */
function clearPage(parent) {
    parent.textContent = '';

    return true;
}

/**
 * Creates a link (anchor) element with specified attributes and text content
 * @param {string} href - The attribute name to set on the link (e.g., 'href')
 * @param {string} hrefValue - The value for the href attribute
 * @param {string} attributeName - the Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - The value for the attribute
 * @param {string} text - The text content for the link
 * @returns {HTMLAnchorElement} - The created anchor element
 */
function createLink(
    href,
    hrefValue,
    attributeName,
    attributeValue,
    text
) {
    const link = document.createElement('a');

    link.setAttribute(href, hrefValue);
    link.innerText = text;
    link.setAttribute(attributeName, attributeValue);
    link.setAttribute('target', '_blank');

    return link;
}


/***/ }),

/***/ "./src/modules/utility/mobileNavigation.js":
/*!*************************************************!*\
  !*** ./src/modules/utility/mobileNavigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mobileNavigationToggling)
/* harmony export */ });
// Select DOM elements for mobile navigation
const CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

/**
 * Sets up event listeners for mobile navigation toggling
 */
function mobileNavigationToggling() {
    CShamburgerMenu.addEventListener('click', function () {
        CShamburgerMenu.classList.toggle('cs-active');
        CSnavbarMenu.classList.toggle('cs-active');
        CSbody.classList.toggle('cs-open');
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    /**
     * Checks and toggles the 'aria-expanded' attribute on the navigation list
     */
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        // Toggle the 'aria-expanded' attribute based on its current state.
        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

    // Set up click event listeners for dropdown items in the mobile navigation
    const dropDowns = Array.from(
        document.querySelectorAll('#cs-navigation .cs-dropdown')
    );
    for (const item of dropDowns) {
        const onClick = () => {
            item.classList.toggle('cs-active');
        };
        item.addEventListener('click', onClick);
    }
}


/***/ }),

/***/ "./src/assets/img/favicons/android-chrome-192x192.png":
/*!************************************************************!*\
  !*** ./src/assets/img/favicons/android-chrome-192x192.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cce5bef3a1e73917dee4.png";

/***/ }),

/***/ "./src/assets/img/favicons/android-chrome-512x512.png":
/*!************************************************************!*\
  !*** ./src/assets/img/favicons/android-chrome-512x512.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55862b6f3ec67052f6a3.png";

/***/ }),

/***/ "./src/assets/img/favicons/apple-touch-icon.png":
/*!******************************************************!*\
  !*** ./src/assets/img/favicons/apple-touch-icon.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "276e7363d420c7560850.png";

/***/ }),

/***/ "./src/assets/img/favicons/favicon-16x16.png":
/*!***************************************************!*\
  !*** ./src/assets/img/favicons/favicon-16x16.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fc124a2f13f5286ca1c.png";

/***/ }),

/***/ "./src/assets/img/favicons/favicon-32x32.png":
/*!***************************************************!*\
  !*** ./src/assets/img/favicons/favicon-32x32.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6d2b64e60f3b97967b9.png";

/***/ }),

/***/ "./src/assets/img/home/homePageLeft.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/home/homePageLeft.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c196d77a8abd49c6ce3.jpg";

/***/ }),

/***/ "./src/assets/img/home/homePageRight.jpg":
/*!***********************************************!*\
  !*** ./src/assets/img/home/homePageRight.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24debbbab5b97fdf52db.jpg";

/***/ }),

/***/ "./src/assets/img/menu/bisonBurger.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/menu/bisonBurger.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de601f995eef44a727d1.jpg";

/***/ }),

/***/ "./src/assets/img/menu/chickenSaladMango.jpg":
/*!***************************************************!*\
  !*** ./src/assets/img/menu/chickenSaladMango.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dde070f480ef94ffa9c8.jpg";

/***/ }),

/***/ "./src/assets/img/menu/lasagna.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/menu/lasagna.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e437c9439b81c586b149.jpg";

/***/ }),

/***/ "./src/assets/img/menu/meatLoversPizza.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/menu/meatLoversPizza.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b6cfb8a45e83cf792c7.jpg";

/***/ }),

/***/ "./src/assets/img/menu/pricklyPearPorkSauce.jpg":
/*!******************************************************!*\
  !*** ./src/assets/img/menu/pricklyPearPorkSauce.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "956616cb8b4da51529cb.jpg";

/***/ }),

/***/ "./src/assets/img/menu/purpleCornTostada.jpg":
/*!***************************************************!*\
  !*** ./src/assets/img/menu/purpleCornTostada.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec65f361748e78263f7c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlB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QVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkI7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEI7QUFDTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxtQkFBbUI7QUFDaEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9kYXJrLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2RhcmsuY3NzPzIxMmMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3M/ZjBkOCIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZURhdGEvY29udGFjdHNDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZURhdGEvaG9tZUNvbnRlbnRzLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZURhdGEvbWVudUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZGVycy9jb250YWN0c1BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZGVycy9ob21lUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkZXJzL21lbnVQYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdXRpbGl0eS9kYXJrTW9kZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvZWxlbWVudFJlbmRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvbW9iaWxlTmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICBDb3JlIERhcmsgU3R5bGVzICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tZGFyazogIzA4MjAzMjtcbiAgICAgICAgLS1tZWRpdW06ICMyYzM5NGI7XG4gICAgICAgIC0tYWNjZW50OiAjMzM0NzU2O1xuICAgICAgICAtLWJvZHlUZXh0Q29sb3JXaGl0ZTogI2ZhZmJmYztcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIHAsXG4gICAgYm9keS5kYXJrLW1vZGUgbGksXG4gICAgYm9keS5kYXJrLW1vZGUgaDEsXG4gICAgYm9keS5kYXJrLW1vZGUgaDIsXG4gICAgYm9keS5kYXJrLW1vZGUgaDMsXG4gICAgYm9keS5kYXJrLW1vZGUgaDQsXG4gICAgYm9keS5kYXJrLW1vZGUgaDUsXG4gICAgYm9keS5kYXJrLW1vZGUgaDYsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRpdGxlLFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10ZXh0LFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1saSxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtaDMsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWl0ZW0tcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIC5saWdodCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgLmRhcmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kYXJrIHtcbiAgICAgICAgLyogY2xhc3MgdXNlZCB0byBoaWRlIGVsZW1lbnRzIHRoYXQgb25seSBuZWVkIHRvIGJlIHNlZW4gd2hlbiBkYXJrIG1vZGUgaXMgZW5hYmxlZCAqL1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbiAgPC0tLSAgICAgIERhcmsgTW9kZSBUb2dnbGUgICAgICAtLT5cbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIE1vYmlsZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgcmlnaHQ6IDMuNzVyZW07XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgaW1nLFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHN2ZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHdpZHRoOiAxLjU2MjVyZW07XG4gICAgICAgIGhlaWdodDogMS41NjI1cmVtO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3MtbW9vbiB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzLFxuICAgICAgICAgICAgZmlsbCAwLjNzO1xuICAgICAgICBmaWxsOiAjMDAwO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1zdW4ge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXG4gICAgICAgICAgICBvcGFjaXR5IDAuM3M7XG4gICAgfVxufVxuXG4vKiBEZXNrdG9wICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XG4gICAgI2RhcmstbW9kZS10b2dnbGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuODc1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5tb29uIHtcbiAgICAgICAgLyogY2hhbmdlIHRvIHdoYXRldmVyIHlvdSBuZWVkICovXG4gICAgICAgIGZpbGw6ICNmZmY7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kYXJrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7a0NBRWtDO0FBQ2xDLFdBQVc7QUFDWDtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBOzs7Ozs7Ozs7Ozs7O1FBYUksZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLG9GQUFvRjtRQUNwRixhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7O29DQUVvQztBQUNwQyxXQUFXO0FBQ1g7SUFDSTtRQUNJLGdDQUFnQztRQUNoQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Y7O3FCQUVhO1FBQ2IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdDQUFnQztRQUNoQyxVQUFVO1FBQ1Y7d0JBQ2dCO0lBQ3BCO0FBQ0o7O0FBRUEsWUFBWTtBQUNaO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQ0FBZ0M7UUFDaEMsVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgQ29yZSBEYXJrIFN0eWxlcyAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuLyogTW9iaWxlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIC0tZGFyazogIzA4MjAzMjtcXG4gICAgICAgIC0tbWVkaXVtOiAjMmMzOTRiO1xcbiAgICAgICAgLS1hY2NlbnQ6ICMzMzQ3NTY7XFxuICAgICAgICAtLWJvZHlUZXh0Q29sb3JXaGl0ZTogI2ZhZmJmYztcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSBwLFxcbiAgICBib2R5LmRhcmstbW9kZSBsaSxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDEsXFxuICAgIGJvZHkuZGFyay1tb2RlIGgyLFxcbiAgICBib2R5LmRhcmstbW9kZSBoMyxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDQsXFxuICAgIGJvZHkuZGFyay1tb2RlIGg1LFxcbiAgICBib2R5LmRhcmstbW9kZSBoNixcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRpdGxlLFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGV4dCxcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWxpLFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtaDMsXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1pdGVtLXAge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgLmxpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgLmRhcmsge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuZGFyayB7XFxuICAgICAgICAvKiBjbGFzcyB1c2VkIHRvIGhpZGUgZWxlbWVudHMgdGhhdCBvbmx5IG5lZWQgdG8gYmUgc2VlbiB3aGVuIGRhcmsgbW9kZSBpcyBlbmFibGVkICovXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuICA8LS0tICAgICAgRGFyayBNb2RlIFRvZ2dsZSAgICAgIC0tPlxcbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgcmlnaHQ6IDMuNzVyZW07XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgaW1nLFxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBzdmcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIHdpZHRoOiAxLjU2MjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDEuNTYyNXJlbTtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcXG4gICAgICAgICAgICBvcGFjaXR5IDAuM3MsXFxuICAgICAgICAgICAgZmlsbCAwLjNzO1xcbiAgICAgICAgZmlsbDogIzAwMDtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcXG4gICAgICAgICAgICBvcGFjaXR5IDAuM3M7XFxuICAgIH1cXG59XFxuXFxuLyogRGVza3RvcCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcXG4gICAgI2RhcmstbW9kZS10b2dnbGUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiBhdXRvO1xcbiAgICAgICAgcmlnaHQ6IGF1dG87XFxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMS44NzVyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAubW9vbiB7XFxuICAgICAgICAvKiBjaGFuZ2UgdG8gd2hhdGV2ZXIgeW91IG5lZWQgKi9cXG4gICAgICAgIGZpbGw6ICNmZmY7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHbG9iYWwgU3R5bGVzIGFuZCBWYXJpYWJsZXMgKi9cbjpyb290IHtcbiAgICAtLXByaW1hcnk6ICNmZjZhM2U7XG4gICAgLS1wcmltYXJ5TGlnaHQ6ICNmZmJhNDM7XG4gICAgLS1zZWNvbmRhcnk6ICNmZmJhNDM7XG4gICAgLS1zZWNvbmRhcnlMaWdodDogI2ZmYmE0MztcbiAgICAtLWhlYWRlckNvbG9yOiAjMWExYTFhO1xuICAgIC0taGVhZGVyQ29sb3JEYXJrOiAjMDgyMDMyO1xuICAgIC0taGVhZGVyQ29sb3JNZWRpdW06ICMyYzM5NGI7XG4gICAgLS1ib2R5VGV4dENvbG9yOiAjNGU0YjY2O1xuICAgIC0tYm9keVRleHRDb2xvckdyYXk6ICMzMTMxMzE7XG4gICAgLS10b3BwZXJGb250U2l6ZTogY2xhbXAoMC44MTI1cmVtLCAxLjZ2dywgMXJlbSk7XG4gICAgLS1oZWFkZXJGb250U2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcbiAgICAtLWJvZHlGb250U2l6ZTogMXJlbTtcbiAgICAtLXNlY3Rpb25QYWRkaW5nOiBjbGFtcCgzLjc1cmVtLCA3LjgydncsIDYuMjVyZW0pIDFyZW07XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IC8qIERlZmF1bHQgYmFja2dyb3VuZCBjb2xvciAqL1xufVxuXG4jY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbn1cblxuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIEJhc2ljIFR5cG9ncmFwaHkgKi9cbi5jcy10b3BwZXIsIC5jcy10aXRsZSwgLmNzLXRleHQge1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG5cbi5jcy10b3BwZXIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdG9wcGVyRm9udFNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5jcy10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXJGb250U2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xufVxuXG4uY3MtdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xufVxuXG4vKiBOYXZpZ2F0aW9uIExpbmtzICovXG4jY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSwgI2NzLW5hdmlnYXRpb24+LnBhZ2UtdGl0bGU6dmlzaXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvck1lZGl1bSk7XG59XG5cbiNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQ0FBZ0M7QUFDaEM7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QiwrQ0FBK0M7SUFDL0Msd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHNCQUFzQixFQUFFLDZCQUE2QjtBQUN6RDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgYW5kIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjZmY2YTNlO1xcbiAgICAtLXByaW1hcnlMaWdodDogI2ZmYmE0MztcXG4gICAgLS1zZWNvbmRhcnk6ICNmZmJhNDM7XFxuICAgIC0tc2Vjb25kYXJ5TGlnaHQ6ICNmZmJhNDM7XFxuICAgIC0taGVhZGVyQ29sb3I6ICMxYTFhMWE7XFxuICAgIC0taGVhZGVyQ29sb3JEYXJrOiAjMDgyMDMyO1xcbiAgICAtLWhlYWRlckNvbG9yTWVkaXVtOiAjMmMzOTRiO1xcbiAgICAtLWJvZHlUZXh0Q29sb3I6ICM0ZTRiNjY7XFxuICAgIC0tYm9keVRleHRDb2xvckdyYXk6ICMzMTMxMzE7XFxuICAgIC0tdG9wcGVyRm9udFNpemU6IGNsYW1wKDAuODEyNXJlbSwgMS42dncsIDFyZW0pO1xcbiAgICAtLWhlYWRlckZvbnRTaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgICAtLWJvZHlGb250U2l6ZTogMXJlbTtcXG4gICAgLS1zZWN0aW9uUGFkZGluZzogY2xhbXAoMy43NXJlbSwgNy44MnZ3LCA2LjI1cmVtKSAxcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcXG4gICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBEZWZhdWx0IGJhY2tncm91bmQgY29sb3IgKi9cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEJhc2ljIFR5cG9ncmFwaHkgKi9cXG4uY3MtdG9wcGVyLCAuY3MtdGl0bGUsIC5jcy10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuLmNzLXRvcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdG9wcGVyRm9udFNpemUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5jcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyRm9udFNpemUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbn1cXG5cXG4uY3MtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG59XFxuXFxuLyogTmF2aWdhdGlvbiBMaW5rcyAqL1xcbiNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlLCAjY3MtbmF2aWdhdGlvbj4ucGFnZS10aXRsZTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3JNZWRpdW0pO1xcbn1cXG5cXG4jY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICBNb2JpbGUgTmF2aWdhdGlvbiAgICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlIC0gMTAyM3B4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVyZW0pIHtcbiAgICBib2R5LmNzLW9wZW4ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgICNtYWluLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTglO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogLTExMDA7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMTUwdmg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy11bC13cmFwcGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtbGkge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwIDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xuICAgICAgICAvKiA0NHB4IC0gNDhweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xuICAgICAgICBtYXJnaW46IDAgMCAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUxIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMjVkZWcpO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUyIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHRyYW5zbGF0ZVkoMCkgcm90YXRlKC0yMjVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTMge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWJveCB7XG4gICAgICAgIC8qIDI0cHggLSAyOHB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sIDJ2dywgMS43NXJlbSk7XG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXG4gICAgICAgIGhlaWdodDogY2xhbXAoMC44NzVyZW0sIDEuNXZ3LCAxcmVtKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUxIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgdG9wIDAuM3MsIGxlZnQgMC4zcztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUyIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcywgbGVmdCAwLjNzLCB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMyB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjRlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIG9wYWNpdHkgMC4zcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDAgMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEuMjVyZW07XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAvKiB0cmFuc2l0aW9uIGZyb20gdGhlc2UgdmFsdWVzICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC4zNzVyZW0pO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cywgb3BhY2l0eSAwLjlzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDQpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNikge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg3KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg4KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDkpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEwKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDExKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMikge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMykge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjY1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIC8qIDE2cHggLSAyNHB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS43cmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgICAgLyogYWN0aXZlIHN0YXRlIHVuZGVybGluZSAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0wLjEyNXJlbTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIC8qIG1ha2VzIGl0IHdoaXRlICovXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG4gIDwtLS0gICAgIERlc2t0b3AgTmF2aWdhdGlvbiAgICAgLS0+XG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XG4gICAgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwOyAqL1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMS41cmVtO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiAyMHB4IC0gMzZweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDEuMjVyZW0sIDIuNnZ3LCAyLjI1cmVtKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgIC8qIHByZXZlbnQgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xuICAgICAgICBmbGV4OiBub25lO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDF2dywgMS4ycmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDByZW07XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgLyogbWFrZXMgaXQgdHVybiB3aGl0ZSAqL1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgIFNpZGUgQnkgU2lkZSBSZXZlcnNlICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG5cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIGNoYW5nZXMgdG8gMTI4MHB4IGF0IHRhYmxldCAqL1xuICAgICAgICBtYXgtd2lkdGg6IDM2LjVyZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA2dncsIDRyZW0pO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtcmlnaHQge1xuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dDpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLXJpZ2h0IHtcbiAgICAgICAgaGVpZ2h0OiA5NXZ3O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNXJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1sZWZ0IHtcbiAgICAgICAgaGVpZ2h0OiAxMTF2dztcbiAgICAgICAgbWF4LWhlaWdodDogMzEuMjVyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudC1sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8qIDI4cHggLSA0MHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoMS43NXJlbSwgM3Z3LCAyLjVyZW0pO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1zdGF0cyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDM5LjM3NXJlbTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgICAgICAgcm93LWdhcDogMS41cmVtO1xuICAgICAgICBjb2x1bW4tZ2FwOiAwLjc1cmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1zdGF0IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgLyogbWFraW5nIGZsZXggc28gd2UgY2FuIGFsaWduIGEgaGVhZGluZyB3aXRoIDEgbGluZSB0byB0aGUgYm90dG9tICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLW51bWJlciB7XG4gICAgICAgIC8qIDMxcHggLSAzOXB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS45Mzc1cmVtLCAzdncsIDIuNDM3NXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAvKiBhdXRvIG1hcmdpbiB0b3Agd2lsbCBwdXNoIHRleHQgdG8gYm90dG9tIGlmIHRoZXJlJ3Mgb25seSBvbmUgbGluZSAqL1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICB9XG59XG5cbi8qIFRhYmxldCAtIDc2OHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudCB7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudC1yaWdodCB7XG4gICAgICAgIC8qIHNlbmRzIGl0IHRvIHRoZSByaWdodCBpbiB0aGUgMm5kIHBvc2l0aW9uICovXG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLXJpZ2h0IHtcbiAgICAgICAgLyogMzQwcHggLSA0NjBweCAqL1xuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgyMS4yNXJlbSwgMzV2dywgMjguNzVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtbGVmdCB7XG4gICAgICAgIC8qIDUzMHB4IC0gNjYwcHggKi9cbiAgICAgICAgbWluLWhlaWdodDogY2xhbXAoMzMuMTI1cmVtLCA0NXZ3LCA0MS4yNXJlbSk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG5cbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGl0bGUsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLW51bWJlcixcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0LFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1kZXNjIHtcbiAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgICAgICAgRm9vdGVyICAgICAgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG5cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICAjY3MtZm9vdGVyLTEwOCB7XG4gICAgICAgIC8qIDQwcHggLSAxMDBweCB0b3AgYW5kIGJvdHRvbSAqL1xuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCA0Ljl2dywgMi4yNXJlbSkgMXJlbTtcbiAgICAgICAgLyogNDBweCAtIDUwcHggKi9cbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKDEuNXJlbSwgNi45dncsIDIuMTI1cmVtKTtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtdWwge1xuICAgICAgICAvKiA0MHB4IC0gNjBweCovXG4gICAgICAgIHBhZGRpbmc6IDAgMCBjbGFtcCgycmVtLCA0Ljd2dywgLjc1cmVtKTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjBmNjtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xuICAgICAgICAvKiAxNnB4IC0gMjBweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMC4xNXMsIDFyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcbiAgICAgICAgLyogdG9wIHJpZ2h0IGJveCAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgIGhlaWdodDogMC4xODc1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvcHlyaWdodCB7XG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44NzVyZW0sIDEuNnZ3LCAxcmVtKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2EwYTNiZDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8qIDIwcHggLSAyOHB4ICovXG4gICAgICAgIG1hcmdpbjogY2xhbXAoMS4yNXJlbSwgMi44dncsIDEuNzVyZW0pIGF1dG8gMDtcbiAgICB9XG59XG5cbi8qIFRhYmxldCAtIDYwMHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3LjVyZW0pIHtcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGkge1xuICAgICAgICAvKiA0NHB4IC0gODhweCAqL1xuICAgICAgICBtYXJnaW46IDAgY2xhbXAoMi43NXJlbSwgNi4ydncsIDUuNXJlbSkgMCAwO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgICAgICAgICAgTWVudSAgICAgICAgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cblxuLyogTW9iaWxlIC0gMzYwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgICNtZW51LTEwMDUge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNTpiZWZvcmUge1xuICAgICAgICAvKiBzdGF0aWMgdGlsZWQgcGF0dGVybiAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwLjA4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2NzaW1nLm55YzMuY2RuLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vRm9vZC1NZW51L3N0YXRpYy1wYXR0ZXJuLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogODBlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA3dncsIDRyZW0pO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWNvbnRlbnQge1xuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8qIGNlbnRlcnMgY29udGVudCBob3Jpem9udGFsbHksIHNldCB0byBmbGV4LXN0YXJ0IHRvIGxlZnQgYWxpZ24gKi9cbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyIHtcbiAgICAgICAgLyogMTIwcHggLSAxODFweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoNy41cmVtLCA5dncsIDExLjMxMjVyZW0pO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyOmJlZm9yZSB7XG4gICAgICAgIC8qIGxlZnQgbGluZSAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAvKiA5MHB4IC0gMTU1cHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDUuNjI1cmVtLCA0dncsIDkuNjg3NXJlbSk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAvKiAxMnB4IC0gMjRweCAqL1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKDAuNzVyZW0sIDJ2dywgMS41cmVtKTtcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlcjphZnRlciB7XG4gICAgICAgIC8qIHJpZ2h0IGxpbmUgKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgLyogOTBweCAtIDE1NXB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCg1LjYyNXJlbSwgNHZ3LCA5LjY4NzVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgLyogMTJweCAtIDI0cHggKi9cbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKDAuNzVyZW0sIDJ2dywgMS41cmVtKTtcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuXG4gICAgI21lbnUtMTAwNSAuY3MtdGV4dCB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIC8qIDQ2cHggLSA1NnB4ICovXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjg3NWVtLCA1LjV2dywgMy41ZW0pO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgZnJvbSBhZGRpbmcgdG8gdGhlIHdpZHRoICovXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWNhcmQtZ3JvdXAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICAgICAgICAvKiAzMnB4IC0gNjBweCAqL1xuICAgICAgICByb3ctZ2FwOiBjbGFtcCgycmVtLCA2dncsIDMuNzVyZW0pO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0ge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNi4yNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDE2cHggLSAzNnB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoMXJlbSwgM3Z3LCAyLjI1cmVtKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1waWN0dXJlIHtcbiAgICAgICAgLyogNzZweCAtIDE2MHB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCg0Ljc1cmVtLCAxNHZ3LCAxMHJlbSk7XG4gICAgICAgIGhlaWdodDogY2xhbXAoNC43NXJlbSwgMTR2dywgMTByZW0pO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAvKiA0cHggLSA4cHggKi9cbiAgICAgICAgYm9yZGVyOiBjbGFtcCgwLjI1cmVtLCAxdncsIDAuNXJlbSkgc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXBpY3R1cmUgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIG1ha2VzIGl0IGFjdCBsaWtlIGEgYmFja2dyb3VuZCBpbWFnZSAqL1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1oMyB7XG4gICAgICAgIC8qIDE2cHggLSAyNHB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjVyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC8qIDhweCAtIDE2cHggKi9cbiAgICAgICAgbWFyZ2luOiAwIDAgY2xhbXAoMC41cmVtLCAxLjV2dywgMXJlbSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBnYXA6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaDM6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtbmFtZSB7XG4gICAgICAgIG1heC13aWR0aDogMTMuNzVyZW07XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtcHJpY2Uge1xuICAgICAgICAvKiAxNnB4IC0gMjVweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS41NjI1cmVtKTtcbiAgICAgICAgLyogMjhweCAtIDQ2cHggKi9cbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDEuNzVyZW0sIDR2dywgMi44NzVyZW0pO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAvKiA4cHggLSAxMnB4ICovXG4gICAgICAgIHBhZGRpbmc6IDAgY2xhbXAoMC41cmVtLCAxdncsIDAuNzVyZW0pO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGIyYzc7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG9yZGVyOiAzO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0tcCB7XG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44NzVyZW0sIDJ2dywgMXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xuICAgICNtZW51LTEwMDUgLmNzLWNhcmQtZ3JvdXAge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDQ4LjUlO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICAgICAgIENvbnRhY3RzICAgICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgN3Z3LCA0cmVtKTtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWNvbnRlbnQge1xuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8qIGNlbnRlcnMgY29udGVudCBob3Jpem9udGFsbHksIHNldCB0byBmbGV4LXN0YXJ0IHRvIGxlZnQgYWxpZ24gKi9cbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogY2hhbmdlcyB0byAxMjgwcHggYXQgZGVza3RvcCAqL1xuICAgICAgICBtYXgtd2lkdGg6IDM3LjVyZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMi41cmVtO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaXRlbSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxOC4xMjVyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaXRlbTpob3ZlciAuY3MtcGljdHVyZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgLyogMTJweCAtIDIwcHggKi9cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCgwLjc1cmVtLCAzdncsIDEuMjVyZW0pO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYWJhYmE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiBwcmV2ZW50cyBmbGV4Ym94IGZyb20gc3F1aXNoaW5nIGl0ICovXG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsXG4gICAgICAgICAgICBib3gtc2hhZG93IDAuM3MsXG4gICAgICAgICAgICB0cmFuc2Zvcm0gMC42cztcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWZsZXgtZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pY29uIHtcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhvdXJzIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1ib2R5Rm9udFNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM3Njc2NzY7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluazpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn1cblxuLyogVGFibGV0IC0gNjUwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAuNjI1cmVtKSB7XG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICAgICAgICByb3ctZ2FwOiAycmVtO1xuICAgIH1cbn1cblxuLyogU21hbGwgRGVza3RvcCAtIDEwMjRweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB9XG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1oZWFkZXIsXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1saW5rLFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaG91cnMge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztvQ0FFb0M7QUFDcEMsb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsaURBQWlEO1FBQ2pELGVBQWU7UUFDZixjQUFjO0lBQ2xCOztJ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SSxnQ0FBZ0M7SUFDcEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbiAgPC0tLSAgICAgTW9iaWxlIE5hdmlnYXRpb24gICAgICAtLT5cXG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuLyogTW9iaWxlIC0gMTAyM3B4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XFxuICAgIGJvZHkuY3Mtb3BlbiB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDE4JTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xMTAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIG9wYWNpdHkgMC41cztcXG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxNTB2aDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtbGkge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDE0cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9XFxuXFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xcbiAgICAgICAgLyogNDRweCAtIDQ4cHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMSB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMjVkZWcpO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUyIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgdHJhbnNsYXRlWSgwKSByb3RhdGUoLTIyNWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTMge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYm94IHtcXG4gICAgICAgIC8qIDI0cHggLSAyOHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoMS41cmVtLCAydncsIDEuNzVyZW0pO1xcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICAgIGhlaWdodDogY2xhbXAoMC44NzVyZW0sIDEuNXZ3LCAxcmVtKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTEge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHRvcCAwLjNzLCBsZWZ0IDAuM3M7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUyIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcywgbGVmdCAwLjNzLCB0cmFuc2Zvcm0gMC41cztcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTMge1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MsIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjRlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuM3M7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWF4LWhlaWdodDogNjV2aDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMCAwIDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuMjVyZW07XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgLyogdHJhbnNpdGlvbiBmcm9tIHRoZXNlIHZhbHVlcyAqL1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjM3NXJlbSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cywgb3BhY2l0eSAwLjlzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDQpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDUpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg2KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg3KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEwKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEyKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS43cmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIC8qIG1ha2VzIGl0IHdoaXRlICovXFxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgIERlc2t0b3AgTmF2aWdhdGlvbiAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwOyAqL1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzByZW07XFxuICAgICAgICBoZWlnaHQ6IDdyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDIwcHggLSAzNnB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDEuMjVyZW0sIDIuNnZ3LCAyLjI1cmVtKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgICAgIC8qIHByZXZlbnQgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMXZ3LCAxLjJyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMHJlbTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgLyogbWFrZXMgaXQgdHVybiB3aGl0ZSAqL1xcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgU2lkZSBCeSBTaWRlIFJldmVyc2UgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCB0YWJsZXQgKi9cXG4gICAgICAgIG1heC13aWR0aDogMzYuNXJlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDZ2dywgNHJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudC1yaWdodCB7XFxuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8qIGNlbnRlcnMgY29udGVudCBob3Jpem9udGFsbHksIHNldCB0byBmbGV4LXN0YXJ0IHRvIGxlZnQgYWxpZ24gKi9cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQ6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLXJpZ2h0IHtcXG4gICAgICAgIGhlaWdodDogOTV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLWxlZnQge1xcbiAgICAgICAgaGVpZ2h0OiAxMTF2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtbGVmdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogMjhweCAtIDQwcHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoMS43NXJlbSwgM3Z3LCAyLjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1zdGF0cyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzkuMzc1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgICAgIHJvdy1nYXA6IDEuNXJlbTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXN0YXQge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxLjVyZW0gMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIC8qIG1ha2luZyBmbGV4IHNvIHdlIGNhbiBhbGlnbiBhIGhlYWRpbmcgd2l0aCAxIGxpbmUgdG8gdGhlIGJvdHRvbSAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLW51bWJlciB7XFxuICAgICAgICAvKiAzMXB4IC0gMzlweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjkzNzVyZW0sIDN2dywgMi40Mzc1cmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMC4yNXJlbSAwO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1kZXNjIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgLyogYXV0byBtYXJnaW4gdG9wIHdpbGwgcHVzaCB0ZXh0IHRvIGJvdHRvbSBpZiB0aGVyZSdzIG9ubHkgb25lIGxpbmUgKi9cXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtcmlnaHQge1xcbiAgICAgICAgLyogc2VuZHMgaXQgdG8gdGhlIHJpZ2h0IGluIHRoZSAybmQgcG9zaXRpb24gKi9cXG4gICAgICAgIG9yZGVyOiAyO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLXJpZ2h0IHtcXG4gICAgICAgIC8qIDM0MHB4IC0gNDYwcHggKi9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDIxLjI1cmVtLCAzNXZ3LCAyOC43NXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLWxlZnQge1xcbiAgICAgICAgLyogNTMwcHggLSA2NjBweCAqL1xcbiAgICAgICAgbWluLWhlaWdodDogY2xhbXAoMzMuMTI1cmVtLCA0NXZ3LCA0MS4yNXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcblxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGl0bGUsXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtbnVtYmVyLFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xcbiAgICAgICAgb3BhY2l0eTogLjg7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgICAgICBGb290ZXIgICAgICAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI2NzLWZvb3Rlci0xMDgge1xcbiAgICAgICAgLyogNDBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXFxuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCA0Ljl2dywgMi4yNXJlbSkgMXJlbTtcXG4gICAgICAgIC8qIDQwcHggLSA1MHB4ICovXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMS41cmVtLCA2Ljl2dywgMi4xMjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XFxuICAgICAgICAvKiA0MHB4IC0gNjBweCovXFxuICAgICAgICBwYWRkaW5nOiAwIDAgY2xhbXAoMnJlbSwgNC43dncsIC43NXJlbSk7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjBmNjtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcXG4gICAgICAgIC8qIDE2cHggLSAyMHB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMC4xNXMsIDFyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpob3ZlcjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIHRvcCByaWdodCBib3ggKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgaGVpZ2h0OiAwLjE4NzVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvcHlyaWdodCB7XFxuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMS42dncsIDFyZW0pO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6ICNhMGEzYmQ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIC8qIDIwcHggLSAyOHB4ICovXFxuICAgICAgICBtYXJnaW46IGNsYW1wKDEuMjVyZW0sIDIuOHZ3LCAxLjc1cmVtKSBhdXRvIDA7XFxuICAgIH1cXG59XFxuXFxuLyogVGFibGV0IC0gNjAwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3LjVyZW0pIHtcXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcXG4gICAgICAgIC8qIDQ0cHggLSA4OHB4ICovXFxuICAgICAgICBtYXJnaW46IDAgY2xhbXAoMi43NXJlbSwgNi4ydncsIDUuNXJlbSkgMCAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgICAgICAgTWVudSAgICAgICAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI21lbnUtMTAwNSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNTpiZWZvcmUge1xcbiAgICAgICAgLyogc3RhdGljIHRpbGVkIHBhdHRlcm4gKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvcGFjaXR5OiAwLjA4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL2NzaW1nLm55YzMuY2RuLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vRm9vZC1NZW51L3N0YXRpYy1wYXR0ZXJuLmpwZ1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODBlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgN3Z3LCA0cmVtKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1jb250ZW50IHtcXG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIge1xcbiAgICAgICAgLyogMTIwcHggLSAxODFweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDcuNXJlbSwgOXZ3LCAxMS4zMTI1cmVtKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyOmJlZm9yZSB7XFxuICAgICAgICAvKiBsZWZ0IGxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgLyogOTBweCAtIDE1NXB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgLyogMTJweCAtIDI0cHggKi9cXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlcjphZnRlciB7XFxuICAgICAgICAvKiByaWdodCBsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDUuNjI1cmVtLCA0dncsIDkuNjg3NXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXFxuICAgICAgICBtYXJnaW4tbGVmdDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcblxcbiAgICAjbWVudS0xMDA1IC5jcy10ZXh0IHtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgLyogNDZweCAtIDU2cHggKi9cXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjg3NWVtLCA1LjV2dywgMy41ZW0pO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgZnJvbSBhZGRpbmcgdG8gdGhlIHdpZHRoICovXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWNhcmQtZ3JvdXAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xcbiAgICAgICAgLyogMzJweCAtIDYwcHggKi9cXG4gICAgICAgIHJvdy1nYXA6IGNsYW1wKDJyZW0sIDZ2dywgMy43NXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDM2LjI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiAxNnB4IC0gMzZweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDIuMjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgLyogNzZweCAtIDE2MHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNC43NXJlbSwgMTR2dywgMTByZW0pO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg0Ljc1cmVtLCAxNHZ3LCAxMHJlbSk7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgLyogNHB4IC0gOHB4ICovXFxuICAgICAgICBib3JkZXI6IGNsYW1wKDAuMjVyZW0sIDF2dywgMC41cmVtKSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogbWFrZXMgaXQgYWN0IGxpa2UgYSBiYWNrZ3JvdW5kIGltYWdlICovXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1oMyB7XFxuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIC8qIDhweCAtIDE2cHggKi9cXG4gICAgICAgIG1hcmdpbjogMCAwIGNsYW1wKDAuNXJlbSwgMS41dncsIDFyZW0pO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBnYXA6IDAuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaDM6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtbmFtZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzLjc1cmVtO1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1wcmljZSB7XFxuICAgICAgICAvKiAxNnB4IC0gMjVweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNTYyNXJlbSk7XFxuICAgICAgICAvKiAyOHB4IC0gNDZweCAqL1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDEuNzVyZW0sIDR2dywgMi44NzVyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIC8qIDhweCAtIDEycHggKi9cXG4gICAgICAgIHBhZGRpbmc6IDAgY2xhbXAoMC41cmVtLCAxdncsIDAuNzVyZW0pO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiMmM3O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBvcmRlcjogMztcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtLXAge1xcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44NzVyZW0sIDJ2dywgMXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAtIDc2OHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xcbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDQ4LjUlO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgICAgICAgICAgQ29udGFjdHMgICAgICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcblxcbi8qIE1vYmlsZSAtIDM2MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MGVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA3dncsIDRyZW0pO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtY29udGVudCB7XFxuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCBkZXNrdG9wICovXFxuICAgICAgICBtYXgtd2lkdGg6IDM3LjVyZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW0ge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAxOC4xMjVyZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pdGVtOmhvdmVyIC5jcy1waWN0dXJlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgd2lkdGg6IDVyZW07XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICAvKiAxMnB4IC0gMjBweCAqL1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCgwLjc1cmVtLCAzdncsIDEuMjVyZW0pO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JhYmFiYTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiBwcmV2ZW50cyBmbGV4Ym94IGZyb20gc3F1aXNoaW5nIGl0ICovXFxuICAgICAgICBmbGV4OiBub25lO1xcbiAgICAgICAgdHJhbnNpdGlvbjpcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsXFxuICAgICAgICAgICAgYm94LXNoYWRvdyAwLjNzLFxcbiAgICAgICAgICAgIHRyYW5zZm9ybSAwLjZzO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtZmxleC1ncm91cCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogIzc2NzY3NjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluazpob3ZlciB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA2NTBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAuNjI1cmVtKSB7XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcXG4gICAgICAgIHJvdy1nYXA6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuLyogU21hbGwgRGVza3RvcCAtIDEwMjRweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcXG4gICAgICAgIG1heC13aWR0aDogODByZW07XFxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1oZWFkZXIsXFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFyay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydGluZyBnbG9iYWwsIG1haW4sIGFuZCBkYXJrIG1vZGUgQ1NTIHN0eWxlc2hlZXRzXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2RhcmsuY3NzJztcblxuaW1wb3J0ICcuLi9zcmMvYXNzZXRzL2ltZy9mYXZpY29ucy9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZyc7XG5pbXBvcnQgJy4uL3NyYy9hc3NldHMvaW1nL2Zhdmljb25zL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJztcbmltcG9ydCAnLi4vc3JjL2Fzc2V0cy9pbWcvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmcnO1xuaW1wb3J0ICcuLi9zcmMvYXNzZXRzL2ltZy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZyc7XG5pbXBvcnQgJy4uL3NyYy9hc3NldHMvaW1nL2Zhdmljb25zL2Zhdmljb24tMzJ4MzIucG5nJztcbi8vIGltcG9ydCAnLi4vc3JjL2Fzc2V0cy9pbWcvZmF2aWNvbnMvZmF2aWNvbi5pY28nO1xuXG4vLyBJbXBvcnRpbmcgZnVuY3Rpb25hbGl0eSBtb2R1bGVzXG5pbXBvcnQgZGFya01vZGVUb2dnbGVyIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L2RhcmtNb2RlLmpzJztcbmltcG9ydCBtb2JpbGVOYXZpZ2F0aW9uVG9nZ2xpbmcgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvbW9iaWxlTmF2aWdhdGlvbi5qcyc7XG5cbi8vIEltcG9ydGluZyBwYWdlIGxvYWRlciBmdW5jdGlvbnNcbmltcG9ydCBob21lUGFnZUxvYWRlciBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWRlcnMvaG9tZVBhZ2VMb2FkZXIuanMnO1xuaW1wb3J0IG1lbnVQYWdlTG9hZGVyIGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZGVycy9tZW51UGFnZUxvYWRlci5qcyc7XG5pbXBvcnQgY29udGFjdHNQYWdlTG9hZGVyIGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZGVycy9jb250YWN0c1BhZ2VMb2FkZXIuanMnO1xuXG4vLyBBY3RpdmF0ZSBkYXJrIG1vZGUgdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbmRhcmtNb2RlVG9nZ2xlcigpO1xuXG4vLyBTZXQgdXAgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbm1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZygpO1xuXG4vLyBHbG9iYWwgdmFyaWFibGVzIHNldHVwXG5sZXQgcGFnZU5hbWVzID0gWydob21lJywgJ21lbnUnLCAnY29udGFjdHMnXTtcbi8vIGxldCBjdXJyZW50VGFiID0gcGFnZU5hbWVzWzBdO1xubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XG5cbi8vIExvYWQgdGhlIGluaXRpYWwgaG9tZSBwYWdlIGNvbnRlbnRcbmhvbWVQYWdlTG9hZGVyKGNvbnRlbnQpO1xuXG4vKipcbiAqIFNldCB1cCBjbGljayBldmVudCBsaXN0ZW5lcnMgZm9yIHRhYiBuYXZpZ2F0aW9uIGluIHRoZSBoZWFkZXJcbiAqIFRoaXMgYWxsb3dzIHN3aXRjaGluZyBiZXR3ZWVuIGRpZmZlcmVudCBwYWdlcyAoaG9tZSwgbWVudSwgY29udGFjdHMpIGFuZFxuICogZW5zdXJlcyB0aGUgYXBwcm9wcmlhdGUgY29udGVudCBpcyBsb2FkZWQgYW5kIGRpc3BsYXllZFxuICovXG5wYWdlTmFtZXMuZm9yRWFjaCgocGFnZU5hbWUpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlTmFtZSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmlkID09ICdob21lJykge1xuICAgICAgICAgICAgaG9tZVBhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09ICdtZW51Jykge1xuICAgICAgICAgICAgbWVudVBhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWN0c1BhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkFjdGl2ZVN0YXRlKHBhZ2VOYW1lKTtcbiAgICB9KTtcbn0pO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHJlbW92ZXMgYWN0aXZlIHN0YXRlIGluIG1vYmlsZSBuYXZpZ2F0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZlQnV0dG9uSWQgLSBUaGUgSUQgb2YgdGhlIG5hdmlnYXRpb24gYnV0dG9uIHRvIGJlIG1hcmtlZCBhcyBhY3RpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25BY3RpdmVTdGF0ZShhY3RpdmVCdXR0b25JZCkge1xuICAgIC8vIE5hdmlnYXRpb24gYnV0dG9uIElEc1xuICAgIGNvbnN0IG5hdmlnYXRpb25CdXR0b25zID0gWydob21lJywgJ21lbnUnLCAnY29udGFjdHMnXTtcblxuICAgIC8vIFNlbGVjdGluZyBlbGVtZW50cyByZWxhdGVkIHRvIG1vYmlsZSBuYXZpZ2F0aW9uXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLW5hdmlnYXRpb24nKTtcbiAgICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZScpO1xuXG4gICAgbmF2aWdhdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uSWQpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbklkKTtcbiAgICAgICAgaWYgKGJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChidXR0b25JZCA9PT0gYWN0aXZlQnV0dG9uSWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgbW9iaWxlIG5hdmlnYXRpb24gbWVudSB3aGVuIGEgbmF2aWdhdGlvbiBidXR0b24gaXMgYWN0aXZhdGVkXG4gICAgICAgICAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY3Mtb3BlbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJleHBvcnQgbGV0IGNvbnRhY3RzQ29udGVudHMgPSBbXG4gICAge1xuICAgICAgICBjb250ZW50czoge1xuICAgICAgICAgICAgdGl0bGU6ICdPdXIgQ29udGFjdHMnLFxuICAgICAgICAgICAgdG9wcGVyOiAnV2UgZ290IGZvb2QhJyxcbiAgICAgICAgICAgIHBhcmFncmFwaDogJ1NvbWUgY2xldmVyIHRleHQgYWJvdXQgcmVzZXJ2aW5nIHRhYmxlIHZpYSBwaG9uZSBvciBlbWFpbCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRHcm91cDoge1xuICAgICAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ1Bob25lJyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOck9uZTogJysxICg1NTUpIDQ1NiA3ODk5JyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOclR3bzogJysxICg1NTUpIDQ1NiA3ODg5JyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYHRlbDo1NTUtNDU2LTc4OTlgLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY3NpbWcubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0NvbnRhY3QtUGFnZS9waG9uZS1ncmV5LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmlhLWhpZGRlbjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnRW1haWwnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJ2luZm9AZW1haWwuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYG1haWx0bzpJbmZvQGVtYWlsLmNvbWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2NzaW1nLm55YzMuY2RuLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vSWNvbnMvbWVjaC1lbWFpbC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJpYS1oaWRkZW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGAxMjMgRmFrZSBTdCwgU1RFIDEwMCBTb21ld2hlcmUsIEZMIDk4NzVgLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY3NpbWcubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0NvbnRhY3QtUGFnZS9waW4tZ3JleS5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJpYS1oaWRkZW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG91cnM6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ09wZW4gSG91cnMnLFxuICAgICAgICAgICAgICAgICAgICBkYXlzOiAnTW9uZGF5IFRvIFNhdHVyZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6ICc5OjAwIC0gMjI6MzAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY3NpbWcubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0NvbnRhY3QtUGFnZS9jbG9jay1ncmV5LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmlhLWhpZGRlbjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgaG9tZVBhZ2VMZWZ0IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9ob21lUGFnZUxlZnQuanBnJztcbmltcG9ydCBob21lUGFnZVJpZ2h0IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9ob21lUGFnZVJpZ2h0LmpwZyc7XG5cbmV4cG9ydCBsZXQgaG9tZUNvbnRlbnRzID0gW1xuICAgIHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdG9wcGVyOiAnRG8geW91IGxpa2UgZm9vZD8nLFxuICAgICAgICAgICAgdGl0bGU6ICdBY2Nlc3NpYmxlIEZvb2QgVGhhdCBBbnlvbmUgQ2FuIEVhdCcsXG4gICAgICAgICAgICBwYXJhZ3JhcGg6IGBJbW1lcnNlIHlvdXJzZWxmIGluIHRoZSB0YW50YWxpemluZyB3b3JsZCBvZiBnb3VybWV0IGRpbmluZyBhdFxuICAgICAgICBcIlNhdm9yJ3MgQ2F0Y2hcIiwgYSB2aWJyYW50IGFuZCBlbGVjdHJpZnlpbmcgcmVzdGF1cmFudCBicmFuZFxuICAgICAgICBjcmFmdGVkIHNwZWNpZmljYWxseSBmb3IgdGhvc2Ugd2hvIHJlbGlzaCB0aGUgdGhyaWxsIG9mIGN1bGluYXJ5XG4gICAgICAgIGV4Y2VsbGVuY2UuIEZvciBhdmlkIGZvb2QgZW50aHVzaWFzdHMgd2hvIGZlZWwgdGhlaXIgdGFzdGUgYnVkc1xuICAgICAgICBhd2FrZW4gYXQgdGhlIGZpcnN0IGhpbnQgb2YgZXhxdWlzaXRlIGZsYXZvcnMsIFwiU2F2b3IncyBDYXRjaFwiXG4gICAgICAgIGVtYm9kaWVzIHRoZSBlc3NlbmNlIG9mIHRoYXQgZXhoaWxhcmF0aW5nIG1vbWVudCB3aGVuIGFcbiAgICAgICAgcGVyZmVjdGx5IHByZXBhcmVkIGRpc2ggYW5kIGEgZGlzY2VybmluZyBkaW5lciBlbmdhZ2UgaW4gYVxuICAgICAgICBkZWxpZ2h0ZnVsIGludGVycGxheSBvZiB0YXN0ZSBhbmQgY3JhZnRzbWFuc2hpcC5gLFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZUxlZnQ6IHtcbiAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgIHNyY3NldDogaG9tZVBhZ2VMZWZ0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgIHNyY3NldDogaG9tZVBhZ2VMZWZ0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICBzcmM6IGhvbWVQYWdlTGVmdCxcbiAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNjA4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MDYnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VSaWdodDoge1xuICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgc3Jjc2V0OiBob21lUGFnZVJpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgIHNyY3NldDogaG9tZVBhZ2VSaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgc3JjOiBob21lUGFnZVJpZ2h0LFxuICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc2MDgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzY2MicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgZmlyc3RTdGF0OiB7XG4gICAgICAgICAgICAgICAgbnVtOiAnOTklJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnUG9zaXRpdmUgY3VzdG9tZXIgcmV2aWV3cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Vjb25kU3RhdDoge1xuICAgICAgICAgICAgICAgIG51bTogJzEwJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBgRGlzaCAnVHJ5IEFnYWluJyBTcGVjaWFsYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlyZFN0YXQ6IHtcbiAgICAgICAgICAgICAgICBudW06ICcyNC83JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnT25saW5lIHJlc2VydmF0aW9uIGFuZCBpbnF1aXJ5IHNlcnZpY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCBidXJnZXIgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L2Jpc29uQnVyZ2VyLmpwZyc7XG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUvY2hpY2tlblNhbGFkTWFuZ28uanBnJztcbmltcG9ydCBsYXNhZ25hIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9sYXNhZ25hLmpwZyc7XG5pbXBvcnQgcGl6emEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L21lYXRMb3ZlcnNQaXp6YS5qcGcnO1xuaW1wb3J0IHNhdWNlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9wcmlja2x5UGVhclBvcmtTYXVjZS5qcGcnO1xuaW1wb3J0IHRvc3RhZGEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L3B1cnBsZUNvcm5Ub3N0YWRhLmpwZyc7XG5cbmV4cG9ydCBsZXQgbWVudUNvbnRlbnRzID0gW1xuICAgIHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGl0bGU6ICdPdXIgU3BlY2lhbHMnLFxuICAgICAgICAgICAgcGFyYWdyYXBoOiBgSW5kdWxnZSBpbiBvdXIgU3BlY2lhbCBNZW51LCB3aGVyZSBlYWNoIGRpc2ggaXMgYSBtYXN0ZXJwaWVjZSBvZlxuICAgICAgICAgICAgZmxhdm9yIGFuZCBjcmVhdGl2aXR5LiBGcm9tIHRoZSBoZWFydGluZXNzIG9mIGEgQmlzb24gQnVyZ2VyIHRvXG4gICAgICAgICAgICB0aGUgZXhvdGljIGZsYWlyIG9mIEN1cnJpZWQgQ2hpY2tlbiBTYWxhZCB3aXRoIE1hbmdvLCBleHBlcmllbmNlXG4gICAgICAgICAgICBhIGN1bGluYXJ5IGpvdXJuZXkgdGhhdCBkZWxpZ2h0cyBhbmQgc3VycHJpc2VzIHdpdGggZXZlcnkgYml0ZS5gLFxuICAgICAgICB9LFxuICAgICAgICBjYXJkR3JvdXA6IHtcbiAgICAgICAgICAgIGxpc3RJdGVtT25lOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTGFzYWduYScsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnNTbigqwnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFyYWdyYXBoOiBgQSBjbGFzc2ljIGZhdm9yaXRlLCBvdXIgbGFzYWduYSBsYXllcnMgdGVuZGVyIHBhc3RhIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgcmljaCBtZWF0IHNhdWNlIGFuZCBjcmVhbXkgYsOpY2hhbWVsLCB0b3BwZWQgd2l0aCBnb2xkZW4sXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsaW5nIGNoZWVzZSBmb3IgYSBjb21mb3J0aW5nIGFuZCBpbmR1bGdlbnQgbWVhbC5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBsYXNhZ25hLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBsYXNhZ25hLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBsYXNhZ25hLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbVR3bzoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Jpc29uIEJ1cmdlcicsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnNTbigqwnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFyYWdyYXBoOiBgVGhpcyBoZWFydHkgYnVyZ2VyIGZlYXR1cmVzIGEganVpY3kgYmlzb24gcGF0dHkgdG9wcGVkXG4gICAgICAgICAgICAgICAgICAgIHdpdGggZnJlc2ggdmVnZXRhYmxlcyBhbmQgbWVsdGVkIGNoZWVzZSwgc2VydmVkIGluIGFcbiAgICAgICAgICAgICAgICAgICAgcnVzdGljIGJ1biBmb3IgYSByb2J1c3QgYW5kIHNhdGlzZnlpbmcgZXhwZXJpZW5jZS5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBidXJnZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGJ1cmdlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYnVyZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbVRocmVlOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ3VycmllZCBDaGlja2VuIFNhbGFkJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBBIHJlZnJlc2hpbmcgbWl4IG9mIHRlbmRlciBjdXJyaWVkIGNoaWNrZW4gYW5kIHN3ZWV0XG4gICAgICAgICAgICAgICAgICAgIG1hbmdvIHNsaWNlcywgdG9zc2VkIHdpdGggdmlicmFudCBncmVlbnMgZm9yIGEgbGlnaHQgeWV0XG4gICAgICAgICAgICAgICAgICAgIGZsYXZvcmZ1bCBzYWxhZC5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBjaGlja2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBjaGlja2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBjaGlja2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbUZvdXI6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBNZWF0IExvdmVycycgUGl6emFgLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYExvYWRlZCB3aXRoIGFuIGFzc29ydG1lbnQgb2YgbWVhdHMgbGlrZSBwZXBwZXJvbmksXG4gICAgICAgICAgICAgICAgICAgIHNhdXNhZ2UsIGFuZCBiYWNvbiwgdGhpcyBwaXp6YSBvZmZlcnMgYSBjYXJuaXZvcmUnc1xuICAgICAgICAgICAgICAgICAgICBkZWxpZ2h0IHdpdGggZXZlcnkgY3Jpc3B5LCBjaGVlc3kgYml0ZS5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBwaXp6YSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogcGl6emEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHBpenphLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbUZpdmU6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBQdXJwbGUgQ29ybiBUb3N0YWRhYCxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBBIGZlYXN0IGZvciB0aGUgZXllcyBhbmQgdGhlIHBhbGF0ZSwgdGhpcyB0b3N0YWRhIHVzZXMgYVxuICAgICAgICAgICAgICAgICAgICB1bmlxdWUgcHVycGxlIGNvcm4gc2hlbGwsIHBpbGVkIGhpZ2ggd2l0aCBzZWFzb25lZCBtZWF0c1xuICAgICAgICAgICAgICAgICAgICBhbmQgZnJlc2ggdG9wcGluZ3MgZm9yIGEgY3J1bmNoeSwgc2F2b3J5IHRyZWF0LmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHRvc3RhZGEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHRvc3RhZGEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHRvc3RhZGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RJdGVtU2l4OiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgUHJpY2tseSBQZWFyIFBvcmsgU2F1Y2VgLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYEFuIGlubm92YXRpdmUgZnVzaW9uLCB0aGlzIHNhdWNlIGJsZW5kcyB0aGUgc3dlZXRuZXNzIG9mXG4gICAgICAgICAgICAgICAgICAgIHByaWNrbHkgcGVhciB3aXRoIHJpY2ggcG9yaywgY3JlYXRpbmcgYSBwZXJmZWN0XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZW1lbnQgdG8gZW5oYW5jZSBhbnkgZ291cm1ldCBkaXNoLmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHNhdWNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBzYXVjZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc2F1Y2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiIsIi8vIEltcG9ydGluZyBob21lIGNvbnRlbnRzIGRhdGEgZnJvbSBjb250YWN0c0NvbnRlbnRzIG1vZHVsZVxuaW1wb3J0IHsgY29udGFjdHNDb250ZW50cyB9IGZyb20gJy4uL3BhZ2VEYXRhL2NvbnRhY3RzQ29udGVudC5qcyc7XG5cbi8vIEltcG9ydGluZyB1dGlsaXR5IGZ1bmN0aW9ucyBmcm9tIHRoZSAnZWxlbWVudFJlbmRlcicgbW9kdWxlLiBUaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWRcbi8vIGZvciBjcmVhdGluZyB2YXJpb3VzIEhUTUwgZWxlbWVudHMgZHluYW1pY2FsbHlcbmltcG9ydCB7XG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlUGljdHVyZSxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGNyZWF0ZUxpc3RJdGVtLFxuICAgIGNyZWF0ZVNwYW4sXG4gICAgY2xlYXJQYWdlLFxuICAgIGNyZWF0ZUxpbmssXG4gICAgY3JlYXRlVGl0bGUsXG4gICAgY3JlYXRlUGFyYWdyYXBoLFxuICAgIGNyZWF0ZVRvcHBlcixcbn0gZnJvbSAnLi4vdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzJztcblxuLyoqXG4gKiBMb2FkcyBhbmQgZGlzcGxheXMgdGhlIGNvbnRhY3RzIHBhZ2UgY29udGVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudCAtIFRoZSBwYXJlbnQgZWxlbWVudCB3aGVyZSB0aGUgY29udGFjdHMgcGFnZSB3aWxsIGJlIHJlbmRlcmVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RzUGFnZUxvYWRlcihjb250ZW50KSB7XG4gICAgY2xlYXJQYWdlKGNvbnRlbnQpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIHNlY3Rpb24gZm9yIGNvbnRhY3RzIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGNvbnRlbnQgYXJlYVxuICAgIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCdpZCcsICdjb250YWN0LXN0cmlwLTMyNCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgICAvLyBSZW5kZXIgYW5kIGFwcGVuZCB0aGUgY29udGFpbmVyIGZvciB0aGUgY29udGFjdHMgY29udGVudFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHJlbmRlckNvbnRhaW5lcigpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIGEgbGlzdCBvZiBjb250YWN0IGNhcmRzIHRvIHRoZSBjb250YWluZXIgdXNpbmcgZGF0YSBmcm9tIGNvbnRhY3RzQ29udGVudHNcbiAgICBjb25zdCBjYXJkR3JvdXAgPSBjb250YWN0c0NvbnRlbnRzWzBdLmNhcmRHcm91cDtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXN0YXQtZ3JvdXAnLFxuICAgICAgICBPYmplY3QudmFsdWVzKGNhcmRHcm91cCksXG4gICAgICAgIHJlbmRlckNvbnRhY3RJdGVtXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgcHJpbWFyeSBjb250YWluZXIgZm9yIHRoZSBjb250YWN0cyBwYWdlXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGNvbnRhaW5lciBkaXYgZWxlbWVudFxuICovXG5mdW5jdGlvbiByZW5kZXJDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRGl2KCdjbGFzcycsICdjcy1jb250YWluZXInKTtcblxuICAgIC8vIFJlbmRlciBhbmQgYXBwZW5kIHRoZSBjb250ZW50IHNlY3Rpb24gd2l0aCB0aXRsZSBhbmQgcGFyYWdyYXBoIHRvIHRoZSBjb250YWluZXJcbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyQ29udGVudCgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBzZWN0aW9uIHdpdGggdGl0bGUsIHRvcHBlciwgYW5kIHBhcmFncmFwaFxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjb250ZW50IHNlY3Rpb24gZGl2IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRGl2KCdjbGFzcycsICdjcy1jb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXRpdGxlJyxcbiAgICAgICAgY29udGFjdHNDb250ZW50c1swXS5jb250ZW50cy50aXRsZVxuICAgICk7XG4gICAgY29uc3QgdG9wcGVyID0gY3JlYXRlVG9wcGVyKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdG9wcGVyJyxcbiAgICAgICAgY29udGFjdHNDb250ZW50c1swXS5jb250ZW50cy50b3BwZXJcbiAgICApO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXRleHQnLFxuICAgICAgICBjb250YWN0c0NvbnRlbnRzWzBdLmNvbnRlbnRzLnBhcmFncmFwaFxuICAgICk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvcHBlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyBhbiBpbmRpdmlkdWFsIGNvbnRhY3QgaXRlbSBhcyBhIGxpc3QgaXRlbVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgY29udGFjdCBpdGVtXG4gKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH0gLSBUaGUgbGlzdCBpdGVtIGVsZW1lbnQgd2l0aCBjb250YWN0IGluZm9ybWF0aW9uXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3RJdGVtKGl0ZW1EYXRhKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVMaXN0SXRlbShcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLWl0ZW0nLFxuICAgICAgICBpdGVtRGF0YSxcbiAgICAgICAgcmVuZGVyTGlzdEl0ZW1Db250ZW50XG4gICAgKTtcbiAgICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBmb3IgYSBjb250YWN0IGxpc3QgaXRlbVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgY29udGFjdCBpdGVtXG4gKiBAcmV0dXJucyB7RG9jdW1lbnRGcmFnbWVudH0gLSBUaGUgZnJhZ21lbnQgY29udGFpbmluZyBjb250YWN0IGl0ZW0gY29udGVudFxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0SXRlbUNvbnRlbnQoaXRlbURhdGEpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBwaWN0dXJlID0gY3JlYXRlUGljdHVyZSgnY2xhc3MnLCAnY3MtcGljdHVyZScsIGl0ZW1EYXRhLnBpY3R1cmUpO1xuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWZsZXgtZ3JvdXAnKTtcblxuICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVNwYW4oJ2NsYXNzJywgJ2NzLWhlYWRlcicsIGl0ZW1EYXRhLmluZm8uaGVhZGVyKVxuICAgICk7XG4gICAgYXBwZW5kQ29udGFjdEluZm8oaW5mb0NvbnRhaW5lciwgaXRlbURhdGEuaW5mbyk7XG5cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChwaWN0dXJlKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIHNwZWNpZmljIGNvbnRhY3QgZGV0YWlscyB0byBhIGNvbnRhaW5lciBiYXNlZCBvbiB0aGUgaXRlbSB0eXBlIChwaG9uZSwgZW1haWwsIGV0Yy4pXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBjb250YWluZXIgLSBUaGUgY29udGFpbmVyIHRvIHdoaWNoIGFkZGl0aW9uYWwgaW5mbyB3aWxsIGJlIGFwcGVuZGVkXG4gKiBAcGFyYW0ge29iamVjdH0gaW5mbyAtIFRoZSBzcGVjaWZpYyBjb250YWN0IGluZm9ybWF0aW9uIGRhdGFcbiAqL1xuZnVuY3Rpb24gYXBwZW5kQ29udGFjdEluZm8oY29udGFpbmVyLCBpbmZvKSB7XG4gICAgLy8gTG9naWMgdG8gYXBwZW5kIHZhcmlvdXMgdHlwZXMgb2YgY29udGFjdCBpbmZvcm1hdGlvblxuICAgIGlmIChpbmZvLnBob25lTnJPbmUpIHtcbiAgICAgICAgY29uc3QgcGhvbmVMaW5rT25lID0gY3JlYXRlTGluayhcbiAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgIGluZm8uaHJlZixcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLnBob25lTnJPbmVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcGhvbmVMaW5rVHdvID0gY3JlYXRlTGluayhcbiAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgIGluZm8uaHJlZixcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLnBob25lTnJUd29cbiAgICAgICAgKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTGlua09uZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZUxpbmtUd28pO1xuICAgIH0gZWxzZSBpZiAoaW5mby5lbWFpbCkge1xuICAgICAgICBjb25zdCBlbWFpbExpbmsgPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgYG1haWx0bzoke2luZm8uZW1haWx9YCxcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLmVtYWlsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbExpbmspO1xuICAgIH0gZWxzZSBpZiAoaW5mby5hZGRyZXNzKSB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NMaW5rID0gY3JlYXRlTGluayhcbiAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgIGluZm8uaHJlZixcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLmFkZHJlc3NcbiAgICAgICAgKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NMaW5rKTtcbiAgICB9IGVsc2UgaWYgKGluZm8uZGF5cykge1xuICAgICAgICBjb25zdCBkYXlzU3BhbiA9IGNyZWF0ZVNwYW4oJ2NsYXNzJywgJ2NzLWhvdXJzJywgaW5mby5kYXlzKTtcbiAgICAgICAgY29uc3QgaG91cnNTcGFuID0gY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtaG91cnMnLCBpbmZvLmhvdXJzKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRheXNTcGFuKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzU3Bhbik7XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0aW5nIGhvbWUgY29udGVudHMgZGF0YSBmcm9tIGhvbWVDb250ZW50cyBtb2R1bGVcbmltcG9ydCB7IGhvbWVDb250ZW50cyB9IGZyb20gJy4uL3BhZ2VEYXRhL2hvbWVDb250ZW50cy5qcyc7XG5cbi8vIEltcG9ydGluZyB1dGlsaXR5IGZ1bmN0aW9ucyBmcm9tIHRoZSAnZWxlbWVudFJlbmRlcicgbW9kdWxlLiBUaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWRcbi8vIGZvciBjcmVhdGluZyB2YXJpb3VzIEhUTUwgZWxlbWVudHMgZHluYW1pY2FsbHlcbmltcG9ydCB7XG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlUGljdHVyZSxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGNyZWF0ZUxpc3RJdGVtLFxuICAgIGNyZWF0ZVNwYW4sXG4gICAgY3JlYXRlVG9wcGVyLFxuICAgIGNyZWF0ZVRpdGxlLFxuICAgIGNyZWF0ZVBhcmFncmFwaCxcbiAgICBjbGVhclBhZ2UsXG59IGZyb20gJy4uL3V0aWxpdHkvZWxlbWVudFJlbmRlci5qcyc7XG5cbi8vIEV4dHJhY3RpbmcgdGhlIGZpcnN0IGl0ZW0gZnJvbSBob21lIGNvbnRlbnRzIHRvIHVzZSBhcyBob21lIHBhZ2UgY29udGVudFxuY29uc3QgSE9NRV9QQUdFX0NPTlRFTlRTID0gaG9tZUNvbnRlbnRzWzBdO1xuXG4vLyBPYmplY3QgbWFwcGluZyBjb21tb24gYXR0cmlidXRlIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgc3RyaW5nIHJlcHJlc2VudGF0aW9uc1xuY29uc3QgYXR0cmlidXRlTmFtZSA9IHsgaWQ6ICdpZCcsIGNsYXNzOiAnY2xhc3MnIH07XG5cbi8qKlxuICogTG9hZHMgYW5kIGRpc3BsYXlzIHRoZSBob21lIHBhZ2UgY29udGVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudCAtIFRoZSBwYXJlbnQgZWxlbWVudCB3aGVyZSB0aGUgaG9tZSBwYWdlIHdpbGwgYmUgcmVuZGVyZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2VMb2FkZXIoY29udGVudCkge1xuICAgIGNsZWFyUGFnZShjb250ZW50KTtcblxuICAgIC8vIFNlbGVjdCB0aGUgbWFpbiBjb250ZW50IGFyZWEgaW4gdGhlIERPTVxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gY29udGVudDtcblxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBtYWluIHNlY3Rpb24gYW5kIGNvbnRlbnQgZGl2XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oYXR0cmlidXRlTmFtZS5pZCwgJ2hvbWUtY29udGVudC1jb250YWluZXInKTtcbiAgICBjb25zdCBob21lQ29udGVudCA9IGNyZWF0ZURpdihhdHRyaWJ1dGVOYW1lLmNsYXNzLCAnaG9tZS1jb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG5cbiAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBsZWZ0IGFuZCByaWdodCBjb250ZW50IHNlY3Rpb25zXG4gICAgY29uc3QgY29udGVudExlZnQgPSByZW5kZXJDb250ZW50TGVmdCgpO1xuICAgIGNvbnN0IGNvbnRlbnRSaWdodCA9IHJlbmRlckNvbnRlbnRSaWdodCgpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRMZWZ0KTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50UmlnaHQpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGxlZnQgc2VjdGlvbiBvZiB0aGUgaG9tZSBwYWdlIGNvbnRlbnQgaW5jbHVkaW5nIGltYWdlIGFuZCBzdGF0c1xuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiByZW5kZXJDb250ZW50TGVmdCgpIHtcbiAgICBjb25zdCBjb250ZW50TGVmdCA9IGNyZWF0ZURpdihhdHRyaWJ1dGVOYW1lLmNsYXNzLCAnaG9tZS1jb250ZW50LWxlZnQnKTtcbiAgICBjb25zdCBsZWZ0SW1hZ2UgPSBjcmVhdGVQaWN0dXJlKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3MtcGljdHVyZSBjcy1waWN0dXJlLWxlZnQnLFxuICAgICAgICBIT01FX1BBR0VfQ09OVEVOVFMuaW1hZ2VMZWZ0XG4gICAgKTtcbiAgICBjb25zdCBzdGF0c0xpc3QgPSBjcmVhdGVMaXN0KFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3Mtc3RhdHMnLFxuICAgICAgICBIT01FX1BBR0VfQ09OVEVOVFMuc3RhdHMsXG4gICAgICAgIChpdGVtRGF0YSkgPT5cbiAgICAgICAgICAgIGNyZWF0ZUxpc3RJdGVtKFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICAgICAgICAgJ2NzLXN0YXQnLFxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhLFxuICAgICAgICAgICAgICAgIHJlbmRlckxpc3RJdGVtQ29udGVudFxuICAgICAgICAgICAgKVxuICAgICk7XG5cbiAgICBjb250ZW50TGVmdC5hcHBlbmRDaGlsZChsZWZ0SW1hZ2UpO1xuICAgIGNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKHN0YXRzTGlzdCk7XG5cbiAgICByZXR1cm4gY29udGVudExlZnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBvZiBhIHN0YXRpc3RpY3MgaXRlbSBmb3IgZGlzcGxheSBpbiBhIGxpc3QgaXRlbVxuICogVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGFuZCByZXR1cm5zIGEgZG9jdW1lbnQgZnJhZ21lbnQgY29udGFpbmluZyB0aGUgc3RhdCdzIG51bWJlciBhbmQgZGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtRGF0YSAtIFRoZSBzdGF0aXN0aWNzIGRhdGEgaXRlbSwgZXhwZWN0ZWQgdG8gaGF2ZSAnbnVtJyBhbmQgJ3RleHQnIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fSAtIFRoZSBkb2N1bWVudCBmcmFnbWVudCBjb250YWluaW5nIHRoZSByZW5kZXJlZCBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3RJdGVtQ29udGVudChpdGVtRGF0YSkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgY29uc3QgbnVtYmVyU3BhbiA9IGNyZWF0ZVNwYW4oXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy1udW1iZXInLFxuICAgICAgICBpdGVtRGF0YS5udW1cbiAgICApO1xuICAgIGNvbnN0IHRleHRTcGFuID0gY3JlYXRlU3BhbihhdHRyaWJ1dGVOYW1lLmNsYXNzLCAnY3MtZGVzYycsIGl0ZW1EYXRhLnRleHQpO1xuXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobnVtYmVyU3Bhbik7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHJpZ2h0IHNlY3Rpb24gb2YgdGhlIGhvbWUgcGFnZSBjb250ZW50IGluY2x1ZGluZyB0b3BwZXIsIHRpdGxlLCBwYXJhZ3JhcGgsIGFuZCBpbWFnZVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHJpZ2h0IGNvbnRlbnQgc2VjdGlvblxuICovXG5mdW5jdGlvbiByZW5kZXJDb250ZW50UmlnaHQoKSB7XG4gICAgY29uc3QgY29udGVudFJpZ2h0ID0gY3JlYXRlRGl2KGF0dHJpYnV0ZU5hbWUuY2xhc3MsICdob21lLWNvbnRlbnQtcmlnaHQnKTtcbiAgICBjb25zdCB0b3BwZXIgPSBjcmVhdGVUb3BwZXIoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy10b3BwZXInLFxuICAgICAgICBIT01FX1BBR0VfQ09OVEVOVFMuY29udGVudC50b3BwZXJcbiAgICApO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy10aXRsZScsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5jb250ZW50LnRpdGxlXG4gICAgKTtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBjcmVhdGVQYXJhZ3JhcGgoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy10ZXh0JyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLmNvbnRlbnQucGFyYWdyYXBoXG4gICAgKTtcbiAgICBjb25zdCByaWdodEltYWdlID0gY3JlYXRlUGljdHVyZShcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXBpY3R1cmUgY3MtcGljdHVyZS1yaWdodCcsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5pbWFnZVJpZ2h0XG4gICAgKTtcblxuICAgIGNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZCh0b3BwZXIpO1xuICAgIGNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgY29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHJpZ2h0SW1hZ2UpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRSaWdodDtcbn1cbiIsIi8vIEltcG9ydGluZyBtZW51IGNvbnRlbnRzIGRhdGEgZm9ybSBtZW51Q29udGVudHMgbW9kdWxlXG5pbXBvcnQgeyBtZW51Q29udGVudHMgfSBmcm9tICcuLi9wYWdlRGF0YS9tZW51Q29udGVudC5qcyc7XG5cbi8vIEltcG9ydGluZyB1dGlsaXR5IGZ1bmN0aW9ucyBmcm9tIHRoZSAnZWxlbWVudFJlbmRlcmVyJyBtb2R1bGUuIFRoZXNlIGZ1bmN0aW9ucyBhcmUgdXNlZFxuLy8gZm9yIGNyZWF0aW5nIHZhcmlvdXMgSFRNTCBlbGVtZW50cyBkeW5hbWljYWxseVxuaW1wb3J0IHtcbiAgICBjcmVhdGVTZWN0aW9uLFxuICAgIGNyZWF0ZURpdixcbiAgICBjcmVhdGVQaWN0dXJlLFxuICAgIGNyZWF0ZUxpc3QsXG4gICAgY3JlYXRlTGlzdEl0ZW0sXG4gICAgY3JlYXRlU3BhbixcbiAgICBjcmVhdGVUaXRsZSxcbiAgICBjcmVhdGVQYXJhZ3JhcGgsXG4gICAgY2xlYXJQYWdlLFxufSBmcm9tICcuLi91dGlsaXR5L2VsZW1lbnRSZW5kZXIuanMnO1xuXG4vLyBJbXBvcnQgdXBkYXRlTmF2aWdhdGlvbkFjdGl2ZVN0YXRlIHRvIHVwZGF0ZSB0aGUgYWN0aXZlIHN0YXRlIG9mIG5hdmlnYXRpb24gYnV0dG9uc1xuaW1wb3J0IHsgdXBkYXRlTmF2aWdhdGlvbkFjdGl2ZVN0YXRlIH0gZnJvbSAnLi4vLi4vaW5kZXguanMnO1xuXG4vLyBJbXBvcnQgY29udGFjdHNQYWdlTG9hZGVyIHRvIG5hdmlnYXRlIHRvIGNvbnRhY3RzXG5pbXBvcnQgY29udGFjdHNQYWdlTG9hZGVyIGZyb20gJy4vY29udGFjdHNQYWdlTG9hZGVyLmpzJztcblxuLy8gRXh0cmFjdGluZyB0aGUgZmlyc3QgaXRlbSBmcm9tIG1lbnUgY29udGVudHMgdG8gdXNlIGFzIG1lbnUgcGFnZSBjb250ZW50XG5jb25zdCBNRU5VX1BBR0VfQ09OVEVOVFMgPSBtZW51Q29udGVudHNbMF07XG5cbi8qKlxuICogTWFpbiBmdW5jdGlvbiB0byBsb2FkIGFuZCBkaXNwbGF5IHRoZSBtZW51IHBhZ2UgY29udGVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudCAtIFRoZSBwYXJlbnQgZWxlbWVudCB3aGVyZSB0aGUgbWVudSBwYWdlIHdpbGwgYmUgcmVuZGVyZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkZXIoY29udGVudCkge1xuICAgIGNsZWFyUGFnZShjb250ZW50KTtcblxuICAgIC8vIFNlbGVjdCB0aGUgbWFpbiBjb250ZW50IGFyZWEgb2YgdGhlIERPTVxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gY29udGVudDtcblxuICAgIC8vIENyZWF0ZSBhIHNlY3Rpb24gZm9yIHRoZSBtZW51IGFuZCBhcHBlbmQgaXQgdG8gdGhlIG1haW4gY29udGVudFxuICAgIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCdpZCcsICdtZW51LTEwMDUnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICAgIC8vIFJlbmRlciB0aGUgY29udGFpbmVyIHRoYXQgaG9sZHMgdGhlIG1lbnUncyBjb250ZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNlY3Rpb25cbiAgICBjb25zdCBjb250YWluZXIgPSByZW5kZXJDb250YWluZXIoKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgcHJpbWFyeSBjb250YWluZXIgZm9yIHRoZSBtZW51IHBhZ2VcbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gLSBUaGUgY29udGFpbmVyIGRpdiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJDb250ZW50KCk7XG4gICAgY29uc3QgY2FyZEdyb3VwQ29udGVudCA9IHJlbmRlckNhcmRHcm91cCgpO1xuICAgIGNvbnN0IHJlc2VydmVCdXR0b24gPSBjcmVhdGVSZXNlcnZlQnV0dG9uKCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRHcm91cENvbnRlbnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZlQnV0dG9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBzZWN0aW9uIHdpdGggdGl0bGUgYW5kIHBhcmFncmFwaFxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjb250ZW50IHNlY3Rpb24gZGl2IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRGl2KCdjbGFzcycsICdjcy1jb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXRpdGxlJyxcbiAgICAgICAgTUVOVV9QQUdFX0NPTlRFTlRTLmNvbnRlbnQudGl0bGVcbiAgICApO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXRleHQnLFxuICAgICAgICBNRU5VX1BBR0VfQ09OVEVOVFMuY29udGVudC5wYXJhZ3JhcGhcbiAgICApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgYSBncm91cCBvZiBjYXJkcyByZXByZXNlbnRpbmcgbWVudSBpdGVtc1xuICogQHJldHVybnMge0hUTUxVTGlzdEVsZW1lbnR9IC0gVGhlIGNhcmQgZ3JvdXAgbGlzdCBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNhcmRHcm91cCgpIHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLWNhcmQtZ3JvdXAnLFxuICAgICAgICBNRU5VX1BBR0VfQ09OVEVOVFMuY2FyZEdyb3VwLFxuICAgICAgICAoaXRlbURhdGEpID0+XG4gICAgICAgICAgICBjcmVhdGVMaXN0SXRlbSgnY2xhc3MnLCAnY3MtaXRlbScsIGl0ZW1EYXRhLCByZW5kZXJMaXN0SXRlbUNvbnRlbnQpXG4gICAgKTtcblxuICAgIHJldHVybiBsaXN0O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNvbnRlbnQgZm9yIGFuIGluZGl2aWR1YWwgbGlzdCBpdGVtIGluIHRoZSBjYXJkIGdyb3VwXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBtZW51IGl0ZW1cbiAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fSAtIFRoZSBmcmFnbWVudCBjb250YWluaW5nIHRoZSBsaXN0IGl0ZW0gY29udGVudFxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0SXRlbUNvbnRlbnQoaXRlbURhdGEpIHtcbiAgICAvLyBDcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBpdGVtIGNvbnRlbnRcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBwaWN0dXJlID0gY3JlYXRlUGljdHVyZSgnY2xhc3MnLCAnY3MtcGljdHVyZScsIGl0ZW1EYXRhLnBpY3R1cmUpO1xuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSByZW5kZXJJbmZvQ29udGFpbmVyKGl0ZW1EYXRhKTtcblxuICAgIHBpY3R1cmUuc2V0QXR0cmlidXRlKCdhcmVhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocGljdHVyZSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgaW5mb3JtYXRpb24gY29udGFpbmVyIGZvciBhIG1lbnUgaXRlbVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgbWVudSBpdGVtXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGluZm8gY29udGFpbmVyIGRpdiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckluZm9Db250YWluZXIoaXRlbURhdGEpIHtcbiAgICBjb25zdCBpbmZvID0gY3JlYXRlRGl2KCdjbGFzcycsICdjcy1pbmZvJyk7XG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IHJlbmRlckhlYWRpbmdDb250YWluZXIoaXRlbURhdGEpO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLWl0ZW0tcCcsXG4gICAgICAgIGl0ZW1EYXRhLmluZm8uaXRlbVBhcmFncmFwaFxuICAgICk7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGhlYWRpbmcgY29udGFpbmVyIGZvciBhIG1lbnUgaXRlbVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgbWVudSBpdGVtXG4gKiBAcmV0dXJucyB7SFRNTEhlYWRpbmdFbGVtZW50fSAtIFRoZSBoZWFkaW5nIGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckhlYWRpbmdDb250YWluZXIoaXRlbURhdGEpIHtcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB0ZXh0U3BhbiA9IGNyZWF0ZVNwYW4oJ2NsYXNzJywgJ2NzLW5hbWUnLCBpdGVtRGF0YS5pbmZvLm5hbWUpO1xuICAgIGNvbnN0IG51bWJlclNwYW4gPSBjcmVhdGVTcGFuKCdjbGFzcycsICdjcy1wcmljZScsIGl0ZW1EYXRhLmluZm8ucHJpY2UpO1xuXG4gICAgaGVhZGluZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NzLWgzJyk7XG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXJTcGFuKTtcblxuICAgIHJldHVybiBoZWFkaW5nQ29udGFpbmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBidXR0b24gZm9yIHJlc2VydmluZyBhIHRhYmxlIGFuZCBuYXZpZ2F0aW5nIHRvIGNvbnRhY3RzIHBhZ2VcbiAqIEByZXR1cm5zIHtIVE1MQW5jaG9yRWxlbWVudH0gLSBUaGUgcmVzZXJ2ZSBidXR0b24gZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVSZXNlcnZlQnV0dG9uKCkge1xuICAgIGNvbnN0IHJlc2VydmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQnKTtcblxuICAgIHJlc2VydmVCdXR0b24uaW5uZXJUZXh0ID0gJ1Jlc2VydmUgWW91ciBUYWJsZSc7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgIHJlc2VydmVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjcy1idXR0b24tc29saWQnKTtcblxuICAgIHJlc2VydmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29udGFjdHNQYWdlTG9hZGVyKHRhcmdldCk7XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25BY3RpdmVTdGF0ZSgnY29udGFjdHMnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNlcnZlQnV0dG9uO1xufVxuIiwiLy9cbi8vICAgIFRoZSBEYXJrIE1vZGUgU3lzdGVtXG4vL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXJrTW9kZVRvZ2dsZXIoKSB7XG4gICAgLy8gaGVscGVyIGZ1bmN0aW9ucyB0byB0b2dnbGUgZGFyayBtb2RlXG4gICAgZnVuY3Rpb24gZW5hYmxlRGFya01vZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2FibGVEYXJrTW9kZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lcyBhIG5ldyB1c2VycyBkYXJrIG1vZGUgcHJlZmVyZW5jZXNcbiAgICBmdW5jdGlvbiBkZXRlY3RDb2xvclNjaGVtZSgpIHtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB0aGUgbGlnaHQgdGhlbWVcbiAgICAgICAgbGV0IHRoZW1lID0gJ2xpZ2h0JztcblxuICAgICAgICAvLyBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGEgc2F2ZWQgJ3RoZW1lJyB2YXJpYWJsZS4gaWYgaXQncyB0aGVyZSwgdGhlIHVzZXIgaGFzIHZpc2l0ZWQgYmVmb3JlLCBzbyBhcHBseSB0aGUgbmVjZXNzYXJ5IHRoZW1lIGNob2ljZXNcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgICAgICAgICB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IHRoZXJlLCBjaGVjayB0byBzZWUgaWYgdGhlIHVzZXIgaGFzIGFwcGxpZWQgZGFyayBtb2RlIHByZWZlcmVuY2VzIHRoZW1zZWx2ZXMgaW4gdGhlIGJyb3dzZXJcbiAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhlbWUgPSAnZGFyayc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBwcmVmZXJlbmNlIHNldCwgdGhlIGRlZmF1bHQgb2YgbGlnaHQgd2lsbCBiZSB1c2VkLiBhcHBseSBhY2NvcmRpbmdseVxuICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnID8gZW5hYmxlRGFya01vZGUoKSA6IGRpc2FibGVEYXJrTW9kZSgpO1xuICAgIH1cblxuICAgIC8vIHJ1biBvbiBwYWdlIGxvYWRcbiAgICBkZXRlY3RDb2xvclNjaGVtZSgpO1xuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkYXJrIG1vZGUgYnV0dG9uIHRvZ2dsZVxuICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlLXRvZ2dsZScpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIG9uIGNsaWNrLCBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHRoZSBkYXJrIG1vZGUgdmFsdWUsIHVzZSB0byBhcHBseSB0aGUgb3Bwb3NpdGUgb2Ygd2hhdCdzIHNhdmVkXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2xpZ2h0J1xuICAgICAgICAgICAgICAgID8gZW5hYmxlRGFya01vZGUoKVxuICAgICAgICAgICAgICAgIDogZGlzYWJsZURhcmtNb2RlKCk7XG4gICAgICAgIH0pO1xufVxuIiwiLyoqXG4gKiBDcmVhdGVzIGEgc2VjdGlvbiBIVE1MIGVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgYXR0cmlidXRlIGFuZCB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgc2VjdGlvbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRpdiBIVE1MIGVsZW1lbnQgd2l0aCBhIHNwZWNpZmllZCBhdHRyaWJ1dGUgbmFtZSBhbmQgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjcmVhdGVkIGRpdiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwaWN0dXJlIGVsZW1lbnQgd2l0aCBwcm92aWRlZCBhdHRyaWJ1dGVzIGFuZCBzb3VyY2VzXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlICAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge29iamVjdH0gaW1hZ2VTb3VyY2VzIC0gT2JqZWN0IGNvbnRhaW5pbmcgcGljdHVyZSBzb3VyY2VzIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzXG4gKiBAcmV0dXJucyB7SFRNTFBpY3R1cmVFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHBpY3R1cmUgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGljdHVyZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgaW1hZ2VTb3VyY2VzKSB7XG4gICAgY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcbiAgICBwaWN0dXJlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICBPYmplY3Qua2V5cyhpbWFnZVNvdXJjZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnaW1nJykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGltZywgaW1hZ2VTb3VyY2VzW2tleV0pO1xuICAgICAgICAgICAgcGljdHVyZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHNvdXJjZSwgaW1hZ2VTb3VyY2VzW2tleV0pO1xuICAgICAgICAgICAgcGljdHVyZS5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGljdHVyZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGlzdCAodWwpIGVsZW1lbnQgd2l0aCBwcm92aWRlZCBhdHRyaWJ1dGVzLiBUaGUgbGlzdCBpdGVtcyBhcmUgY3JlYXRlZCB1c2luZyBhIHJlbmRlcmluZyBleHBvcnQgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NsYXNzJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlIChlLmcuLCAnY3Mtc3RhdHMnKVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSB0byBwb3B1bGF0ZSB0aGUgbGlzdCB3aXRoLiBFeHBlY3RzIGFuIG9iamVjdCB3aGVyZSBlYWNoIHByb3BlcnR5IGNhbiBiZSByZW5kZXJlZCBhcyBhIGxpc3QgaXRlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVySXRlbSAtIGV4cG9ydCBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGl0ZW0gb2YgZGF0YSBhbmQgcmV0dXJucyBhIGxpc3QgaXRlbSAobGkpIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtIVE1MVUxpc3RFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHVub3JkZXJlZCBsaXN0IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoXG4gICAgYXR0cmlidXRlTmFtZSxcbiAgICBhdHRyaWJ1dGVWYWx1ZSxcbiAgICBpdGVtRGF0YSxcbiAgICByZW5kZXJJdGVtXG4pIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gaXRlbURhdGEpIHtcbiAgICAgICAgaWYgKGl0ZW1EYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQocmVuZGVySXRlbShpdGVtRGF0YVtrZXldKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGlzdCBpdGVtIChsaSkgZWxlbWVudCB1c2luZyBhIHByb3ZpZGVkIHJlbmRlcmluZyBleHBvcnQgZnVuY3Rpb24gZm9yIHRoZSBpdGVtJ3MgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjbGFzcycpXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NzLXN0YXQnKVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gLSBEYXRhIGl0ZW0gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBsaXN0IGl0ZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlckNvbnRlbnQgLSBleHBvcnQgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgaXRlbSBhbmQgcmV0dXJucyB0aGUgY29udGVudCB0byBiZSBwbGFjZWQgaW5zaWRlIHRoZSBsaXN0IGl0ZW1cbiAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fSAtIFRoZSBjcmVhdGVkIGxpc3QgaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oXG4gICAgYXR0cmlidXRlTmFtZSxcbiAgICBhdHRyaWJ1dGVWYWx1ZSxcbiAgICBpdGVtLFxuICAgIHJlbmRlckNvbnRlbnRcbikge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlckNvbnRlbnQoaXRlbSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNwYW4gZWxlbWVudCB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGNvbnRlbnQgZm9yIHRoZSBzcGFuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgc3BhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcGFuKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCB0ZXh0KSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgc3Bhbi5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHNwYW47XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRvcHBlciBlbGVtZW50IChzcGFuKSB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250ZW50IGZvciB0aGUgdG9wcGVyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgdG9wcGVyIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvcHBlcihhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgdGV4dCkge1xuICAgIGNvbnN0IHRvcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b3BwZXIuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB0b3BwZXIuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHJldHVybiB0b3BwZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRpdGxlIGVsZW1lbnQgKGgyKSB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250ZW50IGZvciB0aGUgdGl0bGVcbiAqIEByZXR1cm5zIHtIVE1MSGVhZGluZ0VsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgdGl0bGUgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIHRleHQpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IChwKSB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250ZW50IGZvciB0aGUgcGFyYWdyYXBoXG4gKiBAcmV0dXJucyB7SFRNTFBhcmFncmFwaEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgcGFyYWdyYXBoIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaChhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgdGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGguc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuLyoqXG4gKiBTZXRzIG11bHRpcGxlIGF0dHJpYnV0ZXMgb24gYSBET00gZWxlbWVudCBiYXNlZCBvbiBhIHByb3ZpZGVkIG9iamVjdFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudCB0byBzZXQgYXR0cmlidXRlcyBvblxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgLSBPYmplY3QgY29udGFpbmluZyBrZXktdmFsdWUgcGFpcnMgZm9yIGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBjb250ZW50IG9mIGEgc3BlY2lmaWVkIHBhcmVudCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSBUaGUgcGFyZW50IGVsZW1lbnQgd2hvc2UgY29udGVudCBpcyB0byBiZSBjbGVhcmVkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgdG8gaW5kaWNhdGUgdGhlIG9wZXJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQYWdlKHBhcmVudCkge1xuICAgIHBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpbmsgKGFuY2hvcikgZWxlbWVudCB3aXRoIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIC0gVGhlIGF0dHJpYnV0ZSBuYW1lIHRvIHNldCBvbiB0aGUgbGluayAoZS5nLiwgJ2hyZWYnKVxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZWYWx1ZSAtIFRoZSB2YWx1ZSBmb3IgdGhlIGhyZWYgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIHRoZSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjbGFzcycpXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBUaGUgdmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgY29udGVudCBmb3IgdGhlIGxpbmtcbiAqIEByZXR1cm5zIHtIVE1MQW5jaG9yRWxlbWVudH0gLSBUaGUgY3JlYXRlZCBhbmNob3IgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayhcbiAgICBocmVmLFxuICAgIGhyZWZWYWx1ZSxcbiAgICBhdHRyaWJ1dGVOYW1lLFxuICAgIGF0dHJpYnV0ZVZhbHVlLFxuICAgIHRleHRcbikge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBsaW5rLnNldEF0dHJpYnV0ZShocmVmLCBocmVmVmFsdWUpO1xuICAgIGxpbmsuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICAgIHJldHVybiBsaW5rO1xufVxuIiwiLy8gU2VsZWN0IERPTSBlbGVtZW50cyBmb3IgbW9iaWxlIG5hdmlnYXRpb25cbmNvbnN0IENTYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IENTbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uJyk7XG5jb25zdCBDU2hhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlJyk7XG5cbi8qKlxuICogU2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIG1vYmlsZSBuYXZpZ2F0aW9uIHRvZ2dsaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZygpIHtcbiAgICBDU2hhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIENTaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgQ1NuYXZiYXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICBDU2JvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnY3Mtb3BlbicpO1xuICAgICAgICAvLyBydW4gdGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBhcmlhLWV4cGFuZGVkIHZhbHVlXG4gICAgICAgIGFyaWFFeHBhbmRlZCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGFuZCB0b2dnbGVzIHRoZSAnYXJpYS1leHBhbmRlZCcgYXR0cmlidXRlIG9uIHRoZSBuYXZpZ2F0aW9uIGxpc3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhcmlhRXhwYW5kZWQoKSB7XG4gICAgICAgIGNvbnN0IGNzVUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtZXhwYW5kZWQnKTtcbiAgICAgICAgY29uc3QgY3NFeHBhbmRlZCA9IGNzVUwuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHRoZSAnYXJpYS1leHBhbmRlZCcgYXR0cmlidXRlIGJhc2VkIG9uIGl0cyBjdXJyZW50IHN0YXRlLlxuICAgICAgICBpZiAoY3NFeHBhbmRlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCB1cCBjbGljayBldmVudCBsaXN0ZW5lcnMgZm9yIGRyb3Bkb3duIGl0ZW1zIGluIHRoZSBtb2JpbGUgbmF2aWdhdGlvblxuICAgIGNvbnN0IGRyb3BEb3ducyA9IEFycmF5LmZyb20oXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjcy1uYXZpZ2F0aW9uIC5jcy1kcm9wZG93bicpXG4gICAgKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZHJvcERvd25zKSB7XG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICB9O1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9