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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateNavigationActiveState: () => (/* binding */ updateNavigationActiveState)
/* harmony export */ });
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_dark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/dark.css */ "./src/styles/dark.css");
/* harmony import */ var _modules_utility_darkMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/utility/darkMode.js */ "./src/modules/utility/darkMode.js");
/* harmony import */ var _modules_utility_mobileNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/utility/mobileNavigation.js */ "./src/modules/utility/mobileNavigation.js");
/* harmony import */ var _modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pageLoaders/homePageLoader.js */ "./src/modules/pageLoaders/homePageLoader.js");
/* harmony import */ var _modules_pageLoaders_menuPageLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pageLoaders/menuPageLoader.js */ "./src/modules/pageLoaders/menuPageLoader.js");
/* harmony import */ var _modules_pageLoaders_contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/pageLoaders/contactsPageLoader.js */ "./src/modules/pageLoaders/contactsPageLoader.js");
// Importing global, main, and dark mode CSS stylesheets




// Importing functionality modules



// Importing page loader functions




// Activate dark mode toggle functionality
(0,_modules_utility_darkMode_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

// Set up mobile navigation toggle functionality
(0,_modules_utility_mobileNavigation_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

// Global variables setup
let pageNames = ['home', 'menu', 'contacts'];
// let currentTab = pageNames[0];
let content = document.querySelector('#main-content');

// Load the initial home page content
(0,_modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(content);

/**
 * Set up click event listeners for tab navigation in the header
 * This allows switching between different pages (home, menu, contacts) and
 * ensures the appropriate content is loaded and displayed
 */
pageNames.forEach((pageName) => {
    const button = document.getElementById(pageName);
    button.addEventListener('click', () => {
        if (button.id == 'home') {
            (0,_modules_pageLoaders_homePageLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(content);
        } else if (button.id == 'menu') {
            (0,_modules_pageLoaders_menuPageLoader_js__WEBPACK_IMPORTED_MODULE_6__["default"])(content);
        } else {
            (0,_modules_pageLoaders_contactsPageLoader_js__WEBPACK_IMPORTED_MODULE_7__["default"])(content);
        }
        updateNavigationActiveState(pageName);
    });
});

/**
 * Updates the active state of navigation buttons
 * @param {string} activeButtonId - The ID of the navigation button to be marked as active
 */
function updateNavigationActiveState(activeButtonId) {
    // Navigation button IDs
    const navigationButtons = ['home', 'menu', 'contacts'];

    navigationButtons.forEach((buttonId) => {
        const buttonElement = document.getElementById(buttonId);
        if (buttonElement) {
            if (buttonId === activeButtonId) {
                buttonElement.classList.add('cs-active');
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
                    name: 'Curried Chicken Salad',
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
                    name: `Meat Lovers' Pizza`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sUUFBUSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlB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VyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QjtBQUNPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLG1CQUFtQjtBQUNoQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN01BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2RhcmsuY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZGFyay5jc3M/MjEyYyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlRGF0YS9jb250YWN0c0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlRGF0YS9ob21lQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlRGF0YS9tZW51Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkZXJzL2NvbnRhY3RzUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkZXJzL2hvbWVQYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWRlcnMvbWVudVBhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy91dGlsaXR5L2RhcmtNb2RlLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdXRpbGl0eS9tb2JpbGVOYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgIENvcmUgRGFyayBTdHlsZXMgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBNb2JpbGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1kYXJrOiAjMDgyMDMyO1xuICAgICAgICAtLW1lZGl1bTogIzJjMzk0YjtcbiAgICAgICAgLS1hY2NlbnQ6ICMzMzQ3NTY7XG4gICAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgcCxcbiAgICBib2R5LmRhcmstbW9kZSBsaSxcbiAgICBib2R5LmRhcmstbW9kZSBoMSxcbiAgICBib2R5LmRhcmstbW9kZSBoMixcbiAgICBib2R5LmRhcmstbW9kZSBoMyxcbiAgICBib2R5LmRhcmstbW9kZSBoNCxcbiAgICBib2R5LmRhcmstbW9kZSBoNSxcbiAgICBib2R5LmRhcmstbW9kZSBoNixcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGl0bGUsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRleHQsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWxpLFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1oMyxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtaXRlbS1wIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgLmxpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAuZGFyayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRhcmsge1xuICAgICAgICAvKiBjbGFzcyB1c2VkIHRvIGhpZGUgZWxlbWVudHMgdGhhdCBvbmx5IG5lZWQgdG8gYmUgc2VlbiB3aGVuIGRhcmsgbW9kZSBpcyBlbmFibGVkICovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICAgRGFyayBNb2RlIFRvZ2dsZSAgICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICByaWdodDogMy43NXJlbTtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXG4gICAgI2RhcmstbW9kZS10b2dnbGUgc3ZnIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjU2MjVyZW07XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXG4gICAgICAgICAgICBvcGFjaXR5IDAuM3MsXG4gICAgICAgICAgICBmaWxsIDAuM3M7XG4gICAgICAgIGZpbGw6ICMwMDA7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcztcbiAgICB9XG59XG5cbi8qIERlc2t0b3AgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMS44NzVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLm1vb24ge1xuICAgICAgICAvKiBjaGFuZ2UgdG8gd2hhdGV2ZXIgeW91IG5lZWQgKi9cbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RhcmsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztrQ0FFa0M7QUFDbEMsV0FBVztBQUNYO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7Ozs7Ozs7Ozs7Ozs7UUFhSSxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksb0ZBQW9GO1FBQ3BGLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7b0NBRW9DO0FBQ3BDLFdBQVc7QUFDWDtJQUNJO1FBQ0ksZ0NBQWdDO1FBQ2hDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUiwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBOztRQUVJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVjs7cUJBRWE7UUFDYixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVjt3QkFDZ0I7SUFDcEI7QUFDSjs7QUFFQSxZQUFZO0FBQ1o7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICBDb3JlIERhcmsgU3R5bGVzICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1kYXJrOiAjMDgyMDMyO1xcbiAgICAgICAgLS1tZWRpdW06ICMyYzM5NGI7XFxuICAgICAgICAtLWFjY2VudDogIzMzNDc1NjtcXG4gICAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHAsXFxuICAgIGJvZHkuZGFyay1tb2RlIGxpLFxcbiAgICBib2R5LmRhcmstbW9kZSBoMSxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDIsXFxuICAgIGJvZHkuZGFyay1tb2RlIGgzLFxcbiAgICBib2R5LmRhcmstbW9kZSBoNCxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDUsXFxuICAgIGJvZHkuZGFyay1tb2RlIGg2LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGl0bGUsXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtbGksXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1oMyxcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWl0ZW0tcCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAubGlnaHQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAuZGFyayB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5kYXJrIHtcXG4gICAgICAgIC8qIGNsYXNzIHVzZWQgdG8gaGlkZSBlbGVtZW50cyB0aGF0IG9ubHkgbmVlZCB0byBiZSBzZWVuIHdoZW4gZGFyayBtb2RlIGlzIGVuYWJsZWQgKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgICBEYXJrIE1vZGUgVG9nZ2xlICAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3MtbW9vbiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICByaWdodDogMy43NXJlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHN2ZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41NjI1cmVtO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcyxcXG4gICAgICAgICAgICBmaWxsIDAuM3M7XFxuICAgICAgICBmaWxsOiAjMDAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1zdW4ge1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcbn1cXG5cXG4vKiBEZXNrdG9wICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IGF1dG87XFxuICAgICAgICByaWdodDogYXV0bztcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjg3NXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5tb29uIHtcXG4gICAgICAgIC8qIGNoYW5nZSB0byB3aGF0ZXZlciB5b3UgbmVlZCAqL1xcbiAgICAgICAgZmlsbDogI2ZmZjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEdsb2JhbCBTdHlsZXMgYW5kIFZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICAgIC0tcHJpbWFyeTogI2ZmNmEzZTtcbiAgICAtLXByaW1hcnlMaWdodDogI2ZmYmE0MztcbiAgICAtLXNlY29uZGFyeTogI2ZmYmE0MztcbiAgICAtLXNlY29uZGFyeUxpZ2h0OiAjZmZiYTQzO1xuICAgIC0taGVhZGVyQ29sb3I6ICMxYTFhMWE7XG4gICAgLS1oZWFkZXJDb2xvckRhcms6ICMwODIwMzI7XG4gICAgLS1oZWFkZXJDb2xvck1lZGl1bTogIzJjMzk0YjtcbiAgICAtLWJvZHlUZXh0Q29sb3I6ICM0ZTRiNjY7XG4gICAgLS1ib2R5VGV4dENvbG9yR3JheTogIzMxMzEzMTtcbiAgICAtLXRvcHBlckZvbnRTaXplOiBjbGFtcCgwLjgxMjVyZW0sIDEuNnZ3LCAxcmVtKTtcbiAgICAtLWhlYWRlckZvbnRTaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xuICAgIC0tYm9keUZvbnRTaXplOiAxcmVtO1xuICAgIC0tc2VjdGlvblBhZGRpbmc6IGNsYW1wKDMuNzVyZW0sIDcuODJ2dywgNi4yNXJlbSkgMXJlbTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcbiAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLyogRGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yICovXG59XG5cbiNjb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xufVxuXG5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQmFzaWMgVHlwb2dyYXBoeSAqL1xuLmNzLXRvcHBlciwgLmNzLXRpdGxlLCAuY3MtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbn1cblxuLmNzLXRvcHBlciB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10b3BwZXJGb250U2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmNzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRlckZvbnRTaXplKTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG59XG5cbi5jcy10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG59XG5cbi8qIE5hdmlnYXRpb24gTGlua3MgKi9cbiNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlLCAjY3MtbmF2aWdhdGlvbj4ucGFnZS10aXRsZTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yTWVkaXVtKTtcbn1cblxuI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdDQUFnQztBQUNoQztJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLCtDQUErQztJQUMvQyx3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isc0JBQXNCLEVBQUUsNkJBQTZCO0FBQ3pEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0kscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2xvYmFsIFN0eWxlcyBhbmQgVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICNmZjZhM2U7XFxuICAgIC0tcHJpbWFyeUxpZ2h0OiAjZmZiYTQzO1xcbiAgICAtLXNlY29uZGFyeTogI2ZmYmE0MztcXG4gICAgLS1zZWNvbmRhcnlMaWdodDogI2ZmYmE0MztcXG4gICAgLS1oZWFkZXJDb2xvcjogIzFhMWExYTtcXG4gICAgLS1oZWFkZXJDb2xvckRhcms6ICMwODIwMzI7XFxuICAgIC0taGVhZGVyQ29sb3JNZWRpdW06ICMyYzM5NGI7XFxuICAgIC0tYm9keVRleHRDb2xvcjogIzRlNGI2NjtcXG4gICAgLS1ib2R5VGV4dENvbG9yR3JheTogIzMxMzEzMTtcXG4gICAgLS10b3BwZXJGb250U2l6ZTogY2xhbXAoMC44MTI1cmVtLCAxLjZ2dywgMXJlbSk7XFxuICAgIC0taGVhZGVyRm9udFNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XFxuICAgIC0tYm9keUZvbnRTaXplOiAxcmVtO1xcbiAgICAtLXNlY3Rpb25QYWRkaW5nOiBjbGFtcCgzLjc1cmVtLCA3LjgydncsIDYuMjVyZW0pIDFyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5Rm9udFNpemUpO1xcbiAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IC8qIERlZmF1bHQgYmFja2dyb3VuZCBjb2xvciAqL1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogQmFzaWMgVHlwb2dyYXBoeSAqL1xcbi5jcy10b3BwZXIsIC5jcy10aXRsZSwgLmNzLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbn1cXG5cXG4uY3MtdG9wcGVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10b3BwZXJGb250U2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuXFxuLmNzLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXJGb250U2l6ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxufVxcblxcbi5jcy10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIExpbmtzICovXFxuI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUsICNjcy1uYXZpZ2F0aW9uPi5wYWdlLXRpdGxlOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvck1lZGl1bSk7XFxufVxcblxcbiNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG4gIDwtLS0gICAgIE1vYmlsZSBOYXZpZ2F0aW9uICAgICAgLS0+XG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBNb2JpbGUgLSAxMDIzcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xuICAgIGJvZHkuY3Mtb3BlbiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgI21haW4tY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxOCU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTEwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgaGVpZ2h0OiAxNTB2aDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLXVsLXdyYXBwZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy1saSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDE0cmVtO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XG4gICAgICAgIC8qIDQ0cHggLSA0OHB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDIuNzVyZW0sIDZ2dywgM3JlbSk7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTEge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIyNWRlZyk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgdHJhbnNsYXRlWSgwKSByb3RhdGUoLTIyNWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMyB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYm94IHtcbiAgICAgICAgLyogMjRweCAtIDI4cHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDEuNXJlbSwgMnZ3LCAxLjc1cmVtKTtcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgwLjg3NXJlbSwgMS41dncsIDFyZW0pO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTEge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzLCB0b3AgMC4zcywgbGVmdCAwLjNzO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzLCBsZWZ0IDAuM3MsIHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUzIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIuNGVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cywgb3BhY2l0eSAwLjNzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNjV2aDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAzcmVtIDAgMCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMS4yNXJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC8qIHRyYW5zaXRpb24gZnJvbSB0aGVzZSB2YWx1ZXMgKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjM3NXJlbSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzLCBvcGFjaXR5IDAuOXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNCkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg1KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg2KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDcpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDgpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjQ1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTApIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTEpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41NXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEyKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEzKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNjVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCAxLjdyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVyZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgLyogbWFrZXMgaXQgd2hpdGUgKi9cbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbiAgPC0tLSAgICAgRGVza3RvcCBOYXZpZ2F0aW9uICAgICAtLT5cbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAwMDA7ICovXG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxLjVyZW07XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgICAgICBoZWlnaHQ6IDdyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUgaDEge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDIwcHggLSAzNnB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoMS4yNXJlbSwgMi42dncsIDIuMjVyZW0pO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgLyogcHJldmVudCBmbGV4Ym94IGZyb20gc3F1aXNoaW5nIGl0ICovXG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMXZ3LCAxLjJyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsuY3MtYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHJlbTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICAvKiBtYWtlcyBpdCB0dXJuIHdoaXRlICovXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUxpZ2h0KTtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgU2lkZSBCeSBTaWRlIFJldmVyc2UgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cblxuLyogTW9iaWxlIC0gMzYwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogY2hhbmdlcyB0byAxMjgwcHggYXQgdGFibGV0ICovXG4gICAgICAgIG1heC13aWR0aDogMzYuNXJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDZ2dywgNHJlbSk7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudC1yaWdodCB7XG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8qIGNlbnRlcnMgY29udGVudCBob3Jpem9udGFsbHksIHNldCB0byBmbGV4LXN0YXJ0IHRvIGxlZnQgYWxpZ24gKi9cbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0Omxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZSBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtcmlnaHQge1xuICAgICAgICBoZWlnaHQ6IDk1dnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLWxlZnQge1xuICAgICAgICBoZWlnaHQ6IDExMXZ3O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMS4yNXJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50LWxlZnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogMjhweCAtIDQwcHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgxLjc1cmVtLCAzdncsIDIuNXJlbSk7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXN0YXRzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMzkuMzc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICAgICAgICByb3ctZ2FwOiAxLjVyZW07XG4gICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXN0YXQge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAxLjVyZW0gMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgICAgICAvKiBtYWtpbmcgZmxleCBzbyB3ZSBjYW4gYWxpZ24gYSBoZWFkaW5nIHdpdGggMSBsaW5lIHRvIHRoZSBib3R0b20gKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtbnVtYmVyIHtcbiAgICAgICAgLyogMzFweCAtIDM5cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjkzNzVyZW0sIDN2dywgMi40Mzc1cmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDAgMC4yNXJlbSAwO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1kZXNjIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC8qIGF1dG8gbWFyZ2luIHRvcCB3aWxsIHB1c2ggdGV4dCB0byBib3R0b20gaWYgdGhlcmUncyBvbmx5IG9uZSBsaW5lICovXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgIH1cbn1cblxuLyogVGFibGV0IC0gNzY4cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50LXJpZ2h0IHtcbiAgICAgICAgLyogc2VuZHMgaXQgdG8gdGhlIHJpZ2h0IGluIHRoZSAybmQgcG9zaXRpb24gKi9cbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtcmlnaHQge1xuICAgICAgICAvKiAzNDBweCAtIDQ2MHB4ICovXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDIxLjI1cmVtLCAzNXZ3LCAyOC43NXJlbSk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1sZWZ0IHtcbiAgICAgICAgLyogNTMwcHggLSA2NjBweCAqL1xuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgzMy4xMjVyZW0sIDQ1dncsIDQxLjI1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcblxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10aXRsZSxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtbnVtYmVyLFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1kZXNjIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgICAgICAgICBGb290ZXIgICAgICAgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cblxuLyogTW9iaWxlIC0gMzYwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgICNjcy1mb290ZXItMTA4IHtcbiAgICAgICAgLyogNDBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXG4gICAgICAgIHBhZGRpbmc6IGNsYW1wKDFyZW0sIDQuOXZ3LCAyLjI1cmVtKSAxcmVtO1xuICAgICAgICAvKiA0MHB4IC0gNTBweCAqL1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMS41cmVtLCA2Ljl2dywgMi4xMjVyZW0pO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XG4gICAgICAgIC8qIDQwcHggLSA2MHB4Ki9cbiAgICAgICAgcGFkZGluZzogMCAwIGNsYW1wKDJyZW0sIDQuN3Z3LCAuNzVyZW0pO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMGY2O1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XG4gICAgICAgIC8qIDE2cHggLSAyMHB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAwLjE1cywgMXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpob3ZlcjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xuICAgICAgICAvKiB0b3AgcmlnaHQgYm94ICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3R0b206IC0wLjEyNXJlbTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtY29weXJpZ2h0IHtcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMS42dncsIDFyZW0pO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjYTBhM2JkO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyogMjBweCAtIDI4cHggKi9cbiAgICAgICAgbWFyZ2luOiBjbGFtcCgxLjI1cmVtLCAyLjh2dywgMS43NXJlbSkgYXV0byAwO1xuICAgIH1cbn1cblxuLyogVGFibGV0IC0gNjAwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzcuNXJlbSkge1xuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saSB7XG4gICAgICAgIC8qIDQ0cHggLSA4OHB4ICovXG4gICAgICAgIG1hcmdpbjogMCBjbGFtcCgyLjc1cmVtLCA2LjJ2dywgNS41cmVtKSAwIDA7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDgge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICAgICAgICBNZW51ICAgICAgICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI21lbnUtMTAwNSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1OmJlZm9yZSB7XG4gICAgICAgIC8qIHN0YXRpYyB0aWxlZCBwYXR0ZXJuICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDAuMDg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vY3NpbWcubnljMy5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9Gb29kLU1lbnUvc3RhdGljLXBhdHRlcm4ucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MGVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDd2dywgNHJlbSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtY29udGVudCB7XG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIge1xuICAgICAgICAvKiAxMjBweCAtIDE4MXB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCg3LjVyZW0sIDl2dywgMTEuMzEyNXJlbSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXI6YmVmb3JlIHtcbiAgICAgICAgLyogbGVmdCBsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyOmFmdGVyIHtcbiAgICAgICAgLyogcmlnaHQgbGluZSAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAvKiA5MHB4IC0gMTU1cHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDUuNjI1cmVtLCA0dncsIDkuNjg3NXJlbSk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAvKiAxMnB4IC0gMjRweCAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG5cbiAgICAjbWVudS0xMDA1IC5jcy10ZXh0IHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgLyogNDZweCAtIDU2cHggKi9cbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDIuODc1ZW0sIDUuNXZ3LCAzLjVlbSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtaW4td2lkdGg6IDkuMzc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBmcm9tIGFkZGluZyB0byB0aGUgd2lkdGggKi9cbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtY2FyZC1ncm91cCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgICAgIC8qIDMycHggLSA2MHB4ICovXG4gICAgICAgIHJvdy1nYXA6IGNsYW1wKDJyZW0sIDZ2dywgMy43NXJlbSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDM2LjI1cmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogMTZweCAtIDM2cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDIuMjVyZW0pO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXBpY3R1cmUge1xuICAgICAgICAvKiA3NnB4IC0gMTYwcHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDQuNzVyZW0sIDE0dncsIDEwcmVtKTtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg0Ljc1cmVtLCAxNHZ3LCAxMHJlbSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC8qIDRweCAtIDhweCAqL1xuICAgICAgICBib3JkZXI6IGNsYW1wKDAuMjVyZW0sIDF2dywgMC41cmVtKSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogbWFrZXMgaXQgYWN0IGxpa2UgYSBiYWNrZ3JvdW5kIGltYWdlICovXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWgzIHtcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLyogOHB4IC0gMTZweCAqL1xuICAgICAgICBtYXJnaW46IDAgMCBjbGFtcCgwLjVyZW0sIDEuNXZ3LCAxcmVtKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGdhcDogMC43NXJlbTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1oMzphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1uYW1lIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMy43NXJlbTtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1wcmljZSB7XG4gICAgICAgIC8qIDE2cHggLSAyNXB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjU2MjVyZW0pO1xuICAgICAgICAvKiAyOHB4IC0gNDZweCAqL1xuICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMS43NXJlbSwgNHZ3LCAyLjg3NXJlbSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIC8qIDhweCAtIDEycHggKi9cbiAgICAgICAgcGFkZGluZzogMCBjbGFtcCgwLjVyZW0sIDF2dywgMC43NXJlbSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjJjNztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbS1wIHtcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMnZ3LCAxcmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG59XG5cbi8qIFRhYmxldCAtIDc2OHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XG4gICAgI21lbnUtMTAwNSAuY3MtY2FyZC1ncm91cCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0ge1xuICAgICAgICB3aWR0aDogNDguNSU7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgICAgICAgQ29udGFjdHMgICAgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG5cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICAjY29udGFjdC1zdHJpcC0zMjQge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogODBlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA3dncsIDRyZW0pO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtY29udGVudCB7XG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCBkZXNrdG9wICovXG4gICAgICAgIG1heC13aWR0aDogMzcuNXJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAyLjVyZW07XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pdGVtIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDE4LjEyNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pdGVtOmhvdmVyIC5jcy1waWN0dXJlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAvKiAxMnB4IC0gMjBweCAqL1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKDAuNzVyZW0sIDN2dywgMS4yNXJlbSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JhYmFiYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIHByZXZlbnRzIGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMC4zcyxcbiAgICAgICAgICAgIHRyYW5zZm9ybSAwLjZzO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtZmxleC1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWljb24ge1xuICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1saW5rLFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaG91cnMge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzc2NzY3NjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1saW5rOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA2NTBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MC42MjVyZW0pIHtcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgICAgIHJvdy1nYXA6IDJyZW07XG4gICAgfVxufVxuXG4vKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhlYWRlcixcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O29DQUVvQztBQUNwQyxvQkFBb0I7QUFDcEI7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixpREFBaUQ7UUFDakQsZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLGNBQWM7UUFDZCxrQkFBa0I7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XFxuICA8LS0tICAgICBNb2JpbGUgTmF2aWdhdGlvbiAgICAgIC0tPlxcbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgLSAxMDIzcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVyZW0pIHtcXG4gICAgYm9keS5jcy1vcGVuIHtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgI21haW4tY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTglO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgei1pbmRleDogMTAwMDA7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb246YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDB2aDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTExMDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cywgb3BhY2l0eSAwLjVzO1xcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlOmJlZm9yZSB7XFxuICAgICAgICBoZWlnaHQ6IDE1MHZoO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLXVsLXdyYXBwZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy1saSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIG1heC13aWR0aDogMTRyZW07XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDAgYXV0byAwIDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgIH1cXG5cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XFxuICAgICAgICAvKiA0NHB4IC0gNDhweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDIuNzVyZW0sIDZ2dywgM3JlbSk7XFxuICAgICAgICBoZWlnaHQ6IGNsYW1wKDIuNzVyZW0sIDZ2dywgM3JlbSk7XFxuICAgICAgICBtYXJnaW46IDAgMCAwIGF1dG87XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUxIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIyNWRlZyk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTIge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtMjI1ZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMyB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgYm90dG9tOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1ib3gge1xcbiAgICAgICAgLyogMjRweCAtIDI4cHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sIDJ2dywgMS43NXJlbSk7XFxuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgwLjg3NXJlbSwgMS41dncsIDFyZW0pO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMSB7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgdG9wIDAuM3MsIGxlZnQgMC4zcztcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTIge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzLCBsZWZ0IDAuM3MsIHRyYW5zZm9ybSAwLjVzO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMyB7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4zcywgb3BhY2l0eSAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIuNGVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIG9wYWNpdHkgMC4zcztcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDAgMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMS4yNXJlbTtcXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAvKiB0cmFuc2l0aW9uIGZyb20gdGhlc2UgdmFsdWVzICovXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQuMzc1cmVtKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzLCBvcGFjaXR5IDAuOXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgyKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgzKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDYpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDcpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg4KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg5KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjQ1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTApIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDExKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjU1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTIpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEzKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjY1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCAxLjdyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xcbiAgICAgICAgLyogYWN0aXZlIHN0YXRlIHVuZGVybGluZSAqL1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IC0wLjEyNXJlbTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsuY3MtYWN0aXZlOmJlZm9yZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBEYXJrIE1vZGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVyZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgLyogbWFrZXMgaXQgd2hpdGUgKi9cXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcbn1cXG5cXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbiAgPC0tLSAgICAgRGVza3RvcCBOYXZpZ2F0aW9uICAgICAtLT5cXG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuLyogU21hbGwgRGVza3RvcCAtIDEwMjRweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcXG4gICAgI2NzLW5hdmlnYXRpb24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICAgICAgLyogcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgei1pbmRleDogMTAwMDA7ICovXFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODByZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgICAgIGhlaWdodDogN3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB6LWluZGV4OiAxMDA7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogMjBweCAtIDM2cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoMS4yNXJlbSwgMi42dncsIDIuMjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICAgICAgLyogcHJldmVudCBmbGV4Ym94IGZyb20gc3F1aXNoaW5nIGl0ICovXFxuICAgICAgICBmbGV4OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAxdncsIDEuMnJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpob3ZlcjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsuY3MtYWN0aXZlOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xcbiAgICAgICAgLyogYWN0aXZlIHN0YXRlIHVuZGVybGluZSAqL1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMCU7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwcmVtO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XFxuICAgIH1cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XFxuICAgICAgICAvKiBtYWtlcyBpdCB0dXJuIHdoaXRlICovXFxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUxpZ2h0KTtcXG4gICAgfVxcbn1cXG5cXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICBTaWRlIEJ5IFNpZGUgUmV2ZXJzZSAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG5cXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8qIGNoYW5nZXMgdG8gMTI4MHB4IGF0IHRhYmxldCAqL1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNi41cmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgNnZ3LCA0cmVtKTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50LXJpZ2h0IHtcXG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dDpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtcmlnaHQge1xcbiAgICAgICAgaGVpZ2h0OiA5NXZ3O1xcbiAgICAgICAgbWF4LWhlaWdodDogMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtbGVmdCB7XFxuICAgICAgICBoZWlnaHQ6IDExMXZ3O1xcbiAgICAgICAgbWF4LWhlaWdodDogMzEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudC1sZWZ0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvKiAyOHB4IC0gNDBweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgxLjc1cmVtLCAzdncsIDIuNXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXN0YXRzIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzOS4zNzVyZW07XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICAgICAgcm93LWdhcDogMS41cmVtO1xcbiAgICAgICAgY29sdW1uLWdhcDogMC43NXJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3Mtc3RhdCB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgLyogbWFraW5nIGZsZXggc28gd2UgY2FuIGFsaWduIGEgaGVhZGluZyB3aXRoIDEgbGluZSB0byB0aGUgYm90dG9tICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtbnVtYmVyIHtcXG4gICAgICAgIC8qIDMxcHggLSAzOXB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuOTM3NXJlbSwgM3Z3LCAyLjQzNzVyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDAgMCAwLjI1cmVtIDA7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAvKiBhdXRvIG1hcmdpbiB0b3Agd2lsbCBwdXNoIHRleHQgdG8gYm90dG9tIGlmIHRoZXJlJ3Mgb25seSBvbmUgbGluZSAqL1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAtIDc2OHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xcbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50IHtcXG4gICAgICAgIG1heC13aWR0aDogODByZW07XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudC1yaWdodCB7XFxuICAgICAgICAvKiBzZW5kcyBpdCB0byB0aGUgcmlnaHQgaW4gdGhlIDJuZCBwb3NpdGlvbiAqL1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtcmlnaHQge1xcbiAgICAgICAgLyogMzQwcHggLSA0NjBweCAqL1xcbiAgICAgICAgbWluLWhlaWdodDogY2xhbXAoMjEuMjVyZW0sIDM1dncsIDI4Ljc1cmVtKTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtbGVmdCB7XFxuICAgICAgICAvKiA1MzBweCAtIDY2MHB4ICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgzMy4xMjVyZW0sIDQ1dncsIDQxLjI1cmVtKTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10aXRsZSxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQsXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1udW1iZXIsXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1kZXNjIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XFxuICAgICAgICBvcGFjaXR5OiAuODtcXG4gICAgfVxcbn1cXG5cXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICAgICAgIEZvb3RlciAgICAgICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG5cXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICAjY3MtZm9vdGVyLTEwOCB7XFxuICAgICAgICAvKiA0MHB4IC0gMTAwcHggdG9wIGFuZCBib3R0b20gKi9cXG4gICAgICAgIHBhZGRpbmc6IGNsYW1wKDFyZW0sIDQuOXZ3LCAyLjI1cmVtKSAxcmVtO1xcbiAgICAgICAgLyogNDBweCAtIDUwcHggKi9cXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCgxLjVyZW0sIDYuOXZ3LCAyLjEyNXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODByZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcXG4gICAgICAgIC8qIDQwcHggLSA2MHB4Ki9cXG4gICAgICAgIHBhZGRpbmc6IDAgMCBjbGFtcCgycmVtLCA0Ljd2dywgLjc1cmVtKTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMGY2O1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xcbiAgICAgICAgLyogMTZweCAtIDIwcHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAwLjE1cywgMXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xcbiAgICAgICAgLyogdG9wIHJpZ2h0IGJveCAqL1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMCU7XFxuICAgICAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtY29weXJpZ2h0IHtcXG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAxLjZ2dywgMXJlbSk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogI2EwYTNiZDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgLyogMjBweCAtIDI4cHggKi9cXG4gICAgICAgIG1hcmdpbjogY2xhbXAoMS4yNXJlbSwgMi44dncsIDEuNzVyZW0pIGF1dG8gMDtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA2MDBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzcuNXJlbSkge1xcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGkge1xcbiAgICAgICAgLyogNDRweCAtIDg4cHggKi9cXG4gICAgICAgIG1hcmdpbjogMCBjbGFtcCgyLjc1cmVtLCA2LjJ2dywgNS41cmVtKSAwIDA7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgfVxcbn1cXG5cXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICAgICAgICBNZW51ICAgICAgICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG5cXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICAjbWVudS0xMDA1IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1OmJlZm9yZSB7XFxuICAgICAgICAvKiBzdGF0aWMgdGlsZWQgcGF0dGVybiAqL1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG9wYWNpdHk6IDAuMDg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vY3NpbWcubnljMy5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9Gb29kLU1lbnUvc3RhdGljLXBhdHRlcm4ucG5nXFxcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MGVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA3dncsIDRyZW0pO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWNvbnRlbnQge1xcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8qIGNlbnRlcnMgY29udGVudCBob3Jpem9udGFsbHksIHNldCB0byBmbGV4LXN0YXJ0IHRvIGxlZnQgYWxpZ24gKi9cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlciB7XFxuICAgICAgICAvKiAxMjBweCAtIDE4MXB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNy41cmVtLCA5dncsIDExLjMxMjVyZW0pO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgICAgIC8qIGxlZnQgbGluZSAqL1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAvKiA5MHB4IC0gMTU1cHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCg1LjYyNXJlbSwgNHZ3LCA5LjY4NzVyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICAvKiAxMnB4IC0gMjRweCAqL1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCgwLjc1cmVtLCAydncsIDEuNXJlbSk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyOmFmdGVyIHtcXG4gICAgICAgIC8qIHJpZ2h0IGxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgLyogOTBweCAtIDE1NXB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgLyogMTJweCAtIDI0cHggKi9cXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgwLjc1cmVtLCAydncsIDEuNXJlbSk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICBsZWZ0OiAxMDAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXRleHQge1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAvKiA0NnB4IC0gNTZweCAqL1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDIuODc1ZW0sIDUuNXZ3LCAzLjVlbSk7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICBtaW4td2lkdGg6IDkuMzc1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBmcm9tIGFkZGluZyB0byB0aGUgd2lkdGggKi9cXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlcjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtY2FyZC1ncm91cCB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XFxuICAgICAgICAvKiAzMnB4IC0gNjBweCAqL1xcbiAgICAgICAgcm93LWdhcDogY2xhbXAoMnJlbSwgNnZ3LCAzLjc1cmVtKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzYuMjVyZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDE2cHggLSAzNnB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDFyZW0sIDN2dywgMi4yNXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSB7XFxuICAgICAgICAvKiA3NnB4IC0gMTYwcHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCg0Ljc1cmVtLCAxNHZ3LCAxMHJlbSk7XFxuICAgICAgICBoZWlnaHQ6IGNsYW1wKDQuNzVyZW0sIDE0dncsIDEwcmVtKTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAvKiA0cHggLSA4cHggKi9cXG4gICAgICAgIGJvcmRlcjogY2xhbXAoMC4yNXJlbSwgMXZ3LCAwLjVyZW0pIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1waWN0dXJlIGltZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAvKiBtYWtlcyBpdCBhY3QgbGlrZSBhIGJhY2tncm91bmQgaW1hZ2UgKi9cXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWgzIHtcXG4gICAgICAgIC8qIDE2cHggLSAyNHB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS41cmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgLyogOHB4IC0gMTZweCAqL1xcbiAgICAgICAgbWFyZ2luOiAwIDAgY2xhbXAoMC41cmVtLCAxLjV2dywgMXJlbSk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGdhcDogMC43NXJlbTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1oMzphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1uYW1lIHtcXG4gICAgICAgIG1heC13aWR0aDogMTMuNzVyZW07XFxuICAgICAgICBmbGV4OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXByaWNlIHtcXG4gICAgICAgIC8qIDE2cHggLSAyNXB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS41NjI1cmVtKTtcXG4gICAgICAgIC8qIDI4cHggLSA0NnB4ICovXFxuICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMS43NXJlbSwgNHZ3LCAyLjg3NXJlbSk7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgLyogOHB4IC0gMTJweCAqL1xcbiAgICAgICAgcGFkZGluZzogMCBjbGFtcCgwLjVyZW0sIDF2dywgMC43NXJlbSk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGIyYzc7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG9yZGVyOiAzO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0tcCB7XFxuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMnZ3LCAxcmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG59XFxuXFxuLyogVGFibGV0IC0gNzY4cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuICAgICNtZW51LTEwMDUgLmNzLWNhcmQtZ3JvdXAge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XFxuICAgICAgICB3aWR0aDogNDguNSU7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgICAgICBDb250YWN0cyAgICAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDd2dywgNHJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1jb250ZW50IHtcXG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8qIGNoYW5nZXMgdG8gMTI4MHB4IGF0IGRlc2t0b3AgKi9cXG4gICAgICAgIG1heC13aWR0aDogMzcuNXJlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMi41cmVtO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaXRlbSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDE4LjEyNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW06aG92ZXIgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogNXJlbTtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICAgIC8qIDEycHggLSAyMHB4ICovXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKDAuNzVyZW0sIDN2dywgMS4yNXJlbSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmFiYWJhO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIHByZXZlbnRzIGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgICAgICB0cmFuc2l0aW9uOlxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcXG4gICAgICAgICAgICBib3gtc2hhZG93IDAuM3MsXFxuICAgICAgICAgICAgdHJhbnNmb3JtIDAuNnM7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1mbGV4LWdyb3VwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWljb24ge1xcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1saW5rLFxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhvdXJzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiAjNzY3Njc2O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1saW5rOmhvdmVyIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAtIDY1MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MC42MjVyZW0pIHtcXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xcbiAgICAgICAgcm93LWdhcDogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIH1cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhlYWRlcixcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1saW5rLFxcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhvdXJzIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RhcmsuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0aW5nIGdsb2JhbCwgbWFpbiwgYW5kIGRhcmsgbW9kZSBDU1Mgc3R5bGVzaGVldHNcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZGFyay5jc3MnO1xuXG4vLyBJbXBvcnRpbmcgZnVuY3Rpb25hbGl0eSBtb2R1bGVzXG5pbXBvcnQgZGFya01vZGVUb2dnbGVyIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L2RhcmtNb2RlLmpzJztcbmltcG9ydCBtb2JpbGVOYXZpZ2F0aW9uVG9nZ2xpbmcgZnJvbSAnLi9tb2R1bGVzL3V0aWxpdHkvbW9iaWxlTmF2aWdhdGlvbi5qcyc7XG5cbi8vIEltcG9ydGluZyBwYWdlIGxvYWRlciBmdW5jdGlvbnNcbmltcG9ydCBob21lUGFnZUxvYWRlciBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWRlcnMvaG9tZVBhZ2VMb2FkZXIuanMnO1xuaW1wb3J0IG1lbnVQYWdlTG9hZGVyIGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZGVycy9tZW51UGFnZUxvYWRlci5qcyc7XG5pbXBvcnQgY29udGFjdHNQYWdlTG9hZGVyIGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZGVycy9jb250YWN0c1BhZ2VMb2FkZXIuanMnO1xuXG4vLyBBY3RpdmF0ZSBkYXJrIG1vZGUgdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbmRhcmtNb2RlVG9nZ2xlcigpO1xuXG4vLyBTZXQgdXAgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbm1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZygpO1xuXG4vLyBHbG9iYWwgdmFyaWFibGVzIHNldHVwXG5sZXQgcGFnZU5hbWVzID0gWydob21lJywgJ21lbnUnLCAnY29udGFjdHMnXTtcbi8vIGxldCBjdXJyZW50VGFiID0gcGFnZU5hbWVzWzBdO1xubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XG5cbi8vIExvYWQgdGhlIGluaXRpYWwgaG9tZSBwYWdlIGNvbnRlbnRcbmhvbWVQYWdlTG9hZGVyKGNvbnRlbnQpO1xuXG4vKipcbiAqIFNldCB1cCBjbGljayBldmVudCBsaXN0ZW5lcnMgZm9yIHRhYiBuYXZpZ2F0aW9uIGluIHRoZSBoZWFkZXJcbiAqIFRoaXMgYWxsb3dzIHN3aXRjaGluZyBiZXR3ZWVuIGRpZmZlcmVudCBwYWdlcyAoaG9tZSwgbWVudSwgY29udGFjdHMpIGFuZFxuICogZW5zdXJlcyB0aGUgYXBwcm9wcmlhdGUgY29udGVudCBpcyBsb2FkZWQgYW5kIGRpc3BsYXllZFxuICovXG5wYWdlTmFtZXMuZm9yRWFjaCgocGFnZU5hbWUpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlTmFtZSk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmlkID09ICdob21lJykge1xuICAgICAgICAgICAgaG9tZVBhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09ICdtZW51Jykge1xuICAgICAgICAgICAgbWVudVBhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWN0c1BhZ2VMb2FkZXIoY29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkFjdGl2ZVN0YXRlKHBhZ2VOYW1lKTtcbiAgICB9KTtcbn0pO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3RpdmVCdXR0b25JZCAtIFRoZSBJRCBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b24gdG8gYmUgbWFya2VkIGFzIGFjdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbkFjdGl2ZVN0YXRlKGFjdGl2ZUJ1dHRvbklkKSB7XG4gICAgLy8gTmF2aWdhdGlvbiBidXR0b24gSURzXG4gICAgY29uc3QgbmF2aWdhdGlvbkJ1dHRvbnMgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0cyddO1xuXG4gICAgbmF2aWdhdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uSWQpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbklkKTtcbiAgICAgICAgaWYgKGJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChidXR0b25JZCA9PT0gYWN0aXZlQnV0dG9uSWQpIHtcbiAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJleHBvcnQgbGV0IGNvbnRhY3RzQ29udGVudHMgPSBbXG4gICAge1xuICAgICAgICBjb250ZW50czoge1xuICAgICAgICAgICAgdGl0bGU6ICdPdXIgQ29udGFjdHMnLFxuICAgICAgICAgICAgdG9wcGVyOiAnV2UgZ290IGZvb2QhJyxcbiAgICAgICAgICAgIHBhcmFncmFwaDogJ1NvbWUgY2xldmVyIHRleHQgYWJvdXQgcmVzZXJ2aW5nIHRhYmxlIHZpYSBwaG9uZSBvciBlbWFpbCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRHcm91cDoge1xuICAgICAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ1Bob25lJyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOck9uZTogJysxICg1NTUpIDQ1NiA3ODk5JyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOclR3bzogJysxICg1NTUpIDQ1NiA3ODg5JyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYHRlbDo1NTUtNDU2LTc4OTlgLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY3NpbWcubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0NvbnRhY3QtUGFnZS9waG9uZS1ncmV5LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmlhLWhpZGRlbjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnRW1haWwnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJ2luZm9AZW1haWwuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYG1haWx0bzpJbmZvQGVtYWlsLmNvbWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2NzaW1nLm55YzMuY2RuLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vSWNvbnMvbWVjaC1lbWFpbC5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJpYS1oaWRkZW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGAxMjMgRmFrZSBTdCwgU1RFIDEwMCBTb21ld2hlcmUsIEZMIDk4NzVgLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY3NpbWcubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0NvbnRhY3QtUGFnZS9waW4tZ3JleS5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJpYS1oaWRkZW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG91cnM6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ09wZW4gSG91cnMnLFxuICAgICAgICAgICAgICAgICAgICBkYXlzOiAnTW9uZGF5IFRvIFNhdHVyZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6ICc5OjAwIC0gMjI6MzAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vY3NpbWcubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0NvbnRhY3QtUGFnZS9jbG9jay1ncmV5LnN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdpY29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmlhLWhpZGRlbjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgaG9tZVBhZ2VMZWZ0IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvaG9tZVBhZ2VMZWZ0LnBuZyc7XG5pbXBvcnQgaG9tZVBhZ2VSaWdodCBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2hvbWVQYWdlUmlnaHQucG5nJztcblxuZXhwb3J0IGxldCBob21lQ29udGVudHMgPSBbXG4gICAge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0b3BwZXI6ICdEbyB5b3UgbGlrZSBmb29kPycsXG4gICAgICAgICAgICB0aXRsZTogJ0FjY2Vzc2libGUgRm9vZCBUaGF0IEFueW9uZSBDYW4gRWF0JyxcbiAgICAgICAgICAgIHBhcmFncmFwaDogYEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIHRhbnRhbGl6aW5nIHdvcmxkIG9mIGdvdXJtZXQgZGluaW5nIGF0XG4gICAgICAgIFwiU2F2b3IncyBDYXRjaFwiLCBhIHZpYnJhbnQgYW5kIGVsZWN0cmlmeWluZyByZXN0YXVyYW50IGJyYW5kXG4gICAgICAgIGNyYWZ0ZWQgc3BlY2lmaWNhbGx5IGZvciB0aG9zZSB3aG8gcmVsaXNoIHRoZSB0aHJpbGwgb2YgY3VsaW5hcnlcbiAgICAgICAgZXhjZWxsZW5jZS4gRm9yIGF2aWQgZm9vZCBlbnRodXNpYXN0cyB3aG8gZmVlbCB0aGVpciB0YXN0ZSBidWRzXG4gICAgICAgIGF3YWtlbiBhdCB0aGUgZmlyc3QgaGludCBvZiBleHF1aXNpdGUgZmxhdm9ycywgXCJTYXZvcidzIENhdGNoXCJcbiAgICAgICAgZW1ib2RpZXMgdGhlIGVzc2VuY2Ugb2YgdGhhdCBleGhpbGFyYXRpbmcgbW9tZW50IHdoZW4gYVxuICAgICAgICBwZXJmZWN0bHkgcHJlcGFyZWQgZGlzaCBhbmQgYSBkaXNjZXJuaW5nIGRpbmVyIGVuZ2FnZSBpbiBhXG4gICAgICAgIGRlbGlnaHRmdWwgaW50ZXJwbGF5IG9mIHRhc3RlIGFuZCBjcmFmdHNtYW5zaGlwLmAsXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlTGVmdDoge1xuICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgc3Jjc2V0OiBob21lUGFnZUxlZnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgc3Jjc2V0OiBob21lUGFnZUxlZnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgIHNyYzogaG9tZVBhZ2VMZWZ0LFxuICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc2MDgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzQwNicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZVJpZ2h0OiB7XG4gICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAwcHgpJyxcbiAgICAgICAgICAgICAgICBzcmNzZXQ6IGhvbWVQYWdlUmlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgc3Jjc2V0OiBob21lUGFnZVJpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICBzcmM6IGhvbWVQYWdlUmlnaHQsXG4gICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzYwOCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNjYyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRzOiB7XG4gICAgICAgICAgICBmaXJzdFN0YXQ6IHtcbiAgICAgICAgICAgICAgICBudW06ICc5OSUnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdQb3NpdGl2ZSBjdXN0b21lciByZXZpZXdzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWNvbmRTdGF0OiB7XG4gICAgICAgICAgICAgICAgbnVtOiAnMTAnLFxuICAgICAgICAgICAgICAgIHRleHQ6IGBEaXNoICdUcnkgQWdhaW4nIFNwZWNpYWxgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXJkU3RhdDoge1xuICAgICAgICAgICAgICAgIG51bTogJzI0LzcnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdPbmxpbmUgcmVzZXJ2YXRpb24gYW5kIGlucXVpcnkgc2VydmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IGJ1cmdlciBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUvYmlzb25CdXJnZXIucG5nJztcbmltcG9ydCBjaGlja2VuIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9jaGlja2VuU2FsYWRNYW5nby5wbmcnO1xuaW1wb3J0IGxhc2FnbmEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L2xhc2FnbmEucG5nJztcbmltcG9ydCBwaXp6YSBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUvbWVhdExvdmVyc1BpenphLnBuZyc7XG5pbXBvcnQgc2F1Y2UgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L3ByaWNrbHlQZWFyUG9ya1NhdWNlLnBuZyc7XG5pbXBvcnQgdG9zdGFkYSBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUvcHVycGxlQ29yblRvc3RhZGEucG5nJztcblxuZXhwb3J0IGxldCBtZW51Q29udGVudHMgPSBbXG4gICAge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0aXRsZTogJ091ciBTcGVjaWFscycsXG4gICAgICAgICAgICBwYXJhZ3JhcGg6IGBJbmR1bGdlIGluIG91ciBTcGVjaWFsIE1lbnUsIHdoZXJlIGVhY2ggZGlzaCBpcyBhIG1hc3RlcnBpZWNlIG9mXG4gICAgICAgICAgICBmbGF2b3IgYW5kIGNyZWF0aXZpdHkuIEZyb20gdGhlIGhlYXJ0aW5lc3Mgb2YgYSBCaXNvbiBCdXJnZXIgdG9cbiAgICAgICAgICAgIHRoZSBleG90aWMgZmxhaXIgb2YgQ3VycmllZCBDaGlja2VuIFNhbGFkIHdpdGggTWFuZ28sIGV4cGVyaWVuY2VcbiAgICAgICAgICAgIGEgY3VsaW5hcnkgam91cm5leSB0aGF0IGRlbGlnaHRzIGFuZCBzdXJwcmlzZXMgd2l0aCBldmVyeSBiaXRlLmAsXG4gICAgICAgIH0sXG4gICAgICAgIGNhcmRHcm91cDoge1xuICAgICAgICAgICAgbGlzdEl0ZW1PbmU6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdMYXNhZ25hJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBBIGNsYXNzaWMgZmF2b3JpdGUsIG91ciBsYXNhZ25hIGxheWVycyB0ZW5kZXIgcGFzdGEgd2l0aFxuICAgICAgICAgICAgICAgICAgICByaWNoIG1lYXQgc2F1Y2UgYW5kIGNyZWFteSBiw6ljaGFtZWwsIHRvcHBlZCB3aXRoIGdvbGRlbixcbiAgICAgICAgICAgICAgICAgICAgYnViYmxpbmcgY2hlZXNlIGZvciBhIGNvbWZvcnRpbmcgYW5kIGluZHVsZ2VudCBtZWFsLmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGxhc2FnbmEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGxhc2FnbmEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGxhc2FnbmEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RJdGVtVHdvOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQmlzb24gQnVyZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBUaGlzIGhlYXJ0eSBidXJnZXIgZmVhdHVyZXMgYSBqdWljeSBiaXNvbiBwYXR0eSB0b3BwZWRcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBmcmVzaCB2ZWdldGFibGVzIGFuZCBtZWx0ZWQgY2hlZXNlLCBzZXJ2ZWQgaW4gYVxuICAgICAgICAgICAgICAgICAgICBydXN0aWMgYnVuIGZvciBhIHJvYnVzdCBhbmQgc2F0aXNmeWluZyBleHBlcmllbmNlLmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGJ1cmdlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogYnVyZ2VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBidXJnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RJdGVtVGhyZWU6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDdXJyaWVkIENoaWNrZW4gU2FsYWQnLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYEEgcmVmcmVzaGluZyBtaXggb2YgdGVuZGVyIGN1cnJpZWQgY2hpY2tlbiBhbmQgc3dlZXRcbiAgICAgICAgICAgICAgICAgICAgbWFuZ28gc2xpY2VzLCB0b3NzZWQgd2l0aCB2aWJyYW50IGdyZWVucyBmb3IgYSBsaWdodCB5ZXRcbiAgICAgICAgICAgICAgICAgICAgZmxhdm9yZnVsIHNhbGFkLmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGNoaWNrZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGNoaWNrZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGNoaWNrZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RJdGVtRm91cjoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYE1lYXQgTG92ZXJzJyBQaXp6YWAsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnNTbigqwnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFyYWdyYXBoOiBgTG9hZGVkIHdpdGggYW4gYXNzb3J0bWVudCBvZiBtZWF0cyBsaWtlIHBlcHBlcm9uaSxcbiAgICAgICAgICAgICAgICAgICAgc2F1c2FnZSwgYW5kIGJhY29uLCB0aGlzIHBpenphIG9mZmVycyBhIGNhcm5pdm9yZSdzXG4gICAgICAgICAgICAgICAgICAgIGRlbGlnaHQgd2l0aCBldmVyeSBjcmlzcHksIGNoZWVzeSBiaXRlLmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHBpenphLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBwaXp6YSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcGl6emEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RJdGVtRml2ZToge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYFB1cnBsZSBDb3JuIFRvc3RhZGFgLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYEEgZmVhc3QgZm9yIHRoZSBleWVzIGFuZCB0aGUgcGFsYXRlLCB0aGlzIHRvc3RhZGEgdXNlcyBhXG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZSBwdXJwbGUgY29ybiBzaGVsbCwgcGlsZWQgaGlnaCB3aXRoIHNlYXNvbmVkIG1lYXRzXG4gICAgICAgICAgICAgICAgICAgIGFuZCBmcmVzaCB0b3BwaW5ncyBmb3IgYSBjcnVuY2h5LCBzYXZvcnkgdHJlYXQuYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAwcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogdG9zdGFkYSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogdG9zdGFkYSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdG9zdGFkYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlzdEl0ZW1TaXg6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBQcmlja2x5IFBlYXIgUG9yayBTYXVjZWAsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnNTbigqwnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFyYWdyYXBoOiBgQW4gaW5ub3ZhdGl2ZSBmdXNpb24sIHRoaXMgc2F1Y2UgYmxlbmRzIHRoZSBzd2VldG5lc3Mgb2ZcbiAgICAgICAgICAgICAgICAgICAgcHJpY2tseSBwZWFyIHdpdGggcmljaCBwb3JrLCBjcmVhdGluZyBhIHBlcmZlY3RcbiAgICAgICAgICAgICAgICAgICAgY29tcGxlbWVudCB0byBlbmhhbmNlIGFueSBnb3VybWV0IGRpc2guYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAwcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogc2F1Y2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHNhdWNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBzYXVjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5dO1xuIiwiLy8gSW1wb3J0aW5nIGhvbWUgY29udGVudHMgZGF0YSBmcm9tIGNvbnRhY3RzQ29udGVudHMgbW9kdWxlXG5pbXBvcnQgeyBjb250YWN0c0NvbnRlbnRzIH0gZnJvbSAnLi4vcGFnZURhdGEvY29udGFjdHNDb250ZW50LmpzJztcblxuLy8gSW1wb3J0aW5nIHV0aWxpdHkgZnVuY3Rpb25zIGZyb20gdGhlICdlbGVtZW50UmVuZGVyJyBtb2R1bGUuIFRoZXNlIGZ1bmN0aW9ucyBhcmUgdXNlZFxuLy8gZm9yIGNyZWF0aW5nIHZhcmlvdXMgSFRNTCBlbGVtZW50cyBkeW5hbWljYWxseVxuaW1wb3J0IHtcbiAgICBjcmVhdGVTZWN0aW9uLFxuICAgIGNyZWF0ZURpdixcbiAgICBjcmVhdGVQaWN0dXJlLFxuICAgIGNyZWF0ZUxpc3QsXG4gICAgY3JlYXRlTGlzdEl0ZW0sXG4gICAgY3JlYXRlU3BhbixcbiAgICBjbGVhclBhZ2UsXG4gICAgY3JlYXRlTGluayxcbiAgICBjcmVhdGVUaXRsZSxcbiAgICBjcmVhdGVQYXJhZ3JhcGgsXG4gICAgY3JlYXRlVG9wcGVyLFxufSBmcm9tICcuLi91dGlsaXR5L2VsZW1lbnRSZW5kZXIuanMnO1xuXG4vKipcbiAqIExvYWRzIGFuZCBkaXNwbGF5cyB0aGUgY29udGFjdHMgcGFnZSBjb250ZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50IC0gVGhlIHBhcmVudCBlbGVtZW50IHdoZXJlIHRoZSBjb250YWN0cyBwYWdlIHdpbGwgYmUgcmVuZGVyZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdHNQYWdlTG9hZGVyKGNvbnRlbnQpIHtcbiAgICBjbGVhclBhZ2UoY29udGVudCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gc2VjdGlvbiBmb3IgY29udGFjdHMgYW5kIGFwcGVuZCBpdCB0byB0aGUgY29udGVudCBhcmVhXG4gICAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oJ2lkJywgJ2NvbnRhY3Qtc3RyaXAtMzI0Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICAgIC8vIFJlbmRlciBhbmQgYXBwZW5kIHRoZSBjb250YWluZXIgZm9yIHRoZSBjb250YWN0cyBjb250ZW50XG4gICAgY29uc3QgY29udGFpbmVyID0gcmVuZGVyQ29udGFpbmVyKCk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgYSBsaXN0IG9mIGNvbnRhY3QgY2FyZHMgdG8gdGhlIGNvbnRhaW5lciB1c2luZyBkYXRhIGZyb20gY29udGFjdHNDb250ZW50c1xuICAgIGNvbnN0IGNhcmRHcm91cCA9IGNvbnRhY3RzQ29udGVudHNbMF0uY2FyZEdyb3VwO1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3Mtc3RhdC1ncm91cCcsXG4gICAgICAgIE9iamVjdC52YWx1ZXMoY2FyZEdyb3VwKSxcbiAgICAgICAgcmVuZGVyQ29udGFjdEl0ZW1cbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBwcmltYXJ5IGNvbnRhaW5lciBmb3IgdGhlIGNvbnRhY3RzIHBhZ2VcbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gLSBUaGUgY29udGFpbmVyIGRpdiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gUmVuZGVyIGFuZCBhcHBlbmQgdGhlIGNvbnRlbnQgc2VjdGlvbiB3aXRoIHRpdGxlIGFuZCBwYXJhZ3JhcGggdG8gdGhlIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJDb250ZW50KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IHNlY3Rpb24gd2l0aCB0aXRsZSwgdG9wcGVyLCBhbmQgcGFyYWdyYXBoXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGNvbnRlbnQgc2VjdGlvbiBkaXYgZWxlbWVudFxuICovXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGl0bGUnLFxuICAgICAgICBjb250YWN0c0NvbnRlbnRzWzBdLmNvbnRlbnRzLnRpdGxlXG4gICAgKTtcbiAgICBjb25zdCB0b3BwZXIgPSBjcmVhdGVUb3BwZXIoXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjcy10b3BwZXInLFxuICAgICAgICBjb250YWN0c0NvbnRlbnRzWzBdLmNvbnRlbnRzLnRvcHBlclxuICAgICk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGV4dCcsXG4gICAgICAgIGNvbnRhY3RzQ29udGVudHNbMF0uY29udGVudHMucGFyYWdyYXBoXG4gICAgKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9wcGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIGFuIGluZGl2aWR1YWwgY29udGFjdCBpdGVtIGFzIGEgbGlzdCBpdGVtXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBjb250YWN0IGl0ZW1cbiAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fSAtIFRoZSBsaXN0IGl0ZW0gZWxlbWVudCB3aXRoIGNvbnRhY3QgaW5mb3JtYXRpb25cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGFjdEl0ZW0oaXRlbURhdGEpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZUxpc3RJdGVtKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtaXRlbScsXG4gICAgICAgIGl0ZW1EYXRhLFxuICAgICAgICByZW5kZXJMaXN0SXRlbUNvbnRlbnRcbiAgICApO1xuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IGZvciBhIGNvbnRhY3QgbGlzdCBpdGVtXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBjb250YWN0IGl0ZW1cbiAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fSAtIFRoZSBmcmFnbWVudCBjb250YWluaW5nIGNvbnRhY3QgaXRlbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3RJdGVtQ29udGVudChpdGVtRGF0YSkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHBpY3R1cmUgPSBjcmVhdGVQaWN0dXJlKCdjbGFzcycsICdjcy1waWN0dXJlJywgaXRlbURhdGEucGljdHVyZSk7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGNyZWF0ZURpdignY2xhc3MnLCAnY3MtZmxleC1ncm91cCcpO1xuXG4gICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtaGVhZGVyJywgaXRlbURhdGEuaW5mby5oZWFkZXIpXG4gICAgKTtcbiAgICBhcHBlbmRDb250YWN0SW5mbyhpbmZvQ29udGFpbmVyLCBpdGVtRGF0YS5pbmZvKTtcblxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgc3BlY2lmaWMgY29udGFjdCBkZXRhaWxzIHRvIGEgY29udGFpbmVyIGJhc2VkIG9uIHRoZSBpdGVtIHR5cGUgKHBob25lLCBlbWFpbCwgZXRjLilcbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGNvbnRhaW5lciAtIFRoZSBjb250YWluZXIgdG8gd2hpY2ggYWRkaXRpb25hbCBpbmZvIHdpbGwgYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbmZvIC0gVGhlIHNwZWNpZmljIGNvbnRhY3QgaW5mb3JtYXRpb24gZGF0YVxuICovXG5mdW5jdGlvbiBhcHBlbmRDb250YWN0SW5mbyhjb250YWluZXIsIGluZm8pIHtcbiAgICAvLyBMb2dpYyB0byBhcHBlbmQgdmFyaW91cyB0eXBlcyBvZiBjb250YWN0IGluZm9ybWF0aW9uXG4gICAgaWYgKGluZm8ucGhvbmVOck9uZSkge1xuICAgICAgICBjb25zdCBwaG9uZUxpbmtPbmUgPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgaW5mby5ocmVmLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8ucGhvbmVOck9uZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwaG9uZUxpbmtUd28gPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgaW5mby5ocmVmLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8ucGhvbmVOclR3b1xuICAgICAgICApO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVMaW5rT25lKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTGlua1R3byk7XG4gICAgfSBlbHNlIGlmIChpbmZvLmVtYWlsKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsTGluayA9IGNyZWF0ZUxpbmsoXG4gICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICBgbWFpbHRvOiR7aW5mby5lbWFpbH1gLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8uZW1haWxcbiAgICAgICAgKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsTGluayk7XG4gICAgfSBlbHNlIGlmIChpbmZvLmFkZHJlc3MpIHtcbiAgICAgICAgY29uc3QgYWRkcmVzc0xpbmsgPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgaW5mby5ocmVmLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8uYWRkcmVzc1xuICAgICAgICApO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmspO1xuICAgIH0gZWxzZSBpZiAoaW5mby5kYXlzKSB7XG4gICAgICAgIGNvbnN0IGRheXNTcGFuID0gY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtaG91cnMnLCBpbmZvLmRheXMpO1xuICAgICAgICBjb25zdCBob3Vyc1NwYW4gPSBjcmVhdGVTcGFuKCdjbGFzcycsICdjcy1ob3VycycsIGluZm8uaG91cnMpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5c1NwYW4pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNTcGFuKTtcbiAgICB9XG59XG4iLCIvLyBJbXBvcnRpbmcgaG9tZSBjb250ZW50cyBkYXRhIGZyb20gaG9tZUNvbnRlbnRzIG1vZHVsZVxuaW1wb3J0IHsgaG9tZUNvbnRlbnRzIH0gZnJvbSAnLi4vcGFnZURhdGEvaG9tZUNvbnRlbnRzLmpzJztcblxuLy8gSW1wb3J0aW5nIHV0aWxpdHkgZnVuY3Rpb25zIGZyb20gdGhlICdlbGVtZW50UmVuZGVyJyBtb2R1bGUuIFRoZXNlIGZ1bmN0aW9ucyBhcmUgdXNlZFxuLy8gZm9yIGNyZWF0aW5nIHZhcmlvdXMgSFRNTCBlbGVtZW50cyBkeW5hbWljYWxseVxuaW1wb3J0IHtcbiAgICBjcmVhdGVTZWN0aW9uLFxuICAgIGNyZWF0ZURpdixcbiAgICBjcmVhdGVQaWN0dXJlLFxuICAgIGNyZWF0ZUxpc3QsXG4gICAgY3JlYXRlTGlzdEl0ZW0sXG4gICAgY3JlYXRlU3BhbixcbiAgICBjcmVhdGVUb3BwZXIsXG4gICAgY3JlYXRlVGl0bGUsXG4gICAgY3JlYXRlUGFyYWdyYXBoLFxuICAgIGNsZWFyUGFnZSxcbn0gZnJvbSAnLi4vdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzJztcblxuLy8gRXh0cmFjdGluZyB0aGUgZmlyc3QgaXRlbSBmcm9tIGhvbWUgY29udGVudHMgdG8gdXNlIGFzIGhvbWUgcGFnZSBjb250ZW50XG5jb25zdCBIT01FX1BBR0VfQ09OVEVOVFMgPSBob21lQ29udGVudHNbMF07XG5cbi8vIE9iamVjdCBtYXBwaW5nIGNvbW1vbiBhdHRyaWJ1dGUgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBzdHJpbmcgcmVwcmVzZW50YXRpb25zXG5jb25zdCBhdHRyaWJ1dGVOYW1lID0geyBpZDogJ2lkJywgY2xhc3M6ICdjbGFzcycgfTtcblxuLyoqXG4gKiBMb2FkcyBhbmQgZGlzcGxheXMgdGhlIGhvbWUgcGFnZSBjb250ZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50IC0gVGhlIHBhcmVudCBlbGVtZW50IHdoZXJlIHRoZSBob21lIHBhZ2Ugd2lsbCBiZSByZW5kZXJlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZUxvYWRlcihjb250ZW50KSB7XG4gICAgY2xlYXJQYWdlKGNvbnRlbnQpO1xuXG4gICAgLy8gU2VsZWN0IHRoZSBtYWluIGNvbnRlbnQgYXJlYSBpbiB0aGUgRE9NXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIG1haW4gc2VjdGlvbiBhbmQgY29udGVudCBkaXZcbiAgICBjb25zdCBzZWN0aW9uID0gY3JlYXRlU2VjdGlvbihhdHRyaWJ1dGVOYW1lLmlkLCAnaG9tZS1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gY3JlYXRlRGl2KGF0dHJpYnV0ZU5hbWUuY2xhc3MsICdob21lLWNvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KTtcblxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIGxlZnQgYW5kIHJpZ2h0IGNvbnRlbnQgc2VjdGlvbnNcbiAgICBjb25zdCBjb250ZW50TGVmdCA9IHJlbmRlckNvbnRlbnRMZWZ0KCk7XG4gICAgY29uc3QgY29udGVudFJpZ2h0ID0gcmVuZGVyQ29udGVudFJpZ2h0KCk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudExlZnQpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRSaWdodCk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgbGVmdCBzZWN0aW9uIG9mIHRoZSBob21lIHBhZ2UgY29udGVudCBpbmNsdWRpbmcgaW1hZ2UgYW5kIHN0YXRzXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnRMZWZ0KCkge1xuICAgIGNvbnN0IGNvbnRlbnRMZWZ0ID0gY3JlYXRlRGl2KGF0dHJpYnV0ZU5hbWUuY2xhc3MsICdob21lLWNvbnRlbnQtbGVmdCcpO1xuICAgIGNvbnN0IGxlZnRJbWFnZSA9IGNyZWF0ZVBpY3R1cmUoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy1waWN0dXJlIGNzLXBpY3R1cmUtbGVmdCcsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5pbWFnZUxlZnRcbiAgICApO1xuICAgIGNvbnN0IHN0YXRzTGlzdCA9IGNyZWF0ZUxpc3QoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy1zdGF0cycsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5zdGF0cyxcbiAgICAgICAgKGl0ZW1EYXRhKSA9PlxuICAgICAgICAgICAgY3JlYXRlTGlzdEl0ZW0oXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgICAgICAgICAnY3Mtc3RhdCcsXG4gICAgICAgICAgICAgICAgaXRlbURhdGEsXG4gICAgICAgICAgICAgICAgcmVuZGVyTGlzdEl0ZW1Db250ZW50XG4gICAgICAgICAgICApXG4gICAgKTtcblxuICAgIGNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKGxlZnRJbWFnZSk7XG4gICAgY29udGVudExlZnQuYXBwZW5kQ2hpbGQoc3RhdHNMaXN0KTtcblxuICAgIHJldHVybiBjb250ZW50TGVmdDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IG9mIGEgc3RhdGlzdGljcyBpdGVtIGZvciBkaXNwbGF5IGluIGEgbGlzdCBpdGVtXG4gKiBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYW5kIHJldHVybnMgYSBkb2N1bWVudCBmcmFnbWVudCBjb250YWluaW5nIHRoZSBzdGF0J3MgbnVtYmVyIGFuZCBkZXNjcmlwdGlvblxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gVGhlIHN0YXRpc3RpY3MgZGF0YSBpdGVtLCBleHBlY3RlZCB0byBoYXZlICdudW0nIGFuZCAndGV4dCcgcHJvcGVydGllc1xuICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9IC0gVGhlIGRvY3VtZW50IGZyYWdtZW50IGNvbnRhaW5pbmcgdGhlIHJlbmRlcmVkIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyTGlzdEl0ZW1Db250ZW50KGl0ZW1EYXRhKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBudW1iZXJTcGFuID0gY3JlYXRlU3BhbihcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLW51bWJlcicsXG4gICAgICAgIGl0ZW1EYXRhLm51bVxuICAgICk7XG4gICAgY29uc3QgdGV4dFNwYW4gPSBjcmVhdGVTcGFuKGF0dHJpYnV0ZU5hbWUuY2xhc3MsICdjcy1kZXNjJywgaXRlbURhdGEudGV4dCk7XG5cbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChudW1iZXJTcGFuKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0U3Bhbik7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgcmlnaHQgc2VjdGlvbiBvZiB0aGUgaG9tZSBwYWdlIGNvbnRlbnQgaW5jbHVkaW5nIHRvcHBlciwgdGl0bGUsIHBhcmFncmFwaCwgYW5kIGltYWdlXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgcmlnaHQgY29udGVudCBzZWN0aW9uXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnRSaWdodCgpIHtcbiAgICBjb25zdCBjb250ZW50UmlnaHQgPSBjcmVhdGVEaXYoYXR0cmlidXRlTmFtZS5jbGFzcywgJ2hvbWUtY29udGVudC1yaWdodCcpO1xuICAgIGNvbnN0IHRvcHBlciA9IGNyZWF0ZVRvcHBlcihcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXRvcHBlcicsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5jb250ZW50LnRvcHBlclxuICAgICk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZShcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXRpdGxlJyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLmNvbnRlbnQudGl0bGVcbiAgICApO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGNyZWF0ZVBhcmFncmFwaChcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXRleHQnLFxuICAgICAgICBIT01FX1BBR0VfQ09OVEVOVFMuY29udGVudC5wYXJhZ3JhcGhcbiAgICApO1xuICAgIGNvbnN0IHJpZ2h0SW1hZ2UgPSBjcmVhdGVQaWN0dXJlKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3MtcGljdHVyZSBjcy1waWN0dXJlLXJpZ2h0JyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLmltYWdlUmlnaHRcbiAgICApO1xuXG4gICAgY29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRvcHBlcik7XG4gICAgY29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50UmlnaHQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICBjb250ZW50UmlnaHQuYXBwZW5kQ2hpbGQocmlnaHRJbWFnZSk7XG5cbiAgICByZXR1cm4gY29udGVudFJpZ2h0O1xufVxuIiwiLy8gSW1wb3J0aW5nIG1lbnUgY29udGVudHMgZGF0YSBmb3JtIG1lbnVDb250ZW50cyBtb2R1bGVcbmltcG9ydCB7IG1lbnVDb250ZW50cyB9IGZyb20gJy4uL3BhZ2VEYXRhL21lbnVDb250ZW50LmpzJztcblxuLy8gSW1wb3J0aW5nIHV0aWxpdHkgZnVuY3Rpb25zIGZyb20gdGhlICdlbGVtZW50UmVuZGVyZXInIG1vZHVsZS4gVGhlc2UgZnVuY3Rpb25zIGFyZSB1c2VkXG4vLyBmb3IgY3JlYXRpbmcgdmFyaW91cyBIVE1MIGVsZW1lbnRzIGR5bmFtaWNhbGx5XG5pbXBvcnQge1xuICAgIGNyZWF0ZVNlY3Rpb24sXG4gICAgY3JlYXRlRGl2LFxuICAgIGNyZWF0ZVBpY3R1cmUsXG4gICAgY3JlYXRlTGlzdCxcbiAgICBjcmVhdGVMaXN0SXRlbSxcbiAgICBjcmVhdGVTcGFuLFxuICAgIGNyZWF0ZVRpdGxlLFxuICAgIGNyZWF0ZVBhcmFncmFwaCxcbiAgICBjbGVhclBhZ2UsXG59IGZyb20gJy4uL3V0aWxpdHkvZWxlbWVudFJlbmRlci5qcyc7XG5cbi8vIEltcG9ydCB1cGRhdGVOYXZpZ2F0aW9uQWN0aXZlU3RhdGUgdG8gdXBkYXRlIHRoZSBhY3RpdmUgc3RhdGUgb2YgbmF2aWdhdGlvbiBidXR0b25zXG5pbXBvcnQgeyB1cGRhdGVOYXZpZ2F0aW9uQWN0aXZlU3RhdGUgfSBmcm9tICcuLi8uLi9pbmRleC5qcyc7XG5cbi8vIEltcG9ydCBjb250YWN0c1BhZ2VMb2FkZXIgdG8gbmF2aWdhdGUgdG8gY29udGFjdHNcbmltcG9ydCBjb250YWN0c1BhZ2VMb2FkZXIgZnJvbSAnLi9jb250YWN0c1BhZ2VMb2FkZXIuanMnO1xuXG4vLyBFeHRyYWN0aW5nIHRoZSBmaXJzdCBpdGVtIGZyb20gbWVudSBjb250ZW50cyB0byB1c2UgYXMgbWVudSBwYWdlIGNvbnRlbnRcbmNvbnN0IE1FTlVfUEFHRV9DT05URU5UUyA9IG1lbnVDb250ZW50c1swXTtcblxuLyoqXG4gKiBNYWluIGZ1bmN0aW9uIHRvIGxvYWQgYW5kIGRpc3BsYXkgdGhlIG1lbnUgcGFnZSBjb250ZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50IC0gVGhlIHBhcmVudCBlbGVtZW50IHdoZXJlIHRoZSBtZW51IHBhZ2Ugd2lsbCBiZSByZW5kZXJlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZUxvYWRlcihjb250ZW50KSB7XG4gICAgY2xlYXJQYWdlKGNvbnRlbnQpO1xuXG4gICAgLy8gU2VsZWN0IHRoZSBtYWluIGNvbnRlbnQgYXJlYSBvZiB0aGUgRE9NXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIGEgc2VjdGlvbiBmb3IgdGhlIG1lbnUgYW5kIGFwcGVuZCBpdCB0byB0aGUgbWFpbiBjb250ZW50XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oJ2lkJywgJ21lbnUtMTAwNScpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgLy8gUmVuZGVyIHRoZSBjb250YWluZXIgdGhhdCBob2xkcyB0aGUgbWVudSdzIGNvbnRlbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2VjdGlvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHJlbmRlckNvbnRhaW5lcigpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBwcmltYXJ5IGNvbnRhaW5lciBmb3IgdGhlIG1lbnUgcGFnZVxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjb250YWluZXIgZGl2IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdignY2xhc3MnLCAnY3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlckNvbnRlbnQoKTtcbiAgICBjb25zdCBjYXJkR3JvdXBDb250ZW50ID0gcmVuZGVyQ2FyZEdyb3VwKCk7XG4gICAgY29uc3QgcmVzZXJ2ZUJ1dHRvbiA9IGNyZWF0ZVJlc2VydmVCdXR0b24oKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEdyb3VwQ29udGVudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IHNlY3Rpb24gd2l0aCB0aXRsZSBhbmQgcGFyYWdyYXBoXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGNvbnRlbnQgc2VjdGlvbiBkaXYgZWxlbWVudFxuICovXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGl0bGUnLFxuICAgICAgICBNRU5VX1BBR0VfQ09OVEVOVFMuY29udGVudC50aXRsZVxuICAgICk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGV4dCcsXG4gICAgICAgIE1FTlVfUEFHRV9DT05URU5UUy5jb250ZW50LnBhcmFncmFwaFxuICAgICk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyBhIGdyb3VwIG9mIGNhcmRzIHJlcHJlc2VudGluZyBtZW51IGl0ZW1zXG4gKiBAcmV0dXJucyB7SFRNTFVMaXN0RWxlbWVudH0gLSBUaGUgY2FyZCBncm91cCBsaXN0IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ2FyZEdyb3VwKCkge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtY2FyZC1ncm91cCcsXG4gICAgICAgIE1FTlVfUEFHRV9DT05URU5UUy5jYXJkR3JvdXAsXG4gICAgICAgIChpdGVtRGF0YSkgPT5cbiAgICAgICAgICAgIGNyZWF0ZUxpc3RJdGVtKCdjbGFzcycsICdjcy1pdGVtJywgaXRlbURhdGEsIHJlbmRlckxpc3RJdGVtQ29udGVudClcbiAgICApO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBmb3IgYW4gaW5kaXZpZHVhbCBsaXN0IGl0ZW0gaW4gdGhlIGNhcmQgZ3JvdXBcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtRGF0YSAtIERhdGEgZm9yIGEgc2luZ2xlIG1lbnUgaXRlbVxuICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9IC0gVGhlIGZyYWdtZW50IGNvbnRhaW5pbmcgdGhlIGxpc3QgaXRlbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3RJdGVtQ29udGVudChpdGVtRGF0YSkge1xuICAgIC8vIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGl0ZW0gY29udGVudFxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHBpY3R1cmUgPSBjcmVhdGVQaWN0dXJlKCdjbGFzcycsICdjcy1waWN0dXJlJywgaXRlbURhdGEucGljdHVyZSk7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IHJlbmRlckluZm9Db250YWluZXIoaXRlbURhdGEpO1xuXG4gICAgcGljdHVyZS5zZXRBdHRyaWJ1dGUoJ2FyZWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChwaWN0dXJlKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBpbmZvcm1hdGlvbiBjb250YWluZXIgZm9yIGEgbWVudSBpdGVtXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBtZW51IGl0ZW1cbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gLSBUaGUgaW5mbyBjb250YWluZXIgZGl2IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVySW5mb0NvbnRhaW5lcihpdGVtRGF0YSkge1xuICAgIGNvbnN0IGluZm8gPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWluZm8nKTtcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gcmVuZGVySGVhZGluZ0NvbnRhaW5lcihpdGVtRGF0YSk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtaXRlbS1wJyxcbiAgICAgICAgaXRlbURhdGEuaW5mby5pdGVtUGFyYWdyYXBoXG4gICAgKTtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgaGVhZGluZyBjb250YWluZXIgZm9yIGEgbWVudSBpdGVtXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBtZW51IGl0ZW1cbiAqIEByZXR1cm5zIHtIVE1MSGVhZGluZ0VsZW1lbnR9IC0gVGhlIGhlYWRpbmcgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVySGVhZGluZ0NvbnRhaW5lcihpdGVtRGF0YSkge1xuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHRleHRTcGFuID0gY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtbmFtZScsIGl0ZW1EYXRhLmluZm8ubmFtZSk7XG4gICAgY29uc3QgbnVtYmVyU3BhbiA9IGNyZWF0ZVNwYW4oJ2NsYXNzJywgJ2NzLXByaWNlJywgaXRlbURhdGEuaW5mby5wcmljZSk7XG5cbiAgICBoZWFkaW5nQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3MtaDMnKTtcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRTcGFuKTtcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlclNwYW4pO1xuXG4gICAgcmV0dXJuIGhlYWRpbmdDb250YWluZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJ1dHRvbiBmb3IgcmVzZXJ2aW5nIGEgdGFibGUgYW5kIG5hdmlnYXRpbmcgdG8gY29udGFjdHMgcGFnZVxuICogQHJldHVybnMge0hUTUxBbmNob3JFbGVtZW50fSAtIFRoZSByZXNlcnZlIGJ1dHRvbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlc2VydmVCdXR0b24oKSB7XG4gICAgY29uc3QgcmVzZXJ2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpO1xuXG4gICAgcmVzZXJ2ZUJ1dHRvbi5pbm5lclRleHQgPSAnUmVzZXJ2ZSBZb3VyIFRhYmxlJztcbiAgICByZXNlcnZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NzLWJ1dHRvbi1zb2xpZCcpO1xuXG4gICAgcmVzZXJ2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb250YWN0c1BhZ2VMb2FkZXIodGFyZ2V0KTtcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkFjdGl2ZVN0YXRlKCdjb250YWN0cycpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc2VydmVCdXR0b247XG59XG4iLCIvL1xuLy8gICAgVGhlIERhcmsgTW9kZSBTeXN0ZW1cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhcmtNb2RlVG9nZ2xlcigpIHtcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb25zIHRvIHRvZ2dsZSBkYXJrIG1vZGVcbiAgICBmdW5jdGlvbiBlbmFibGVEYXJrTW9kZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzYWJsZURhcmtNb2RlKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmVzIGEgbmV3IHVzZXJzIGRhcmsgbW9kZSBwcmVmZXJlbmNlc1xuICAgIGZ1bmN0aW9uIGRldGVjdENvbG9yU2NoZW1lKCkge1xuICAgICAgICAvLyBkZWZhdWx0IHRvIHRoZSBsaWdodCB0aGVtZVxuICAgICAgICBsZXQgdGhlbWUgPSAnbGlnaHQnO1xuXG4gICAgICAgIC8vIGNoZWNrIGxvY2FsU3RvcmFnZSBmb3IgYSBzYXZlZCAndGhlbWUnIHZhcmlhYmxlLiBpZiBpdCdzIHRoZXJlLCB0aGUgdXNlciBoYXMgdmlzaXRlZCBiZWZvcmUsIHNvIGFwcGx5IHRoZSBuZWNlc3NhcnkgdGhlbWUgY2hvaWNlc1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHtcbiAgICAgICAgICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgaXQncyBub3QgdGhlcmUsIGNoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBoYXMgYXBwbGllZCBkYXJrIG1vZGUgcHJlZmVyZW5jZXMgdGhlbXNlbHZlcyBpbiB0aGUgYnJvd3NlclxuICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGVtZSA9ICdkYXJrJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHByZWZlcmVuY2Ugc2V0LCB0aGUgZGVmYXVsdCBvZiBsaWdodCB3aWxsIGJlIHVzZWQuIGFwcGx5IGFjY29yZGluZ2x5XG4gICAgICAgIHRoZW1lID09PSAnZGFyaycgPyBlbmFibGVEYXJrTW9kZSgpIDogZGlzYWJsZURhcmtNb2RlKCk7XG4gICAgfVxuXG4gICAgLy8gcnVuIG9uIHBhZ2UgbG9hZFxuICAgIGRldGVjdENvbG9yU2NoZW1lKCk7XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRhcmsgbW9kZSBidXR0b24gdG9nZ2xlXG4gICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKCdkYXJrLW1vZGUtdG9nZ2xlJylcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gb24gY2xpY2ssIGNoZWNrIGxvY2FsU3RvcmFnZSBmb3IgdGhlIGRhcmsgbW9kZSB2YWx1ZSwgdXNlIHRvIGFwcGx5IHRoZSBvcHBvc2l0ZSBvZiB3aGF0J3Mgc2F2ZWRcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnbGlnaHQnXG4gICAgICAgICAgICAgICAgPyBlbmFibGVEYXJrTW9kZSgpXG4gICAgICAgICAgICAgICAgOiBkaXNhYmxlRGFya01vZGUoKTtcbiAgICAgICAgfSk7XG59XG4iLCIvKipcbiAqIENyZWF0ZXMgYSBzZWN0aW9uIEhUTUwgZWxlbWVudCB3aXRoIHNwZWNpZmllZCBhdHRyaWJ1dGUgYW5kIHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBUaGUgY3JlYXRlZCBzZWN0aW9uIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24oYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGl2IEhUTUwgZWxlbWVudCB3aXRoIGEgc3BlY2lmaWVkIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgZGl2IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdihhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBpY3R1cmUgZWxlbWVudCB3aXRoIHByb3ZpZGVkIGF0dHJpYnV0ZXMgYW5kIHNvdXJjZXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZVNvdXJjZXMgLSBPYmplY3QgY29udGFpbmluZyBwaWN0dXJlIHNvdXJjZXMgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXNcbiAqIEByZXR1cm5zIHtIVE1MUGljdHVyZUVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgcGljdHVyZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQaWN0dXJlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCBpbWFnZVNvdXJjZXMpIHtcbiAgICBjb25zdCBwaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xuICAgIHBpY3R1cmUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcblxuICAgIE9iamVjdC5rZXlzKGltYWdlU291cmNlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT09ICdpbWcnKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoaW1nLCBpbWFnZVNvdXJjZXNba2V5XSk7XG4gICAgICAgICAgICBwaWN0dXJlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoc291cmNlLCBpbWFnZVNvdXJjZXNba2V5XSk7XG4gICAgICAgICAgICBwaWN0dXJlLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwaWN0dXJlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBsaXN0ICh1bCkgZWxlbWVudCB3aXRoIHByb3ZpZGVkIGF0dHJpYnV0ZXMuIFRoZSBsaXN0IGl0ZW1zIGFyZSBjcmVhdGVkIHVzaW5nIGEgcmVuZGVyaW5nIGV4cG9ydCBmdW5jdGlvbiBwYXNzZWQgYXMgYW4gYXJndW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjcy1zdGF0cycpXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIHRvIHBvcHVsYXRlIHRoZSBsaXN0IHdpdGguIEV4cGVjdHMgYW4gb2JqZWN0IHdoZXJlIGVhY2ggcHJvcGVydHkgY2FuIGJlIHJlbmRlcmVkIGFzIGEgbGlzdCBpdGVtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJJdGVtIC0gZXhwb3J0IGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gaXRlbSBvZiBkYXRhIGFuZCByZXR1cm5zIGEgbGlzdCBpdGVtIChsaSkgZWxlbWVudFxuICogQHJldHVybnMge0hUTUxVTGlzdEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgdW5vcmRlcmVkIGxpc3QgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdChcbiAgICBhdHRyaWJ1dGVOYW1lLFxuICAgIGF0dHJpYnV0ZVZhbHVlLFxuICAgIGl0ZW1EYXRhLFxuICAgIHJlbmRlckl0ZW1cbikge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxpc3Quc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcblxuICAgIGZvciAobGV0IGtleSBpbiBpdGVtRGF0YSkge1xuICAgICAgICBpZiAoaXRlbURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChyZW5kZXJJdGVtKGl0ZW1EYXRhW2tleV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBsaXN0IGl0ZW0gKGxpKSBlbGVtZW50IHVzaW5nIGEgcHJvdmlkZWQgcmVuZGVyaW5nIGV4cG9ydCBmdW5jdGlvbiBmb3IgdGhlIGl0ZW0ncyBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NsYXNzJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlIChlLmcuLCAnY3Mtc3RhdCcpXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbSAtIERhdGEgaXRlbSB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGxpc3QgaXRlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyQ29udGVudCAtIGV4cG9ydCBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBpdGVtIGFuZCByZXR1cm5zIHRoZSBjb250ZW50IHRvIGJlIHBsYWNlZCBpbnNpZGUgdGhlIGxpc3QgaXRlbVxuICogQHJldHVybnMge0hUTUxMSUVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgbGlzdCBpdGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbShcbiAgICBhdHRyaWJ1dGVOYW1lLFxuICAgIGF0dHJpYnV0ZVZhbHVlLFxuICAgIGl0ZW0sXG4gICAgcmVuZGVyQ29udGVudFxuKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyQ29udGVudChpdGVtKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHJldHVybiBsaXN0SXRlbTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3BhbiBlbGVtZW50IHdpdGggYSBzcGVjaWZpZWQgY2xhc3MgYW5kIHRleHQgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgY29udGVudCBmb3IgdGhlIHNwYW5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBUaGUgY3JlYXRlZCBzcGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwYW4oYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIHRleHQpIHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICByZXR1cm4gc3Bhbjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9wcGVyIGVsZW1lbnQgKHNwYW4pIHdpdGggYSBzcGVjaWZpZWQgY2xhc3MgYW5kIHRleHQgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjbGFzcycpXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGNvbnRlbnQgZm9yIHRoZSB0b3BwZXJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBUaGUgY3JlYXRlZCB0b3BwZXIgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9wcGVyKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCB0ZXh0KSB7XG4gICAgY29uc3QgdG9wcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvcHBlci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIHRvcHBlci5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHRvcHBlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGl0bGUgZWxlbWVudCAoaDIpIHdpdGggYSBzcGVjaWZpZWQgY2xhc3MgYW5kIHRleHQgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjbGFzcycpXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGNvbnRlbnQgZm9yIHRoZSB0aXRsZVxuICogQHJldHVybnMge0hUTUxIZWFkaW5nRWxlbWVudH0gLSBUaGUgY3JlYXRlZCB0aXRsZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgdGV4dCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiB0aXRsZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyYWdyYXBoIGVsZW1lbnQgKHApIHdpdGggYSBzcGVjaWZpZWQgY2xhc3MgYW5kIHRleHQgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjbGFzcycpXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGNvbnRlbnQgZm9yIHRoZSBwYXJhZ3JhcGhcbiAqIEByZXR1cm5zIHtIVE1MUGFyYWdyYXBoRWxlbWVudH0gLSBUaGUgY3JlYXRlZCBwYXJhZ3JhcGggZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCB0ZXh0KSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFncmFwaC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG4vKipcbiAqIFNldHMgbXVsdGlwbGUgYXR0cmlidXRlcyBvbiBhIERPTSBlbGVtZW50IGJhc2VkIG9uIGEgcHJvdmlkZWQgb2JqZWN0XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50IHRvIHNldCBhdHRyaWJ1dGVzIG9uXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlcyAtIE9iamVjdCBjb250YWluaW5nIGtleS12YWx1ZSBwYWlycyBmb3IgYXR0cmlidXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGNvbnRlbnQgb2YgYSBzcGVjaWZpZWQgcGFyZW50IGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCAtIFRoZSBwYXJlbnQgZWxlbWVudCB3aG9zZSBjb250ZW50IGlzIHRvIGJlIGNsZWFyZWRcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIFJldHVybnMgdHJ1ZSB0byBpbmRpY2F0ZSB0aGUgb3BlcmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclBhZ2UocGFyZW50KSB7XG4gICAgcGFyZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGluayAoYW5jaG9yKSBlbGVtZW50IHdpdGggc3BlY2lmaWVkIGF0dHJpYnV0ZXMgYW5kIHRleHQgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgLSBUaGUgYXR0cmlidXRlIG5hbWUgdG8gc2V0IG9uIHRoZSBsaW5rIChlLmcuLCAnaHJlZicpXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlZhbHVlIC0gVGhlIHZhbHVlIGZvciB0aGUgaHJlZiBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gdGhlIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NsYXNzJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFRoZSB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUaGUgdGV4dCBjb250ZW50IGZvciB0aGUgbGlua1xuICogQHJldHVybnMge0hUTUxBbmNob3JFbGVtZW50fSAtIFRoZSBjcmVhdGVkIGFuY2hvciBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaW5rKFxuICAgIGhyZWYsXG4gICAgaHJlZlZhbHVlLFxuICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgYXR0cmlidXRlVmFsdWUsXG4gICAgdGV4dFxuKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGxpbmsuc2V0QXR0cmlidXRlKGhyZWYsIGhyZWZWYWx1ZSk7XG4gICAgbGluay5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXG4gICAgcmV0dXJuIGxpbms7XG59XG4iLCIvLyBTZWxlY3QgRE9NIGVsZW1lbnRzIGZvciBtb2JpbGUgbmF2aWdhdGlvblxudmFyIENTYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IENTbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uJyk7XG5jb25zdCBDU2hhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlJyk7XG5cbi8qKlxuICogU2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIG1vYmlsZSBuYXZpZ2F0aW9uIHRvZ2dsaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZygpIHtcbiAgICBDU2hhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIENTaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgQ1NuYXZiYXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICBDU2JvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnY3Mtb3BlbicpO1xuICAgICAgICAvLyBydW4gdGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBhcmlhLWV4cGFuZGVkIHZhbHVlXG4gICAgICAgIGFyaWFFeHBhbmRlZCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGFuZCB0b2dnbGVzIHRoZSAnYXJpYS1leHBhbmRlZCcgYXR0cmlidXRlIG9uIHRoZSBuYXZpZ2F0aW9uIGxpc3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhcmlhRXhwYW5kZWQoKSB7XG4gICAgICAgIGNvbnN0IGNzVUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtZXhwYW5kZWQnKTtcbiAgICAgICAgY29uc3QgY3NFeHBhbmRlZCA9IGNzVUwuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHRoZSAnYXJpYS1leHBhbmRlZCcgYXR0cmlidXRlIGJhc2VkIG9uIGl0cyBjdXJyZW50IHN0YXRlLlxuICAgICAgICBpZiAoY3NFeHBhbmRlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCB1cCBjbGljayBldmVudCBsaXN0ZW5lcnMgZm9yIGRyb3Bkb3duIGl0ZW1zIGluIHRoZSBtb2JpbGUgbmF2aWdhdGlvblxuICAgIGNvbnN0IGRyb3BEb3ducyA9IEFycmF5LmZyb20oXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjcy1uYXZpZ2F0aW9uIC5jcy1kcm9wZG93bicpXG4gICAgKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZHJvcERvd25zKSB7XG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICB9O1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9