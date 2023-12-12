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
        background: url("https://csimg.nyc3.cdn.digitaloceanspaces.com/Food-Menu/static-pattern.png");
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/*-- -------------------------- -->\n  <---     Mobile Navigation      -->\n  <--- -------------------------- -*/\n/* Mobile - 1023px */\n@media only screen and (max-width: 63.9375rem) {\n    body.cs-open {\n        overflow: hidden;\n    }\n\n    #main-content {\n        padding-top: 18%;\n    }\n\n    #cs-navigation {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 0.75rem 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        position: fixed;\n        z-index: 10000;\n    }\n\n    #cs-navigation:before {\n        content: \"\";\n        width: 100%;\n        height: 0vh;\n        background: rgba(0, 0, 0, 0.6);\n        opacity: 0;\n        display: block;\n        position: absolute;\n        top: 100%;\n        right: 0;\n        z-index: -1100;\n        transition: height 0.5s, opacity 0.5s;\n        -webkit-backdrop-filter: blur(10px);\n        backdrop-filter: blur(10px);\n    }\n\n    #cs-navigation.cs-active:before {\n        height: 150vh;\n        opacity: 1;\n    }\n\n    #cs-navigation.cs-active .cs-ul-wrapper {\n        opacity: 1;\n        transform: scaleY(1);\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation.cs-active .cs-li {\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n\n    #cs-navigation .page-title {\n        width: 50%;\n        max-width: 14rem;\n        height: 100%;\n        margin: 0 auto 0 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 10;\n    }\n\n\n    #cs-navigation .cs-toggle {\n        /* 44px - 48px */\n        width: clamp(2.75rem, 6vw, 3rem);\n        height: clamp(2.75rem, 6vw, 3rem);\n        margin: 0 0 0 auto;\n        background-color: transparent;\n        border: none;\n        border-radius: 0.25rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-navigation .cs-active .cs-line1 {\n        top: 50%;\n        transform: translate(-50%, -50%) rotate(225deg);\n    }\n\n    #cs-navigation .cs-active .cs-line2 {\n        top: 50%;\n        transform: translate(-50%, -50%) translateY(0) rotate(-225deg);\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-active .cs-line3 {\n        opacity: 0;\n        bottom: 100%;\n    }\n\n    #cs-navigation .cs-box {\n        /* 24px - 28px */\n        width: clamp(1.5rem, 2vw, 1.75rem);\n        /* 14px - 16px */\n        height: clamp(0.875rem, 1.5vw, 1rem);\n        position: relative;\n    }\n\n    #cs-navigation .cs-line {\n        width: 100%;\n        height: 2px;\n        background-color: #1a1a1a;\n        border-radius: 2px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    #cs-navigation .cs-line1 {\n        top: 0;\n        transition: transform 0.5s, top 0.3s, left 0.3s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-line2 {\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        transition: top 0.3s, left 0.3s, transform 0.5s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n    }\n\n    #cs-navigation .cs-line3 {\n        bottom: 0;\n        transition: bottom 0.3s, opacity 0.3s;\n    }\n\n    #cs-navigation .cs-ul-wrapper {\n        width: 100%;\n        height: auto;\n        padding-bottom: 2.4em;\n        background-color: #fff;\n        box-shadow: inset rgba(0, 0, 0, 0.2) 0px 8px 24px;\n        opacity: 0;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        z-index: -1;\n        overflow: hidden;\n        transform: scaleY(0);\n        transition: transform 0.4s, opacity 0.3s;\n        transform-origin: top;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        height: auto;\n        max-height: 65vh;\n        margin: 0;\n        padding: 3rem 0 0 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1.25rem;\n        overflow: scroll;\n    }\n\n    #cs-navigation .cs-li {\n        text-align: center;\n        list-style: none;\n        width: 100%;\n        margin-right: 0;\n        opacity: 0;\n        /* transition from these values */\n        transform: translateY(-4.375rem);\n        transition: transform 0.6s, opacity 0.9s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(1) {\n        transition-delay: 0.05s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(2) {\n        transition-delay: 0.1s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(3) {\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(4) {\n        transition-delay: 0.2s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(5) {\n        transition-delay: 0.25s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(6) {\n        transition-delay: 0.3s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(7) {\n        transition-delay: 0.35s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(8) {\n        transition-delay: 0.4s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(9) {\n        transition-delay: 0.45s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(10) {\n        transition-delay: 0.5s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(11) {\n        transition-delay: 0.55s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(12) {\n        transition-delay: 0.6s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(13) {\n        transition-delay: 0.65s;\n    }\n\n    #cs-navigation .cs-li-link {\n        /* 16px - 24px */\n        font-size: clamp(1.2rem, 2.5vw, 1.7rem);\n        line-height: 1.2em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--headerColor);\n        display: inline-block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 100%;\n        height: 1px;\n        background: currentColor;\n        opacity: 1;\n        display: none;\n        position: absolute;\n        bottom: -0.125rem;\n        left: 0;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        display: block;\n    }\n\n}\n\n/* Dark Mode */\n@media only screen and (max-width: 63.9375rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-line {\n        background-color: #fff;\n    }\n\n    body.dark-mode #cs-navigation .cs-ul-wrapper {\n        background-color: var(--medium);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n}\n\n/*-- -------------------------- -->\n  <---     Desktop Navigation     -->\n  <--- -------------------------- -*/\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #cs-navigation {\n        width: 100%;\n        /* prevents padding and border from affecting height and width */\n        box-sizing: border-box;\n        padding: 0 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        /* position: fixed;\n        z-index: 10000; */\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 1.5rem;\n    }\n\n    #cs-navigation .cs-toggle {\n        display: none;\n    }\n\n    #cs-navigation .page-title {\n        width: 30%;\n        max-width: 30rem;\n        height: 7rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 100;\n    }\n\n    #cs-navigation .page-title h1 {\n        font-size: 3em;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        /* 20px - 36px */\n        gap: clamp(1.25rem, 2.6vw, 2.25rem);\n    }\n\n    #cs-navigation .cs-li {\n        list-style: none;\n        padding: 2rem 0;\n        /* prevent flexbox from squishing it */\n        flex: none;\n    }\n\n    #cs-navigation .cs-li-link {\n        font-size: clamp(1.2rem, 1vw, 1.2rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--bodyTextColor);\n        display: block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 0%;\n        height: 2px;\n        background: var(--primary);\n        opacity: 1;\n        display: block;\n        position: absolute;\n        bottom: 0rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 64rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it turn white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link:before {\n        background-color: var(--primaryLight);\n    }\n}\n\n/*-- -------------------------- -->\n<---   Side By Side Reverse     -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #home-content-container {\n        padding: var(--sectionPadding);\n    }\n\n    #home-content-container .home-content {\n        width: 100%;\n        /* changes to 1280px at tablet */\n        max-width: 36.5rem;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 6vw, 4rem);\n    }\n\n    #home-content-container .home-content-right {\n        /* set text align to left if content needs to be left aligned */\n        text-align: left;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: flex-start;\n    }\n\n    #home-content-container .cs-text {\n        margin-bottom: 1rem;\n    }\n\n    #home-content-container .cs-text:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    #home-content-container .cs-picture {\n        width: 100%;\n        display: block;\n        position: relative;\n        z-index: 1;\n    }\n\n    #home-content-container .cs-picture img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    #home-content-container .cs-picture-right {\n        height: 95vw;\n        max-height: 25rem;\n    }\n\n    #home-content-container .cs-picture-left {\n        height: 111vw;\n        max-height: 31.25rem;\n    }\n\n    #home-content-container .home-content-left {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* 28px - 40px */\n        gap: clamp(1.75rem, 3vw, 2.5rem);\n    }\n\n    #home-content-container .cs-stats {\n        width: 100%;\n        max-width: 39.375rem;\n        padding: 0;\n        margin: 0;\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        row-gap: 1.5rem;\n        column-gap: 0.75rem;\n    }\n\n    #home-content-container .cs-stat {\n        list-style: none;\n        margin: 0;\n        padding: 0 0 1.5rem 0;\n        border-bottom: 1px solid var(--primary);\n        /* making flex so we can align a heading with 1 line to the bottom */\n        display: flex;\n        grid-column: span 4;\n        flex-direction: column;\n        align-self: stretch;\n        align-content: space-between;\n    }\n\n    #home-content-container .cs-number {\n        /* 31px - 39px */\n        font-size: clamp(1.9375rem, 3vw, 2.4375rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        color: var(--headerColor);\n        display: block;\n        margin: 0 0 0.25rem 0;\n    }\n\n    #home-content-container .cs-desc {\n        font-size: 1rem;\n        line-height: 1.5em;\n        font-weight: 400;\n        text-align: left;\n        /* auto margin top will push text to bottom if there's only one line */\n        margin: 0;\n        color: var(--bodyTextColor);\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #home-content-container .home-content {\n        max-width: 80rem;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: stretch;\n    }\n\n    #home-content-container .home-content-right {\n        /* sends it to the right in the 2nd position */\n        order: 2;\n    }\n\n    #home-content-container .cs-picture-right {\n        /* 340px - 460px */\n        min-height: clamp(21.25rem, 35vw, 28.75rem);\n        height: 100%;\n        max-height: 100%;\n    }\n\n    #home-content-container .cs-picture-left {\n        /* 530px - 660px */\n        min-height: clamp(33.125rem, 45vw, 41.25rem);\n        height: 100%;\n        max-height: 100%;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n\n    body.dark-mode #home-content-container .cs-title,\n    body.dark-mode #home-content-container .cs-text,\n    body.dark-mode #home-content-container .cs-number,\n    body.dark-mode #home-content-container .cs-desc {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #home-content-container .cs-text,\n    body.dark-mode #home-content-container .cs-desc {\n        opacity: .8;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Footer           -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #cs-footer-108 {\n        /* 40px - 100px top and bottom */\n        padding: clamp(1rem, 4.9vw, 2.25rem) 1rem;\n        /* 40px - 50px */\n        padding-bottom: clamp(1.5rem, 6.9vw, 2.125rem);\n    }\n\n    #cs-footer-108 .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n    }\n\n    #cs-footer-108 .cs-ul {\n        /* 40px - 60px*/\n        padding: 0 0 clamp(2rem, 4.7vw, .75rem);\n        margin: auto;\n        border-bottom: 1px solid #eff0f6;\n    }\n\n    #cs-footer-108 .cs-li {\n        list-style: none;\n        text-align: center;\n        margin-bottom: 1.25rem;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin-bottom: 0;\n    }\n\n    #cs-footer-108 .cs-link {\n        /* 16px - 20px */\n        font-size: clamp(0.8rem, 0.15s, 1rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        font-weight: 700;\n        color: var(--bodyTextColor);\n        position: relative;\n    }\n\n    #cs-footer-108 .cs-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-footer-108 .cs-link:before {\n        /* top right box */\n        content: \"\";\n        width: 0%;\n        height: 0.1875rem;\n        background: var(--bodyTextColor);\n        opacity: 1;\n        position: absolute;\n        display: block;\n        bottom: -0.125rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n\n    #cs-footer-108 .cs-copyright {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 1.6vw, 1rem);\n        text-align: center;\n        color: #a0a3bd;\n        display: block;\n        /* 20px - 28px */\n        margin: clamp(1.25rem, 2.8vw, 1.75rem) auto 0;\n    }\n}\n\n/* Tablet - 600px */\n@media only screen and (min-width: 37.5rem) {\n    #cs-footer-108 .cs-ul {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-footer-108 .cs-li {\n        /* 44px - 88px */\n        margin: 0 clamp(2.75rem, 6.2vw, 5.5rem) 0 0;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin: 0;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #cs-footer-108 {\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link {\n        color: #fff;\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link:before {\n        background: #fff;\n    }\n}\n\n/*-- -------------------------- -->\n<---            Menu            -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #menu-1005 {\n        padding: var(--sectionPadding);\n        background-color: transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    #menu-1005:before {\n        /* static tiled pattern */\n        content: \"\";\n        height: 100%;\n        width: 100%;\n        opacity: 0.08;\n        background: url(\"https://csimg.nyc3.cdn.digitaloceanspaces.com/Food-Menu/static-pattern.png\");\n        background-size: auto;\n        background-position: center;\n        background-repeat: repeat;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n    }\n\n    #menu-1005 .cs-container {\n        width: 100%;\n        max-width: 80em;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 7vw, 4rem);\n    }\n\n    #menu-1005 .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: center;\n    }\n\n    #menu-1005 .cs-wrapper {\n        /* 120px - 181px */\n        width: clamp(7.5rem, 9vw, 11.3125rem);\n        margin-bottom: 0.75rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n    }\n\n    #menu-1005 .cs-wrapper:before {\n        /* left line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-right: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        right: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper:after {\n        /* right line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-left: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper img {\n        width: 100%;\n    }\n\n\n    #menu-1005 .cs-text {\n        opacity: 0.8;\n    }\n\n    #menu-1005 .cs-button-solid {\n        font-size: 1rem;\n        /* 46px - 56px */\n        line-height: clamp(2.875em, 5.5vw, 3.5em);\n        text-decoration: none;\n        font-weight: 700;\n        text-align: center;\n        margin: auto;\n        color: #fff;\n        min-width: 9.375rem;\n        padding: 0 2rem;\n        background-color: var(--primary);\n        display: inline-block;\n        position: relative;\n        z-index: 1;\n        /* prevents padding from adding to the width */\n        box-sizing: border-box;\n        transition: color 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:before {\n        content: \"\";\n        position: absolute;\n        height: 100%;\n        width: 0%;\n        background: #000;\n        opacity: 1;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        transition: width 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:hover {\n        color: #fff;\n    }\n\n    #menu-1005 .cs-button-solid:hover:before {\n        width: 100%;\n    }\n\n    #menu-1005 .cs-card-group {\n        margin: 0;\n        padding: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        column-gap: 1.25rem;\n        /* 32px - 60px */\n        row-gap: clamp(2rem, 6vw, 3.75rem);\n    }\n\n    #menu-1005 .cs-item {\n        list-style: none;\n        width: 100%;\n        max-width: 36.25rem;\n        margin: 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        /* 16px - 36px */\n        gap: clamp(1rem, 3vw, 2.25rem);\n    }\n\n    #menu-1005 .cs-picture {\n        /* 76px - 160px */\n        width: clamp(4.75rem, 14vw, 10rem);\n        height: clamp(4.75rem, 14vw, 10rem);\n        overflow: hidden;\n        /* 4px - 8px */\n        border: clamp(0.25rem, 1vw, 0.5rem) solid rgba(255, 255, 255, 0.1);\n        display: block;\n        flex: none;\n        position: relative;\n    }\n\n    #menu-1005 .cs-picture img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        /* makes it act like a background image */\n        object-fit: cover;\n    }\n\n    #menu-1005 .cs-h3 {\n        /* 16px - 24px */\n        font-size: clamp(1rem, 2vw, 1.5rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        /* 8px - 16px */\n        margin: 0 0 clamp(0.5rem, 1.5vw, 1rem);\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        position: relative;\n        gap: 0.75rem;\n    }\n\n    #menu-1005 .cs-h3:after {\n        content: \"\";\n        width: 50%;\n        height: 1px;\n        background: #b4b2c7;\n        opacity: 1;\n        position: relative;\n        display: block;\n        order: 1;\n    }\n\n    #menu-1005 .cs-name {\n        max-width: 13.75rem;\n        flex: none;\n    }\n\n    #menu-1005 .cs-price {\n        /* 16px - 25px */\n        font-size: clamp(1rem, 2vw, 1.5625rem);\n        /* 28px - 46px */\n        line-height: clamp(1.75rem, 4vw, 2.875rem);\n        font-weight: 700;\n        /* 8px - 12px */\n        padding: 0 clamp(0.5rem, 1vw, 0.75rem);\n        color: var(--primary);\n        background-color: #fff;\n        border-radius: 5rem;\n        border: 1px solid #b4b2c7;\n        display: flex;\n        align-items: center;\n        order: 3;\n    }\n\n    #menu-1005 .cs-item-p {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 2vw, 1rem);\n        line-height: 1.5em;\n        text-align: left;\n        margin: 0;\n        opacity: 0.8;\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #menu-1005 .cs-card-group {\n        flex-direction: row;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n    }\n\n    #menu-1005 .cs-item {\n        width: 48.5%;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Contacts         -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #contact-strip-324 {\n        padding: var(--sectionPadding);\n        background-color: #f7f7f7;\n        height: 100%;\n\n    }\n\n    #contact-strip-324 .cs-container {\n        width: 100%;\n        max-width: 80em;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 7vw, 4rem);\n    }\n\n    #contact-strip-324 .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: center;\n    }\n\n    #contact-strip-324 .cs-stat-group {\n        width: 100%;\n        /* changes to 1280px at desktop */\n        max-width: 37.5rem;\n        margin: auto;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 2.5rem;\n    }\n\n    #contact-strip-324 .cs-item {\n        list-style: none;\n        width: 18.125rem;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n    }\n\n    #contact-strip-324 .cs-item:hover .cs-picture {\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        transform: scale(1.05);\n    }\n\n    #contact-strip-324 .cs-picture {\n        width: 5rem;\n        height: 5rem;\n        /* 12px - 20px */\n        margin-right: clamp(0.75rem, 3vw, 1.25rem);\n        border-radius: 50%;\n        border: 1px solid #bababa;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        /* prevents flexbox from squishing it */\n        flex: none;\n        transition:\n            background-color 0.3s,\n            box-shadow 0.3s,\n            transform 0.6s;\n    }\n\n    #contact-strip-324 .cs-flex-group {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n        flex-direction: column;\n    }\n\n    #contact-strip-324 .cs-icon {\n        width: 1.75rem;\n        height: auto;\n    }\n\n    #contact-strip-324 .cs-header {\n        font-size: 1.25rem;\n        color: var(--headerColor);\n        font-weight: 900;\n        line-height: 1.2em;\n        margin: 0;\n        margin-bottom: 0.75rem;\n        display: block;\n    }\n\n    #contact-strip-324 .cs-link,\n    #contact-strip-324 .cs-hours {\n        font-size: var(--bodyFontSize);\n        line-height: 1.5em;\n        text-decoration: none;\n        color: #767676;\n        display: block;\n    }\n\n    #contact-strip-324 .cs-link:hover {\n        text-decoration: underline;\n    }\n}\n\n/* Tablet - 650px */\n@media only screen and (min-width: 40.625rem) {\n    #contact-strip-324 .cs-stat-group {\n        flex-direction: row;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n        row-gap: 2rem;\n    }\n}\n\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #contact-strip-324 .cs-stat-group {\n        max-width: 80rem;\n        flex-wrap: nowrap;\n        justify-content: space-evenly;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #contact-strip-324 {\n        background-color: transparent;\n    }\n\n    body.dark-mode #contact-strip-324 .cs-header,\n    body.dark-mode #contact-strip-324 .cs-link,\n    body.dark-mode #contact-strip-324 .cs-hours {\n        color: var(--bodyTextColorWhite);\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_dark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/dark.css */ "./src/styles/dark.css");
/* harmony import */ var _modules_utility_darkMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/utility/darkMode.js */ "./src/modules/utility/darkMode.js");
/* harmony import */ var _modules_utility_mobileNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/utility/mobileNavigation.js */ "./src/modules/utility/mobileNavigation.js");
/* harmony import */ var _modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pageLoaders/homePageLoader.js */ "./src/modules/pageLoaders/homePageLoader.js");
/* harmony import */ var _modules_pageLoaders_menuPageLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pageLoaders/menuPageLoader.js */ "./src/modules/pageLoaders/menuPageLoader.js");
/* harmony import */ var _modules_pageLoaders_contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/pageLoaders/contactsPageLoader.js */ "./src/modules/pageLoaders/contactsPageLoader.js");
/* harmony import */ var _modules_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/utility/elementRender.js */ "./src/modules/utility/elementRender.js");
// Importing global, main, and dark mode CSS stylesheets




// Importing functionality modules



// Importing page loader functions




// Importing utility function for changing button appearance


// Activate dark mode toggle functionality
(0,_modules_utility_darkMode_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

// Set up mobile navigation toggle functionality
(0,_modules_utility_mobileNavigation_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

// Global variables setup
let pageNames = ['home', 'menu', 'contacts'];
let currentTab = pageNames[0];
let content = document.querySelector('#main-content');

// Load the initial home page content
(0,_modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(content);

/**
 * Set up click event listeners for tab navigation in the header.
 * This allows switching between different pages (home, menu, contacts) and
 * ensures the appropriate content is loaded and displayed.
 */
pageNames.forEach((pageName) => {
    const button = document.getElementById(pageName);
    button.addEventListener('click', () => {
        currentTab = (0,_modules_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_8__.changeButtonCover)(currentTab, button.id);

        if (button.id == 'home') {
            (0,_modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(content);
        } else if (button.id == 'menu') {
            (0,_modules_pageLoaders_menuPageLoader_js__WEBPACK_IMPORTED_MODULE_6__["default"])(content);
        } else {
            (0,_modules_pageLoaders_contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_7__["default"])(content);

            console.log('contacts');
        }
    });
});


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
/* harmony import */ var _assets_img_homePageLeft_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/homePageLeft.png */ "./src/assets/img/homePageLeft.png");
/* harmony import */ var _assets_img_homePageRight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/homePageRight.png */ "./src/assets/img/homePageRight.png");



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
                srcset: _assets_img_homePageLeft_png__WEBPACK_IMPORTED_MODULE_0__,
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: _assets_img_homePageLeft_png__WEBPACK_IMPORTED_MODULE_0__,
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: _assets_img_homePageLeft_png__WEBPACK_IMPORTED_MODULE_0__,
                alt: 'people',
                width: '608',
                height: '406',
            },
        },
        imageRight: {
            mobileImage: {
                media: '(max-width: 600px)',
                srcset: _assets_img_homePageRight_png__WEBPACK_IMPORTED_MODULE_1__,
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: _assets_img_homePageRight_png__WEBPACK_IMPORTED_MODULE_1__,
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: _assets_img_homePageRight_png__WEBPACK_IMPORTED_MODULE_1__,
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
/* harmony import */ var _assets_img_menu_bisonBurger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/menu/bisonBurger.png */ "./src/assets/img/menu/bisonBurger.png");
/* harmony import */ var _assets_img_menu_chickenSaladMango_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/menu/chickenSaladMango.png */ "./src/assets/img/menu/chickenSaladMango.png");
/* harmony import */ var _assets_img_menu_lasagna_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/menu/lasagna.png */ "./src/assets/img/menu/lasagna.png");
/* harmony import */ var _assets_img_menu_meatLoversPizza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/menu/meatLoversPizza.png */ "./src/assets/img/menu/meatLoversPizza.png");
/* harmony import */ var _assets_img_menu_pricklyPearPorkSauce_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/menu/pricklyPearPorkSauce.png */ "./src/assets/img/menu/pricklyPearPorkSauce.png");
/* harmony import */ var _assets_img_menu_purpleCornTostada_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/img/menu/purpleCornTostada.png */ "./src/assets/img/menu/purpleCornTostada.png");







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
                        srcset: _assets_img_menu_lasagna_png__WEBPACK_IMPORTED_MODULE_2__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_lasagna_png__WEBPACK_IMPORTED_MODULE_2__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_lasagna_png__WEBPACK_IMPORTED_MODULE_2__,
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
                        srcset: _assets_img_menu_bisonBurger_png__WEBPACK_IMPORTED_MODULE_0__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_bisonBurger_png__WEBPACK_IMPORTED_MODULE_0__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_bisonBurger_png__WEBPACK_IMPORTED_MODULE_0__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemThree: {
                info: {
                    name: 'Curried Chicken Salad with Mango',
                    price: '56€',
                    itemParagraph: `A refreshing mix of tender curried chicken and sweet
                    mango slices, tossed with vibrant greens for a light yet
                    flavorful salad.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_chickenSaladMango_png__WEBPACK_IMPORTED_MODULE_1__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_chickenSaladMango_png__WEBPACK_IMPORTED_MODULE_1__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_chickenSaladMango_png__WEBPACK_IMPORTED_MODULE_1__,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemFour: {
                info: {
                    name: `Meat Lovers' Sheet Pan Pizza`,
                    price: '56€',
                    itemParagraph: `Loaded with an assortment of meats like pepperoni,
                    sausage, and bacon, this pizza offers a carnivore's
                    delight with every crispy, cheesy bite.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: _assets_img_menu_meatLoversPizza_png__WEBPACK_IMPORTED_MODULE_3__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_meatLoversPizza_png__WEBPACK_IMPORTED_MODULE_3__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_meatLoversPizza_png__WEBPACK_IMPORTED_MODULE_3__,
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
                        srcset: _assets_img_menu_purpleCornTostada_png__WEBPACK_IMPORTED_MODULE_5__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_purpleCornTostada_png__WEBPACK_IMPORTED_MODULE_5__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_purpleCornTostada_png__WEBPACK_IMPORTED_MODULE_5__,
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
                        srcset: _assets_img_menu_pricklyPearPorkSauce_png__WEBPACK_IMPORTED_MODULE_4__,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: _assets_img_menu_pricklyPearPorkSauce_png__WEBPACK_IMPORTED_MODULE_4__,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: _assets_img_menu_pricklyPearPorkSauce_png__WEBPACK_IMPORTED_MODULE_4__,
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
 * Loads and displays the contacts page content.
 * @param {HTMLElement} content - The parent element where the contacts page will be rendered.
 */
function contactsPageLoader(content) {
    (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)(content); // Clear existing content.

    // Create the main section for contacts and append it to the content area.
    const section = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createSection)('id', 'contact-strip-324');
    content.appendChild(section);

    // Render and append the container for the contacts content.
    const container = renderContainer();
    section.appendChild(container);

    // Create and append a list of contact cards to the container using data from contactsContents.
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
 * Renders the primary container for the contacts page.
 * @returns {HTMLDivElement} - The container div element.
 */
function renderContainer() {
    const container = (0,_utility_elementRender_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('class', 'cs-container');

    // Render and append the content section with title and paragraph to the container.
    const content = renderContent();
    container.appendChild(content);

    return container;
}

/**
 * Renders the content section with title, topper, and paragraph.
 * @returns {HTMLDivElement} - The content section div element.
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
 * Renders an individual contact item as a list item.
 * @param {object} itemData - Data for a single contact item.
 * @returns {HTMLLIElement} - The list item element with contact information.
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
 * Renders the content for a contact list item.
 * @param {object} itemData - Data for a single contact item.
 * @returns {DocumentFragment} - The fragment containing contact item content.
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
 * Appends specific contact details to a container based on the item type (phone, email, etc.).
 * @param {HTMLDivElement} container - The container to which additional info will be appended.
 * @param {object} info - The specific contact information data.
 */
function appendContactInfo(container, info) {
    // Logic to append various types of contact information.
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
// Importing menu contents data form menuContents module


// Importing utility functions from the 'elementRenderer' module. These functions are used
// for creating various HTML elements dynamically


// Extracting the first item from menu contents to use as menu page content
const MENU_PAGE_CONTENTS = _pageData_menuContent_js__WEBPACK_IMPORTED_MODULE_0__.menuContents[0];

/**
 * Main function to load and display the menu page content
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
 * Creates a button for reserving a table
 * @returns {HTMLAnchorElement} - The reserve button element
 */
function createReserveButton() {
    const reserveButton = document.createElement('a');

    reserveButton.innerText = 'Reserve Your Table';
    reserveButton.setAttribute('href', '');
    reserveButton.setAttribute('class', 'cs-button-solid');

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
/* harmony export */   changeButtonCover: () => (/* binding */ changeButtonCover),
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
 * Changes the active state between two button elements
 * @param {string} oldTab - The ID of the previously active tab/button
 * @param {string} newTab - The ID of the tab/button to be activated
 * @returns {string} - Returns the ID of the newly activated tab/button
 */
function changeButtonCover(oldTab, newTab) {
    let show = document.getElementById(`${oldTab}`);
    let hide = document.getElementById(`${newTab}`);

    show.classList.remove('cs-active');
    hide.classList.add('cs-active');

    return newTab;
}

/**
 * Creates a link (anchor) element with specified attributes and text content.
 * @param {string} attributeName - The attribute name to set on the link (e.g., 'href').
 * @param {string} attributeValue - The value for the attribute.
 * @param {string} className - The class attribute for the link.
 * @param {string} text - The text content for the link.
 * @returns {HTMLAnchorElement} - The created anchor element.
 */
function createLink(href, hrefValue, attributeName, attributeValue, text) {
    const link = document.createElement('a');
    link.setAttribute(href, hrefValue);
    link.innerText = text;
    link.setAttribute(attributeName, attributeValue);
    link.setAttribute('target', '_blank')
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
var CSbody = document.querySelector('body');
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

/***/ "./src/assets/img/homePageLeft.png":
/*!*****************************************!*\
  !*** ./src/assets/img/homePageLeft.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74d0a0d0d5ba4c16fab5.png";

/***/ }),

/***/ "./src/assets/img/homePageRight.png":
/*!******************************************!*\
  !*** ./src/assets/img/homePageRight.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7aae6a15ce7d1a7a24e7.png";

/***/ }),

/***/ "./src/assets/img/menu/bisonBurger.png":
/*!*********************************************!*\
  !*** ./src/assets/img/menu/bisonBurger.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "011a6a691872d268eccc.png";

/***/ }),

/***/ "./src/assets/img/menu/chickenSaladMango.png":
/*!***************************************************!*\
  !*** ./src/assets/img/menu/chickenSaladMango.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4346084ebcebb8c4917.png";

/***/ }),

/***/ "./src/assets/img/menu/lasagna.png":
/*!*****************************************!*\
  !*** ./src/assets/img/menu/lasagna.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7417ae8cfd1c6d06e004.png";

/***/ }),

/***/ "./src/assets/img/menu/meatLoversPizza.png":
/*!*************************************************!*\
  !*** ./src/assets/img/menu/meatLoversPizza.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20fa9af26692e16da47b.png";

/***/ }),

/***/ "./src/assets/img/menu/pricklyPearPorkSauce.png":
/*!******************************************************!*\
  !*** ./src/assets/img/menu/pricklyPearPorkSauce.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d0615d98829c157add9.png";

/***/ }),

/***/ "./src/assets/img/menu/purpleCornTostada.png":
/*!***************************************************!*\
  !*** ./src/assets/img/menu/purpleCornTostada.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ea097f917d537a08ade.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlB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VyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZGFyay5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9kYXJrLmNzcz8yMTJjIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzP2YwZDgiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VEYXRhL2NvbnRhY3RzQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VEYXRhL2hvbWVDb250ZW50cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VEYXRhL21lbnVDb250ZW50LmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWRlcnMvY29udGFjdHNQYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWRlcnMvaG9tZVBhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZGVycy9tZW51UGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvZGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy91dGlsaXR5L2VsZW1lbnRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy91dGlsaXR5L21vYmlsZU5hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgICAgQ29yZSBEYXJrIFN0eWxlcyAgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIE1vYmlsZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgOnJvb3Qge1xuICAgICAgICAtLWRhcms6ICMwODIwMzI7XG4gICAgICAgIC0tbWVkaXVtOiAjMmMzOTRiO1xuICAgICAgICAtLWFjY2VudDogIzMzNDc1NjtcbiAgICAgICAgLS1ib2R5VGV4dENvbG9yV2hpdGU6ICNmYWZiZmM7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSBwLFxuICAgIGJvZHkuZGFyay1tb2RlIGxpLFxuICAgIGJvZHkuZGFyay1tb2RlIGgxLFxuICAgIGJvZHkuZGFyay1tb2RlIGgyLFxuICAgIGJvZHkuZGFyay1tb2RlIGgzLFxuICAgIGJvZHkuZGFyay1tb2RlIGg0LFxuICAgIGJvZHkuZGFyay1tb2RlIGg1LFxuICAgIGJvZHkuZGFyay1tb2RlIGg2LFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10aXRsZSxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGV4dCxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtbGksXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWgzLFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1pdGVtLXAge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAubGlnaHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIC5kYXJrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZGFyayB7XG4gICAgICAgIC8qIGNsYXNzIHVzZWQgdG8gaGlkZSBlbGVtZW50cyB0aGF0IG9ubHkgbmVlZCB0byBiZSBzZWVuIHdoZW4gZGFyayBtb2RlIGlzIGVuYWJsZWQgKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG4gIDwtLS0gICAgICBEYXJrIE1vZGUgVG9nZ2xlICAgICAgLS0+XG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBNb2JpbGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1zdW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3MtbW9vbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHJpZ2h0OiAzLjc1cmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIGltZyxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBzdmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMS41NjI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDEuNTYyNXJlbTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcyxcbiAgICAgICAgICAgIGZpbGwgMC4zcztcbiAgICAgICAgZmlsbDogIzAwMDtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzO1xuICAgIH1cbn1cblxuLyogRGVza3RvcCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjg3NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZTpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAubW9vbiB7XG4gICAgICAgIC8qIGNoYW5nZSB0byB3aGF0ZXZlciB5b3UgbmVlZCAqL1xuICAgICAgICBmaWxsOiAjZmZmO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGFyay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O2tDQUVrQztBQUNsQyxXQUFXO0FBQ1g7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTs7Ozs7Ozs7Ozs7OztRQWFJLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxvRkFBb0Y7UUFDcEYsYUFBYTtJQUNqQjtBQUNKOztBQUVBOztvQ0FFb0M7QUFDcEMsV0FBVztBQUNYO0lBQ0k7UUFDSSxnQ0FBZ0M7UUFDaEMsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUNBQWlDO1FBQ2pDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLDJCQUEyQjtRQUMzQixjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixVQUFVO0lBQ2Q7O0lBRUE7O1FBRUksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWOztxQkFFYTtRQUNiLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDVixnQ0FBZ0M7UUFDaEMsVUFBVTtRQUNWO3dCQUNnQjtJQUNwQjtBQUNKOztBQUVBLFlBQVk7QUFDWjtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0NBQWdDO1FBQ2hDLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgICAgIENvcmUgRGFyayBTdHlsZXMgICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWRhcms6ICMwODIwMzI7XFxuICAgICAgICAtLW1lZGl1bTogIzJjMzk0YjtcXG4gICAgICAgIC0tYWNjZW50OiAjMzM0NzU2O1xcbiAgICAgICAgLS1ib2R5VGV4dENvbG9yV2hpdGU6ICNmYWZiZmM7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgcCxcXG4gICAgYm9keS5kYXJrLW1vZGUgbGksXFxuICAgIGJvZHkuZGFyay1tb2RlIGgxLFxcbiAgICBib2R5LmRhcmstbW9kZSBoMixcXG4gICAgYm9keS5kYXJrLW1vZGUgaDMsXFxuICAgIGJvZHkuZGFyay1tb2RlIGg0LFxcbiAgICBib2R5LmRhcmstbW9kZSBoNSxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDYsXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10aXRsZSxcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRleHQsXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1saSxcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWgzLFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtaXRlbS1wIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIC5saWdodCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIC5kYXJrIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhcmsge1xcbiAgICAgICAgLyogY2xhc3MgdXNlZCB0byBoaWRlIGVsZW1lbnRzIHRoYXQgb25seSBuZWVkIHRvIGJlIHNlZW4gd2hlbiBkYXJrIG1vZGUgaXMgZW5hYmxlZCAqL1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbiAgPC0tLSAgICAgIERhcmsgTW9kZSBUb2dnbGUgICAgICAtLT5cXG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuLyogTW9iaWxlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1zdW4ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgIHJpZ2h0OiAzLjc1cmVtO1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIGltZyxcXG4gICAgI2RhcmstbW9kZS10b2dnbGUgc3ZnIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICB3aWR0aDogMS41NjI1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjU2MjVyZW07XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3MtbW9vbiB7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzLFxcbiAgICAgICAgICAgIGZpbGwgMC4zcztcXG4gICAgICAgIGZpbGw6ICMwMDA7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzO1xcbiAgICB9XFxufVxcblxcbi8qIERlc2t0b3AgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogYXV0bztcXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuODc1cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLm1vb24ge1xcbiAgICAgICAgLyogY2hhbmdlIHRvIHdoYXRldmVyIHlvdSBuZWVkICovXFxuICAgICAgICBmaWxsOiAjZmZmO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2xvYmFsIFN0eWxlcyBhbmQgVmFyaWFibGVzICovXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5OiAjZmY2YTNlO1xuICAgIC0tcHJpbWFyeUxpZ2h0OiAjZmZiYTQzO1xuICAgIC0tc2Vjb25kYXJ5OiAjZmZiYTQzO1xuICAgIC0tc2Vjb25kYXJ5TGlnaHQ6ICNmZmJhNDM7XG4gICAgLS1oZWFkZXJDb2xvcjogIzFhMWExYTtcbiAgICAtLWhlYWRlckNvbG9yRGFyazogIzA4MjAzMjtcbiAgICAtLWhlYWRlckNvbG9yTWVkaXVtOiAjMmMzOTRiO1xuICAgIC0tYm9keVRleHRDb2xvcjogIzRlNGI2NjtcbiAgICAtLWJvZHlUZXh0Q29sb3JHcmF5OiAjMzEzMTMxO1xuICAgIC0tdG9wcGVyRm9udFNpemU6IGNsYW1wKDAuODEyNXJlbSwgMS42dncsIDFyZW0pO1xuICAgIC0taGVhZGVyRm9udFNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XG4gICAgLS1ib2R5Rm9udFNpemU6IDFyZW07XG4gICAgLS1zZWN0aW9uUGFkZGluZzogY2xhbXAoMy43NXJlbSwgNy44MnZ3LCA2LjI1cmVtKSAxcmVtO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5Rm9udFNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBEZWZhdWx0IGJhY2tncm91bmQgY29sb3IgKi9cbn1cblxuI2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG59XG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBCYXNpYyBUeXBvZ3JhcGh5ICovXG4uY3MtdG9wcGVyLCAuY3MtdGl0bGUsIC5jcy10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xufVxuXG4uY3MtdG9wcGVyIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRvcHBlckZvbnRTaXplKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uY3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyRm9udFNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbn1cblxuLmNzLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbn1cblxuLyogTmF2aWdhdGlvbiBMaW5rcyAqL1xuI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUsICNjcy1uYXZpZ2F0aW9uPi5wYWdlLXRpdGxlOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3JNZWRpdW0pO1xufVxuXG4jY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsK0NBQStDO0lBQy9DLHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixzQkFBc0IsRUFBRSw2QkFBNkI7QUFDekQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHbG9iYWwgU3R5bGVzIGFuZCBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogI2ZmNmEzZTtcXG4gICAgLS1wcmltYXJ5TGlnaHQ6ICNmZmJhNDM7XFxuICAgIC0tc2Vjb25kYXJ5OiAjZmZiYTQzO1xcbiAgICAtLXNlY29uZGFyeUxpZ2h0OiAjZmZiYTQzO1xcbiAgICAtLWhlYWRlckNvbG9yOiAjMWExYTFhO1xcbiAgICAtLWhlYWRlckNvbG9yRGFyazogIzA4MjAzMjtcXG4gICAgLS1oZWFkZXJDb2xvck1lZGl1bTogIzJjMzk0YjtcXG4gICAgLS1ib2R5VGV4dENvbG9yOiAjNGU0YjY2O1xcbiAgICAtLWJvZHlUZXh0Q29sb3JHcmF5OiAjMzEzMTMxO1xcbiAgICAtLXRvcHBlckZvbnRTaXplOiBjbGFtcCgwLjgxMjVyZW0sIDEuNnZ3LCAxcmVtKTtcXG4gICAgLS1oZWFkZXJGb250U2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gICAgLS1ib2R5Rm9udFNpemU6IDFyZW07XFxuICAgIC0tc2VjdGlvblBhZGRpbmc6IGNsYW1wKDMuNzVyZW0sIDcuODJ2dywgNi4yNXJlbSkgMXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLyogRGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yICovXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBCYXNpYyBUeXBvZ3JhcGh5ICovXFxuLmNzLXRvcHBlciwgLmNzLXRpdGxlLCAuY3MtdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxufVxcblxcbi5jcy10b3BwZXIge1xcbiAgICBmb250LXNpemU6IHZhcigtLXRvcHBlckZvbnRTaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG5cXG4uY3MtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRlckZvbnRTaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG59XFxuXFxuLmNzLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gTGlua3MgKi9cXG4jY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSwgI2NzLW5hdmlnYXRpb24+LnBhZ2UtdGl0bGU6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yTWVkaXVtKTtcXG59XFxuXFxuI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbiAgPC0tLSAgICAgTW9iaWxlIE5hdmlnYXRpb24gICAgICAtLT5cbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIE1vYmlsZSAtIDEwMjNweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XG4gICAgYm9keS5jcy1vcGVuIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAjbWFpbi1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE4JTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb246YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xMTAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cywgb3BhY2l0eSAwLjVzO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgICBoZWlnaHQ6IDE1MHZoO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtdWwtd3JhcHBlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLWxpIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogMTRyZW07XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuXG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcbiAgICAgICAgLyogNDRweCAtIDQ4cHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDIuNzVyZW0sIDZ2dywgM3JlbSk7XG4gICAgICAgIGhlaWdodDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjI1ZGVnKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMiB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtMjI1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUzIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1ib3gge1xuICAgICAgICAvKiAyNHB4IC0gMjhweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoMS41cmVtLCAydncsIDEuNzVyZW0pO1xuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDAuODc1cmVtLCAxLjV2dywgMXJlbSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHRvcCAwLjNzLCBsZWZ0IDAuM3M7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMiB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3MsIGxlZnQgMC4zcywgdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTMge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi40ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuM3M7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMCAwIDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxLjI1cmVtO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLyogdHJhbnNpdGlvbiBmcm9tIHRoZXNlIHZhbHVlcyAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQuMzc1cmVtKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMsIG9wYWNpdHkgMC45cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg0KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDUpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDYpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNykge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOCkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg5KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNDVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMCkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjU1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTIpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTMpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42NXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDEuN3JlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsuY3MtYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICAvKiBtYWtlcyBpdCB3aGl0ZSAqL1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0pO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICBEZXNrdG9wIE5hdmlnYXRpb24gICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogU21hbGwgRGVza3RvcCAtIDEwMjRweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBoZWlnaHQgYW5kIHdpZHRoICovXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgICAgLyogcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDsgKi9cbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEuNXJlbTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIG1heC13aWR0aDogMzByZW07XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogMjBweCAtIDM2cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgxLjI1cmVtLCAyLjZ2dywgMi4yNXJlbSk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICAvKiBwcmV2ZW50IGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cbiAgICAgICAgZmxleDogbm9uZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAxdncsIDEuMnJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpob3ZlcjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgICAgLyogYWN0aXZlIHN0YXRlIHVuZGVybGluZSAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIC8qIG1ha2VzIGl0IHR1cm4gd2hpdGUgKi9cbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5TGlnaHQpO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICBTaWRlIEJ5IFNpZGUgUmV2ZXJzZSAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCB0YWJsZXQgKi9cbiAgICAgICAgbWF4LXdpZHRoOiAzNi41cmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgNnZ3LCA0cmVtKTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50LXJpZ2h0IHtcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1yaWdodCB7XG4gICAgICAgIGhlaWdodDogOTV2dztcbiAgICAgICAgbWF4LWhlaWdodDogMjVyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtbGVmdCB7XG4gICAgICAgIGhlaWdodDogMTExdnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMxLjI1cmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtbGVmdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiAyOHB4IC0gNDBweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDEuNzVyZW0sIDN2dywgMi41cmVtKTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3Mtc3RhdHMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzOS4zNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gICAgICAgIHJvdy1nYXA6IDEuNXJlbTtcbiAgICAgICAgY29sdW1uLWdhcDogMC43NXJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3Mtc3RhdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIC8qIG1ha2luZyBmbGV4IHNvIHdlIGNhbiBhbGlnbiBhIGhlYWRpbmcgd2l0aCAxIGxpbmUgdG8gdGhlIGJvdHRvbSAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1udW1iZXIge1xuICAgICAgICAvKiAzMXB4IC0gMzlweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuOTM3NXJlbSwgM3Z3LCAyLjQzNzVyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgMCAwLjI1cmVtIDA7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLyogYXV0byBtYXJnaW4gdG9wIHdpbGwgcHVzaCB0ZXh0IHRvIGJvdHRvbSBpZiB0aGVyZSdzIG9ubHkgb25lIGxpbmUgKi9cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtcmlnaHQge1xuICAgICAgICAvKiBzZW5kcyBpdCB0byB0aGUgcmlnaHQgaW4gdGhlIDJuZCBwb3NpdGlvbiAqL1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1yaWdodCB7XG4gICAgICAgIC8qIDM0MHB4IC0gNDYwcHggKi9cbiAgICAgICAgbWluLWhlaWdodDogY2xhbXAoMjEuMjVyZW0sIDM1dncsIDI4Ljc1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLWxlZnQge1xuICAgICAgICAvKiA1MzBweCAtIDY2MHB4ICovXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDMzLjEyNXJlbSwgNDV2dywgNDEuMjVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRpdGxlLFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0LFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1udW1iZXIsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICAgICAgIEZvb3RlciAgICAgICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI2NzLWZvb3Rlci0xMDgge1xuICAgICAgICAvKiA0MHB4IC0gMTAwcHggdG9wIGFuZCBib3R0b20gKi9cbiAgICAgICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNC45dncsIDIuMjVyZW0pIDFyZW07XG4gICAgICAgIC8qIDQwcHggLSA1MHB4ICovXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCgxLjVyZW0sIDYuOXZ3LCAyLjEyNXJlbSk7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcbiAgICAgICAgLyogNDBweCAtIDYwcHgqL1xuICAgICAgICBwYWRkaW5nOiAwIDAgY2xhbXAoMnJlbSwgNC43dncsIC43NXJlbSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYwZjY7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcbiAgICAgICAgLyogMTZweCAtIDIwcHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDAuMTVzLCAxcmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XG4gICAgICAgIC8qIHRvcCByaWdodCBib3ggKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb3B5cmlnaHQge1xuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAxLjZ2dywgMXJlbSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNhMGEzYmQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvKiAyMHB4IC0gMjhweCAqL1xuICAgICAgICBtYXJnaW46IGNsYW1wKDEuMjVyZW0sIDIuOHZ3LCAxLjc1cmVtKSBhdXRvIDA7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA2MDBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNy41cmVtKSB7XG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcbiAgICAgICAgLyogNDRweCAtIDg4cHggKi9cbiAgICAgICAgbWFyZ2luOiAwIGNsYW1wKDIuNzVyZW0sIDYuMnZ3LCA1LjVyZW0pIDAgMDtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgICAgICAgIE1lbnUgICAgICAgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG5cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICAjbWVudS0xMDA1IHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICNtZW51LTEwMDU6YmVmb3JlIHtcbiAgICAgICAgLyogc3RhdGljIHRpbGVkIHBhdHRlcm4gKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMC4wODtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9jc2ltZy5ueWMzLmNkbi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0Zvb2QtTWVudS9zdGF0aWMtcGF0dGVybi5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgN3Z3LCA0cmVtKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1jb250ZW50IHtcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlciB7XG4gICAgICAgIC8qIDEyMHB4IC0gMTgxcHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDcuNXJlbSwgOXZ3LCAxMS4zMTI1cmVtKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlcjpiZWZvcmUge1xuICAgICAgICAvKiBsZWZ0IGxpbmUgKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgLyogOTBweCAtIDE1NXB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCg1LjYyNXJlbSwgNHZ3LCA5LjY4NzVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgLyogMTJweCAtIDI0cHggKi9cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCgwLjc1cmVtLCAydncsIDEuNXJlbSk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXI6YWZ0ZXIge1xuICAgICAgICAvKiByaWdodCBsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgwLjc1cmVtLCAydncsIDEuNXJlbSk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlciBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cblxuICAgICNtZW51LTEwMDUgLmNzLXRleHQge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAvKiA0NnB4IC0gNTZweCAqL1xuICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMi44NzVlbSwgNS41dncsIDMuNWVtKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1pbi13aWR0aDogOS4zNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGZyb20gYWRkaW5nIHRvIHRoZSB3aWR0aCAqL1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlcjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgICAgICAgLyogMzJweCAtIDYwcHggKi9cbiAgICAgICAgcm93LWdhcDogY2xhbXAoMnJlbSwgNnZ3LCAzLjc1cmVtKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMzYuMjVyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiAxNnB4IC0gMzZweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDFyZW0sIDN2dywgMi4yNXJlbSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSB7XG4gICAgICAgIC8qIDc2cHggLSAxNjBweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoNC43NXJlbSwgMTR2dywgMTByZW0pO1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDQuNzVyZW0sIDE0dncsIDEwcmVtKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLyogNHB4IC0gOHB4ICovXG4gICAgICAgIGJvcmRlcjogY2xhbXAoMC4yNXJlbSwgMXZ3LCAwLjVyZW0pIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1waWN0dXJlIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBtYWtlcyBpdCBhY3QgbGlrZSBhIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaDMge1xuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS41cmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAvKiA4cHggLSAxNnB4ICovXG4gICAgICAgIG1hcmdpbjogMCAwIGNsYW1wKDAuNXJlbSwgMS41dncsIDFyZW0pO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWgzOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLW5hbWUge1xuICAgICAgICBtYXgtd2lkdGg6IDEzLjc1cmVtO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXByaWNlIHtcbiAgICAgICAgLyogMTZweCAtIDI1cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNTYyNXJlbSk7XG4gICAgICAgIC8qIDI4cHggLSA0NnB4ICovXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgxLjc1cmVtLCA0dncsIDIuODc1cmVtKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgLyogOHB4IC0gMTJweCAqL1xuICAgICAgICBwYWRkaW5nOiAwIGNsYW1wKDAuNXJlbSwgMXZ3LCAwLjc1cmVtKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiMmM3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBvcmRlcjogMztcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtLXAge1xuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAydncsIDFyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbn1cblxuLyogVGFibGV0IC0gNzY4cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA0OC41JTtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgICAgICAgICBDb250YWN0cyAgICAgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cblxuLyogTW9iaWxlIC0gMzYwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgICNjb250YWN0LXN0cmlwLTMyNCB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MGVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDd2dywgNHJlbSk7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1jb250ZW50IHtcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIGNoYW5nZXMgdG8gMTI4MHB4IGF0IGRlc2t0b3AgKi9cbiAgICAgICAgbWF4LXdpZHRoOiAzNy41cmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDIuNXJlbTtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW0ge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTguMTI1cmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW06aG92ZXIgLmNzLXBpY3R1cmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgIC8qIDEycHggLSAyMHB4ICovXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgM3Z3LCAxLjI1cmVtKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmFiYWJhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogcHJldmVudHMgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxuICAgICAgICAgICAgYm94LXNoYWRvdyAwLjNzLFxuICAgICAgICAgICAgdHJhbnNmb3JtIDAuNnM7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1mbGV4LWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNzY3Njc2O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG59XG5cbi8qIFRhYmxldCAtIDY1MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwLjYyNXJlbSkge1xuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgICAgICAgcm93LWdhcDogMnJlbTtcbiAgICB9XG59XG5cbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyLFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhvdXJzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7b0NBRW9DO0FBQ3BDLG9CQUFvQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLGlEQUFpRDtRQUNqRCxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLDhCQUE4QjtRQUM5QixVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLGNBQWM7UUFDZCxxQ0FBcUM7UUFDckMsbUNBQW1DO1FBQ25DLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxV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Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixpREFBaUQ7UUFDakQsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsdUNBQXVDO1FBQ3ZDLFVBQVU7UUFDVjs7OzBCQUdrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxzQkFBc0I7UUFDdEIsY0FBYztJQUNsQjs7SUFFQTs7UUFFSSw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsY0FBYztJQUNsQjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjtBQUNKOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTs7O1FBR0ksZ0NBQWdDO0lBQ3BDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgIE1vYmlsZSBOYXZpZ2F0aW9uICAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAtIDEwMjNweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xcbiAgICBib2R5LmNzLW9wZW4ge1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxOCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMHZoO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTEwMDtcXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzLCBvcGFjaXR5IDAuNXM7XFxuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIGhlaWdodDogMTUwdmg7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtdWwtd3JhcHBlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLWxpIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNHJlbTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgfVxcblxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcXG4gICAgICAgIC8qIDQ0cHggLSA0OHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcXG4gICAgICAgIGhlaWdodDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcXG4gICAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTEge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjI1ZGVnKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMiB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHRyYW5zbGF0ZVkoMCkgcm90YXRlKC0yMjVkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUzIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBib3R0b206IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWJveCB7XFxuICAgICAgICAvKiAyNHB4IC0gMjhweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDEuNXJlbSwgMnZ3LCAxLjc1cmVtKTtcXG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXFxuICAgICAgICBoZWlnaHQ6IGNsYW1wKDAuODc1cmVtLCAxLjV2dywgMXJlbSk7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUxIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzLCB0b3AgMC4zcywgbGVmdCAwLjNzO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMiB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3MsIGxlZnQgMC4zcywgdHJhbnNmb3JtIDAuNXM7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUzIHtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjNzLCBvcGFjaXR5IDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi40ZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cywgb3BhY2l0eSAwLjNzO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDY1dmg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDAgMCAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxLjI1cmVtO1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIC8qIHRyYW5zaXRpb24gZnJvbSB0aGVzZSB2YWx1ZXMgKi9cXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC4zNzVyZW0pO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMsIG9wYWNpdHkgMC45cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDMpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg0KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg1KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNikge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDgpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDkpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNDVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMCkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTEpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMikge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTMpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICAgIC8qIDE2cHggLSAyNHB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDEuN3JlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XFxuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XFxuICAgICAgICAvKiBtYWtlcyBpdCB3aGl0ZSAqL1xcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0pO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuICA8LS0tICAgICBEZXNrdG9wIE5hdmlnYXRpb24gICAgIC0tPlxcbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBoZWlnaHQgYW5kIHdpZHRoICovXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDsgKi9cXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiAyMHB4IC0gMzZweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgxLjI1cmVtLCAyLjZ2dywgMi4yNXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgICAgICAvKiBwcmV2ZW50IGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDF2dywgMS4ycmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XFxuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAwJTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDByZW07XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gICAgfVxcbn1cXG5cXG4vKiBEYXJrIE1vZGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIC8qIG1ha2VzIGl0IHR1cm4gd2hpdGUgKi9cXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5TGlnaHQpO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgIFNpZGUgQnkgU2lkZSBSZXZlcnNlICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcblxcbi8qIE1vYmlsZSAtIDM2MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogY2hhbmdlcyB0byAxMjgwcHggYXQgdGFibGV0ICovXFxuICAgICAgICBtYXgtd2lkdGg6IDM2LjVyZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA2dncsIDRyZW0pO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtcmlnaHQge1xcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0Omxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1yaWdodCB7XFxuICAgICAgICBoZWlnaHQ6IDk1dnc7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyNXJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1sZWZ0IHtcXG4gICAgICAgIGhlaWdodDogMTExdnc7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMS4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50LWxlZnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8qIDI4cHggLSA0MHB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDEuNzVyZW0sIDN2dywgMi41cmVtKTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3Mtc3RhdHMge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDM5LjM3NXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICAgICAgICByb3ctZ2FwOiAxLjVyZW07XFxuICAgICAgICBjb2x1bW4tZ2FwOiAwLjc1cmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1zdGF0IHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICAvKiBtYWtpbmcgZmxleCBzbyB3ZSBjYW4gYWxpZ24gYSBoZWFkaW5nIHdpdGggMSBsaW5lIHRvIHRoZSBib3R0b20gKi9cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1udW1iZXIge1xcbiAgICAgICAgLyogMzFweCAtIDM5cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS45Mzc1cmVtLCAzdncsIDIuNDM3NXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIC8qIGF1dG8gbWFyZ2luIHRvcCB3aWxsIHB1c2ggdGV4dCB0byBib3R0b20gaWYgdGhlcmUncyBvbmx5IG9uZSBsaW5lICovXFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLyogVGFibGV0IC0gNzY4cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQge1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50LXJpZ2h0IHtcXG4gICAgICAgIC8qIHNlbmRzIGl0IHRvIHRoZSByaWdodCBpbiB0aGUgMm5kIHBvc2l0aW9uICovXFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1yaWdodCB7XFxuICAgICAgICAvKiAzNDBweCAtIDQ2MHB4ICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgyMS4yNXJlbSwgMzV2dywgMjguNzVyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1sZWZ0IHtcXG4gICAgICAgIC8qIDUzMHB4IC0gNjYwcHggKi9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDMzLjEyNXJlbSwgNDV2dywgNDEuMjVyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBEYXJrIE1vZGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRpdGxlLFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLW51bWJlcixcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQsXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1kZXNjIHtcXG4gICAgICAgIG9wYWNpdHk6IC44O1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgICAgICAgICAgRm9vdGVyICAgICAgICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcblxcbi8qIE1vYmlsZSAtIDM2MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgICNjcy1mb290ZXItMTA4IHtcXG4gICAgICAgIC8qIDQwcHggLSAxMDBweCB0b3AgYW5kIGJvdHRvbSAqL1xcbiAgICAgICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNC45dncsIDIuMjVyZW0pIDFyZW07XFxuICAgICAgICAvKiA0MHB4IC0gNTBweCAqL1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKDEuNXJlbSwgNi45dncsIDIuMTI1cmVtKTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtdWwge1xcbiAgICAgICAgLyogNDBweCAtIDYwcHgqL1xcbiAgICAgICAgcGFkZGluZzogMCAwIGNsYW1wKDJyZW0sIDQuN3Z3LCAuNzVyZW0pO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYwZjY7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XFxuICAgICAgICAvKiAxNnB4IC0gMjBweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDAuMTVzLCAxcmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XFxuICAgICAgICAvKiB0b3AgcmlnaHQgYm94ICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAwJTtcXG4gICAgICAgIGhlaWdodDogMC4xODc1cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9keVRleHRDb2xvcik7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBib3R0b206IC0wLjEyNXJlbTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb3B5cmlnaHQge1xcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44NzVyZW0sIDEuNnZ3LCAxcmVtKTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiAjYTBhM2JkO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAvKiAyMHB4IC0gMjhweCAqL1xcbiAgICAgICAgbWFyZ2luOiBjbGFtcCgxLjI1cmVtLCAyLjh2dywgMS43NXJlbSkgYXV0byAwO1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAtIDYwMHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNy41cmVtKSB7XFxuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saSB7XFxuICAgICAgICAvKiA0NHB4IC0gODhweCAqL1xcbiAgICAgICAgbWFyZ2luOiAwIGNsYW1wKDIuNzVyZW0sIDYuMnZ3LCA1LjVyZW0pIDAgMDtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbn1cXG5cXG4vKiBEYXJrIE1vZGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDgge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgICAgICAgICAgIE1lbnUgICAgICAgICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcblxcbi8qIE1vYmlsZSAtIDM2MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgICNtZW51LTEwMDUge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDU6YmVmb3JlIHtcXG4gICAgICAgIC8qIHN0YXRpYyB0aWxlZCBwYXR0ZXJuICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3BhY2l0eTogMC4wODtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly9jc2ltZy5ueWMzLmNkbi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0Zvb2QtTWVudS9zdGF0aWMtcGF0dGVybi5wbmdcXFwiKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDd2dywgNHJlbSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtY29udGVudCB7XFxuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyIHtcXG4gICAgICAgIC8qIDEyMHB4IC0gMTgxcHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCg3LjVyZW0sIDl2dywgMTEuMzEyNXJlbSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlcjpiZWZvcmUge1xcbiAgICAgICAgLyogbGVmdCBsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDUuNjI1cmVtLCA0dncsIDkuNjg3NXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKDAuNzVyZW0sIDJ2dywgMS41cmVtKTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXI6YWZ0ZXIge1xcbiAgICAgICAgLyogcmlnaHQgbGluZSAqL1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAvKiA5MHB4IC0gMTU1cHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCg1LjYyNXJlbSwgNHZ3LCA5LjY4NzVyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICAvKiAxMnB4IC0gMjRweCAqL1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKDAuNzVyZW0sIDJ2dywgMS41cmVtKTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlciBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtdGV4dCB7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIC8qIDQ2cHggLSA1NnB4ICovXFxuICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMi44NzVlbSwgNS41dncsIDMuNWVtKTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIG1pbi13aWR0aDogOS4zNzVyZW07XFxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGZyb20gYWRkaW5nIHRvIHRoZSB3aWR0aCAqL1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcXG4gICAgICAgIC8qIDMycHggLSA2MHB4ICovXFxuICAgICAgICByb3ctZ2FwOiBjbGFtcCgycmVtLCA2dncsIDMuNzVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0ge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNi4yNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogMTZweCAtIDM2cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoMXJlbSwgM3Z3LCAyLjI1cmVtKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1waWN0dXJlIHtcXG4gICAgICAgIC8qIDc2cHggLSAxNjBweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDQuNzVyZW0sIDE0dncsIDEwcmVtKTtcXG4gICAgICAgIGhlaWdodDogY2xhbXAoNC43NXJlbSwgMTR2dywgMTByZW0pO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIC8qIDRweCAtIDhweCAqL1xcbiAgICAgICAgYm9yZGVyOiBjbGFtcCgwLjI1cmVtLCAxdncsIDAuNXJlbSkgc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmbGV4OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXBpY3R1cmUgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8qIG1ha2VzIGl0IGFjdCBsaWtlIGEgYmFja2dyb3VuZCBpbWFnZSAqL1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaDMge1xcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjVyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAvKiA4cHggLSAxNnB4ICovXFxuICAgICAgICBtYXJnaW46IDAgMCBjbGFtcCgwLjVyZW0sIDEuNXZ3LCAxcmVtKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWgzOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLW5hbWUge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMy43NXJlbTtcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtcHJpY2Uge1xcbiAgICAgICAgLyogMTZweCAtIDI1cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjU2MjVyZW0pO1xcbiAgICAgICAgLyogMjhweCAtIDQ2cHggKi9cXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgxLjc1cmVtLCA0dncsIDIuODc1cmVtKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAvKiA4cHggLSAxMnB4ICovXFxuICAgICAgICBwYWRkaW5nOiAwIGNsYW1wKDAuNXJlbSwgMXZ3LCAwLjc1cmVtKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjJjNztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgb3JkZXI6IDM7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbS1wIHtcXG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAydncsIDFyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gICAgI21lbnUtMTAwNSAuY3MtY2FyZC1ncm91cCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiA0OC41JTtcXG4gICAgfVxcbn1cXG5cXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICAgICAgIENvbnRhY3RzICAgICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG5cXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICAjY29udGFjdC1zdHJpcC0zMjQge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODBlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgN3Z3LCA0cmVtKTtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWNvbnRlbnQge1xcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8qIGNlbnRlcnMgY29udGVudCBob3Jpem9udGFsbHksIHNldCB0byBmbGV4LXN0YXJ0IHRvIGxlZnQgYWxpZ24gKi9cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogY2hhbmdlcyB0byAxMjgwcHggYXQgZGVza3RvcCAqL1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNy41cmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pdGVtIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTguMTI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaXRlbTpob3ZlciAuY3MtcGljdHVyZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1waWN0dXJlIHtcXG4gICAgICAgIHdpZHRoOiA1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgLyogMTJweCAtIDIwcHggKi9cXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgM3Z3LCAxLjI1cmVtKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYWJhYmE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogcHJldmVudHMgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb246XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMC4zcyxcXG4gICAgICAgICAgICB0cmFuc2Zvcm0gMC42cztcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWZsZXgtZ3JvdXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaWNvbiB7XFxuICAgICAgICB3aWR0aDogMS43NXJlbTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaG91cnMge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1ib2R5Rm9udFNpemUpO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6ICM3Njc2NzY7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbms6aG92ZXIge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG59XFxuXFxuLyogVGFibGV0IC0gNjUwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwLjYyNXJlbSkge1xcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XFxuICAgICAgICByb3ctZ2FwOiAycmVtO1xcbiAgICB9XFxufVxcblxcbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgfVxcbn1cXG5cXG4vKiBEYXJrIE1vZGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyLFxcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaG91cnMge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFyay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RhcmsuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRpbmcgZ2xvYmFsLCBtYWluLCBhbmQgZGFyayBtb2RlIENTUyBzdHlsZXNoZWV0c1xuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9kYXJrLmNzcyc7XG5cbi8vIEltcG9ydGluZyBmdW5jdGlvbmFsaXR5IG1vZHVsZXNcbmltcG9ydCBkYXJrTW9kZVRvZ2dsZXIgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvZGFya01vZGUuanMnO1xuaW1wb3J0IG1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZyBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9tb2JpbGVOYXZpZ2F0aW9uLmpzJztcblxuLy8gSW1wb3J0aW5nIHBhZ2UgbG9hZGVyIGZ1bmN0aW9uc1xuaW1wb3J0IGhvbWVQYWdlTG9hZGVyIGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZGVycy9ob21lUGFnZUxvYWRlci5qcyc7XG5pbXBvcnQgbWVudVBhZ2VMb2FkZXIgZnJvbSAnLi9tb2R1bGVzL3BhZ2VMb2FkZXJzL21lbnVQYWdlTG9hZGVyLmpzJztcbmltcG9ydCBjb250YWN0c1BhZ2VMb2FkZXIgZnJvbSAnLi9tb2R1bGVzL3BhZ2VMb2FkZXJzL2NvbnRhY3RzUGFnZUxvYWRlci5qcyc7XG5cbi8vIEltcG9ydGluZyB1dGlsaXR5IGZ1bmN0aW9uIGZvciBjaGFuZ2luZyBidXR0b24gYXBwZWFyYW5jZVxuaW1wb3J0IHsgY2hhbmdlQnV0dG9uQ292ZXIgfSBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzJztcblxuLy8gQWN0aXZhdGUgZGFyayBtb2RlIHRvZ2dsZSBmdW5jdGlvbmFsaXR5XG5kYXJrTW9kZVRvZ2dsZXIoKTtcblxuLy8gU2V0IHVwIG1vYmlsZSBuYXZpZ2F0aW9uIHRvZ2dsZSBmdW5jdGlvbmFsaXR5XG5tb2JpbGVOYXZpZ2F0aW9uVG9nZ2xpbmcoKTtcblxuLy8gR2xvYmFsIHZhcmlhYmxlcyBzZXR1cFxubGV0IHBhZ2VOYW1lcyA9IFsnaG9tZScsICdtZW51JywgJ2NvbnRhY3RzJ107XG5sZXQgY3VycmVudFRhYiA9IHBhZ2VOYW1lc1swXTtcbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpO1xuXG4vLyBMb2FkIHRoZSBpbml0aWFsIGhvbWUgcGFnZSBjb250ZW50XG5ob21lUGFnZUxvYWRlcihjb250ZW50KTtcblxuLyoqXG4gKiBTZXQgdXAgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIGZvciB0YWIgbmF2aWdhdGlvbiBpbiB0aGUgaGVhZGVyLlxuICogVGhpcyBhbGxvd3Mgc3dpdGNoaW5nIGJldHdlZW4gZGlmZmVyZW50IHBhZ2VzIChob21lLCBtZW51LCBjb250YWN0cykgYW5kXG4gKiBlbnN1cmVzIHRoZSBhcHByb3ByaWF0ZSBjb250ZW50IGlzIGxvYWRlZCBhbmQgZGlzcGxheWVkLlxuICovXG5wYWdlTmFtZXMuZm9yRWFjaCgocGFnZU5hbWUpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlTmFtZSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjdXJyZW50VGFiID0gY2hhbmdlQnV0dG9uQ292ZXIoY3VycmVudFRhYiwgYnV0dG9uLmlkKTtcblxuICAgICAgICBpZiAoYnV0dG9uLmlkID09ICdob21lJykge1xuICAgICAgICAgICAgaG9tZVBhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09ICdtZW51Jykge1xuICAgICAgICAgICAgbWVudVBhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWN0c1BhZ2VMb2FkZXIoY29udGVudCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb250YWN0cycpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImV4cG9ydCBsZXQgY29udGFjdHNDb250ZW50cyA9IFtcbiAgICB7XG4gICAgICAgIGNvbnRlbnRzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ091ciBDb250YWN0cycsXG4gICAgICAgICAgICB0b3BwZXI6ICdXZSBnb3QgZm9vZCEnLFxuICAgICAgICAgICAgcGFyYWdyYXBoOiAnU29tZSBjbGV2ZXIgdGV4dCBhYm91dCByZXNlcnZpbmcgdGFibGUgdmlhIHBob25lIG9yIGVtYWlsJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZEdyb3VwOiB7XG4gICAgICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnUGhvbmUnLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU5yT25lOiAnKzEgKDU1NSkgNDU2IDc4OTknLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU5yVHdvOiAnKzEgKDU1NSkgNDU2IDc4ODknLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgdGVsOjU1NS00NTYtNzg5OWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jc2ltZy5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vQ29udGFjdC1QYWdlL3Bob25lLWdyZXkuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ2ljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczNScsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyaWEtaGlkZGVuOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICdFbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnaW5mb0BlbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgbWFpbHRvOkluZm9AZW1haWwuY29tYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY3NpbWcubnljMy5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9JY29ucy9tZWNoLWVtYWlsLnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmlhLWhpZGRlbjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICdBZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYDEyMyBGYWtlIFN0LCBTVEUgMTAwIFNvbWV3aGVyZSwgRkwgOTg3NWAsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jc2ltZy5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vQ29udGFjdC1QYWdlL3Bpbi1ncmV5LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmlhLWhpZGRlbjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob3Vyczoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnT3BlbiBIb3VycycsXG4gICAgICAgICAgICAgICAgICAgIGRheXM6ICdNb25kYXkgVG8gU2F0dXJkYXknLFxuICAgICAgICAgICAgICAgICAgICBob3VyczogJzk6MDAgLSAyMjozMCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jc2ltZy5ueWMzLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vQ29udGFjdC1QYWdlL2Nsb2NrLWdyZXkuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ2ljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyaWEtaGlkZGVuOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCBob21lUGFnZUxlZnQgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9ob21lUGFnZUxlZnQucG5nJztcbmltcG9ydCBob21lUGFnZVJpZ2h0IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvaG9tZVBhZ2VSaWdodC5wbmcnO1xuXG5leHBvcnQgbGV0IGhvbWVDb250ZW50cyA9IFtcbiAgICB7XG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRvcHBlcjogJ0RvIHlvdSBsaWtlIGZvb2Q/JyxcbiAgICAgICAgICAgIHRpdGxlOiAnQWNjZXNzaWJsZSBGb29kIFRoYXQgQW55b25lIENhbiBFYXQnLFxuICAgICAgICAgICAgcGFyYWdyYXBoOiBgSW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgdGFudGFsaXppbmcgd29ybGQgb2YgZ291cm1ldCBkaW5pbmcgYXRcbiAgICAgICAgXCJTYXZvcidzIENhdGNoXCIsIGEgdmlicmFudCBhbmQgZWxlY3RyaWZ5aW5nIHJlc3RhdXJhbnQgYnJhbmRcbiAgICAgICAgY3JhZnRlZCBzcGVjaWZpY2FsbHkgZm9yIHRob3NlIHdobyByZWxpc2ggdGhlIHRocmlsbCBvZiBjdWxpbmFyeVxuICAgICAgICBleGNlbGxlbmNlLiBGb3IgYXZpZCBmb29kIGVudGh1c2lhc3RzIHdobyBmZWVsIHRoZWlyIHRhc3RlIGJ1ZHNcbiAgICAgICAgYXdha2VuIGF0IHRoZSBmaXJzdCBoaW50IG9mIGV4cXVpc2l0ZSBmbGF2b3JzLCBcIlNhdm9yJ3MgQ2F0Y2hcIlxuICAgICAgICBlbWJvZGllcyB0aGUgZXNzZW5jZSBvZiB0aGF0IGV4aGlsYXJhdGluZyBtb21lbnQgd2hlbiBhXG4gICAgICAgIHBlcmZlY3RseSBwcmVwYXJlZCBkaXNoIGFuZCBhIGRpc2Nlcm5pbmcgZGluZXIgZW5nYWdlIGluIGFcbiAgICAgICAgZGVsaWdodGZ1bCBpbnRlcnBsYXkgb2YgdGFzdGUgYW5kIGNyYWZ0c21hbnNoaXAuYCxcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VMZWZ0OiB7XG4gICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAwcHgpJyxcbiAgICAgICAgICAgICAgICBzcmNzZXQ6IGhvbWVQYWdlTGVmdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICBzcmNzZXQ6IGhvbWVQYWdlTGVmdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgc3JjOiBob21lUGFnZUxlZnQsXG4gICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzYwOCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDA2JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlUmlnaHQ6IHtcbiAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgIHNyY3NldDogaG9tZVBhZ2VSaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICBzcmNzZXQ6IGhvbWVQYWdlUmlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgIHNyYzogaG9tZVBhZ2VSaWdodCxcbiAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNjA4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc2NjInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHM6IHtcbiAgICAgICAgICAgIGZpcnN0U3RhdDoge1xuICAgICAgICAgICAgICAgIG51bTogJzk5JScsXG4gICAgICAgICAgICAgICAgdGV4dDogJ1Bvc2l0aXZlIGN1c3RvbWVyIHJldmlld3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlY29uZFN0YXQ6IHtcbiAgICAgICAgICAgICAgICBudW06ICcxMCcsXG4gICAgICAgICAgICAgICAgdGV4dDogYERpc2ggJ1RyeSBBZ2FpbicgU3BlY2lhbGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcmRTdGF0OiB7XG4gICAgICAgICAgICAgICAgbnVtOiAnMjQvNycsXG4gICAgICAgICAgICAgICAgdGV4dDogJ09ubGluZSByZXNlcnZhdGlvbiBhbmQgaW5xdWlyeSBzZXJ2aWNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgYnVyZ2VyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9iaXNvbkJ1cmdlci5wbmcnO1xuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L2NoaWNrZW5TYWxhZE1hbmdvLnBuZyc7XG5pbXBvcnQgbGFzYWduYSBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUvbGFzYWduYS5wbmcnO1xuaW1wb3J0IHBpenphIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9tZWF0TG92ZXJzUGl6emEucG5nJztcbmltcG9ydCBzYXVjZSBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUvcHJpY2tseVBlYXJQb3JrU2F1Y2UucG5nJztcbmltcG9ydCB0b3N0YWRhIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9wdXJwbGVDb3JuVG9zdGFkYS5wbmcnO1xuXG5leHBvcnQgbGV0IG1lbnVDb250ZW50cyA9IFtcbiAgICB7XG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnT3VyIFNwZWNpYWxzJyxcbiAgICAgICAgICAgIHBhcmFncmFwaDogYEluZHVsZ2UgaW4gb3VyIFNwZWNpYWwgTWVudSwgd2hlcmUgZWFjaCBkaXNoIGlzIGEgbWFzdGVycGllY2Ugb2ZcbiAgICAgICAgICAgIGZsYXZvciBhbmQgY3JlYXRpdml0eS4gRnJvbSB0aGUgaGVhcnRpbmVzcyBvZiBhIEJpc29uIEJ1cmdlciB0b1xuICAgICAgICAgICAgdGhlIGV4b3RpYyBmbGFpciBvZiBDdXJyaWVkIENoaWNrZW4gU2FsYWQgd2l0aCBNYW5nbywgZXhwZXJpZW5jZVxuICAgICAgICAgICAgYSBjdWxpbmFyeSBqb3VybmV5IHRoYXQgZGVsaWdodHMgYW5kIHN1cnByaXNlcyB3aXRoIGV2ZXJ5IGJpdGUuYCxcbiAgICAgICAgfSxcbiAgICAgICAgY2FyZEdyb3VwOiB7XG4gICAgICAgICAgICBsaXN0SXRlbU9uZToge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0xhc2FnbmEnLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYEEgY2xhc3NpYyBmYXZvcml0ZSwgb3VyIGxhc2FnbmEgbGF5ZXJzIHRlbmRlciBwYXN0YSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIHJpY2ggbWVhdCBzYXVjZSBhbmQgY3JlYW15IGLDqWNoYW1lbCwgdG9wcGVkIHdpdGggZ29sZGVuLFxuICAgICAgICAgICAgICAgICAgICBidWJibGluZyBjaGVlc2UgZm9yIGEgY29tZm9ydGluZyBhbmQgaW5kdWxnZW50IG1lYWwuYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAwcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogbGFzYWduYSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogbGFzYWduYSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogbGFzYWduYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdEl0ZW1Ud286IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdCaXNvbiBCdXJnZXInLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYFRoaXMgaGVhcnR5IGJ1cmdlciBmZWF0dXJlcyBhIGp1aWN5IGJpc29uIHBhdHR5IHRvcHBlZFxuICAgICAgICAgICAgICAgICAgICB3aXRoIGZyZXNoIHZlZ2V0YWJsZXMgYW5kIG1lbHRlZCBjaGVlc2UsIHNlcnZlZCBpbiBhXG4gICAgICAgICAgICAgICAgICAgIHJ1c3RpYyBidW4gZm9yIGEgcm9idXN0IGFuZCBzYXRpc2Z5aW5nIGV4cGVyaWVuY2UuYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAwcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogYnVyZ2VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBidXJnZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGJ1cmdlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdEl0ZW1UaHJlZToge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0N1cnJpZWQgQ2hpY2tlbiBTYWxhZCB3aXRoIE1hbmdvJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBBIHJlZnJlc2hpbmcgbWl4IG9mIHRlbmRlciBjdXJyaWVkIGNoaWNrZW4gYW5kIHN3ZWV0XG4gICAgICAgICAgICAgICAgICAgIG1hbmdvIHNsaWNlcywgdG9zc2VkIHdpdGggdmlicmFudCBncmVlbnMgZm9yIGEgbGlnaHQgeWV0XG4gICAgICAgICAgICAgICAgICAgIGZsYXZvcmZ1bCBzYWxhZC5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBjaGlja2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBjaGlja2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBjaGlja2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbUZvdXI6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBNZWF0IExvdmVycycgU2hlZXQgUGFuIFBpenphYCxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBMb2FkZWQgd2l0aCBhbiBhc3NvcnRtZW50IG9mIG1lYXRzIGxpa2UgcGVwcGVyb25pLFxuICAgICAgICAgICAgICAgICAgICBzYXVzYWdlLCBhbmQgYmFjb24sIHRoaXMgcGl6emEgb2ZmZXJzIGEgY2Fybml2b3JlJ3NcbiAgICAgICAgICAgICAgICAgICAgZGVsaWdodCB3aXRoIGV2ZXJ5IGNyaXNweSwgY2hlZXN5IGJpdGUuYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAwcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogcGl6emEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHBpenphLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwaXp6YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdEl0ZW1GaXZlOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgUHVycGxlIENvcm4gVG9zdGFkYWAsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnNTbigqwnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFyYWdyYXBoOiBgQSBmZWFzdCBmb3IgdGhlIGV5ZXMgYW5kIHRoZSBwYWxhdGUsIHRoaXMgdG9zdGFkYSB1c2VzIGFcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlIHB1cnBsZSBjb3JuIHNoZWxsLCBwaWxlZCBoaWdoIHdpdGggc2Vhc29uZWQgbWVhdHNcbiAgICAgICAgICAgICAgICAgICAgYW5kIGZyZXNoIHRvcHBpbmdzIGZvciBhIGNydW5jaHksIHNhdm9yeSB0cmVhdC5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiB0b3N0YWRhLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiB0b3N0YWRhLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB0b3N0YWRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbVNpeDoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYFByaWNrbHkgUGVhciBQb3JrIFNhdWNlYCxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBBbiBpbm5vdmF0aXZlIGZ1c2lvbiwgdGhpcyBzYXVjZSBibGVuZHMgdGhlIHN3ZWV0bmVzcyBvZlxuICAgICAgICAgICAgICAgICAgICBwcmlja2x5IHBlYXIgd2l0aCByaWNoIHBvcmssIGNyZWF0aW5nIGEgcGVyZmVjdFxuICAgICAgICAgICAgICAgICAgICBjb21wbGVtZW50IHRvIGVuaGFuY2UgYW55IGdvdXJtZXQgZGlzaC5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBzYXVjZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogc2F1Y2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHNhdWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbl07XG4iLCIvLyBJbXBvcnRpbmcgaG9tZSBjb250ZW50cyBkYXRhIGZyb20gY29udGFjdHNDb250ZW50cyBtb2R1bGVcbmltcG9ydCB7IGNvbnRhY3RzQ29udGVudHMgfSBmcm9tICcuLi9wYWdlRGF0YS9jb250YWN0c0NvbnRlbnQuanMnO1xuXG4vLyBJbXBvcnRpbmcgdXRpbGl0eSBmdW5jdGlvbnMgZnJvbSB0aGUgJ2VsZW1lbnRSZW5kZXInIG1vZHVsZS4gVGhlc2UgZnVuY3Rpb25zIGFyZSB1c2VkXG4vLyBmb3IgY3JlYXRpbmcgdmFyaW91cyBIVE1MIGVsZW1lbnRzIGR5bmFtaWNhbGx5XG5pbXBvcnQge1xuICAgIGNyZWF0ZVNlY3Rpb24sXG4gICAgY3JlYXRlRGl2LFxuICAgIGNyZWF0ZVBpY3R1cmUsXG4gICAgY3JlYXRlTGlzdCxcbiAgICBjcmVhdGVMaXN0SXRlbSxcbiAgICBjcmVhdGVTcGFuLFxuICAgIGNsZWFyUGFnZSxcbiAgICBjcmVhdGVMaW5rLFxuICAgIGNyZWF0ZVRpdGxlLFxuICAgIGNyZWF0ZVBhcmFncmFwaCxcbiAgICBjcmVhdGVUb3BwZXIsXG59IGZyb20gJy4uL3V0aWxpdHkvZWxlbWVudFJlbmRlci5qcyc7XG5cbi8qKlxuICogTG9hZHMgYW5kIGRpc3BsYXlzIHRoZSBjb250YWN0cyBwYWdlIGNvbnRlbnQuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50IC0gVGhlIHBhcmVudCBlbGVtZW50IHdoZXJlIHRoZSBjb250YWN0cyBwYWdlIHdpbGwgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RzUGFnZUxvYWRlcihjb250ZW50KSB7XG4gICAgY2xlYXJQYWdlKGNvbnRlbnQpOyAvLyBDbGVhciBleGlzdGluZyBjb250ZW50LlxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIHNlY3Rpb24gZm9yIGNvbnRhY3RzIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGNvbnRlbnQgYXJlYS5cbiAgICBjb25zdCBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbignaWQnLCAnY29udGFjdC1zdHJpcC0zMjQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgLy8gUmVuZGVyIGFuZCBhcHBlbmQgdGhlIGNvbnRhaW5lciBmb3IgdGhlIGNvbnRhY3RzIGNvbnRlbnQuXG4gICAgY29uc3QgY29udGFpbmVyID0gcmVuZGVyQ29udGFpbmVyKCk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgYSBsaXN0IG9mIGNvbnRhY3QgY2FyZHMgdG8gdGhlIGNvbnRhaW5lciB1c2luZyBkYXRhIGZyb20gY29udGFjdHNDb250ZW50cy5cbiAgICBjb25zdCBjYXJkR3JvdXAgPSBjb250YWN0c0NvbnRlbnRzWzBdLmNhcmRHcm91cDtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXN0YXQtZ3JvdXAnLFxuICAgICAgICBPYmplY3QudmFsdWVzKGNhcmRHcm91cCksXG4gICAgICAgIHJlbmRlckNvbnRhY3RJdGVtXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgcHJpbWFyeSBjb250YWluZXIgZm9yIHRoZSBjb250YWN0cyBwYWdlLlxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjb250YWluZXIgZGl2IGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gUmVuZGVyIGFuZCBhcHBlbmQgdGhlIGNvbnRlbnQgc2VjdGlvbiB3aXRoIHRpdGxlIGFuZCBwYXJhZ3JhcGggdG8gdGhlIGNvbnRhaW5lci5cbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyQ29udGVudCgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBzZWN0aW9uIHdpdGggdGl0bGUsIHRvcHBlciwgYW5kIHBhcmFncmFwaC5cbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gLSBUaGUgY29udGVudCBzZWN0aW9uIGRpdiBlbGVtZW50LlxuICovXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGl0bGUnLFxuICAgICAgICBjb250YWN0c0NvbnRlbnRzWzBdLmNvbnRlbnRzLnRpdGxlXG4gICAgKTtcbiAgICBjb25zdCB0b3BwZXIgPSBjcmVhdGVUb3BwZXIoXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjcy10b3BwZXInLFxuICAgICAgICBjb250YWN0c0NvbnRlbnRzWzBdLmNvbnRlbnRzLnRvcHBlclxuICAgICk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGV4dCcsXG4gICAgICAgIGNvbnRhY3RzQ29udGVudHNbMF0uY29udGVudHMucGFyYWdyYXBoXG4gICAgKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wcGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIGFuIGluZGl2aWR1YWwgY29udGFjdCBpdGVtIGFzIGEgbGlzdCBpdGVtLlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgY29udGFjdCBpdGVtLlxuICogQHJldHVybnMge0hUTUxMSUVsZW1lbnR9IC0gVGhlIGxpc3QgaXRlbSBlbGVtZW50IHdpdGggY29udGFjdCBpbmZvcm1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGFjdEl0ZW0oaXRlbURhdGEpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtaXRlbScsXG4gICAgICAgIGl0ZW1EYXRhLFxuICAgICAgICByZW5kZXJMaXN0SXRlbUNvbnRlbnRcbiAgICApO1xuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IGZvciBhIGNvbnRhY3QgbGlzdCBpdGVtLlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgY29udGFjdCBpdGVtLlxuICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9IC0gVGhlIGZyYWdtZW50IGNvbnRhaW5pbmcgY29udGFjdCBpdGVtIGNvbnRlbnQuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3RJdGVtQ29udGVudChpdGVtRGF0YSkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHBpY3R1cmUgPSBjcmVhdGVQaWN0dXJlKCdjbGFzcycsICdjcy1waWN0dXJlJywgaXRlbURhdGEucGljdHVyZSk7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGNyZWF0ZURpdignY2xhc3MnLCAnY3MtZmxleC1ncm91cCcpO1xuXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtaGVhZGVyJywgaXRlbURhdGEuaW5mby5oZWFkZXIpXG4gICAgKTtcbiAgICBhcHBlbmRDb250YWN0SW5mbyhpbmZvQ29udGFpbmVyLCBpdGVtRGF0YS5pbmZvKTtcblxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgc3BlY2lmaWMgY29udGFjdCBkZXRhaWxzIHRvIGEgY29udGFpbmVyIGJhc2VkIG9uIHRoZSBpdGVtIHR5cGUgKHBob25lLCBlbWFpbCwgZXRjLikuXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBjb250YWluZXIgLSBUaGUgY29udGFpbmVyIHRvIHdoaWNoIGFkZGl0aW9uYWwgaW5mbyB3aWxsIGJlIGFwcGVuZGVkLlxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gLSBUaGUgc3BlY2lmaWMgY29udGFjdCBpbmZvcm1hdGlvbiBkYXRhLlxuICovXG5mdW5jdGlvbiBhcHBlbmRDb250YWN0SW5mbyhjb250YWluZXIsIGluZm8pIHtcbiAgICAvLyBMb2dpYyB0byBhcHBlbmQgdmFyaW91cyB0eXBlcyBvZiBjb250YWN0IGluZm9ybWF0aW9uLlxuICAgIGlmIChpbmZvLnBob25lTnJPbmUpIHtcbiAgICAgICAgY29uc3QgcGhvbmVMaW5rT25lID0gY3JlYXRlTGluayhcbiAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgIGluZm8uaHJlZixcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLnBob25lTnJPbmVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcGhvbmVMaW5rVHdvID0gY3JlYXRlTGluayhcbiAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgIGluZm8uaHJlZixcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLnBob25lTnJUd29cbiAgICAgICAgKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTGlua09uZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZUxpbmtUd28pO1xuICAgIH0gZWxzZSBpZiAoaW5mby5lbWFpbCkge1xuICAgICAgICBjb25zdCBlbWFpbExpbmsgPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgYG1haWx0bzoke2luZm8uZW1haWx9YCxcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLmVtYWlsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbExpbmspO1xuICAgIH0gZWxzZSBpZiAoaW5mby5hZGRyZXNzKSB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NMaW5rID0gY3JlYXRlTGluayhcbiAgICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAgIGluZm8uaHJlZixcbiAgICAgICAgICAgICdjbGFzcycsXG4gICAgICAgICAgICAnY3MtbGluaycsXG4gICAgICAgICAgICBpbmZvLmFkZHJlc3NcbiAgICAgICAgKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NMaW5rKTtcbiAgICB9IGVsc2UgaWYgKGluZm8uZGF5cykge1xuICAgICAgICBjb25zdCBkYXlzU3BhbiA9IGNyZWF0ZVNwYW4oJ2NsYXNzJywgJ2NzLWhvdXJzJywgaW5mby5kYXlzKTtcbiAgICAgICAgY29uc3QgaG91cnNTcGFuID0gY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtaG91cnMnLCBpbmZvLmhvdXJzKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRheXNTcGFuKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzU3Bhbik7XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0aW5nIGhvbWUgY29udGVudHMgZGF0YSBmcm9tIGhvbWVDb250ZW50cyBtb2R1bGVcbmltcG9ydCB7IGhvbWVDb250ZW50cyB9IGZyb20gJy4uL3BhZ2VEYXRhL2hvbWVDb250ZW50cy5qcyc7XG5cbi8vIEltcG9ydGluZyB1dGlsaXR5IGZ1bmN0aW9ucyBmcm9tIHRoZSAnZWxlbWVudFJlbmRlcicgbW9kdWxlLiBUaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWRcbi8vIGZvciBjcmVhdGluZyB2YXJpb3VzIEhUTUwgZWxlbWVudHMgZHluYW1pY2FsbHlcbmltcG9ydCB7XG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlUGljdHVyZSxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGNyZWF0ZUxpc3RJdGVtLFxuICAgIGNyZWF0ZVNwYW4sXG4gICAgY3JlYXRlVG9wcGVyLFxuICAgIGNyZWF0ZVRpdGxlLFxuICAgIGNyZWF0ZVBhcmFncmFwaCxcbiAgICBjbGVhclBhZ2UsXG59IGZyb20gJy4uL3V0aWxpdHkvZWxlbWVudFJlbmRlci5qcyc7XG5cbi8vIEV4dHJhY3RpbmcgdGhlIGZpcnN0IGl0ZW0gZnJvbSBob21lIGNvbnRlbnRzIHRvIHVzZSBhcyBob21lIHBhZ2UgY29udGVudFxuY29uc3QgSE9NRV9QQUdFX0NPTlRFTlRTID0gaG9tZUNvbnRlbnRzWzBdO1xuXG4vLyBPYmplY3QgbWFwcGluZyBjb21tb24gYXR0cmlidXRlIG5hbWVzIHRvIHRoZWlyIHJlc3BlY3RpdmUgc3RyaW5nIHJlcHJlc2VudGF0aW9uc1xuY29uc3QgYXR0cmlidXRlTmFtZSA9IHsgaWQ6ICdpZCcsIGNsYXNzOiAnY2xhc3MnIH07XG5cbi8qKlxuICogTG9hZHMgYW5kIGRpc3BsYXlzIHRoZSBob21lIHBhZ2UgY29udGVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZUxvYWRlcihjb250ZW50KSB7XG4gICAgY2xlYXJQYWdlKGNvbnRlbnQpO1xuXG4gICAgLy8gU2VsZWN0IHRoZSBtYWluIGNvbnRlbnQgYXJlYSBpbiB0aGUgRE9NXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIG1haW4gc2VjdGlvbiBhbmQgY29udGVudCBkaXZcbiAgICBjb25zdCBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbihhdHRyaWJ1dGVOYW1lLmlkLCAnaG9tZS1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gY3JlYXRlRGl2KGF0dHJpYnV0ZU5hbWUuY2xhc3MsICdob21lLWNvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcblxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIGxlZnQgYW5kIHJpZ2h0IGNvbnRlbnQgc2VjdGlvbnNcbiAgICBjb25zdCBjb250ZW50TGVmdCA9IHJlbmRlckNvbnRlbnRMZWZ0KCk7XG4gICAgY29uc3QgY29udGVudFJpZ2h0ID0gcmVuZGVyQ29udGVudFJpZ2h0KCk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudExlZnQpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRSaWdodCk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgbGVmdCBzZWN0aW9uIG9mIHRoZSBob21lIHBhZ2UgY29udGVudCBpbmNsdWRpbmcgaW1hZ2UgYW5kIHN0YXRzXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnRMZWZ0KCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZWZ0ID0gY3JlYXRlRGl2KGF0dHJpYnV0ZU5hbWUuY2xhc3MsICdob21lLWNvbnRlbnQtbGVmdCcpO1xuICAgIGNvbnN0IGxlZnRJbWFnZSA9IGNyZWF0ZVBpY3R1cmUoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy1waWN0dXJlIGNzLXBpY3R1cmUtbGVmdCcsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5pbWFnZUxlZnRcbiAgICApO1xuICAgIGNvbnN0IHN0YXRzTGlzdCA9IGNyZWF0ZUxpc3QoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy1zdGF0cycsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5zdGF0cyxcbiAgICAgICAgKGl0ZW1EYXRhKSA9PlxuICAgICAgICAgICAgY3JlYXRlTGlzdEl0ZW0oXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgICAgICAgICAnY3Mtc3RhdCcsXG4gICAgICAgICAgICAgICAgaXRlbURhdGEsXG4gICAgICAgICAgICAgICAgcmVuZGVyTGlzdEl0ZW1Db250ZW50XG4gICAgICAgICAgICApXG4gICAgKTtcblxuICAgIGNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKGxlZnRJbWFnZSk7XG4gICAgY29udGVudExlZnQuYXBwZW5kQ2hpbGQoc3RhdHNMaXN0KTtcblxuICAgIHJldHVybiBjb250ZW50TGVmdDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IG9mIGEgc3RhdGlzdGljcyBpdGVtIGZvciBkaXNwbGF5IGluIGEgbGlzdCBpdGVtXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYW5kIHJldHVybnMgYSBkb2N1bWVudCBmcmFnbWVudCBjb250YWluaW5nIHRoZSBzdGF0J3MgbnVtYmVyIGFuZCBkZXNjcmlwdGlvblxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gVGhlIHN0YXRpc3RpY3MgZGF0YSBpdGVtLCBleHBlY3RlZCB0byBoYXZlICdudW0nIGFuZCAndGV4dCcgcHJvcGVydGllc1xuICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9IC0gVGhlIGRvY3VtZW50IGZyYWdtZW50IGNvbnRhaW5pbmcgdGhlIHJlbmRlcmVkIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyTGlzdEl0ZW1Db250ZW50KGl0ZW1EYXRhKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBudW1iZXJTcGFuID0gY3JlYXRlU3BhbihcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLW51bWJlcicsXG4gICAgICAgIGl0ZW1EYXRhLm51bVxuICAgICk7XG4gICAgY29uc3QgdGV4dFNwYW4gPSBjcmVhdGVTcGFuKGF0dHJpYnV0ZU5hbWUuY2xhc3MsICdjcy1kZXNjJywgaXRlbURhdGEudGV4dCk7XG5cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChudW1iZXJTcGFuKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgcmlnaHQgc2VjdGlvbiBvZiB0aGUgaG9tZSBwYWdlIGNvbnRlbnQgaW5jbHVkaW5nIHRvcHBlciwgdGl0bGUsIHBhcmFncmFwaCwgYW5kIGltYWdlXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgcmlnaHQgY29udGVudCBzZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnRSaWdodCgpIHtcbiAgICBjb25zdCBjb250ZW50UmlnaHQgPSBjcmVhdGVEaXYoYXR0cmlidXRlTmFtZS5jbGFzcywgJ2hvbWUtY29udGVudC1yaWdodCcpO1xuICAgIGNvbnN0IHRvcHBlciA9IGNyZWF0ZVRvcHBlcihcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXRvcHBlcicsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5jb250ZW50LnRvcHBlclxuICAgICk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXRpdGxlJyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLmNvbnRlbnQudGl0bGVcbiAgICApO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXRleHQnLFxuICAgICAgICBIT01FX1BBR0VfQ09OVEVOVFMuY29udGVudC5wYXJhZ3JhcGhcbiAgICApO1xuICAgIGNvbnN0IHJpZ2h0SW1hZ2UgPSBjcmVhdGVQaWN0dXJlKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3MtcGljdHVyZSBjcy1waWN0dXJlLXJpZ2h0JyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLmltYWdlUmlnaHRcbiAgICApO1xuXG4gICAgY29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRvcHBlcik7XG4gICAgY29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50UmlnaHQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICBjb250ZW50UmlnaHQuYXBwZW5kQ2hpbGQocmlnaHRJbWFnZSk7XG5cbiAgICByZXR1cm4gY29udGVudFJpZ2h0O1xufVxuIiwiLy8gSW1wb3J0aW5nIG1lbnUgY29udGVudHMgZGF0YSBmb3JtIG1lbnVDb250ZW50cyBtb2R1bGVcbmltcG9ydCB7IG1lbnVDb250ZW50cyB9IGZyb20gJy4uL3BhZ2VEYXRhL21lbnVDb250ZW50LmpzJztcblxuLy8gSW1wb3J0aW5nIHV0aWxpdHkgZnVuY3Rpb25zIGZyb20gdGhlICdlbGVtZW50UmVuZGVyZXInIG1vZHVsZS4gVGhlc2UgZnVuY3Rpb25zIGFyZSB1c2VkXG4vLyBmb3IgY3JlYXRpbmcgdmFyaW91cyBIVE1MIGVsZW1lbnRzIGR5bmFtaWNhbGx5XG5pbXBvcnQge1xuICAgIGNyZWF0ZVNlY3Rpb24sXG4gICAgY3JlYXRlRGl2LFxuICAgIGNyZWF0ZVBpY3R1cmUsXG4gICAgY3JlYXRlTGlzdCxcbiAgICBjcmVhdGVMaXN0SXRlbSxcbiAgICBjcmVhdGVTcGFuLFxuICAgIGNyZWF0ZVRpdGxlLFxuICAgIGNyZWF0ZVBhcmFncmFwaCxcbiAgICBjbGVhclBhZ2UsXG59IGZyb20gJy4uL3V0aWxpdHkvZWxlbWVudFJlbmRlci5qcyc7XG5cbi8vIEV4dHJhY3RpbmcgdGhlIGZpcnN0IGl0ZW0gZnJvbSBtZW51IGNvbnRlbnRzIHRvIHVzZSBhcyBtZW51IHBhZ2UgY29udGVudFxuY29uc3QgTUVOVV9QQUdFX0NPTlRFTlRTID0gbWVudUNvbnRlbnRzWzBdO1xuXG4vKipcbiAqIE1haW4gZnVuY3Rpb24gdG8gbG9hZCBhbmQgZGlzcGxheSB0aGUgbWVudSBwYWdlIGNvbnRlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2VMb2FkZXIoY29udGVudCkge1xuICAgIGNsZWFyUGFnZShjb250ZW50KTtcblxuICAgIC8vIFNlbGVjdCB0aGUgbWFpbiBjb250ZW50IGFyZWEgb2YgdGhlIERPTVxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gY29udGVudDtcblxuICAgIC8vIENyZWF0ZSBhIHNlY3Rpb24gZm9yIHRoZSBtZW51IGFuZCBhcHBlbmQgaXQgdG8gdGhlIG1haW4gY29udGVudFxuICAgIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCdpZCcsICdtZW51LTEwMDUnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICAgIC8vIFJlbmRlciB0aGUgY29udGFpbmVyIHRoYXQgaG9sZHMgdGhlIG1lbnUncyBjb250ZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNlY3Rpb25cbiAgICBjb25zdCBjb250YWluZXIgPSByZW5kZXJDb250YWluZXIoKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgcHJpbWFyeSBjb250YWluZXIgZm9yIHRoZSBtZW51IHBhZ2VcbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gLSBUaGUgY29udGFpbmVyIGRpdiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJDb250ZW50KCk7XG4gICAgY29uc3QgY2FyZEdyb3VwQ29udGVudCA9IHJlbmRlckNhcmRHcm91cCgpO1xuICAgIGNvbnN0IHJlc2VydmVCdXR0b24gPSBjcmVhdGVSZXNlcnZlQnV0dG9uKCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRHcm91cENvbnRlbnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNlcnZlQnV0dG9uKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBzZWN0aW9uIHdpdGggdGl0bGUgYW5kIHBhcmFncmFwaFxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjb250ZW50IHNlY3Rpb24gZGl2IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRGl2KCdjbGFzcycsICdjcy1jb250ZW50Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXRpdGxlJyxcbiAgICAgICAgTUVOVV9QQUdFX0NPTlRFTlRTLmNvbnRlbnQudGl0bGVcbiAgICApO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXRleHQnLFxuICAgICAgICBNRU5VX1BBR0VfQ09OVEVOVFMuY29udGVudC5wYXJhZ3JhcGhcbiAgICApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgYSBncm91cCBvZiBjYXJkcyByZXByZXNlbnRpbmcgbWVudSBpdGVtc1xuICogQHJldHVybnMge0hUTUxVTGlzdEVsZW1lbnR9IC0gVGhlIGNhcmQgZ3JvdXAgbGlzdCBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNhcmRHcm91cCgpIHtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLWNhcmQtZ3JvdXAnLFxuICAgICAgICBNRU5VX1BBR0VfQ09OVEVOVFMuY2FyZEdyb3VwLFxuICAgICAgICAoaXRlbURhdGEpID0+XG4gICAgICAgICAgICBjcmVhdGVMaXN0SXRlbSgnY2xhc3MnLCAnY3MtaXRlbScsIGl0ZW1EYXRhLCByZW5kZXJMaXN0SXRlbUNvbnRlbnQpXG4gICAgKTtcblxuICAgIHJldHVybiBsaXN0O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNvbnRlbnQgZm9yIGFuIGluZGl2aWR1YWwgbGlzdCBpdGVtIGluIHRoZSBjYXJkIGdyb3VwXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBtZW51IGl0ZW1cbiAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fSAtIFRoZSBmcmFnbWVudCBjb250YWluaW5nIHRoZSBsaXN0IGl0ZW0gY29udGVudFxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0SXRlbUNvbnRlbnQoaXRlbURhdGEpIHtcbiAgICAvLyBDcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBpdGVtIGNvbnRlbnRcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBwaWN0dXJlID0gY3JlYXRlUGljdHVyZSgnY2xhc3MnLCAnY3MtcGljdHVyZScsIGl0ZW1EYXRhLnBpY3R1cmUpO1xuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSByZW5kZXJJbmZvQ29udGFpbmVyKGl0ZW1EYXRhKTtcblxuICAgIHBpY3R1cmUuc2V0QXR0cmlidXRlKCdhcmVhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocGljdHVyZSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgaW5mb3JtYXRpb24gY29udGFpbmVyIGZvciBhIG1lbnUgaXRlbVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgbWVudSBpdGVtXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGluZm8gY29udGFpbmVyIGRpdiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckluZm9Db250YWluZXIoaXRlbURhdGEpIHtcbiAgICBjb25zdCBpbmZvID0gY3JlYXRlRGl2KCdjbGFzcycsICdjcy1pbmZvJyk7XG4gICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9IHJlbmRlckhlYWRpbmdDb250YWluZXIoaXRlbURhdGEpO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLWl0ZW0tcCcsXG4gICAgICAgIGl0ZW1EYXRhLmluZm8uaXRlbVBhcmFncmFwaFxuICAgICk7XG5cbiAgICBpbmZvLmFwcGVuZENoaWxkKGhlYWRpbmdDb250YWluZXIpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGhlYWRpbmcgY29udGFpbmVyIGZvciBhIG1lbnUgaXRlbVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSBmb3IgYSBzaW5nbGUgbWVudSBpdGVtXG4gKiBAcmV0dXJucyB7SFRNTEhlYWRpbmdFbGVtZW50fSAtIFRoZSBoZWFkaW5nIGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckhlYWRpbmdDb250YWluZXIoaXRlbURhdGEpIHtcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB0ZXh0U3BhbiA9IGNyZWF0ZVNwYW4oJ2NsYXNzJywgJ2NzLW5hbWUnLCBpdGVtRGF0YS5pbmZvLm5hbWUpO1xuICAgIGNvbnN0IG51bWJlclNwYW4gPSBjcmVhdGVTcGFuKCdjbGFzcycsICdjcy1wcmljZScsIGl0ZW1EYXRhLmluZm8ucHJpY2UpO1xuXG4gICAgaGVhZGluZ0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NzLWgzJyk7XG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG4gICAgaGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXJTcGFuKTtcblxuICAgIHJldHVybiBoZWFkaW5nQ29udGFpbmVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBidXR0b24gZm9yIHJlc2VydmluZyBhIHRhYmxlXG4gKiBAcmV0dXJucyB7SFRNTEFuY2hvckVsZW1lbnR9IC0gVGhlIHJlc2VydmUgYnV0dG9uIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVzZXJ2ZUJ1dHRvbigpIHtcbiAgICBjb25zdCByZXNlcnZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgcmVzZXJ2ZUJ1dHRvbi5pbm5lclRleHQgPSAnUmVzZXJ2ZSBZb3VyIFRhYmxlJztcbiAgICByZXNlcnZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsICcnKTtcbiAgICByZXNlcnZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3MtYnV0dG9uLXNvbGlkJyk7XG5cbiAgICByZXR1cm4gcmVzZXJ2ZUJ1dHRvbjtcbn1cbiIsIi8vXG4vLyAgICBUaGUgRGFyayBNb2RlIFN5c3RlbVxuLy9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGFya01vZGVUb2dnbGVyKCkge1xuICAgIC8vIGhlbHBlciBmdW5jdGlvbnMgdG8gdG9nZ2xlIGRhcmsgbW9kZVxuICAgIGZ1bmN0aW9uIGVuYWJsZURhcmtNb2RlKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNhYmxlRGFya01vZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgIH1cblxuICAgIC8vIGRldGVybWluZXMgYSBuZXcgdXNlcnMgZGFyayBtb2RlIHByZWZlcmVuY2VzXG4gICAgZnVuY3Rpb24gZGV0ZWN0Q29sb3JTY2hlbWUoKSB7XG4gICAgICAgIC8vIGRlZmF1bHQgdG8gdGhlIGxpZ2h0IHRoZW1lXG4gICAgICAgIGxldCB0aGVtZSA9ICdsaWdodCc7XG5cbiAgICAgICAgLy8gY2hlY2sgbG9jYWxTdG9yYWdlIGZvciBhIHNhdmVkICd0aGVtZScgdmFyaWFibGUuIGlmIGl0J3MgdGhlcmUsIHRoZSB1c2VyIGhhcyB2aXNpdGVkIGJlZm9yZSwgc28gYXBwbHkgdGhlIG5lY2Vzc2FyeSB0aGVtZSBjaG9pY2VzXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgICAgICAgICAgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdCdzIG5vdCB0aGVyZSwgY2hlY2sgdG8gc2VlIGlmIHRoZSB1c2VyIGhhcyBhcHBsaWVkIGRhcmsgbW9kZSBwcmVmZXJlbmNlcyB0aGVtc2VsdmVzIGluIHRoZSBicm93c2VyXG4gICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlc1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoZW1lID0gJ2RhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gcHJlZmVyZW5jZSBzZXQsIHRoZSBkZWZhdWx0IG9mIGxpZ2h0IHdpbGwgYmUgdXNlZC4gYXBwbHkgYWNjb3JkaW5nbHlcbiAgICAgICAgdGhlbWUgPT09ICdkYXJrJyA/IGVuYWJsZURhcmtNb2RlKCkgOiBkaXNhYmxlRGFya01vZGUoKTtcbiAgICB9XG5cbiAgICAvLyBydW4gb24gcGFnZSBsb2FkXG4gICAgZGV0ZWN0Q29sb3JTY2hlbWUoKTtcblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgZGFyayBtb2RlIGJ1dHRvbiB0b2dnbGVcbiAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZS10b2dnbGUnKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBvbiBjbGljaywgY2hlY2sgbG9jYWxTdG9yYWdlIGZvciB0aGUgZGFyayBtb2RlIHZhbHVlLCB1c2UgdG8gYXBwbHkgdGhlIG9wcG9zaXRlIG9mIHdoYXQncyBzYXZlZFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdsaWdodCdcbiAgICAgICAgICAgICAgICA/IGVuYWJsZURhcmtNb2RlKClcbiAgICAgICAgICAgICAgICA6IGRpc2FibGVEYXJrTW9kZSgpO1xuICAgICAgICB9KTtcbn1cbiIsIi8qKlxuICogQ3JlYXRlcyBhIHNlY3Rpb24gSFRNTCBlbGVtZW50IHdpdGggc3BlY2lmaWVkIGF0dHJpYnV0ZSBhbmQgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHNlY3Rpb24gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIHJldHVybiBzZWN0aW9uO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkaXYgSFRNTCBlbGVtZW50IHdpdGggYSBzcGVjaWZpZWQgYXR0cmlidXRlIG5hbWUgYW5kIHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gLSBUaGUgY3JlYXRlZCBkaXYgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGljdHVyZSBlbGVtZW50IHdpdGggcHJvdmlkZWQgYXR0cmlidXRlcyBhbmQgc291cmNlc1xuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtvYmplY3R9IGltYWdlU291cmNlcyAtIE9iamVjdCBjb250YWluaW5nIHBpY3R1cmUgc291cmNlcyBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplc1xuICogQHJldHVybnMge0hUTUxQaWN0dXJlRWxlbWVudH0gLSBUaGUgY3JlYXRlZCBwaWN0dXJlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBpY3R1cmUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIGltYWdlU291cmNlcykge1xuICAgIGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XG4gICAgcGljdHVyZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuXG4gICAgT2JqZWN0LmtleXMoaW1hZ2VTb3VyY2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2ltZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhpbWcsIGltYWdlU291cmNlc1trZXldKTtcbiAgICAgICAgICAgIHBpY3R1cmUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhzb3VyY2UsIGltYWdlU291cmNlc1trZXldKTtcbiAgICAgICAgICAgIHBpY3R1cmUuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBpY3R1cmU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpc3QgKHVsKSBlbGVtZW50IHdpdGggcHJvdmlkZWQgYXR0cmlidXRlcy4gVGhlIGxpc3QgaXRlbXMgYXJlIGNyZWF0ZWQgdXNpbmcgYSByZW5kZXJpbmcgZXhwb3J0IGZ1bmN0aW9uIHBhc3NlZCBhcyBhbiBhcmd1bWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjbGFzcycpXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NzLXN0YXRzJylcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtRGF0YSAtIERhdGEgdG8gcG9wdWxhdGUgdGhlIGxpc3Qgd2l0aC4gRXhwZWN0cyBhbiBvYmplY3Qgd2hlcmUgZWFjaCBwcm9wZXJ0eSBjYW4gYmUgcmVuZGVyZWQgYXMgYSBsaXN0IGl0ZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlckl0ZW0gLSBleHBvcnQgZnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBpdGVtIG9mIGRhdGEgYW5kIHJldHVybnMgYSBsaXN0IGl0ZW0gKGxpKSBlbGVtZW50XG4gKiBAcmV0dXJucyB7SFRNTFVMaXN0RWxlbWVudH0gLSBUaGUgY3JlYXRlZCB1bm9yZGVyZWQgbGlzdCBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KFxuICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgYXR0cmlidXRlVmFsdWUsXG4gICAgaXRlbURhdGEsXG4gICAgcmVuZGVySXRlbVxuKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlzdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGl0ZW1EYXRhKSB7XG4gICAgICAgIGlmIChpdGVtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKHJlbmRlckl0ZW0oaXRlbURhdGFba2V5XSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpc3QgaXRlbSAobGkpIGVsZW1lbnQgdXNpbmcgYSBwcm92aWRlZCByZW5kZXJpbmcgZXhwb3J0IGZ1bmN0aW9uIGZvciB0aGUgaXRlbSdzIGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjcy1zdGF0JylcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIC0gRGF0YSBpdGVtIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgbGlzdCBpdGVtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJDb250ZW50IC0gZXhwb3J0IGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIGl0ZW0gYW5kIHJldHVybnMgdGhlIGNvbnRlbnQgdG8gYmUgcGxhY2VkIGluc2lkZSB0aGUgbGlzdCBpdGVtXG4gKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH0gLSBUaGUgY3JlYXRlZCBsaXN0IGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKFxuICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgYXR0cmlidXRlVmFsdWUsXG4gICAgaXRlbSxcbiAgICByZW5kZXJDb250ZW50XG4pIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJDb250ZW50KGl0ZW0pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzcGFuIGVsZW1lbnQgd2l0aCBhIHNwZWNpZmllZCBjbGFzcyBhbmQgdGV4dCBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250ZW50IGZvciB0aGUgc3BhblxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHNwYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3BhbihhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgdGV4dCkge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHJldHVybiBzcGFuO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b3BwZXIgZWxlbWVudCAoc3Bhbikgd2l0aCBhIHNwZWNpZmllZCBjbGFzcyBhbmQgdGV4dCBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NsYXNzJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgY29udGVudCBmb3IgdGhlIHRvcHBlclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHRvcHBlciBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3BwZXIoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIHRleHQpIHtcbiAgICBjb25zdCB0b3BwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9wcGVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgdG9wcGVyLmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICByZXR1cm4gdG9wcGVyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aXRsZSBlbGVtZW50IChoMikgd2l0aCBhIHNwZWNpZmllZCBjbGFzcyBhbmQgdGV4dCBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NsYXNzJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgY29udGVudCBmb3IgdGhlIHRpdGxlXG4gKiBAcmV0dXJucyB7SFRNTEhlYWRpbmdFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHRpdGxlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCB0ZXh0KSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJhZ3JhcGggZWxlbWVudCAocCkgd2l0aCBhIHNwZWNpZmllZCBjbGFzcyBhbmQgdGV4dCBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NsYXNzJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgY29udGVudCBmb3IgdGhlIHBhcmFncmFwaFxuICogQHJldHVybnMge0hUTUxQYXJhZ3JhcGhFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHBhcmFncmFwaCBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIHRleHQpIHtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYWdyYXBoLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBwYXJhZ3JhcGg7XG59XG5cbi8qKlxuICogU2V0cyBtdWx0aXBsZSBhdHRyaWJ1dGVzIG9uIGEgRE9NIGVsZW1lbnQgYmFzZWQgb24gYSBwcm92aWRlZCBvYmplY3RcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgRE9NIGVsZW1lbnQgdG8gc2V0IGF0dHJpYnV0ZXMgb25cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIC0gT2JqZWN0IGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXJzIGZvciBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIENsZWFycyB0aGUgY29udGVudCBvZiBhIHNwZWNpZmllZCBwYXJlbnQgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IC0gVGhlIHBhcmVudCBlbGVtZW50IHdob3NlIGNvbnRlbnQgaXMgdG8gYmUgY2xlYXJlZFxuICogQHJldHVybnMge2Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIHRvIGluZGljYXRlIHRoZSBvcGVyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUGFnZShwYXJlbnQpIHtcbiAgICBwYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGFjdGl2ZSBzdGF0ZSBiZXR3ZWVuIHR3byBidXR0b24gZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvbGRUYWIgLSBUaGUgSUQgb2YgdGhlIHByZXZpb3VzbHkgYWN0aXZlIHRhYi9idXR0b25cbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUYWIgLSBUaGUgSUQgb2YgdGhlIHRhYi9idXR0b24gdG8gYmUgYWN0aXZhdGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJldHVybnMgdGhlIElEIG9mIHRoZSBuZXdseSBhY3RpdmF0ZWQgdGFiL2J1dHRvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQnV0dG9uQ292ZXIob2xkVGFiLCBuZXdUYWIpIHtcbiAgICBsZXQgc2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke29sZFRhYn1gKTtcbiAgICBsZXQgaGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25ld1RhYn1gKTtcblxuICAgIHNob3cuY2xhc3NMaXN0LnJlbW92ZSgnY3MtYWN0aXZlJyk7XG4gICAgaGlkZS5jbGFzc0xpc3QuYWRkKCdjcy1hY3RpdmUnKTtcblxuICAgIHJldHVybiBuZXdUYWI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpbmsgKGFuY2hvcikgZWxlbWVudCB3aXRoIHNwZWNpZmllZCBhdHRyaWJ1dGVzIGFuZCB0ZXh0IGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXQgb24gdGhlIGxpbmsgKGUuZy4sICdocmVmJykuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBUaGUgdmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIGF0dHJpYnV0ZSBmb3IgdGhlIGxpbmsuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBsaW5rLlxuICogQHJldHVybnMge0hUTUxBbmNob3JFbGVtZW50fSAtIFRoZSBjcmVhdGVkIGFuY2hvciBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluayhocmVmLCBocmVmVmFsdWUsIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCB0ZXh0KSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShocmVmLCBocmVmVmFsdWUpO1xuICAgIGxpbmsuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKVxuICAgIHJldHVybiBsaW5rO1xufSIsIi8vIFNlbGVjdCBET00gZWxlbWVudHMgZm9yIG1vYmlsZSBuYXZpZ2F0aW9uXG52YXIgQ1Nib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgQ1NuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLW5hdmlnYXRpb24nKTtcbmNvbnN0IENTaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUnKTtcblxuLyoqXG4gKiBTZXRzIHVwIGV2ZW50IGxpc3RlbmVycyBmb3IgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9iaWxlTmF2aWdhdGlvblRvZ2dsaW5nKCkge1xuICAgIENTaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ1NoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICBDU25hdmJhck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY3MtYWN0aXZlJyk7XG4gICAgICAgIENTYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1vcGVuJyk7XG4gICAgICAgIC8vIHJ1biB0aGUgZnVuY3Rpb24gdG8gY2hlY2sgdGhlIGFyaWEtZXhwYW5kZWQgdmFsdWVcbiAgICAgICAgYXJpYUV4cGFuZGVkKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgYW5kIHRvZ2dsZXMgdGhlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUgb24gdGhlIG5hdmlnYXRpb24gbGlzdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFyaWFFeHBhbmRlZCgpIHtcbiAgICAgICAgY29uc3QgY3NVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1leHBhbmRlZCcpO1xuICAgICAgICBjb25zdCBjc0V4cGFuZGVkID0gY3NVTC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgdGhlICdhcmlhLWV4cGFuZGVkJyBhdHRyaWJ1dGUgYmFzZWQgb24gaXRzIGN1cnJlbnQgc3RhdGUuXG4gICAgICAgIGlmIChjc0V4cGFuZGVkID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICBjc1VMLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc1VMLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGNsaWNrIGV2ZW50IGxpc3RlbmVycyBmb3IgZHJvcGRvd24gaXRlbXMgaW4gdGhlIG1vYmlsZSBuYXZpZ2F0aW9uXG4gICAgY29uc3QgZHJvcERvd25zID0gQXJyYXkuZnJvbShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NzLW5hdmlnYXRpb24gLmNzLWRyb3Bkb3duJylcbiAgICApO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkcm9wRG93bnMpIHtcbiAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY3MtYWN0aXZlJyk7XG4gICAgICAgIH07XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=