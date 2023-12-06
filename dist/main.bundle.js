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
    body.dark-mode .cs-li {
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
        top: 6%;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/dark.css"],"names":[],"mappings":"AAAA;;kCAEkC;AAClC,WAAW;AACX;IACI;QACI,eAAe;QACf,iBAAiB;QACjB,iBAAiB;QACjB,6BAA6B;IACjC;;IAEA;QACI,6BAA6B;IACjC;;IAEA;;;;;;;;;;;QAWI,gCAAgC;IACpC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,oFAAoF;QACpF,aAAa;IACjB;AACJ;;AAEA;;oCAEoC;AACpC,WAAW;AACX;IACI;QACI,gCAAgC;QAChC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,OAAO;QACP,2BAA2B;QAC3B,cAAc;QACd,WAAW;QACX,YAAY;QACZ,uBAAuB;QACvB,YAAY;QACZ,gBAAgB;QAChB,UAAU;IACd;;IAEA;;QAEI,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,gCAAgC;QAChC,gBAAgB;QAChB,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,UAAU;QACV;;qBAEa;QACb,UAAU;IACd;;IAEA;QACI,UAAU;QACV,gCAAgC;QAChC,UAAU;QACV;wBACgB;IACpB;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,kBAAkB;QAClB,SAAS;QACT,WAAW;QACX,eAAe;QACf,qBAAqB;QACrB,mBAAmB;IACvB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,gCAAgC;QAChC,UAAU;IACd;AACJ","sourcesContent":["/*-- -------------------------- -->\n<---      Core Dark Styles      -->\n<--- -------------------------- -*/\n/* Mobile */\n@media only screen and (min-width: 0rem) {\n    :root {\n        --dark: #082032;\n        --medium: #2c394b;\n        --accent: #334756;\n        --bodyTextColorWhite: #fafbfc;\n    }\n\n    body.dark-mode {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode p,\n    body.dark-mode li,\n    body.dark-mode h1,\n    body.dark-mode h2,\n    body.dark-mode h3,\n    body.dark-mode h4,\n    body.dark-mode h5,\n    body.dark-mode h6,\n    body.dark-mode .cs-title,\n    body.dark-mode .cs-text,\n    body.dark-mode .cs-li {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode .light {\n        display: none;\n    }\n\n    body.dark-mode .dark {\n        display: block !important;\n    }\n\n    .dark {\n        /* class used to hide elements that only need to be seen when dark mode is enabled */\n        display: none;\n    }\n}\n\n/*-- -------------------------- -->\n  <---      Dark Mode Toggle      -->\n  <--- -------------------------- -*/\n/* Mobile */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #dark-mode-toggle .cs-sun {\n        transform: translate(-50%, -50%);\n        opacity: 1;\n    }\n\n    body.dark-mode #dark-mode-toggle .cs-moon {\n        transform: translate(-50%, -150%);\n        opacity: 0;\n    }\n\n    #dark-mode-toggle {\n        display: block;\n        position: absolute;\n        top: 6%;\n        transform: translateY(-50%);\n        right: 3.75rem;\n        width: 3rem;\n        height: 3rem;\n        background: transparent;\n        border: none;\n        overflow: hidden;\n        padding: 0;\n    }\n\n    #dark-mode-toggle img,\n    #dark-mode-toggle svg {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 1.5625rem;\n        height: 1.5625rem;\n        pointer-events: none;\n    }\n\n    #dark-mode-toggle .cs-moon {\n        z-index: 2;\n        transition: transform 0.3s,\n            opacity 0.3s,\n            fill 0.3s;\n        fill: #000;\n    }\n\n    #dark-mode-toggle .cs-sun {\n        z-index: 1;\n        transform: translate(-50%, 100%);\n        opacity: 0;\n        transition: transform 0.3s,\n            opacity 0.3s;\n    }\n}\n\n/* Desktop */\n@media only screen and (min-width: 64rem) {\n    #dark-mode-toggle {\n        position: relative;\n        top: auto;\n        right: auto;\n        transform: none;\n        margin-left: 1.875rem;\n        margin-bottom: 0rem;\n    }\n    #dark-mode-toggle:hover {\n        cursor: pointer;\n    }\n\n    #dark-mode-toggle .moon {\n        /* change to whatever you need */\n        fill: #fff;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary: #ff6a3e;
    --primaryLight: #ffba43;
    --secondary: #ffba43;
    --secondaryLight: #ffba43;
    --headerColor: #1a1a1a;
    --headerColorDark: #082032;
    --headerColorMedium: #2c394b;
    --bodyTextColor: #4e4b66;
    --bodyTextColorWhite: #fafbfc;
    /* 13px - 16px */
    --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);
    /* 31px - 49px */
    --headerFontSize: clamp(1rem, 2vw, 2rem);
    --bodyFontSize: 1rem;
    /* 60px - 100px top and bottom */
    --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;
}

body {
    margin: 0;
    padding: 0;
    height: auto;
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
    /* height: 1rem; */
}

*,
*:before,
*:after {
    /* prevents padding from affecting height and width */
    box-sizing: border-box;
}

.cs-topper {
    font-size: var(--topperFontSize);
    line-height: 1.2em;
    text-transform: uppercase;
    text-align: inherit;
    letter-spacing: .1em;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 0.25rem;
    display: block;
}

.cs-title {
    font-size: var(--headerFontSize);
    font-weight: 900;
    line-height: 1.2em;
    text-align: inherit;
    max-width: 43.75rem;
    margin: 0 0 1rem 1rem;
    color: var(--headerColor);
    position: relative;
}

.cs-text {
    font-size: var(--bodyFontSize);
    line-height: 1.5em;
    text-align: inherit;
    width: 100%;
    max-width: 40.625rem;
    margin: 0;
    color: var(--bodyTextColor);
}

#cs-navigation .page-title,
#cs-navigation>.page-title:visited {
    text-decoration: none;
    color: var(--headerColorMedium);
}

`, "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,yBAAyB;IACzB,sBAAsB;IACtB,0BAA0B;IAC1B,4BAA4B;IAC5B,wBAAwB;IACxB,6BAA6B;IAC7B,gBAAgB;IAChB,+CAA+C;IAC/C,gBAAgB;IAChB,wCAAwC;IACxC,oBAAoB;IACpB,gCAAgC;IAChC,sDAAsD;AAC1D;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;;;IAGI,qDAAqD;IACrD,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,qBAAqB;IACrB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,SAAS;IACT,2BAA2B;AAC/B;;AAEA;;IAEI,qBAAqB;IACrB,+BAA+B;AACnC","sourcesContent":[":root {\n    --primary: #ff6a3e;\n    --primaryLight: #ffba43;\n    --secondary: #ffba43;\n    --secondaryLight: #ffba43;\n    --headerColor: #1a1a1a;\n    --headerColorDark: #082032;\n    --headerColorMedium: #2c394b;\n    --bodyTextColor: #4e4b66;\n    --bodyTextColorWhite: #fafbfc;\n    /* 13px - 16px */\n    --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);\n    /* 31px - 49px */\n    --headerFontSize: clamp(1rem, 2vw, 2rem);\n    --bodyFontSize: 1rem;\n    /* 60px - 100px top and bottom */\n    --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: auto;\n}\n\n#content {\n    position: relative; \n    min-height: 100vh;\n    padding-bottom: 200px;\n}\n\nfooter {\n    position: absolute;\n    margin-top: auto;\n    bottom: 0;\n    width: 100%;\n    font-family: inherit;\n    /* height: 1rem; */\n}\n\n*,\n*:before,\n*:after {\n    /* prevents padding from affecting height and width */\n    box-sizing: border-box;\n}\n\n.cs-topper {\n    font-size: var(--topperFontSize);\n    line-height: 1.2em;\n    text-transform: uppercase;\n    text-align: inherit;\n    letter-spacing: .1em;\n    font-weight: 700;\n    color: var(--primary);\n    margin-bottom: 0.25rem;\n    display: block;\n}\n\n.cs-title {\n    font-size: var(--headerFontSize);\n    font-weight: 900;\n    line-height: 1.2em;\n    text-align: inherit;\n    max-width: 43.75rem;\n    margin: 0 0 1rem 1rem;\n    color: var(--headerColor);\n    position: relative;\n}\n\n.cs-text {\n    font-size: var(--bodyFontSize);\n    line-height: 1.5em;\n    text-align: inherit;\n    width: 100%;\n    max-width: 40.625rem;\n    margin: 0;\n    color: var(--bodyTextColor);\n}\n\n#cs-navigation .page-title,\n#cs-navigation>.page-title:visited {\n    text-decoration: none;\n    color: var(--headerColorMedium);\n}\n\n"],"sourceRoot":""}]);
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

    #cs-navigation {
        width: 100%;
        box-sizing: border-box;
        padding: 0.75rem 1rem;
        background-color: #fff;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        /* position: fixed;
        z-index: 10000; */
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
    #home-content {
        padding: var(--sectionPadding);
    }

    #home-content .cs-container {
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

    #home-content .cs-content {
        /* set text align to left if content needs to be left aligned */
        text-align: left;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* centers content horizontally, set to flex-start to left align */
        align-items: flex-start;
    }

    #home-content .cs-text {
        margin-bottom: 1rem;
    }

    #home-content .cs-text:last-of-type {
        margin-bottom: 2rem;
    }

    #home-content .cs-picture {
        width: 100%;
        display: block;
        position: relative;
        z-index: 1;
    }

    #home-content .cs-picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    #home-content .cs-picture-right {
        height: 95vw;
        max-height: 25rem;
    }

    #home-content .cs-picture-left {
        height: 111vw;
        max-height: 31.25rem;
    }

    #home-content .cs-stats-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* 28px - 40px */
        gap: clamp(1.75rem, 3vw, 2.5rem);
    }

    #home-content .cs-stats {
        width: 100%;
        max-width: 39.375rem;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        row-gap: 1.5rem;
        column-gap: 0.75rem;
    }

    #home-content .cs-stat {
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

    #home-content .cs-number {
        /* 31px - 39px */
        font-size: clamp(1.9375rem, 3vw, 2.4375rem);
        line-height: 1.2em;
        font-weight: 700;
        text-align: left;
        color: var(--headerColor);
        display: block;
        margin: 0 0 0.25rem 0;
    }

    #home-content .cs-desc {
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
    #home-content .cs-container {
        max-width: 80rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    }

    #home-content .cs-content {
        /* sends it to the right in the 2nd position */
        order: 2;
    }

    #home-content .cs-picture-right {
        /* 340px - 460px */
        min-height: clamp(21.25rem, 35vw, 28.75rem);
        height: 100%;
        max-height: 100%;
    }

    #home-content .cs-picture-left {
        /* 530px - 660px */
        min-height: clamp(33.125rem, 45vw, 41.25rem);
        height: 100%;
        max-height: 100%;
    }
}

/* Dark Mode */
@media only screen and (min-width: 0rem) {

    body.dark-mode #home-content .cs-title,
    body.dark-mode #home-content .cs-text,
    body.dark-mode #home-content .cs-number,
    body.dark-mode #home-content .cs-desc {
        color: var(--bodyTextColorWhite);
    }

    body.dark-mode #home-content .cs-text,
    body.dark-mode #home-content .cs-desc {
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/*-- -------------------------- -->\n  <---     Mobile Navigation      -->\n  <--- -------------------------- -*/\n/* Mobile - 1023px */\n@media only screen and (max-width: 63.9375rem) {\n    body.cs-open {\n        overflow: hidden;\n    }\n\n    #cs-navigation {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 0.75rem 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        /* position: fixed;\n        z-index: 10000; */\n    }\n\n    #cs-navigation:before {\n        content: \"\";\n        width: 100%;\n        height: 0vh;\n        background: rgba(0, 0, 0, 0.6);\n        opacity: 0;\n        display: block;\n        position: absolute;\n        top: 100%;\n        right: 0;\n        z-index: -1100;\n        transition: height 0.5s, opacity 0.5s;\n        -webkit-backdrop-filter: blur(10px);\n        backdrop-filter: blur(10px);\n    }\n\n    #cs-navigation.cs-active:before {\n        height: 150vh;\n        opacity: 1;\n    }\n\n    #cs-navigation.cs-active .cs-ul-wrapper {\n        opacity: 1;\n        transform: scaleY(1);\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation.cs-active .cs-li {\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n\n    #cs-navigation .page-title {\n        width: 50%;\n        max-width: 14rem;\n        height: 100%;\n        margin: 0 auto 0 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 10;\n    }\n\n\n    #cs-navigation .cs-toggle {\n        /* 44px - 48px */\n        width: clamp(2.75rem, 6vw, 3rem);\n        height: clamp(2.75rem, 6vw, 3rem);\n        margin: 0 0 0 auto;\n        background-color: transparent;\n        border: none;\n        border-radius: 0.25rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-navigation .cs-active .cs-line1 {\n        top: 50%;\n        transform: translate(-50%, -50%) rotate(225deg);\n    }\n\n    #cs-navigation .cs-active .cs-line2 {\n        top: 50%;\n        transform: translate(-50%, -50%) translateY(0) rotate(-225deg);\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-active .cs-line3 {\n        opacity: 0;\n        bottom: 100%;\n    }\n\n    #cs-navigation .cs-box {\n        /* 24px - 28px */\n        width: clamp(1.5rem, 2vw, 1.75rem);\n        /* 14px - 16px */\n        height: clamp(0.875rem, 1.5vw, 1rem);\n        position: relative;\n    }\n\n    #cs-navigation .cs-line {\n        width: 100%;\n        height: 2px;\n        background-color: #1a1a1a;\n        border-radius: 2px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    #cs-navigation .cs-line1 {\n        top: 0;\n        transition: transform 0.5s, top 0.3s, left 0.3s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-line2 {\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        transition: top 0.3s, left 0.3s, transform 0.5s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n    }\n\n    #cs-navigation .cs-line3 {\n        bottom: 0;\n        transition: bottom 0.3s, opacity 0.3s;\n    }\n\n    #cs-navigation .cs-ul-wrapper {\n        width: 100%;\n        height: auto;\n        padding-bottom: 2.4em;\n        background-color: #fff;\n        box-shadow: inset rgba(0, 0, 0, 0.2) 0px 8px 24px;\n        opacity: 0;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        z-index: -1;\n        overflow: hidden;\n        transform: scaleY(0);\n        transition: transform 0.4s, opacity 0.3s;\n        transform-origin: top;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        height: auto;\n        max-height: 65vh;\n        margin: 0;\n        padding: 3rem 0 0 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1.25rem;\n        overflow: scroll;\n    }\n\n    #cs-navigation .cs-li {\n        text-align: center;\n        list-style: none;\n        width: 100%;\n        margin-right: 0;\n        opacity: 0;\n        /* transition from these values */\n        transform: translateY(-4.375rem);\n        transition: transform 0.6s, opacity 0.9s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(1) {\n        transition-delay: 0.05s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(2) {\n        transition-delay: 0.1s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(3) {\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(4) {\n        transition-delay: 0.2s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(5) {\n        transition-delay: 0.25s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(6) {\n        transition-delay: 0.3s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(7) {\n        transition-delay: 0.35s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(8) {\n        transition-delay: 0.4s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(9) {\n        transition-delay: 0.45s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(10) {\n        transition-delay: 0.5s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(11) {\n        transition-delay: 0.55s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(12) {\n        transition-delay: 0.6s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(13) {\n        transition-delay: 0.65s;\n    }\n\n    #cs-navigation .cs-li-link {\n        /* 16px - 24px */\n        font-size: clamp(1.2rem, 2.5vw, 1.7rem);\n        line-height: 1.2em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--headerColor);\n        display: inline-block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 100%;\n        height: 1px;\n        background: currentColor;\n        opacity: 1;\n        display: none;\n        position: absolute;\n        bottom: -0.125rem;\n        left: 0;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        display: block;\n    }\n\n}\n\n/* Dark Mode */\n@media only screen and (max-width: 63.9375rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-line {\n        background-color: #fff;\n    }\n\n    body.dark-mode #cs-navigation .cs-ul-wrapper {\n        background-color: var(--medium);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n}\n\n/*-- -------------------------- -->\n  <---     Desktop Navigation     -->\n  <--- -------------------------- -*/\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #cs-navigation {\n        width: 100%;\n        /* prevents padding and border from affecting height and width */\n        box-sizing: border-box;\n        padding: 0 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        /* position: fixed;\n        z-index: 10000; */\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 1.5rem;\n    }\n\n    #cs-navigation .cs-toggle {\n        display: none;\n    }\n\n    #cs-navigation .page-title {\n        width: 30%;\n        max-width: 30rem;\n        height: 7rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 100;\n    }\n\n    #cs-navigation .page-title h1 {\n        font-size: 3em;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        /* 20px - 36px */\n        gap: clamp(1.25rem, 2.6vw, 2.25rem);\n    }\n\n    #cs-navigation .cs-li {\n        list-style: none;\n        padding: 2rem 0;\n        /* prevent flexbox from squishing it */\n        flex: none;\n    }\n\n    #cs-navigation .cs-li-link {\n        font-size: clamp(1.2rem, 1vw, 1.2rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--bodyTextColor);\n        display: block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 0%;\n        height: 2px;\n        background: var(--primary);\n        opacity: 1;\n        display: block;\n        position: absolute;\n        bottom: 0rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 64rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it turn white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link:before {\n        background-color: var(--primaryLight);\n    }\n}\n\n/*-- -------------------------- -->\n<---   Side By Side Reverse     -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #home-content {\n        padding: var(--sectionPadding);\n    }\n\n    #home-content .cs-container {\n        width: 100%;\n        /* changes to 1280px at tablet */\n        max-width: 36.5rem;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 6vw, 4rem);\n    }\n\n    #home-content .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: left;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: flex-start;\n    }\n\n    #home-content .cs-text {\n        margin-bottom: 1rem;\n    }\n\n    #home-content .cs-text:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    #home-content .cs-picture {\n        width: 100%;\n        display: block;\n        position: relative;\n        z-index: 1;\n    }\n\n    #home-content .cs-picture img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    #home-content .cs-picture-right {\n        height: 95vw;\n        max-height: 25rem;\n    }\n\n    #home-content .cs-picture-left {\n        height: 111vw;\n        max-height: 31.25rem;\n    }\n\n    #home-content .cs-stats-group {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* 28px - 40px */\n        gap: clamp(1.75rem, 3vw, 2.5rem);\n    }\n\n    #home-content .cs-stats {\n        width: 100%;\n        max-width: 39.375rem;\n        padding: 0;\n        margin: 0;\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        row-gap: 1.5rem;\n        column-gap: 0.75rem;\n    }\n\n    #home-content .cs-stat {\n        list-style: none;\n        margin: 0;\n        padding: 0 0 1.5rem 0;\n        border-bottom: 1px solid var(--primary);\n        /* making flex so we can align a heading with 1 line to the bottom */\n        display: flex;\n        grid-column: span 4;\n        flex-direction: column;\n        align-self: stretch;\n        align-content: space-between;\n    }\n\n    #home-content .cs-number {\n        /* 31px - 39px */\n        font-size: clamp(1.9375rem, 3vw, 2.4375rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        color: var(--headerColor);\n        display: block;\n        margin: 0 0 0.25rem 0;\n    }\n\n    #home-content .cs-desc {\n        font-size: 1rem;\n        line-height: 1.5em;\n        font-weight: 400;\n        text-align: left;\n        /* auto margin top will push text to bottom if there's only one line */\n        margin: 0;\n        color: var(--bodyTextColor);\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #home-content .cs-container {\n        max-width: 80rem;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: stretch;\n    }\n\n    #home-content .cs-content {\n        /* sends it to the right in the 2nd position */\n        order: 2;\n    }\n\n    #home-content .cs-picture-right {\n        /* 340px - 460px */\n        min-height: clamp(21.25rem, 35vw, 28.75rem);\n        height: 100%;\n        max-height: 100%;\n    }\n\n    #home-content .cs-picture-left {\n        /* 530px - 660px */\n        min-height: clamp(33.125rem, 45vw, 41.25rem);\n        height: 100%;\n        max-height: 100%;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n\n    body.dark-mode #home-content .cs-title,\n    body.dark-mode #home-content .cs-text,\n    body.dark-mode #home-content .cs-number,\n    body.dark-mode #home-content .cs-desc {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #home-content .cs-text,\n    body.dark-mode #home-content .cs-desc {\n        opacity: .8;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Footer           -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #cs-footer-108 {\n        /* 40px - 100px top and bottom */\n        padding: clamp(1rem, 4.9vw, 2.25rem) 1rem;\n        /* 40px - 50px */\n        padding-bottom: clamp(1.5rem, 6.9vw, 2.125rem);\n    }\n\n    #cs-footer-108 .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n    }\n\n    #cs-footer-108 .cs-ul {\n        /* 40px - 60px*/\n        padding: 0 0 clamp(2rem, 4.7vw, .75rem);\n        margin: auto;\n        border-bottom: 1px solid #eff0f6;\n    }\n\n    #cs-footer-108 .cs-li {\n        list-style: none;\n        text-align: center;\n        margin-bottom: 1.25rem;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin-bottom: 0;\n    }\n\n    #cs-footer-108 .cs-link {\n        /* 16px - 20px */\n        font-size: clamp(0.8rem, 0.15s, 1rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        font-weight: 700;\n        color: var(--bodyTextColor);\n        position: relative;\n    }\n\n    #cs-footer-108 .cs-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-footer-108 .cs-link:before {\n        /* top right box */\n        content: \"\";\n        width: 0%;\n        height: 0.1875rem;\n        background: var(--bodyTextColor);\n        opacity: 1;\n        position: absolute;\n        display: block;\n        bottom: -0.125rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n\n    #cs-footer-108 .cs-copyright {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 1.6vw, 1rem);\n        text-align: center;\n        color: #a0a3bd;\n        display: block;\n        /* 20px - 28px */\n        margin: clamp(1.25rem, 2.8vw, 1.75rem) auto 0;\n    }\n}\n\n/* Tablet - 600px */\n@media only screen and (min-width: 37.5rem) {\n    #cs-footer-108 .cs-ul {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-footer-108 .cs-li {\n        /* 44px - 88px */\n        margin: 0 clamp(2.75rem, 6.2vw, 5.5rem) 0 0;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin: 0;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #cs-footer-108 {\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link {\n        color: #fff;\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link:before {\n        background: #fff;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_img_homePageLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/homePageLeft.png */ "./src/assets/img/homePageLeft.png");
/* harmony import */ var _assets_img_homePageRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/homePageRight.png */ "./src/assets/img/homePageRight.png");






// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle('cs-active');
    CSnavbarMenu.classList.toggle('cs-active');
    CSbody.classList.toggle('cs-open');
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(
    document.querySelectorAll('#cs-navigation .cs-dropdown')
);
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active');
    };
    item.addEventListener('click', onClick);
}

//
//    The Dark Mode System
//

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
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    // on click, check localStorage for the dark mode value, use to apply the opposite of what's saved
    localStorage.getItem('theme') === 'light'
        ? enableDarkMode()
        : disableDarkMode();
});


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxlQUFlLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxPQUFPLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssT0FBTyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLGdNQUFnTSxhQUFhLDBCQUEwQiw0QkFBNEIsNEJBQTRCLHdDQUF3QyxPQUFPLHdCQUF3Qix3Q0FBd0MsT0FBTywyUkFBMlIsMkNBQTJDLE9BQU8sK0JBQStCLHdCQUF3QixPQUFPLDhCQUE4QixvQ0FBb0MsT0FBTyxlQUFlLHVIQUF1SCxPQUFPLEdBQUcsK0tBQStLLGdEQUFnRCwyQ0FBMkMscUJBQXFCLE9BQU8sbURBQW1ELDRDQUE0QyxxQkFBcUIsT0FBTywyQkFBMkIseUJBQXlCLDZCQUE2QixrQkFBa0Isc0NBQXNDLHlCQUF5QixzQkFBc0IsdUJBQXVCLGtDQUFrQyx1QkFBdUIsMkJBQTJCLHFCQUFxQixPQUFPLDJEQUEyRCw2QkFBNkIsbUJBQW1CLG9CQUFvQiwyQ0FBMkMsMkJBQTJCLDRCQUE0QiwrQkFBK0IsT0FBTyxvQ0FBb0MscUJBQXFCLHdGQUF3RixxQkFBcUIsT0FBTyxtQ0FBbUMscUJBQXFCLDJDQUEyQyxxQkFBcUIsZ0VBQWdFLE9BQU8sR0FBRyw4REFBOEQseUJBQXlCLDZCQUE2QixvQkFBb0Isc0JBQXNCLDBCQUEwQixnQ0FBZ0MsOEJBQThCLE9BQU8sK0JBQStCLDBCQUEwQixPQUFPLGlDQUFpQyxnRUFBZ0UsT0FBTyxHQUFHLG1CQUFtQjtBQUNqcEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0ZBQXdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGlDQUFpQyx5QkFBeUIsOEJBQThCLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLGlDQUFpQyxtQ0FBbUMsK0JBQStCLG9DQUFvQyw2RUFBNkUsc0VBQXNFLDJCQUEyQixvR0FBb0csR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsbUJBQW1CLEdBQUcsY0FBYywwQkFBMEIsd0JBQXdCLDRCQUE0QixHQUFHLFlBQVkseUJBQXlCLHVCQUF1QixnQkFBZ0Isa0JBQWtCLDJCQUEyQix1QkFBdUIsS0FBSyw0QkFBNEIseUZBQXlGLEdBQUcsZ0JBQWdCLHVDQUF1Qyx5QkFBeUIsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsdUJBQXVCLDRCQUE0Qiw2QkFBNkIscUJBQXFCLEdBQUcsZUFBZSx1Q0FBdUMsdUJBQXVCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDRCQUE0QixnQ0FBZ0MseUJBQXlCLEdBQUcsY0FBYyxxQ0FBcUMseUJBQXlCLDBCQUEwQixrQkFBa0IsMkJBQTJCLGdCQUFnQixrQ0FBa0MsR0FBRyxxRUFBcUUsNEJBQTRCLHNDQUFzQyxHQUFHLHVCQUF1QjtBQUM1dEY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFFBQVEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxVQUFVLEtBQUssTUFBTSxNQUFNLFFBQVEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFlB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O0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2I2QjtBQUNGO0FBQ0Q7QUFDK0I7QUFDRTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9kYXJrLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2RhcmsuY3NzPzIxMmMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3M/ZjBkOCIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgIENvcmUgRGFyayBTdHlsZXMgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBNb2JpbGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1kYXJrOiAjMDgyMDMyO1xuICAgICAgICAtLW1lZGl1bTogIzJjMzk0YjtcbiAgICAgICAgLS1hY2NlbnQ6ICMzMzQ3NTY7XG4gICAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgcCxcbiAgICBib2R5LmRhcmstbW9kZSBsaSxcbiAgICBib2R5LmRhcmstbW9kZSBoMSxcbiAgICBib2R5LmRhcmstbW9kZSBoMixcbiAgICBib2R5LmRhcmstbW9kZSBoMyxcbiAgICBib2R5LmRhcmstbW9kZSBoNCxcbiAgICBib2R5LmRhcmstbW9kZSBoNSxcbiAgICBib2R5LmRhcmstbW9kZSBoNixcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGl0bGUsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRleHQsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWxpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgLmxpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAuZGFyayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRhcmsge1xuICAgICAgICAvKiBjbGFzcyB1c2VkIHRvIGhpZGUgZWxlbWVudHMgdGhhdCBvbmx5IG5lZWQgdG8gYmUgc2VlbiB3aGVuIGRhcmsgbW9kZSBpcyBlbmFibGVkICovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICAgRGFyayBNb2RlIFRvZ2dsZSAgICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDYlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHJpZ2h0OiAzLjc1cmVtO1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIGltZyxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBzdmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMS41NjI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDEuNTYyNXJlbTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcyxcbiAgICAgICAgICAgIGZpbGwgMC4zcztcbiAgICAgICAgZmlsbDogIzAwMDtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzO1xuICAgIH1cbn1cblxuLyogRGVza3RvcCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjg3NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgICB9XG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLm1vb24ge1xuICAgICAgICAvKiBjaGFuZ2UgdG8gd2hhdGV2ZXIgeW91IG5lZWQgKi9cbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RhcmsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztrQ0FFa0M7QUFDbEMsV0FBVztBQUNYO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7Ozs7Ozs7Ozs7O1FBV0ksZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLG9GQUFvRjtRQUNwRixhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7O29DQUVvQztBQUNwQyxXQUFXO0FBQ1g7SUFDSTtRQUNJLGdDQUFnQztRQUNoQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1Y7O3FCQUVhO1FBQ2IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdDQUFnQztRQUNoQyxVQUFVO1FBQ1Y7d0JBQ2dCO0lBQ3BCO0FBQ0o7O0FBRUEsWUFBWTtBQUNaO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICBDb3JlIERhcmsgU3R5bGVzICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1kYXJrOiAjMDgyMDMyO1xcbiAgICAgICAgLS1tZWRpdW06ICMyYzM5NGI7XFxuICAgICAgICAtLWFjY2VudDogIzMzNDc1NjtcXG4gICAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHAsXFxuICAgIGJvZHkuZGFyay1tb2RlIGxpLFxcbiAgICBib2R5LmRhcmstbW9kZSBoMSxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDIsXFxuICAgIGJvZHkuZGFyay1tb2RlIGgzLFxcbiAgICBib2R5LmRhcmstbW9kZSBoNCxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDUsXFxuICAgIGJvZHkuZGFyay1tb2RlIGg2LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGl0bGUsXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtbGkge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgLmxpZ2h0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgLmRhcmsge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuZGFyayB7XFxuICAgICAgICAvKiBjbGFzcyB1c2VkIHRvIGhpZGUgZWxlbWVudHMgdGhhdCBvbmx5IG5lZWQgdG8gYmUgc2VlbiB3aGVuIGRhcmsgbW9kZSBpcyBlbmFibGVkICovXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuICA8LS0tICAgICAgRGFyayBNb2RlIFRvZ2dsZSAgICAgIC0tPlxcbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNiU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICByaWdodDogMy43NXJlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHN2ZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41NjI1cmVtO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcyxcXG4gICAgICAgICAgICBmaWxsIDAuM3M7XFxuICAgICAgICBmaWxsOiAjMDAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1zdW4ge1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcbn1cXG5cXG4vKiBEZXNrdG9wICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IGF1dG87XFxuICAgICAgICByaWdodDogYXV0bztcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjg3NXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxuICAgIH1cXG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5tb29uIHtcXG4gICAgICAgIC8qIGNoYW5nZSB0byB3aGF0ZXZlciB5b3UgbmVlZCAqL1xcbiAgICAgICAgZmlsbDogI2ZmZjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXByaW1hcnk6ICNmZjZhM2U7XG4gICAgLS1wcmltYXJ5TGlnaHQ6ICNmZmJhNDM7XG4gICAgLS1zZWNvbmRhcnk6ICNmZmJhNDM7XG4gICAgLS1zZWNvbmRhcnlMaWdodDogI2ZmYmE0MztcbiAgICAtLWhlYWRlckNvbG9yOiAjMWExYTFhO1xuICAgIC0taGVhZGVyQ29sb3JEYXJrOiAjMDgyMDMyO1xuICAgIC0taGVhZGVyQ29sb3JNZWRpdW06ICMyYzM5NGI7XG4gICAgLS1ib2R5VGV4dENvbG9yOiAjNGU0YjY2O1xuICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xuICAgIC8qIDEzcHggLSAxNnB4ICovXG4gICAgLS10b3BwZXJGb250U2l6ZTogY2xhbXAoMC44MTI1cmVtLCAxLjZ2dywgMXJlbSk7XG4gICAgLyogMzFweCAtIDQ5cHggKi9cbiAgICAtLWhlYWRlckZvbnRTaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xuICAgIC0tYm9keUZvbnRTaXplOiAxcmVtO1xuICAgIC8qIDYwcHggLSAxMDBweCB0b3AgYW5kIGJvdHRvbSAqL1xuICAgIC0tc2VjdGlvblBhZGRpbmc6IGNsYW1wKDMuNzVyZW0sIDcuODJ2dywgNi4yNXJlbSkgMXJlbTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG59XG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIC8qIGhlaWdodDogMXJlbTsgKi9cbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gICAgLyogcHJldmVudHMgcGFkZGluZyBmcm9tIGFmZmVjdGluZyBoZWlnaHQgYW5kIHdpZHRoICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNzLXRvcHBlciB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10b3BwZXJGb250U2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyRm9udFNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOiA0My43NXJlbTtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcy10ZXh0IHtcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MC42MjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbn1cblxuI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUsXG4jY3MtbmF2aWdhdGlvbj4ucGFnZS10aXRsZTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yTWVkaXVtKTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsK0NBQStDO0lBQy9DLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxxREFBcUQ7SUFDckQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiAjZmY2YTNlO1xcbiAgICAtLXByaW1hcnlMaWdodDogI2ZmYmE0MztcXG4gICAgLS1zZWNvbmRhcnk6ICNmZmJhNDM7XFxuICAgIC0tc2Vjb25kYXJ5TGlnaHQ6ICNmZmJhNDM7XFxuICAgIC0taGVhZGVyQ29sb3I6ICMxYTFhMWE7XFxuICAgIC0taGVhZGVyQ29sb3JEYXJrOiAjMDgyMDMyO1xcbiAgICAtLWhlYWRlckNvbG9yTWVkaXVtOiAjMmMzOTRiO1xcbiAgICAtLWJvZHlUZXh0Q29sb3I6ICM0ZTRiNjY7XFxuICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xcbiAgICAvKiAxM3B4IC0gMTZweCAqL1xcbiAgICAtLXRvcHBlckZvbnRTaXplOiBjbGFtcCgwLjgxMjVyZW0sIDEuNnZ3LCAxcmVtKTtcXG4gICAgLyogMzFweCAtIDQ5cHggKi9cXG4gICAgLS1oZWFkZXJGb250U2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcXG4gICAgLS1ib2R5Rm9udFNpemU6IDFyZW07XFxuICAgIC8qIDYwcHggLSAxMDBweCB0b3AgYW5kIGJvdHRvbSAqL1xcbiAgICAtLXNlY3Rpb25QYWRkaW5nOiBjbGFtcCgzLjc1cmVtLCA3LjgydncsIDYuMjVyZW0pIDFyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiBoZWlnaHQ6IDFyZW07ICovXFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY3MtdG9wcGVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10b3BwZXJGb250U2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyRm9udFNpemUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICAgIG1heC13aWR0aDogNDMuNzVyZW07XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3MtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA0MC42MjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbn1cXG5cXG4jY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSxcXG4jY3MtbmF2aWdhdGlvbj4ucGFnZS10aXRsZTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3JNZWRpdW0pO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG4gIDwtLS0gICAgIE1vYmlsZSBOYXZpZ2F0aW9uICAgICAgLS0+XG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBNb2JpbGUgLSAxMDIzcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xuICAgIGJvZHkuY3Mtb3BlbiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwOyAqL1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTEwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgaGVpZ2h0OiAxNTB2aDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLXVsLXdyYXBwZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy1saSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDE0cmVtO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XG4gICAgICAgIC8qIDQ0cHggLSA0OHB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDIuNzVyZW0sIDZ2dywgM3JlbSk7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTEge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIyNWRlZyk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgdHJhbnNsYXRlWSgwKSByb3RhdGUoLTIyNWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMyB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJvdHRvbTogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYm94IHtcbiAgICAgICAgLyogMjRweCAtIDI4cHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDEuNXJlbSwgMnZ3LCAxLjc1cmVtKTtcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgwLjg3NXJlbSwgMS41dncsIDFyZW0pO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTEge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzLCB0b3AgMC4zcywgbGVmdCAwLjNzO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzLCBsZWZ0IDAuM3MsIHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUzIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIuNGVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cywgb3BhY2l0eSAwLjNzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNjV2aDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAzcmVtIDAgMCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMS4yNXJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC8qIHRyYW5zaXRpb24gZnJvbSB0aGVzZSB2YWx1ZXMgKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjM3NXJlbSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzLCBvcGFjaXR5IDAuOXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNCkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg1KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg2KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDcpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDgpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjQ1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTApIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTEpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41NXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEyKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEzKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNjVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDIuNXZ3LCAxLjdyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVyZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgLyogbWFrZXMgaXQgd2hpdGUgKi9cbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbiAgPC0tLSAgICAgRGVza3RvcCBOYXZpZ2F0aW9uICAgICAtLT5cbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAwMDA7ICovXG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxLjVyZW07XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgICAgICBoZWlnaHQ6IDdyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUgaDEge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDIwcHggLSAzNnB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoMS4yNXJlbSwgMi42dncsIDIuMjVyZW0pO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgLyogcHJldmVudCBmbGV4Ym94IGZyb20gc3F1aXNoaW5nIGl0ICovXG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMXZ3LCAxLjJyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsuY3MtYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHJlbTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICAvKiBtYWtlcyBpdCB0dXJuIHdoaXRlICovXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUxpZ2h0KTtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgU2lkZSBCeSBTaWRlIFJldmVyc2UgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cblxuLyogTW9iaWxlIC0gMzYwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgICNob21lLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIGNoYW5nZXMgdG8gMTI4MHB4IGF0IHRhYmxldCAqL1xuICAgICAgICBtYXgtd2lkdGg6IDM2LjVyZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA2dncsIDRyZW0pO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLWNvbnRlbnQge1xuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXRleHQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXRleHQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZSBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZS1yaWdodCB7XG4gICAgICAgIGhlaWdodDogOTV2dztcbiAgICAgICAgbWF4LWhlaWdodDogMjVyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZS1sZWZ0IHtcbiAgICAgICAgaGVpZ2h0OiAxMTF2dztcbiAgICAgICAgbWF4LWhlaWdodDogMzEuMjVyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3Mtc3RhdHMtZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogMjhweCAtIDQwcHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgxLjc1cmVtLCAzdncsIDIuNXJlbSk7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3Mtc3RhdHMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzOS4zNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gICAgICAgIHJvdy1nYXA6IDEuNXJlbTtcbiAgICAgICAgY29sdW1uLWdhcDogMC43NXJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy1zdGF0IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgLyogbWFraW5nIGZsZXggc28gd2UgY2FuIGFsaWduIGEgaGVhZGluZyB3aXRoIDEgbGluZSB0byB0aGUgYm90dG9tICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtbnVtYmVyIHtcbiAgICAgICAgLyogMzFweCAtIDM5cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjkzNzVyZW0sIDN2dywgMi40Mzc1cmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDAgMC4yNXJlbSAwO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLWRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLyogYXV0byBtYXJnaW4gdG9wIHdpbGwgcHVzaCB0ZXh0IHRvIGJvdHRvbSBpZiB0aGVyZSdzIG9ubHkgb25lIGxpbmUgKi9cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xuICAgICNob21lLWNvbnRlbnQgLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtY29udGVudCB7XG4gICAgICAgIC8qIHNlbmRzIGl0IHRvIHRoZSByaWdodCBpbiB0aGUgMm5kIHBvc2l0aW9uICovXG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUtcmlnaHQge1xuICAgICAgICAvKiAzNDBweCAtIDQ2MHB4ICovXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDIxLjI1cmVtLCAzNXZ3LCAyOC43NXJlbSk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlLWxlZnQge1xuICAgICAgICAvKiA1MzBweCAtIDY2MHB4ICovXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDMzLjEyNXJlbSwgNDV2dywgNDEuMjVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtdGl0bGUsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtdGV4dCxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50IC5jcy1udW1iZXIsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtZGVzYyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLXRleHQsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtZGVzYyB7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICAgICAgIEZvb3RlciAgICAgICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI2NzLWZvb3Rlci0xMDgge1xuICAgICAgICAvKiA0MHB4IC0gMTAwcHggdG9wIGFuZCBib3R0b20gKi9cbiAgICAgICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNC45dncsIDIuMjVyZW0pIDFyZW07XG4gICAgICAgIC8qIDQwcHggLSA1MHB4ICovXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCgxLjVyZW0sIDYuOXZ3LCAyLjEyNXJlbSk7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcbiAgICAgICAgLyogNDBweCAtIDYwcHgqL1xuICAgICAgICBwYWRkaW5nOiAwIDAgY2xhbXAoMnJlbSwgNC43dncsIC43NXJlbSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYwZjY7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcbiAgICAgICAgLyogMTZweCAtIDIwcHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDAuMTVzLCAxcmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XG4gICAgICAgIC8qIHRvcCByaWdodCBib3ggKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb3B5cmlnaHQge1xuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAxLjZ2dywgMXJlbSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNhMGEzYmQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvKiAyMHB4IC0gMjhweCAqL1xuICAgICAgICBtYXJnaW46IGNsYW1wKDEuMjVyZW0sIDIuOHZ3LCAxLjc1cmVtKSBhdXRvIDA7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA2MDBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNy41cmVtKSB7XG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcbiAgICAgICAgLyogNDRweCAtIDg4cHggKi9cbiAgICAgICAgbWFyZ2luOiAwIGNsYW1wKDIuNzVyZW0sIDYuMnZ3LCA1LjVyZW0pIDAgMDtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7b0NBRW9DO0FBQ3BDLG9CQUFvQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLGlEQUFpRDtRQUNqRDt5QkFDaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFFBQVE7UUFDUixjQUFjO1FBQ2QscUNBQXFDO1FBQ3JDLG1DQUFtQztRQUNuQywyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFB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QkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixxQ0FBcUM7UUFDckMsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGlCQUFpQjtRQUNqQixnQ0FBZ0M7UUFDaEMsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsdUNBQXVDO1FBQ3ZDLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsY0FBYztRQUNkLGdCQUFnQjtRQUNoQiw2Q0FBNkM7SUFDakQ7QUFDSjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLDJDQUEyQztJQUMvQzs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKOztBQUVBLGNBQWM7QUFDZDtJQUNJO1FBQ0ksb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgIE1vYmlsZSBOYXZpZ2F0aW9uICAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAtIDEwMjNweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xcbiAgICBib2R5LmNzLW9wZW4ge1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwOyAqL1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xMTAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIG9wYWNpdHkgMC41cztcXG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxNTB2aDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtbGkge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDE0cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9XFxuXFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xcbiAgICAgICAgLyogNDRweCAtIDQ4cHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMSB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMjVkZWcpO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUyIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgdHJhbnNsYXRlWSgwKSByb3RhdGUoLTIyNWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTMge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYm94IHtcXG4gICAgICAgIC8qIDI0cHggLSAyOHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoMS41cmVtLCAydncsIDEuNzVyZW0pO1xcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICAgIGhlaWdodDogY2xhbXAoMC44NzVyZW0sIDEuNXZ3LCAxcmVtKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTEge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHRvcCAwLjNzLCBsZWZ0IDAuM3M7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUyIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcywgbGVmdCAwLjNzLCB0cmFuc2Zvcm0gMC41cztcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTMge1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MsIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjRlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuM3M7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWF4LWhlaWdodDogNjV2aDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMCAwIDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuMjVyZW07XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgLyogdHJhbnNpdGlvbiBmcm9tIHRoZXNlIHZhbHVlcyAqL1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjM3NXJlbSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cywgb3BhY2l0eSAwLjlzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDQpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDUpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg2KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg3KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEwKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEyKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS43cmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIC8qIG1ha2VzIGl0IHdoaXRlICovXFxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgIERlc2t0b3AgTmF2aWdhdGlvbiAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwOyAqL1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzByZW07XFxuICAgICAgICBoZWlnaHQ6IDdyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDIwcHggLSAzNnB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDEuMjVyZW0sIDIuNnZ3LCAyLjI1cmVtKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgICAgIC8qIHByZXZlbnQgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMXZ3LCAxLjJyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMHJlbTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgLyogbWFrZXMgaXQgdHVybiB3aGl0ZSAqL1xcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgU2lkZSBCeSBTaWRlIFJldmVyc2UgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI2hvbWUtY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogY2hhbmdlcyB0byAxMjgwcHggYXQgdGFibGV0ICovXFxuICAgICAgICBtYXgtd2lkdGg6IDM2LjVyZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA2dncsIDRyZW0pO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLWNvbnRlbnQge1xcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy10ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3MtdGV4dDpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUtcmlnaHQge1xcbiAgICAgICAgaGVpZ2h0OiA5NXZ3O1xcbiAgICAgICAgbWF4LWhlaWdodDogMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZS1sZWZ0IHtcXG4gICAgICAgIGhlaWdodDogMTExdnc7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMS4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1zdGF0cy1ncm91cCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogMjhweCAtIDQwcHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoMS43NXJlbSwgM3Z3LCAyLjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLXN0YXRzIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzOS4zNzVyZW07XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbiAgICAgICAgcm93LWdhcDogMS41cmVtO1xcbiAgICAgICAgY29sdW1uLWdhcDogMC43NXJlbTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1zdGF0IHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMS41cmVtIDA7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICAvKiBtYWtpbmcgZmxleCBzbyB3ZSBjYW4gYWxpZ24gYSBoZWFkaW5nIHdpdGggMSBsaW5lIHRvIHRoZSBib3R0b20gKi9cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLW51bWJlciB7XFxuICAgICAgICAvKiAzMXB4IC0gMzlweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjkzNzVyZW0sIDN2dywgMi40Mzc1cmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMC4yNXJlbSAwO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLWRlc2Mge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAvKiBhdXRvIG1hcmdpbiB0b3Agd2lsbCBwdXNoIHRleHQgdG8gYm90dG9tIGlmIHRoZXJlJ3Mgb25seSBvbmUgbGluZSAqL1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAtIDc2OHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xcbiAgICAjaG9tZS1jb250ZW50IC5jcy1jb250YWluZXIge1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1jb250ZW50IHtcXG4gICAgICAgIC8qIHNlbmRzIGl0IHRvIHRoZSByaWdodCBpbiB0aGUgMm5kIHBvc2l0aW9uICovXFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlLXJpZ2h0IHtcXG4gICAgICAgIC8qIDM0MHB4IC0gNDYwcHggKi9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDIxLjI1cmVtLCAzNXZ3LCAyOC43NXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUtbGVmdCB7XFxuICAgICAgICAvKiA1MzBweCAtIDY2MHB4ICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgzMy4xMjVyZW0sIDQ1dncsIDQxLjI1cmVtKTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLXRpdGxlLFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50IC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50IC5jcy1udW1iZXIsXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLWRlc2Mge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtdGV4dCxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtZGVzYyB7XFxuICAgICAgICBvcGFjaXR5OiAuODtcXG4gICAgfVxcbn1cXG5cXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICAgICAgIEZvb3RlciAgICAgICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG5cXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICAjY3MtZm9vdGVyLTEwOCB7XFxuICAgICAgICAvKiA0MHB4IC0gMTAwcHggdG9wIGFuZCBib3R0b20gKi9cXG4gICAgICAgIHBhZGRpbmc6IGNsYW1wKDFyZW0sIDQuOXZ3LCAyLjI1cmVtKSAxcmVtO1xcbiAgICAgICAgLyogNDBweCAtIDUwcHggKi9cXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCgxLjVyZW0sIDYuOXZ3LCAyLjEyNXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODByZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcXG4gICAgICAgIC8qIDQwcHggLSA2MHB4Ki9cXG4gICAgICAgIHBhZGRpbmc6IDAgMCBjbGFtcCgycmVtLCA0Ljd2dywgLjc1cmVtKTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMGY2O1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xcbiAgICAgICAgLyogMTZweCAtIDIwcHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAwLjE1cywgMXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xcbiAgICAgICAgLyogdG9wIHJpZ2h0IGJveCAqL1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMCU7XFxuICAgICAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtY29weXJpZ2h0IHtcXG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAxLjZ2dywgMXJlbSk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogI2EwYTNiZDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgLyogMjBweCAtIDI4cHggKi9cXG4gICAgICAgIG1hcmdpbjogY2xhbXAoMS4yNXJlbSwgMi44dncsIDEuNzVyZW0pIGF1dG8gMDtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA2MDBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzcuNXJlbSkge1xcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGkge1xcbiAgICAgICAgLyogNDRweCAtIDg4cHggKi9cXG4gICAgICAgIG1hcmdpbjogMCBjbGFtcCgyLjc1cmVtLCA2LjJ2dywgNS41cmVtKSAwIDA7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFyay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZGFyay5jc3MnXG5pbXBvcnQgaG9tZVBhZ2VMZWZ0IGZyb20gJy4vYXNzZXRzL2ltZy9ob21lUGFnZUxlZnQucG5nJztcbmltcG9ydCBob21lUGFnZVJpZ2h0IGZyb20gJy4vYXNzZXRzL2ltZy9ob21lUGFnZVJpZ2h0LnBuZyc7XG5cbi8vIGFkZCBjbGFzc2VzIGZvciBtb2JpbGUgbmF2aWdhdGlvbiB0b2dnbGluZ1xudmFyIENTYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IENTbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uJyk7XG5jb25zdCBDU2hhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlJyk7XG5cbkNTaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBDU2hhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY3MtYWN0aXZlJyk7XG4gICAgQ1NuYXZiYXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgIENTYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1vcGVuJyk7XG4gICAgLy8gcnVuIHRoZSBmdW5jdGlvbiB0byBjaGVjayB0aGUgYXJpYS1leHBhbmRlZCB2YWx1ZVxuICAgIGFyaWFFeHBhbmRlZCgpO1xufSk7XG5cbi8vIGNoZWNrcyB0aGUgdmFsdWUgb2YgYXJpYSBleHBhbmRlZCBvbiB0aGUgY3MtdWwgYW5kIGNoYW5nZXMgaXQgYWNjb3JkaW5nbHkgd2hldGhlciBpdCBpcyBleHBhbmRlZCBvciBub3RcbmZ1bmN0aW9uIGFyaWFFeHBhbmRlZCgpIHtcbiAgICBjb25zdCBjc1VMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY3NFeHBhbmRlZCA9IGNzVUwuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG5cbiAgICBpZiAoY3NFeHBhbmRlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBjc1VMLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG59XG5cbi8vIG1vYmlsZSBuYXYgdG9nZ2xlIGNvZGVcbmNvbnN0IGRyb3BEb3ducyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NzLW5hdmlnYXRpb24gLmNzLWRyb3Bkb3duJylcbik7XG5mb3IgKGNvbnN0IGl0ZW0gb2YgZHJvcERvd25zKSB7XG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICB9O1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcbn1cblxuLy9cbi8vICAgIFRoZSBEYXJrIE1vZGUgU3lzdGVtXG4vL1xuXG4vLyBoZWxwZXIgZnVuY3Rpb25zIHRvIHRvZ2dsZSBkYXJrIG1vZGVcbmZ1bmN0aW9uIGVuYWJsZURhcmtNb2RlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbn1cbmZ1bmN0aW9uIGRpc2FibGVEYXJrTW9kZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xufVxuXG4vLyBkZXRlcm1pbmVzIGEgbmV3IHVzZXJzIGRhcmsgbW9kZSBwcmVmZXJlbmNlc1xuZnVuY3Rpb24gZGV0ZWN0Q29sb3JTY2hlbWUoKSB7XG4gICAgLy8gZGVmYXVsdCB0byB0aGUgbGlnaHQgdGhlbWVcbiAgICBsZXQgdGhlbWUgPSAnbGlnaHQnO1xuXG4gICAgLy8gY2hlY2sgbG9jYWxTdG9yYWdlIGZvciBhIHNhdmVkICd0aGVtZScgdmFyaWFibGUuIGlmIGl0J3MgdGhlcmUsIHRoZSB1c2VyIGhhcyB2aXNpdGVkIGJlZm9yZSwgc28gYXBwbHkgdGhlIG5lY2Vzc2FyeSB0aGVtZSBjaG9pY2VzXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgfVxuICAgIC8vIGlmIGl0J3Mgbm90IHRoZXJlLCBjaGVjayB0byBzZWUgaWYgdGhlIHVzZXIgaGFzIGFwcGxpZWQgZGFyayBtb2RlIHByZWZlcmVuY2VzIHRoZW1zZWx2ZXMgaW4gdGhlIGJyb3dzZXJcbiAgICBlbHNlIGlmIChcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICAgIHRoZW1lID0gJ2RhcmsnO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIHByZWZlcmVuY2Ugc2V0LCB0aGUgZGVmYXVsdCBvZiBsaWdodCB3aWxsIGJlIHVzZWQuIGFwcGx5IGFjY29yZGluZ2x5XG4gICAgdGhlbWUgPT09ICdkYXJrJyA/IGVuYWJsZURhcmtNb2RlKCkgOiBkaXNhYmxlRGFya01vZGUoKTtcbn1cblxuLy8gcnVuIG9uIHBhZ2UgbG9hZFxuZGV0ZWN0Q29sb3JTY2hlbWUoKTtcblxuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkYXJrIG1vZGUgYnV0dG9uIHRvZ2dsZVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZS10b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBvbiBjbGljaywgY2hlY2sgbG9jYWxTdG9yYWdlIGZvciB0aGUgZGFyayBtb2RlIHZhbHVlLCB1c2UgdG8gYXBwbHkgdGhlIG9wcG9zaXRlIG9mIHdoYXQncyBzYXZlZFxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnbGlnaHQnXG4gICAgICAgID8gZW5hYmxlRGFya01vZGUoKVxuICAgICAgICA6IGRpc2FibGVEYXJrTW9kZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=