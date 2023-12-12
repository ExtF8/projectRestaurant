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
    --bodyTextColorGray: #313131;
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

#cs-navigation .cs-li-link {
    cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,yBAAyB;IACzB,sBAAsB;IACtB,0BAA0B;IAC1B,4BAA4B;IAC5B,wBAAwB;IACxB,6BAA6B;IAC7B,4BAA4B;IAC5B,gBAAgB;IAChB,+CAA+C;IAC/C,gBAAgB;IAChB,wCAAwC;IACxC,oBAAoB;IACpB,gCAAgC;IAChC,sDAAsD;AAC1D;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;;;IAGI,qDAAqD;IACrD,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,qBAAqB;IACrB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;IACrB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,SAAS;IACT,2BAA2B;AAC/B;;AAEA;;IAEI,qBAAqB;IACrB,+BAA+B;AACnC;;AAEA;IACI,eAAe;AACnB","sourcesContent":[":root {\n    --primary: #ff6a3e;\n    --primaryLight: #ffba43;\n    --secondary: #ffba43;\n    --secondaryLight: #ffba43;\n    --headerColor: #1a1a1a;\n    --headerColorDark: #082032;\n    --headerColorMedium: #2c394b;\n    --bodyTextColor: #4e4b66;\n    --bodyTextColorWhite: #fafbfc;\n    --bodyTextColorGray: #313131;\n    /* 13px - 16px */\n    --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);\n    /* 31px - 49px */\n    --headerFontSize: clamp(1rem, 2vw, 2rem);\n    --bodyFontSize: 1rem;\n    /* 60px - 100px top and bottom */\n    --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: auto;\n}\n\n#content {\n    position: relative;\n    min-height: 100vh;\n    padding-bottom: 200px;\n}\n\nfooter {\n    position: absolute;\n    margin-top: auto;\n    bottom: 0;\n    width: 100%;\n    font-family: inherit;\n    /* height: 1rem; */\n}\n\n*,\n*:before,\n*:after {\n    /* prevents padding from affecting height and width */\n    box-sizing: border-box;\n}\n\n.cs-topper {\n    font-size: var(--topperFontSize);\n    line-height: 1.2em;\n    text-transform: uppercase;\n    text-align: inherit;\n    letter-spacing: .1em;\n    font-weight: 700;\n    color: var(--primary);\n    margin-bottom: 0.25rem;\n    display: block;\n}\n\n.cs-title {\n    font-size: var(--headerFontSize);\n    font-weight: 900;\n    line-height: 1.2em;\n    text-align: inherit;\n    max-width: 43.75rem;\n    margin: 0 0 1rem 1rem;\n    color: var(--headerColor);\n    position: relative;\n}\n\n.cs-text {\n    font-size: var(--bodyFontSize);\n    line-height: 1.5em;\n    text-align: inherit;\n    width: 100%;\n    max-width: 40.625rem;\n    margin: 0;\n    color: var(--bodyTextColor);\n}\n\n#cs-navigation .page-title,\n#cs-navigation>.page-title:visited {\n    text-decoration: none;\n    color: var(--headerColorMedium);\n}\n\n#cs-navigation .cs-li-link {\n    cursor: pointer;\n}"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/*-- -------------------------- -->\n  <---     Mobile Navigation      -->\n  <--- -------------------------- -*/\n/* Mobile - 1023px */\n@media only screen and (max-width: 63.9375rem) {\n    body.cs-open {\n        overflow: hidden;\n    }\n\n    #cs-navigation {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 0.75rem 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        position: fixed;\n        z-index: 10000;\n    }\n\n    #cs-navigation:before {\n        content: \"\";\n        width: 100%;\n        height: 0vh;\n        background: rgba(0, 0, 0, 0.6);\n        opacity: 0;\n        display: block;\n        position: absolute;\n        top: 100%;\n        right: 0;\n        z-index: -1100;\n        transition: height 0.5s, opacity 0.5s;\n        -webkit-backdrop-filter: blur(10px);\n        backdrop-filter: blur(10px);\n    }\n\n    #cs-navigation.cs-active:before {\n        height: 150vh;\n        opacity: 1;\n    }\n\n    #cs-navigation.cs-active .cs-ul-wrapper {\n        opacity: 1;\n        transform: scaleY(1);\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation.cs-active .cs-li {\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n\n    #cs-navigation .page-title {\n        width: 50%;\n        max-width: 14rem;\n        height: 100%;\n        margin: 0 auto 0 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 10;\n    }\n\n\n    #cs-navigation .cs-toggle {\n        /* 44px - 48px */\n        width: clamp(2.75rem, 6vw, 3rem);\n        height: clamp(2.75rem, 6vw, 3rem);\n        margin: 0 0 0 auto;\n        background-color: transparent;\n        border: none;\n        border-radius: 0.25rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-navigation .cs-active .cs-line1 {\n        top: 50%;\n        transform: translate(-50%, -50%) rotate(225deg);\n    }\n\n    #cs-navigation .cs-active .cs-line2 {\n        top: 50%;\n        transform: translate(-50%, -50%) translateY(0) rotate(-225deg);\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-active .cs-line3 {\n        opacity: 0;\n        bottom: 100%;\n    }\n\n    #cs-navigation .cs-box {\n        /* 24px - 28px */\n        width: clamp(1.5rem, 2vw, 1.75rem);\n        /* 14px - 16px */\n        height: clamp(0.875rem, 1.5vw, 1rem);\n        position: relative;\n    }\n\n    #cs-navigation .cs-line {\n        width: 100%;\n        height: 2px;\n        background-color: #1a1a1a;\n        border-radius: 2px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    #cs-navigation .cs-line1 {\n        top: 0;\n        transition: transform 0.5s, top 0.3s, left 0.3s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-line2 {\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        transition: top 0.3s, left 0.3s, transform 0.5s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n    }\n\n    #cs-navigation .cs-line3 {\n        bottom: 0;\n        transition: bottom 0.3s, opacity 0.3s;\n    }\n\n    #cs-navigation .cs-ul-wrapper {\n        width: 100%;\n        height: auto;\n        padding-bottom: 2.4em;\n        background-color: #fff;\n        box-shadow: inset rgba(0, 0, 0, 0.2) 0px 8px 24px;\n        opacity: 0;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        z-index: -1;\n        overflow: hidden;\n        transform: scaleY(0);\n        transition: transform 0.4s, opacity 0.3s;\n        transform-origin: top;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        height: auto;\n        max-height: 65vh;\n        margin: 0;\n        padding: 3rem 0 0 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1.25rem;\n        overflow: scroll;\n    }\n\n    #cs-navigation .cs-li {\n        text-align: center;\n        list-style: none;\n        width: 100%;\n        margin-right: 0;\n        opacity: 0;\n        /* transition from these values */\n        transform: translateY(-4.375rem);\n        transition: transform 0.6s, opacity 0.9s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(1) {\n        transition-delay: 0.05s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(2) {\n        transition-delay: 0.1s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(3) {\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(4) {\n        transition-delay: 0.2s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(5) {\n        transition-delay: 0.25s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(6) {\n        transition-delay: 0.3s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(7) {\n        transition-delay: 0.35s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(8) {\n        transition-delay: 0.4s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(9) {\n        transition-delay: 0.45s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(10) {\n        transition-delay: 0.5s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(11) {\n        transition-delay: 0.55s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(12) {\n        transition-delay: 0.6s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(13) {\n        transition-delay: 0.65s;\n    }\n\n    #cs-navigation .cs-li-link {\n        /* 16px - 24px */\n        font-size: clamp(1.2rem, 2.5vw, 1.7rem);\n        line-height: 1.2em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--headerColor);\n        display: inline-block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 100%;\n        height: 1px;\n        background: currentColor;\n        opacity: 1;\n        display: none;\n        position: absolute;\n        bottom: -0.125rem;\n        left: 0;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        display: block;\n    }\n\n}\n\n/* Dark Mode */\n@media only screen and (max-width: 63.9375rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-line {\n        background-color: #fff;\n    }\n\n    body.dark-mode #cs-navigation .cs-ul-wrapper {\n        background-color: var(--medium);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n}\n\n/*-- -------------------------- -->\n  <---     Desktop Navigation     -->\n  <--- -------------------------- -*/\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #cs-navigation {\n        width: 100%;\n        /* prevents padding and border from affecting height and width */\n        box-sizing: border-box;\n        padding: 0 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        /* position: fixed;\n        z-index: 10000; */\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 1.5rem;\n    }\n\n    #cs-navigation .cs-toggle {\n        display: none;\n    }\n\n    #cs-navigation .page-title {\n        width: 30%;\n        max-width: 30rem;\n        height: 7rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 100;\n    }\n\n    #cs-navigation .page-title h1 {\n        font-size: 3em;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        /* 20px - 36px */\n        gap: clamp(1.25rem, 2.6vw, 2.25rem);\n    }\n\n    #cs-navigation .cs-li {\n        list-style: none;\n        padding: 2rem 0;\n        /* prevent flexbox from squishing it */\n        flex: none;\n    }\n\n    #cs-navigation .cs-li-link {\n        font-size: clamp(1.2rem, 1vw, 1.2rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--bodyTextColor);\n        display: block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 0%;\n        height: 2px;\n        background: var(--primary);\n        opacity: 1;\n        display: block;\n        position: absolute;\n        bottom: 0rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 64rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it turn white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link:before {\n        background-color: var(--primaryLight);\n    }\n}\n\n/*-- -------------------------- -->\n<---   Side By Side Reverse     -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #home-content-container {\n        padding: var(--sectionPadding);\n    }\n\n    #home-content-container .home-content {\n        width: 100%;\n        /* changes to 1280px at tablet */\n        max-width: 36.5rem;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 6vw, 4rem);\n    }\n\n    #home-content-container .home-content-right {\n        /* set text align to left if content needs to be left aligned */\n        text-align: left;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: flex-start;\n    }\n\n    #home-content-container .cs-text {\n        margin-bottom: 1rem;\n    }\n\n    #home-content-container .cs-text:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    #home-content-container .cs-picture {\n        width: 100%;\n        display: block;\n        position: relative;\n        z-index: 1;\n    }\n\n    #home-content-container .cs-picture img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    #home-content-container .cs-picture-right {\n        height: 95vw;\n        max-height: 25rem;\n    }\n\n    #home-content-container .cs-picture-left {\n        height: 111vw;\n        max-height: 31.25rem;\n    }\n\n    #home-content-container .home-content-left {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* 28px - 40px */\n        gap: clamp(1.75rem, 3vw, 2.5rem);\n    }\n\n    #home-content-container .cs-stats {\n        width: 100%;\n        max-width: 39.375rem;\n        padding: 0;\n        margin: 0;\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        row-gap: 1.5rem;\n        column-gap: 0.75rem;\n    }\n\n    #home-content-container .cs-stat {\n        list-style: none;\n        margin: 0;\n        padding: 0 0 1.5rem 0;\n        border-bottom: 1px solid var(--primary);\n        /* making flex so we can align a heading with 1 line to the bottom */\n        display: flex;\n        grid-column: span 4;\n        flex-direction: column;\n        align-self: stretch;\n        align-content: space-between;\n    }\n\n    #home-content-container .cs-number {\n        /* 31px - 39px */\n        font-size: clamp(1.9375rem, 3vw, 2.4375rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        color: var(--headerColor);\n        display: block;\n        margin: 0 0 0.25rem 0;\n    }\n\n    #home-content-container .cs-desc {\n        font-size: 1rem;\n        line-height: 1.5em;\n        font-weight: 400;\n        text-align: left;\n        /* auto margin top will push text to bottom if there's only one line */\n        margin: 0;\n        color: var(--bodyTextColor);\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #home-content-container .home-content {\n        max-width: 80rem;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: stretch;\n    }\n\n    #home-content-container .home-content-right {\n        /* sends it to the right in the 2nd position */\n        order: 2;\n    }\n\n    #home-content-container .cs-picture-right {\n        /* 340px - 460px */\n        min-height: clamp(21.25rem, 35vw, 28.75rem);\n        height: 100%;\n        max-height: 100%;\n    }\n\n    #home-content-container .cs-picture-left {\n        /* 530px - 660px */\n        min-height: clamp(33.125rem, 45vw, 41.25rem);\n        height: 100%;\n        max-height: 100%;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n\n    body.dark-mode #home-content-container .cs-title,\n    body.dark-mode #home-content-container .cs-text,\n    body.dark-mode #home-content-container .cs-number,\n    body.dark-mode #home-content-container .cs-desc {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #home-content-container .cs-text,\n    body.dark-mode #home-content-container .cs-desc {\n        opacity: .8;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Footer           -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #cs-footer-108 {\n        /* 40px - 100px top and bottom */\n        padding: clamp(1rem, 4.9vw, 2.25rem) 1rem;\n        /* 40px - 50px */\n        padding-bottom: clamp(1.5rem, 6.9vw, 2.125rem);\n    }\n\n    #cs-footer-108 .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n    }\n\n    #cs-footer-108 .cs-ul {\n        /* 40px - 60px*/\n        padding: 0 0 clamp(2rem, 4.7vw, .75rem);\n        margin: auto;\n        border-bottom: 1px solid #eff0f6;\n    }\n\n    #cs-footer-108 .cs-li {\n        list-style: none;\n        text-align: center;\n        margin-bottom: 1.25rem;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin-bottom: 0;\n    }\n\n    #cs-footer-108 .cs-link {\n        /* 16px - 20px */\n        font-size: clamp(0.8rem, 0.15s, 1rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        font-weight: 700;\n        color: var(--bodyTextColor);\n        position: relative;\n    }\n\n    #cs-footer-108 .cs-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-footer-108 .cs-link:before {\n        /* top right box */\n        content: \"\";\n        width: 0%;\n        height: 0.1875rem;\n        background: var(--bodyTextColor);\n        opacity: 1;\n        position: absolute;\n        display: block;\n        bottom: -0.125rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n\n    #cs-footer-108 .cs-copyright {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 1.6vw, 1rem);\n        text-align: center;\n        color: #a0a3bd;\n        display: block;\n        /* 20px - 28px */\n        margin: clamp(1.25rem, 2.8vw, 1.75rem) auto 0;\n    }\n}\n\n/* Tablet - 600px */\n@media only screen and (min-width: 37.5rem) {\n    #cs-footer-108 .cs-ul {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-footer-108 .cs-li {\n        /* 44px - 88px */\n        margin: 0 clamp(2.75rem, 6.2vw, 5.5rem) 0 0;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin: 0;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #cs-footer-108 {\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link {\n        color: #fff;\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link:before {\n        background: #fff;\n    }\n}\n\n/*-- -------------------------- -->\n<---            Menu            -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #menu-1005 {\n        padding: var(--sectionPadding);\n        background-color: transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    #menu-1005:before {\n        /* static tiled pattern */\n        content: \"\";\n        height: 100%;\n        width: 100%;\n        opacity: 0.08;\n        background: url(\"https://csimg.nyc3.cdn.digitaloceanspaces.com/Food-Menu/static-pattern.png\");\n        background-size: auto;\n        background-position: center;\n        background-repeat: repeat;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n    }\n\n    #menu-1005 .cs-container {\n        width: 100%;\n        max-width: 80em;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 7vw, 4rem);\n    }\n\n    #menu-1005 .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: center;\n    }\n\n    #menu-1005 .cs-wrapper {\n        /* 120px - 181px */\n        width: clamp(7.5rem, 9vw, 11.3125rem);\n        margin-bottom: 0.75rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n    }\n\n    #menu-1005 .cs-wrapper:before {\n        /* left line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-right: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        right: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper:after {\n        /* right line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-left: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper img {\n        width: 100%;\n    }\n\n\n    #menu-1005 .cs-text {\n        opacity: 0.8;\n    }\n\n    #menu-1005 .cs-button-solid {\n        font-size: 1rem;\n        /* 46px - 56px */\n        line-height: clamp(2.875em, 5.5vw, 3.5em);\n        text-decoration: none;\n        font-weight: 700;\n        text-align: center;\n        margin: auto;\n        color: #fff;\n        min-width: 9.375rem;\n        padding: 0 2rem;\n        background-color: var(--primary);\n        display: inline-block;\n        position: relative;\n        z-index: 1;\n        /* prevents padding from adding to the width */\n        box-sizing: border-box;\n        transition: color 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:before {\n        content: \"\";\n        position: absolute;\n        height: 100%;\n        width: 0%;\n        background: #000;\n        opacity: 1;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        transition: width 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:hover {\n        color: #fff;\n    }\n\n    #menu-1005 .cs-button-solid:hover:before {\n        width: 100%;\n    }\n\n    #menu-1005 .cs-card-group {\n        margin: 0;\n        padding: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        column-gap: 1.25rem;\n        /* 32px - 60px */\n        row-gap: clamp(2rem, 6vw, 3.75rem);\n    }\n\n    #menu-1005 .cs-item {\n        list-style: none;\n        width: 100%;\n        max-width: 36.25rem;\n        margin: 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        /* 16px - 36px */\n        gap: clamp(1rem, 3vw, 2.25rem);\n    }\n\n    #menu-1005 .cs-picture {\n        /* 76px - 160px */\n        width: clamp(4.75rem, 14vw, 10rem);\n        height: clamp(4.75rem, 14vw, 10rem);\n        overflow: hidden;\n        /* 4px - 8px */\n        border: clamp(0.25rem, 1vw, 0.5rem) solid rgba(255, 255, 255, 0.1);\n        display: block;\n        flex: none;\n        position: relative;\n    }\n\n    #menu-1005 .cs-picture img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        /* makes it act like a background image */\n        object-fit: cover;\n    }\n\n    #menu-1005 .cs-h3 {\n        /* 16px - 24px */\n        font-size: clamp(1rem, 2vw, 1.5rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        /* 8px - 16px */\n        margin: 0 0 clamp(0.5rem, 1.5vw, 1rem);\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        position: relative;\n        gap: 0.75rem;\n    }\n\n    #menu-1005 .cs-h3:after {\n        content: \"\";\n        width: 50%;\n        height: 1px;\n        background: #b4b2c7;\n        opacity: 1;\n        position: relative;\n        display: block;\n        order: 1;\n    }\n\n    #menu-1005 .cs-name {\n        max-width: 13.75rem;\n        flex: none;\n    }\n\n    #menu-1005 .cs-price {\n        /* 16px - 25px */\n        font-size: clamp(1rem, 2vw, 1.5625rem);\n        /* 28px - 46px */\n        line-height: clamp(1.75rem, 4vw, 2.875rem);\n        font-weight: 700;\n        /* 8px - 12px */\n        padding: 0 clamp(0.5rem, 1vw, 0.75rem);\n        color: var(--primary);\n        background-color: #fff;\n        border-radius: 5rem;\n        border: 1px solid #b4b2c7;\n        display: flex;\n        align-items: center;\n        order: 3;\n    }\n\n    #menu-1005 .cs-item-p {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 2vw, 1rem);\n        line-height: 1.5em;\n        text-align: left;\n        margin: 0;\n        opacity: 0.8;\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #menu-1005 .cs-card-group {\n        flex-direction: row;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n    }\n\n    #menu-1005 .cs-item {\n        width: 48.5%;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Contacts         -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #contact-strip-324 {\n        padding: var(--sectionPadding);\n        background-color: #f7f7f7;\n        height: 100%;\n\n    }\n\n    #contact-strip-324 .cs-container {\n        width: 100%;\n        max-width: 80em;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 7vw, 4rem);\n    }\n\n    #contact-strip-324 .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: center;\n    }\n\n    #contact-strip-324 .cs-stat-group {\n        width: 100%;\n        /* changes to 1280px at desktop */\n        max-width: 37.5rem;\n        margin: auto;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 2.5rem;\n    }\n\n    #contact-strip-324 .cs-item {\n        list-style: none;\n        width: 18.125rem;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n    }\n\n    #contact-strip-324 .cs-item:hover .cs-picture {\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        transform: scale(1.05);\n    }\n\n    #contact-strip-324 .cs-picture {\n        width: 5rem;\n        height: 5rem;\n        /* 12px - 20px */\n        margin-right: clamp(0.75rem, 3vw, 1.25rem);\n        border-radius: 50%;\n        border: 1px solid #bababa;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        /* prevents flexbox from squishing it */\n        flex: none;\n        transition:\n            background-color 0.3s,\n            box-shadow 0.3s,\n            transform 0.6s;\n    }\n\n    #contact-strip-324 .cs-flex-group {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n        flex-direction: column;\n    }\n\n    #contact-strip-324 .cs-icon {\n        width: 1.75rem;\n        height: auto;\n    }\n\n    #contact-strip-324 .cs-header {\n        font-size: 1.25rem;\n        color: var(--headerColor);\n        font-weight: 900;\n        line-height: 1.2em;\n        margin: 0;\n        margin-bottom: 0.75rem;\n        display: block;\n    }\n\n    #contact-strip-324 .cs-link,\n    #contact-strip-324 .cs-hours {\n        font-size: var(--bodyFontSize);\n        line-height: 1.5em;\n        text-decoration: none;\n        color: #767676;\n        display: block;\n    }\n\n    #contact-strip-324 .cs-link:hover {\n        text-decoration: underline;\n    }\n}\n\n/* Tablet - 650px */\n@media only screen and (min-width: 40.625rem) {\n    #contact-strip-324 .cs-stat-group {\n        flex-direction: row;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n        row-gap: 2rem;\n    }\n}\n\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #contact-strip-324 .cs-stat-group {\n        max-width: 80rem;\n        flex-wrap: nowrap;\n        justify-content: space-evenly;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #contact-strip-324 {\n        background-color: transparent;\n    }\n\n    body.dark-mode #contact-strip-324 .cs-header,\n    body.dark-mode #contact-strip-324 .cs-link,\n    body.dark-mode #contact-strip-324 .cs-hours {\n        color: var(--bodyTextColorWhite);\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFFBQVEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFB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QUNPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFFBQVE7QUFDckI7QUFDTztBQUNQLDBDQUEwQyxPQUFPO0FBQ2pELDBDQUEwQyxPQUFPOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLG1CQUFtQjtBQUNoQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2RhcmsuY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZGFyay5jc3M/MjEyYyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlRGF0YS9jb250YWN0c0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlRGF0YS9ob21lQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9wYWdlRGF0YS9tZW51Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkZXJzL2NvbnRhY3RzUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkZXJzL2hvbWVQYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWRlcnMvbWVudVBhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy91dGlsaXR5L2RhcmtNb2RlLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvdXRpbGl0eS9tb2JpbGVOYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgIENvcmUgRGFyayBTdHlsZXMgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBNb2JpbGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIDpyb290IHtcbiAgICAgICAgLS1kYXJrOiAjMDgyMDMyO1xuICAgICAgICAtLW1lZGl1bTogIzJjMzk0YjtcbiAgICAgICAgLS1hY2NlbnQ6ICMzMzQ3NTY7XG4gICAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgcCxcbiAgICBib2R5LmRhcmstbW9kZSBsaSxcbiAgICBib2R5LmRhcmstbW9kZSBoMSxcbiAgICBib2R5LmRhcmstbW9kZSBoMixcbiAgICBib2R5LmRhcmstbW9kZSBoMyxcbiAgICBib2R5LmRhcmstbW9kZSBoNCxcbiAgICBib2R5LmRhcmstbW9kZSBoNSxcbiAgICBib2R5LmRhcmstbW9kZSBoNixcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGl0bGUsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRleHQsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWxpLFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1oMyxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtaXRlbS1wIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgLmxpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAuZGFyayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRhcmsge1xuICAgICAgICAvKiBjbGFzcyB1c2VkIHRvIGhpZGUgZWxlbWVudHMgdGhhdCBvbmx5IG5lZWQgdG8gYmUgc2VlbiB3aGVuIGRhcmsgbW9kZSBpcyBlbmFibGVkICovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICAgRGFyayBNb2RlIFRvZ2dsZSAgICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICByaWdodDogMy43NXJlbTtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXG4gICAgI2RhcmstbW9kZS10b2dnbGUgc3ZnIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjU2MjVyZW07XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXG4gICAgICAgICAgICBvcGFjaXR5IDAuM3MsXG4gICAgICAgICAgICBmaWxsIDAuM3M7XG4gICAgICAgIGZpbGw6ICMwMDA7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcztcbiAgICB9XG59XG5cbi8qIERlc2t0b3AgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMS44NzVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLm1vb24ge1xuICAgICAgICAvKiBjaGFuZ2UgdG8gd2hhdGV2ZXIgeW91IG5lZWQgKi9cbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RhcmsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztrQ0FFa0M7QUFDbEMsV0FBVztBQUNYO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7Ozs7Ozs7Ozs7Ozs7UUFhSSxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksb0ZBQW9GO1FBQ3BGLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7b0NBRW9DO0FBQ3BDLFdBQVc7QUFDWDtJQUNJO1FBQ0ksZ0NBQWdDO1FBQ2hDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUiwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBOztRQUVJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVjs7cUJBRWE7UUFDYixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVjt3QkFDZ0I7SUFDcEI7QUFDSjs7QUFFQSxZQUFZO0FBQ1o7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICBDb3JlIERhcmsgU3R5bGVzICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1kYXJrOiAjMDgyMDMyO1xcbiAgICAgICAgLS1tZWRpdW06ICMyYzM5NGI7XFxuICAgICAgICAtLWFjY2VudDogIzMzNDc1NjtcXG4gICAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHAsXFxuICAgIGJvZHkuZGFyay1tb2RlIGxpLFxcbiAgICBib2R5LmRhcmstbW9kZSBoMSxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDIsXFxuICAgIGJvZHkuZGFyay1tb2RlIGgzLFxcbiAgICBib2R5LmRhcmstbW9kZSBoNCxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDUsXFxuICAgIGJvZHkuZGFyay1tb2RlIGg2LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGl0bGUsXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtbGksXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1oMyxcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWl0ZW0tcCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAubGlnaHQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAuZGFyayB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5kYXJrIHtcXG4gICAgICAgIC8qIGNsYXNzIHVzZWQgdG8gaGlkZSBlbGVtZW50cyB0aGF0IG9ubHkgbmVlZCB0byBiZSBzZWVuIHdoZW4gZGFyayBtb2RlIGlzIGVuYWJsZWQgKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgICBEYXJrIE1vZGUgVG9nZ2xlICAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3MtbW9vbiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICByaWdodDogMy43NXJlbTtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHN2ZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgd2lkdGg6IDEuNTYyNXJlbTtcXG4gICAgICAgIGhlaWdodDogMS41NjI1cmVtO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcyxcXG4gICAgICAgICAgICBmaWxsIDAuM3M7XFxuICAgICAgICBmaWxsOiAjMDAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1zdW4ge1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcbn1cXG5cXG4vKiBEZXNrdG9wICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IGF1dG87XFxuICAgICAgICByaWdodDogYXV0bztcXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjg3NXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5tb29uIHtcXG4gICAgICAgIC8qIGNoYW5nZSB0byB3aGF0ZXZlciB5b3UgbmVlZCAqL1xcbiAgICAgICAgZmlsbDogI2ZmZjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXByaW1hcnk6ICNmZjZhM2U7XG4gICAgLS1wcmltYXJ5TGlnaHQ6ICNmZmJhNDM7XG4gICAgLS1zZWNvbmRhcnk6ICNmZmJhNDM7XG4gICAgLS1zZWNvbmRhcnlMaWdodDogI2ZmYmE0MztcbiAgICAtLWhlYWRlckNvbG9yOiAjMWExYTFhO1xuICAgIC0taGVhZGVyQ29sb3JEYXJrOiAjMDgyMDMyO1xuICAgIC0taGVhZGVyQ29sb3JNZWRpdW06ICMyYzM5NGI7XG4gICAgLS1ib2R5VGV4dENvbG9yOiAjNGU0YjY2O1xuICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xuICAgIC0tYm9keVRleHRDb2xvckdyYXk6ICMzMTMxMzE7XG4gICAgLyogMTNweCAtIDE2cHggKi9cbiAgICAtLXRvcHBlckZvbnRTaXplOiBjbGFtcCgwLjgxMjVyZW0sIDEuNnZ3LCAxcmVtKTtcbiAgICAvKiAzMXB4IC0gNDlweCAqL1xuICAgIC0taGVhZGVyRm9udFNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XG4gICAgLS1ib2R5Rm9udFNpemU6IDFyZW07XG4gICAgLyogNjBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXG4gICAgLS1zZWN0aW9uUGFkZGluZzogY2xhbXAoMy43NXJlbSwgNy44MnZ3LCA2LjI1cmVtKSAxcmVtO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbiNjb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xufVxuXG5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAvKiBoZWlnaHQ6IDFyZW07ICovXG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jcy10b3BwZXIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdG9wcGVyRm9udFNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRlckZvbnRTaXplKTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIG1heC13aWR0aDogNDMuNzVyZW07XG4gICAgbWFyZ2luOiAwIDAgMXJlbSAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3MtdGV4dCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5Rm9udFNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNDAuNjI1cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG59XG5cbiNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlLFxuI2NzLW5hdmlnYXRpb24+LnBhZ2UtdGl0bGU6dmlzaXRlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvck1lZGl1bSk7XG59XG5cbiNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0kscURBQXFEO0lBQ3JELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICNmZjZhM2U7XFxuICAgIC0tcHJpbWFyeUxpZ2h0OiAjZmZiYTQzO1xcbiAgICAtLXNlY29uZGFyeTogI2ZmYmE0MztcXG4gICAgLS1zZWNvbmRhcnlMaWdodDogI2ZmYmE0MztcXG4gICAgLS1oZWFkZXJDb2xvcjogIzFhMWExYTtcXG4gICAgLS1oZWFkZXJDb2xvckRhcms6ICMwODIwMzI7XFxuICAgIC0taGVhZGVyQ29sb3JNZWRpdW06ICMyYzM5NGI7XFxuICAgIC0tYm9keVRleHRDb2xvcjogIzRlNGI2NjtcXG4gICAgLS1ib2R5VGV4dENvbG9yV2hpdGU6ICNmYWZiZmM7XFxuICAgIC0tYm9keVRleHRDb2xvckdyYXk6ICMzMTMxMzE7XFxuICAgIC8qIDEzcHggLSAxNnB4ICovXFxuICAgIC0tdG9wcGVyRm9udFNpemU6IGNsYW1wKDAuODEyNXJlbSwgMS42dncsIDFyZW0pO1xcbiAgICAvKiAzMXB4IC0gNDlweCAqL1xcbiAgICAtLWhlYWRlckZvbnRTaXplOiBjbGFtcCgxcmVtLCAydncsIDJyZW0pO1xcbiAgICAtLWJvZHlGb250U2l6ZTogMXJlbTtcXG4gICAgLyogNjBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXFxuICAgIC0tc2VjdGlvblBhZGRpbmc6IGNsYW1wKDMuNzVyZW0sIDcuODJ2dywgNi4yNXJlbSkgMXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogaGVpZ2h0OiAxcmVtOyAqL1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNzLXRvcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdG9wcGVyRm9udFNpemUpO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY3MtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRlckZvbnRTaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgICBtYXgtd2lkdGg6IDQzLjc1cmVtO1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNzLXRleHQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAuNjI1cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG59XFxuXFxuI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUsXFxuI2NzLW5hdmlnYXRpb24+LnBhZ2UtdGl0bGU6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yTWVkaXVtKTtcXG59XFxuXFxuI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbiAgPC0tLSAgICAgTW9iaWxlIE5hdmlnYXRpb24gICAgICAtLT5cbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIE1vYmlsZSAtIDEwMjNweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XG4gICAgYm9keS5jcy1vcGVuIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb246YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xMTAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cywgb3BhY2l0eSAwLjVzO1xuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgICBoZWlnaHQ6IDE1MHZoO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtdWwtd3JhcHBlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLWxpIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1heC13aWR0aDogMTRyZW07XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuXG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcbiAgICAgICAgLyogNDRweCAtIDQ4cHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDIuNzVyZW0sIDZ2dywgM3JlbSk7XG4gICAgICAgIGhlaWdodDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMSB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjI1ZGVnKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMiB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtMjI1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUzIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYm90dG9tOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1ib3gge1xuICAgICAgICAvKiAyNHB4IC0gMjhweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoMS41cmVtLCAydncsIDEuNzVyZW0pO1xuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDAuODc1cmVtLCAxLjV2dywgMXJlbSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHRvcCAwLjNzLCBsZWZ0IDAuM3M7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMiB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3MsIGxlZnQgMC4zcywgdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTMge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi40ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuM3M7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiA2NXZoO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMCAwIDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxLjI1cmVtO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLyogdHJhbnNpdGlvbiBmcm9tIHRoZXNlIHZhbHVlcyAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQuMzc1cmVtKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMsIG9wYWNpdHkgMC45cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgzKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg0KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDUpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDYpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNykge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOCkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg5KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNDVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMCkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjU1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTIpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTMpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42NXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDEuN3JlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsuY3MtYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xuICAgICAgICAvKiBtYWtlcyBpdCB3aGl0ZSAqL1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0pO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICBEZXNrdG9wIE5hdmlnYXRpb24gICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogU21hbGwgRGVza3RvcCAtIDEwMjRweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBoZWlnaHQgYW5kIHdpZHRoICovXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgICAgLyogcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDsgKi9cbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEuNXJlbTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIG1heC13aWR0aDogMzByZW07XG4gICAgICAgIGhlaWdodDogN3JlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogMjBweCAtIDM2cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgxLjI1cmVtLCAyLjZ2dywgMi4yNXJlbSk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICAvKiBwcmV2ZW50IGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cbiAgICAgICAgZmxleDogbm9uZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAxdncsIDEuMnJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpob3ZlcjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgICAgLyogYWN0aXZlIHN0YXRlIHVuZGVybGluZSAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIC8qIG1ha2VzIGl0IHR1cm4gd2hpdGUgKi9cbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5TGlnaHQpO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICBTaWRlIEJ5IFNpZGUgUmV2ZXJzZSAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCB0YWJsZXQgKi9cbiAgICAgICAgbWF4LXdpZHRoOiAzNi41cmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgNnZ3LCA0cmVtKTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuaG9tZS1jb250ZW50LXJpZ2h0IHtcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQ6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1yaWdodCB7XG4gICAgICAgIGhlaWdodDogOTV2dztcbiAgICAgICAgbWF4LWhlaWdodDogMjVyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUtbGVmdCB7XG4gICAgICAgIGhlaWdodDogMTExdnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMxLjI1cmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtbGVmdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiAyOHB4IC0gNDBweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDEuNzVyZW0sIDN2dywgMi41cmVtKTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3Mtc3RhdHMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzOS4zNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gICAgICAgIHJvdy1nYXA6IDEuNXJlbTtcbiAgICAgICAgY29sdW1uLWdhcDogMC43NXJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3Mtc3RhdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIC8qIG1ha2luZyBmbGV4IHNvIHdlIGNhbiBhbGlnbiBhIGhlYWRpbmcgd2l0aCAxIGxpbmUgdG8gdGhlIGJvdHRvbSAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1udW1iZXIge1xuICAgICAgICAvKiAzMXB4IC0gMzlweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuOTM3NXJlbSwgM3Z3LCAyLjQzNzVyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgMCAwLjI1cmVtIDA7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLyogYXV0byBtYXJnaW4gdG9wIHdpbGwgcHVzaCB0ZXh0IHRvIGJvdHRvbSBpZiB0aGVyZSdzIG9ubHkgb25lIGxpbmUgKi9cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtcmlnaHQge1xuICAgICAgICAvKiBzZW5kcyBpdCB0byB0aGUgcmlnaHQgaW4gdGhlIDJuZCBwb3NpdGlvbiAqL1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtcGljdHVyZS1yaWdodCB7XG4gICAgICAgIC8qIDM0MHB4IC0gNDYwcHggKi9cbiAgICAgICAgbWluLWhlaWdodDogY2xhbXAoMjEuMjVyZW0sIDM1dncsIDI4Ljc1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLWxlZnQge1xuICAgICAgICAvKiA1MzBweCAtIDY2MHB4ICovXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDMzLjEyNXJlbSwgNDV2dywgNDEuMjVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRpdGxlLFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0LFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1udW1iZXIsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICAgICAgIEZvb3RlciAgICAgICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI2NzLWZvb3Rlci0xMDgge1xuICAgICAgICAvKiA0MHB4IC0gMTAwcHggdG9wIGFuZCBib3R0b20gKi9cbiAgICAgICAgcGFkZGluZzogY2xhbXAoMXJlbSwgNC45dncsIDIuMjVyZW0pIDFyZW07XG4gICAgICAgIC8qIDQwcHggLSA1MHB4ICovXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCgxLjVyZW0sIDYuOXZ3LCAyLjEyNXJlbSk7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcbiAgICAgICAgLyogNDBweCAtIDYwcHgqL1xuICAgICAgICBwYWRkaW5nOiAwIDAgY2xhbXAoMnJlbSwgNC43dncsIC43NXJlbSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYwZjY7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcbiAgICAgICAgLyogMTZweCAtIDIwcHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDAuMTVzLCAxcmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XG4gICAgICAgIC8qIHRvcCByaWdodCBib3ggKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb3B5cmlnaHQge1xuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAxLjZ2dywgMXJlbSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNhMGEzYmQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvKiAyMHB4IC0gMjhweCAqL1xuICAgICAgICBtYXJnaW46IGNsYW1wKDEuMjVyZW0sIDIuOHZ3LCAxLjc1cmVtKSBhdXRvIDA7XG4gICAgfVxufVxuXG4vKiBUYWJsZXQgLSA2MDBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNy41cmVtKSB7XG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcbiAgICAgICAgLyogNDRweCAtIDg4cHggKi9cbiAgICAgICAgbWFyZ2luOiAwIGNsYW1wKDIuNzVyZW0sIDYuMnZ3LCA1LjVyZW0pIDAgMDtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1mb290ZXItMTA4IC5jcy1saW5rOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgICAgICAgIE1lbnUgICAgICAgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG5cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICAjbWVudS0xMDA1IHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICNtZW51LTEwMDU6YmVmb3JlIHtcbiAgICAgICAgLyogc3RhdGljIHRpbGVkIHBhdHRlcm4gKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMC4wODtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9jc2ltZy5ueWMzLmNkbi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0Zvb2QtTWVudS9zdGF0aWMtcGF0dGVybi5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDgwZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgN3Z3LCA0cmVtKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1jb250ZW50IHtcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlciB7XG4gICAgICAgIC8qIDEyMHB4IC0gMTgxcHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDcuNXJlbSwgOXZ3LCAxMS4zMTI1cmVtKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlcjpiZWZvcmUge1xuICAgICAgICAvKiBsZWZ0IGxpbmUgKi9cbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgLyogOTBweCAtIDE1NXB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCg1LjYyNXJlbSwgNHZ3LCA5LjY4NzVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgLyogMTJweCAtIDI0cHggKi9cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCgwLjc1cmVtLCAydncsIDEuNXJlbSk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICByaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXI6YWZ0ZXIge1xuICAgICAgICAvKiByaWdodCBsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCgwLjc1cmVtLCAydncsIDEuNXJlbSk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlciBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cblxuICAgICNtZW51LTEwMDUgLmNzLXRleHQge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtYnV0dG9uLXNvbGlkIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAvKiA0NnB4IC0gNTZweCAqL1xuICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMi44NzVlbSwgNS41dncsIDMuNWVtKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1pbi13aWR0aDogOS4zNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGZyb20gYWRkaW5nIHRvIHRoZSB3aWR0aCAqL1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlcjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgICAgICAgLyogMzJweCAtIDYwcHggKi9cbiAgICAgICAgcm93LWdhcDogY2xhbXAoMnJlbSwgNnZ3LCAzLjc1cmVtKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMzYuMjVyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiAxNnB4IC0gMzZweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDFyZW0sIDN2dywgMi4yNXJlbSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSB7XG4gICAgICAgIC8qIDc2cHggLSAxNjBweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoNC43NXJlbSwgMTR2dywgMTByZW0pO1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDQuNzVyZW0sIDE0dncsIDEwcmVtKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLyogNHB4IC0gOHB4ICovXG4gICAgICAgIGJvcmRlcjogY2xhbXAoMC4yNXJlbSwgMXZ3LCAwLjVyZW0pIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1waWN0dXJlIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBtYWtlcyBpdCBhY3QgbGlrZSBhIGJhY2tncm91bmQgaW1hZ2UgKi9cbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaDMge1xuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMS41cmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAvKiA4cHggLSAxNnB4ICovXG4gICAgICAgIG1hcmdpbjogMCAwIGNsYW1wKDAuNXJlbSwgMS41dncsIDFyZW0pO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWgzOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiNGIyYzc7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLW5hbWUge1xuICAgICAgICBtYXgtd2lkdGg6IDEzLjc1cmVtO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXByaWNlIHtcbiAgICAgICAgLyogMTZweCAtIDI1cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNTYyNXJlbSk7XG4gICAgICAgIC8qIDI4cHggLSA0NnB4ICovXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgxLjc1cmVtLCA0dncsIDIuODc1cmVtKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgLyogOHB4IC0gMTJweCAqL1xuICAgICAgICBwYWRkaW5nOiAwIGNsYW1wKDAuNXJlbSwgMXZ3LCAwLjc1cmVtKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiMmM3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBvcmRlcjogMztcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtLXAge1xuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAydncsIDFyZW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbn1cblxuLyogVGFibGV0IC0gNzY4cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA0OC41JTtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgICAgICAgICBDb250YWN0cyAgICAgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cblxuLyogTW9iaWxlIC0gMzYwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgICNjb250YWN0LXN0cmlwLTMyNCB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MGVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDd2dywgNHJlbSk7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1jb250ZW50IHtcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIGNoYW5nZXMgdG8gMTI4MHB4IGF0IGRlc2t0b3AgKi9cbiAgICAgICAgbWF4LXdpZHRoOiAzNy41cmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDIuNXJlbTtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW0ge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTguMTI1cmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW06aG92ZXIgLmNzLXBpY3R1cmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgIC8qIDEycHggLSAyMHB4ICovXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgM3Z3LCAxLjI1cmVtKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmFiYWJhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogcHJldmVudHMgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxuICAgICAgICAgICAgYm94LXNoYWRvdyAwLjNzLFxuICAgICAgICAgICAgdHJhbnNmb3JtIDAuNnM7XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1mbGV4LWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNzY3Njc2O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG59XG5cbi8qIFRhYmxldCAtIDY1MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwLjYyNXJlbSkge1xuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgICAgICAgcm93LWdhcDogMnJlbTtcbiAgICB9XG59XG5cbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyLFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhvdXJzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7b0NBRW9DO0FBQ3BDLG9CQUFvQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLGlEQUFpRDtRQUNqRCxlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLDhCQUE4QjtRQUM5QixVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsUUFBUTtRQUNSLGNBQWM7UUFDZCxxQ0FBcUM7UUFDckMsbUNBQW1DO1FBQ25DLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJ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QUFhO1FBQ2IsMkJBQTJCO1FBQzNCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixpREFBaUQ7UUFDakQsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsMENBQTBDO1FBQzFDLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsdUNBQXVDO1FBQ3ZDLFVBQVU7UUFDVjs7OzBCQUdrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxzQkFBc0I7UUFDdEIsY0FBYztJQUNsQjs7SUFFQTs7UUFFSSw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsY0FBYztJQUNsQjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsYUFBYTtJQUNqQjtBQUNKOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTs7O1FBR0ksZ0NBQWdDO0lBQ3BDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgIE1vYmlsZSBOYXZpZ2F0aW9uICAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAtIDEwMjNweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xcbiAgICBib2R5LmNzLW9wZW4ge1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uOmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xMTAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIG9wYWNpdHkgMC41cztcXG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgaGVpZ2h0OiAxNTB2aDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtbGkge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDE0cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9XFxuXFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xcbiAgICAgICAgLyogNDRweCAtIDQ4cHggKi9cXG4gICAgICAgIHdpZHRoOiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMSB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMjVkZWcpO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUyIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgdHJhbnNsYXRlWSgwKSByb3RhdGUoLTIyNWRlZyk7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTMge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGJvdHRvbTogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYm94IHtcXG4gICAgICAgIC8qIDI0cHggLSAyOHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoMS41cmVtLCAydncsIDEuNzVyZW0pO1xcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICAgIGhlaWdodDogY2xhbXAoMC44NzVyZW0sIDEuNXZ3LCAxcmVtKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTEge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHRvcCAwLjNzLCBsZWZ0IDAuM3M7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUyIHtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcywgbGVmdCAwLjNzLCB0cmFuc2Zvcm0gMC41cztcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTMge1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MsIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjRlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuM3M7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgbWF4LWhlaWdodDogNjV2aDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMCAwIDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuMjVyZW07XFxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgLyogdHJhbnNpdGlvbiBmcm9tIHRoZXNlIHZhbHVlcyAqL1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjM3NXJlbSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cywgb3BhY2l0eSAwLjlzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDQpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDUpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg2KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg3KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEwKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEyKSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42NXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS43cmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAtMC4xMjVyZW07XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogRGFyayBNb2RlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIC8qIG1ha2VzIGl0IHdoaXRlICovXFxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgIERlc2t0b3AgTmF2aWdhdGlvbiAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHotaW5kZXg6IDEwMDAwOyAqL1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzByZW07XFxuICAgICAgICBoZWlnaHQ6IDdyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgei1pbmRleDogMTAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDIwcHggLSAzNnB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDEuMjVyZW0sIDIuNnZ3LCAyLjI1cmVtKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gICAgICAgIC8qIHByZXZlbnQgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMXZ3LCAxLjJyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMHJlbTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUge1xcbiAgICAgICAgLyogbWFrZXMgaXQgdHVybiB3aGl0ZSAqL1xcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgU2lkZSBCeSBTaWRlIFJldmVyc2UgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCB0YWJsZXQgKi9cXG4gICAgICAgIG1heC13aWR0aDogMzYuNXJlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDZ2dywgNHJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudC1yaWdodCB7XFxuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8qIGNlbnRlcnMgY29udGVudCBob3Jpem9udGFsbHksIHNldCB0byBmbGV4LXN0YXJ0IHRvIGxlZnQgYWxpZ24gKi9cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXRleHQ6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXBpY3R1cmUgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLXJpZ2h0IHtcXG4gICAgICAgIGhlaWdodDogOTV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLWxlZnQge1xcbiAgICAgICAgaGVpZ2h0OiAxMTF2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtbGVmdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogMjhweCAtIDQwcHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoMS43NXJlbSwgM3Z3LCAyLjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1zdGF0cyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzkuMzc1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgICAgIHJvdy1nYXA6IDEuNXJlbTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLXN0YXQge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxLjVyZW0gMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gICAgICAgIC8qIG1ha2luZyBmbGV4IHNvIHdlIGNhbiBhbGlnbiBhIGhlYWRpbmcgd2l0aCAxIGxpbmUgdG8gdGhlIGJvdHRvbSAqL1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLW51bWJlciB7XFxuICAgICAgICAvKiAzMXB4IC0gMzlweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjkzNzVyZW0sIDN2dywgMi40Mzc1cmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luOiAwIDAgMC4yNXJlbSAwO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1kZXNjIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgLyogYXV0byBtYXJnaW4gdG9wIHdpbGwgcHVzaCB0ZXh0IHRvIGJvdHRvbSBpZiB0aGVyZSdzIG9ubHkgb25lIGxpbmUgKi9cXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gICAgI2hvbWUtY29udGVudC1jb250YWluZXIgLmhvbWUtY29udGVudCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5ob21lLWNvbnRlbnQtcmlnaHQge1xcbiAgICAgICAgLyogc2VuZHMgaXQgdG8gdGhlIHJpZ2h0IGluIHRoZSAybmQgcG9zaXRpb24gKi9cXG4gICAgICAgIG9yZGVyOiAyO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLXJpZ2h0IHtcXG4gICAgICAgIC8qIDM0MHB4IC0gNDYwcHggKi9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNsYW1wKDIxLjI1cmVtLCAzNXZ3LCAyOC43NXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy1waWN0dXJlLWxlZnQge1xcbiAgICAgICAgLyogNTMwcHggLSA2NjBweCAqL1xcbiAgICAgICAgbWluLWhlaWdodDogY2xhbXAoMzMuMTI1cmVtLCA0NXZ3LCA0MS4yNXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcblxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGl0bGUsXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQtY29udGFpbmVyIC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtbnVtYmVyLFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtZGVzYyB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50LWNvbnRhaW5lciAuY3MtdGV4dCxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudC1jb250YWluZXIgLmNzLWRlc2Mge1xcbiAgICAgICAgb3BhY2l0eTogLjg7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgICAgICBGb290ZXIgICAgICAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI2NzLWZvb3Rlci0xMDgge1xcbiAgICAgICAgLyogNDBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXFxuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCA0Ljl2dywgMi4yNXJlbSkgMXJlbTtcXG4gICAgICAgIC8qIDQwcHggLSA1MHB4ICovXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMS41cmVtLCA2Ljl2dywgMi4xMjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XFxuICAgICAgICAvKiA0MHB4IC0gNjBweCovXFxuICAgICAgICBwYWRkaW5nOiAwIDAgY2xhbXAoMnJlbSwgNC43dncsIC43NXJlbSk7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjBmNjtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcXG4gICAgICAgIC8qIDE2cHggLSAyMHB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMC4xNXMsIDFyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpob3ZlcjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIHRvcCByaWdodCBib3ggKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgaGVpZ2h0OiAwLjE4NzVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvcHlyaWdodCB7XFxuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMS42dncsIDFyZW0pO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6ICNhMGEzYmQ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIC8qIDIwcHggLSAyOHB4ICovXFxuICAgICAgICBtYXJnaW46IGNsYW1wKDEuMjVyZW0sIDIuOHZ3LCAxLjc1cmVtKSBhdXRvIDA7XFxuICAgIH1cXG59XFxuXFxuLyogVGFibGV0IC0gNjAwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3LjVyZW0pIHtcXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcXG4gICAgICAgIC8qIDQ0cHggLSA4OHB4ICovXFxuICAgICAgICBtYXJnaW46IDAgY2xhbXAoMi43NXJlbSwgNi4ydncsIDUuNXJlbSkgMCAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgICAgICAgTWVudSAgICAgICAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI21lbnUtMTAwNSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNTpiZWZvcmUge1xcbiAgICAgICAgLyogc3RhdGljIHRpbGVkIHBhdHRlcm4gKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvcGFjaXR5OiAwLjA4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL2NzaW1nLm55YzMuY2RuLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vRm9vZC1NZW51L3N0YXRpYy1wYXR0ZXJuLnBuZ1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODBlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgN3Z3LCA0cmVtKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1jb250ZW50IHtcXG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIge1xcbiAgICAgICAgLyogMTIwcHggLSAxODFweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDcuNXJlbSwgOXZ3LCAxMS4zMTI1cmVtKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyOmJlZm9yZSB7XFxuICAgICAgICAvKiBsZWZ0IGxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgLyogOTBweCAtIDE1NXB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgLyogMTJweCAtIDI0cHggKi9cXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlcjphZnRlciB7XFxuICAgICAgICAvKiByaWdodCBsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDUuNjI1cmVtLCA0dncsIDkuNjg3NXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXFxuICAgICAgICBtYXJnaW4tbGVmdDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcblxcbiAgICAjbWVudS0xMDA1IC5jcy10ZXh0IHtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgLyogNDZweCAtIDU2cHggKi9cXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjg3NWVtLCA1LjV2dywgMy41ZW0pO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgZnJvbSBhZGRpbmcgdG8gdGhlIHdpZHRoICovXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWNhcmQtZ3JvdXAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xcbiAgICAgICAgLyogMzJweCAtIDYwcHggKi9cXG4gICAgICAgIHJvdy1nYXA6IGNsYW1wKDJyZW0sIDZ2dywgMy43NXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDM2LjI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiAxNnB4IC0gMzZweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDIuMjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgLyogNzZweCAtIDE2MHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNC43NXJlbSwgMTR2dywgMTByZW0pO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg0Ljc1cmVtLCAxNHZ3LCAxMHJlbSk7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgLyogNHB4IC0gOHB4ICovXFxuICAgICAgICBib3JkZXI6IGNsYW1wKDAuMjVyZW0sIDF2dywgMC41cmVtKSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogbWFrZXMgaXQgYWN0IGxpa2UgYSBiYWNrZ3JvdW5kIGltYWdlICovXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1oMyB7XFxuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIC8qIDhweCAtIDE2cHggKi9cXG4gICAgICAgIG1hcmdpbjogMCAwIGNsYW1wKDAuNXJlbSwgMS41dncsIDFyZW0pO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBnYXA6IDAuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaDM6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtbmFtZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzLjc1cmVtO1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1wcmljZSB7XFxuICAgICAgICAvKiAxNnB4IC0gMjVweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNTYyNXJlbSk7XFxuICAgICAgICAvKiAyOHB4IC0gNDZweCAqL1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDEuNzVyZW0sIDR2dywgMi44NzVyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIC8qIDhweCAtIDEycHggKi9cXG4gICAgICAgIHBhZGRpbmc6IDAgY2xhbXAoMC41cmVtLCAxdncsIDAuNzVyZW0pO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiMmM3O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBvcmRlcjogMztcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtLXAge1xcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44NzVyZW0sIDJ2dywgMXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAtIDc2OHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xcbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDQ4LjUlO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgICAgICAgICAgQ29udGFjdHMgICAgICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcblxcbi8qIE1vYmlsZSAtIDM2MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MGVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgzcmVtLCA3dncsIDRyZW0pO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtY29udGVudCB7XFxuICAgICAgICAvKiBzZXQgdGV4dCBhbGlnbiB0byBsZWZ0IGlmIGNvbnRlbnQgbmVlZHMgdG8gYmUgbGVmdCBhbGlnbmVkICovXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCBkZXNrdG9wICovXFxuICAgICAgICBtYXgtd2lkdGg6IDM3LjVyZW07XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW0ge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAxOC4xMjVyZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pdGVtOmhvdmVyIC5jcy1waWN0dXJlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgd2lkdGg6IDVyZW07XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICAvKiAxMnB4IC0gMjBweCAqL1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCgwLjc1cmVtLCAzdncsIDEuMjVyZW0pO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JhYmFiYTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiBwcmV2ZW50cyBmbGV4Ym94IGZyb20gc3F1aXNoaW5nIGl0ICovXFxuICAgICAgICBmbGV4OiBub25lO1xcbiAgICAgICAgdHJhbnNpdGlvbjpcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsXFxuICAgICAgICAgICAgYm94LXNoYWRvdyAwLjNzLFxcbiAgICAgICAgICAgIHRyYW5zZm9ybSAwLjZzO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtZmxleC1ncm91cCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBjb2xvcjogIzc2NzY3NjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluazpob3ZlciB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA2NTBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAuNjI1cmVtKSB7XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgY29sdW1uLWdhcDogMS4yNXJlbTtcXG4gICAgICAgIHJvdy1nYXA6IDJyZW07XFxuICAgIH1cXG59XFxuXFxuLyogU21hbGwgRGVza3RvcCAtIDEwMjRweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcXG4gICAgICAgIG1heC13aWR0aDogODByZW07XFxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1oZWFkZXIsXFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFyay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydGluZyBnbG9iYWwsIG1haW4sIGFuZCBkYXJrIG1vZGUgQ1NTIHN0eWxlc2hlZXRzXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2RhcmsuY3NzJztcblxuLy8gSW1wb3J0aW5nIGZ1bmN0aW9uYWxpdHkgbW9kdWxlc1xuaW1wb3J0IGRhcmtNb2RlVG9nZ2xlciBmcm9tICcuL21vZHVsZXMvdXRpbGl0eS9kYXJrTW9kZS5qcyc7XG5pbXBvcnQgbW9iaWxlTmF2aWdhdGlvblRvZ2dsaW5nIGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L21vYmlsZU5hdmlnYXRpb24uanMnO1xuXG4vLyBJbXBvcnRpbmcgcGFnZSBsb2FkZXIgZnVuY3Rpb25zXG5pbXBvcnQgaG9tZVBhZ2VMb2FkZXIgZnJvbSAnLi9tb2R1bGVzL3BhZ2VMb2FkZXJzL2hvbWVQYWdlTG9hZGVyLmpzJztcbmltcG9ydCBtZW51UGFnZUxvYWRlciBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWRlcnMvbWVudVBhZ2VMb2FkZXIuanMnO1xuaW1wb3J0IGNvbnRhY3RzUGFnZUxvYWRlciBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWRlcnMvY29udGFjdHNQYWdlTG9hZGVyLmpzJztcblxuLy8gSW1wb3J0aW5nIHV0aWxpdHkgZnVuY3Rpb24gZm9yIGNoYW5naW5nIGJ1dHRvbiBhcHBlYXJhbmNlXG5pbXBvcnQgeyBjaGFuZ2VCdXR0b25Db3ZlciB9IGZyb20gJy4vbW9kdWxlcy91dGlsaXR5L2VsZW1lbnRSZW5kZXIuanMnO1xuXG4vLyBBY3RpdmF0ZSBkYXJrIG1vZGUgdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbmRhcmtNb2RlVG9nZ2xlcigpO1xuXG4vLyBTZXQgdXAgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xlIGZ1bmN0aW9uYWxpdHlcbm1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZygpO1xuXG4vLyBHbG9iYWwgdmFyaWFibGVzIHNldHVwXG5sZXQgcGFnZU5hbWVzID0gWydob21lJywgJ21lbnUnLCAnY29udGFjdHMnXTtcbmxldCBjdXJyZW50VGFiID0gcGFnZU5hbWVzWzBdO1xubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1jb250ZW50Jyk7XG5cbi8vIExvYWQgdGhlIGluaXRpYWwgaG9tZSBwYWdlIGNvbnRlbnRcbmhvbWVQYWdlTG9hZGVyKGNvbnRlbnQpO1xuXG4vKipcbiAqIFNldCB1cCBjbGljayBldmVudCBsaXN0ZW5lcnMgZm9yIHRhYiBuYXZpZ2F0aW9uIGluIHRoZSBoZWFkZXIuXG4gKiBUaGlzIGFsbG93cyBzd2l0Y2hpbmcgYmV0d2VlbiBkaWZmZXJlbnQgcGFnZXMgKGhvbWUsIG1lbnUsIGNvbnRhY3RzKSBhbmRcbiAqIGVuc3VyZXMgdGhlIGFwcHJvcHJpYXRlIGNvbnRlbnQgaXMgbG9hZGVkIGFuZCBkaXNwbGF5ZWQuXG4gKi9cbnBhZ2VOYW1lcy5mb3JFYWNoKChwYWdlTmFtZSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2VOYW1lKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRUYWIgPSBjaGFuZ2VCdXR0b25Db3ZlcihjdXJyZW50VGFiLCBidXR0b24uaWQpO1xuXG4gICAgICAgIGlmIChidXR0b24uaWQgPT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICBob21lUGFnZUxvYWRlcihjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICBtZW51UGFnZUxvYWRlcihjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRhY3RzUGFnZUxvYWRlcihjb250ZW50KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRhY3RzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiZXhwb3J0IGxldCBjb250YWN0c0NvbnRlbnRzID0gW1xuICAgIHtcbiAgICAgICAgY29udGVudHM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnT3VyIENvbnRhY3RzJyxcbiAgICAgICAgICAgIHRvcHBlcjogJ1dlIGdvdCBmb29kIScsXG4gICAgICAgICAgICBwYXJhZ3JhcGg6ICdTb21lIGNsZXZlciB0ZXh0IGFib3V0IHJlc2VydmluZyB0YWJsZSB2aWEgcGhvbmUgb3IgZW1haWwnLFxuICAgICAgICB9LFxuICAgICAgICBjYXJkR3JvdXA6IHtcbiAgICAgICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICdQaG9uZScsXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnJPbmU6ICcrMSAoNTU1KSA0NTYgNzg5OScsXG4gICAgICAgICAgICAgICAgICAgIHBob25lTnJUd286ICcrMSAoNTU1KSA0NTYgNzg4OScsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGB0ZWw6NTU1LTQ1Ni03ODk5YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2NzaW1nLm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9Db250YWN0LVBhZ2UvcGhvbmUtZ3JleS5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzM1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJpYS1oaWRkZW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ0VtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICdpbmZvQGVtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGBtYWlsdG86SW5mb0BlbWFpbC5jb21gXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jc2ltZy5ueWMzLmNkbi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL0ljb25zL21lY2gtZW1haWwuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ2ljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczNScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyaWEtaGlkZGVuOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBgMTIzIEZha2UgU3QsIFNURSAxMDAgU29tZXdoZXJlLCBGTCA5ODc1YCxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2NzaW1nLm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9Db250YWN0LVBhZ2UvcGluLWdyZXkuc3ZnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ2ljb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyaWEtaGlkZGVuOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhvdXJzOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICdPcGVuIEhvdXJzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF5czogJ01vbmRheSBUbyBTYXR1cmRheScsXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzOiAnOTowMCAtIDIyOjMwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL2NzaW1nLm55YzMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9Db250YWN0LVBhZ2UvY2xvY2stZ3JleS5zdmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnaWNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJpYS1oaWRkZW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IGhvbWVQYWdlTGVmdCBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2hvbWVQYWdlTGVmdC5wbmcnO1xuaW1wb3J0IGhvbWVQYWdlUmlnaHQgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9ob21lUGFnZVJpZ2h0LnBuZyc7XG5cbmV4cG9ydCBsZXQgaG9tZUNvbnRlbnRzID0gW1xuICAgIHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdG9wcGVyOiAnRG8geW91IGxpa2UgZm9vZD8nLFxuICAgICAgICAgICAgdGl0bGU6ICdBY2Nlc3NpYmxlIEZvb2QgVGhhdCBBbnlvbmUgQ2FuIEVhdCcsXG4gICAgICAgICAgICBwYXJhZ3JhcGg6IGBJbW1lcnNlIHlvdXJzZWxmIGluIHRoZSB0YW50YWxpemluZyB3b3JsZCBvZiBnb3VybWV0IGRpbmluZyBhdFxuICAgICAgICBcIlNhdm9yJ3MgQ2F0Y2hcIiwgYSB2aWJyYW50IGFuZCBlbGVjdHJpZnlpbmcgcmVzdGF1cmFudCBicmFuZFxuICAgICAgICBjcmFmdGVkIHNwZWNpZmljYWxseSBmb3IgdGhvc2Ugd2hvIHJlbGlzaCB0aGUgdGhyaWxsIG9mIGN1bGluYXJ5XG4gICAgICAgIGV4Y2VsbGVuY2UuIEZvciBhdmlkIGZvb2QgZW50aHVzaWFzdHMgd2hvIGZlZWwgdGhlaXIgdGFzdGUgYnVkc1xuICAgICAgICBhd2FrZW4gYXQgdGhlIGZpcnN0IGhpbnQgb2YgZXhxdWlzaXRlIGZsYXZvcnMsIFwiU2F2b3IncyBDYXRjaFwiXG4gICAgICAgIGVtYm9kaWVzIHRoZSBlc3NlbmNlIG9mIHRoYXQgZXhoaWxhcmF0aW5nIG1vbWVudCB3aGVuIGFcbiAgICAgICAgcGVyZmVjdGx5IHByZXBhcmVkIGRpc2ggYW5kIGEgZGlzY2VybmluZyBkaW5lciBlbmdhZ2UgaW4gYVxuICAgICAgICBkZWxpZ2h0ZnVsIGludGVycGxheSBvZiB0YXN0ZSBhbmQgY3JhZnRzbWFuc2hpcC5gLFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZUxlZnQ6IHtcbiAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgIHNyY3NldDogaG9tZVBhZ2VMZWZ0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgIHNyY3NldDogaG9tZVBhZ2VMZWZ0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICBzcmM6IGhvbWVQYWdlTGVmdCxcbiAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNjA4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MDYnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VSaWdodDoge1xuICAgICAgICAgICAgbW9iaWxlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgc3Jjc2V0OiBob21lUGFnZVJpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgIHNyY3NldDogaG9tZVBhZ2VSaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgc3JjOiBob21lUGFnZVJpZ2h0LFxuICAgICAgICAgICAgICAgIGFsdDogJ3Blb3BsZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc2MDgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzY2MicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgZmlyc3RTdGF0OiB7XG4gICAgICAgICAgICAgICAgbnVtOiAnOTklJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnUG9zaXRpdmUgY3VzdG9tZXIgcmV2aWV3cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Vjb25kU3RhdDoge1xuICAgICAgICAgICAgICAgIG51bTogJzEwJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBgRGlzaCAnVHJ5IEFnYWluJyBTcGVjaWFsYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlyZFN0YXQ6IHtcbiAgICAgICAgICAgICAgICBudW06ICcyNC83JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnT25saW5lIHJlc2VydmF0aW9uIGFuZCBpbnF1aXJ5IHNlcnZpY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCBidXJnZXIgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L2Jpc29uQnVyZ2VyLnBuZyc7XG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi8uLi9hc3NldHMvaW1nL21lbnUvY2hpY2tlblNhbGFkTWFuZ28ucG5nJztcbmltcG9ydCBsYXNhZ25hIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9sYXNhZ25hLnBuZyc7XG5pbXBvcnQgcGl6emEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L21lYXRMb3ZlcnNQaXp6YS5wbmcnO1xuaW1wb3J0IHNhdWNlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbWVudS9wcmlja2x5UGVhclBvcmtTYXVjZS5wbmcnO1xuaW1wb3J0IHRvc3RhZGEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltZy9tZW51L3B1cnBsZUNvcm5Ub3N0YWRhLnBuZyc7XG5cbmV4cG9ydCBsZXQgbWVudUNvbnRlbnRzID0gW1xuICAgIHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGl0bGU6ICdPdXIgU3BlY2lhbHMnLFxuICAgICAgICAgICAgcGFyYWdyYXBoOiBgSW5kdWxnZSBpbiBvdXIgU3BlY2lhbCBNZW51LCB3aGVyZSBlYWNoIGRpc2ggaXMgYSBtYXN0ZXJwaWVjZSBvZlxuICAgICAgICAgICAgZmxhdm9yIGFuZCBjcmVhdGl2aXR5LiBGcm9tIHRoZSBoZWFydGluZXNzIG9mIGEgQmlzb24gQnVyZ2VyIHRvXG4gICAgICAgICAgICB0aGUgZXhvdGljIGZsYWlyIG9mIEN1cnJpZWQgQ2hpY2tlbiBTYWxhZCB3aXRoIE1hbmdvLCBleHBlcmllbmNlXG4gICAgICAgICAgICBhIGN1bGluYXJ5IGpvdXJuZXkgdGhhdCBkZWxpZ2h0cyBhbmQgc3VycHJpc2VzIHdpdGggZXZlcnkgYml0ZS5gLFxuICAgICAgICB9LFxuICAgICAgICBjYXJkR3JvdXA6IHtcbiAgICAgICAgICAgIGxpc3RJdGVtT25lOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTGFzYWduYScsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnNTbigqwnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFyYWdyYXBoOiBgQSBjbGFzc2ljIGZhdm9yaXRlLCBvdXIgbGFzYWduYSBsYXllcnMgdGVuZGVyIHBhc3RhIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgcmljaCBtZWF0IHNhdWNlIGFuZCBjcmVhbXkgYsOpY2hhbWVsLCB0b3BwZWQgd2l0aCBnb2xkZW4sXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsaW5nIGNoZWVzZSBmb3IgYSBjb21mb3J0aW5nIGFuZCBpbmR1bGdlbnQgbWVhbC5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBsYXNhZ25hLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBsYXNhZ25hLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ICdsYXp5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kaW5nOiAnYXN5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBsYXNhZ25hLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbVR3bzoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Jpc29uIEJ1cmdlcicsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnNTbigqwnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtUGFyYWdyYXBoOiBgVGhpcyBoZWFydHkgYnVyZ2VyIGZlYXR1cmVzIGEganVpY3kgYmlzb24gcGF0dHkgdG9wcGVkXG4gICAgICAgICAgICAgICAgICAgIHdpdGggZnJlc2ggdmVnZXRhYmxlcyBhbmQgbWVsdGVkIGNoZWVzZSwgc2VydmVkIGluIGFcbiAgICAgICAgICAgICAgICAgICAgcnVzdGljIGJ1biBmb3IgYSByb2J1c3QgYW5kIHNhdGlzZnlpbmcgZXhwZXJpZW5jZS5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBidXJnZXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGJ1cmdlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYnVyZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbVRocmVlOiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ3VycmllZCBDaGlja2VuIFNhbGFkIHdpdGggTWFuZ28nLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYEEgcmVmcmVzaGluZyBtaXggb2YgdGVuZGVyIGN1cnJpZWQgY2hpY2tlbiBhbmQgc3dlZXRcbiAgICAgICAgICAgICAgICAgICAgbWFuZ28gc2xpY2VzLCB0b3NzZWQgd2l0aCB2aWJyYW50IGdyZWVucyBmb3IgYSBsaWdodCB5ZXRcbiAgICAgICAgICAgICAgICAgICAgZmxhdm9yZnVsIHNhbGFkLmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGNoaWNrZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IGNoaWNrZW4sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGNoaWNrZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RJdGVtRm91cjoge1xuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYE1lYXQgTG92ZXJzJyBTaGVldCBQYW4gUGl6emFgLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYExvYWRlZCB3aXRoIGFuIGFzc29ydG1lbnQgb2YgbWVhdHMgbGlrZSBwZXBwZXJvbmksXG4gICAgICAgICAgICAgICAgICAgIHNhdXNhZ2UsIGFuZCBiYWNvbiwgdGhpcyBwaXp6YSBvZmZlcnMgYSBjYXJuaXZvcmUnc1xuICAgICAgICAgICAgICAgICAgICBkZWxpZ2h0IHdpdGggZXZlcnkgY3Jpc3B5LCBjaGVlc3kgYml0ZS5gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGljdHVyZToge1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDBweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBwaXp6YSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGV0SW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhOiAnKG1heC13aWR0aDogNjAxcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldDogcGl6emEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHBpenphLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAncGVvcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE2MCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaXN0SXRlbUZpdmU6IHtcbiAgICAgICAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBQdXJwbGUgQ29ybiBUb3N0YWRhYCxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICc1NuKCrCcsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJhZ3JhcGg6IGBBIGZlYXN0IGZvciB0aGUgZXllcyBhbmQgdGhlIHBhbGF0ZSwgdGhpcyB0b3N0YWRhIHVzZXMgYVxuICAgICAgICAgICAgICAgICAgICB1bmlxdWUgcHVycGxlIGNvcm4gc2hlbGwsIHBpbGVkIGhpZ2ggd2l0aCBzZWFzb25lZCBtZWF0c1xuICAgICAgICAgICAgICAgICAgICBhbmQgZnJlc2ggdG9wcGluZ3MgZm9yIGEgY3J1bmNoeSwgc2F2b3J5IHRyZWF0LmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHRvc3RhZGEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxldEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMXB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHRvc3RhZGEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGltZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2Rpbmc6ICdhc3luYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHRvc3RhZGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpc3RJdGVtU2l4OiB7XG4gICAgICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgUHJpY2tseSBQZWFyIFBvcmsgU2F1Y2VgLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJzU24oKsJyxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcmFncmFwaDogYEFuIGlubm92YXRpdmUgZnVzaW9uLCB0aGlzIHNhdWNlIGJsZW5kcyB0aGUgc3dlZXRuZXNzIG9mXG4gICAgICAgICAgICAgICAgICAgIHByaWNrbHkgcGVhciB3aXRoIHJpY2ggcG9yaywgY3JlYXRpbmcgYSBwZXJmZWN0XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZW1lbnQgdG8gZW5oYW5jZSBhbnkgZ291cm1ldCBkaXNoLmAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYTogJyhtYXgtd2lkdGg6IDYwMHB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ6IHNhdWNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0YWJsZXRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE6ICcobWF4LXdpZHRoOiA2MDFweCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Jjc2V0OiBzYXVjZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiAnbGF6eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGluZzogJ2FzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc2F1Y2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxNjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTYwJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiIsIi8vIEltcG9ydGluZyBob21lIGNvbnRlbnRzIGRhdGEgZnJvbSBjb250YWN0c0NvbnRlbnRzIG1vZHVsZVxuaW1wb3J0IHsgY29udGFjdHNDb250ZW50cyB9IGZyb20gJy4uL3BhZ2VEYXRhL2NvbnRhY3RzQ29udGVudC5qcyc7XG5cbi8vIEltcG9ydGluZyB1dGlsaXR5IGZ1bmN0aW9ucyBmcm9tIHRoZSAnZWxlbWVudFJlbmRlcicgbW9kdWxlLiBUaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWRcbi8vIGZvciBjcmVhdGluZyB2YXJpb3VzIEhUTUwgZWxlbWVudHMgZHluYW1pY2FsbHlcbmltcG9ydCB7XG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlUGljdHVyZSxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGNyZWF0ZUxpc3RJdGVtLFxuICAgIGNyZWF0ZVNwYW4sXG4gICAgY2xlYXJQYWdlLFxuICAgIGNyZWF0ZUxpbmssXG4gICAgY3JlYXRlVGl0bGUsXG4gICAgY3JlYXRlUGFyYWdyYXBoLFxuICAgIGNyZWF0ZVRvcHBlcixcbn0gZnJvbSAnLi4vdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzJztcblxuLyoqXG4gKiBMb2FkcyBhbmQgZGlzcGxheXMgdGhlIGNvbnRhY3RzIHBhZ2UgY29udGVudC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnQgLSBUaGUgcGFyZW50IGVsZW1lbnQgd2hlcmUgdGhlIGNvbnRhY3RzIHBhZ2Ugd2lsbCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdHNQYWdlTG9hZGVyKGNvbnRlbnQpIHtcbiAgICBjbGVhclBhZ2UoY29udGVudCk7IC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQuXG5cbiAgICAvLyBDcmVhdGUgdGhlIG1haW4gc2VjdGlvbiBmb3IgY29udGFjdHMgYW5kIGFwcGVuZCBpdCB0byB0aGUgY29udGVudCBhcmVhLlxuICAgIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKCdpZCcsICdjb250YWN0LXN0cmlwLTMyNCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgICAvLyBSZW5kZXIgYW5kIGFwcGVuZCB0aGUgY29udGFpbmVyIGZvciB0aGUgY29udGFjdHMgY29udGVudC5cbiAgICBjb25zdCBjb250YWluZXIgPSByZW5kZXJDb250YWluZXIoKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBhIGxpc3Qgb2YgY29udGFjdCBjYXJkcyB0byB0aGUgY29udGFpbmVyIHVzaW5nIGRhdGEgZnJvbSBjb250YWN0c0NvbnRlbnRzLlxuICAgIGNvbnN0IGNhcmRHcm91cCA9IGNvbnRhY3RzQ29udGVudHNbMF0uY2FyZEdyb3VwO1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3Mtc3RhdC1ncm91cCcsXG4gICAgICAgIE9iamVjdC52YWx1ZXMoY2FyZEdyb3VwKSxcbiAgICAgICAgcmVuZGVyQ29udGFjdEl0ZW1cbiAgICApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBwcmltYXJ5IGNvbnRhaW5lciBmb3IgdGhlIGNvbnRhY3RzIHBhZ2UuXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGNvbnRhaW5lciBkaXYgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdignY2xhc3MnLCAnY3MtY29udGFpbmVyJyk7XG5cbiAgICAvLyBSZW5kZXIgYW5kIGFwcGVuZCB0aGUgY29udGVudCBzZWN0aW9uIHdpdGggdGl0bGUgYW5kIHBhcmFncmFwaCB0byB0aGUgY29udGFpbmVyLlxuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJDb250ZW50KCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IHNlY3Rpb24gd2l0aCB0aXRsZSwgdG9wcGVyLCBhbmQgcGFyYWdyYXBoLlxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjb250ZW50IHNlY3Rpb24gZGl2IGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZURpdignY2xhc3MnLCAnY3MtY29udGVudCcpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUoXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjcy10aXRsZScsXG4gICAgICAgIGNvbnRhY3RzQ29udGVudHNbMF0uY29udGVudHMudGl0bGVcbiAgICApO1xuICAgIGNvbnN0IHRvcHBlciA9IGNyZWF0ZVRvcHBlcihcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NzLXRvcHBlcicsXG4gICAgICAgIGNvbnRhY3RzQ29udGVudHNbMF0uY29udGVudHMudG9wcGVyXG4gICAgKTtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBjcmVhdGVQYXJhZ3JhcGgoXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjcy10ZXh0JyxcbiAgICAgICAgY29udGFjdHNDb250ZW50c1swXS5jb250ZW50cy5wYXJhZ3JhcGhcbiAgICApO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BwZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgYW4gaW5kaXZpZHVhbCBjb250YWN0IGl0ZW0gYXMgYSBsaXN0IGl0ZW0uXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBjb250YWN0IGl0ZW0uXG4gKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH0gLSBUaGUgbGlzdCBpdGVtIGVsZW1lbnQgd2l0aCBjb250YWN0IGluZm9ybWF0aW9uLlxuICovXG5mdW5jdGlvbiByZW5kZXJDb250YWN0SXRlbShpdGVtRGF0YSkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlTGlzdEl0ZW0oXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjcy1pdGVtJyxcbiAgICAgICAgaXRlbURhdGEsXG4gICAgICAgIHJlbmRlckxpc3RJdGVtQ29udGVudFxuICAgICk7XG4gICAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNvbnRlbnQgZm9yIGEgY29udGFjdCBsaXN0IGl0ZW0uXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBjb250YWN0IGl0ZW0uXG4gKiBAcmV0dXJucyB7RG9jdW1lbnRGcmFnbWVudH0gLSBUaGUgZnJhZ21lbnQgY29udGFpbmluZyBjb250YWN0IGl0ZW0gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyTGlzdEl0ZW1Db250ZW50KGl0ZW1EYXRhKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgcGljdHVyZSA9IGNyZWF0ZVBpY3R1cmUoJ2NsYXNzJywgJ2NzLXBpY3R1cmUnLCBpdGVtRGF0YS5waWN0dXJlKTtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gY3JlYXRlRGl2KCdjbGFzcycsICdjcy1mbGV4LWdyb3VwJyk7XG5cbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVTcGFuKCdjbGFzcycsICdjcy1oZWFkZXInLCBpdGVtRGF0YS5pbmZvLmhlYWRlcilcbiAgICApO1xuICAgIGFwcGVuZENvbnRhY3RJbmZvKGluZm9Db250YWluZXIsIGl0ZW1EYXRhLmluZm8pO1xuXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocGljdHVyZSk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8qKlxuICogQXBwZW5kcyBzcGVjaWZpYyBjb250YWN0IGRldGFpbHMgdG8gYSBjb250YWluZXIgYmFzZWQgb24gdGhlIGl0ZW0gdHlwZSAocGhvbmUsIGVtYWlsLCBldGMuKS5cbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGNvbnRhaW5lciAtIFRoZSBjb250YWluZXIgdG8gd2hpY2ggYWRkaXRpb25hbCBpbmZvIHdpbGwgYmUgYXBwZW5kZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gaW5mbyAtIFRoZSBzcGVjaWZpYyBjb250YWN0IGluZm9ybWF0aW9uIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGFwcGVuZENvbnRhY3RJbmZvKGNvbnRhaW5lciwgaW5mbykge1xuICAgIC8vIExvZ2ljIHRvIGFwcGVuZCB2YXJpb3VzIHR5cGVzIG9mIGNvbnRhY3QgaW5mb3JtYXRpb24uXG4gICAgaWYgKGluZm8ucGhvbmVOck9uZSkge1xuICAgICAgICBjb25zdCBwaG9uZUxpbmtPbmUgPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgaW5mby5ocmVmLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8ucGhvbmVOck9uZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwaG9uZUxpbmtUd28gPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgaW5mby5ocmVmLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8ucGhvbmVOclR3b1xuICAgICAgICApO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVMaW5rT25lKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTGlua1R3byk7XG4gICAgfSBlbHNlIGlmIChpbmZvLmVtYWlsKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsTGluayA9IGNyZWF0ZUxpbmsoXG4gICAgICAgICAgICAnaHJlZicsXG4gICAgICAgICAgICBgbWFpbHRvOiR7aW5mby5lbWFpbH1gLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8uZW1haWxcbiAgICAgICAgKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsTGluayk7XG4gICAgfSBlbHNlIGlmIChpbmZvLmFkZHJlc3MpIHtcbiAgICAgICAgY29uc3QgYWRkcmVzc0xpbmsgPSBjcmVhdGVMaW5rKFxuICAgICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICAgaW5mby5ocmVmLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICdjcy1saW5rJyxcbiAgICAgICAgICAgIGluZm8uYWRkcmVzc1xuICAgICAgICApO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0xpbmspO1xuICAgIH0gZWxzZSBpZiAoaW5mby5kYXlzKSB7XG4gICAgICAgIGNvbnN0IGRheXNTcGFuID0gY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtaG91cnMnLCBpbmZvLmRheXMpO1xuICAgICAgICBjb25zdCBob3Vyc1NwYW4gPSBjcmVhdGVTcGFuKCdjbGFzcycsICdjcy1ob3VycycsIGluZm8uaG91cnMpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5c1NwYW4pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNTcGFuKTtcbiAgICB9XG59XG4iLCIvLyBJbXBvcnRpbmcgaG9tZSBjb250ZW50cyBkYXRhIGZyb20gaG9tZUNvbnRlbnRzIG1vZHVsZVxuaW1wb3J0IHsgaG9tZUNvbnRlbnRzIH0gZnJvbSAnLi4vcGFnZURhdGEvaG9tZUNvbnRlbnRzLmpzJztcblxuLy8gSW1wb3J0aW5nIHV0aWxpdHkgZnVuY3Rpb25zIGZyb20gdGhlICdlbGVtZW50UmVuZGVyJyBtb2R1bGUuIFRoZXNlIGZ1bmN0aW9ucyBhcmUgdXNlZFxuLy8gZm9yIGNyZWF0aW5nIHZhcmlvdXMgSFRNTCBlbGVtZW50cyBkeW5hbWljYWxseVxuaW1wb3J0IHtcbiAgICBjcmVhdGVTZWN0aW9uLFxuICAgIGNyZWF0ZURpdixcbiAgICBjcmVhdGVQaWN0dXJlLFxuICAgIGNyZWF0ZUxpc3QsXG4gICAgY3JlYXRlTGlzdEl0ZW0sXG4gICAgY3JlYXRlU3BhbixcbiAgICBjcmVhdGVUb3BwZXIsXG4gICAgY3JlYXRlVGl0bGUsXG4gICAgY3JlYXRlUGFyYWdyYXBoLFxuICAgIGNsZWFyUGFnZSxcbn0gZnJvbSAnLi4vdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzJztcblxuLy8gRXh0cmFjdGluZyB0aGUgZmlyc3QgaXRlbSBmcm9tIGhvbWUgY29udGVudHMgdG8gdXNlIGFzIGhvbWUgcGFnZSBjb250ZW50XG5jb25zdCBIT01FX1BBR0VfQ09OVEVOVFMgPSBob21lQ29udGVudHNbMF07XG5cbi8vIE9iamVjdCBtYXBwaW5nIGNvbW1vbiBhdHRyaWJ1dGUgbmFtZXMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBzdHJpbmcgcmVwcmVzZW50YXRpb25zXG5jb25zdCBhdHRyaWJ1dGVOYW1lID0geyBpZDogJ2lkJywgY2xhc3M6ICdjbGFzcycgfTtcblxuLyoqXG4gKiBMb2FkcyBhbmQgZGlzcGxheXMgdGhlIGhvbWUgcGFnZSBjb250ZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlTG9hZGVyKGNvbnRlbnQpIHtcbiAgICBjbGVhclBhZ2UoY29udGVudCk7XG5cbiAgICAvLyBTZWxlY3QgdGhlIG1haW4gY29udGVudCBhcmVhIGluIHRoZSBET01cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgbWFpbiBzZWN0aW9uIGFuZCBjb250ZW50IGRpdlxuICAgIGNvbnN0IHNlY3Rpb24gPSBjcmVhdGVTZWN0aW9uKGF0dHJpYnV0ZU5hbWUuaWQsICdob21lLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBjcmVhdGVEaXYoYXR0cmlidXRlTmFtZS5jbGFzcywgJ2hvbWUtY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgbGVmdCBhbmQgcmlnaHQgY29udGVudCBzZWN0aW9uc1xuICAgIGNvbnN0IGNvbnRlbnRMZWZ0ID0gcmVuZGVyQ29udGVudExlZnQoKTtcbiAgICBjb25zdCBjb250ZW50UmlnaHQgPSByZW5kZXJDb250ZW50UmlnaHQoKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TGVmdCk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFJpZ2h0KTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBsZWZ0IHNlY3Rpb24gb2YgdGhlIGhvbWUgcGFnZSBjb250ZW50IGluY2x1ZGluZyBpbWFnZSBhbmQgc3RhdHNcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGVudExlZnQoKSB7XG4gICAgY29uc3QgY29udGVudExlZnQgPSBjcmVhdGVEaXYoYXR0cmlidXRlTmFtZS5jbGFzcywgJ2hvbWUtY29udGVudC1sZWZ0Jyk7XG4gICAgY29uc3QgbGVmdEltYWdlID0gY3JlYXRlUGljdHVyZShcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXBpY3R1cmUgY3MtcGljdHVyZS1sZWZ0JyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLmltYWdlTGVmdFxuICAgICk7XG4gICAgY29uc3Qgc3RhdHNMaXN0ID0gY3JlYXRlTGlzdChcbiAgICAgICAgYXR0cmlidXRlTmFtZS5jbGFzcyxcbiAgICAgICAgJ2NzLXN0YXRzJyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLnN0YXRzLFxuICAgICAgICAoaXRlbURhdGEpID0+XG4gICAgICAgICAgICBjcmVhdGVMaXN0SXRlbShcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAgICAgICAgICdjcy1zdGF0JyxcbiAgICAgICAgICAgICAgICBpdGVtRGF0YSxcbiAgICAgICAgICAgICAgICByZW5kZXJMaXN0SXRlbUNvbnRlbnRcbiAgICAgICAgICAgIClcbiAgICApO1xuXG4gICAgY29udGVudExlZnQuYXBwZW5kQ2hpbGQobGVmdEltYWdlKTtcbiAgICBjb250ZW50TGVmdC5hcHBlbmRDaGlsZChzdGF0c0xpc3QpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRMZWZ0O1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIGNvbnRlbnQgb2YgYSBzdGF0aXN0aWNzIGl0ZW0gZm9yIGRpc3BsYXkgaW4gYSBsaXN0IGl0ZW1cbiAqIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhbmQgcmV0dXJucyBhIGRvY3VtZW50IGZyYWdtZW50IGNvbnRhaW5pbmcgdGhlIHN0YXQncyBudW1iZXIgYW5kIGRlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBUaGUgc3RhdGlzdGljcyBkYXRhIGl0ZW0sIGV4cGVjdGVkIHRvIGhhdmUgJ251bScgYW5kICd0ZXh0JyBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7RG9jdW1lbnRGcmFnbWVudH0gLSBUaGUgZG9jdW1lbnQgZnJhZ21lbnQgY29udGFpbmluZyB0aGUgcmVuZGVyZWQgY29udGVudFxuICovXG5mdW5jdGlvbiByZW5kZXJMaXN0SXRlbUNvbnRlbnQoaXRlbURhdGEpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGNvbnN0IG51bWJlclNwYW4gPSBjcmVhdGVTcGFuKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3MtbnVtYmVyJyxcbiAgICAgICAgaXRlbURhdGEubnVtXG4gICAgKTtcbiAgICBjb25zdCB0ZXh0U3BhbiA9IGNyZWF0ZVNwYW4oYXR0cmlidXRlTmFtZS5jbGFzcywgJ2NzLWRlc2MnLCBpdGVtRGF0YS50ZXh0KTtcblxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG51bWJlclNwYW4pO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRleHRTcGFuKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSByaWdodCBzZWN0aW9uIG9mIHRoZSBob21lIHBhZ2UgY29udGVudCBpbmNsdWRpbmcgdG9wcGVyLCB0aXRsZSwgcGFyYWdyYXBoLCBhbmQgaW1hZ2VcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gLSBUaGUgY3JlYXRlZCByaWdodCBjb250ZW50IHNlY3Rpb25cbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGVudFJpZ2h0KCkge1xuICAgIGNvbnN0IGNvbnRlbnRSaWdodCA9IGNyZWF0ZURpdihhdHRyaWJ1dGVOYW1lLmNsYXNzLCAnaG9tZS1jb250ZW50LXJpZ2h0Jyk7XG4gICAgY29uc3QgdG9wcGVyID0gY3JlYXRlVG9wcGVyKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3MtdG9wcGVyJyxcbiAgICAgICAgSE9NRV9QQUdFX0NPTlRFTlRTLmNvbnRlbnQudG9wcGVyXG4gICAgKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3MtdGl0bGUnLFxuICAgICAgICBIT01FX1BBR0VfQ09OVEVOVFMuY29udGVudC50aXRsZVxuICAgICk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgICBhdHRyaWJ1dGVOYW1lLmNsYXNzLFxuICAgICAgICAnY3MtdGV4dCcsXG4gICAgICAgIEhPTUVfUEFHRV9DT05URU5UUy5jb250ZW50LnBhcmFncmFwaFxuICAgICk7XG4gICAgY29uc3QgcmlnaHRJbWFnZSA9IGNyZWF0ZVBpY3R1cmUoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWUuY2xhc3MsXG4gICAgICAgICdjcy1waWN0dXJlIGNzLXBpY3R1cmUtcmlnaHQnLFxuICAgICAgICBIT01FX1BBR0VfQ09OVEVOVFMuaW1hZ2VSaWdodFxuICAgICk7XG5cbiAgICBjb250ZW50UmlnaHQuYXBwZW5kQ2hpbGQodG9wcGVyKTtcbiAgICBjb250ZW50UmlnaHQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgIGNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZChyaWdodEltYWdlKTtcblxuICAgIHJldHVybiBjb250ZW50UmlnaHQ7XG59XG4iLCIvLyBJbXBvcnRpbmcgbWVudSBjb250ZW50cyBkYXRhIGZvcm0gbWVudUNvbnRlbnRzIG1vZHVsZVxuaW1wb3J0IHsgbWVudUNvbnRlbnRzIH0gZnJvbSAnLi4vcGFnZURhdGEvbWVudUNvbnRlbnQuanMnO1xuXG4vLyBJbXBvcnRpbmcgdXRpbGl0eSBmdW5jdGlvbnMgZnJvbSB0aGUgJ2VsZW1lbnRSZW5kZXJlcicgbW9kdWxlLiBUaGVzZSBmdW5jdGlvbnMgYXJlIHVzZWRcbi8vIGZvciBjcmVhdGluZyB2YXJpb3VzIEhUTUwgZWxlbWVudHMgZHluYW1pY2FsbHlcbmltcG9ydCB7XG4gICAgY3JlYXRlU2VjdGlvbixcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlUGljdHVyZSxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGNyZWF0ZUxpc3RJdGVtLFxuICAgIGNyZWF0ZVNwYW4sXG4gICAgY3JlYXRlVGl0bGUsXG4gICAgY3JlYXRlUGFyYWdyYXBoLFxuICAgIGNsZWFyUGFnZSxcbn0gZnJvbSAnLi4vdXRpbGl0eS9lbGVtZW50UmVuZGVyLmpzJztcblxuLy8gRXh0cmFjdGluZyB0aGUgZmlyc3QgaXRlbSBmcm9tIG1lbnUgY29udGVudHMgdG8gdXNlIGFzIG1lbnUgcGFnZSBjb250ZW50XG5jb25zdCBNRU5VX1BBR0VfQ09OVEVOVFMgPSBtZW51Q29udGVudHNbMF07XG5cbi8qKlxuICogTWFpbiBmdW5jdGlvbiB0byBsb2FkIGFuZCBkaXNwbGF5IHRoZSBtZW51IHBhZ2UgY29udGVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZUxvYWRlcihjb250ZW50KSB7XG4gICAgY2xlYXJQYWdlKGNvbnRlbnQpO1xuXG4gICAgLy8gU2VsZWN0IHRoZSBtYWluIGNvbnRlbnQgYXJlYSBvZiB0aGUgRE9NXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgLy8gQ3JlYXRlIGEgc2VjdGlvbiBmb3IgdGhlIG1lbnUgYW5kIGFwcGVuZCBpdCB0byB0aGUgbWFpbiBjb250ZW50XG4gICAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oJ2lkJywgJ21lbnUtMTAwNScpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgLy8gUmVuZGVyIHRoZSBjb250YWluZXIgdGhhdCBob2xkcyB0aGUgbWVudSdzIGNvbnRlbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2VjdGlvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHJlbmRlckNvbnRhaW5lcigpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBwcmltYXJ5IGNvbnRhaW5lciBmb3IgdGhlIG1lbnUgcGFnZVxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjb250YWluZXIgZGl2IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZURpdignY2xhc3MnLCAnY3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlckNvbnRlbnQoKTtcbiAgICBjb25zdCBjYXJkR3JvdXBDb250ZW50ID0gcmVuZGVyQ2FyZEdyb3VwKCk7XG4gICAgY29uc3QgcmVzZXJ2ZUJ1dHRvbiA9IGNyZWF0ZVJlc2VydmVCdXR0b24oKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEdyb3VwQ29udGVudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjb250ZW50IHNlY3Rpb24gd2l0aCB0aXRsZSBhbmQgcGFyYWdyYXBoXG4gKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9IC0gVGhlIGNvbnRlbnQgc2VjdGlvbiBkaXYgZWxlbWVudFxuICovXG5mdW5jdGlvbiByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWNvbnRlbnQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGl0bGUnLFxuICAgICAgICBNRU5VX1BBR0VfQ09OVEVOVFMuY29udGVudC50aXRsZVxuICAgICk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtdGV4dCcsXG4gICAgICAgIE1FTlVfUEFHRV9DT05URU5UUy5jb250ZW50LnBhcmFncmFwaFxuICAgICk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogUmVuZGVycyBhIGdyb3VwIG9mIGNhcmRzIHJlcHJlc2VudGluZyBtZW51IGl0ZW1zXG4gKiBAcmV0dXJucyB7SFRNTFVMaXN0RWxlbWVudH0gLSBUaGUgY2FyZCBncm91cCBsaXN0IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ2FyZEdyb3VwKCkge1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtY2FyZC1ncm91cCcsXG4gICAgICAgIE1FTlVfUEFHRV9DT05URU5UUy5jYXJkR3JvdXAsXG4gICAgICAgIChpdGVtRGF0YSkgPT5cbiAgICAgICAgICAgIGNyZWF0ZUxpc3RJdGVtKCdjbGFzcycsICdjcy1pdGVtJywgaXRlbURhdGEsIHJlbmRlckxpc3RJdGVtQ29udGVudClcbiAgICApO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY29udGVudCBmb3IgYW4gaW5kaXZpZHVhbCBsaXN0IGl0ZW0gaW4gdGhlIGNhcmQgZ3JvdXBcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtRGF0YSAtIERhdGEgZm9yIGEgc2luZ2xlIG1lbnUgaXRlbVxuICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9IC0gVGhlIGZyYWdtZW50IGNvbnRhaW5pbmcgdGhlIGxpc3QgaXRlbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3RJdGVtQ29udGVudChpdGVtRGF0YSkge1xuICAgIC8vIENyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGl0ZW0gY29udGVudFxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHBpY3R1cmUgPSBjcmVhdGVQaWN0dXJlKCdjbGFzcycsICdjcy1waWN0dXJlJywgaXRlbURhdGEucGljdHVyZSk7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IHJlbmRlckluZm9Db250YWluZXIoaXRlbURhdGEpO1xuXG4gICAgcGljdHVyZS5zZXRBdHRyaWJ1dGUoJ2FyZWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChwaWN0dXJlKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBpbmZvcm1hdGlvbiBjb250YWluZXIgZm9yIGEgbWVudSBpdGVtXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBtZW51IGl0ZW1cbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gLSBUaGUgaW5mbyBjb250YWluZXIgZGl2IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVySW5mb0NvbnRhaW5lcihpdGVtRGF0YSkge1xuICAgIGNvbnN0IGluZm8gPSBjcmVhdGVEaXYoJ2NsYXNzJywgJ2NzLWluZm8nKTtcbiAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gcmVuZGVySGVhZGluZ0NvbnRhaW5lcihpdGVtRGF0YSk7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gY3JlYXRlUGFyYWdyYXBoKFxuICAgICAgICAnY2xhc3MnLFxuICAgICAgICAnY3MtaXRlbS1wJyxcbiAgICAgICAgaXRlbURhdGEuaW5mby5pdGVtUGFyYWdyYXBoXG4gICAgKTtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnRhaW5lcik7XG4gICAgaW5mby5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgaGVhZGluZyBjb250YWluZXIgZm9yIGEgbWVudSBpdGVtXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbURhdGEgLSBEYXRhIGZvciBhIHNpbmdsZSBtZW51IGl0ZW1cbiAqIEByZXR1cm5zIHtIVE1MSGVhZGluZ0VsZW1lbnR9IC0gVGhlIGhlYWRpbmcgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcmVuZGVySGVhZGluZ0NvbnRhaW5lcihpdGVtRGF0YSkge1xuICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHRleHRTcGFuID0gY3JlYXRlU3BhbignY2xhc3MnLCAnY3MtbmFtZScsIGl0ZW1EYXRhLmluZm8ubmFtZSk7XG4gICAgY29uc3QgbnVtYmVyU3BhbiA9IGNyZWF0ZVNwYW4oJ2NsYXNzJywgJ2NzLXByaWNlJywgaXRlbURhdGEuaW5mby5wcmljZSk7XG5cbiAgICBoZWFkaW5nQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY3MtaDMnKTtcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRTcGFuKTtcbiAgICBoZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlclNwYW4pO1xuXG4gICAgcmV0dXJuIGhlYWRpbmdDb250YWluZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJ1dHRvbiBmb3IgcmVzZXJ2aW5nIGEgdGFibGVcbiAqIEByZXR1cm5zIHtIVE1MQW5jaG9yRWxlbWVudH0gLSBUaGUgcmVzZXJ2ZSBidXR0b24gZWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVSZXNlcnZlQnV0dG9uKCkge1xuICAgIGNvbnN0IHJlc2VydmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICByZXNlcnZlQnV0dG9uLmlubmVyVGV4dCA9ICdSZXNlcnZlIFlvdXIgVGFibGUnO1xuICAgIHJlc2VydmVCdXR0b24uc2V0QXR0cmlidXRlKCdocmVmJywgJycpO1xuICAgIHJlc2VydmVCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjcy1idXR0b24tc29saWQnKTtcblxuICAgIHJldHVybiByZXNlcnZlQnV0dG9uO1xufVxuIiwiLy9cbi8vICAgIFRoZSBEYXJrIE1vZGUgU3lzdGVtXG4vL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXJrTW9kZVRvZ2dsZXIoKSB7XG4gICAgLy8gaGVscGVyIGZ1bmN0aW9ucyB0byB0b2dnbGUgZGFyayBtb2RlXG4gICAgZnVuY3Rpb24gZW5hYmxlRGFya01vZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2FibGVEYXJrTW9kZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lcyBhIG5ldyB1c2VycyBkYXJrIG1vZGUgcHJlZmVyZW5jZXNcbiAgICBmdW5jdGlvbiBkZXRlY3RDb2xvclNjaGVtZSgpIHtcbiAgICAgICAgLy8gZGVmYXVsdCB0byB0aGUgbGlnaHQgdGhlbWVcbiAgICAgICAgbGV0IHRoZW1lID0gJ2xpZ2h0JztcblxuICAgICAgICAvLyBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGEgc2F2ZWQgJ3RoZW1lJyB2YXJpYWJsZS4gaWYgaXQncyB0aGVyZSwgdGhlIHVzZXIgaGFzIHZpc2l0ZWQgYmVmb3JlLCBzbyBhcHBseSB0aGUgbmVjZXNzYXJ5IHRoZW1lIGNob2ljZXNcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB7XG4gICAgICAgICAgICB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IHRoZXJlLCBjaGVjayB0byBzZWUgaWYgdGhlIHVzZXIgaGFzIGFwcGxpZWQgZGFyayBtb2RlIHByZWZlcmVuY2VzIHRoZW1zZWx2ZXMgaW4gdGhlIGJyb3dzZXJcbiAgICAgICAgZWxzZSBpZiAoXG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhlbWUgPSAnZGFyayc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBwcmVmZXJlbmNlIHNldCwgdGhlIGRlZmF1bHQgb2YgbGlnaHQgd2lsbCBiZSB1c2VkLiBhcHBseSBhY2NvcmRpbmdseVxuICAgICAgICB0aGVtZSA9PT0gJ2RhcmsnID8gZW5hYmxlRGFya01vZGUoKSA6IGRpc2FibGVEYXJrTW9kZSgpO1xuICAgIH1cblxuICAgIC8vIHJ1biBvbiBwYWdlIGxvYWRcbiAgICBkZXRlY3RDb2xvclNjaGVtZSgpO1xuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkYXJrIG1vZGUgYnV0dG9uIHRvZ2dsZVxuICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlLXRvZ2dsZScpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIG9uIGNsaWNrLCBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHRoZSBkYXJrIG1vZGUgdmFsdWUsIHVzZSB0byBhcHBseSB0aGUgb3Bwb3NpdGUgb2Ygd2hhdCdzIHNhdmVkXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2xpZ2h0J1xuICAgICAgICAgICAgICAgID8gZW5hYmxlRGFya01vZGUoKVxuICAgICAgICAgICAgICAgIDogZGlzYWJsZURhcmtNb2RlKCk7XG4gICAgICAgIH0pO1xufVxuIiwiLyoqXG4gKiBDcmVhdGVzIGEgc2VjdGlvbiBIVE1MIGVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgYXR0cmlidXRlIGFuZCB2YWx1ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgc2VjdGlvbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRpdiBIVE1MIGVsZW1lbnQgd2l0aCBhIHNwZWNpZmllZCBhdHRyaWJ1dGUgbmFtZSBhbmQgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSAtIFRoZSBjcmVhdGVkIGRpdiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXYoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwaWN0dXJlIGVsZW1lbnQgd2l0aCBwcm92aWRlZCBhdHRyaWJ1dGVzIGFuZCBzb3VyY2VzXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlICAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge29iamVjdH0gaW1hZ2VTb3VyY2VzIC0gT2JqZWN0IGNvbnRhaW5pbmcgcGljdHVyZSBzb3VyY2VzIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzXG4gKiBAcmV0dXJucyB7SFRNTFBpY3R1cmVFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHBpY3R1cmUgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGljdHVyZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgaW1hZ2VTb3VyY2VzKSB7XG4gICAgY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcbiAgICBwaWN0dXJlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICBPYmplY3Qua2V5cyhpbWFnZVNvdXJjZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnaW1nJykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGltZywgaW1hZ2VTb3VyY2VzW2tleV0pO1xuICAgICAgICAgICAgcGljdHVyZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHNvdXJjZSwgaW1hZ2VTb3VyY2VzW2tleV0pO1xuICAgICAgICAgICAgcGljdHVyZS5hcHBlbmRDaGlsZChzb3VyY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGljdHVyZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGlzdCAodWwpIGVsZW1lbnQgd2l0aCBwcm92aWRlZCBhdHRyaWJ1dGVzLiBUaGUgbGlzdCBpdGVtcyBhcmUgY3JlYXRlZCB1c2luZyBhIHJlbmRlcmluZyBleHBvcnQgZnVuY3Rpb24gcGFzc2VkIGFzIGFuIGFyZ3VtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZSAtIE5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NsYXNzJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFZhbHVlIGZvciB0aGUgYXR0cmlidXRlIChlLmcuLCAnY3Mtc3RhdHMnKVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1EYXRhIC0gRGF0YSB0byBwb3B1bGF0ZSB0aGUgbGlzdCB3aXRoLiBFeHBlY3RzIGFuIG9iamVjdCB3aGVyZSBlYWNoIHByb3BlcnR5IGNhbiBiZSByZW5kZXJlZCBhcyBhIGxpc3QgaXRlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVySXRlbSAtIGV4cG9ydCBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGl0ZW0gb2YgZGF0YSBhbmQgcmV0dXJucyBhIGxpc3QgaXRlbSAobGkpIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtIVE1MVUxpc3RFbGVtZW50fSAtIFRoZSBjcmVhdGVkIHVub3JkZXJlZCBsaXN0IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoXG4gICAgYXR0cmlidXRlTmFtZSxcbiAgICBhdHRyaWJ1dGVWYWx1ZSxcbiAgICBpdGVtRGF0YSxcbiAgICByZW5kZXJJdGVtXG4pIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gaXRlbURhdGEpIHtcbiAgICAgICAgaWYgKGl0ZW1EYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQocmVuZGVySXRlbShpdGVtRGF0YVtrZXldKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGlzdCBpdGVtIChsaSkgZWxlbWVudCB1c2luZyBhIHByb3ZpZGVkIHJlbmRlcmluZyBleHBvcnQgZnVuY3Rpb24gZm9yIHRoZSBpdGVtJ3MgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZU5hbWUgLSBOYW1lIG9mIHRoZSBhdHRyaWJ1dGUgKGUuZy4sICdjbGFzcycpXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZSAoZS5nLiwgJ2NzLXN0YXQnKVxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gLSBEYXRhIGl0ZW0gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBsaXN0IGl0ZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlckNvbnRlbnQgLSBleHBvcnQgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgaXRlbSBhbmQgcmV0dXJucyB0aGUgY29udGVudCB0byBiZSBwbGFjZWQgaW5zaWRlIHRoZSBsaXN0IGl0ZW1cbiAqIEByZXR1cm5zIHtIVE1MTElFbGVtZW50fSAtIFRoZSBjcmVhdGVkIGxpc3QgaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0oXG4gICAgYXR0cmlidXRlTmFtZSxcbiAgICBhdHRyaWJ1dGVWYWx1ZSxcbiAgICBpdGVtLFxuICAgIHJlbmRlckNvbnRlbnRcbikge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHJlbmRlckNvbnRlbnQoaXRlbSk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNwYW4gZWxlbWVudCB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlVmFsdWUgLSBWYWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGNvbnRlbnQgZm9yIHRoZSBzcGFuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgc3BhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcGFuKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCB0ZXh0KSB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgc3Bhbi5pbm5lclRleHQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHNwYW47XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRvcHBlciBlbGVtZW50IChzcGFuKSB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250ZW50IGZvciB0aGUgdG9wcGVyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgdG9wcGVyIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvcHBlcihhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgdGV4dCkge1xuICAgIGNvbnN0IHRvcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b3BwZXIuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB0b3BwZXIuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHJldHVybiB0b3BwZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRpdGxlIGVsZW1lbnQgKGgyKSB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250ZW50IGZvciB0aGUgdGl0bGVcbiAqIEByZXR1cm5zIHtIVE1MSGVhZGluZ0VsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgdGl0bGUgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIHRleHQpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcmFncmFwaCBlbGVtZW50IChwKSB3aXRoIGEgc3BlY2lmaWVkIGNsYXNzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gTmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuLCAnY2xhc3MnKVxuICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBjb250ZW50IGZvciB0aGUgcGFyYWdyYXBoXG4gKiBAcmV0dXJucyB7SFRNTFBhcmFncmFwaEVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgcGFyYWdyYXBoIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcmFncmFwaChhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgdGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGguc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuLyoqXG4gKiBTZXRzIG11bHRpcGxlIGF0dHJpYnV0ZXMgb24gYSBET00gZWxlbWVudCBiYXNlZCBvbiBhIHByb3ZpZGVkIG9iamVjdFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudCB0byBzZXQgYXR0cmlidXRlcyBvblxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgLSBPYmplY3QgY29udGFpbmluZyBrZXktdmFsdWUgcGFpcnMgZm9yIGF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBjb250ZW50IG9mIGEgc3BlY2lmaWVkIHBhcmVudCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgLSBUaGUgcGFyZW50IGVsZW1lbnQgd2hvc2UgY29udGVudCBpcyB0byBiZSBjbGVhcmVkXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgdG8gaW5kaWNhdGUgdGhlIG9wZXJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQYWdlKHBhcmVudCkge1xuICAgIHBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgYWN0aXZlIHN0YXRlIGJldHdlZW4gdHdvIGJ1dHRvbiBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IG9sZFRhYiAtIFRoZSBJRCBvZiB0aGUgcHJldmlvdXNseSBhY3RpdmUgdGFiL2J1dHRvblxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1RhYiAtIFRoZSBJRCBvZiB0aGUgdGFiL2J1dHRvbiB0byBiZSBhY3RpdmF0ZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gUmV0dXJucyB0aGUgSUQgb2YgdGhlIG5ld2x5IGFjdGl2YXRlZCB0YWIvYnV0dG9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VCdXR0b25Db3ZlcihvbGRUYWIsIG5ld1RhYikge1xuICAgIGxldCBzaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b2xkVGFifWApO1xuICAgIGxldCBoaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmV3VGFifWApO1xuXG4gICAgc2hvdy5jbGFzc0xpc3QucmVtb3ZlKCdjcy1hY3RpdmUnKTtcbiAgICBoaWRlLmNsYXNzTGlzdC5hZGQoJ2NzLWFjdGl2ZScpO1xuXG4gICAgcmV0dXJuIG5ld1RhYjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGluayAoYW5jaG9yKSBlbGVtZW50IHdpdGggc3BlY2lmaWVkIGF0dHJpYnV0ZXMgYW5kIHRleHQgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lIC0gVGhlIGF0dHJpYnV0ZSBuYW1lIHRvIHNldCBvbiB0aGUgbGluayAoZS5nLiwgJ2hyZWYnKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVWYWx1ZSAtIFRoZSB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgYXR0cmlidXRlIGZvciB0aGUgbGluay5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgY29udGVudCBmb3IgdGhlIGxpbmsuXG4gKiBAcmV0dXJucyB7SFRNTEFuY2hvckVsZW1lbnR9IC0gVGhlIGNyZWF0ZWQgYW5jaG9yIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaW5rKGhyZWYsIGhyZWZWYWx1ZSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIHRleHQpIHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKGhyZWYsIGhyZWZWYWx1ZSk7XG4gICAgbGluay5pbm5lclRleHQgPSB0ZXh0O1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpXG4gICAgcmV0dXJuIGxpbms7XG59IiwiLy8gU2VsZWN0IERPTSBlbGVtZW50cyBmb3IgbW9iaWxlIG5hdmlnYXRpb25cbnZhciBDU2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBDU25hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtbmF2aWdhdGlvbicpO1xuY29uc3QgQ1NoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZScpO1xuXG4vKipcbiAqIFNldHMgdXAgZXZlbnQgbGlzdGVuZXJzIGZvciBtb2JpbGUgbmF2aWdhdGlvbiB0b2dnbGluZ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2JpbGVOYXZpZ2F0aW9uVG9nZ2xpbmcoKSB7XG4gICAgQ1NoYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBDU2hhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY3MtYWN0aXZlJyk7XG4gICAgICAgIENTbmF2YmFyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgQ1Nib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2NzLW9wZW4nKTtcbiAgICAgICAgLy8gcnVuIHRoZSBmdW5jdGlvbiB0byBjaGVjayB0aGUgYXJpYS1leHBhbmRlZCB2YWx1ZVxuICAgICAgICBhcmlhRXhwYW5kZWQoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhbmQgdG9nZ2xlcyB0aGUgJ2FyaWEtZXhwYW5kZWQnIGF0dHJpYnV0ZSBvbiB0aGUgbmF2aWdhdGlvbiBsaXN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gYXJpYUV4cGFuZGVkKCkge1xuICAgICAgICBjb25zdCBjc1VMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLWV4cGFuZGVkJyk7XG4gICAgICAgIGNvbnN0IGNzRXhwYW5kZWQgPSBjc1VMLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgJ2FyaWEtZXhwYW5kZWQnIGF0dHJpYnV0ZSBiYXNlZCBvbiBpdHMgY3VycmVudCBzdGF0ZS5cbiAgICAgICAgaWYgKGNzRXhwYW5kZWQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIGNzVUwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzVUwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIGZvciBkcm9wZG93biBpdGVtcyBpbiB0aGUgbW9iaWxlIG5hdmlnYXRpb25cbiAgICBjb25zdCBkcm9wRG93bnMgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3MtbmF2aWdhdGlvbiAuY3MtZHJvcGRvd24nKVxuICAgICk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRyb3BEb3ducykge1xuICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==