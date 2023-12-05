"use strict";
(self["webpackChunkprojectrestaurant"] = self["webpackChunkprojectrestaurant"] || []).push([["main"],{

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
    /* Add these styles to your global stylesheet, which is used across all site pages. You only need to do this once. All elements in the library derive their variables and base styles from this central sheet, simplifying site-wide edits. For instance, if you want to modify how your h2's appear across the site, you just update it once in the global styles, and the changes apply everywhere. */
    --primary: #ff6a3e;
    --primaryLight: #ffba43;
    --secondary: #ffba43;
    --secondaryLight: #ffba43;
    --headerColor: #1a1a1a;
    --bodyTextColor: #4e4b66;
    --bodyTextColorWhite: #fafbfc;
    /* 13px - 16px */
    --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);
    /* 31px - 49px */
    --headerFontSize: clamp(1.9375rem, 3.9vw, 3.0625rem);
    --bodyFontSize: 1rem;
    /* 60px - 100px top and bottom */
    --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;
}

body {
    margin: 0;
    padding: 0;
}

*, *:before, *:after {
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
    margin: 0 0 1rem 0;
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

/* Add this as it's own dark.css file and linked on all pages */
/*-- -------------------------- -->
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
    #dark-mode-toggle .moon {
      /* change to whatever you need */
      fill: #fff;
    }
  }
                                  `, "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA;IACI,uYAAuY;IACvY,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,yBAAyB;IACzB,sBAAsB;IACtB,wBAAwB;IACxB,6BAA6B;IAC7B,gBAAgB;IAChB,+CAA+C;IAC/C,gBAAgB;IAChB,oDAAoD;IACpD,oBAAoB;IACpB,gCAAgC;IAChC,sDAAsD;AAC1D;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,qDAAqD;IACrD,sBAAsB;AAC1B;AACA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,qBAAqB;IACrB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,SAAS;IACT,2BAA2B;AAC/B;;AAEA,+DAA+D;AAC/D;;kCAEkC;AAClC,WAAW;AACX;IACI;MACE,eAAe;MACf,iBAAiB;MACjB,iBAAiB;MACjB,6BAA6B;IAC/B;IACA;MACE,6BAA6B;IAC/B;IACA;;;;;;;;;;;MAWE,gCAAgC;IAClC;IACA;MACE,aAAa;IACf;IACA;MACE,yBAAyB;IAC3B;IACA;MACE,oFAAoF;MACpF,aAAa;IACf;EACF;EACA;;oCAEkC;EAClC,WAAW;EACX;IACE;MACE,gCAAgC;MAChC,UAAU;IACZ;IACA;MACE,iCAAiC;MACjC,UAAU;IACZ;IACA;MACE,cAAc;MACd,kBAAkB;MAClB,QAAQ;MACR,2BAA2B;MAC3B,cAAc;MACd,WAAW;MACX,YAAY;MACZ,uBAAuB;MACvB,YAAY;MACZ,gBAAgB;MAChB,UAAU;IACZ;IACA;;MAEE,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,gCAAgC;MAChC,gBAAgB;MAChB,iBAAiB;MACjB,oBAAoB;IACtB;IACA;MACE,UAAU;MACV;;2BAEqB;MACrB,UAAU;IACZ;IACA;MACE,UAAU;MACV,gCAAgC;MAChC,UAAU;MACV;8BACwB;IAC1B;EACF;EACA,YAAY;EACZ;IACE;MACE,kBAAkB;MAClB,SAAS;MACT,WAAW;MACX,eAAe;MACf,qBAAqB;MACrB,mBAAmB;IACrB;IACA;MACE,gCAAgC;MAChC,UAAU;IACZ;EACF","sourcesContent":[":root {\n    /* Add these styles to your global stylesheet, which is used across all site pages. You only need to do this once. All elements in the library derive their variables and base styles from this central sheet, simplifying site-wide edits. For instance, if you want to modify how your h2's appear across the site, you just update it once in the global styles, and the changes apply everywhere. */\n    --primary: #ff6a3e;\n    --primaryLight: #ffba43;\n    --secondary: #ffba43;\n    --secondaryLight: #ffba43;\n    --headerColor: #1a1a1a;\n    --bodyTextColor: #4e4b66;\n    --bodyTextColorWhite: #fafbfc;\n    /* 13px - 16px */\n    --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);\n    /* 31px - 49px */\n    --headerFontSize: clamp(1.9375rem, 3.9vw, 3.0625rem);\n    --bodyFontSize: 1rem;\n    /* 60px - 100px top and bottom */\n    --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n*, *:before, *:after {\n    /* prevents padding from affecting height and width */\n    box-sizing: border-box;\n}\n.cs-topper {\n    font-size: var(--topperFontSize);\n    line-height: 1.2em;\n    text-transform: uppercase;\n    text-align: inherit;\n    letter-spacing: .1em;\n    font-weight: 700;\n    color: var(--primary);\n    margin-bottom: 0.25rem;\n    display: block;\n}\n\n.cs-title {\n    font-size: var(--headerFontSize);\n    font-weight: 900;\n    line-height: 1.2em;\n    text-align: inherit;\n    max-width: 43.75rem;\n    margin: 0 0 1rem 0;\n    color: var(--headerColor);\n    position: relative;\n}\n\n.cs-text {\n    font-size: var(--bodyFontSize);\n    line-height: 1.5em;\n    text-align: inherit;\n    width: 100%;\n    max-width: 40.625rem;\n    margin: 0;\n    color: var(--bodyTextColor);\n}\n\n/* Add this as it's own dark.css file and linked on all pages */\n/*-- -------------------------- -->\n<---      Core Dark Styles      -->\n<--- -------------------------- -*/\n/* Mobile */\n@media only screen and (min-width: 0rem) {\n    :root {\n      --dark: #082032;\n      --medium: #2c394b;\n      --accent: #334756;\n      --bodyTextColorWhite: #fafbfc;\n    }\n    body.dark-mode {\n      background-color: var(--dark);\n    }\n    body.dark-mode p,\n    body.dark-mode li,\n    body.dark-mode h1,\n    body.dark-mode h2,\n    body.dark-mode h3,\n    body.dark-mode h4,\n    body.dark-mode h5,\n    body.dark-mode h6,\n    body.dark-mode .cs-title,\n    body.dark-mode .cs-text,\n    body.dark-mode .cs-li {\n      color: var(--bodyTextColorWhite);\n    }\n    body.dark-mode .light {\n      display: none;\n    }\n    body.dark-mode .dark {\n      display: block !important;\n    }\n    .dark {\n      /* class used to hide elements that only need to be seen when dark mode is enabled */\n      display: none;\n    }\n  }\n  /*-- -------------------------- -->\n  <---      Dark Mode Toggle      -->\n  <--- -------------------------- -*/\n  /* Mobile */\n  @media only screen and (min-width: 0rem) {\n    body.dark-mode #dark-mode-toggle .cs-sun {\n      transform: translate(-50%, -50%);\n      opacity: 1;\n    }\n    body.dark-mode #dark-mode-toggle .cs-moon {\n      transform: translate(-50%, -150%);\n      opacity: 0;\n    }\n    #dark-mode-toggle {\n      display: block;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      right: 3.75rem;\n      width: 3rem;\n      height: 3rem;\n      background: transparent;\n      border: none;\n      overflow: hidden;\n      padding: 0;\n    }\n    #dark-mode-toggle img,\n    #dark-mode-toggle svg {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 1.5625rem;\n      height: 1.5625rem;\n      pointer-events: none;\n    }\n    #dark-mode-toggle .cs-moon {\n      z-index: 2;\n      transition: transform 0.3s,\n                  opacity 0.3s,\n                  fill 0.3s;\n      fill: #000;\n    }\n    #dark-mode-toggle .cs-sun {\n      z-index: 1;\n      transform: translate(-50%, 100%);\n      opacity: 0;\n      transition: transform 0.3s,\n                  opacity 0.3s;\n    }\n  }\n  /* Desktop */\n  @media only screen and (min-width: 64rem) {\n    #dark-mode-toggle {\n      position: relative;\n      top: auto;\n      right: auto;\n      transform: none;\n      margin-left: 1.875rem;\n      margin-bottom: 0rem;\n    }\n    #dark-mode-toggle .moon {\n      /* change to whatever you need */\n      fill: #fff;\n    }\n  }\n                                  "],"sourceRoot":""}]);
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
<---      Dark Mode Toggle      -->
<--- -------------------------- -*/
/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
    body.dark-mode #dark-mode-toggle .cs-sun {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    body.dark-mode #dark-mode-toggle .cs-moon {
      opacity: 0;
      transform: translate(-50%, -150%);
      fill: #fff;
    }
    #dark-mode-toggle {
      width: 3rem;
      height: 3rem;
      padding: 0;
      background: transparent;
      border: none;
      display: block;
      position: absolute;
      top: 0.625rem;
      right: 4.375rem;
      z-index: 1000;
      overflow: hidden;
    }
    #dark-mode-toggle img,
    #dark-mode-toggle svg {
      width: 1.25rem;
      height: 1.25rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
    #dark-mode-toggle .cs-moon {
      z-index: 2;
      transition: transform 0.3s, opacity 0.3s;
    }
    #dark-mode-toggle .cs-sun {
      opacity: 0;
      z-index: 1;
      transform: translate(-50%, 100%);
      transition: transform 0.3s, opacity 0.3s;
    }
  }
  /* Desktop - 1024px */
  @media only screen and (min-width: 64rem) {
    #dark-mode-toggle {
      margin: 0;
      position: relative;
      top: auto;
      right: auto;
      transform: none;
    }
    #dark-mode-toggle:hover {
      cursor: pointer;
    }
  }
  /*-- -------------------------- -->
  <---     Mobile Navigation      -->
  <--- -------------------------- -*/
  /* Mobile - 1023px */
  @media only screen and (max-width: 63.9375rem) {
    body.cs-open {
      overflow: hidden;
    }
    #cs-navigation {
      width: 100%;
      /* prevents padding and border from affecting height and width */
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
    #cs-navigation .cs-logo {
      width: 40%;
      max-width: 9.125rem;
      height: 100%;
      margin: 0 auto 0 0;
      /* prevents padding and border from affecting height and width */
      box-sizing: border-box;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }
    #cs-navigation .cs-logo img {
      width: 100%;
      height: 100%;
      /* ensures the image never overflows the container. It stays contained within it's width and height and expands to fill it then stops once it reaches an edge */
      object-fit: contain;
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
      font-size: clamp(1rem, 2.5vw, 1.5rem);
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
    #cs-navigation .cs-button-solid {
      display: none;
    }
  }
  /* Dark Mode */
  @media only screen and (max-width: 63.9375rem) {
    body.dark-mode #cs-navigation {
      background-color: var(--dark);
    }
    body.dark-mode #cs-navigation .cs-logo {
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
      position: fixed;
      z-index: 10000;
    }
    #cs-navigation .cs-container {
      width: 100%;
      max-width: 80rem;
      margin: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1.5rem;
    }
    #cs-navigation .cs-toggle {
      display: none;
    }
    #cs-navigation .cs-logo {
      width: 18.4%;
      max-width: 21.875rem;
      height: 4.0625rem;
      /* margin-right auto pushes everything away from it to the right */
      margin: 0 auto 0 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
    }
    #cs-navigation .cs-logo img {
      width: 100%;
      height: 100%;
      /* ensures the image never overflows the container. It stays contained within it's width and height and expands to fill it then stops once it reaches an edge */
      object-fit: contain;
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
      /* 14px - 16px */
      font-size: clamp(0.875rem, 1vw, 1rem);
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
    #cs-navigation .cs-button-solid {
      font-size: 1rem;
      font-weight: 700;
      /* 46px - 56px */
      line-height: clamp(2.875em, 5.5vw, 3.5em);
      text-align: center;
      text-decoration: none;
      min-width: 9.375rem;
      margin: 0;
      /* prevents padding from adding to the width */
      box-sizing: border-box;
      padding: 0 1.5rem;
      color: #fff;
      background-color: var(--primary);
      border-radius: 0.25rem;
      display: inline-block;
      position: relative;
      z-index: 1;
    }
    #cs-navigation .cs-button-solid:before {
      content: "";
      width: 0%;
      height: 100%;
      background: #000;
      opacity: 1;
      border-radius: 0.25rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: width 0.3s;
    }
    #cs-navigation .cs-button-solid:hover:before {
      width: 100%;
    }
  }
  /* Dark Mode */
  @media only screen and (min-width: 64rem) {
    body.dark-mode #cs-navigation {
      background-color: var(--dark);
    }
    body.dark-mode #cs-navigation .cs-logo {
      /* makes it turn white */
      filter: grayscale(1) brightness(1000%);
    }
    body.dark-mode #cs-navigation .cs-li-link {
      color: var(--bodyTextColorWhite);
    }
    body.dark-mode #cs-navigation .cs-li-link:before {
      background-color: var(--primaryLight);
    }
  }`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;;kCAEkC;AAClC,mBAAmB;AACnB;IACI;MACE,UAAU;MACV,gCAAgC;IAClC;IACA;MACE,UAAU;MACV,iCAAiC;MACjC,UAAU;IACZ;IACA;MACE,WAAW;MACX,YAAY;MACZ,UAAU;MACV,uBAAuB;MACvB,YAAY;MACZ,cAAc;MACd,kBAAkB;MAClB,aAAa;MACb,eAAe;MACf,aAAa;MACb,gBAAgB;IAClB;IACA;;MAEE,cAAc;MACd,eAAe;MACf,kBAAkB;MAClB,QAAQ;MACR,SAAS;MACT,gCAAgC;MAChC,oBAAoB;IACtB;IACA;MACE,UAAU;MACV,wCAAwC;IAC1C;IACA;MACE,UAAU;MACV,UAAU;MACV,gCAAgC;MAChC,wCAAwC;IAC1C;EACF;EACA,qBAAqB;EACrB;IACE;MACE,SAAS;MACT,kBAAkB;MAClB,SAAS;MACT,WAAW;MACX,eAAe;IACjB;IACA;MACE,eAAe;IACjB;EACF;EACA;;oCAEkC;EAClC,oBAAoB;EACpB;IACE;MACE,gBAAgB;IAClB;IACA;MACE,WAAW;MACX,gEAAgE;MAChE,sBAAsB;MACtB,qBAAqB;MACrB,sBAAsB;MACtB,iDAAiD;MACjD,eAAe;MACf,cAAc;IAChB;IACA;MACE,WAAW;MACX,WAAW;MACX,WAAW;MACX,8BAA8B;MAC9B,UAAU;MACV,cAAc;MACd,kBAAkB;MAClB,SAAS;MACT,QAAQ;MACR,cAAc;MACd,qCAAqC;MACrC,mCAAmC;MACnC,2BAA2B;IAC7B;IACA;MACE,aAAa;MACb,UAAU;IACZ;IACA;MACE,UAAU;MACV,oBAAoB;MACpB,uBAAuB;IACzB;IACA;MACE,UAAU;MACV,wBAAwB;IAC1B;IACA;MACE,WAAW;MACX,aAAa;MACb,yBAAyB;MACzB,mBAAmB;IACrB;IACA;MACE,UAAU;MACV,mBAAmB;MACnB,YAAY;MACZ,kBAAkB;MAClB,gEAAgE;MAChE,sBAAsB;MACtB,UAAU;MACV,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,WAAW;IACb;IACA;MACE,WAAW;MACX,YAAY;MACZ,+JAA+J;MAC/J,mBAAmB;IACrB;IACA;MACE,gBAAgB;MAChB,gCAAgC;MAChC,iCAAiC;MACjC,kBAAkB;MAClB,6BAA6B;MAC7B,YAAY;MACZ,sBAAsB;MACtB,aAAa;MACb,uBAAuB;MACvB,mBAAmB;IACrB;IACA;MACE,QAAQ;MACR,+CAA+C;IACjD;IACA;MACE,QAAQ;MACR,8DAA8D;MAC9D,wBAAwB;IAC1B;IACA;MACE,UAAU;MACV,YAAY;IACd;IACA;MACE,gBAAgB;MAChB,kCAAkC;MAClC,gBAAgB;MAChB,oCAAoC;MACpC,kBAAkB;IACpB;IACA;MACE,WAAW;MACX,WAAW;MACX,yBAAyB;MACzB,kBAAkB;MAClB,kBAAkB;MAClB,SAAS;MACT,2BAA2B;IAC7B;IACA;MACE,MAAM;MACN,+CAA+C;MAC/C,wBAAwB;MACxB,+BAA+B;MAC/B,2BAA2B;MAC3B,6BAA6B;MAC7B,wBAAwB;IAC1B;IACA;MACE,QAAQ;MACR,4CAA4C;MAC5C,+CAA+C;MAC/C,wBAAwB;MACxB,+BAA+B;MAC/B,2BAA2B;MAC3B,6BAA6B;IAC/B;IACA;MACE,SAAS;MACT,qCAAqC;IACvC;IACA;MACE,WAAW;MACX,YAAY;MACZ,qBAAqB;MACrB,sBAAsB;MACtB,iDAAiD;MACjD,UAAU;MACV,kBAAkB;MAClB,SAAS;MACT,OAAO;MACP,WAAW;MACX,gBAAgB;MAChB,oBAAoB;MACpB,wCAAwC;MACxC,qBAAqB;IACvB;IACA;MACE,WAAW;MACX,YAAY;MACZ,gBAAgB;MAChB,SAAS;MACT,mBAAmB;MACnB,aAAa;MACb,sBAAsB;MACtB,2BAA2B;MAC3B,mBAAmB;MACnB,YAAY;MACZ,gBAAgB;IAClB;IACA;MACE,kBAAkB;MAClB,gBAAgB;MAChB,WAAW;MACX,eAAe;MACf,UAAU;MACV,iCAAiC;MACjC,gCAAgC;MAChC,wCAAwC;IAC1C;IACA;MACE,uBAAuB;IACzB;IACA;MACE,sBAAsB;IACxB;IACA;MACE,uBAAuB;IACzB;IACA;MACE,sBAAsB;IACxB;IACA;MACE,uBAAuB;IACzB;IACA;MACE,sBAAsB;IACxB;IACA;MACE,uBAAuB;IACzB;IACA;MACE,sBAAsB;IACxB;IACA;MACE,uBAAuB;IACzB;IACA;MACE,sBAAsB;IACxB;IACA;MACE,uBAAuB;IACzB;IACA;MACE,sBAAsB;IACxB;IACA;MACE,uBAAuB;IACzB;IACA;MACE,gBAAgB;MAChB,qCAAqC;MACrC,kBAAkB;MAClB,qBAAqB;MACrB,SAAS;MACT,yBAAyB;MACzB,qBAAqB;MACrB,kBAAkB;IACpB;IACA;MACE,2BAA2B;MAC3B,WAAW;MACX,WAAW;MACX,WAAW;MACX,wBAAwB;MACxB,UAAU;MACV,aAAa;MACb,kBAAkB;MAClB,iBAAiB;MACjB,OAAO;IACT;IACA;MACE,cAAc;IAChB;IACA;MACE,aAAa;IACf;EACF;EACA,cAAc;EACd;IACE;MACE,6BAA6B;IAC/B;IACA;MACE,mBAAmB;MACnB,sCAAsC;IACxC;IACA;MACE,sBAAsB;IACxB;IACA;MACE,+BAA+B;IACjC;IACA;MACE,gCAAgC;IAClC;EACF;EACA;;oCAEkC;EAClC,2BAA2B;EAC3B;IACE;MACE,WAAW;MACX,gEAAgE;MAChE,sBAAsB;MACtB,eAAe;MACf,sBAAsB;MACtB,iDAAiD;MACjD,eAAe;MACf,cAAc;IAChB;IACA;MACE,WAAW;MACX,gBAAgB;MAChB,YAAY;MACZ,aAAa;MACb,yBAAyB;MACzB,mBAAmB;MACnB,WAAW;IACb;IACA;MACE,aAAa;IACf;IACA;MACE,YAAY;MACZ,oBAAoB;MACpB,iBAAiB;MACjB,kEAAkE;MAClE,kBAAkB;MAClB,UAAU;MACV,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,YAAY;IACd;IACA;MACE,WAAW;MACX,YAAY;MACZ,+JAA+J;MAC/J,mBAAmB;IACrB;IACA;MACE,WAAW;MACX,SAAS;MACT,UAAU;MACV,aAAa;MACb,2BAA2B;MAC3B,mBAAmB;MACnB,gBAAgB;MAChB,mCAAmC;IACrC;IACA;MACE,gBAAgB;MAChB,eAAe;MACf,sCAAsC;MACtC,UAAU;IACZ;IACA;MACE,gBAAgB;MAChB,qCAAqC;MACrC,kBAAkB;MAClB,qBAAqB;MACrB,SAAS;MACT,2BAA2B;MAC3B,cAAc;MACd,kBAAkB;IACpB;IACA;MACE,WAAW;IACb;IACA;MACE,WAAW;IACb;IACA;MACE,2BAA2B;MAC3B,WAAW;MACX,SAAS;MACT,WAAW;MACX,0BAA0B;MAC1B,UAAU;MACV,cAAc;MACd,kBAAkB;MAClB,YAAY;MACZ,OAAO;MACP,sBAAsB;IACxB;IACA;MACE,eAAe;MACf,gBAAgB;MAChB,gBAAgB;MAChB,yCAAyC;MACzC,kBAAkB;MAClB,qBAAqB;MACrB,mBAAmB;MACnB,SAAS;MACT,8CAA8C;MAC9C,sBAAsB;MACtB,iBAAiB;MACjB,WAAW;MACX,gCAAgC;MAChC,sBAAsB;MACtB,qBAAqB;MACrB,kBAAkB;MAClB,UAAU;IACZ;IACA;MACE,WAAW;MACX,SAAS;MACT,YAAY;MACZ,gBAAgB;MAChB,UAAU;MACV,sBAAsB;MACtB,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,WAAW;MACX,sBAAsB;IACxB;IACA;MACE,WAAW;IACb;EACF;EACA,cAAc;EACd;IACE;MACE,6BAA6B;IAC/B;IACA;MACE,wBAAwB;MACxB,sCAAsC;IACxC;IACA;MACE,gCAAgC;IAClC;IACA;MACE,qCAAqC;IACvC;EACF","sourcesContent":["/*-- -------------------------- -->\n<---      Dark Mode Toggle      -->\n<--- -------------------------- -*/\n/* Mobile - 360px */\n@media only screen and (min-width: 0rem) {\n    body.dark-mode #dark-mode-toggle .cs-sun {\n      opacity: 1;\n      transform: translate(-50%, -50%);\n    }\n    body.dark-mode #dark-mode-toggle .cs-moon {\n      opacity: 0;\n      transform: translate(-50%, -150%);\n      fill: #fff;\n    }\n    #dark-mode-toggle {\n      width: 3rem;\n      height: 3rem;\n      padding: 0;\n      background: transparent;\n      border: none;\n      display: block;\n      position: absolute;\n      top: 0.625rem;\n      right: 4.375rem;\n      z-index: 1000;\n      overflow: hidden;\n    }\n    #dark-mode-toggle img,\n    #dark-mode-toggle svg {\n      width: 1.25rem;\n      height: 1.25rem;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      pointer-events: none;\n    }\n    #dark-mode-toggle .cs-moon {\n      z-index: 2;\n      transition: transform 0.3s, opacity 0.3s;\n    }\n    #dark-mode-toggle .cs-sun {\n      opacity: 0;\n      z-index: 1;\n      transform: translate(-50%, 100%);\n      transition: transform 0.3s, opacity 0.3s;\n    }\n  }\n  /* Desktop - 1024px */\n  @media only screen and (min-width: 64rem) {\n    #dark-mode-toggle {\n      margin: 0;\n      position: relative;\n      top: auto;\n      right: auto;\n      transform: none;\n    }\n    #dark-mode-toggle:hover {\n      cursor: pointer;\n    }\n  }\n  /*-- -------------------------- -->\n  <---     Mobile Navigation      -->\n  <--- -------------------------- -*/\n  /* Mobile - 1023px */\n  @media only screen and (max-width: 63.9375rem) {\n    body.cs-open {\n      overflow: hidden;\n    }\n    #cs-navigation {\n      width: 100%;\n      /* prevents padding and border from affecting height and width */\n      box-sizing: border-box;\n      padding: 0.75rem 1rem;\n      background-color: #fff;\n      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n      position: fixed;\n      z-index: 10000;\n    }\n    #cs-navigation:before {\n      content: \"\";\n      width: 100%;\n      height: 0vh;\n      background: rgba(0, 0, 0, 0.6);\n      opacity: 0;\n      display: block;\n      position: absolute;\n      top: 100%;\n      right: 0;\n      z-index: -1100;\n      transition: height 0.5s, opacity 0.5s;\n      -webkit-backdrop-filter: blur(10px);\n      backdrop-filter: blur(10px);\n    }\n    #cs-navigation.cs-active:before {\n      height: 150vh;\n      opacity: 1;\n    }\n    #cs-navigation.cs-active .cs-ul-wrapper {\n      opacity: 1;\n      transform: scaleY(1);\n      transition-delay: 0.15s;\n    }\n    #cs-navigation.cs-active .cs-li {\n      opacity: 1;\n      transform: translateY(0);\n    }\n    #cs-navigation .cs-container {\n      width: 100%;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n    }\n    #cs-navigation .cs-logo {\n      width: 40%;\n      max-width: 9.125rem;\n      height: 100%;\n      margin: 0 auto 0 0;\n      /* prevents padding and border from affecting height and width */\n      box-sizing: border-box;\n      padding: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      z-index: 10;\n    }\n    #cs-navigation .cs-logo img {\n      width: 100%;\n      height: 100%;\n      /* ensures the image never overflows the container. It stays contained within it's width and height and expands to fill it then stops once it reaches an edge */\n      object-fit: contain;\n    }\n    #cs-navigation .cs-toggle {\n      /* 44px - 48px */\n      width: clamp(2.75rem, 6vw, 3rem);\n      height: clamp(2.75rem, 6vw, 3rem);\n      margin: 0 0 0 auto;\n      background-color: transparent;\n      border: none;\n      border-radius: 0.25rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    #cs-navigation .cs-active .cs-line1 {\n      top: 50%;\n      transform: translate(-50%, -50%) rotate(225deg);\n    }\n    #cs-navigation .cs-active .cs-line2 {\n      top: 50%;\n      transform: translate(-50%, -50%) translateY(0) rotate(-225deg);\n      transform-origin: center;\n    }\n    #cs-navigation .cs-active .cs-line3 {\n      opacity: 0;\n      bottom: 100%;\n    }\n    #cs-navigation .cs-box {\n      /* 24px - 28px */\n      width: clamp(1.5rem, 2vw, 1.75rem);\n      /* 14px - 16px */\n      height: clamp(0.875rem, 1.5vw, 1rem);\n      position: relative;\n    }\n    #cs-navigation .cs-line {\n      width: 100%;\n      height: 2px;\n      background-color: #1a1a1a;\n      border-radius: 2px;\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n    #cs-navigation .cs-line1 {\n      top: 0;\n      transition: transform 0.5s, top 0.3s, left 0.3s;\n      animation-duration: 0.7s;\n      animation-timing-function: ease;\n      animation-direction: normal;\n      animation-fill-mode: forwards;\n      transform-origin: center;\n    }\n    #cs-navigation .cs-line2 {\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      transition: top 0.3s, left 0.3s, transform 0.5s;\n      animation-duration: 0.7s;\n      animation-timing-function: ease;\n      animation-direction: normal;\n      animation-fill-mode: forwards;\n    }\n    #cs-navigation .cs-line3 {\n      bottom: 0;\n      transition: bottom 0.3s, opacity 0.3s;\n    }\n    #cs-navigation .cs-ul-wrapper {\n      width: 100%;\n      height: auto;\n      padding-bottom: 2.4em;\n      background-color: #fff;\n      box-shadow: inset rgba(0, 0, 0, 0.2) 0px 8px 24px;\n      opacity: 0;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: -1;\n      overflow: hidden;\n      transform: scaleY(0);\n      transition: transform 0.4s, opacity 0.3s;\n      transform-origin: top;\n    }\n    #cs-navigation .cs-ul {\n      width: 100%;\n      height: auto;\n      max-height: 65vh;\n      margin: 0;\n      padding: 3rem 0 0 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      gap: 1.25rem;\n      overflow: scroll;\n    }\n    #cs-navigation .cs-li {\n      text-align: center;\n      list-style: none;\n      width: 100%;\n      margin-right: 0;\n      opacity: 0;\n      /* transition from these values */\n      transform: translateY(-4.375rem);\n      transition: transform 0.6s, opacity 0.9s;\n    }\n    #cs-navigation .cs-li:nth-of-type(1) {\n      transition-delay: 0.05s;\n    }\n    #cs-navigation .cs-li:nth-of-type(2) {\n      transition-delay: 0.1s;\n    }\n    #cs-navigation .cs-li:nth-of-type(3) {\n      transition-delay: 0.15s;\n    }\n    #cs-navigation .cs-li:nth-of-type(4) {\n      transition-delay: 0.2s;\n    }\n    #cs-navigation .cs-li:nth-of-type(5) {\n      transition-delay: 0.25s;\n    }\n    #cs-navigation .cs-li:nth-of-type(6) {\n      transition-delay: 0.3s;\n    }\n    #cs-navigation .cs-li:nth-of-type(7) {\n      transition-delay: 0.35s;\n    }\n    #cs-navigation .cs-li:nth-of-type(8) {\n      transition-delay: 0.4s;\n    }\n    #cs-navigation .cs-li:nth-of-type(9) {\n      transition-delay: 0.45s;\n    }\n    #cs-navigation .cs-li:nth-of-type(10) {\n      transition-delay: 0.5s;\n    }\n    #cs-navigation .cs-li:nth-of-type(11) {\n      transition-delay: 0.55s;\n    }\n    #cs-navigation .cs-li:nth-of-type(12) {\n      transition-delay: 0.6s;\n    }\n    #cs-navigation .cs-li:nth-of-type(13) {\n      transition-delay: 0.65s;\n    }\n    #cs-navigation .cs-li-link {\n      /* 16px - 24px */\n      font-size: clamp(1rem, 2.5vw, 1.5rem);\n      line-height: 1.2em;\n      text-decoration: none;\n      margin: 0;\n      color: var(--headerColor);\n      display: inline-block;\n      position: relative;\n    }\n    #cs-navigation .cs-li-link:before {\n      /* active state underline */\n      content: \"\";\n      width: 100%;\n      height: 1px;\n      background: currentColor;\n      opacity: 1;\n      display: none;\n      position: absolute;\n      bottom: -0.125rem;\n      left: 0;\n    }\n    #cs-navigation .cs-li-link.cs-active:before {\n      display: block;\n    }\n    #cs-navigation .cs-button-solid {\n      display: none;\n    }\n  }\n  /* Dark Mode */\n  @media only screen and (max-width: 63.9375rem) {\n    body.dark-mode #cs-navigation {\n      background-color: var(--dark);\n    }\n    body.dark-mode #cs-navigation .cs-logo {\n      /* makes it white */\n      filter: grayscale(1) brightness(1000%);\n    }\n    body.dark-mode #cs-navigation .cs-line {\n      background-color: #fff;\n    }\n    body.dark-mode #cs-navigation .cs-ul-wrapper {\n      background-color: var(--medium);\n    }\n    body.dark-mode #cs-navigation .cs-li-link {\n      color: var(--bodyTextColorWhite);\n    }\n  }\n  /*-- -------------------------- -->\n  <---     Desktop Navigation     -->\n  <--- -------------------------- -*/\n  /* Small Desktop - 1024px */\n  @media only screen and (min-width: 64rem) {\n    #cs-navigation {\n      width: 100%;\n      /* prevents padding and border from affecting height and width */\n      box-sizing: border-box;\n      padding: 0 1rem;\n      background-color: #fff;\n      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n      position: fixed;\n      z-index: 10000;\n    }\n    #cs-navigation .cs-container {\n      width: 100%;\n      max-width: 80rem;\n      margin: auto;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      gap: 1.5rem;\n    }\n    #cs-navigation .cs-toggle {\n      display: none;\n    }\n    #cs-navigation .cs-logo {\n      width: 18.4%;\n      max-width: 21.875rem;\n      height: 4.0625rem;\n      /* margin-right auto pushes everything away from it to the right */\n      margin: 0 auto 0 0;\n      padding: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      z-index: 100;\n    }\n    #cs-navigation .cs-logo img {\n      width: 100%;\n      height: 100%;\n      /* ensures the image never overflows the container. It stays contained within it's width and height and expands to fill it then stops once it reaches an edge */\n      object-fit: contain;\n    }\n    #cs-navigation .cs-ul {\n      width: 100%;\n      margin: 0;\n      padding: 0;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      /* 20px - 36px */\n      gap: clamp(1.25rem, 2.6vw, 2.25rem);\n    }\n    #cs-navigation .cs-li {\n      list-style: none;\n      padding: 2rem 0;\n      /* prevent flexbox from squishing it */\n      flex: none;\n    }\n    #cs-navigation .cs-li-link {\n      /* 14px - 16px */\n      font-size: clamp(0.875rem, 1vw, 1rem);\n      line-height: 1.5em;\n      text-decoration: none;\n      margin: 0;\n      color: var(--bodyTextColor);\n      display: block;\n      position: relative;\n    }\n    #cs-navigation .cs-li-link:hover:before {\n      width: 100%;\n    }\n    #cs-navigation .cs-li-link.cs-active:before {\n      width: 100%;\n    }\n    #cs-navigation .cs-li-link:before {\n      /* active state underline */\n      content: \"\";\n      width: 0%;\n      height: 2px;\n      background: var(--primary);\n      opacity: 1;\n      display: block;\n      position: absolute;\n      bottom: 0rem;\n      left: 0;\n      transition: width 0.3s;\n    }\n    #cs-navigation .cs-button-solid {\n      font-size: 1rem;\n      font-weight: 700;\n      /* 46px - 56px */\n      line-height: clamp(2.875em, 5.5vw, 3.5em);\n      text-align: center;\n      text-decoration: none;\n      min-width: 9.375rem;\n      margin: 0;\n      /* prevents padding from adding to the width */\n      box-sizing: border-box;\n      padding: 0 1.5rem;\n      color: #fff;\n      background-color: var(--primary);\n      border-radius: 0.25rem;\n      display: inline-block;\n      position: relative;\n      z-index: 1;\n    }\n    #cs-navigation .cs-button-solid:before {\n      content: \"\";\n      width: 0%;\n      height: 100%;\n      background: #000;\n      opacity: 1;\n      border-radius: 0.25rem;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: -1;\n      transition: width 0.3s;\n    }\n    #cs-navigation .cs-button-solid:hover:before {\n      width: 100%;\n    }\n  }\n  /* Dark Mode */\n  @media only screen and (min-width: 64rem) {\n    body.dark-mode #cs-navigation {\n      background-color: var(--dark);\n    }\n    body.dark-mode #cs-navigation .cs-logo {\n      /* makes it turn white */\n      filter: grayscale(1) brightness(1000%);\n    }\n    body.dark-mode #cs-navigation .cs-li-link {\n      color: var(--bodyTextColorWhite);\n    }\n    body.dark-mode #cs-navigation .cs-li-link:before {\n      background-color: var(--primaryLight);\n    }\n  }"],"sourceRoot":""}]);
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
    let theme = 'light' || 0;

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sdUZBQXVGLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxh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O0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2I2QjtBQUNGOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLENBQU07O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RyZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAvKiBBZGQgdGhlc2Ugc3R5bGVzIHRvIHlvdXIgZ2xvYmFsIHN0eWxlc2hlZXQsIHdoaWNoIGlzIHVzZWQgYWNyb3NzIGFsbCBzaXRlIHBhZ2VzLiBZb3Ugb25seSBuZWVkIHRvIGRvIHRoaXMgb25jZS4gQWxsIGVsZW1lbnRzIGluIHRoZSBsaWJyYXJ5IGRlcml2ZSB0aGVpciB2YXJpYWJsZXMgYW5kIGJhc2Ugc3R5bGVzIGZyb20gdGhpcyBjZW50cmFsIHNoZWV0LCBzaW1wbGlmeWluZyBzaXRlLXdpZGUgZWRpdHMuIEZvciBpbnN0YW5jZSwgaWYgeW91IHdhbnQgdG8gbW9kaWZ5IGhvdyB5b3VyIGgyJ3MgYXBwZWFyIGFjcm9zcyB0aGUgc2l0ZSwgeW91IGp1c3QgdXBkYXRlIGl0IG9uY2UgaW4gdGhlIGdsb2JhbCBzdHlsZXMsIGFuZCB0aGUgY2hhbmdlcyBhcHBseSBldmVyeXdoZXJlLiAqL1xuICAgIC0tcHJpbWFyeTogI2ZmNmEzZTtcbiAgICAtLXByaW1hcnlMaWdodDogI2ZmYmE0MztcbiAgICAtLXNlY29uZGFyeTogI2ZmYmE0MztcbiAgICAtLXNlY29uZGFyeUxpZ2h0OiAjZmZiYTQzO1xuICAgIC0taGVhZGVyQ29sb3I6ICMxYTFhMWE7XG4gICAgLS1ib2R5VGV4dENvbG9yOiAjNGU0YjY2O1xuICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xuICAgIC8qIDEzcHggLSAxNnB4ICovXG4gICAgLS10b3BwZXJGb250U2l6ZTogY2xhbXAoMC44MTI1cmVtLCAxLjZ2dywgMXJlbSk7XG4gICAgLyogMzFweCAtIDQ5cHggKi9cbiAgICAtLWhlYWRlckZvbnRTaXplOiBjbGFtcCgxLjkzNzVyZW0sIDMuOXZ3LCAzLjA2MjVyZW0pO1xuICAgIC0tYm9keUZvbnRTaXplOiAxcmVtO1xuICAgIC8qIDYwcHggLSAxMDBweCB0b3AgYW5kIGJvdHRvbSAqL1xuICAgIC0tc2VjdGlvblBhZGRpbmc6IGNsYW1wKDMuNzVyZW0sIDcuODJ2dywgNi4yNXJlbSkgMXJlbTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNzLXRvcHBlciB7XG4gICAgZm9udC1zaXplOiB2YXIoLS10b3BwZXJGb250U2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3MtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyRm9udFNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgbWF4LXdpZHRoOiA0My43NXJlbTtcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jcy10ZXh0IHtcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MC42MjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcbn1cblxuLyogQWRkIHRoaXMgYXMgaXQncyBvd24gZGFyay5jc3MgZmlsZSBhbmQgbGlua2VkIG9uIGFsbCBwYWdlcyAqL1xuLyotLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtLT5cbjwtLS0gICAgICBDb3JlIERhcmsgU3R5bGVzICAgICAgLS0+XG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuLyogTW9iaWxlICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICA6cm9vdCB7XG4gICAgICAtLWRhcms6ICMwODIwMzI7XG4gICAgICAtLW1lZGl1bTogIzJjMzk0YjtcbiAgICAgIC0tYWNjZW50OiAjMzM0NzU2O1xuICAgICAgLS1ib2R5VGV4dENvbG9yV2hpdGU6ICNmYWZiZmM7XG4gICAgfVxuICAgIGJvZHkuZGFyay1tb2RlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cbiAgICBib2R5LmRhcmstbW9kZSBwLFxuICAgIGJvZHkuZGFyay1tb2RlIGxpLFxuICAgIGJvZHkuZGFyay1tb2RlIGgxLFxuICAgIGJvZHkuZGFyay1tb2RlIGgyLFxuICAgIGJvZHkuZGFyay1tb2RlIGgzLFxuICAgIGJvZHkuZGFyay1tb2RlIGg0LFxuICAgIGJvZHkuZGFyay1tb2RlIGg1LFxuICAgIGJvZHkuZGFyay1tb2RlIGg2LFxuICAgIGJvZHkuZGFyay1tb2RlIC5jcy10aXRsZSxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGV4dCxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtbGkge1xuICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3JXaGl0ZSk7XG4gICAgfVxuICAgIGJvZHkuZGFyay1tb2RlIC5saWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBib2R5LmRhcmstbW9kZSAuZGFyayB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGFyayB7XG4gICAgICAvKiBjbGFzcyB1c2VkIHRvIGhpZGUgZWxlbWVudHMgdGhhdCBvbmx5IG5lZWQgdG8gYmUgc2VlbiB3aGVuIGRhcmsgbW9kZSBpcyBlbmFibGVkICovXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICAgRGFyayBNb2RlIFRvZ2dsZSAgICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuICAvKiBNb2JpbGUgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLXN1biB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICByaWdodDogMy43NXJlbTtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgI2RhcmstbW9kZS10b2dnbGUgaW1nLFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICAgIGhlaWdodDogMS41NjI1cmVtO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHkgMC4zcyxcbiAgICAgICAgICAgICAgICAgIGZpbGwgMC4zcztcbiAgICAgIGZpbGw6ICMwMDA7XG4gICAgfVxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1zdW4ge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgfVxuICAvKiBEZXNrdG9wICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxLjg3NXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgfVxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5tb29uIHtcbiAgICAgIC8qIGNoYW5nZSB0byB3aGF0ZXZlciB5b3UgbmVlZCAqL1xuICAgICAgZmlsbDogI2ZmZjtcbiAgICB9XG4gIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVZQUF1WTtJQUN2WSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsb0RBQW9EO0lBQ3BELG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7O0FBRUEsK0RBQStEO0FBQy9EOztrQ0FFa0M7QUFDbEMsV0FBVztBQUNYO0lBQ0k7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQiw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLDZCQUE2QjtJQUMvQjtJQUNBOzs7Ozs7Ozs7OztNQVdFLGdDQUFnQztJQUNsQztJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLG9GQUFvRjtNQUNwRixhQUFhO0lBQ2Y7RUFDRjtFQUNBOztvQ0FFa0M7RUFDbEMsV0FBVztFQUNYO0lBQ0U7TUFDRSxnQ0FBZ0M7TUFDaEMsVUFBVTtJQUNaO0lBQ0E7TUFDRSxpQ0FBaUM7TUFDakMsVUFBVTtJQUNaO0lBQ0E7TUFDRSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUiwyQkFBMkI7TUFDM0IsY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsVUFBVTtJQUNaO0lBQ0E7O01BRUUsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsZ0NBQWdDO01BQ2hDLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSxVQUFVO01BQ1Y7OzJCQUVxQjtNQUNyQixVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDVixnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWOzhCQUN3QjtJQUMxQjtFQUNGO0VBQ0EsWUFBWTtFQUNaO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxlQUFlO01BQ2YscUJBQXFCO01BQ3JCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZ0NBQWdDO01BQ2hDLFVBQVU7SUFDWjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLyogQWRkIHRoZXNlIHN0eWxlcyB0byB5b3VyIGdsb2JhbCBzdHlsZXNoZWV0LCB3aGljaCBpcyB1c2VkIGFjcm9zcyBhbGwgc2l0ZSBwYWdlcy4gWW91IG9ubHkgbmVlZCB0byBkbyB0aGlzIG9uY2UuIEFsbCBlbGVtZW50cyBpbiB0aGUgbGlicmFyeSBkZXJpdmUgdGhlaXIgdmFyaWFibGVzIGFuZCBiYXNlIHN0eWxlcyBmcm9tIHRoaXMgY2VudHJhbCBzaGVldCwgc2ltcGxpZnlpbmcgc2l0ZS13aWRlIGVkaXRzLiBGb3IgaW5zdGFuY2UsIGlmIHlvdSB3YW50IHRvIG1vZGlmeSBob3cgeW91ciBoMidzIGFwcGVhciBhY3Jvc3MgdGhlIHNpdGUsIHlvdSBqdXN0IHVwZGF0ZSBpdCBvbmNlIGluIHRoZSBnbG9iYWwgc3R5bGVzLCBhbmQgdGhlIGNoYW5nZXMgYXBwbHkgZXZlcnl3aGVyZS4gKi9cXG4gICAgLS1wcmltYXJ5OiAjZmY2YTNlO1xcbiAgICAtLXByaW1hcnlMaWdodDogI2ZmYmE0MztcXG4gICAgLS1zZWNvbmRhcnk6ICNmZmJhNDM7XFxuICAgIC0tc2Vjb25kYXJ5TGlnaHQ6ICNmZmJhNDM7XFxuICAgIC0taGVhZGVyQ29sb3I6ICMxYTFhMWE7XFxuICAgIC0tYm9keVRleHRDb2xvcjogIzRlNGI2NjtcXG4gICAgLS1ib2R5VGV4dENvbG9yV2hpdGU6ICNmYWZiZmM7XFxuICAgIC8qIDEzcHggLSAxNnB4ICovXFxuICAgIC0tdG9wcGVyRm9udFNpemU6IGNsYW1wKDAuODEyNXJlbSwgMS42dncsIDFyZW0pO1xcbiAgICAvKiAzMXB4IC0gNDlweCAqL1xcbiAgICAtLWhlYWRlckZvbnRTaXplOiBjbGFtcCgxLjkzNzVyZW0sIDMuOXZ3LCAzLjA2MjVyZW0pO1xcbiAgICAtLWJvZHlGb250U2l6ZTogMXJlbTtcXG4gICAgLyogNjBweCAtIDEwMHB4IHRvcCBhbmQgYm90dG9tICovXFxuICAgIC0tc2VjdGlvblBhZGRpbmc6IGNsYW1wKDMuNzVyZW0sIDcuODJ2dywgNi4yNXJlbSkgMXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmNzLXRvcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdG9wcGVyRm9udFNpemUpO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY3MtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRlckZvbnRTaXplKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgICBtYXgtd2lkdGg6IDQzLjc1cmVtO1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNzLXRleHQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWJvZHlGb250U2l6ZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAuNjI1cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG59XFxuXFxuLyogQWRkIHRoaXMgYXMgaXQncyBvd24gZGFyay5jc3MgZmlsZSBhbmQgbGlua2VkIG9uIGFsbCBwYWdlcyAqL1xcbi8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuPC0tLSAgICAgIENvcmUgRGFyayBTdHlsZXMgICAgICAtLT5cXG48LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xcbi8qIE1vYmlsZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgLS1kYXJrOiAjMDgyMDMyO1xcbiAgICAgIC0tbWVkaXVtOiAjMmMzOTRiO1xcbiAgICAgIC0tYWNjZW50OiAjMzM0NzU2O1xcbiAgICAgIC0tYm9keVRleHRDb2xvcldoaXRlOiAjZmFmYmZjO1xcbiAgICB9XFxuICAgIGJvZHkuZGFyay1tb2RlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcbiAgICBib2R5LmRhcmstbW9kZSBwLFxcbiAgICBib2R5LmRhcmstbW9kZSBsaSxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDEsXFxuICAgIGJvZHkuZGFyay1tb2RlIGgyLFxcbiAgICBib2R5LmRhcmstbW9kZSBoMyxcXG4gICAgYm9keS5kYXJrLW1vZGUgaDQsXFxuICAgIGJvZHkuZGFyay1tb2RlIGg1LFxcbiAgICBib2R5LmRhcmstbW9kZSBoNixcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLXRpdGxlLFxcbiAgICBib2R5LmRhcmstbW9kZSAuY3MtdGV4dCxcXG4gICAgYm9keS5kYXJrLW1vZGUgLmNzLWxpIHtcXG4gICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcbiAgICBib2R5LmRhcmstbW9kZSAubGlnaHQge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgYm9keS5kYXJrLW1vZGUgLmRhcmsge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmRhcmsge1xcbiAgICAgIC8qIGNsYXNzIHVzZWQgdG8gaGlkZSBlbGVtZW50cyB0aGF0IG9ubHkgbmVlZCB0byBiZSBzZWVuIHdoZW4gZGFyayBtb2RlIGlzIGVuYWJsZWQgKi9cXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxuICAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbiAgPC0tLSAgICAgIERhcmsgTW9kZSBUb2dnbGUgICAgICAtLT5cXG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuICAvKiBNb2JpbGUgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICByaWdodDogMy43NXJlbTtcXG4gICAgICB3aWR0aDogM3JlbTtcXG4gICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHN2ZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMS41NjI1cmVtO1xcbiAgICAgIGhlaWdodDogMS41NjI1cmVtO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLFxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHkgMC4zcyxcXG4gICAgICAgICAgICAgICAgICBmaWxsIDAuM3M7XFxuICAgICAgZmlsbDogIzAwMDtcXG4gICAgfVxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsXFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eSAwLjNzO1xcbiAgICB9XFxuICB9XFxuICAvKiBEZXNrdG9wICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiBhdXRvO1xcbiAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgICBtYXJnaW4tbGVmdDogMS44NzVyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG4gICAgfVxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAubW9vbiB7XFxuICAgICAgLyogY2hhbmdlIHRvIHdoYXRldmVyIHlvdSBuZWVkICovXFxuICAgICAgZmlsbDogI2ZmZjtcXG4gICAgfVxcbiAgfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XG48LS0tICAgICAgRGFyayBNb2RlIFRvZ2dsZSAgICAgIC0tPlxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cbi8qIE1vYmlsZSAtIDM2MHB4ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDByZW0pIHtcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gICAgYm9keS5kYXJrLW1vZGUgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcbiAgICAgIGZpbGw6ICNmZmY7XG4gICAgfVxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcbiAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDAuNjI1cmVtO1xuICAgICAgcmlnaHQ6IDQuMzc1cmVtO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIGltZyxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBzdmcge1xuICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgfVxuICAvKiBEZXNrdG9wIC0gMTAyNHB4ICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgI2RhcmstbW9kZS10b2dnbGU6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICBNb2JpbGUgTmF2aWdhdGlvbiAgICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuICAvKiBNb2JpbGUgLSAxMDIzcHggKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XG4gICAgYm9keS5jcy1vcGVuIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLyogcHJldmVudHMgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAwdmg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICByaWdodDogMDtcbiAgICAgIHotaW5kZXg6IC0xMTAwO1xuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMsIG9wYWNpdHkgMC41cztcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmU6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMTUwdmg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmUgLmNzLXVsLXdyYXBwZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtbGkge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxvZ28ge1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIG1heC13aWR0aDogOS4xMjVyZW07XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgYXV0byAwIDA7XG4gICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1sb2dvIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC8qIGVuc3VyZXMgdGhlIGltYWdlIG5ldmVyIG92ZXJmbG93cyB0aGUgY29udGFpbmVyLiBJdCBzdGF5cyBjb250YWluZWQgd2l0aGluIGl0J3Mgd2lkdGggYW5kIGhlaWdodCBhbmQgZXhwYW5kcyB0byBmaWxsIGl0IHRoZW4gc3RvcHMgb25jZSBpdCByZWFjaGVzIGFuIGVkZ2UgKi9cbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy10b2dnbGUge1xuICAgICAgLyogNDRweCAtIDQ4cHggKi9cbiAgICAgIHdpZHRoOiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xuICAgICAgaGVpZ2h0OiBjbGFtcCgyLjc1cmVtLCA2dncsIDNyZW0pO1xuICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTEge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjI1ZGVnKTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTIge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtMjI1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTMge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGJvdHRvbTogMTAwJTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWJveCB7XG4gICAgICAvKiAyNHB4IC0gMjhweCAqL1xuICAgICAgd2lkdGg6IGNsYW1wKDEuNXJlbSwgMnZ3LCAxLjc1cmVtKTtcbiAgICAgIC8qIDE0cHggLSAxNnB4ICovXG4gICAgICBoZWlnaHQ6IGNsYW1wKDAuODc1cmVtLCAxLjV2dywgMXJlbSk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTEge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHRvcCAwLjNzLCBsZWZ0IDAuM3M7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMiB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3MsIGxlZnQgMC4zcywgdHJhbnNmb3JtIDAuNXM7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lMyB7XG4gICAgICBib3R0b206IDA7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4zcywgb3BhY2l0eSAwLjNzO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtdWwtd3JhcHBlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyLjRlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuM3M7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzcmVtIDAgMCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxLjI1cmVtO1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAvKiB0cmFuc2l0aW9uIGZyb20gdGhlc2UgdmFsdWVzICovXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQuMzc1cmVtKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzLCBvcGFjaXR5IDAuOXM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxKSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDIpIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgzKSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDQpIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg1KSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDYpIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg3KSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDgpIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSg5KSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjQ1cztcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEwKSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTEpIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTIpIHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMykge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42NXM7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgIC8qIDE2cHggLSAyNHB4ICovXG4gICAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDIuNXZ3LCAxLjVyZW0pO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0wLjEyNXJlbTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rLmNzLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1idXR0b24tc29saWQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLyogRGFyayBNb2RlICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xuICAgIH1cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbG9nbyB7XG4gICAgICAvKiBtYWtlcyBpdCB3aGl0ZSAqL1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XG4gICAgfVxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XG4gICAgfVxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xuICAgIH1cbiAgfVxuICAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxuICA8LS0tICAgICBEZXNrdG9wIE5hdmlnYXRpb24gICAgIC0tPlxuICA8LS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0qL1xuICAvKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRyZW0pIHtcbiAgICAjY3MtbmF2aWdhdGlvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8qIHByZXZlbnRzIHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBoZWlnaHQgYW5kIHdpZHRoICovXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogODByZW07XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbG9nbyB7XG4gICAgICB3aWR0aDogMTguNCU7XG4gICAgICBtYXgtd2lkdGg6IDIxLjg3NXJlbTtcbiAgICAgIGhlaWdodDogNC4wNjI1cmVtO1xuICAgICAgLyogbWFyZ2luLXJpZ2h0IGF1dG8gcHVzaGVzIGV2ZXJ5dGhpbmcgYXdheSBmcm9tIGl0IHRvIHRoZSByaWdodCAqL1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1sb2dvIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC8qIGVuc3VyZXMgdGhlIGltYWdlIG5ldmVyIG92ZXJmbG93cyB0aGUgY29udGFpbmVyLiBJdCBzdGF5cyBjb250YWluZWQgd2l0aGluIGl0J3Mgd2lkdGggYW5kIGhlaWdodCBhbmQgZXhwYW5kcyB0byBmaWxsIGl0IHRoZW4gc3RvcHMgb25jZSBpdCByZWFjaGVzIGFuIGVkZ2UgKi9cbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC8qIDIwcHggLSAzNnB4ICovXG4gICAgICBnYXA6IGNsYW1wKDEuMjVyZW0sIDIuNnZ3LCAyLjI1cmVtKTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAvKiBwcmV2ZW50IGZsZXhib3ggZnJvbSBzcXVpc2hpbmcgaXQgKi9cbiAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcbiAgICAgIC8qIDE0cHggLSAxNnB4ICovXG4gICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAxdncsIDFyZW0pO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHZhcigtLWJvZHlUZXh0Q29sb3IpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rOmhvdmVyOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsuY3MtYWN0aXZlOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMCU7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwcmVtO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgfVxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1idXR0b24tc29saWQge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIC8qIDQ2cHggLSA1NnB4ICovXG4gICAgICBsaW5lLWhlaWdodDogY2xhbXAoMi44NzVlbSwgNS41dncsIDMuNWVtKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG1pbi13aWR0aDogOS4zNzVyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGZyb20gYWRkaW5nIHRvIHRoZSB3aWR0aCAqL1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYnV0dG9uLXNvbGlkOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICB9XG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWJ1dHRvbi1zb2xpZDpob3ZlcjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC8qIERhcmsgTW9kZSAqL1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgfVxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1sb2dvIHtcbiAgICAgIC8qIG1ha2VzIGl0IHR1cm4gd2hpdGUgKi9cbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xuICAgIH1cbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XG4gICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcbiAgICB9XG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XG4gICAgfVxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztrQ0FFa0M7QUFDbEMsbUJBQW1CO0FBQ25CO0lBQ0k7TUFDRSxVQUFVO01BQ1YsZ0NBQWdDO0lBQ2xDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsaUNBQWlDO01BQ2pDLFVBQVU7SUFDWjtJQUNBO01B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SUFDYjtJQUNBO01BQ0UsMkJBQTJCO01BQzNCLFdBQVc7TUFDWCxTQUFTO01BQ1QsV0FBVztNQUNYLDBCQUEwQjtNQUMxQixVQUFVO01BQ1YsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osT0FBTztNQUNQLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIseUNBQXlDO01BQ3pDLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLFNBQVM7TUFDVCw4Q0FBOEM7TUFDOUMsc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsZ0NBQWdDO01BQ2hDLHNCQUFzQjtNQUN0QixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLFVBQVU7SUFDWjtJQUNBO01BQ0UsV0FBVztNQUNYLFNBQVM7TUFDVCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLE1BQU07TUFDTixPQUFPO01BQ1AsV0FBVztNQUNYLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7RUFDQSxjQUFjO0VBQ2Q7SUFDRTtNQUNFLDZCQUE2QjtJQUMvQjtJQUNBO01BQ0Usd0JBQXdCO01BQ3hCLHNDQUFzQztJQUN4QztJQUNBO01BQ0UsZ0NBQWdDO0lBQ2xDO0lBQ0E7TUFDRSxxQ0FBcUM7SUFDdkM7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbjwtLS0gICAgICBEYXJrIE1vZGUgVG9nZ2xlICAgICAgLS0+XFxuPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4vKiBNb2JpbGUgLSAzNjBweCAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB9XFxuICAgIGJvZHkuZGFyay1tb2RlICNkYXJrLW1vZGUtdG9nZ2xlIC5jcy1tb29uIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcXG4gICAgICBmaWxsOiAjZmZmO1xcbiAgICB9XFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHtcXG4gICAgICB3aWR0aDogM3JlbTtcXG4gICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMC42MjVyZW07XFxuICAgICAgcmlnaHQ6IDQuMzc1cmVtO1xcbiAgICAgIHotaW5kZXg6IDEwMDA7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSBpbWcsXFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlIHN2ZyB7XFxuICAgICAgd2lkdGg6IDEuMjVyZW07XFxuICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG4gICAgI2RhcmstbW9kZS10b2dnbGUgLmNzLW1vb24ge1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSAuY3Mtc3VuIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcXG4gICAgfVxcbiAgfVxcbiAgLyogRGVza3RvcCAtIDEwMjRweCAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NHJlbSkge1xcbiAgICAjZGFyay1tb2RlLXRvZ2dsZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IGF1dG87XFxuICAgICAgcmlnaHQ6IGF1dG87XFxuICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICB9XFxuICAgICNkYXJrLW1vZGUtdG9nZ2xlOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG4gIC8qLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLS0+XFxuICA8LS0tICAgICBNb2JpbGUgTmF2aWdhdGlvbiAgICAgIC0tPlxcbiAgPC0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAtKi9cXG4gIC8qIE1vYmlsZSAtIDEwMjNweCAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1cmVtKSB7XFxuICAgIGJvZHkuY3Mtb3BlbiB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgLyogcHJldmVudHMgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGhlaWdodCBhbmQgd2lkdGggKi9cXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgIHotaW5kZXg6IDEwMDAwO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAwdmg7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTAwJTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB6LWluZGV4OiAtMTEwMDtcXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cywgb3BhY2l0eSAwLjVzO1xcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbi5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICBoZWlnaHQ6IDE1MHZoO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24uY3MtYWN0aXZlIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uLmNzLWFjdGl2ZSAuY3MtbGkge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1jb250YWluZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1sb2dvIHtcXG4gICAgICB3aWR0aDogNDAlO1xcbiAgICAgIG1heC13aWR0aDogOS4xMjVyZW07XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcXG4gICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgei1pbmRleDogMTA7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxvZ28gaW1nIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgLyogZW5zdXJlcyB0aGUgaW1hZ2UgbmV2ZXIgb3ZlcmZsb3dzIHRoZSBjb250YWluZXIuIEl0IHN0YXlzIGNvbnRhaW5lZCB3aXRoaW4gaXQncyB3aWR0aCBhbmQgaGVpZ2h0IGFuZCBleHBhbmRzIHRvIGZpbGwgaXQgdGhlbiBzdG9wcyBvbmNlIGl0IHJlYWNoZXMgYW4gZWRnZSAqL1xcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XFxuICAgICAgLyogNDRweCAtIDQ4cHggKi9cXG4gICAgICB3aWR0aDogY2xhbXAoMi43NXJlbSwgNnZ3LCAzcmVtKTtcXG4gICAgICBoZWlnaHQ6IGNsYW1wKDIuNzVyZW0sIDZ2dywgM3JlbSk7XFxuICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMSB7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIyNWRlZyk7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWFjdGl2ZSAuY3MtbGluZTIge1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHRyYW5zbGF0ZVkoMCkgcm90YXRlKC0yMjVkZWcpO1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYWN0aXZlIC5jcy1saW5lMyB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBib3R0b206IDEwMCU7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWJveCB7XFxuICAgICAgLyogMjRweCAtIDI4cHggKi9cXG4gICAgICB3aWR0aDogY2xhbXAoMS41cmVtLCAydncsIDEuNzVyZW0pO1xcbiAgICAgIC8qIDE0cHggLSAxNnB4ICovXFxuICAgICAgaGVpZ2h0OiBjbGFtcCgwLjg3NXJlbSwgMS41dncsIDFyZW0pO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUxIHtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHRvcCAwLjNzLCBsZWZ0IDAuM3M7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTIge1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzLCBsZWZ0IDAuM3MsIHRyYW5zZm9ybSAwLjVzO1xcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGluZTMge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4zcywgb3BhY2l0eSAwLjNzO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bC13cmFwcGVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZy1ib3R0b206IDIuNGVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDEwMCU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB6LWluZGV4OiAtMTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuM3M7XFxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIG1heC1oZWlnaHQ6IDY1dmg7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDNyZW0gMCAwIDA7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMS4yNXJlbTtcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgLyogdHJhbnNpdGlvbiBmcm9tIHRoZXNlIHZhbHVlcyAqL1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC4zNzVyZW0pO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzLCBvcGFjaXR5IDAuOXM7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDMpIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNCkge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDUpIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoNikge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDcpIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM1cztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDkpIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjQ1cztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGk6bnRoLW9mLXR5cGUoMTApIHtcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMSkge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saTpudGgtb2YtdHlwZSgxMikge1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpOm50aC1vZi10eXBlKDEzKSB7XFxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC42NXM7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgIC8qIDE2cHggLSAyNHB4ICovXFxuICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgMS41cmVtKTtcXG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6YmVmb3JlIHtcXG4gICAgICAvKiBhY3RpdmUgc3RhdGUgdW5kZXJsaW5lICovXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtMC4xMjVyZW07XFxuICAgICAgbGVmdDogMDtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYnV0dG9uLXNvbGlkIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICB9XFxuICAvKiBEYXJrIE1vZGUgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NXJlbSkge1xcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIH1cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxvZ28ge1xcbiAgICAgIC8qIG1ha2VzIGl0IHdoaXRlICovXFxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygxMDAwJSk7XFxuICAgIH1cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpbmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIH1cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLXVsLXdyYXBwZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bSk7XFxuICAgIH1cXG4gICAgYm9keS5kYXJrLW1vZGUgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbmsge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yV2hpdGUpO1xcbiAgICB9XFxuICB9XFxuICAvKi0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC0tPlxcbiAgPC0tLSAgICAgRGVza3RvcCBOYXZpZ2F0aW9uICAgICAtLT5cXG4gIDwtLS0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLSovXFxuICAvKiBTbWFsbCBEZXNrdG9wIC0gMTAyNHB4ICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAvKiBwcmV2ZW50cyBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgaGVpZ2h0IGFuZCB3aWR0aCAqL1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgcGFkZGluZzogMCAxcmVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgei1pbmRleDogMTAwMDA7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWNvbnRhaW5lciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWF4LXdpZHRoOiA4MHJlbTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxLjVyZW07XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbG9nbyB7XFxuICAgICAgd2lkdGg6IDE4LjQlO1xcbiAgICAgIG1heC13aWR0aDogMjEuODc1cmVtO1xcbiAgICAgIGhlaWdodDogNC4wNjI1cmVtO1xcbiAgICAgIC8qIG1hcmdpbi1yaWdodCBhdXRvIHB1c2hlcyBldmVyeXRoaW5nIGF3YXkgZnJvbSBpdCB0byB0aGUgcmlnaHQgKi9cXG4gICAgICBtYXJnaW46IDAgYXV0byAwIDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgei1pbmRleDogMTAwO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1sb2dvIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIC8qIGVuc3VyZXMgdGhlIGltYWdlIG5ldmVyIG92ZXJmbG93cyB0aGUgY29udGFpbmVyLiBJdCBzdGF5cyBjb250YWluZWQgd2l0aGluIGl0J3Mgd2lkdGggYW5kIGhlaWdodCBhbmQgZXhwYW5kcyB0byBmaWxsIGl0IHRoZW4gc3RvcHMgb25jZSBpdCByZWFjaGVzIGFuIGVkZ2UgKi9cXG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy11bCB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAvKiAyMHB4IC0gMzZweCAqL1xcbiAgICAgIGdhcDogY2xhbXAoMS4yNXJlbSwgMi42dncsIDIuMjVyZW0pO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1saSB7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgICAgLyogcHJldmVudCBmbGV4Ym94IGZyb20gc3F1aXNoaW5nIGl0ICovXFxuICAgICAgZmxleDogbm9uZTtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluayB7XFxuICAgICAgLyogMTRweCAtIDE2cHggKi9cXG4gICAgICBmb250LXNpemU6IGNsYW1wKDAuODc1cmVtLCAxdncsIDFyZW0pO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1ib2R5VGV4dENvbG9yKTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG4gICAgI2NzLW5hdmlnYXRpb24gLmNzLWxpLWxpbms6aG92ZXI6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluay5jcy1hY3RpdmU6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xcbiAgICAgIC8qIGFjdGl2ZSBzdGF0ZSB1bmRlcmxpbmUgKi9cXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMCU7XFxuICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAwcmVtO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG4gICAgfVxcbiAgICAjY3MtbmF2aWdhdGlvbiAuY3MtYnV0dG9uLXNvbGlkIHtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAvKiA0NnB4IC0gNTZweCAqL1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCgyLjg3NWVtLCA1LjV2dywgMy41ZW0pO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgbWluLXdpZHRoOiA5LjM3NXJlbTtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgLyogcHJldmVudHMgcGFkZGluZyBmcm9tIGFkZGluZyB0byB0aGUgd2lkdGggKi9cXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1idXR0b24tc29saWQ6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB6LWluZGV4OiAtMTtcXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbiAgICB9XFxuICAgICNjcy1uYXZpZ2F0aW9uIC5jcy1idXR0b24tc29saWQ6aG92ZXI6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcbiAgLyogRGFyayBNb2RlICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0cmVtKSB7XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgfVxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbG9nbyB7XFxuICAgICAgLyogbWFrZXMgaXQgdHVybiB3aGl0ZSAqL1xcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMTAwMCUpO1xcbiAgICB9XFxuICAgIGJvZHkuZGFyay1tb2RlICNjcy1uYXZpZ2F0aW9uIC5jcy1saS1saW5rIHtcXG4gICAgICBjb2xvcjogdmFyKC0tYm9keVRleHRDb2xvcldoaXRlKTtcXG4gICAgfVxcbiAgICBib2R5LmRhcmstbW9kZSAjY3MtbmF2aWdhdGlvbiAuY3MtbGktbGluazpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlMaWdodCk7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG4vLyBhZGQgY2xhc3NlcyBmb3IgbW9iaWxlIG5hdmlnYXRpb24gdG9nZ2xpbmdcbnZhciBDU2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBDU25hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3MtbmF2aWdhdGlvbicpO1xuY29uc3QgQ1NoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzLW5hdmlnYXRpb24gLmNzLXRvZ2dsZScpO1xuXG5DU2hhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgQ1NoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NzLWFjdGl2ZScpO1xuICAgIENTbmF2YmFyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdjcy1hY3RpdmUnKTtcbiAgICBDU2JvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnY3Mtb3BlbicpO1xuICAgIC8vIHJ1biB0aGUgZnVuY3Rpb24gdG8gY2hlY2sgdGhlIGFyaWEtZXhwYW5kZWQgdmFsdWVcbiAgICBhcmlhRXhwYW5kZWQoKTtcbn0pO1xuXG4vLyBjaGVja3MgdGhlIHZhbHVlIG9mIGFyaWEgZXhwYW5kZWQgb24gdGhlIGNzLXVsIGFuZCBjaGFuZ2VzIGl0IGFjY29yZGluZ2x5IHdoZXRoZXIgaXQgaXMgZXhwYW5kZWQgb3Igbm90XG5mdW5jdGlvbiBhcmlhRXhwYW5kZWQoKSB7XG4gICAgY29uc3QgY3NVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcy1leHBhbmRlZCcpO1xuICAgIGNvbnN0IGNzRXhwYW5kZWQgPSBjc1VMLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuXG4gICAgaWYgKGNzRXhwYW5kZWQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgY3NVTC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNzVUwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxufVxuXG4vLyBtb2JpbGUgbmF2IHRvZ2dsZSBjb2RlXG5jb25zdCBkcm9wRG93bnMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjcy1uYXZpZ2F0aW9uIC5jcy1kcm9wZG93bicpXG4pO1xuZm9yIChjb25zdCBpdGVtIG9mIGRyb3BEb3ducykge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY3MtYWN0aXZlJyk7XG4gICAgfTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG59XG5cbi8vXG4vLyAgICBUaGUgRGFyayBNb2RlIFN5c3RlbVxuLy9cblxuLy8gaGVscGVyIGZ1bmN0aW9ucyB0byB0b2dnbGUgZGFyayBtb2RlXG5mdW5jdGlvbiBlbmFibGVEYXJrTW9kZSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG59XG5mdW5jdGlvbiBkaXNhYmxlRGFya01vZGUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbn1cblxuLy8gZGV0ZXJtaW5lcyBhIG5ldyB1c2VycyBkYXJrIG1vZGUgcHJlZmVyZW5jZXNcbmZ1bmN0aW9uIGRldGVjdENvbG9yU2NoZW1lKCkge1xuICAgIC8vIGRlZmF1bHQgdG8gdGhlIGxpZ2h0IHRoZW1lXG4gICAgbGV0IHRoZW1lID0gJ2xpZ2h0JyB8fCAnZGFyayc7XG5cbiAgICAvLyBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGEgc2F2ZWQgJ3RoZW1lJyB2YXJpYWJsZS4gaWYgaXQncyB0aGVyZSwgdGhlIHVzZXIgaGFzIHZpc2l0ZWQgYmVmb3JlLCBzbyBhcHBseSB0aGUgbmVjZXNzYXJ5IHRoZW1lIGNob2ljZXNcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHtcbiAgICAgICAgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICB9XG4gICAgLy8gaWYgaXQncyBub3QgdGhlcmUsIGNoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBoYXMgYXBwbGllZCBkYXJrIG1vZGUgcHJlZmVyZW5jZXMgdGhlbXNlbHZlcyBpbiB0aGUgYnJvd3NlclxuICAgIGVsc2UgaWYgKFxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgICAgdGhlbWUgPSAnZGFyayc7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gcHJlZmVyZW5jZSBzZXQsIHRoZSBkZWZhdWx0IG9mIGxpZ2h0IHdpbGwgYmUgdXNlZC4gYXBwbHkgYWNjb3JkaW5nbHlcbiAgICB0aGVtZSA9PT0gJ2RhcmsnID8gZW5hYmxlRGFya01vZGUoKSA6IGRpc2FibGVEYXJrTW9kZSgpO1xufVxuXG4vLyBydW4gb24gcGFnZSBsb2FkXG5kZXRlY3RDb2xvclNjaGVtZSgpO1xuXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGRhcmsgbW9kZSBidXR0b24gdG9nZ2xlXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyay1tb2RlLXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIG9uIGNsaWNrLCBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIHRoZSBkYXJrIG1vZGUgdmFsdWUsIHVzZSB0byBhcHBseSB0aGUgb3Bwb3NpdGUgb2Ygd2hhdCdzIHNhdmVkXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdsaWdodCdcbiAgICAgICAgPyBlbmFibGVEYXJrTW9kZSgpXG4gICAgICAgIDogZGlzYWJsZURhcmtNb2RlKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==