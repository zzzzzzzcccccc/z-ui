module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 214);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_raf__ = __webpack_require__(217);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/*
* @params value               当前的tab索引
* @params tabsStyle           tabs的样式
* @params lineBackGroundColor 底部下滑线的颜色
* @params activeTextStyle     激活的字体颜色
* @params inactiveTintStyle   未激活的颜色
* @params lock                是否开启左右滑动切换
* */
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'zTab',
  props: {
    value: {
      type: Number,
      required: true
    },
    tabsStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    lineBackGroundColor: {
      type: String,
      default: '#409EFF'
    },
    activeTextStyle: {
      type: Object,
      default: function _default() {
        return {
          color: '#409EFF'
        };
      }
    },
    inactiveTintStyle: {
      type: Object,
      default: function _default() {
        return {
          color: '#333'
        };
      }
    },
    lock: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      list: [],
      lineStyle: {}
    };
  },
  mounted: function mounted() {
    this.onReady();
  },

  methods: {
    onReady: function onReady() {
      this.setList();
      this.setStyle();
      this.handleTouch();
    },
    setStyle: function setStyle() {
      var _this = this;

      this.$nextTick(function () {
        _this.setLineStyle(_this.value);
        _this.mathScrollX(_this.value);
      });
    },
    setLineStyle: function setLineStyle(index) {
      // 写入下划线样式
      var tab = this.$refs.tabs[index];
      var width = tab.offsetWidth;
      var left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

      this.lineStyle = {
        width: width + 'px',
        transform: 'translateX(' + left + 'px)'
      };
    },
    setList: function setList() {
      var _this2 = this;

      // 写入tabs
      this.$children.forEach(function (item, index) {
        _this2.list.push(item.title);
      });
    },
    getActiveItem: function getActiveItem() {
      var _this3 = this;

      // 获取当前激活的tabItem
      this.$children.forEach(function (item, index) {
        item.active = index === _this3.value;
      });
    },
    clickItem: function clickItem(index) {
      // 点击tab
      this.onChange(index);
    },
    onChange: function onChange(index) {
      // tab切换变化
      this.setLineStyle(index);
      this.mathScrollX(index);

      this.$emit('input', index);
      this.$emit('change', index);
    },
    mathScrollX: function mathScrollX(index) {
      // 获取滚动的距离
      var tab = this.$refs.tabs[index];
      var nav = this.$refs.nav;
      var scrollLeft = nav.scrollLeft,
          navWidth = nav.offsetWidth;
      var offsetLeft = tab.offsetLeft,
          tabWidth = tab.offsetWidth;


      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2);
    },
    scrollTo: function scrollTo(el, from, to) {
      // 执行滚动动画
      var count = 0;
      var frames = Math.round(0.2 * 1000 / 16);
      var animate = function animate() {
        el.scrollLeft += (to - from) / frames;

        if (++count < frames) {
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_raf__["a" /* raf */])(animate);
        }
      };
      animate();
    },
    handleTouch: function handleTouch() {
      var _this4 = this;

      // 滚动事件
      if (!this.lock) {
        return;
      }

      var content = this.$refs.content;
      var index = void 0,
          startX = void 0,
          startY = void 0,
          endX = void 0,
          endY = void 0;

      content.addEventListener('touchstart', function (e) {
        e.preventDefault();

        index = _this4.value;
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
      });

      content.addEventListener('touchmove', function (e) {
        e.preventDefault();

        endX = e.touches[0].pageX;
        endY = e.touches[0].pageY;
      });

      content.addEventListener('touchend', function (e) {
        e.preventDefault();

        if (startX > endX) {
          if (index === _this4.list.length - 1) {
            return;
          }

          _this4.clickItem(index + 1);
        } else {
          if (index === 0) {
            return;
          }

          _this4.clickItem(index - 1);
        }
      });
    }
  },
  watch: {
    list: function list() {
      this.getActiveItem();
    },
    value: function value() {
      this.getActiveItem();
    }
  }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'zTabItem',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Tab__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Tab_item__ = __webpack_require__(220);



__WEBPACK_IMPORTED_MODULE_0__src_Tab__["a" /* default */].install = function (Vue) {
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_Tab__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_Tab__["a" /* default */]);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1__src_Tab_item__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_1__src_Tab_item__["a" /* default */]);
};

__WEBPACK_IMPORTED_MODULE_0__src_Tab__["a" /* default */].Item = __WEBPACK_IMPORTED_MODULE_1__src_Tab_item__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_Tab__["a" /* default */]);

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Tab_vue__ = __webpack_require__(126);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_3d3de85c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Tab_vue__ = __webpack_require__(219);
function injectStyle (ssrContext) {
  __webpack_require__(216)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Tab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_3d3de85c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Tab_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = raf;
/* unused harmony export cancel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/**
* requestAnimationFrame
* */


var isServer = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$isServer;
var prev = Date.now();

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;

  return id;
}

var root = isServer ? global : window;

var iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

var iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

function raf(fn) {
  return iRaf.call(root, fn);
}

function cancel(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(218)))

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"z-tab-container"},[_c('div',{ref:"nav",staticClass:"z-tab-title-wrapper",style:([].concat( _vm.tabsStyle ))},[_c('div',{ref:"tabsWrapper",staticClass:"z-tab-title-main"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,ref:"tabs",refInFor:true,staticClass:"z-tab-title-item",class:{ 'z-tab-title-active': index === _vm.value },on:{"click":function($event){_vm.clickItem(index)}}},[_c('span',{staticClass:"title-cell",style:([ index === _vm.value ? _vm.activeTextStyle : _vm.inactiveTintStyle ])},[_vm._v(_vm._s(item))])])})),_vm._v(" "),_c('div',{staticClass:"z-tab-title-line",style:([{ backgroundColor: ("" + _vm.lineBackGroundColor)} ].concat( _vm.lineStyle))})]),_vm._v(" "),_c('div',{ref:"content",staticClass:"z-tab-body-wrapper"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Tab_item_vue__ = __webpack_require__(127);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0db532e0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Tab_item_vue__ = __webpack_require__(221);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_script_index_0_Tab_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_1_vue_loader_lib_template_compiler_index_id_data_v_0db532e0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_7_1_vue_loader_lib_selector_type_template_index_0_Tab_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"z-tab-body-main"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = require("Vue");

/***/ })

/******/ });