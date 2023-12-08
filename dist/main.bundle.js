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
}`, "",{"version":3,"sources":["webpack://./src/styles/dark.css"],"names":[],"mappings":"AAAA;;kCAEkC;AAClC,WAAW;AACX;IACI;QACI,eAAe;QACf,iBAAiB;QACjB,iBAAiB;QACjB,6BAA6B;IACjC;;IAEA;QACI,6BAA6B;IACjC;;IAEA;;;;;;;;;;;;;QAaI,gCAAgC;IACpC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,oFAAoF;QACpF,aAAa;IACjB;AACJ;;AAEA;;oCAEoC;AACpC,WAAW;AACX;IACI;QACI,gCAAgC;QAChC,UAAU;IACd;;IAEA;QACI,iCAAiC;QACjC,UAAU;IACd;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,OAAO;QACP,2BAA2B;QAC3B,cAAc;QACd,WAAW;QACX,YAAY;QACZ,uBAAuB;QACvB,YAAY;QACZ,gBAAgB;QAChB,UAAU;IACd;;IAEA;;QAEI,kBAAkB;QAClB,QAAQ;QACR,SAAS;QACT,gCAAgC;QAChC,gBAAgB;QAChB,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,UAAU;QACV;;qBAEa;QACb,UAAU;IACd;;IAEA;QACI,UAAU;QACV,gCAAgC;QAChC,UAAU;QACV;wBACgB;IACpB;AACJ;;AAEA,YAAY;AACZ;IACI;QACI,kBAAkB;QAClB,SAAS;QACT,WAAW;QACX,eAAe;QACf,qBAAqB;QACrB,mBAAmB;IACvB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gCAAgC;QAChC,UAAU;IACd;AACJ","sourcesContent":["/*-- -------------------------- -->\n<---      Core Dark Styles      -->\n<--- -------------------------- -*/\n/* Mobile */\n@media only screen and (min-width: 0rem) {\n    :root {\n        --dark: #082032;\n        --medium: #2c394b;\n        --accent: #334756;\n        --bodyTextColorWhite: #fafbfc;\n    }\n\n    body.dark-mode {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode p,\n    body.dark-mode li,\n    body.dark-mode h1,\n    body.dark-mode h2,\n    body.dark-mode h3,\n    body.dark-mode h4,\n    body.dark-mode h5,\n    body.dark-mode h6,\n    body.dark-mode .cs-title,\n    body.dark-mode .cs-text,\n    body.dark-mode .cs-li,\n    body.dark-mode .cs-h3,\n    body.dark-mode .cs-item-p {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode .light {\n        display: none;\n    }\n\n    body.dark-mode .dark {\n        display: block !important;\n    }\n\n    .dark {\n        /* class used to hide elements that only need to be seen when dark mode is enabled */\n        display: none;\n    }\n}\n\n/*-- -------------------------- -->\n  <---      Dark Mode Toggle      -->\n  <--- -------------------------- -*/\n/* Mobile */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #dark-mode-toggle .cs-sun {\n        transform: translate(-50%, -50%);\n        opacity: 1;\n    }\n\n    body.dark-mode #dark-mode-toggle .cs-moon {\n        transform: translate(-50%, -150%);\n        opacity: 0;\n    }\n\n    #dark-mode-toggle {\n        display: block;\n        position: absolute;\n        top: 6%;\n        transform: translateY(-50%);\n        right: 3.75rem;\n        width: 3rem;\n        height: 3rem;\n        background: transparent;\n        border: none;\n        overflow: hidden;\n        padding: 0;\n    }\n\n    #dark-mode-toggle img,\n    #dark-mode-toggle svg {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 1.5625rem;\n        height: 1.5625rem;\n        pointer-events: none;\n    }\n\n    #dark-mode-toggle .cs-moon {\n        z-index: 2;\n        transition: transform 0.3s,\n            opacity 0.3s,\n            fill 0.3s;\n        fill: #000;\n    }\n\n    #dark-mode-toggle .cs-sun {\n        z-index: 1;\n        transform: translate(-50%, 100%);\n        opacity: 0;\n        transition: transform 0.3s,\n            opacity 0.3s;\n    }\n}\n\n/* Desktop */\n@media only screen and (min-width: 64rem) {\n    #dark-mode-toggle {\n        position: relative;\n        top: auto;\n        right: auto;\n        transform: none;\n        margin-left: 1.875rem;\n        margin-bottom: 0rem;\n    }\n\n    #dark-mode-toggle:hover {\n        cursor: pointer;\n    }\n\n    #dark-mode-toggle .moon {\n        /* change to whatever you need */\n        fill: #fff;\n    }\n}"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/*-- -------------------------- -->\n  <---     Mobile Navigation      -->\n  <--- -------------------------- -*/\n/* Mobile - 1023px */\n@media only screen and (max-width: 63.9375rem) {\n    body.cs-open {\n        overflow: hidden;\n    }\n\n    #cs-navigation {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 0.75rem 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        position: fixed;\n        z-index: 10000;\n    }\n\n    #cs-navigation:before {\n        content: \"\";\n        width: 100%;\n        height: 0vh;\n        background: rgba(0, 0, 0, 0.6);\n        opacity: 0;\n        display: block;\n        position: absolute;\n        top: 100%;\n        right: 0;\n        z-index: -1100;\n        transition: height 0.5s, opacity 0.5s;\n        -webkit-backdrop-filter: blur(10px);\n        backdrop-filter: blur(10px);\n    }\n\n    #cs-navigation.cs-active:before {\n        height: 150vh;\n        opacity: 1;\n    }\n\n    #cs-navigation.cs-active .cs-ul-wrapper {\n        opacity: 1;\n        transform: scaleY(1);\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation.cs-active .cs-li {\n        opacity: 1;\n        transform: translateY(0);\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n    }\n\n    #cs-navigation .page-title {\n        width: 50%;\n        max-width: 14rem;\n        height: 100%;\n        margin: 0 auto 0 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 10;\n    }\n\n\n    #cs-navigation .cs-toggle {\n        /* 44px - 48px */\n        width: clamp(2.75rem, 6vw, 3rem);\n        height: clamp(2.75rem, 6vw, 3rem);\n        margin: 0 0 0 auto;\n        background-color: transparent;\n        border: none;\n        border-radius: 0.25rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-navigation .cs-active .cs-line1 {\n        top: 50%;\n        transform: translate(-50%, -50%) rotate(225deg);\n    }\n\n    #cs-navigation .cs-active .cs-line2 {\n        top: 50%;\n        transform: translate(-50%, -50%) translateY(0) rotate(-225deg);\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-active .cs-line3 {\n        opacity: 0;\n        bottom: 100%;\n    }\n\n    #cs-navigation .cs-box {\n        /* 24px - 28px */\n        width: clamp(1.5rem, 2vw, 1.75rem);\n        /* 14px - 16px */\n        height: clamp(0.875rem, 1.5vw, 1rem);\n        position: relative;\n    }\n\n    #cs-navigation .cs-line {\n        width: 100%;\n        height: 2px;\n        background-color: #1a1a1a;\n        border-radius: 2px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n\n    #cs-navigation .cs-line1 {\n        top: 0;\n        transition: transform 0.5s, top 0.3s, left 0.3s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n        transform-origin: center;\n    }\n\n    #cs-navigation .cs-line2 {\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        transition: top 0.3s, left 0.3s, transform 0.5s;\n        animation-duration: 0.7s;\n        animation-timing-function: ease;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n    }\n\n    #cs-navigation .cs-line3 {\n        bottom: 0;\n        transition: bottom 0.3s, opacity 0.3s;\n    }\n\n    #cs-navigation .cs-ul-wrapper {\n        width: 100%;\n        height: auto;\n        padding-bottom: 2.4em;\n        background-color: #fff;\n        box-shadow: inset rgba(0, 0, 0, 0.2) 0px 8px 24px;\n        opacity: 0;\n        position: absolute;\n        top: 100%;\n        left: 0;\n        z-index: -1;\n        overflow: hidden;\n        transform: scaleY(0);\n        transition: transform 0.4s, opacity 0.3s;\n        transform-origin: top;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        height: auto;\n        max-height: 65vh;\n        margin: 0;\n        padding: 3rem 0 0 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1.25rem;\n        overflow: scroll;\n    }\n\n    #cs-navigation .cs-li {\n        text-align: center;\n        list-style: none;\n        width: 100%;\n        margin-right: 0;\n        opacity: 0;\n        /* transition from these values */\n        transform: translateY(-4.375rem);\n        transition: transform 0.6s, opacity 0.9s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(1) {\n        transition-delay: 0.05s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(2) {\n        transition-delay: 0.1s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(3) {\n        transition-delay: 0.15s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(4) {\n        transition-delay: 0.2s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(5) {\n        transition-delay: 0.25s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(6) {\n        transition-delay: 0.3s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(7) {\n        transition-delay: 0.35s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(8) {\n        transition-delay: 0.4s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(9) {\n        transition-delay: 0.45s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(10) {\n        transition-delay: 0.5s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(11) {\n        transition-delay: 0.55s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(12) {\n        transition-delay: 0.6s;\n    }\n\n    #cs-navigation .cs-li:nth-of-type(13) {\n        transition-delay: 0.65s;\n    }\n\n    #cs-navigation .cs-li-link {\n        /* 16px - 24px */\n        font-size: clamp(1.2rem, 2.5vw, 1.7rem);\n        line-height: 1.2em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--headerColor);\n        display: inline-block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 100%;\n        height: 1px;\n        background: currentColor;\n        opacity: 1;\n        display: none;\n        position: absolute;\n        bottom: -0.125rem;\n        left: 0;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        display: block;\n    }\n\n}\n\n/* Dark Mode */\n@media only screen and (max-width: 63.9375rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-line {\n        background-color: #fff;\n    }\n\n    body.dark-mode #cs-navigation .cs-ul-wrapper {\n        background-color: var(--medium);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n}\n\n/*-- -------------------------- -->\n  <---     Desktop Navigation     -->\n  <--- -------------------------- -*/\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #cs-navigation {\n        width: 100%;\n        /* prevents padding and border from affecting height and width */\n        box-sizing: border-box;\n        padding: 0 1rem;\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        /* position: fixed;\n        z-index: 10000; */\n    }\n\n    #cs-navigation .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 1.5rem;\n    }\n\n    #cs-navigation .cs-toggle {\n        display: none;\n    }\n\n    #cs-navigation .page-title {\n        width: 30%;\n        max-width: 30rem;\n        height: 7rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 100;\n    }\n\n    #cs-navigation .page-title h1 {\n        font-size: 3em;\n    }\n\n    #cs-navigation .cs-ul {\n        width: 100%;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        /* 20px - 36px */\n        gap: clamp(1.25rem, 2.6vw, 2.25rem);\n    }\n\n    #cs-navigation .cs-li {\n        list-style: none;\n        padding: 2rem 0;\n        /* prevent flexbox from squishing it */\n        flex: none;\n    }\n\n    #cs-navigation .cs-li-link {\n        font-size: clamp(1.2rem, 1vw, 1.2rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        margin: 0;\n        color: var(--bodyTextColor);\n        display: block;\n        position: relative;\n    }\n\n    #cs-navigation .cs-li-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link.cs-active:before {\n        width: 100%;\n    }\n\n    #cs-navigation .cs-li-link:before {\n        /* active state underline */\n        content: \"\";\n        width: 0%;\n        height: 2px;\n        background: var(--primary);\n        opacity: 1;\n        display: block;\n        position: absolute;\n        bottom: 0rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 64rem) {\n    body.dark-mode #cs-navigation {\n        background-color: var(--dark);\n    }\n\n    body.dark-mode #cs-navigation .page-title {\n        /* makes it turn white */\n        filter: grayscale(1) brightness(1000%);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #cs-navigation .cs-li-link:before {\n        background-color: var(--primaryLight);\n    }\n}\n\n/*-- -------------------------- -->\n<---   Side By Side Reverse     -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #home-content {\n        padding: var(--sectionPadding);\n    }\n\n    #home-content .cs-container {\n        width: 100%;\n        /* changes to 1280px at tablet */\n        max-width: 36.5rem;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 6vw, 4rem);\n    }\n\n    #home-content .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: left;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: flex-start;\n    }\n\n    #home-content .cs-text {\n        margin-bottom: 1rem;\n    }\n\n    #home-content .cs-text:last-of-type {\n        margin-bottom: 2rem;\n    }\n\n    #home-content .cs-picture {\n        width: 100%;\n        display: block;\n        position: relative;\n        z-index: 1;\n    }\n\n    #home-content .cs-picture img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    #home-content .cs-picture-right {\n        height: 95vw;\n        max-height: 25rem;\n    }\n\n    #home-content .cs-picture-left {\n        height: 111vw;\n        max-height: 31.25rem;\n    }\n\n    #home-content .cs-stats-group {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* 28px - 40px */\n        gap: clamp(1.75rem, 3vw, 2.5rem);\n    }\n\n    #home-content .cs-stats {\n        width: 100%;\n        max-width: 39.375rem;\n        padding: 0;\n        margin: 0;\n        display: grid;\n        grid-template-columns: repeat(12, 1fr);\n        row-gap: 1.5rem;\n        column-gap: 0.75rem;\n    }\n\n    #home-content .cs-stat {\n        list-style: none;\n        margin: 0;\n        padding: 0 0 1.5rem 0;\n        border-bottom: 1px solid var(--primary);\n        /* making flex so we can align a heading with 1 line to the bottom */\n        display: flex;\n        grid-column: span 4;\n        flex-direction: column;\n        align-self: stretch;\n        align-content: space-between;\n    }\n\n    #home-content .cs-number {\n        /* 31px - 39px */\n        font-size: clamp(1.9375rem, 3vw, 2.4375rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        color: var(--headerColor);\n        display: block;\n        margin: 0 0 0.25rem 0;\n    }\n\n    #home-content .cs-desc {\n        font-size: 1rem;\n        line-height: 1.5em;\n        font-weight: 400;\n        text-align: left;\n        /* auto margin top will push text to bottom if there's only one line */\n        margin: 0;\n        color: var(--bodyTextColor);\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #home-content .cs-container {\n        max-width: 80rem;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: stretch;\n    }\n\n    #home-content .cs-content {\n        /* sends it to the right in the 2nd position */\n        order: 2;\n    }\n\n    #home-content .cs-picture-right {\n        /* 340px - 460px */\n        min-height: clamp(21.25rem, 35vw, 28.75rem);\n        height: 100%;\n        max-height: 100%;\n    }\n\n    #home-content .cs-picture-left {\n        /* 530px - 660px */\n        min-height: clamp(33.125rem, 45vw, 41.25rem);\n        height: 100%;\n        max-height: 100%;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n\n    body.dark-mode #home-content .cs-title,\n    body.dark-mode #home-content .cs-text,\n    body.dark-mode #home-content .cs-number,\n    body.dark-mode #home-content .cs-desc {\n        color: var(--bodyTextColorWhite);\n    }\n\n    body.dark-mode #home-content .cs-text,\n    body.dark-mode #home-content .cs-desc {\n        opacity: .8;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Footer           -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #cs-footer-108 {\n        /* 40px - 100px top and bottom */\n        padding: clamp(1rem, 4.9vw, 2.25rem) 1rem;\n        /* 40px - 50px */\n        padding-bottom: clamp(1.5rem, 6.9vw, 2.125rem);\n    }\n\n    #cs-footer-108 .cs-container {\n        width: 100%;\n        max-width: 80rem;\n        margin: auto;\n    }\n\n    #cs-footer-108 .cs-ul {\n        /* 40px - 60px*/\n        padding: 0 0 clamp(2rem, 4.7vw, .75rem);\n        margin: auto;\n        border-bottom: 1px solid #eff0f6;\n    }\n\n    #cs-footer-108 .cs-li {\n        list-style: none;\n        text-align: center;\n        margin-bottom: 1.25rem;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin-bottom: 0;\n    }\n\n    #cs-footer-108 .cs-link {\n        /* 16px - 20px */\n        font-size: clamp(0.8rem, 0.15s, 1rem);\n        line-height: 1.5em;\n        text-decoration: none;\n        font-weight: 700;\n        color: var(--bodyTextColor);\n        position: relative;\n    }\n\n    #cs-footer-108 .cs-link:hover:before {\n        width: 100%;\n    }\n\n    #cs-footer-108 .cs-link:before {\n        /* top right box */\n        content: \"\";\n        width: 0%;\n        height: 0.1875rem;\n        background: var(--bodyTextColor);\n        opacity: 1;\n        position: absolute;\n        display: block;\n        bottom: -0.125rem;\n        left: 0;\n        transition: width 0.3s;\n    }\n\n    #cs-footer-108 .cs-copyright {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 1.6vw, 1rem);\n        text-align: center;\n        color: #a0a3bd;\n        display: block;\n        /* 20px - 28px */\n        margin: clamp(1.25rem, 2.8vw, 1.75rem) auto 0;\n    }\n}\n\n/* Tablet - 600px */\n@media only screen and (min-width: 37.5rem) {\n    #cs-footer-108 .cs-ul {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #cs-footer-108 .cs-li {\n        /* 44px - 88px */\n        margin: 0 clamp(2.75rem, 6.2vw, 5.5rem) 0 0;\n    }\n\n    #cs-footer-108 .cs-li:last-of-type {\n        margin: 0;\n    }\n}\n\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #cs-footer-108 {\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link {\n        color: #fff;\n    }\n\n    body.dark-mode #cs-footer-108 .cs-link:before {\n        background: #fff;\n    }\n}\n\n/*-- -------------------------- -->\n<---            Menu            -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #menu-1005 {\n        padding: var(--sectionPadding);\n        background-color: transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    #menu-1005:before {\n        /* static tiled pattern */\n        content: \"\";\n        height: 100%;\n        width: 100%;\n        opacity: 0.08;\n        background: url(\"https://csimg.nyc3.cdn.digitaloceanspaces.com/Food-Menu/static-pattern.png\");\n        background-size: auto;\n        background-position: center;\n        background-repeat: repeat;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n    }\n\n    #menu-1005 .cs-container {\n        width: 100%;\n        max-width: 80em;\n        margin: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        /* 48px - 64px */\n        gap: clamp(3rem, 7vw, 4rem);\n    }\n\n    #menu-1005 .cs-content {\n        /* set text align to left if content needs to be left aligned */\n        text-align: center;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        /* centers content horizontally, set to flex-start to left align */\n        align-items: center;\n    }\n\n    #menu-1005 .cs-wrapper {\n        /* 120px - 181px */\n        width: clamp(7.5rem, 9vw, 11.3125rem);\n        margin-bottom: 0.75rem;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n    }\n\n    #menu-1005 .cs-wrapper:before {\n        /* left line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-right: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        right: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper:after {\n        /* right line */\n        content: \"\";\n        /* 90px - 155px */\n        width: clamp(5.625rem, 4vw, 9.6875rem);\n        height: 1px;\n        /* 12px - 24px */\n        margin-left: clamp(0.75rem, 2vw, 1.5rem);\n        background: #b4b2c7;\n        opacity: 1;\n        position: absolute;\n        display: block;\n        top: 50%;\n        left: 100%;\n        transform: translateY(-50%);\n    }\n\n    #menu-1005 .cs-wrapper img {\n        width: 100%;\n    }\n\n\n    #menu-1005 .cs-text {\n        opacity: 0.8;\n    }\n\n    #menu-1005 .cs-button-solid {\n        font-size: 1rem;\n        /* 46px - 56px */\n        line-height: clamp(2.875em, 5.5vw, 3.5em);\n        text-decoration: none;\n        font-weight: 700;\n        text-align: center;\n        margin: auto;\n        color: #fff;\n        min-width: 9.375rem;\n        padding: 0 2rem;\n        background-color: var(--primary);\n        display: inline-block;\n        position: relative;\n        z-index: 1;\n        /* prevents padding from adding to the width */\n        box-sizing: border-box;\n        transition: color 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:before {\n        content: \"\";\n        position: absolute;\n        height: 100%;\n        width: 0%;\n        background: #000;\n        opacity: 1;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        transition: width 0.3s;\n    }\n\n    #menu-1005 .cs-button-solid:hover {\n        color: #fff;\n    }\n\n    #menu-1005 .cs-button-solid:hover:before {\n        width: 100%;\n    }\n\n    #menu-1005 .cs-card-group {\n        margin: 0;\n        padding: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        column-gap: 1.25rem;\n        /* 32px - 60px */\n        row-gap: clamp(2rem, 6vw, 3.75rem);\n    }\n\n    #menu-1005 .cs-item {\n        list-style: none;\n        width: 100%;\n        max-width: 36.25rem;\n        margin: 0;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        /* 16px - 36px */\n        gap: clamp(1rem, 3vw, 2.25rem);\n    }\n\n    #menu-1005 .cs-picture {\n        /* 76px - 160px */\n        width: clamp(4.75rem, 14vw, 10rem);\n        height: clamp(4.75rem, 14vw, 10rem);\n        overflow: hidden;\n        /* 4px - 8px */\n        border: clamp(0.25rem, 1vw, 0.5rem) solid rgba(255, 255, 255, 0.1);\n        display: block;\n        flex: none;\n        position: relative;\n    }\n\n    #menu-1005 .cs-picture img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        /* makes it act like a background image */\n        object-fit: cover;\n    }\n\n    #menu-1005 .cs-h3 {\n        /* 16px - 24px */\n        font-size: clamp(1rem, 2vw, 1.5rem);\n        line-height: 1.2em;\n        font-weight: 700;\n        text-align: left;\n        /* 8px - 16px */\n        margin: 0 0 clamp(0.5rem, 1.5vw, 1rem);\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        position: relative;\n        gap: 0.75rem;\n    }\n\n    #menu-1005 .cs-h3:after {\n        content: \"\";\n        width: 50%;\n        height: 1px;\n        background: #b4b2c7;\n        opacity: 1;\n        position: relative;\n        display: block;\n        order: 1;\n    }\n\n    #menu-1005 .cs-name {\n        max-width: 13.75rem;\n        flex: none;\n    }\n\n    #menu-1005 .cs-price {\n        /* 16px - 25px */\n        font-size: clamp(1rem, 2vw, 1.5625rem);\n        /* 28px - 46px */\n        line-height: clamp(1.75rem, 4vw, 2.875rem);\n        font-weight: 700;\n        /* 8px - 12px */\n        padding: 0 clamp(0.5rem, 1vw, 0.75rem);\n        color: var(--primary);\n        background-color: #fff;\n        border-radius: 5rem;\n        border: 1px solid #b4b2c7;\n        display: flex;\n        align-items: center;\n        order: 3;\n    }\n\n    #menu-1005 .cs-item-p {\n        /* 14px - 16px */\n        font-size: clamp(0.875rem, 2vw, 1rem);\n        line-height: 1.5em;\n        text-align: left;\n        margin: 0;\n        opacity: 0.8;\n    }\n}\n\n/* Tablet - 768px */\n@media only screen and (min-width: 48rem) {\n    #menu-1005 .cs-card-group {\n        flex-direction: row;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n    }\n\n    #menu-1005 .cs-item {\n        width: 48.5%;\n    }\n}\n\n/*-- -------------------------- -->\n<---           Contacts         -->\n<--- -------------------------- -*/\n\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    #contact-strip-324 {\n        padding: var(--sectionPadding);\n        background-color: #f7f7f7;\n        height: 100%;\n        \n    }\n    #contact-strip-324 .cs-stat-group {\n        width: 100%;\n        /* changes to 1280px at desktop */\n        max-width: 37.5rem;\n        margin: auto;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        gap: 2.5rem;\n    }\n    #contact-strip-324 .cs-item {\n        list-style: none;\n        width: 18.125rem;\n        margin: 0;\n        padding: 0;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n    }\n    #contact-strip-324 .cs-item:hover .cs-picture {\n        background-color: #fff;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n        transform: scale(1.05);\n    }\n    #contact-strip-324 .cs-picture {\n        width: 5rem;\n        height: 5rem;\n        /* 12px - 20px */\n        margin-right: clamp(0.75rem, 3vw, 1.25rem);\n        border-radius: 50%;\n        border: 1px solid #bababa;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        /* prevents flexbox from squishing it */\n        flex: none;\n        transition:\n            background-color 0.3s,\n            box-shadow 0.3s,\n            transform 0.6s;\n    }\n    #contact-strip-324 .cs-flex-group {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n        flex-direction: column;\n    }\n    #contact-strip-324 .cs-icon {\n        width: 1.75rem;\n        height: auto;\n    }\n    #contact-strip-324 .cs-header {\n        font-size: 1.25rem;\n        color: var(--headerColor);\n        font-weight: 900;\n        line-height: 1.2em;\n        margin: 0;\n        margin-bottom: 0.75rem;\n        display: block;\n    }\n    #contact-strip-324 .cs-link,\n    #contact-strip-324 .cs-hours {\n        font-size: var(--bodyFontSize);\n        line-height: 1.5em;\n        text-decoration: none;\n        color: #767676;\n        display: block;\n    }\n    #contact-strip-324 .cs-link:hover {\n        text-decoration: underline;\n    }\n}\n/* Tablet - 650px */\n@media only screen and (min-width: 40.625rem) {\n    #contact-strip-324 .cs-stat-group {\n        flex-direction: row;\n        flex-wrap: wrap;\n        column-gap: 1.25rem;\n        row-gap: 2rem;\n    }\n}\n/* Small Desktop - 1024px */\n@media only screen and (min-width: 64rem) {\n    #contact-strip-324 .cs-stat-group {\n        max-width: 80rem;\n        flex-wrap: nowrap;\n        justify-content: space-evenly;\n    }\n}\n/* Dark Mode */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #contact-strip-324 {\n        background-color: transparent;\n    }\n    body.dark-mode #contact-strip-324 .cs-header,\n    body.dark-mode #contact-strip-324 .cs-link,\n    body.dark-mode #contact-strip-324 .cs-hours {\n        color: var(--bodyTextColorWhite);\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_darkMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/darkMode */ "./src/modules/darkMode.js");
/* harmony import */ var _modules_mobileNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mobileNavigation */ "./src/modules/mobileNavigation.js");
/* harmony import */ var _assets_img_homePageLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/homePageLeft.png */ "./src/assets/img/homePageLeft.png");
/* harmony import */ var _assets_img_homePageRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/homePageRight.png */ "./src/assets/img/homePageRight.png");
/* harmony import */ var _assets_img_menu_bisonBurger_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/menu/bisonBurger.png */ "./src/assets/img/menu/bisonBurger.png");
/* harmony import */ var _assets_img_menu_chickenSaladMango_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/menu/chickenSaladMango.png */ "./src/assets/img/menu/chickenSaladMango.png");
/* harmony import */ var _assets_img_menu_lasagna_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/menu/lasagna.png */ "./src/assets/img/menu/lasagna.png");
/* harmony import */ var _assets_img_menu_meatLoversPizza_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/img/menu/meatLoversPizza.png */ "./src/assets/img/menu/meatLoversPizza.png");
/* harmony import */ var _assets_img_menu_pricklyPearPorkSauce_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/img/menu/pricklyPearPorkSauce.png */ "./src/assets/img/menu/pricklyPearPorkSauce.png");
/* harmony import */ var _assets_img_menu_purpleCornTostada_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/img/menu/purpleCornTostada.png */ "./src/assets/img/menu/purpleCornTostada.png");

















(0,_modules_darkMode__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_mobileNavigation__WEBPACK_IMPORTED_MODULE_4__["default"])();

// Set globals
let pageNames = ['home', 'menu', 'contacts'];
let currentTab = pageNames[0];
let mainContent = document.getElementById('#main-content');

// Initial home page load
// loadMain(currentTab, content, reviews, homeTitle, info);

// Set click events for tab navigation
pageNames.forEach((pageName) => {
    const button = document.getElementById(pageName);
    button.addEventListener('click', () => {
        currentTab = changeButtonCover(currentTab, button.id);

        if (button.id == 'home') {
            console.log('home');
            //   loadMain(button.id, content, reviews, homeTitle, info);
        } else if (button.id == 'menu') {
            console.log('menu');

            //   loadMain(button.id, content, menu, menuTitle);
        } else {
            console.log('contacts');

            //   loadMain(button.id, content, contacts, contactTitle);
        }
    });
});

function changeButtonCover(oldTab, newTab) {
    let hide = document.getElementById(`${newTab}`);
    let show = document.getElementById(`${oldTab}`);

    hide.classList.add('cs-active');
    show.classList.remove('cs-active');

    return newTab;
}


/***/ }),

/***/ "./src/modules/darkMode.js":
/*!*********************************!*\
  !*** ./src/modules/darkMode.js ***!
  \*********************************/
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

/***/ "./src/modules/mobileNavigation.js":
/*!*****************************************!*\
  !*** ./src/modules/mobileNavigation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mobileNavigationToggling)
/* harmony export */ });
// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

function mobileNavigationToggling() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVGQUF1RixPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFFBQVEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxRQUFRLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sbU5B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QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZGFyay5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9kYXJrLmNzcz8yMTJjIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzP2YwZDgiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2RhcmtNb2RlLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbW9iaWxlTmF2aWdhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICBDb3JlIERhcmsgU3R5bGVzICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIC0tZGFyazogIzA4MjAzMjtcbiAgICAgICAgLS1tZWRpdW06ICMyYzM5NGI7XG4gICAgICAgIC0tYWNjZW50OiAjMzM0NzU2O1xuICAgICAgICAtLWJvZHlUZXh0Q29sb3JXaGl0ZTogI2ZhZmJmYztcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIHAsXG4gICAgYm9keS5kYXJrLW1vZGUgbGksXG4gICAgYm9keS5kYXJrLW1vZGUgaDEsXG4gICAgYm9keS5kYXJrLW1vZGUgaDIsXG4gICAgYm9keS5kYXJrLW1vZGUgaDMsXG4gICAgYm9keS5kYXJrLW1vZGUgaDQsXG4gICAgYm9keS5kYXJrLW1vZGUgaDUsXG4gICAgYm9keS5kYXJrLW1vZGUgaDYsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRpdGxlLFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10ZXh0LFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1saSxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtaDMsXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWl0ZW0tcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlIC5saWdodCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgLmRhcmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kYXJrIHtcbiAgICAgICAgLyogY2xhc3MgdXNlZCB0byBoaWRlIGVsZW1lbnRzIHRoYXQgb25seSBuZWVkIHRvIGJlIHNlZW4gd2hlbiBkYXJrIG1vZGUgaXMgZW5hYmxlZCAqL1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbiAgPC0tLSAgICAgIERhcmsgTW9kZSBUb2dnbGUgICAgICAtLT5cbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIE1vYmlsZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA2JTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICByaWdodDogMy43NXJlbTtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXG4gICAgI2RhcmstbW9kZS10b2dnbGUgc3ZnIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjU2MjVyZW07XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXG4gICAgICAgICAgICBvcGFjaXR5IDAuM3MsXG4gICAgICAgICAgICBmaWxsIDAuM3M7XG4gICAgICAgIGZpbGw6ICMwMDA7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcbiAgICAgICAgICAgIG9wYWNpdHkgMC4zcztcbiAgICB9XG59XG5cbi8qIERlc2t0b3AgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMS44NzVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLm1vb24ge1xuICAgICAgICAvKiBjaGFuZ2UgdG8gd2hhdGV2ZXIgeW91IG5lZWQgKi9cbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RhcmsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztrQ0FFa0M7QUFDbEMsV0FBVztBQUNYO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7Ozs7Ozs7Ozs7Ozs7UUFhSSxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksb0ZBQW9GO1FBQ3BGLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7b0NBRW9DO0FBQ3BDLFdBQVc7QUFDWDtJQUNJO1FBQ0ksZ0NBQWdDO1FBQ2hDLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBOztRQUVJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVjs7cUJBRWE7UUFDYixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVjt3QkFDZ0I7SUFDcEI7QUFDSjs7QUFFQSxZQUFZO0FBQ1o7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdDQUFnQztRQUNoQyxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICBDb3JlIERhcmsgU3R5bGVzICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1kYXJrOiAjMDgyMDMyO1xcbiAgICAgICAgLS1tZWRpdW06ICMyYzM5NGI7XFxuICAgICAgICAtLWFjY2VudDogIzMzNDc1NjtcXG4gICAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlIHAsXFxuICAgIGJvZHkuZGFyay1tb2RlIGxpLFxcbiAgICBib2R5LmRhcmstbW9kZSBoMSxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDIsXFxuICAgIGJvZHkuZGFyay1tb2RlIGgzLFxcbiAgICBib2R5LmRhcmstbW9kZSBoNCxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDUsXFxuICAgIGJvZHkuZGFyay1tb2RlIGg2LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGl0bGUsXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10ZXh0LFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtbGksXFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy1oMyxcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWl0ZW0tcCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAubGlnaHQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAuZGFyayB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC5kYXJrIHtcXG4gICAgICAgIC8qIGNsYXNzIHVzZWQgdG8gaGlkZSBlbGVtZW50cyB0aGF0IG9ubHkgbmVlZCB0byBiZSBzZWVuIHdoZW4gZGFyayBtb2RlIGlzIGVuYWJsZWQgKi9cXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG4gIDwtLS0gICAgICBEYXJrIE1vZGUgVG9nZ2xlICAgICAgLS0+XFxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3MtbW9vbiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA2JTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgIHJpZ2h0OiAzLjc1cmVtO1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIGltZyxcXG4gICAgI2RhcmstbW9kZS10b2dnbGUgc3ZnIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICB3aWR0aDogMS41NjI1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAxLjU2MjVyZW07XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3MtbW9vbiB7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzLFxcbiAgICAgICAgICAgIGZpbGwgMC4zcztcXG4gICAgICAgIGZpbGw6ICMwMDA7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXFxuICAgICAgICAgICAgb3BhY2l0eSAwLjNzO1xcbiAgICB9XFxufVxcblxcbi8qIERlc2t0b3AgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogYXV0bztcXG4gICAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuODc1cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG4gICAgfVxcblxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLm1vb24ge1xcbiAgICAgICAgLyogY2hhbmdlIHRvIHdoYXRldmVyIHlvdSBuZWVkICovXFxuICAgICAgICBmaWxsOiAjZmZmO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tcHJpbWFyeTogI2ZmNmEzZTtcbiAgICAtLXByaW1hcnlMaWdodDogI2ZmYmE0MztcbiAgICAtLXNlY29uZGFyeTogI2ZmYmE0MztcbiAgICAtLXNlY29uZGFyeUxpZ2h0OiAjZmZiYTQzO1xuICAgIC0taGVhZGVyQ29sb3I6ICMxYTFhMWE7XG4gICAgLS1oZWFkZXJDb2xvckRhcms6ICMwODIwMzI7XG4gICAgLS1oZWFkZXJDb2xvck1lZGl1bTogIzJjMzk0YjtcbiAgICAtLWJvZHlUZXh0Q29sb3I6ICM0ZTRiNjY7XG4gICAgLS1ib2R5VGV4dENvbG9yV2hpdGU6ICNmYWZiZmM7XG4gICAgLS1ib2R5VGV4dENvbG9yR3JheTogIzMxMzEzMTtcbiAgICAvKiAxM3B4IC0gMTZweCAqL1xuICAgIC0tdG9wcGVyRm9udFNpemU6IGNsYW1wKDAuODEyNXJlbSwgMS42dncsIDFyZW0pO1xuICAgIC8qIDMxcHggLSA0OXB4ICovXG4gICAgLS1oZWFkZXJGb250U2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAycmVtKTtcbiAgICAtLWJvZHlGb250U2l6ZTogMXJlbTtcbiAgICAvKiA2MHB4IC0gMTAwcHggdG9wIGFuZCBib3R0b20gKi9cbiAgICAtLXNlY3Rpb25QYWRkaW5nOiBjbGFtcCgzLjc1cmVtLCA3LjgydncsIDYuMjVyZW0pIDFyZW07XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuI2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG59XG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIC8qIGhlaWdodDogMXJlbTsgKi9cbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gICAgLyogcHJldmVudHMgcGFkZGluZyBmcm9tIGFmZmVjdGluZyBoZWlnaHQgYW5kIHdpZHRoICovXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNzLXRvcHBlciB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10b3BwZXJGb250U2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyRm9udFNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOiA0My43NXJlbTtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDFyZW07XG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcy10ZXh0IHtcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MC42MjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbn1cblxuI2NzLW5hdmlnYXRpb24gLnBhZ2UtdGl0bGUsXG4jY3MtbmF2aWdhdGlvbj4ucGFnZS10aXRsZTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yTWVkaXVtKTtcbn1cblxuI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsK0NBQStDO0lBQy9DLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxxREFBcUQ7SUFDckQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogI2ZmNmEzZTtcXG4gICAgLS1wcmltYXJ5TGlnaHQ6ICNmZmJhNDM7XFxuICAgIC0tc2Vjb25kYXJ5OiAjZmZiYTQzO1xcbiAgICAtLXNlY29uZGFyeUxpZ2h0OiAjZmZiYTQzO1xcbiAgICAtLWhlYWRlckNvbG9yOiAjMWExYTFhO1xcbiAgICAtLWhlYWRlckNvbG9yRGFyazogIzA4MjAzMjtcXG4gICAgLS1oZWFkZXJDb2xvck1lZGl1bTogIzJjMzk0YjtcXG4gICAgLS1ib2R5VGV4dENvbG9yOiAjNGU0YjY2O1xcbiAgICAtLWJvZHlUZXh0Q29sb3JXaGl0ZTogI2ZhZmJmYztcXG4gICAgLS1ib2R5VGV4dENvbG9yR3JheTogIzMxMzEzMTtcXG4gICAgLyogMTNweCAtIDE2cHggKi9cXG4gICAgLS10b3BwZXJGb250U2l6ZTogY2xhbXAoMC44MTI1cmVtLCAxLjZ2dywgMXJlbSk7XFxuICAgIC8qIDMxcHggLSA0OXB4ICovXFxuICAgIC0taGVhZGVyRm9udFNpemU6IGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XFxuICAgIC0tYm9keUZvbnRTaXplOiAxcmVtO1xcbiAgICAvKiA2MHB4IC0gMTAwcHggdG9wIGFuZCBib3R0b20gKi9cXG4gICAgLS1zZWN0aW9uUGFkZGluZzogY2xhbXAoMy43NXJlbSwgNy44MnZ3LCA2LjI1cmVtKSAxcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiBoZWlnaHQ6IDFyZW07ICovXFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY3MtdG9wcGVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS10b3BwZXJGb250U2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jcy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyRm9udFNpemUpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICAgIG1heC13aWR0aDogNDMuNzVyZW07XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3MtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYm9keUZvbnRTaXplKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA0MC42MjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xcbn1cXG5cXG4jY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSxcXG4jY3MtbmF2aWdhdGlvbj4ucGFnZS10aXRsZTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3JNZWRpdW0pO1xcbn1cXG5cXG4jY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICBNb2JpbGUgTmF2aWdhdGlvbiAgICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlIC0gMTAyM3B4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVyZW0pIHtcbiAgICBib2R5LmNzLW9wZW4ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAwdmg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogLTExMDA7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlOmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMTUwdmg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy11bC13cmFwcGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtbGkge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAwIDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xuICAgICAgICAvKiA0NHB4IC0gNDhweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xuICAgICAgICBtYXJnaW46IDAgMCAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUxIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMjVkZWcpO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUyIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHRyYW5zbGF0ZVkoMCkgcm90YXRlKC0yMjVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTMge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBib3R0b206IDEwMCU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWJveCB7XG4gICAgICAgIC8qIDI0cHggLSAyOHB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCgxLjVyZW0sIDJ2dywgMS43NXJlbSk7XG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXG4gICAgICAgIGhlaWdodDogY2xhbXAoMC44NzVyZW0sIDEuNXZ3LCAxcmVtKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUxIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgdG9wIDAuM3MsIGxlZnQgMC4zcztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUyIHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcywgbGVmdCAwLjNzLCB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMyB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjRlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIG9wYWNpdHkgMC4zcztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDAgMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEuMjVyZW07XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAvKiB0cmFuc2l0aW9uIGZyb20gdGhlc2UgdmFsdWVzICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC4zNzVyZW0pO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cywgb3BhY2l0eSAwLjlzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDQpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNSkge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNikge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg3KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg4KSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDkpIHtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEwKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDExKSB7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMikge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMykge1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjY1cztcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIC8qIDE2cHggLSAyNHB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAyLjV2dywgMS43cmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgICAgLyogYWN0aXZlIHN0YXRlIHVuZGVybGluZSAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IC0wLjEyNXJlbTtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XG4gICAgICAgIC8qIG1ha2VzIGl0IHdoaXRlICovXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG4gIDwtLS0gICAgIERlc2t0b3AgTmF2aWdhdGlvbiAgICAgLS0+XG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG4vKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XG4gICAgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDEwMDAwOyAqL1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMS41cmVtO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgfVxuXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiAyMHB4IC0gMzZweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDEuMjVyZW0sIDIuNnZ3LCAyLjI1cmVtKTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgIC8qIHByZXZlbnQgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xuICAgICAgICBmbGV4OiBub25lO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDF2dywgMS4ycmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDByZW07XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgfVxufVxuXG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcbiAgICAgICAgLyogbWFrZXMgaXQgdHVybiB3aGl0ZSAqL1xuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDEwMDAlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cblxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgIFNpZGUgQnkgU2lkZSBSZXZlcnNlICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG5cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICAjaG9tZS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCB0YWJsZXQgKi9cbiAgICAgICAgbWF4LXdpZHRoOiAzNi41cmVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIDQ4cHggLSA2NHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgNnZ3LCA0cmVtKTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy1jb250ZW50IHtcbiAgICAgICAgLyogc2V0IHRleHQgYWxpZ24gdG8gbGVmdCBpZiBjb250ZW50IG5lZWRzIHRvIGJlIGxlZnQgYWxpZ25lZCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy10ZXh0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy10ZXh0Omxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUtcmlnaHQge1xuICAgICAgICBoZWlnaHQ6IDk1dnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUtbGVmdCB7XG4gICAgICAgIGhlaWdodDogMTExdnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMxLjI1cmVtO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXN0YXRzLWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8qIDI4cHggLSA0MHB4ICovXG4gICAgICAgIGdhcDogY2xhbXAoMS43NXJlbSwgM3Z3LCAyLjVyZW0pO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLXN0YXRzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMzkuMzc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuICAgICAgICByb3ctZ2FwOiAxLjVyZW07XG4gICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3Mtc3RhdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIC8qIG1ha2luZyBmbGV4IHNvIHdlIGNhbiBhbGlnbiBhIGhlYWRpbmcgd2l0aCAxIGxpbmUgdG8gdGhlIGJvdHRvbSAqL1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLW51bWJlciB7XG4gICAgICAgIC8qIDMxcHggLSAzOXB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS45Mzc1cmVtLCAzdncsIDIuNDM3NXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy1kZXNjIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC8qIGF1dG8gbWFyZ2luIHRvcCB3aWxsIHB1c2ggdGV4dCB0byBib3R0b20gaWYgdGhlcmUncyBvbmx5IG9uZSBsaW5lICovXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgIH1cbn1cblxuLyogVGFibGV0IC0gNzY4cHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcbiAgICAjaG9tZS1jb250ZW50IC5jcy1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIH1cblxuICAgICNob21lLWNvbnRlbnQgLmNzLWNvbnRlbnQge1xuICAgICAgICAvKiBzZW5kcyBpdCB0byB0aGUgcmlnaHQgaW4gdGhlIDJuZCBwb3NpdGlvbiAqL1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlLXJpZ2h0IHtcbiAgICAgICAgLyogMzQwcHggLSA0NjBweCAqL1xuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgyMS4yNXJlbSwgMzV2dywgMjguNzVyZW0pO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZS1sZWZ0IHtcbiAgICAgICAgLyogNTMwcHggLSA2NjBweCAqL1xuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgzMy4xMjVyZW0sIDQ1dncsIDQxLjI1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuLyogRGFyayBNb2RlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcblxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLXRpdGxlLFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLXRleHQsXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtbnVtYmVyLFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLWRlc2Mge1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50IC5jcy10ZXh0LFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLWRlc2Mge1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG59XG5cbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgICAgICAgICBGb290ZXIgICAgICAgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cblxuLyogTW9iaWxlIC0gMzYwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgICNjcy1mb290ZXItMTA4IHtcbiAgICAgICAgLyogNDBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXG4gICAgICAgIHBhZGRpbmc6IGNsYW1wKDFyZW0sIDQuOXZ3LCAyLjI1cmVtKSAxcmVtO1xuICAgICAgICAvKiA0MHB4IC0gNTBweCAqL1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMS41cmVtLCA2Ljl2dywgMi4xMjVyZW0pO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XG4gICAgICAgIC8qIDQwcHggLSA2MHB4Ki9cbiAgICAgICAgcGFkZGluZzogMCAwIGNsYW1wKDJyZW0sIDQuN3Z3LCAuNzVyZW0pO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMGY2O1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGk6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluayB7XG4gICAgICAgIC8qIDE2cHggLSAyMHB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAwLjE1cywgMXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcik7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpob3ZlcjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xuICAgICAgICAvKiB0b3AgcmlnaHQgYm94ICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3R0b206IC0wLjEyNXJlbTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG5cbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtY29weXJpZ2h0IHtcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMS42dncsIDFyZW0pO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjYTBhM2JkO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLyogMjBweCAtIDI4cHggKi9cbiAgICAgICAgbWFyZ2luOiBjbGFtcCgxLjI1cmVtLCAyLjh2dywgMS43NXJlbSkgYXV0byAwO1xuICAgIH1cbn1cblxuLyogVGFibGV0IC0gNjAwcHggKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzcuNXJlbSkge1xuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saSB7XG4gICAgICAgIC8qIDQ0cHggLSA4OHB4ICovXG4gICAgICAgIG1hcmdpbjogMCBjbGFtcCgyLjc1cmVtLCA2LjJ2dywgNS41cmVtKSAwIDA7XG4gICAgfVxuXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG5cbi8qIERhcmsgTW9kZSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDgge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbn1cblxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICAgICAgICBNZW51ICAgICAgICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgI21lbnUtMTAwNSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNlY3Rpb25QYWRkaW5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1OmJlZm9yZSB7XG4gICAgICAgIC8qIHN0YXRpYyB0aWxlZCBwYXR0ZXJuICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDAuMDg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vY3NpbWcubnljMy5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9Gb29kLU1lbnUvc3RhdGljLXBhdHRlcm4ucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MGVtO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAvKiA0OHB4IC0gNjRweCAqL1xuICAgICAgICBnYXA6IGNsYW1wKDNyZW0sIDd2dywgNHJlbSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtY29udGVudCB7XG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIge1xuICAgICAgICAvKiAxMjBweCAtIDE4MXB4ICovXG4gICAgICAgIHdpZHRoOiBjbGFtcCg3LjVyZW0sIDl2dywgMTEuMzEyNXJlbSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXI6YmVmb3JlIHtcbiAgICAgICAgLyogbGVmdCBsaW5lICovXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyOmFmdGVyIHtcbiAgICAgICAgLyogcmlnaHQgbGluZSAqL1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAvKiA5MHB4IC0gMTU1cHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDUuNjI1cmVtLCA0dncsIDkuNjg3NXJlbSk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAvKiAxMnB4IC0gMjRweCAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG5cbiAgICAjbWVudS0xMDA1IC5jcy10ZXh0IHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgLyogNDZweCAtIDU2cHggKi9cbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDIuODc1ZW0sIDUuNXZ3LCAzLjVlbSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtaW4td2lkdGg6IDkuMzc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgLyogcHJldmVudHMgcGFkZGluZyBmcm9tIGFkZGluZyB0byB0aGUgd2lkdGggKi9cbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtY2FyZC1ncm91cCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgICAgIC8qIDMycHggLSA2MHB4ICovXG4gICAgICAgIHJvdy1nYXA6IGNsYW1wKDJyZW0sIDZ2dywgMy43NXJlbSk7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDM2LjI1cmVtO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLyogMTZweCAtIDM2cHggKi9cbiAgICAgICAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDIuMjVyZW0pO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLXBpY3R1cmUge1xuICAgICAgICAvKiA3NnB4IC0gMTYwcHggKi9cbiAgICAgICAgd2lkdGg6IGNsYW1wKDQuNzVyZW0sIDE0dncsIDEwcmVtKTtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg0Ljc1cmVtLCAxNHZ3LCAxMHJlbSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC8qIDRweCAtIDhweCAqL1xuICAgICAgICBib3JkZXI6IGNsYW1wKDAuMjVyZW0sIDF2dywgMC41cmVtKSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogbWFrZXMgaXQgYWN0IGxpa2UgYSBiYWNrZ3JvdW5kIGltYWdlICovXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWgzIHtcbiAgICAgICAgLyogMTZweCAtIDI0cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNXJlbSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLyogOHB4IC0gMTZweCAqL1xuICAgICAgICBtYXJnaW46IDAgMCBjbGFtcCgwLjVyZW0sIDEuNXZ3LCAxcmVtKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGdhcDogMC43NXJlbTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1oMzphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1uYW1lIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMy43NXJlbTtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICB9XG5cbiAgICAjbWVudS0xMDA1IC5jcy1wcmljZSB7XG4gICAgICAgIC8qIDE2cHggLSAyNXB4ICovXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMnZ3LCAxLjU2MjVyZW0pO1xuICAgICAgICAvKiAyOHB4IC0gNDZweCAqL1xuICAgICAgICBsaW5lLWhlaWdodDogY2xhbXAoMS43NXJlbSwgNHZ3LCAyLjg3NXJlbSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIC8qIDhweCAtIDEycHggKi9cbiAgICAgICAgcGFkZGluZzogMCBjbGFtcCgwLjVyZW0sIDF2dywgMC43NXJlbSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjJjNztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3JkZXI6IDM7XG4gICAgfVxuXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbS1wIHtcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMnZ3LCAxcmVtKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG59XG5cbi8qIFRhYmxldCAtIDc2OHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4cmVtKSB7XG4gICAgI21lbnUtMTAwNSAuY3MtY2FyZC1ncm91cCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0ge1xuICAgICAgICB3aWR0aDogNDguNSU7XG4gICAgfVxufVxuXG4vKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuPC0tLSAgICAgICAgICAgQ29udGFjdHMgICAgICAgICAtLT5cbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXG5cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICAjY29udGFjdC1zdHJpcC0zMjQge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgXG4gICAgfVxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBjaGFuZ2VzIHRvIDEyODBweCBhdCBkZXNrdG9wICovXG4gICAgICAgIG1heC13aWR0aDogMzcuNXJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAyLjVyZW07XG4gICAgfVxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaXRlbSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxOC4xMjVyZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWl0ZW06aG92ZXIgLmNzLXBpY3R1cmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXBpY3R1cmUge1xuICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgICAgICAvKiAxMnB4IC0gMjBweCAqL1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKDAuNzVyZW0sIDN2dywgMS4yNXJlbSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JhYmFiYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8qIHByZXZlbnRzIGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyxcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMC4zcyxcbiAgICAgICAgICAgIHRyYW5zZm9ybSAwLjZzO1xuICAgIH1cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWZsZXgtZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtbGluayxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhvdXJzIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1ib2R5Rm9udFNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM3Njc2NzY7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG59XG4vKiBUYWJsZXQgLSA2NTBweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MC42MjVyZW0pIHtcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgICAgIHJvdy1nYXA6IDJyZW07XG4gICAgfVxufVxuLyogU21hbGwgRGVza3RvcCAtIDEwMjRweCAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XG4gICAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB9XG59XG4vKiBEYXJrIE1vZGUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhlYWRlcixcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1ob3VycyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O29DQUVvQztBQUNwQyxvQkFBb0I7QUFDcEI7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixpREFBaUQ7UUFDakQsZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIsVUFBVTtRQUNWLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsU0FBUztRQUNU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a0I7UUFDbEIseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHVDQUF1QztRQUN2QyxVQUFVO1FBQ1Y7OzswQkFHa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksY0FBYztRQUNkLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsc0JBQXNCO1FBQ3RCLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsY0FBYztJQUNsQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7QUFDQSxtQkFBbUI7QUFDbkI7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7QUFDSjtBQUNBLDJCQUEyQjtBQUMzQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQiw2QkFBNkI7SUFDakM7QUFDSjtBQUNBLGNBQWM7QUFDZDtJQUNJO1FBQ0ksNkJBQTZCO0lBQ2pDO0lBQ0E7OztRQUdJLGdDQUFnQztJQUNwQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuICA8LS0tICAgICBNb2JpbGUgTmF2aWdhdGlvbiAgICAgIC0tPlxcbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgLSAxMDIzcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVyZW0pIHtcXG4gICAgYm9keS5jcy1vcGVuIHtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMHZoO1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB6LWluZGV4OiAtMTEwMDtcXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzLCBvcGFjaXR5IDAuNXM7XFxuICAgICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIGhlaWdodDogMTUwdmg7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtdWwtd3JhcHBlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLWxpIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNHJlbTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgfVxcblxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlIHtcXG4gICAgICAgIC8qIDQ0cHggLSA0OHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcXG4gICAgICAgIGhlaWdodDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcXG4gICAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTEge1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjI1ZGVnKTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMiB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHRyYW5zbGF0ZVkoMCkgcm90YXRlKC0yMjVkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1hY3RpdmUgLmNzLWxpbmUzIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBib3R0b206IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWJveCB7XFxuICAgICAgICAvKiAyNHB4IC0gMjhweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDEuNXJlbSwgMnZ3LCAxLjc1cmVtKTtcXG4gICAgICAgIC8qIDE0cHggLSAxNnB4ICovXFxuICAgICAgICBoZWlnaHQ6IGNsYW1wKDAuODc1cmVtLCAxLjV2dywgMXJlbSk7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiA1MCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUxIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzLCB0b3AgMC4zcywgbGVmdCAwLjNzO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMiB7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3MsIGxlZnQgMC4zcywgdHJhbnNmb3JtIDAuNXM7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUzIHtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjNzLCBvcGFjaXR5IDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi40ZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDEwMCU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cywgb3BhY2l0eSAwLjNzO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDY1dmg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDAgMCAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxLjI1cmVtO1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGkge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIC8qIHRyYW5zaXRpb24gZnJvbSB0aGVzZSB2YWx1ZXMgKi9cXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC4zNzVyZW0pO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMsIG9wYWNpdHkgMC45cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDMpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg0KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg1KSB7XFxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNikge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNykge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zNXM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDgpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDkpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNDVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMCkge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTEpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMikge1xcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTMpIHtcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNjVzO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICAgIC8qIDE2cHggLSAyNHB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMi41dncsIDEuN3JlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XFxuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSB7XFxuICAgICAgICAvKiBtYWtlcyBpdCB3aGl0ZSAqL1xcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0pO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuICA8LS0tICAgICBEZXNrdG9wIE5hdmlnYXRpb24gICAgIC0tPlxcbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBoZWlnaHQgYW5kIHdpZHRoICovXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgICAgICAvKiBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxMDAwMDsgKi9cXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHotaW5kZXg6IDEwMDtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAucGFnZS10aXRsZSBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiAyMHB4IC0gMzZweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgxLjI1cmVtLCAyLjZ2dywgMi4yNXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgICAgICAvKiBwcmV2ZW50IGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDF2dywgMS4ycmVtKTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmhvdmVyOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XFxuICAgICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHdpZHRoOiAwJTtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDByZW07XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gICAgfVxcbn1cXG5cXG4vKiBEYXJrIE1vZGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5wYWdlLXRpdGxlIHtcXG4gICAgICAgIC8qIG1ha2VzIGl0IHR1cm4gd2hpdGUgKi9cXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmJlZm9yZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5TGlnaHQpO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgIFNpZGUgQnkgU2lkZSBSZXZlcnNlICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcblxcbi8qIE1vYmlsZSAtIDM2MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgICNob21lLWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2VjdGlvblBhZGRpbmcpO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8qIGNoYW5nZXMgdG8gMTI4MHB4IGF0IHRhYmxldCAqL1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNi41cmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgNnZ3LCA0cmVtKTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1jb250ZW50IHtcXG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyogY2VudGVycyBjb250ZW50IGhvcml6b250YWxseSwgc2V0IHRvIGZsZXgtc3RhcnQgdG8gbGVmdCBhbGlnbiAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3MtdGV4dCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLXRleHQ6bGFzdC1vZi10eXBlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlLXJpZ2h0IHtcXG4gICAgICAgIGhlaWdodDogOTV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNob21lLWNvbnRlbnQgLmNzLXBpY3R1cmUtbGVmdCB7XFxuICAgICAgICBoZWlnaHQ6IDExMXZ3O1xcbiAgICAgICAgbWF4LWhlaWdodDogMzEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3Mtc3RhdHMtZ3JvdXAge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIC8qIDI4cHggLSA0MHB4ICovXFxuICAgICAgICBnYXA6IGNsYW1wKDEuNzVyZW0sIDN2dywgMi41cmVtKTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1zdGF0cyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzkuMzc1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gICAgICAgIHJvdy1nYXA6IDEuNXJlbTtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDAuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3Mtc3RhdCB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMCAwIDEuNXJlbSAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgLyogbWFraW5nIGZsZXggc28gd2UgY2FuIGFsaWduIGEgaGVhZGluZyB3aXRoIDEgbGluZSB0byB0aGUgYm90dG9tICovXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1udW1iZXIge1xcbiAgICAgICAgLyogMzFweCAtIDM5cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS45Mzc1cmVtLCAzdncsIDIuNDM3NXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1kZXNjIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgLyogYXV0byBtYXJnaW4gdG9wIHdpbGwgcHVzaCB0ZXh0IHRvIGJvdHRvbSBpZiB0aGVyZSdzIG9ubHkgb25lIGxpbmUgKi9cXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgLSA3NjhweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gICAgI2hvbWUtY29udGVudCAuY3MtY29udGFpbmVyIHtcXG4gICAgICAgIG1heC13aWR0aDogODByZW07XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3MtY29udGVudCB7XFxuICAgICAgICAvKiBzZW5kcyBpdCB0byB0aGUgcmlnaHQgaW4gdGhlIDJuZCBwb3NpdGlvbiAqL1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG5cXG4gICAgI2hvbWUtY29udGVudCAuY3MtcGljdHVyZS1yaWdodCB7XFxuICAgICAgICAvKiAzNDBweCAtIDQ2MHB4ICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBjbGFtcCgyMS4yNXJlbSwgMzV2dywgMjguNzVyZW0pO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAjaG9tZS1jb250ZW50IC5jcy1waWN0dXJlLWxlZnQge1xcbiAgICAgICAgLyogNTMwcHggLSA2NjBweCAqL1xcbiAgICAgICAgbWluLWhlaWdodDogY2xhbXAoMzMuMTI1cmVtLCA0NXZ3LCA0MS4yNXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcblxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50IC5jcy10aXRsZSxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtdGV4dCxcXG4gICAgYm9keS5kYXJrLW1vZGUgI2hvbWUtY29udGVudCAuY3MtbnVtYmVyLFxcbiAgICBib2R5LmRhcmstbW9kZSAjaG9tZS1jb250ZW50IC5jcy1kZXNjIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxuXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLXRleHQsXFxuICAgIGJvZHkuZGFyay1tb2RlICNob21lLWNvbnRlbnQgLmNzLWRlc2Mge1xcbiAgICAgICAgb3BhY2l0eTogLjg7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgICAgICBGb290ZXIgICAgICAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI2NzLWZvb3Rlci0xMDgge1xcbiAgICAgICAgLyogNDBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXFxuICAgICAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCA0Ljl2dywgMi4yNXJlbSkgMXJlbTtcXG4gICAgICAgIC8qIDQwcHggLSA1MHB4ICovXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoMS41cmVtLCA2Ljl2dywgMi4xMjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy11bCB7XFxuICAgICAgICAvKiA0MHB4IC0gNjBweCovXFxuICAgICAgICBwYWRkaW5nOiAwIDAgY2xhbXAoMnJlbSwgNC43dncsIC43NXJlbSk7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjBmNjtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGkge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpOmxhc3Qtb2YtdHlwZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saW5rIHtcXG4gICAgICAgIC8qIDE2cHggLSAyMHB4ICovXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMC4xNXMsIDFyZW0pO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjY3MtZm9vdGVyLTEwOCAuY3MtbGluazpob3ZlcjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIC8qIHRvcCByaWdodCBib3ggKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgaGVpZ2h0OiAwLjE4NzVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGJvdHRvbTogLTAuMTI1cmVtO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWNvcHlyaWdodCB7XFxuICAgICAgICAvKiAxNHB4IC0gMTZweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMS42dncsIDFyZW0pO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6ICNhMGEzYmQ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIC8qIDIwcHggLSAyOHB4ICovXFxuICAgICAgICBtYXJnaW46IGNsYW1wKDEuMjVyZW0sIDIuOHZ3LCAxLjc1cmVtKSBhdXRvIDA7XFxuICAgIH1cXG59XFxuXFxuLyogVGFibGV0IC0gNjAwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3LjVyZW0pIHtcXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLXVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2NzLWZvb3Rlci0xMDggLmNzLWxpIHtcXG4gICAgICAgIC8qIDQ0cHggLSA4OHB4ICovXFxuICAgICAgICBtYXJnaW46IDAgY2xhbXAoMi43NXJlbSwgNi4ydncsIDUuNXJlbSkgMCAwO1xcbiAgICB9XFxuXFxuICAgICNjcy1mb290ZXItMTA4IC5jcy1saTpsYXN0LW9mLXR5cGUge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxufVxcblxcbi8qIERhcmsgTW9kZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtZm9vdGVyLTEwOCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbmsge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgIH1cXG5cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLWZvb3Rlci0xMDggLmNzLWxpbms6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIH1cXG59XFxuXFxuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cXG48LS0tICAgICAgICAgICAgTWVudSAgICAgICAgICAgIC0tPlxcbjwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuXFxuLyogTW9iaWxlIC0gMzYwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgI21lbnUtMTAwNSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNTpiZWZvcmUge1xcbiAgICAgICAgLyogc3RhdGljIHRpbGVkIHBhdHRlcm4gKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvcGFjaXR5OiAwLjA4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL2NzaW1nLm55YzMuY2RuLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vRm9vZC1NZW51L3N0YXRpYy1wYXR0ZXJuLnBuZ1xcXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogODBlbTtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogNDhweCAtIDY0cHggKi9cXG4gICAgICAgIGdhcDogY2xhbXAoM3JlbSwgN3Z3LCA0cmVtKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1jb250ZW50IHtcXG4gICAgICAgIC8qIHNldCB0ZXh0IGFsaWduIHRvIGxlZnQgaWYgY29udGVudCBuZWVkcyB0byBiZSBsZWZ0IGFsaWduZWQgKi9cXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAvKiBjZW50ZXJzIGNvbnRlbnQgaG9yaXpvbnRhbGx5LCBzZXQgdG8gZmxleC1zdGFydCB0byBsZWZ0IGFsaWduICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXdyYXBwZXIge1xcbiAgICAgICAgLyogMTIwcHggLSAxODFweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDcuNXJlbSwgOXZ3LCAxMS4zMTI1cmVtKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyOmJlZm9yZSB7XFxuICAgICAgICAvKiBsZWZ0IGxpbmUgKi9cXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgLyogOTBweCAtIDE1NXB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNS42MjVyZW0sIDR2dywgOS42ODc1cmVtKTtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgLyogMTJweCAtIDI0cHggKi9cXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3Mtd3JhcHBlcjphZnRlciB7XFxuICAgICAgICAvKiByaWdodCBsaW5lICovXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIC8qIDkwcHggLSAxNTVweCAqL1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDUuNjI1cmVtLCA0dncsIDkuNjg3NXJlbSk7XFxuICAgICAgICBoZWlnaHQ6IDFweDtcXG4gICAgICAgIC8qIDEycHggLSAyNHB4ICovXFxuICAgICAgICBtYXJnaW4tbGVmdDogY2xhbXAoMC43NXJlbSwgMnZ3LCAxLjVyZW0pO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2I0YjJjNztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgbGVmdDogMTAwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy13cmFwcGVyIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcblxcbiAgICAjbWVudS0xMDA1IC5jcy10ZXh0IHtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgLyogNDZweCAtIDU2cHggKi9cXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjg3NWVtLCA1LjV2dywgMy41ZW0pO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgZnJvbSBhZGRpbmcgdG8gdGhlIHdpZHRoICovXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWJ1dHRvbi1zb2xpZDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1idXR0b24tc29saWQ6aG92ZXI6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWNhcmQtZ3JvdXAge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xcbiAgICAgICAgLyogMzJweCAtIDYwcHggKi9cXG4gICAgICAgIHJvdy1nYXA6IGNsYW1wKDJyZW0sIDZ2dywgMy43NXJlbSk7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaXRlbSB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDM2LjI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvKiAxNnB4IC0gMzZweCAqL1xcbiAgICAgICAgZ2FwOiBjbGFtcCgxcmVtLCAzdncsIDIuMjVyZW0pO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLXBpY3R1cmUge1xcbiAgICAgICAgLyogNzZweCAtIDE2MHB4ICovXFxuICAgICAgICB3aWR0aDogY2xhbXAoNC43NXJlbSwgMTR2dywgMTByZW0pO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg0Ljc1cmVtLCAxNHZ3LCAxMHJlbSk7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgLyogNHB4IC0gOHB4ICovXFxuICAgICAgICBib3JkZXI6IGNsYW1wKDAuMjVyZW0sIDF2dywgMC41cmVtKSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtcGljdHVyZSBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogbWFrZXMgaXQgYWN0IGxpa2UgYSBiYWNrZ3JvdW5kIGltYWdlICovXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1oMyB7XFxuICAgICAgICAvKiAxNnB4IC0gMjRweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIC8qIDhweCAtIDE2cHggKi9cXG4gICAgICAgIG1hcmdpbjogMCAwIGNsYW1wKDAuNXJlbSwgMS41dncsIDFyZW0pO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBnYXA6IDAuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtaDM6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjRiMmM3O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG4gICAgI21lbnUtMTAwNSAuY3MtbmFtZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEzLjc1cmVtO1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1wcmljZSB7XFxuICAgICAgICAvKiAxNnB4IC0gMjVweCAqL1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAydncsIDEuNTYyNXJlbSk7XFxuICAgICAgICAvKiAyOHB4IC0gNDZweCAqL1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNsYW1wKDEuNzVyZW0sIDR2dywgMi44NzVyZW0pO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIC8qIDhweCAtIDEycHggKi9cXG4gICAgICAgIHBhZGRpbmc6IDAgY2xhbXAoMC41cmVtLCAxdncsIDAuNzVyZW0pO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiMmM3O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBvcmRlcjogMztcXG4gICAgfVxcblxcbiAgICAjbWVudS0xMDA1IC5jcy1pdGVtLXAge1xcbiAgICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMC44NzVyZW0sIDJ2dywgMXJlbSk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxufVxcblxcbi8qIFRhYmxldCAtIDc2OHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OHJlbSkge1xcbiAgICAjbWVudS0xMDA1IC5jcy1jYXJkLWdyb3VwIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgICNtZW51LTEwMDUgLmNzLWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDQ4LjUlO1xcbiAgICB9XFxufVxcblxcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgICAgICAgICAgQ29udGFjdHMgICAgICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcblxcbi8qIE1vYmlsZSAtIDM2MHB4ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uUGFkZGluZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1zdGF0LWdyb3VwIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgLyogY2hhbmdlcyB0byAxMjgwcHggYXQgZGVza3RvcCAqL1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNy41cmVtO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxuICAgIH1cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1pdGVtIHtcXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTguMTI1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaXRlbTpob3ZlciAuY3MtcGljdHVyZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIH1cXG4gICAgI2NvbnRhY3Qtc3RyaXAtMzI0IC5jcy1waWN0dXJlIHtcXG4gICAgICAgIHdpZHRoOiA1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgLyogMTJweCAtIDIwcHggKi9cXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoMC43NXJlbSwgM3Z3LCAxLjI1cmVtKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYWJhYmE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogcHJldmVudHMgZmxleGJveCBmcm9tIHNxdWlzaGluZyBpdCAqL1xcbiAgICAgICAgZmxleDogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb246XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjNzLFxcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMC4zcyxcXG4gICAgICAgICAgICB0cmFuc2Zvcm0gMC42cztcXG4gICAgfVxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWZsZXgtZ3JvdXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaWNvbiB7XFxuICAgICAgICB3aWR0aDogMS43NXJlbTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaG91cnMge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1ib2R5Rm9udFNpemUpO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgY29sb3I6ICM3Njc2NzY7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbms6aG92ZXIge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG59XFxuLyogVGFibGV0IC0gNjUwcHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwLjYyNXJlbSkge1xcbiAgICAjY29udGFjdC1zdHJpcC0zMjQgLmNzLXN0YXQtZ3JvdXAge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XFxuICAgICAgICByb3ctZ2FwOiAycmVtO1xcbiAgICB9XFxufVxcbi8qIFNtYWxsIERlc2t0b3AgLSAxMDI0cHggKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNjb250YWN0LXN0cmlwLTMyNCAuY3Mtc3RhdC1ncm91cCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDgwcmVtO1xcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgfVxcbn1cXG4vKiBEYXJrIE1vZGUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcXG4gICAgYm9keS5kYXJrLW1vZGUgI2NvbnRhY3Qtc3RyaXAtMzI0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaGVhZGVyLFxcbiAgICBib2R5LmRhcmstbW9kZSAjY29udGFjdC1zdHJpcC0zMjQgLmNzLWxpbmssXFxuICAgIGJvZHkuZGFyay1tb2RlICNjb250YWN0LXN0cmlwLTMyNCAuY3MtaG91cnMge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFyay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RhcmsuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2RhcmsuY3NzJztcblxuaW1wb3J0IGRhcmtNb2RlVG9nZ2xlciBmcm9tICcuL21vZHVsZXMvZGFya01vZGUnO1xuaW1wb3J0IG1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZyBmcm9tICcuL21vZHVsZXMvbW9iaWxlTmF2aWdhdGlvbic7XG5cbmltcG9ydCBob21lUGFnZUxlZnQgZnJvbSAnLi9hc3NldHMvaW1nL2hvbWVQYWdlTGVmdC5wbmcnO1xuaW1wb3J0IGhvbWVQYWdlUmlnaHQgZnJvbSAnLi9hc3NldHMvaW1nL2hvbWVQYWdlUmlnaHQucG5nJztcblxuaW1wb3J0IGJ1cmdlciBmcm9tICcuL2Fzc2V0cy9pbWcvbWVudS9iaXNvbkJ1cmdlci5wbmcnO1xuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi9hc3NldHMvaW1nL21lbnUvY2hpY2tlblNhbGFkTWFuZ28ucG5nJztcbmltcG9ydCBsYXNhZ25hIGZyb20gJy4vYXNzZXRzL2ltZy9tZW51L2xhc2FnbmEucG5nJztcbmltcG9ydCBwaXp6YSBmcm9tICcuL2Fzc2V0cy9pbWcvbWVudS9tZWF0TG92ZXJzUGl6emEucG5nJztcbmltcG9ydCBzYXVjZSBmcm9tICcuL2Fzc2V0cy9pbWcvbWVudS9wcmlja2x5UGVhclBvcmtTYXVjZS5wbmcnO1xuaW1wb3J0IHRvc3RhZGEgZnJvbSAnLi9hc3NldHMvaW1nL21lbnUvcHVycGxlQ29yblRvc3RhZGEucG5nJztcblxuZGFya01vZGVUb2dnbGVyKCk7XG5tb2JpbGVOYXZpZ2F0aW9uVG9nZ2xpbmcoKTtcblxuLy8gU2V0IGdsb2JhbHNcbmxldCBwYWdlTmFtZXMgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0cyddO1xubGV0IGN1cnJlbnRUYWIgPSBwYWdlTmFtZXNbMF07XG5sZXQgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnI21haW4tY29udGVudCcpO1xuXG4vLyBJbml0aWFsIGhvbWUgcGFnZSBsb2FkXG4vLyBsb2FkTWFpbihjdXJyZW50VGFiLCBjb250ZW50LCByZXZpZXdzLCBob21lVGl0bGUsIGluZm8pO1xuXG4vLyBTZXQgY2xpY2sgZXZlbnRzIGZvciB0YWIgbmF2aWdhdGlvblxucGFnZU5hbWVzLmZvckVhY2goKHBhZ2VOYW1lKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZU5hbWUpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudFRhYiA9IGNoYW5nZUJ1dHRvbkNvdmVyKGN1cnJlbnRUYWIsIGJ1dHRvbi5pZCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PSAnaG9tZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdob21lJyk7XG4gICAgICAgICAgICAvLyAgIGxvYWRNYWluKGJ1dHRvbi5pZCwgY29udGVudCwgcmV2aWV3cywgaG9tZVRpdGxlLCBpbmZvKTtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWVudScpO1xuXG4gICAgICAgICAgICAvLyAgIGxvYWRNYWluKGJ1dHRvbi5pZCwgY29udGVudCwgbWVudSwgbWVudVRpdGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb250YWN0cycpO1xuXG4gICAgICAgICAgICAvLyAgIGxvYWRNYWluKGJ1dHRvbi5pZCwgY29udGVudCwgY29udGFjdHMsIGNvbnRhY3RUaXRsZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2VCdXR0b25Db3ZlcihvbGRUYWIsIG5ld1RhYikge1xuICAgIGxldCBoaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bmV3VGFifWApO1xuICAgIGxldCBzaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7b2xkVGFifWApO1xuXG4gICAgaGlkZS5jbGFzc0xpc3QuYWRkKCdjcy1hY3RpdmUnKTtcbiAgICBzaG93LmNsYXNzTGlzdC5yZW1vdmUoJ2NzLWFjdGl2ZScpO1xuXG4gICAgcmV0dXJuIG5ld1RhYjtcbn1cbiIsIi8vXG4vLyAgICBUaGUgRGFyayBNb2RlIFN5c3RlbVxuLy9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGFya01vZGVUb2dnbGVyKCkge1xuICAgIC8vIGhlbHBlciBmdW5jdGlvbnMgdG8gdG9nZ2xlIGRhcmsgbW9kZVxuICAgIGZ1bmN0aW9uIGVuYWJsZURhcmtNb2RlKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNhYmxlRGFya01vZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgIH1cblxuICAgIC8vIGRldGVybWluZXMgYSBuZXcgdXNlcnMgZGFyayBtb2RlIHByZWZlcmVuY2VzXG4gICAgZnVuY3Rpb24gZGV0ZWN0Q29sb3JTY2hlbWUoKSB7XG4gICAgICAgIC8vIGRlZmF1bHQgdG8gdGhlIGxpZ2h0IHRoZW1lXG4gICAgICAgIGxldCB0aGVtZSA9ICdsaWdodCc7XG5cbiAgICAgICAgLy8gY2hlY2sgbG9jYWxTdG9yYWdlIGZvciBhIHNhdmVkICd0aGVtZScgdmFyaWFibGUuIGlmIGl0J3MgdGhlcmUsIHRoZSB1c2VyIGhhcyB2aXNpdGVkIGJlZm9yZSwgc28gYXBwbHkgdGhlIG5lY2Vzc2FyeSB0aGVtZSBjaG9pY2VzXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgICAgICAgICAgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdCdzIG5vdCB0aGVyZSwgY2hlY2sgdG8gc2VlIGlmIHRoZSB1c2VyIGhhcyBhcHBsaWVkIGRhcmsgbW9kZSBwcmVmZXJlbmNlcyB0aGVtc2VsdmVzIGluIHRoZSBicm93c2VyXG4gICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlc1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoZW1lID0gJ2RhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gcHJlZmVyZW5jZSBzZXQsIHRoZSBkZWZhdWx0IG9mIGxpZ2h0IHdpbGwgYmUgdXNlZC4gYXBwbHkgYWNjb3JkaW5nbHlcbiAgICAgICAgdGhlbWUgPT09ICdkYXJrJyA/IGVuYWJsZURhcmtNb2RlKCkgOiBkaXNhYmxlRGFya01vZGUoKTtcbiAgICB9XG5cbiAgICAvLyBydW4gb24gcGFnZSBsb2FkXG4gICAgZGV0ZWN0Q29sb3JTY2hlbWUoKTtcblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgZGFyayBtb2RlIGJ1dHRvbiB0b2dnbGVcbiAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2RhcmstbW9kZS10b2dnbGUnKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBvbiBjbGljaywgY2hlY2sgbG9jYWxTdG9yYWdlIGZvciB0aGUgZGFyayBtb2RlIHZhbHVlLCB1c2UgdG8gYXBwbHkgdGhlIG9wcG9zaXRlIG9mIHdoYXQncyBzYXZlZFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdsaWdodCdcbiAgICAgICAgICAgICAgICA/IGVuYWJsZURhcmtNb2RlKClcbiAgICAgICAgICAgICAgICA6IGRpc2FibGVEYXJrTW9kZSgpO1xuICAgICAgICB9KTtcbn1cbiIsIi8vIGFkZCBjbGFzc2VzIGZvciBtb2JpbGUgbmF2aWdhdGlvbiB0b2dnbGluZ1xudmFyIENTYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IENTbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1uYXZpZ2F0aW9uJyk7XG5jb25zdCBDU2hhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtbmF2aWdhdGlvbiAuY3MtdG9nZ2xlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZU5hdmlnYXRpb25Ub2dnbGluZygpIHtcbiAgICBDU2hhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIENTaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgQ1NuYXZiYXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgICAgICBDU2JvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnY3Mtb3BlbicpO1xuICAgICAgICAvLyBydW4gdGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBhcmlhLWV4cGFuZGVkIHZhbHVlXG4gICAgICAgIGFyaWFFeHBhbmRlZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gY2hlY2tzIHRoZSB2YWx1ZSBvZiBhcmlhIGV4cGFuZGVkIG9uIHRoZSBjcy11bCBhbmQgY2hhbmdlcyBpdCBhY2NvcmRpbmdseSB3aGV0aGVyIGl0IGlzIGV4cGFuZGVkIG9yIG5vdFxuICAgIGZ1bmN0aW9uIGFyaWFFeHBhbmRlZCgpIHtcbiAgICAgICAgY29uc3QgY3NVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1leHBhbmRlZCcpO1xuICAgICAgICBjb25zdCBjc0V4cGFuZGVkID0gY3NVTC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcblxuICAgICAgICBpZiAoY3NFeHBhbmRlZCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vYmlsZSBuYXYgdG9nZ2xlIGNvZGVcbiAgICBjb25zdCBkcm9wRG93bnMgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3MtbmF2aWdhdGlvbiAuY3MtZHJvcGRvd24nKVxuICAgICk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRyb3BEb3ducykge1xuICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2spO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==