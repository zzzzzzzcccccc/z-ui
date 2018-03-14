webpackJsonp([0],{

/***/ "+Lc3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("YU5P");
var core = __webpack_require__("6tbR");
var global = __webpack_require__("N+l2");
var speciesConstructor = __webpack_require__("ze7l");
var promiseResolve = __webpack_require__("suPP");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "/XeK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0OA+":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dYbq");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "0T5E":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1YwH":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "2ArX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2uXW":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("hEtQ");
var toIObject = __webpack_require__("Usa3");
var arrayIndexOf = __webpack_require__("oRKa")(false);
var IE_PROTO = __webpack_require__("LhVG")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "42xX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5DQc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5mnN":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("2uXW");
var enumBugKeys = __webpack_require__("ozb9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "6QCa":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "6tbR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8vjb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("O/qs");
var step = __webpack_require__("wrab");
var Iterators = __webpack_require__("ce1D");
var toIObject = __webpack_require__("Usa3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("gSHJ")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "AYo0":
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

/***/ "E6zZ":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("V6GX");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "ETRq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FFIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("J3ok");
var descriptor = __webpack_require__("UN7g");
var setToStringTag = __webpack_require__("hB9E");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("b72+")(IteratorPrototype, __webpack_require__("dOr6")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "FW53":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("YU5P");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("wdCC") });


/***/ }),

/***/ "Fmv8":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("b72+");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "Gbdk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Gt1d":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("Tc1J");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "HCZ1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HggN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IvmU":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "IzUM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "J2MG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "J3ok":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("0OA+");
var dPs = __webpack_require__("NGJ2");
var enumBugKeys = __webpack_require__("ozb9");
var IE_PROTO = __webpack_require__("LhVG")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("U835")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("ohHi").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "Jfpx":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("dOr6")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "Jk3D":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "KIG8":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "KRaL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Kqkc":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("llIn");
var ITERATOR = __webpack_require__("dOr6")('iterator');
var Iterators = __webpack_require__("ce1D");
module.exports = __webpack_require__("6tbR").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "LhVG":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("SCMB")('keys');
var uid = __webpack_require__("OanP");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "MF3O":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0OA+");
var IE8_DOM_DEFINE = __webpack_require__("YXo4");
var toPrimitive = __webpack_require__("uYGg");
var dP = Object.defineProperty;

exports.f = __webpack_require__("rBHx") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "MkoV":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("snHU");
__webpack_require__("u9Ca");
__webpack_require__("gzsj");
__webpack_require__("bXyW");
__webpack_require__("+Lc3");
__webpack_require__("NBZ7");
module.exports = __webpack_require__("6tbR").Promise;


/***/ }),

/***/ "N+l2":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "NBZ7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("YU5P");
var newPromiseCapability = __webpack_require__("RC9M");
var perform = __webpack_require__("Zx2m");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "NGJ2":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("MF3O");
var anObject = __webpack_require__("0OA+");
var getKeys = __webpack_require__("5mnN");

module.exports = __webpack_require__("rBHx") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "NLzl":
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

/***/ "O/qs":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "OanP":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "PbQQ":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "PksZ":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("NLzl"), __webpack_require__("KIG8")))

/***/ }),

/***/ "RC9M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("Tc1J");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "SCMB":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("N+l2");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "SUGZ":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("ykAS");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "TTJ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (
    false
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.fnContext = contextVm;
    vnode.fnOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.13';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  if (false) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (false) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (false
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}

function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("NLzl"), __webpack_require__("nAB9").setImmediate))

/***/ }),

/***/ "Tc1J":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "U835":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("dYbq");
var document = __webpack_require__("N+l2").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "UN7g":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "USui":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Usa3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("hobv");
var defined = __webpack_require__("ykAS");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "V6GX":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "Vrkd":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("ce1D");
var ITERATOR = __webpack_require__("dOr6")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "WcEd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WcIw":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("Gt1d");
var call = __webpack_require__("eZve");
var isArrayIter = __webpack_require__("Vrkd");
var anObject = __webpack_require__("0OA+");
var toLength = __webpack_require__("E6zZ");
var getIterFn = __webpack_require__("Kqkc");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "Y+IO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YU5P":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("N+l2");
var core = __webpack_require__("6tbR");
var ctx = __webpack_require__("Gt1d");
var hide = __webpack_require__("b72+");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "YXo4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("rBHx") && !__webpack_require__("IvmU")(function () {
  return Object.defineProperty(__webpack_require__("U835")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ZIOw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("b72+");


/***/ }),

/***/ "Zpxc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZuPK":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("V6GX");
var defined = __webpack_require__("ykAS");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "Zx2m":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "a3xN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b72+":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("MF3O");
var createDesc = __webpack_require__("UN7g");
module.exports = __webpack_require__("rBHx") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "bXyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("sbN1");
var global = __webpack_require__("N+l2");
var ctx = __webpack_require__("Gt1d");
var classof = __webpack_require__("llIn");
var $export = __webpack_require__("YU5P");
var isObject = __webpack_require__("dYbq");
var aFunction = __webpack_require__("Tc1J");
var anInstance = __webpack_require__("jlm0");
var forOf = __webpack_require__("WcIw");
var speciesConstructor = __webpack_require__("ze7l");
var task = __webpack_require__("pdvg").set;
var microtask = __webpack_require__("ycWB")();
var newPromiseCapabilityModule = __webpack_require__("RC9M");
var perform = __webpack_require__("Zx2m");
var promiseResolve = __webpack_require__("suPP");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("dOr6")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("Fmv8")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("hB9E")($Promise, PROMISE);
__webpack_require__("sWG3")(PROMISE);
Wrapper = __webpack_require__("6tbR")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("Jfpx")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "bZQ3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("hcud"), __esModule: true };

/***/ }),

/***/ "beey":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ce1D":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "dOr6":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("SCMB")('wks');
var uid = __webpack_require__("OanP");
var Symbol = __webpack_require__("N+l2").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dYbq":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "eT7m":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "eZve":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("0OA+");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "f5gj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fYJM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/_vue@2.5.13@vue/dist/vue.esm.js
var vue_esm = __webpack_require__("TTJ8");

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-4441285f","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_example_App = (esExports);
// CONCATENATED MODULE: ../example/App.vue
var normalizeComponent = __webpack_require__("AYo0")
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
  App,
  selectortype_template_index_0_example_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var example_App = (Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-router@3.0.1@vue-router/dist/vue-router.esm.js
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = vue_router_esm_assign({}, next);
    next._normalized = true;
    var params = vue_router_esm_assign(vue_router_esm_assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function vue_router_esm_assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (false) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ var vue_router_esm = (VueRouter);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/common/VSlider.vue
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

/* harmony default export */ var VSlider = ({
  props: {
    list: {
      type: [Array, Object],
      required: true
    },
    activePath: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    bindClick: function bindClick(item) {
      this.$emit('handleClick', item);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-53734b83","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/common/VSlider.vue
var VSlider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',[_c('ul',{staticClass:"list"},[_c('li',{staticClass:"list-header"},[_vm._v("组件列表")]),_vm._v(" "),_vm._l((_vm.list),function(item,index){return _c('li',{key:index,on:{"click":function($event){_vm.bindClick(item)}}},[_c('div',{staticClass:"list-item",class:_vm.activePath === item.path ? 'active' : ''},[_c('span',{staticClass:"list-item-label"},[_vm._v(_vm._s(item.label))])])])})],2)])}
var VSlider_staticRenderFns = []
var VSlider_esExports = { render: VSlider_render, staticRenderFns: VSlider_staticRenderFns }
/* harmony default export */ var common_VSlider = (VSlider_esExports);
// CONCATENATED MODULE: ../example/views/common/VSlider.vue
function injectStyle (ssrContext) {
  __webpack_require__("rmiW")
}
var VSlider_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var VSlider___vue_template_functional__ = false
/* styles */
var VSlider___vue_styles__ = injectStyle
/* scopeId */
var VSlider___vue_scopeId__ = "data-v-53734b83"
/* moduleIdentifier (server only) */
var VSlider___vue_module_identifier__ = null
var VSlider_Component = VSlider_normalizeComponent(
  VSlider,
  common_VSlider,
  VSlider___vue_template_functional__,
  VSlider___vue_styles__,
  VSlider___vue_scopeId__,
  VSlider___vue_module_identifier__
)

/* harmony default export */ var views_common_VSlider = (VSlider_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/common/VHeader.vue
//
//
//
//

/* harmony default export */ var VHeader = ({});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-98dc7030","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/common/VHeader.vue
var VHeader_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._v("header")])}
var VHeader_staticRenderFns = []
var VHeader_esExports = { render: VHeader_render, staticRenderFns: VHeader_staticRenderFns }
/* harmony default export */ var common_VHeader = (VHeader_esExports);
// CONCATENATED MODULE: ../example/views/common/VHeader.vue
var VHeader_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var VHeader___vue_template_functional__ = false
/* styles */
var VHeader___vue_styles__ = null
/* scopeId */
var VHeader___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var VHeader___vue_module_identifier__ = null
var VHeader_Component = VHeader_normalizeComponent(
  VHeader,
  common_VHeader,
  VHeader___vue_template_functional__,
  VHeader___vue_styles__,
  VHeader___vue_scopeId__,
  VHeader___vue_module_identifier__
)

/* harmony default export */ var views_common_VHeader = (VHeader_Component.exports);

// CONCATENATED MODULE: ../example/views/common/index.js





// CONCATENATED MODULE: ../example/utils/config.js
const config_srcList = [
  {path: 'icon', label: 'icon图标'},
  {path: 'button', label: '按钮'},
  {path: 'toast', label: 'toast提示'},
  {path: 'scroll', label: '滚动框'},
  {path: 'swipe', label: '轮播图'},
  {path: 'alert', label: '弹窗'},
  {path: 'popup', label: '滑出层'},
  {path: 'spinner', label: '加载'},
  {path: 'notice', label: '公告'},
  {path: 'cell', label: '单元格'},
  {path: 'tag', label: 'tag标签'},
  {path: 'tabbar', label: 'tabbar导航'},
  {path: 'collapse', label: '折叠窗'}
]

const config_deviceTypeMap = {
  'ip6': { width: '375px', height: '667px' }
}

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/Container.vue
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
//
//




/* harmony default export */ var Container = ({
  components: {
    VSlider: views_common_VSlider,
    VHeader: views_common_VHeader
  },
  computed: {
    host: function host() {
      return location.host;
    },
    srcList: function srcList() {
      return config_srcList;
    },
    deviceTypeMap: function deviceTypeMap() {
      return config_deviceTypeMap;
    }
  },
  data: function data() {
    return {
      deviceType: 'ip6',
      src: 'icon'
    };
  },
  mounted: function mounted() {},

  methods: {
    handleSliderClick: function handleSliderClick(_ref) {
      var path = _ref.path;

      this.src = path;
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-b636564c","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/Container.vue
var Container_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"wrapper-container"},[_c('v-header',{staticClass:"wrapper-header"}),_vm._v(" "),_c('div',{staticClass:"wrapper-main"},[_c('v-slider',{staticClass:"wrapper-slider",attrs:{"list":_vm.srcList,"activePath":_vm.src},on:{"handleClick":_vm.handleSliderClick}}),_vm._v(" "),_c('section',{staticClass:"list-container"},[_c('div',{staticClass:"list-container-main"},[_c('section',{staticClass:"list-doc"},[_c('iframe',{staticStyle:{"width":"100%","height":"100%","padding":"20px"},attrs:{"frameborder":"0","src":("http://" + _vm.host + "/#/doc-" + _vm.src)}})]),_vm._v(" "),_c('section',{staticClass:"list-window",style:(_vm.deviceTypeMap[_vm.deviceType])},[_c('iframe',{style:(_vm.deviceTypeMap[_vm.deviceType]),attrs:{"frameborder":"0","src":("http://" + _vm.host + "/#/" + _vm.src)}})])])])],1)],1)])}
var Container_staticRenderFns = []
var Container_esExports = { render: Container_render, staticRenderFns: Container_staticRenderFns }
/* harmony default export */ var views_Container = (Container_esExports);
// CONCATENATED MODULE: ../example/views/Container.vue
function Container_injectStyle (ssrContext) {
  __webpack_require__("Jk3D")
}
var Container_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Container___vue_template_functional__ = false
/* styles */
var Container___vue_styles__ = Container_injectStyle
/* scopeId */
var Container___vue_scopeId__ = "data-v-b636564c"
/* moduleIdentifier (server only) */
var Container___vue_module_identifier__ = null
var Container_Component = Container_normalizeComponent(
  Container,
  views_Container,
  Container___vue_template_functional__,
  Container___vue_styles__,
  Container___vue_scopeId__,
  Container___vue_module_identifier__
)

/* harmony default export */ var example_views_Container = (Container_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/List.vue
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



/* harmony default export */ var List = ({
  computed: {
    list: function list() {
      return config_srcList;
    }
  },
  methods: {
    link: function link(_ref) {
      var path = _ref.path;

      this.$router.push('/' + path);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-7931d8a8","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/List.vue
var List_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('z-scroll',{staticStyle:{"width":"100vw","height":"100vh"}},[_c('z-cell',{attrs:{"slot":"list"},slot:"list"},_vm._l((_vm.list),function(item,index){return _c('z-cell-item',{key:index,attrs:{"title":item.label},on:{"click":function($event){_vm.link(item)}}})}))],1)],1)}
var List_staticRenderFns = []
var List_esExports = { render: List_render, staticRenderFns: List_staticRenderFns }
/* harmony default export */ var demo_List = (List_esExports);
// CONCATENATED MODULE: ../example/views/demo/List.vue
var List_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var List___vue_template_functional__ = false
/* styles */
var List___vue_styles__ = null
/* scopeId */
var List___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var List___vue_module_identifier__ = null
var List_Component = List_normalizeComponent(
  List,
  demo_List,
  List___vue_template_functional__,
  List___vue_styles__,
  List___vue_scopeId__,
  List___vue_module_identifier__
)

/* harmony default export */ var views_demo_List = (List_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Icon.vue
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

/* harmony default export */ var Icon = ({
  data: function data() {
    return {
      iconList: [{ name: 'success', label: 'success' }, { name: 'warning', label: 'warning' }, { name: 'error', label: 'error' }, { name: 'loading', label: 'loading' }, { name: 'loadingPoint', label: 'loadingPoint' }, { name: 'loadingLine', label: 'loadingLine' }, { name: 'plus', label: 'plus' }, { name: 'user', label: 'user' }, { name: 'lock', label: 'lock' }, { name: 'alipay', label: 'alipay' }, { name: 'weixin', label: 'weixin' }, { name: 'location', label: 'location' }, { name: 'file', label: 'file' }, { name: 'love', label: 'love' }, { name: 'start', label: 'start' }, { name: 'arrowRight', label: 'arrowRight' }, { name: 'lineArrowRight', label: 'lineArrowRight' }, { name: 'edit', label: 'edit' }, { name: 'notice', label: 'notice' }, { name: 'search', label: 'search' }]
    };
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-0e86505c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Icon.vue
var Icon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('z-scroll',{staticStyle:{"width":"92%","height":"100vh","margin":"0 auto"}},[_c('ul',{staticStyle:{"display":"flex","flex-wrap":"wrap","justify-content":"flex-start"},attrs:{"slot":"list"},slot:"list"},_vm._l((_vm.iconList),function(item,index){return _c('li',{key:index,staticStyle:{"width":"33.33333333%","text-align":"center"}},[_c('div',[_c('z-icon',{attrs:{"name":item.name}})],1),_vm._v(" "),_c('div',[_vm._v(_vm._s(item.label))])])}))])],1)}
var Icon_staticRenderFns = []
var Icon_esExports = { render: Icon_render, staticRenderFns: Icon_staticRenderFns }
/* harmony default export */ var info_Icon = (Icon_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Icon.vue
var Icon_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Icon___vue_template_functional__ = false
/* styles */
var Icon___vue_styles__ = null
/* scopeId */
var Icon___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Icon___vue_module_identifier__ = null
var Icon_Component = Icon_normalizeComponent(
  Icon,
  info_Icon,
  Icon___vue_template_functional__,
  Icon___vue_styles__,
  Icon___vue_scopeId__,
  Icon___vue_module_identifier__
)

/* harmony default export */ var demo_info_Icon = (Icon_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Scroll.vue
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

/* harmony default export */ var Scroll = ({
  data: function data() {
    return {
      list: [],
      options: {
        pullDownRefresh: {
          threshold: 90,
          stop: 40,
          txt: '下拉刷新成功'
        },
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: '加载中...',
            noMore: '我是有底线的'
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.onReady();
  },

  methods: {
    onReady: function onReady() {
      this.list = [];
      for (var i = 0; i < 10; i++) {
        this.list.push(i);
      }
    },
    pullingUp: function pullingUp() {
      var _this = this;

      setTimeout(function () {
        for (var i = 0; i < 5; i++) {
          _this.list.push(_this.list[_this.list.length - 1] + 1);
        }
      }, 2000);
    },
    pullingDown: function pullingDown() {
      var _this2 = this;

      setTimeout(function () {
        _this2.onReady();
      }, 2000);
    },
    bindScroll: function bindScroll(item) {
      console.log(item);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-8313389c","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Scroll.vue
var Scroll_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('z-scroll',{ref:"scroll",staticClass:"item-scroll",attrs:{"data":_vm.list,"options":_vm.options},on:{"pulling-down":_vm.pullingDown,"pulling-up":_vm.pullingUp}},[_c('ul',{attrs:{"slot":"list"},slot:"list"},_vm._l((_vm.list),function(item,index){return _c('li',{staticClass:"item-scroll-container"},[_vm._v(_vm._s(item))])}))])],1)}
var Scroll_staticRenderFns = []
var Scroll_esExports = { render: Scroll_render, staticRenderFns: Scroll_staticRenderFns }
/* harmony default export */ var info_Scroll = (Scroll_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Scroll.vue
function Scroll_injectStyle (ssrContext) {
  __webpack_require__("/XeK")
}
var Scroll_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Scroll___vue_template_functional__ = false
/* styles */
var Scroll___vue_styles__ = Scroll_injectStyle
/* scopeId */
var Scroll___vue_scopeId__ = "data-v-8313389c"
/* moduleIdentifier (server only) */
var Scroll___vue_module_identifier__ = null
var Scroll_Component = Scroll_normalizeComponent(
  Scroll,
  info_Scroll,
  Scroll___vue_template_functional__,
  Scroll___vue_styles__,
  Scroll___vue_scopeId__,
  Scroll___vue_module_identifier__
)

/* harmony default export */ var demo_info_Scroll = (Scroll_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Button.vue
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
//
//
//

/* harmony default export */ var Button = ({
  methods: {
    add: function add(e) {
      console.log(e);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-0ae82239","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Button.vue
var Button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('z-scroll',{staticStyle:{"height":"100vh","width":"92%","margin":"0 auto"}},[_c('div',{attrs:{"slot":"list"},slot:"list"},[_c('z-button',{staticClass:"button",attrs:{"val":"info"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"primary","val":"primary"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"success","val":"success"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"warning","val":"warning"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"danger","val":"danger"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"val":"plain","plain":""}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"primary","val":"plain","plain":""}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"success","val":"plain","plain":""}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"warning","val":"plain","plain":""}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"danger","val":"plain","plain":""}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"primary","val":"large","size":"large"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"primary","val":"small","size":"small"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"primary","val":"mini","size":"mini"}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"primary","val":"disabled","disabled":""}}),_vm._v(" "),_c('z-button',{staticClass:"button",attrs:{"type":"primary","val":"loading","loading":""},on:{"click":_vm.add}})],1)])],1)}
var Button_staticRenderFns = []
var Button_esExports = { render: Button_render, staticRenderFns: Button_staticRenderFns }
/* harmony default export */ var info_Button = (Button_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Button.vue
function Button_injectStyle (ssrContext) {
  __webpack_require__("J2MG")
}
var Button_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Button___vue_template_functional__ = false
/* styles */
var Button___vue_styles__ = Button_injectStyle
/* scopeId */
var Button___vue_scopeId__ = "data-v-0ae82239"
/* moduleIdentifier (server only) */
var Button___vue_module_identifier__ = null
var Button_Component = Button_normalizeComponent(
  Button,
  info_Button,
  Button___vue_template_functional__,
  Button___vue_styles__,
  Button___vue_scopeId__,
  Button___vue_module_identifier__
)

/* harmony default export */ var demo_info_Button = (Button_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Bubble/src/Bubble.vue
//
//
//
//

/* harmony default export */ var Bubble = ({
  name: 'zBubble',
  props: {
    y: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      width: 50,
      height: 80
    };
  },

  computed: {
    distance: function distance() {
      return Math.max(0, Math.min(this.y * this.ratio, this.maxDistance));
    },
    style: function style() {
      return 'width:' + this.width / this.ratio + 'px;height:' + this.height / this.ratio + 'px';
    }
  },
  created: function created() {
    this.ratio = window.devicePixelRatio;
    this.width *= this.ratio;
    this.height *= this.ratio;
    this.initRadius = 18 * this.ratio;
    this.minHeadRadius = 12 * this.ratio;
    this.minTailRadius = 5 * this.ratio;
    this.initArrowRadius = 10 * this.ratio;
    this.minArrowRadius = 6 * this.ratio;
    this.arrowWidth = 3 * this.ratio;
    this.maxDistance = 40 * this.ratio;
    this.initCenterX = 25 * this.ratio;
    this.initCenterY = 25 * this.ratio;
    this.headCenter = {
      x: this.initCenterX,
      y: this.initCenterY
    };
  },
  mounted: function mounted() {
    this._draw();
  },

  methods: {
    _draw: function _draw() {
      var bubble = this.$refs.bubble;
      var ctx = bubble.getContext('2d');
      ctx.clearRect(0, 0, bubble.width, bubble.height);
      this._drawBubble(ctx);
      this._drawArrow(ctx);
    },
    _drawBubble: function _drawBubble(ctx) {
      ctx.save();
      ctx.beginPath();
      var rate = this.distance / this.maxDistance;
      var headRadius = this.initRadius - (this.initRadius - this.minHeadRadius) * rate;
      this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * rate;
      // 画上半弧线
      ctx.arc(this.headCenter.x, this.headCenter.y, headRadius, 0, Math.PI, true);
      // 画左侧贝塞尔
      var tailRadius = this.initRadius - (this.initRadius - this.minTailRadius) * rate;
      var tailCenter = {
        x: this.headCenter.x,
        y: this.headCenter.y + this.distance
      };
      var tailPointL = {
        x: tailCenter.x - tailRadius,
        y: tailCenter.y
      };
      var controlPointL = {
        x: tailPointL.x,
        y: tailPointL.y - this.distance / 2
      };
      ctx.quadraticCurveTo(controlPointL.x, controlPointL.y, tailPointL.x, tailPointL.y);
      // 画下半弧线
      ctx.arc(tailCenter.x, tailCenter.y, tailRadius, Math.PI, 0, true);
      // 画右侧贝塞尔
      var headPointR = {
        x: this.headCenter.x + headRadius,
        y: this.headCenter.y
      };
      var controlPointR = {
        x: tailCenter.x + tailRadius,
        y: headPointR.y + this.distance / 2
      };
      ctx.quadraticCurveTo(controlPointR.x, controlPointR.y, headPointR.x, headPointR.y);
      ctx.fillStyle = 'rgb(170,170,170)';
      ctx.fill();
      ctx.strokeStyle = 'rgb(153,153,153)';
      ctx.stroke();
      ctx.restore();
    },
    _drawArrow: function _drawArrow(ctx) {
      ctx.save();
      ctx.beginPath();
      var rate = this.distance / this.maxDistance;
      var arrowRadius = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * rate;
      // 画内圆
      ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius - (this.arrowWidth - rate), -Math.PI / 2, 0, true);
      // 画外圆
      ctx.arc(this.headCenter.x, this.headCenter.y, arrowRadius, 0, Math.PI * 3 / 2, false);
      ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius - this.arrowWidth / 2 + rate);
      ctx.lineTo(this.headCenter.x + this.arrowWidth * 2 - rate * 2, this.headCenter.y - arrowRadius + this.arrowWidth / 2);
      ctx.lineTo(this.headCenter.x, this.headCenter.y - arrowRadius + this.arrowWidth * 3 / 2 - rate);
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.fill();
      ctx.strokeStyle = 'rgb(170,170,170)';
      ctx.stroke();
      ctx.restore();
    }
  },
  watch: {
    y: function y() {
      this._draw();
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-32abca4e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Bubble/src/Bubble.vue
var Bubble_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{ref:"bubble",style:(_vm.style),attrs:{"width":_vm.width,"height":_vm.height}})}
var Bubble_staticRenderFns = []
var Bubble_esExports = { render: Bubble_render, staticRenderFns: Bubble_staticRenderFns }
/* harmony default export */ var src_Bubble = (Bubble_esExports);
// CONCATENATED MODULE: ../src/components/Bubble/src/Bubble.vue
var Bubble_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Bubble___vue_template_functional__ = false
/* styles */
var Bubble___vue_styles__ = null
/* scopeId */
var Bubble___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Bubble___vue_module_identifier__ = null
var Bubble_Component = Bubble_normalizeComponent(
  Bubble,
  src_Bubble,
  Bubble___vue_template_functional__,
  Bubble___vue_styles__,
  Bubble___vue_scopeId__,
  Bubble___vue_module_identifier__
)

/* harmony default export */ var Bubble_src_Bubble = (Bubble_Component.exports);

// CONCATENATED MODULE: ../src/components/Bubble/index.js


Bubble_src_Bubble.install = (Vue) => {
  Vue.component(Bubble_src_Bubble.name, Bubble_src_Bubble)
}

/* harmony default export */ var components_Bubble = (Bubble_src_Bubble);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/success.vue
//
//
//
//

/* harmony default export */ var success = ({
  name: 'iconSuccess'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-25536862","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/success.vue
var success_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2015"}},[_c('path',{attrs:{"d":"M512 0C229.691077 0 0 229.671385 0 512s229.691077 512 512 512 512-229.671385 512-512S794.308923 0 512 0z m0 984.615385C251.411692 984.615385 39.384615 772.588308 39.384615 512S251.411692 39.384615 512 39.384615s472.615385 212.027077 472.615385 472.615385-212.027077 472.615385-472.615385 472.615385z","fill":"","p-id":"2016"}}),_c('path',{attrs:{"d":"M753.270154 302.001231l-302.651077 340.48-182.331077-145.860923a19.692308 19.692308 0 0 0-24.595692 30.759384l196.923077 157.538462a19.672615 19.672615 0 0 0 27.037538-2.304l315.076923-354.461539a19.692308 19.692308 0 1 0-29.459692-26.151384z","fill":"","p-id":"2017"}})])}
var success_staticRenderFns = []
var success_esExports = { render: success_render, staticRenderFns: success_staticRenderFns }
/* harmony default export */ var views_success = (success_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/success.vue
var success_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var success___vue_template_functional__ = false
/* styles */
var success___vue_styles__ = null
/* scopeId */
var success___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var success___vue_module_identifier__ = null
var success_Component = success_normalizeComponent(
  success,
  views_success,
  success___vue_template_functional__,
  success___vue_styles__,
  success___vue_scopeId__,
  success___vue_module_identifier__
)

/* harmony default export */ var Icon_views_success = (success_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/warning.vue
//
//
//
//

/* harmony default export */ var warning = ({
  name: 'iconWarning'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-5551cff7","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/warning.vue
var warning_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"3435"}},[_c('path',{attrs:{"d":"M512 0C229.691077 0 0 229.671385 0 512s229.691077 512 512 512 512-229.671385 512-512S794.308923 0 512 0z m0 984.615385C251.411692 984.615385 39.384615 772.588308 39.384615 512S251.411692 39.384615 512 39.384615s472.615385 212.027077 472.615385 472.615385-212.027077 472.615385-472.615385 472.615385z","fill":"","p-id":"3436"}}),_c('path',{attrs:{"d":"M512 196.923077a19.692308 19.692308 0 0 0-19.692308 19.692308v433.230769a19.692308 19.692308 0 1 0 39.384616 0V216.615385a19.692308 19.692308 0 0 0-19.692308-19.692308zM512 728.615385a19.692308 19.692308 0 0 0-19.692308 19.692307v39.384616a19.692308 19.692308 0 1 0 39.384616 0v-39.384616a19.692308 19.692308 0 0 0-19.692308-19.692307z","fill":"","p-id":"3437"}})])}
var warning_staticRenderFns = []
var warning_esExports = { render: warning_render, staticRenderFns: warning_staticRenderFns }
/* harmony default export */ var views_warning = (warning_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/warning.vue
var warning_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var warning___vue_template_functional__ = false
/* styles */
var warning___vue_styles__ = null
/* scopeId */
var warning___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var warning___vue_module_identifier__ = null
var warning_Component = warning_normalizeComponent(
  warning,
  views_warning,
  warning___vue_template_functional__,
  warning___vue_styles__,
  warning___vue_scopeId__,
  warning___vue_module_identifier__
)

/* harmony default export */ var Icon_views_warning = (warning_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/error.vue
//
//
//
//

/* harmony default export */ var error = ({
  name: 'iconError'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-7b185333","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/error.vue
var error_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"3573"}},[_c('path',{attrs:{"d":"M516.461 20.457c-274.346 0-496.742 222.394-496.742 496.742s222.394 496.742 496.742 496.742 496.742-222.394 496.742-496.742-222.394-496.742-496.742-496.742zM516.461 964.278c-246.527 0-447.079-200.547-447.079-447.079s200.547-447.079 447.079-447.079 447.079 200.547 447.079 447.079-200.547 447.079-447.079 447.079z","fill":"","p-id":"3574"}}),_c('path',{attrs:{"d":"M741.978 291.67c-12.099-12.117-31.79-12.117-43.905 0l-181.633 181.633-181.633-181.633c-12.102-12.117-31.795-12.117-43.905 0-12.117 12.102-12.117 31.79 0 43.905l181.633 181.633-181.633 181.633c-12.117 12.102-12.117 31.79 0 43.905 6.032 6.061 13.984 9.073 21.942 9.073 7.926 0 15.886-3.03 21.942-9.073l181.633-181.633 181.633 181.633c6.061 6.061 14.002 9.073 21.942 9.073s15.886-3.03 21.942-9.073c12.117-12.102 12.117-31.79 0-43.905l-181.669-181.633 181.633-181.633c12.117-12.102 12.117-31.79 0-43.905z","fill":"","p-id":"3575"}})])}
var error_staticRenderFns = []
var error_esExports = { render: error_render, staticRenderFns: error_staticRenderFns }
/* harmony default export */ var views_error = (error_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/error.vue
var error_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var error___vue_template_functional__ = false
/* styles */
var error___vue_styles__ = null
/* scopeId */
var error___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var error___vue_module_identifier__ = null
var error_Component = error_normalizeComponent(
  error,
  views_error,
  error___vue_template_functional__,
  error___vue_styles__,
  error___vue_scopeId__,
  error___vue_module_identifier__
)

/* harmony default export */ var Icon_views_error = (error_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/loading.vue
//
//
//
//

/* harmony default export */ var loading = ({
  name: 'iconLoadingPoint'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-abfeeaba","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/loading.vue
var loading_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"z-icon-loading",staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2055"}},[_c('path',{attrs:{"d":"M301.812 510.388c0 17.766-14.404 32.153-32.153 32.153h-162.877c-17.766 0-32.153-14.389-32.153-32.153 0-17.748 14.389-32.153 32.153-32.153h162.877c17.748 0 32.153 14.404 32.153 32.153zM948.383 510.388c0 17.766-14.389 32.153-32.153 32.153h-162.877c-17.748 0-32.153-14.389-32.153-32.153 0-17.748 14.404-32.153 32.153-32.153h162.877c17.766 0 32.153 14.404 32.153 32.153zM543.659 105.664v162.877c0 17.766-14.389 32.153-32.153 32.153s-32.153-14.389-32.153-32.153v-162.877c0-17.766 14.389-32.153 32.153-32.153 17.766 0 32.153 14.389 32.153 32.153zM543.659 752.236v162.892c0 17.748-14.389 32.153-32.153 32.153s-32.153-14.404-32.153-32.153v-162.892c0-17.748 14.389-32.153 32.153-32.153 17.766 0 32.153 14.404 32.153 32.153zM329.932 405.486c-5.947 10.322-16.77 16.077-27.86 16.077-5.465 0-10.996-1.383-16.061-4.308l-141.045-81.478c-15.371-8.89-20.627-28.553-11.753-43.924 8.89-15.385 28.553-20.643 43.924-11.769l141.045 81.478c15.371 8.89 20.643 28.553 11.753 43.924zM889.799 728.941c-5.964 10.304-16.77 16.077-27.877 16.077-5.45 0-10.979-1.397-16.045-4.327l-141.045-81.478c-15.371-8.877-20.643-28.553-11.753-43.924 8.877-15.385 28.553-20.643 43.924-11.753l141.045 81.478c15.371 8.877 20.627 28.553 11.753 43.924zM741.809 176.035l-81.478 141.027c-5.947 10.304-16.77 16.077-27.877 16.077-5.45 0-10.979-1.397-16.045-4.327-15.385-8.877-20.643-28.539-11.753-43.924l81.478-141.027c8.877-15.385 28.539-20.643 43.924-11.769 15.371 8.89 20.643 28.553 11.753 43.939zM418.372 735.885l-81.478 141.045c-5.964 10.304-16.77 16.077-27.877 16.077-5.465 0-10.996-1.397-16.061-4.327-15.371-8.89-20.643-28.553-11.753-43.924l81.478-141.045c8.89-15.371 28.553-20.627 43.924-11.753 15.385 8.89 20.643 28.553 11.769 43.924zM406.716 328.75c-5.047 2.925-10.579 4.308-16.027 4.308-11.125 0-21.931-5.772-27.877-16.093l-81.397-141.074c-8.877-15.385-3.601-35.047 11.783-43.924s35.047-3.601 43.924 11.783l81.381 141.074c8.877 15.385 3.601 35.047-11.783 43.924zM729.815 888.826c-5.063 2.909-10.597 4.308-16.045 4.308-11.108 0-21.931-5.772-27.877-16.093l-81.381-141.091c-8.877-15.385-3.601-35.047 11.783-43.924 15.371-8.877 35.033-3.585 43.906 11.783l81.397 141.091c8.877 15.385 3.601 35.047-11.783 43.924zM878.144 336.001l-141.074 81.397c-5.063 2.909-10.597 4.308-16.045 4.308-11.108 0-21.931-5.772-27.877-16.093-8.877-15.385-3.601-35.047 11.783-43.924l141.091-81.397c15.371-8.859 35.033-3.585 43.906 11.783 8.877 15.385 3.601 35.047-11.783 43.924zM318.083 659.102l-141.091 81.381c-5.047 2.925-10.579 4.308-16.027 4.308-11.125 0-21.931-5.772-27.877-16.093-8.877-15.385-3.601-35.047 11.783-43.924l141.074-81.381c15.385-8.877 35.047-3.601 43.924 11.783s3.601 35.047-11.783 43.924z","p-id":"2056"}})])}
var loading_staticRenderFns = []
var loading_esExports = { render: loading_render, staticRenderFns: loading_staticRenderFns }
/* harmony default export */ var views_loading = (loading_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/loading.vue
var loading_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var loading___vue_template_functional__ = false
/* styles */
var loading___vue_styles__ = null
/* scopeId */
var loading___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var loading___vue_module_identifier__ = null
var loading_Component = loading_normalizeComponent(
  loading,
  views_loading,
  loading___vue_template_functional__,
  loading___vue_styles__,
  loading___vue_scopeId__,
  loading___vue_module_identifier__
)

/* harmony default export */ var Icon_views_loading = (loading_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/loading-point.vue
//
//
//
//

/* harmony default export */ var loading_point = ({
  name: 'iconLoading'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-0bb3c346","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/loading-point.vue
var loading_point_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"z-icon-loading",staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2135"}},[_c('path',{attrs:{"d":"M843.307 742.24c0 3.217 2.607 5.824 5.824 5.824s5.824-2.607 5.824-5.824a5.823 5.823 0 0 0-5.824-5.824 5.823 5.823 0 0 0-5.824 5.824zM714.731 874.912c0 6.398 5.186 11.584 11.584 11.584s11.584-5.186 11.584-11.584-5.186-11.584-11.584-11.584-11.584 5.186-11.584 11.584zM541.419 943.2c0 9.614 7.794 17.408 17.408 17.408s17.408-7.794 17.408-17.408-7.794-17.408-17.408-17.408-17.408 7.794-17.408 17.408z m-186.56-9.152c0 12.795 10.373 23.168 23.168 23.168s23.168-10.373 23.168-23.168-10.373-23.168-23.168-23.168-23.168 10.373-23.168 23.168zM189.355 849.12c0 16.012 12.98 28.992 28.992 28.992s28.992-12.98 28.992-28.992-12.98-28.992-28.992-28.992-28.992 12.98-28.992 28.992zM74.731 704.736c0 19.228 15.588 34.816 34.816 34.816s34.816-15.588 34.816-34.816-15.588-34.816-34.816-34.816-34.816 15.588-34.816 34.816z m-43.008-177.28c0 22.41 18.166 40.576 40.576 40.576s40.576-18.166 40.576-40.576-18.166-40.576-40.576-40.576-40.576 18.166-40.576 40.576z m35.392-176.128c0 25.626 20.774 46.4 46.4 46.4s46.4-20.774 46.4-46.4c0-25.626-20.774-46.4-46.4-46.4-25.626 0-46.4 20.774-46.4 46.4z m106.176-142.016c0 28.843 23.381 52.224 52.224 52.224s52.224-23.381 52.224-52.224c0-28.843-23.381-52.224-52.224-52.224-28.843 0-52.224 23.381-52.224 52.224z m155.904-81.344c0 32.024 25.96 57.984 57.984 57.984s57.984-25.96 57.984-57.984-25.96-57.984-57.984-57.984-57.984 25.96-57.984 57.984z m175.104-5.056c0 35.24 28.568 63.808 63.808 63.808s63.808-28.568 63.808-63.808c0-35.24-28.568-63.808-63.808-63.808-35.24 0-63.808 28.568-63.808 63.808z m160.32 72.128c0 38.421 31.147 69.568 69.568 69.568s69.568-31.147 69.568-69.568-31.147-69.568-69.568-69.568-69.568 31.147-69.568 69.568z m113.92 135.488c0 41.638 33.754 75.392 75.392 75.392s75.392-33.754 75.392-75.392-33.754-75.392-75.392-75.392-75.392 33.754-75.392 75.392z m45.312 175.488c0 44.854 36.362 81.216 81.216 81.216s81.216-36.362 81.216-81.216c0-44.854-36.362-81.216-81.216-81.216-44.854 0-81.216 36.362-81.216 81.216z","fill":"","p-id":"2136"}})])}
var loading_point_staticRenderFns = []
var loading_point_esExports = { render: loading_point_render, staticRenderFns: loading_point_staticRenderFns }
/* harmony default export */ var views_loading_point = (loading_point_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/loading-point.vue
var loading_point_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var loading_point___vue_template_functional__ = false
/* styles */
var loading_point___vue_styles__ = null
/* scopeId */
var loading_point___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var loading_point___vue_module_identifier__ = null
var loading_point_Component = loading_point_normalizeComponent(
  loading_point,
  views_loading_point,
  loading_point___vue_template_functional__,
  loading_point___vue_styles__,
  loading_point___vue_scopeId__,
  loading_point___vue_module_identifier__
)

/* harmony default export */ var Icon_views_loading_point = (loading_point_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/loading-line.vue
//
//
//
//

/* harmony default export */ var loading_line = ({
  name: 'iconLoadingLine'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-a2d455b4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/loading-line.vue
var loading_line_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"z-icon-loading",staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2235"}},[_c('path',{attrs:{"d":"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3-22.2-52.4-53.9-99.4-94.3-139.9-40.4-40.4-87.5-72.2-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z","p-id":"2236"}})])}
var loading_line_staticRenderFns = []
var loading_line_esExports = { render: loading_line_render, staticRenderFns: loading_line_staticRenderFns }
/* harmony default export */ var views_loading_line = (loading_line_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/loading-line.vue
var loading_line_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var loading_line___vue_template_functional__ = false
/* styles */
var loading_line___vue_styles__ = null
/* scopeId */
var loading_line___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var loading_line___vue_module_identifier__ = null
var loading_line_Component = loading_line_normalizeComponent(
  loading_line,
  views_loading_line,
  loading_line___vue_template_functional__,
  loading_line___vue_styles__,
  loading_line___vue_scopeId__,
  loading_line___vue_module_identifier__
)

/* harmony default export */ var Icon_views_loading_line = (loading_line_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/plus.vue
//
//
//
//

/* harmony default export */ var plus = ({
  name: 'iconPlus'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-24d65e90","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/plus.vue
var plus_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1382"}},[_c('path',{attrs:{"d":"M512 0C229.216 0 0 229.216 0 512c0 282.768 229.216 512 512 512 282.752 0 512-229.232 512-512C1024 229.216 794.752 0 512 0zM512 992C246.896 992 32 777.088 32 512 32 246.896 246.896 32 512 32c265.072 0 480 214.896 480 480C992 777.088 777.072 992 512 992zM792 496l-560 0c-8.848 0-16 7.152-16 16s7.152 16 16 16l560 0c8.848 0 16-7.152 16-16S800.848 496 792 496zM528 792l0-560c0-8.848-7.152-16-16-16s-16 7.152-16 16l0 560c0 8.848 7.152 16 16 16S528 800.848 528 792z","p-id":"1383"}})])}
var plus_staticRenderFns = []
var plus_esExports = { render: plus_render, staticRenderFns: plus_staticRenderFns }
/* harmony default export */ var views_plus = (plus_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/plus.vue
var plus_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var plus___vue_template_functional__ = false
/* styles */
var plus___vue_styles__ = null
/* scopeId */
var plus___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var plus___vue_module_identifier__ = null
var plus_Component = plus_normalizeComponent(
  plus,
  views_plus,
  plus___vue_template_functional__,
  plus___vue_styles__,
  plus___vue_scopeId__,
  plus___vue_module_identifier__
)

/* harmony default export */ var Icon_views_plus = (plus_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/user.vue
//
//
//
//

/* harmony default export */ var user = ({
  name: 'iconUser'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-14dd4480","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/user.vue
var user_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1946"}},[_c('path',{attrs:{"d":"M515.478588 14.230588c-274.025412 0-496.941176 222.945882-496.941176 496.941176 0 274.010353 222.915765 496.926118 496.941176 496.926118 273.980235 0 496.926118-222.915765 496.926118-496.926118C1012.404706 237.176471 789.473882 14.230588 515.478588 14.230588zM801.942588 878.742588c-14.652235-145.182118-137.532235-258.846118-286.479059-258.846118-148.946824 0-271.826824 113.679059-286.464 258.846118C119.627294 793.313882 49.136941 660.374588 49.136941 511.171765c0-257.144471 209.212235-466.386824 466.356706-466.386824 257.129412 0 466.341647 209.242353 466.341647 466.386824C981.820235 660.374588 911.329882 793.344 801.942588 878.742588zM511.713882 241.829647c-89.765647 0-162.816 73.065412-162.816 162.816s73.065412 162.800941 162.816 162.800941c89.720471 0 162.785882-73.035294 162.785882-162.800941S601.434353 241.829647 511.713882 241.829647z","p-id":"1947"}})])}
var user_staticRenderFns = []
var user_esExports = { render: user_render, staticRenderFns: user_staticRenderFns }
/* harmony default export */ var views_user = (user_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/user.vue
var user_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var user___vue_template_functional__ = false
/* styles */
var user___vue_styles__ = null
/* scopeId */
var user___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var user___vue_module_identifier__ = null
var user_Component = user_normalizeComponent(
  user,
  views_user,
  user___vue_template_functional__,
  user___vue_styles__,
  user___vue_scopeId__,
  user___vue_module_identifier__
)

/* harmony default export */ var Icon_views_user = (user_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/lock.vue
//
//
//
//

/* harmony default export */ var lock = ({
  name: 'iconLock'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-21a79874","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/lock.vue
var lock_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2731"}},[_c('path',{attrs:{"d":"M800 416l0-128c0-159.072-128.928-288-288-288s-288 128.928-288 288l0 128c-53.024 0-96 42.976-96 96l0 224c0 159.072 128.928 288 288 288l192 0c159.072 0 288-128.928 288-288l0-224c0-53.056-43.008-96-96-96zM288 288c0-123.712 100.288-224 224-224s224 100.288 224 224l0 128-64 0 0-127.936c0-88.384-71.616-160-160-160s-160 71.616-160 160l0 127.936-64 0 0-128zM640 288l0 128-256 0 0-128c0-70.688 57.312-128 128-128s128 57.312 128 128zM832 608l0 128c0 123.488-100.512 224-224 224l-192 0c-123.488 0-224-100.512-224-224l0-224c0-17.664 14.336-32 32-32 21.344 0 42.656 0 64 0l448 0c21.312 0 42.624 0 64 0 17.632 0 32 14.336 32 32l0 96zM512 608c35.328 0 64 28.64 64 64 0 19.488-10.496 56.576-21.312 85.824-8.736 23.616-17.664 42.112-42.688 42.112-23.008 0-33.952-18.688-42.656-42.432-10.688-29.184-21.344-66.08-21.344-85.504 0-35.36 28.672-64 64-64z","p-id":"2732"}})])}
var lock_staticRenderFns = []
var lock_esExports = { render: lock_render, staticRenderFns: lock_staticRenderFns }
/* harmony default export */ var views_lock = (lock_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/lock.vue
var lock_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var lock___vue_template_functional__ = false
/* styles */
var lock___vue_styles__ = null
/* scopeId */
var lock___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var lock___vue_module_identifier__ = null
var lock_Component = lock_normalizeComponent(
  lock,
  views_lock,
  lock___vue_template_functional__,
  lock___vue_styles__,
  lock___vue_scopeId__,
  lock___vue_module_identifier__
)

/* harmony default export */ var Icon_views_lock = (lock_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/alipay.vue
//
//
//
//

/* harmony default export */ var alipay = ({
  name: 'iconAlipay'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-ef63b742","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/alipay.vue
var alipay_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"3591"}},[_c('path',{attrs:{"d":"M850.78189 68.581981 171.579797 68.581981c-57.7114 0-104.492866 46.781466-104.492866 104.492866l0 679.202093c0 57.70833 46.781466 104.492866 104.492866 104.492866l679.202093 0c57.70833 0 104.492866-46.783513 104.492866-104.492866L955.274756 173.074847C955.274756 115.363448 908.49022 68.581981 850.78189 68.581981zM840.98578 920.849712 181.375907 920.849712c-43.283806 0-78.369905-35.0861-78.369905-78.369905L103.006002 182.870957c0-43.283806 35.0861-78.369905 78.369905-78.369905l659.609873 0c43.283806 0 78.369905 35.0861 78.369905 78.369905l0 545.873482c-53.169967-16.593933-245.428735-89.183182-282.662755-102.68366 27.517727-47.91222 49.503461-102.713336 63.902402-162.431439L543.140231 463.629339l0-54.114478 193.152115 0 0-33.087583L543.140231 376.427278l0-90.218768-74.299193 0c-13.291724 0-14.994506 12.233626-14.994506 12.233626l0 77.985142L272.79399 376.427278l0 33.087583L453.93249 409.514861l0 54.114478L305.427224 463.629339l0 30.072923 300.079426 0c-10.990309 38.087457-25.561166 73.847915-43.026956 106.333794-67.737754-22.578228-105.736183-38.257326-188.721199-46.185902-157.455101-14.997576-193.752796 72.382541-199.376886 125.892245-8.604982 81.603553 62.711274 148.123572 169.557744 148.123572 106.838284 0 177.731914-49.803289 245.379617-132.784212 79.122035 38.293141 270.815939 129.016399 329.677535 154.817018C915.25632 889.702318 881.765555 920.849712 840.98578 920.849712zM523.033287 661.818167c-54.44603 71.780837-121.412211 114.521267-190.857862 114.521267-112.89421 0-130.696668-72.209602-124.818797-102.280478 5.963829-30.075992 38.597063-69.198012 101.389178-69.198012C380.99634 604.950995 445.499423 623.560842 523.033287 661.818167z","p-id":"3592"}})])}
var alipay_staticRenderFns = []
var alipay_esExports = { render: alipay_render, staticRenderFns: alipay_staticRenderFns }
/* harmony default export */ var views_alipay = (alipay_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/alipay.vue
var alipay_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var alipay___vue_template_functional__ = false
/* styles */
var alipay___vue_styles__ = null
/* scopeId */
var alipay___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var alipay___vue_module_identifier__ = null
var alipay_Component = alipay_normalizeComponent(
  alipay,
  views_alipay,
  alipay___vue_template_functional__,
  alipay___vue_styles__,
  alipay___vue_scopeId__,
  alipay___vue_module_identifier__
)

/* harmony default export */ var Icon_views_alipay = (alipay_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-5ef41dd0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/weixin.vue
var weixin_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"4399"}},[_c('path',{attrs:{"d":"M249.173333 335.872c0 10.922667 4.437333 21.504 11.946667 29.013333 7.509333 7.509333 18.432 11.946667 29.013333 11.946667 10.922667 0 21.504-4.437333 29.013333-11.946667 7.509333-7.509333 11.946667-18.432 11.946667-29.013333 0-10.922667-4.437333-21.504-11.946667-29.013333-7.509333-7.509333-18.432-11.946667-29.013333-11.946667-10.922667 0-21.504 4.437333-29.013333 11.946667C253.610667 314.368 249.173333 325.290667 249.173333 335.872L249.173333 335.872zM249.173333 335.872M569.344 548.864c0 8.533333 3.413333 16.725333 9.557333 22.869333 5.802667 5.802667 14.336 9.557333 22.869333 9.557333 8.533333 0 16.725333-3.413333 22.869333-9.557333 5.802667-5.802667 9.557333-14.336 9.557333-22.869333 0-8.533333-3.413333-16.725333-9.557333-22.869333-5.802667-5.802667-14.336-9.557333-22.869333-9.557333-8.533333 0-16.725333 3.413333-22.869333 9.557333C573.098667 531.797333 569.344 540.330667 569.344 548.864L569.344 548.864zM569.344 548.864M459.093333 335.872c0 10.922667 4.437333 21.504 11.946667 29.013333 7.509333 7.509333 18.432 11.946667 29.013333 11.946667 10.922667 0 21.504-4.437333 29.013333-11.946667 7.509333-7.509333 11.946667-18.432 11.946667-29.013333 0-10.922667-4.437333-21.504-11.946667-29.013333-7.509333-7.509333-18.432-11.946667-29.013333-11.946667-10.922667 0-21.504 4.437333-29.013333 11.946667C463.530667 314.368 459.093333 325.290667 459.093333 335.872L459.093333 335.872zM459.093333 335.872M842.069333 27.306667 181.930667 27.306667C94.549333 27.306667 23.893333 98.304 23.893333 186.026667l0 659.456c0 87.722667 70.997333 158.72 158.378667 158.72l660.138667 0c87.381333 0 158.378667-70.997333 158.378667-158.72L1000.789333 186.026667C1000.448 98.304 929.450667 27.306667 842.069333 27.306667L842.069333 27.306667zM390.144 681.642667c-36.864 0-66.56-7.509333-103.765333-15.018667l-103.424 51.882667 29.696-89.088c-74.069333-51.882667-118.442667-118.442667-118.442667-200.021333 0-140.970667 133.461333-251.904 296.277333-251.904 145.749333 0 273.066667 88.746667 298.666667 207.872-9.557333-1.024-18.773333-1.706667-28.672-1.706667-140.629333 0-251.904 105.130667-251.904 234.496 0 21.504 3.413333 42.325333 9.216 62.122667C408.917333 681.301333 399.701333 681.642667 390.144 681.642667L390.144 681.642667zM827.050667 785.408l22.186667 74.069333-81.237333-44.373333c-29.696 7.509333-59.392 15.018667-88.746667 15.018667-140.970667 0-251.904-96.256-251.904-215.04 0-118.442667 110.933333-215.04 251.904-215.04 133.12 0 251.562667 96.597333 251.562667 215.04C930.816 681.642667 886.442667 741.034667 827.050667 785.408L827.050667 785.408zM827.050667 785.408M730.794667 548.864c0 8.533333 3.413333 16.725333 9.557333 22.869333 5.802667 5.802667 14.336 9.557333 22.869333 9.557333 8.533333 0 16.725333-3.413333 22.869333-9.557333 5.802667-5.802667 9.557333-14.336 9.557333-22.869333 0-8.533333-3.413333-16.725333-9.557333-22.869333-5.802667-5.802667-14.336-9.557333-22.869333-9.557333-8.533333 0-16.725333 3.413333-22.869333 9.557333C734.208 531.797333 730.794667 540.330667 730.794667 548.864L730.794667 548.864zM730.794667 548.864","p-id":"4400"}})])}
var weixin_staticRenderFns = []
var weixin_esExports = { render: weixin_render, staticRenderFns: weixin_staticRenderFns }
/* harmony default export */ var weixin = (weixin_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/weixin.vue
var weixin_normalizeComponent = __webpack_require__("AYo0")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var weixin___vue_template_functional__ = false
/* styles */
var weixin___vue_styles__ = null
/* scopeId */
var weixin___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var weixin___vue_module_identifier__ = null
var weixin_Component = weixin_normalizeComponent(
  __vue_script__,
  weixin,
  weixin___vue_template_functional__,
  weixin___vue_styles__,
  weixin___vue_scopeId__,
  weixin___vue_module_identifier__
)

/* harmony default export */ var views_weixin = (weixin_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/location.vue
//
//
//
//

/* harmony default export */ var views_location = ({
  name: 'iconLocation'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-655106a0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/location.vue
var location_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5090"}},[_c('path',{attrs:{"d":"M512 209.6c-88 0-160 72-160 160s72 160 160 160 160-72 160-160-72-160-160-160zM512 489.6c-65.6 0-120-54.4-120-120s54.4-120 120-120c65.6 0 120 54.4 120 120 0 67.2-54.4 120-120 120z","p-id":"5091"}}),_c('path',{attrs:{"d":"M512 32c-198.4 0-360 152-360 337.6 0 35.2 4.8 68.8 16 100.8 0 1.6 0 1.6 0 1.6 8 24 19.2 46.4 33.6 68.8l294.4 441.6c3.2 6.4 9.6 9.6 16 9.6s12.8-4.8 16-9.6l294.4-440c14.4-22.4 25.6-46.4 33.6-70.4 0-1.6 0-1.6 0-1.6 11.2-32 16-67.2 16-100.8 0-185.6-161.6-337.6-360-337.6zM819.2 456c-8 22.4-17.6 43.2-30.4 62.4l-268.8 404.8c-3.2 3.2-4.8 4.8-8 4.8-3.2 0-6.4-1.6-8-4.8l-268.8-403.2c-12.8-19.2-22.4-40-28.8-60.8-9.6-30.4-14.4-59.2-14.4-89.6 0-164.8 144-297.6 320-297.6s320 132.8 320 297.6c0 30.4-4.8 59.2-12.8 86.4z","p-id":"5092"}})])}
var location_staticRenderFns = []
var location_esExports = { render: location_render, staticRenderFns: location_staticRenderFns }
/* harmony default export */ var Icon_views_location = (location_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/location.vue
var location_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var location___vue_template_functional__ = false
/* styles */
var location___vue_styles__ = null
/* scopeId */
var location___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var location___vue_module_identifier__ = null
var location_Component = location_normalizeComponent(
  views_location,
  Icon_views_location,
  location___vue_template_functional__,
  location___vue_styles__,
  location___vue_scopeId__,
  location___vue_module_identifier__
)

/* harmony default export */ var components_Icon_views_location = (location_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/file.vue
//
//
//
//

/* harmony default export */ var file = ({
  name: 'iconFile'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-3a2626f6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/file.vue
var file_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"5755"}},[_c('path',{attrs:{"d":"M546.133333 635.259259c-3.792593 0-5.688889 0-9.481481-1.896296L159.288889 420.977778c-5.688889-3.792593-9.481481-9.481481-9.481482-17.066667s3.792593-13.274074 9.481482-17.066667L536.651852 185.837037c5.688889-3.792593 13.274074-3.792593 17.066667 0l377.362962 202.903704c5.688889 3.792593 9.481481 9.481481 9.481482 17.066666s-3.792593 13.274074-9.481482 17.066667l-375.466666 208.592593c-1.896296 1.896296-5.688889 3.792593-9.481482 3.792592zM208.592593 405.807407l337.54074 187.733334 337.540741-187.733334-337.540741-182.044444L208.592593 405.807407z","fill":"","p-id":"5756"}}),_c('path',{attrs:{"d":"M546.133333 786.962963c-3.792593 0-5.688889 0-9.481481-1.896296L159.288889 574.577778c-9.481481-5.688889-11.377778-17.066667-7.585185-26.548148 5.688889-9.481481 17.066667-13.274074 26.548148-7.585186l367.881481 204.8 367.881482-204.8c9.481481-5.688889 20.859259-1.896296 26.548148 7.585186 5.688889 9.481481 1.896296 20.859259-7.585185 26.548148L555.614815 785.066667c-1.896296 1.896296-5.688889 1.896296-9.481482 1.896296z","fill":"","p-id":"5757"}}),_c('path',{attrs:{"d":"M546.133333 940.562963c-3.792593 0-5.688889 0-9.481481-1.896296L159.288889 728.177778c-9.481481-5.688889-11.377778-17.066667-7.585185-26.548148 5.688889-9.481481 17.066667-13.274074 26.548148-7.585186l367.881481 204.8 367.881482-204.8c9.481481-5.688889 20.859259-1.896296 26.548148 7.585186 5.688889 9.481481 1.896296 20.859259-7.585185 26.548148L555.614815 938.666667c-1.896296 1.896296-5.688889 1.896296-9.481482 1.896296z","fill":"","p-id":"5758"}})])}
var file_staticRenderFns = []
var file_esExports = { render: file_render, staticRenderFns: file_staticRenderFns }
/* harmony default export */ var views_file = (file_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/file.vue
var file_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var file___vue_template_functional__ = false
/* styles */
var file___vue_styles__ = null
/* scopeId */
var file___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var file___vue_module_identifier__ = null
var file_Component = file_normalizeComponent(
  file,
  views_file,
  file___vue_template_functional__,
  file___vue_styles__,
  file___vue_scopeId__,
  file___vue_module_identifier__
)

/* harmony default export */ var Icon_views_file = (file_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/love.vue
//
//
//
//

/* harmony default export */ var love = ({
  name: 'iconLove'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-efb50d46","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/love.vue
var love_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"6372"}},[_c('path',{attrs:{"d":"M512.002048 872.229888c-82.62144 0-448.510976-259.203072-448.510976-547.059712L63.491072 312.064C62.8224 181.332992 166.3744 73.839616 297.048064 69.632c91.287552-0.022528 174.242816 53.066752 212.452352 135.974912 39.40864-80.579584 121.427968-131.525632 211.125248-131.13344C851.058688 77.101056 956.502016 181.472256 960.512 311.857152l0 13.334528C960.512 613.071872 594.622464 872.229888 512.002048 872.229888z","p-id":"6373"}})])}
var love_staticRenderFns = []
var love_esExports = { render: love_render, staticRenderFns: love_staticRenderFns }
/* harmony default export */ var views_love = (love_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/love.vue
var love_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var love___vue_template_functional__ = false
/* styles */
var love___vue_styles__ = null
/* scopeId */
var love___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var love___vue_module_identifier__ = null
var love_Component = love_normalizeComponent(
  love,
  views_love,
  love___vue_template_functional__,
  love___vue_styles__,
  love___vue_scopeId__,
  love___vue_module_identifier__
)

/* harmony default export */ var Icon_views_love = (love_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/start.vue
//
//
//
//

/* harmony default export */ var start = ({
  name: 'iconStart'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-cd037056","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/start.vue
var start_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"7014"}},[_c('path',{attrs:{"d":"M957.258525 404.23316c-3.78431-11.352931-13.589115-19.609609-25.458088-21.501764l-270.406182-41.799429L540.640349 82.394759c-5.332437-11.180917-16.513355-18.40551-28.898371-18.40551 0 0 0 0 0 0-12.385016 0-23.565933 7.052579-28.898371 18.40551l-121.78599 258.021166L90.135394 381.183269c-11.868974 1.720141-21.673778 9.976818-25.630102 21.32975s-1.032085 23.909961 7.396607 32.510667L268.342012 637.140265 221.38216 921.995632c-2.064169 12.040988 3.096254 24.25399 13.073072 31.306568 9.976818 7.052579 23.221905 7.740635 33.88678 1.892155L510.193852 822.227448l241.335797 133.826978c4.816395 2.580212 10.148833 3.956325 15.48127 3.956325 0.172014 0 0.516042 0 0.688056 0 17.717453 0 31.994625-14.277171 31.994625-31.994625 0-3.956325-0.688056-7.740635-2.064169-11.352931l-44.895683-278.662859 196.956157-201.256509C958.118596 428.143121 961.042836 415.586091 957.258525 404.23316z","p-id":"7015"}})])}
var start_staticRenderFns = []
var start_esExports = { render: start_render, staticRenderFns: start_staticRenderFns }
/* harmony default export */ var views_start = (start_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/start.vue
var start_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var start___vue_template_functional__ = false
/* styles */
var start___vue_styles__ = null
/* scopeId */
var start___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var start___vue_module_identifier__ = null
var start_Component = start_normalizeComponent(
  start,
  views_start,
  start___vue_template_functional__,
  start___vue_styles__,
  start___vue_scopeId__,
  start___vue_module_identifier__
)

/* harmony default export */ var Icon_views_start = (start_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/arrow-right.vue
//
//
//
//

/* harmony default export */ var arrow_right = ({
  name: 'iconArrowRight'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-21b6a078","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/arrow-right.vue
var arrow_right_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"8227"}},[_c('path',{attrs:{"d":"M689.621 512l-328.832-328.832-60.331 60.331 268.501 268.501-268.501 268.501 60.331 60.331z","p-id":"8228"}})])}
var arrow_right_staticRenderFns = []
var arrow_right_esExports = { render: arrow_right_render, staticRenderFns: arrow_right_staticRenderFns }
/* harmony default export */ var views_arrow_right = (arrow_right_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/arrow-right.vue
var arrow_right_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var arrow_right___vue_template_functional__ = false
/* styles */
var arrow_right___vue_styles__ = null
/* scopeId */
var arrow_right___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var arrow_right___vue_module_identifier__ = null
var arrow_right_Component = arrow_right_normalizeComponent(
  arrow_right,
  views_arrow_right,
  arrow_right___vue_template_functional__,
  arrow_right___vue_styles__,
  arrow_right___vue_scopeId__,
  arrow_right___vue_module_identifier__
)

/* harmony default export */ var Icon_views_arrow_right = (arrow_right_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/line-arrow-right.vue
//
//
//
//

/* harmony default export */ var line_arrow_right = ({
  name: 'iconLineArrowRight'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-901d9912","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/line-arrow-right.vue
var line_arrow_right_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"9792"}},[_c('path',{attrs:{"d":"M950.378747 494.018463 660.673599 198.314695c-9.380648-9.624195-24.707728-9.624195-34.138518 0-9.381671 9.576099-9.381671 25.222451 0 34.848693l248.494561 253.612115L88.338443 486.775502c-13.3214 0-24.142863 11.047614-24.142863 24.641213 0 13.597693 10.821463 24.645306 24.142863 24.645306l786.690176 0L626.535081 789.694603c-9.381671 9.603729-9.381671 25.248034 0 34.847669 4.76349 4.836145 10.939143 7.194866 17.116843 7.194866 6.1777 0 12.355399-2.405793 17.116843-7.194866l289.704125-295.723212c9.383718-9.602705 9.383718-25.244964 0-34.849716L950.378747 494.018463z","p-id":"9793"}})])}
var line_arrow_right_staticRenderFns = []
var line_arrow_right_esExports = { render: line_arrow_right_render, staticRenderFns: line_arrow_right_staticRenderFns }
/* harmony default export */ var views_line_arrow_right = (line_arrow_right_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/line-arrow-right.vue
var line_arrow_right_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var line_arrow_right___vue_template_functional__ = false
/* styles */
var line_arrow_right___vue_styles__ = null
/* scopeId */
var line_arrow_right___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var line_arrow_right___vue_module_identifier__ = null
var line_arrow_right_Component = line_arrow_right_normalizeComponent(
  line_arrow_right,
  views_line_arrow_right,
  line_arrow_right___vue_template_functional__,
  line_arrow_right___vue_styles__,
  line_arrow_right___vue_scopeId__,
  line_arrow_right___vue_module_identifier__
)

/* harmony default export */ var Icon_views_line_arrow_right = (line_arrow_right_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-33809e2e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/edit.vue
var edit_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"10699"}},[_c('path',{attrs:{"d":"M924.766 187.485c-32.297-32.412-62.339-68.774-99.757-95.411-34.261-7.093-50.787 29.928-74.311 47.237 39.777 46.201 86.117 87.013 128.923 130.718 19.407-23.095 65.369-46.724 45.145-82.543zM903.499 362.026c-27.158 27.294-55.258 53.806-81.519 82.146-0.648 109.327 0.273 218.642-0.375 327.946-0.545 40.3-35.851 76.004-76.13 77.445-165.797 0.65-331.717 0.65-497.513 0.127-44.75-1.191-80.6-44.103-77.048-88.058-0.125-158.274-0.125-316.403 0-474.533-3.406-43.84 32.55-85.968 76.797-87.535 109.85-1.451 219.739 0.125 329.462-0.794 28.495-25.717 54.737-53.942 82.063-80.976-146.242 0-292.337-0.773-438.557 0.397-68.274 1.18-129.445 60.898-130.614 129.403-0.272 184.515-0.793 368.895 0.25 553.399 0.272 66.414 56.7 124.012 122.091 130.322l574.541 0c61.944-10.884 115.115-64.972 115.907-129.403 1.839-146.576 0.399-293.297 0.649-439.883zM859.669 290.243c-43.058-43.309-86.365-86.357-129.946-129.142-95.309 94.619-190.867 188.987-285.63 284.128 42.91 43.182 86.094 86.22 129.674 128.871 95.433-94.484 190.718-189.238 285.902-283.856zM373.604 643.78c58.392-15.877 89.499-25.874 147.911-41.616 15.607-4.973 25.989-7.98 33.992-11.167-41.345-39.369-88.852-87.891-130.072-127.523-17.32 60.106-34.534 120.201-51.832 180.305z","p-id":"10700"}})])}
var edit_staticRenderFns = []
var edit_esExports = { render: edit_render, staticRenderFns: edit_staticRenderFns }
/* harmony default export */ var edit = (edit_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/edit.vue
var edit_normalizeComponent = __webpack_require__("AYo0")
/* script */
var edit___vue_script__ = null
/* template */

/* template functional */
var edit___vue_template_functional__ = false
/* styles */
var edit___vue_styles__ = null
/* scopeId */
var edit___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var edit___vue_module_identifier__ = null
var edit_Component = edit_normalizeComponent(
  edit___vue_script__,
  edit,
  edit___vue_template_functional__,
  edit___vue_styles__,
  edit___vue_scopeId__,
  edit___vue_module_identifier__
)

/* harmony default export */ var views_edit = (edit_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/notice.vue
//
//
//
//

/* harmony default export */ var notice = ({
  name: 'iconNotice'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-6e774860","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/notice.vue
var notice_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2905"}},[_c('path',{attrs:{"d":"M510.368 939.104c-21.728 0-43.712-15.104-71.52-38.72l-189.472-157.472L163.552 742.912C108.672 742.88 64 698.24 64 643.328l0-263.104c0-54.88 44.672-99.552 99.552-99.552l85.824 0 189.376-157.376c27.904-23.968 49.504-38.4 71.424-38.4 23.808 0 51.616 16.224 51.616 61.856l0 730.08C561.792 922.816 534.08 939.104 510.368 939.104L510.368 939.104zM163.552 347.04c-18.272 0-33.184 14.912-33.184 33.184l0 263.104c0 18.304 14.912 33.184 33.184 33.184l99.552 0c8.8 0 17.248 3.488 23.456 9.728l199.168 167.2c3.52 3.488 6.72 6.432 9.664 8.896L495.392 161.28c-2.88 2.432-6.176 5.376-9.728 8.928l-199.104 167.104c-6.208 6.24-14.656 9.728-23.456 9.728L163.552 347.04 163.552 347.04zM677.504 738.24c-6.688 0-13.472-2.016-19.328-6.24-14.88-10.688-18.272-31.424-7.616-46.336l13.152-17.984c34.336-46.56 64-86.816 64-155.904 0-71.584-26.272-106.336-59.584-150.304-5.888-7.744-11.744-15.552-17.568-23.616-10.688-14.88-7.296-35.616 7.616-46.336 14.912-10.752 35.616-7.296 46.336 7.616 5.44 7.616 11.04 15.008 16.544 22.304 35.904 47.456 72.992 96.512 72.992 190.368 0 90.88-40.832 146.336-76.896 195.296l-12.672 17.344C698.016 733.472 687.84 738.24 677.504 738.24L677.504 738.24zM790.4 850.912c-7.776 0-15.584-2.72-21.856-8.224-13.76-12.064-15.168-33.056-3.104-46.816 66.592-75.968 128.192-162.88 128.192-284.064 0-121.184-61.6-208.128-128.192-284.032-12.064-13.792-10.688-34.752 3.104-46.848 13.696-12.096 34.688-10.72 46.816 3.04 71.52 81.6 144.64 184.32 144.64 327.84 0 143.52-73.152 246.272-144.64 327.808C808.736 847.104 799.584 850.912 790.4 850.912L790.4 850.912zM790.4 850.912","p-id":"2906"}})])}
var notice_staticRenderFns = []
var notice_esExports = { render: notice_render, staticRenderFns: notice_staticRenderFns }
/* harmony default export */ var views_notice = (notice_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/notice.vue
var notice_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var notice___vue_template_functional__ = false
/* styles */
var notice___vue_styles__ = null
/* scopeId */
var notice___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var notice___vue_module_identifier__ = null
var notice_Component = notice_normalizeComponent(
  notice,
  views_notice,
  notice___vue_template_functional__,
  notice___vue_styles__,
  notice___vue_scopeId__,
  notice___vue_module_identifier__
)

/* harmony default export */ var Icon_views_notice = (notice_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/views/search.vue
//
//
//
//

/* harmony default export */ var search = ({
  name: 'iconSearch'
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-6f83671d","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/views/search.vue
var search_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"width":"1em","height":"1em","vertical-align":"middle","fill":"currentColor","overflow":"hidden"},attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1540"}},[_c('path',{attrs:{"d":"M855.04 430.08c0-235.52-192-427.52-427.52-427.52C192 2.56 0 194.56 0 430.08 0 665.6 192 857.6 427.52 857.6 663.04 857.6 855.04 665.6 855.04 430.08zM427.52 806.4C220.16 806.4 51.2 637.44 51.2 430.08 51.2 222.72 220.16 53.76 427.52 53.76c207.36 0 376.32 168.96 376.32 376.32C803.84 637.44 634.88 806.4 427.52 806.4zM279.04 235.52c-10.24-10.24-25.6-10.24-35.84 2.56-2.56 2.56-168.96 186.88 0 371.2 5.12 5.12 12.8 7.68 17.92 7.68 5.12 0 12.8-2.56 17.92-7.68 10.24-10.24 10.24-25.6 2.56-35.84-138.24-148.48-5.12-294.4 0-302.08C289.28 261.12 289.28 245.76 279.04 235.52zM998.4 865.28l-158.72-158.72L801.28 742.4l158.72 158.72c15.36 15.36 15.36 40.96 0 56.32-7.68 7.68-17.92 12.8-28.16 12.8-10.24 0-20.48-5.12-28.16-12.8l-158.72-158.72-35.84 35.84 158.72 158.72c17.92 17.92 40.96 25.6 64 25.6 23.04 0 46.08-7.68 64-25.6C1031.68 957.44 1031.68 901.12 998.4 865.28z","p-id":"1541"}})])}
var search_staticRenderFns = []
var search_esExports = { render: search_render, staticRenderFns: search_staticRenderFns }
/* harmony default export */ var views_search = (search_esExports);
// CONCATENATED MODULE: ../src/components/Icon/views/search.vue
var search_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var search___vue_template_functional__ = false
/* styles */
var search___vue_styles__ = null
/* scopeId */
var search___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var search___vue_module_identifier__ = null
var search_Component = search_normalizeComponent(
  search,
  views_search,
  search___vue_template_functional__,
  search___vue_styles__,
  search___vue_scopeId__,
  search___vue_module_identifier__
)

/* harmony default export */ var Icon_views_search = (search_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Icon/src/Icon.vue
//
//
//
//






















/* harmony default export */ var src_Icon = ({
  name: 'zIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    success: Icon_views_success,
    warning: Icon_views_warning,
    error: Icon_views_error,
    loading: Icon_views_loading,
    loadingPoint: Icon_views_loading_point,
    loadingLine: Icon_views_loading_line,
    plus: Icon_views_plus,
    user: Icon_views_user,
    lock: Icon_views_lock,
    alipay: Icon_views_alipay,
    weixin: views_weixin,
    location: components_Icon_views_location,
    file: Icon_views_file,
    love: Icon_views_love,
    start: Icon_views_start,
    arrowRight: Icon_views_arrow_right,
    lineArrowRight: Icon_views_line_arrow_right,
    edit: views_edit,
    notice: Icon_views_notice,
    search: Icon_views_search
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-06500fb6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Icon/src/Icon.vue
var src_Icon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.name,{tag:"component",staticClass:"z-svg-icon"})}
var src_Icon_staticRenderFns = []
var src_Icon_esExports = { render: src_Icon_render, staticRenderFns: src_Icon_staticRenderFns }
/* harmony default export */ var Icon_src_Icon = (src_Icon_esExports);
// CONCATENATED MODULE: ../src/components/Icon/src/Icon.vue
function Icon_injectStyle (ssrContext) {
  __webpack_require__("zd6W")
}
var src_Icon_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var src_Icon___vue_template_functional__ = false
/* styles */
var src_Icon___vue_styles__ = Icon_injectStyle
/* scopeId */
var src_Icon___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_Icon___vue_module_identifier__ = null
var src_Icon_Component = src_Icon_normalizeComponent(
  src_Icon,
  Icon_src_Icon,
  src_Icon___vue_template_functional__,
  src_Icon___vue_styles__,
  src_Icon___vue_scopeId__,
  src_Icon___vue_module_identifier__
)

/* harmony default export */ var components_Icon_src_Icon = (src_Icon_Component.exports);

// CONCATENATED MODULE: ../src/components/Icon/index.js


components_Icon_src_Icon.install = (Vue) => {
  Vue.component(components_Icon_src_Icon.name, components_Icon_src_Icon)
}

/* harmony default export */ var components_Icon = (components_Icon_src_Icon);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Button/src/Button.vue
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
* 按钮组件
* @params val 按钮内容
* @params type 按钮样式类型 primary success warning danger
* @params size 按钮尺寸 normal large small mini
* @params disabled 是否禁用
* @params plain 按钮是否镂空
* @params icon icon图标
* */


/* harmony default export */ var src_Button = ({
  name: 'zButton',
  components: {
    Icon: components_Icon
  },
  props: {
    val: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    icon: String,
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-3ae7cb04","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Button/src/Button.vue
var src_Button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"z-button",class:[("z-button-" + _vm.type),
        ("z-button-" + _vm.size),
        {'z-button-disabled': _vm.disabled, 'z-button-round': _vm.round, 'z-button-loading': _vm.loading}, _vm.plain ? ("z-button-" + _vm.type + "-plain") : ''],attrs:{"disabled":_vm.disabled},on:{"click":_vm.handleClick}},[(_vm.icon || _vm.$slots.icon || _vm.loading)?_c('span',{staticClass:"z-button-icon"},[_vm._t("icon",[_c('icon',{attrs:{"name":"loading"}})])],2):_vm._e(),_vm._v(" "),(_vm.val)?_c('span',{staticClass:"z-button-label"},[_vm._v(_vm._s(_vm.val))]):_vm._e()])}
var src_Button_staticRenderFns = []
var src_Button_esExports = { render: src_Button_render, staticRenderFns: src_Button_staticRenderFns }
/* harmony default export */ var Button_src_Button = (src_Button_esExports);
// CONCATENATED MODULE: ../src/components/Button/src/Button.vue
function src_Button_injectStyle (ssrContext) {
  __webpack_require__("HCZ1")
}
var src_Button_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var src_Button___vue_template_functional__ = false
/* styles */
var src_Button___vue_styles__ = src_Button_injectStyle
/* scopeId */
var src_Button___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_Button___vue_module_identifier__ = null
var src_Button_Component = src_Button_normalizeComponent(
  src_Button,
  Button_src_Button,
  src_Button___vue_template_functional__,
  src_Button___vue_styles__,
  src_Button___vue_scopeId__,
  src_Button___vue_module_identifier__
)

/* harmony default export */ var components_Button_src_Button = (src_Button_Component.exports);

// CONCATENATED MODULE: ../src/components/Button/index.js


components_Button_src_Button.install = (Vue) => {
  Vue.component(components_Button_src_Button.name, components_Button_src_Button)
}

/* harmony default export */ var components_Button = (components_Button_src_Button);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Toast/src/Toast.vue
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



/* harmony default export */ var Toast = ({
  name: 'zToast',
  components: {
    Icon: components_Icon
  },
  props: {
    message: [Number, String],
    type: String,
    duration: {
      type: Number,
      default: 3000
    }
  },
  data: function data() {
    return {
      visible: false
    };
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-f2c8e738","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Toast/src/Toast.vue
var Toast_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"z-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"z-toast"},[_c('div',{staticClass:"z-toast-container"},[_vm._t("header",[(_vm.type)?_c('icon',{staticClass:"z-toast-header-wrapper",attrs:{"name":_vm.type}}):_vm._e()]),_vm._v(" "),(_vm.message)?_c('div',{staticClass:"z-toast-body-wrapper",class:_vm.type ? 'z-toast-message-pd' : ''},[_vm._v(_vm._s(_vm.message))]):_vm._e()],2)])])}
var Toast_staticRenderFns = []
var Toast_esExports = { render: Toast_render, staticRenderFns: Toast_staticRenderFns }
/* harmony default export */ var src_Toast = (Toast_esExports);
// CONCATENATED MODULE: ../src/components/Toast/src/Toast.vue
function Toast_injectStyle (ssrContext) {
  __webpack_require__("2ArX")
}
var Toast_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Toast___vue_template_functional__ = false
/* styles */
var Toast___vue_styles__ = Toast_injectStyle
/* scopeId */
var Toast___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Toast___vue_module_identifier__ = null
var Toast_Component = Toast_normalizeComponent(
  Toast,
  src_Toast,
  Toast___vue_template_functional__,
  Toast___vue_styles__,
  Toast___vue_scopeId__,
  Toast___vue_module_identifier__
)

/* harmony default export */ var Toast_src_Toast = (Toast_Component.exports);

// CONCATENATED MODULE: ../src/components/Toast/index.js



const constructorToast = vue_esm["a" /* default */].extend(Toast_src_Toast)

let instance

const Toast_Toast = (options = {}) => {
  if (!instance) {
    instance = new constructorToast({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }

  vue_esm["a" /* default */].nextTick(() => {
    const duration = options.duration || 3000

    instance.closed = false
    clearTimeout(instance.timer)

    instance.message = typeof options === 'string' ? options : options.message
    instance.type = options.type || ''
    instance.visible = true

    instance.timer = setTimeout(() => {
      if (instance.closed) return false
      instance.visible = false
      instance.closed = true
    }, duration)
  })

  return instance
}

/* harmony default export */ var components_Toast = (Toast_Toast);

// EXTERNAL MODULE: ../node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js
var promise = __webpack_require__("io2r");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ../node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("bZQ3");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ../node_modules/_better-scroll@1.8.4@better-scroll/dist/bscroll.esm.js
/*!
 * better-normal-scroll v1.8.4
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

// ssr support
var bscroll_esm_inBrowser = typeof window !== 'undefined';
var ua = bscroll_esm_inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function bscroll_esm_extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

var elementStyle = bscroll_esm_inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!bscroll_esm_inBrowser) {
    return false;
  }
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

var transform = prefixStyle('transform');

var hasPerspective = bscroll_esm_inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = bscroll_esm_inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = bscroll_esm_inBrowser && prefixStyle('transition') in elementStyle;

var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionProperty: prefixStyle('transitionProperty'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var event = 'click';
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, bscroll_esm_extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    bscroll_esm_extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.001,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel:{
   *   speed: 20,
   *   invert: false
   * }
   */
  mouseWheel: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = bscroll_esm_extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    Object.defineProperty(this, 'isInTransition', {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('beforeScrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > 0 || this.x < this.maxScrollX || this.y > 0 || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        break;
      case 'touchmove':
      case 'mousemove':
        this._move(e);
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e);
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = scrollerRect.width;
    this.scrollerHeight = scrollerRect.height;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = 0;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = 0;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
	// easeOutQuint
	swipe: {
		style: 'cubic-bezier(0.23, 1, 0.32, 1)',
		fn: function fn(t) {
			return 1 + --t * t * t * t * t;
		}
	},
	// easeOutQuard
	swipeBounce: {
		style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		fn: function fn(t) {
			return t * (2 - t);
		}
	},
	// easeOutQuart
	bounce: {
		style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		fn: function fn(t) {
			return 1 - --t * t * t * t;
		}
	}
};

function momentum(current, start, time, lowerMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > 0) {
    destination = wrapperSize ? Math.min(wrapperSize / 4, wrapperSize / rate * speed) : 0;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!bscroll_esm_inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!bscroll_esm_inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

function bscroll_esm_warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function bscroll_esm_assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    // Slow down or stop if outside of the boundaries
    if (newX > 0 || newX < this.maxScrollX) {
      if (this.options.bounce) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > 0 ? 0 : this.maxScrollX;
      }
    }
    if (newY > 0 || newY < this.maxScrollY) {
      if (this.options.bounce) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > 0 ? 0 : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === 1) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > 1) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

    this.scrollTo(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
          var index = Math.abs(Math.round(this.y / this.itemHeight));
          var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionProperty = function () {
    var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

    this.scrollerStyle[style.transitionProperty] = property;
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    if (!this.pulling && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== 3) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y) {
    bscroll_esm_assert(!isUndef(x) && !isUndef(y), 'Oops! translate x or y is null or undefined. please check your code.');
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY);

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;

      me._translate(newX, newY);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === 3) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionProperty();
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === 3) {
        this._startProbe();
      }

      if (this.options.wheel) {
        if (y > 0) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
      return;
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > 0) {
      x = 0;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > 0) {
      y = 0;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');

    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 0) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      var initPage = snap.loop ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPage, _this.currentPage.pageY || 0, 0);

      // Update snap threshold if needed
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (_this.currentPage.pageX === 0) {
          _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
        }
        if (_this.currentPage.pageX === _this.pages.length - 1) {
          _this._goToPage(1, _this.currentPage.pageY, 0);
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > 0) {
      x = 0;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > 0) {
      y = 0;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];

    var snap = this.options.snap;

    if (!snap || !this.pages) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (snap) {
      if (snap.loop) {
        var len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      }
      this._goToPage(x, y, time, easing);
    }
  };

  BScroll.prototype.next = function (time, easing) {
    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (snap) {
      if (snap.loop) {
        var currentPage = bscroll_esm_extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
        return currentPage;
      }
      return this.currentPage;
    }
    return null;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
      bscroll_esm_warn('wheel option selectedIndex is required!');
    }
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  this.transitionTime();
  this._calculate();
  this.updatePosition();
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = 3;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = 3;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    this.pullupWatching = true;
    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;


    this.on('scroll', checkToEnd);

    function checkToEnd(pos) {
      var _this = this;

      if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
        // reset pullupWatching status after scroll end.
        this.once('scrollEnd', function () {
          _this.pullupWatching = false;
        });
        this.trigger('pullingUp');
        this.off('scroll', checkToEnd);
      }
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i;

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > 0) {
      newX = 0;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > 0) {
      newY = 0;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    this.scrollTo(newX, newY);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
  };
}

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    bscroll_esm_warn('can not resolve the wrapper dom');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    bscroll_esm_warn('the wrapper need at least one child element to be scroller');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);

BScroll.Version = '1.8.4';

/* harmony default export */ var bscroll_esm = (BScroll);

// CONCATENATED MODULE: ../src/components/Scroll/src/public.js
function public_getRect(el) {
  if (el instanceof window.SVGElement) {
    let rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Scroll/src/Scroll.vue


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
//






var DIRECTION_H = 'horizontal';
var DIRECTION_V = 'vertical';
var DEFAULT_REFRESH_TXT = 'Refresh success';
var EVENT_SCROLL = 'scroll';
var EVENT_BEFORE_SCROLL_START = 'before-scroll-start';
var EVENT_CLICK = 'click';
var EVENT_PULLING_DOWN = 'pulling-down';
var EVENT_PULLING_UP = 'pulling-up';

var Scroll_DEFAULT_OPTIONS = {
  observeDOM: true,
  click: true,
  probeType: 1,
  scrollbar: false,
  pullDownRefresh: false,
  pullUpLoad: false
};

/* harmony default export */ var src_Scroll = ({
  name: 'zScroll',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: DIRECTION_V
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    listRef: {
      type: String,
      default: 'list'
    }
  },
  data: function data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
      isPullUpLoad: false,
      pullUpDirty: true,
      bubbleY: 0,
      pullDownStyle: ''
    };
  },

  computed: {
    pullUpLoad: function pullUpLoad() {
      return this.options.pullUpLoad;
    },
    pullDownRefresh: function pullDownRefresh() {
      return this.options.pullDownRefresh;
    },
    pullUpTxt: function pullUpTxt() {
      var pullUpLoad = this.pullUpLoad;
      var txt = pullUpLoad && pullUpLoad.txt;
      var moreTxt = txt && txt.more || '';
      var noMoreTxt = txt && txt.noMore || '';
      return this.pullUpDirty ? moreTxt : noMoreTxt;
    },
    refreshTxt: function refreshTxt() {
      var pullDownRefresh = this.pullDownRefresh;
      return pullDownRefresh && pullDownRefresh.txt || DEFAULT_REFRESH_TXT;
    }
  },
  created: function created() {
    var _this = this;

    this.pullDownInitTop = -50;
    this.$nextTick(function () {
      _this.initScroll();
    });
  },

  methods: {
    initScroll: function initScroll() {
      var _this2 = this;

      if (!this.$refs.scrollWrapper) {
        return;
      }
      this._calculateMinHeight();
      var options = assign_default()({}, Scroll_DEFAULT_OPTIONS, {
        scrollY: this.direction === DIRECTION_V,
        scrollX: this.direction === DIRECTION_H
      }, this.options);
      this.scroll = new bscroll_esm(this.$refs.scrollWrapper, options);
      if (this.listenScroll) {
        this.scroll.on('scroll', function (pos) {
          _this2.$emit(EVENT_SCROLL, pos);
        });
      }
      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', function () {
          _this2.$emit(EVENT_BEFORE_SCROLL_START);
        });
      }
      if (this.pullDownRefresh) {
        this._initPullDownRefresh();
      }
      if (this.pullUpLoad) {
        this._initPullUpLoad();
      }
    },
    disable: function disable() {
      this.scroll && this.scroll.disable();
    },
    enable: function enable() {
      this.scroll && this.scroll.enable();
    },
    refresh: function refresh() {
      this._calculateMinHeight();
      this.scroll && this.scroll.refresh();
    },
    destroy: function destroy() {
      this.scroll.destroy();
    },
    scrollTo: function scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement: function scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    clickItem: function clickItem(item) {
      this.$emit(EVENT_CLICK, item);
    },
    forceUpdate: function forceUpdate(dirty) {
      var _this3 = this;

      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false;
        this._reboundPullDown().then(function () {
          _this3._afterPullDown(dirty);
        });
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false;
        this.scroll.finishPullUp();
        this.pullUpDirty = dirty;
        dirty && this.refresh();
      } else {
        dirty && this.refresh();
      }
    },
    _calculateMinHeight: function _calculateMinHeight() {
      if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
        this.$refs.listWrapper.style.minHeight = public_getRect(this.$refs.scrollWrapper).height + 1 + 'px';
      }
    },
    _initPullDownRefresh: function _initPullDownRefresh() {
      var _this4 = this;

      this.scroll.on('pullingDown', function () {
        _this4.beforePullDown = false;
        _this4.isPullingDown = true;
        _this4.$emit(EVENT_PULLING_DOWN);
      });
      this.scroll.on('scroll', function (pos) {
        if (_this4.beforePullDown) {
          _this4.bubbleY = Math.max(0, pos.y + _this4.pullDownInitTop);
          _this4.pullDownStyle = 'top:' + Math.min(pos.y + _this4.pullDownInitTop, 10) + 'px';
        } else {
          _this4.bubbleY = 0;
          _this4.pullDownStyle = 'top:' + Math.min(pos.y - 30, 10) + 'px';
        }
      });
    },
    _initPullUpLoad: function _initPullUpLoad() {
      var _this5 = this;

      this.scroll.on('pullingUp', function () {
        _this5.isPullUpLoad = true;
        _this5.$emit(EVENT_PULLING_UP);
      });
    },
    _reboundPullDown: function _reboundPullDown() {
      var _this6 = this;

      var _pullDownRefresh$stop = this.pullDownRefresh.stopTime,
          stopTime = _pullDownRefresh$stop === undefined ? 600 : _pullDownRefresh$stop;

      return new promise_default.a(function (resolve) {
        setTimeout(function () {
          _this6.scroll.finishPullDown();
          _this6.isPullingDown = false;
          resolve();
        }, stopTime);
      });
    },
    _afterPullDown: function _afterPullDown(dirty) {
      var _this7 = this;

      setTimeout(function () {
        _this7.pullDownStyle = 'top:' + _this7.pullDownInitTop + 'px';
        _this7.beforePullDown = true;
        dirty && _this7.refresh();
      }, this.scroll.options.bounceTime);
    }
  },
  watch: {
    data: function data() {
      var _this8 = this;

      setTimeout(function () {
        _this8.forceUpdate(true);
      }, this.refreshDelay);
    }
  },
  components: {
    Bubble: components_Bubble,
    Icon: components_Icon
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-2b334320","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Scroll/src/Scroll.vue
var src_Scroll_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scrollWrapper",staticClass:"z-scroll-wrapper"},[_c('div',{staticClass:"z-scroll-content"},[_c('div',{ref:"listWrapper",staticClass:"z-scroll-list-wrapper"},[_vm._t("list",[_c('ul',{staticClass:"z-scroll-list"},_vm._l((_vm.data),function(item){return _c('li',{staticClass:"z-scroll-list-item",on:{"click":function($event){_vm.clickItem(item)}}},[_vm._v(_vm._s(item))])}))])],2),_vm._v(" "),_vm._t("pullup",[(_vm.pullUpLoad)?_c('div',{staticClass:"z-pullup-wrapper"},[(!_vm.isPullUpLoad)?_c('div',{staticClass:"z-before-trigger"},[_c('span',[_vm._v(_vm._s(_vm.pullUpTxt))])]):_c('div',{staticClass:"z-after-trigger"},[_c('icon',{attrs:{"name":"loading"}})],1)]):_vm._e()],{pullUpLoad:_vm.pullUpLoad,isPullUpLoad:_vm.isPullUpLoad})],2),_vm._v(" "),_vm._t("pulldown",[(_vm.pullDownRefresh)?_c('div',{staticClass:"z-pulldown-wrapper",style:(_vm.pullDownStyle)},[(_vm.beforePullDown)?_c('div',{staticClass:"z-before-trigger"},[_c('bubble',{attrs:{"y":_vm.bubbleY}})],1):_c('div',{staticClass:"z-after-trigger"},[(_vm.isPullingDown)?_c('div',{staticClass:"z-scroll-loading"},[_c('icon',{attrs:{"name":"loading"}})],1):_c('div',[_c('span',[_vm._v(_vm._s(_vm.refreshTxt))])])])]):_vm._e()],{pullDownRefresh:_vm.pullDownRefresh,pullDownStyle:_vm.pullDownStyle,beforePullDown:_vm.beforePullDown,isPullingDown:_vm.isPullingDown,bubbleY:_vm.bubbleY})],2)}
var src_Scroll_staticRenderFns = []
var src_Scroll_esExports = { render: src_Scroll_render, staticRenderFns: src_Scroll_staticRenderFns }
/* harmony default export */ var Scroll_src_Scroll = (src_Scroll_esExports);
// CONCATENATED MODULE: ../src/components/Scroll/src/Scroll.vue
function src_Scroll_injectStyle (ssrContext) {
  __webpack_require__("hVZ0")
}
var src_Scroll_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var src_Scroll___vue_template_functional__ = false
/* styles */
var src_Scroll___vue_styles__ = src_Scroll_injectStyle
/* scopeId */
var src_Scroll___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var src_Scroll___vue_module_identifier__ = null
var src_Scroll_Component = src_Scroll_normalizeComponent(
  src_Scroll,
  Scroll_src_Scroll,
  src_Scroll___vue_template_functional__,
  src_Scroll___vue_styles__,
  src_Scroll___vue_scopeId__,
  src_Scroll___vue_module_identifier__
)

/* harmony default export */ var components_Scroll_src_Scroll = (src_Scroll_Component.exports);

// CONCATENATED MODULE: ../src/components/Scroll/index.js


components_Scroll_src_Scroll.install = (Vue) => {
  Vue.component(components_Scroll_src_Scroll.name, components_Scroll_src_Scroll)
}

/* harmony default export */ var components_Scroll = (components_Scroll_src_Scroll);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Swipe/src/Swipe-item.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var Swipe_item = ({
  name: 'zSwipeItem',
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-e9f962fa","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Swipe/src/Swipe-item.vue
var Swipe_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-swipe-item-container"},[_vm._t("default",[_c('a',{attrs:{"href":_vm.item.href ? _vm.item.href : 'javascript:void(0)'}},[_c('img',{attrs:{"src":_vm.item.src}})])])],2)}
var Swipe_item_staticRenderFns = []
var Swipe_item_esExports = { render: Swipe_item_render, staticRenderFns: Swipe_item_staticRenderFns }
/* harmony default export */ var src_Swipe_item = (Swipe_item_esExports);
// CONCATENATED MODULE: ../src/components/Swipe/src/Swipe-item.vue
function Swipe_item_injectStyle (ssrContext) {
  __webpack_require__("f5gj")
}
var Swipe_item_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Swipe_item___vue_template_functional__ = false
/* styles */
var Swipe_item___vue_styles__ = Swipe_item_injectStyle
/* scopeId */
var Swipe_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Swipe_item___vue_module_identifier__ = null
var Swipe_item_Component = Swipe_item_normalizeComponent(
  Swipe_item,
  src_Swipe_item,
  Swipe_item___vue_template_functional__,
  Swipe_item___vue_styles__,
  Swipe_item___vue_scopeId__,
  Swipe_item___vue_module_identifier__
)

/* harmony default export */ var Swipe_src_Swipe_item = (Swipe_item_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Swipe/src/Swipe.vue
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




var EVENT_CHANGE = 'change';
var EVENT_SELECT = 'click';

/*
* @params data 插入数据
* @params initialIndex 默认首个index
* @params loop 是否循环
* @params autoPlay 是否自动轮播
* @params duration 播放间隔
* @params threshold 滑动到多少切换(0, 1) 默认0.3
* @params speed 动画切换的速度
* @params verticalType 默认横向
* */
/* harmony default export */ var Swipe = ({
  name: 'zSwipe',
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    threshold: {
      type: Number,
      default: 0.3
    },
    speed: {
      type: Number,
      default: 400
    },
    verticalType: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      dots: 0,
      currentPageIndex: this.initialIndex || 0
    };
  },
  created: function created() {
    var _this = this;

    var needRefreshProps = ['data', 'loop', 'autoPlay', 'threshold', 'speed', 'allowVertical'];
    needRefreshProps.forEach(function (key) {
      _this.$watch(key, function () {
        _this.refresh();
      });
    });
  },

  watch: {
    initialIndex: function initialIndex(newIndex) {
      if (newIndex !== this.currentPageIndex) {
        this.slide && this.slide.goToPage(newIndex);
      }
    }
  },
  methods: {
    clickItem: function clickItem(item, index) {
      this.$emit(EVENT_SELECT, item, index);
    },
    refresh: function refresh() {
      var _this2 = this;

      this.slide && this.slide.destroy();
      clearTimeout(this._timer);
      this.$nextTick(function () {
        if (_this2.slide === null) {
          return;
        }
        if (_this2.slide !== undefined) {
          _this2.currentPageIndex = 0;
        }
        _this2.dots = 0;
        _this2._setSlideWidth();
        _this2._initDots();
        _this2._initSlide();
        if (_this2.autoPlay) {
          _this2._play();
        }
      });
    },
    _refresh: function _refresh() {
      this._setSlideWidth(true);
      this.slide.refresh();
    },
    _setSlideWidth: function _setSlideWidth(isResize) {
      this.children = this.$refs.swipeListWrapper.children;
      var width = 0;
      var slideWidth = this.$refs.swipeWrapper.clientWidth;
      for (var i = 0; i < this.children.length; i++) {
        this.children[i].style.width = slideWidth + 'px';
        width += slideWidth;
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth;
      }
      this.$refs.swipeListWrapper.style.width = width + 'px';
    },
    _initSlide: function _initSlide() {
      var _this3 = this;

      this.slide = new bscroll_esm(this.$refs.swipeWrapper, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        bounce: false,
        eventPassthrough: this.verticalType ? 'vertical' : '',
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        click: true,
        observeDOM: false
      });
      this.slide.goToPage(this.currentPageIndex, 0, 0);
      this.slide.on('scrollEnd', this._onScrollEnd);
      window.removeEventListener('touchend', this._touchEndEvent, false);
      this._touchEndEvent = function () {
        if (_this3.autoPlay) {
          _this3._play();
        }
      };
      window.addEventListener('touchend', this._touchEndEvent, false);
      this.slide.on('beforeScrollStart', function () {
        if (_this3.autoPlay) {
          clearTimeout(_this3._timer);
        }
      });
    },
    _onScrollEnd: function _onScrollEnd() {
      var pageIndex = this.slide.getCurrentPage().pageX;
      if (this.currentPageIndex !== pageIndex) {
        this.currentPageIndex = pageIndex;
        this.$emit(EVENT_CHANGE, this.currentPageIndex);
      }
      if (this.autoPlay) {
        this._play();
      }
    },
    _initDots: function _initDots() {
      this.dots = new Array(this.children.length);
    },
    _play: function _play() {
      var _this4 = this;

      clearTimeout(this._timer);
      this._timer = setTimeout(function () {
        _this4.slide.next();
      }, this.duration);
    },
    _deactivated: function _deactivated() {
      clearTimeout(this._timer);
      clearTimeout(this._resizeTimer);
      window.removeEventListener('resize', this._resizeHandler);
      window.removeEventListener('touchend', this._touchEndEvent, false);
    },
    _resizeHandler: function _resizeHandler() {
      var _this5 = this;

      if (!this.slide) {
        return;
      }
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(function () {
        if (_this5.slide.isInTransition) {
          _this5._onScrollEnd();
        } else {
          if (_this5.autoPlay) {
            _this5._play();
          }
        }
        _this5._refresh();
      }, 60);
    }
  },
  mounted: function mounted() {
    this.refresh();
    window.addEventListener('resize', this._resizeHandler);
  },
  activated: function activated() {
    if (this.autoPlay) {
      this._play();
    }
    window.addEventListener('resize', this._resizeHandler);
  },
  deactivated: function deactivated() {
    this._deactivated();
  },
  destroyed: function destroyed() {
    this._deactivated();
    if (this.slide) {
      this.slide.destroy();
      this.slide = null;
    }
  },

  components: {
    SwipeItem: Swipe_src_Swipe_item
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-434605db","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Swipe/src/Swipe.vue
var Swipe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"swipeWrapper",staticClass:"z-swipe-container"},[_c('div',{ref:"swipeListWrapper",staticClass:"z-swipe-list-wrapper"},[_vm._t("default",_vm._l((_vm.data),function(item,index){return _c('swipe-item',{key:index,attrs:{"item":item},on:{"click":function($event){_vm.clickItem(item, index)}}})}))],2),_vm._v(" "),_c('div',{staticClass:"z-swipe-dots-wrapper"},[_vm._t("dots",_vm._l((_vm.dots),function(item,index){return _c('span',{key:index,staticClass:"z-swipe-dots-item",class:{'z-swipe-active': _vm.currentPageIndex === index}})}),{current:_vm.currentPageIndex,dots:_vm.dots})],2)])}
var Swipe_staticRenderFns = []
var Swipe_esExports = { render: Swipe_render, staticRenderFns: Swipe_staticRenderFns }
/* harmony default export */ var src_Swipe = (Swipe_esExports);
// CONCATENATED MODULE: ../src/components/Swipe/src/Swipe.vue
var Swipe_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Swipe___vue_template_functional__ = false
/* styles */
var Swipe___vue_styles__ = null
/* scopeId */
var Swipe___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Swipe___vue_module_identifier__ = null
var Swipe_Component = Swipe_normalizeComponent(
  Swipe,
  src_Swipe,
  Swipe___vue_template_functional__,
  Swipe___vue_styles__,
  Swipe___vue_scopeId__,
  Swipe___vue_module_identifier__
)

/* harmony default export */ var Swipe_src_Swipe = (Swipe_Component.exports);

// CONCATENATED MODULE: ../src/components/Swipe/index.js



Swipe_src_Swipe.install = (Vue) => {
  Vue.component(Swipe_src_Swipe.name, Swipe_src_Swipe)
  Vue.component(Swipe_src_Swipe_item.name, Swipe_src_Swipe_item)
}

Swipe_src_Swipe.Item = Swipe_src_Swipe_item

/* harmony default export */ var components_Swipe = (Swipe_src_Swipe);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/utils/PupupUtil.vue
//
//
//
//
//
//

/* harmony default export */ var PupupUtil = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 2000
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('click');
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-1768fe16","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/utils/PupupUtil.vue
var PupupUtil_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"z-popup-util-container",style:({ zIndex: _vm.zIndex }),on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var PupupUtil_staticRenderFns = []
var PupupUtil_esExports = { render: PupupUtil_render, staticRenderFns: PupupUtil_staticRenderFns }
/* harmony default export */ var utils_PupupUtil = (PupupUtil_esExports);
// CONCATENATED MODULE: ../src/utils/PupupUtil.vue
function PupupUtil_injectStyle (ssrContext) {
  __webpack_require__("t8u0")
}
var PupupUtil_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var PupupUtil___vue_template_functional__ = false
/* styles */
var PupupUtil___vue_styles__ = PupupUtil_injectStyle
/* scopeId */
var PupupUtil___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var PupupUtil___vue_module_identifier__ = null
var PupupUtil_Component = PupupUtil_normalizeComponent(
  PupupUtil,
  utils_PupupUtil,
  PupupUtil___vue_template_functional__,
  PupupUtil___vue_styles__,
  PupupUtil___vue_scopeId__,
  PupupUtil___vue_module_identifier__
)

/* harmony default export */ var src_utils_PupupUtil = (PupupUtil_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Alert/src/Alert.vue
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
//




/* harmony default export */ var Alert = ({
  name: 'zAlert',
  components: {
    PopupUtil: src_utils_PupupUtil,
    Icon: components_Icon
  },
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    top: {
      type: String,
      default: '36%'
    },
    title: {
      type: [String, Number],
      default: '提示'
    },
    message: {
      type: [String, Number],
      default: ''
    },
    okTxt: {
      type: [String, Number],
      default: '确认'
    },
    cancelTxt: {
      type: [String, Number],
      default: '取消'
    },
    iconName: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },

  methods: {
    handleBtnClick: function handleBtnClick(boolean) {
      this.visible = false;
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-3b982c7c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Alert/src/Alert.vue
var Alert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"z-alert"}},[_c('popup-util',{attrs:{"visible":_vm.visible}},[_c('div',{staticClass:"z-alert-container",style:({ top: _vm.top })},[(!_vm.iconName)?_c('div',{staticClass:"z-alert-header"},[_vm._v(_vm._s(_vm.title))]):_c('div',{staticClass:"z-alert-header z-alert-header-icon"},[_c('icon',{attrs:{"name":_vm.iconName}})],1),_vm._v(" "),_c('div',{staticClass:"z-alert-body"},[(_vm.message)?_c('div',{staticClass:"z-alert-body-message",domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"z-alert-footer"},[_vm._t("btn",[(!(_vm.type === 'alert'))?_c('span',{staticClass:"z-alert-btn",on:{"click":function($event){_vm.handleBtnClick(false)}}},[_vm._v(_vm._s(_vm.cancelTxt))]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"z-alert-btn z-alert-ok-btn",class:{ 'z-alert-ok-btn-bl': !(_vm.type === 'alert') },on:{"click":function($event){_vm.handleBtnClick(true)}}},[_vm._v(_vm._s(_vm.okTxt))])])],2)])])],1)}
var Alert_staticRenderFns = []
var Alert_esExports = { render: Alert_render, staticRenderFns: Alert_staticRenderFns }
/* harmony default export */ var src_Alert = (Alert_esExports);
// CONCATENATED MODULE: ../src/components/Alert/src/Alert.vue
function Alert_injectStyle (ssrContext) {
  __webpack_require__("a3xN")
}
var Alert_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Alert___vue_template_functional__ = false
/* styles */
var Alert___vue_styles__ = Alert_injectStyle
/* scopeId */
var Alert___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Alert___vue_module_identifier__ = null
var Alert_Component = Alert_normalizeComponent(
  Alert,
  src_Alert,
  Alert___vue_template_functional__,
  Alert___vue_styles__,
  Alert___vue_scopeId__,
  Alert___vue_module_identifier__
)

/* harmony default export */ var Alert_src_Alert = (Alert_Component.exports);

// CONCATENATED MODULE: ../src/components/Alert/index.js



const constructorAlert = vue_esm["a" /* default */].extend(Alert_src_Alert)

let Alert_instance

const DEFAULT = {
  type: 'alert',
  top: '36%',
  title: '提示',
  message: '',
  okTxt: '确认',
  cancelTxt: '取消',
  iconName: ''
}

const Alert_Alert = (options={}) => {
  if (!Alert_instance) {
    Alert_instance = new constructorAlert({
      el: document.createElement('div')
    })
    document.body.appendChild(Alert_instance.$el)
  }
  // 插入配置如果传入就用传入否则使用默认
  for (const key in DEFAULT) {
    Alert_instance[key] = options[key] || DEFAULT[key]
  }

  vue_esm["a" /* default */].nextTick(() => {
    Alert_instance.visible = true
    Alert_instance.handleBtnClick = (boolean) => {
      if (options.callback) options.callback(boolean)

      Alert_instance.visible = false
    }
  })
}

/* harmony default export */ var components_Alert = (Alert_Alert);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Popup/src/Popup.vue
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



/* harmony default export */ var Popup = ({
  name: 'zPopup',
  components: {
    PopupUtil: src_utils_PupupUtil
  },
  props: {
    syncVisible: {
      type: Boolean,
      default: false
    },
    animateName: {
      type: String,
      default: 'slide'
    },
    position: {
      type: String,
      default: 'bottom'
    },
    screen: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      visible: false,
      isAnimateName: this.animateName
    };
  },
  beforeMount: function beforeMount() {
    this.isAnimateName = 'z-popup-' + this.animateName + '-' + this.position;
  },
  created: function created() {
    if (this.syncVisible) {
      this.visible = true;
    }
  },

  methods: {
    setVisible: function setVisible(val) {
      this.visible = false;
    }
  },
  watch: {
    visible: function visible(val) {
      this.$emit('update:syncVisible', val);
    },
    syncVisible: function syncVisible(val) {
      this.visible = val;
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-0e700fd6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Popup/src/Popup.vue
var Popup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-popup-container"},[_c('popup-util',{attrs:{"visible":_vm.visible},on:{"click":function($event){_vm.setVisible(false)}}}),_vm._v(" "),_c('transition',{attrs:{"name":_vm.isAnimateName}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"z-popup-wrapper",class:[("z-popup-" + _vm.position), _vm.screen ? ("z-popup-" + _vm.position + "-screen") : '']},[_vm._t("default")],2)])],1)}
var Popup_staticRenderFns = []
var Popup_esExports = { render: Popup_render, staticRenderFns: Popup_staticRenderFns }
/* harmony default export */ var src_Popup = (Popup_esExports);
// CONCATENATED MODULE: ../src/components/Popup/src/Popup.vue
function Popup_injectStyle (ssrContext) {
  __webpack_require__("5DQc")
}
var Popup_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Popup___vue_template_functional__ = false
/* styles */
var Popup___vue_styles__ = Popup_injectStyle
/* scopeId */
var Popup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Popup___vue_module_identifier__ = null
var Popup_Component = Popup_normalizeComponent(
  Popup,
  src_Popup,
  Popup___vue_template_functional__,
  Popup___vue_styles__,
  Popup___vue_scopeId__,
  Popup___vue_module_identifier__
)

/* harmony default export */ var Popup_src_Popup = (Popup_Component.exports);

// CONCATENATED MODULE: ../src/components/Popup/index.js


Popup_src_Popup.install = (Vue) => {
  Vue.component(Popup_src_Popup.name, Popup_src_Popup)
}

/* harmony default export */ var components_Popup = (Popup_src_Popup);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Spinner/src/Spinner.vue
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



/* harmony default export */ var Spinner = ({
  components: {
    Icon: components_Icon
  },
  props: {
    iconName: {
      type: String,
      default: 'loading'
    },
    message: {
      type: [String, Number],
      default: ''
    }
  },
  data: function data() {
    return {
      visible: false
    };
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-09f7e62c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Spinner/src/Spinner.vue
var Spinner_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"z-spinner-container"},[_c('div',{staticClass:"z-spinner-wrapper"},[_c('div',{staticClass:"z-spinner-header"},[_c('icon',{attrs:{"name":_vm.iconName}})],1),_vm._v(" "),(_vm.message)?_c('div',{staticClass:"z-spinner-body"},[_vm._v(_vm._s(_vm.message))]):_vm._e()])])}
var Spinner_staticRenderFns = []
var Spinner_esExports = { render: Spinner_render, staticRenderFns: Spinner_staticRenderFns }
/* harmony default export */ var src_Spinner = (Spinner_esExports);
// CONCATENATED MODULE: ../src/components/Spinner/src/Spinner.vue
function Spinner_injectStyle (ssrContext) {
  __webpack_require__("j+32")
}
var Spinner_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Spinner___vue_template_functional__ = false
/* styles */
var Spinner___vue_styles__ = Spinner_injectStyle
/* scopeId */
var Spinner___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Spinner___vue_module_identifier__ = null
var Spinner_Component = Spinner_normalizeComponent(
  Spinner,
  src_Spinner,
  Spinner___vue_template_functional__,
  Spinner___vue_styles__,
  Spinner___vue_scopeId__,
  Spinner___vue_module_identifier__
)

/* harmony default export */ var Spinner_src_Spinner = (Spinner_Component.exports);

// CONCATENATED MODULE: ../src/components/Spinner/index.js



const constructorSpinner = vue_esm["a" /* default */].extend(Spinner_src_Spinner)

let Spinner_instance

const Spinner_DEFAULT = {
  iconName: 'loading',
  message: ''
}

/* harmony default export */ var components_Spinner = ({
  open (options={}) {
    if (!Spinner_instance) {
      Spinner_instance = new constructorSpinner({
        el: document.createElement('div')
      })
      document.body.appendChild(Spinner_instance.$el)
    }

    for (const key in Spinner_DEFAULT) {
      Spinner_instance[key] = options[key] || Spinner_DEFAULT[key]
    }

    vue_esm["a" /* default */].nextTick(() => {
      Spinner_instance.visible = true
    })
  },
  close () {
    if (Spinner_instance) Spinner_instance.visible = false
  }
});

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Notice/src/Notice.vue
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
//
//
//
//
//
//
//


/*
* @params color String 字体颜色
* @params backgroundColor String 背景色
* @params isScroll Boolean 是否滚动
* @params speed Number 滚动速度
* @params delay Number 滚动间隔
* @params showNotice Boolean 是否显示左侧
* @params showClose Boolean 是否显示右侧
* */
/* harmony default export */ var Notice = ({
  name: 'zNotice',
  components: {
    Icon: components_Icon
  },
  props: {
    color: {
      type: String,
      default: 'rgb(255, 102, 0)'
    },
    backgroundColor: {
      type: String,
      default: 'rgb(255, 247, 204)'
    },
    isScroll: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    },
    delay: {
      type: [String, Number],
      default: 1
    },
    showNotice: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      visible: true,
      wrapWidth: 0,
      messageWith: 0,
      duration: 0,
      messageClassName: '',
      firstPlay: true
    };
  },

  computed: {
    messageStyle: function messageStyle() {
      return {
        paddingLeft: this.firstPlay ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.firstPlay ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      };
    }
  },
  mounted: function mounted() {
    this.initAnimate();
  },

  methods: {
    setVisible: function setVisible(val) {
      this.visible = val;
    },
    initAnimate: function initAnimate() {
      this.messageWidth = this.$refs.message.getBoundingClientRect().width;
      this.wrapWidth = this.$refs.messageWrapper.getBoundingClientRect().width;

      if (this.isScroll && this.messageWidth > this.wrapWidth) {
        this.duration = this.messageWidth / this.speed;
        this.messageClassName = 'z-notice-animate-play';
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this = this;

      this.firstPlay = false;
      this.$nextTick(function () {
        _this.duration = (_this.wrapWidth + _this.messageWidth) / _this.speed;
        _this.messageClassName = 'z-notice-animate-infinite';
      });
    },
    bindClick: function bindClick(e) {
      this.$emit('click', e);
    },
    bindClose: function bindClose() {
      if (!this.$slots.right) {
        this.setVisible(false);
        this.$emit('handleClose');
      }
    }
  },
  watch: {
    visible: function visible(val) {
      this.$emit('change', val);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-413cc266","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Notice/src/Notice.vue
var Notice_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"z-notice-container",style:({ backgroundColor: _vm.backgroundColor, color: _vm.color }),on:{"click":_vm.bindClick}},[(_vm.showNotice)?_c('div',{staticClass:"z-notice-left-wrapper"},[_vm._t("left",[_c('icon',{attrs:{"name":"notice"}})])],2):_vm._e(),_vm._v(" "),_c('div',{ref:"messageWrapper",staticClass:"z-notice-main"},[_c('div',{ref:"message",staticClass:"z-notice-main-info",class:_vm.messageClassName,style:(_vm.messageStyle),on:{"animationend":_vm.onAnimationEnd,"webkitAnimationEnd":_vm.onAnimationEnd}},[_vm._t("default")],2)]),_vm._v(" "),(_vm.showClose)?_c('div',{staticClass:"z-notice-right-wrapper",on:{"click":_vm.bindClose}},[_vm._t("right",[_c('icon',{attrs:{"name":"error"}})])],2):_vm._e()])}
var Notice_staticRenderFns = []
var Notice_esExports = { render: Notice_render, staticRenderFns: Notice_staticRenderFns }
/* harmony default export */ var src_Notice = (Notice_esExports);
// CONCATENATED MODULE: ../src/components/Notice/src/Notice.vue
function Notice_injectStyle (ssrContext) {
  __webpack_require__("42xX")
}
var Notice_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Notice___vue_template_functional__ = false
/* styles */
var Notice___vue_styles__ = Notice_injectStyle
/* scopeId */
var Notice___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Notice___vue_module_identifier__ = null
var Notice_Component = Notice_normalizeComponent(
  Notice,
  src_Notice,
  Notice___vue_template_functional__,
  Notice___vue_styles__,
  Notice___vue_scopeId__,
  Notice___vue_module_identifier__
)

/* harmony default export */ var Notice_src_Notice = (Notice_Component.exports);

// CONCATENATED MODULE: ../src/components/Notice/index.js


Notice_src_Notice.install = (Vue) => {
  Vue.component(Notice_src_Notice.name, Notice_src_Notice)
}

/* harmony default export */ var components_Notice = (Notice_src_Notice);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Cell/src/Cell-item.vue
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
//
//
//
//
//
//
//



/*
* @params title String 左侧标题
* @params label String 右侧内容
* @params iconName String 对应icon组件name
* @params message String 标题下面的描述
* @params disabled Boolean 是否禁用
* @slot leftIcon 左侧icon 标签
* @slot name 左侧标题 标签
* @slot rightIcon 右侧icon 标签
* @slot label 右侧内容 标签
* */
/* harmony default export */ var Cell_item = ({
  name: 'zCellItem',
  components: {
    Icon: components_Icon
  },
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: [String, Number],
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    bindClick: function bindClick(e) {
      this.$emit('click', e);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-5b032a80","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Cell/src/Cell-item.vue
var Cell_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-cell-item-container",class:{ 'z-cell-disabled': _vm.disabled },on:{"click":_vm.bindClick}},[(_vm.title || _vm.$slots.leftIcon || _vm.iconName || _vm.$slots.name)?_c('div',{staticClass:"z-cell-item-title"},[_c('div',{staticClass:"z-cell-item-title-top"},[_vm._t("leftIcon",[_c('icon',{attrs:{"name":_vm.iconName}})]),_vm._v(" "),_vm._t("title",[_c('span',{staticClass:"z-cell-item-title-info"},[_vm._v(_vm._s(_vm.title))])])],2),_vm._v(" "),(_vm.message)?_c('span',{staticClass:"z-cell-item-title-bottom",domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"z-cell-item-label"},[(_vm.label)?_vm._t("label",[_c('span',{staticClass:"z-cell-item-label-info"},[_vm._v(_vm._s(_vm.label))])]):_vm._e(),_vm._v(" "),_vm._t("rightIcon",[_c('icon',{attrs:{"name":"arrowRight"}})])],2)])}
var Cell_item_staticRenderFns = []
var Cell_item_esExports = { render: Cell_item_render, staticRenderFns: Cell_item_staticRenderFns }
/* harmony default export */ var src_Cell_item = (Cell_item_esExports);
// CONCATENATED MODULE: ../src/components/Cell/src/Cell-item.vue
function Cell_item_injectStyle (ssrContext) {
  __webpack_require__("Y+IO")
}
var Cell_item_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Cell_item___vue_template_functional__ = false
/* styles */
var Cell_item___vue_styles__ = Cell_item_injectStyle
/* scopeId */
var Cell_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Cell_item___vue_module_identifier__ = null
var Cell_item_Component = Cell_item_normalizeComponent(
  Cell_item,
  src_Cell_item,
  Cell_item___vue_template_functional__,
  Cell_item___vue_styles__,
  Cell_item___vue_scopeId__,
  Cell_item___vue_module_identifier__
)

/* harmony default export */ var Cell_src_Cell_item = (Cell_item_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Cell/src/Cell.vue
//
//
//
//
//
//
//
//



/* harmony default export */ var Cell = ({
  name: 'zCell',
  components: {
    CellItem: Cell_src_Cell_item
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-4406a102","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Cell/src/Cell.vue
var Cell_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-cell-container"},[_c('div',{staticClass:"z-cell-group-wrapper"},[_vm._t("default")],2)])}
var Cell_staticRenderFns = []
var Cell_esExports = { render: Cell_render, staticRenderFns: Cell_staticRenderFns }
/* harmony default export */ var src_Cell = (Cell_esExports);
// CONCATENATED MODULE: ../src/components/Cell/src/Cell.vue
function Cell_injectStyle (ssrContext) {
  __webpack_require__("0T5E")
}
var Cell_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Cell___vue_template_functional__ = false
/* styles */
var Cell___vue_styles__ = Cell_injectStyle
/* scopeId */
var Cell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Cell___vue_module_identifier__ = null
var Cell_Component = Cell_normalizeComponent(
  Cell,
  src_Cell,
  Cell___vue_template_functional__,
  Cell___vue_styles__,
  Cell___vue_scopeId__,
  Cell___vue_module_identifier__
)

/* harmony default export */ var Cell_src_Cell = (Cell_Component.exports);

// CONCATENATED MODULE: ../src/components/Cell/index.js



Cell_src_Cell.install = (Vue) => {
  Vue.component(Cell_src_Cell.name, Cell_src_Cell)
  Vue.component(Cell_src_Cell_item.name, Cell_src_Cell_item)
}

Cell_src_Cell.Item = Cell_src_Cell_item

/* harmony default export */ var components_Cell = (Cell_src_Cell);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Tag/src/Tag.vue
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
* @params type String 样式类型
* @params val String 标签内容
* @params size String 尺寸
* @params iconName String 目前紧支持icon组件内的name
* @params disabled Boolean 是否禁用
* @params plain Boolean 是否镂空
* @params round Boolean 是否显示圆角
* @params isLink Boolean 是否可以被点击
* @slot icon 标签
* @slot val 标签
* */
/* harmony default export */ var Tag = ({
  name: 'zTag',
  components: {
    Icon: components_Icon
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    val: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    },
    iconName: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    bindClick: function bindClick(e) {
      if (this.isLink) {
        this.$emit('click', e);
      }
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-75a2c80e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Tag/src/Tag.vue
var Tag_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"z-tag-container",class:[("z-tag-" + _vm.type), ("z-tag-" + _vm.size), { 'z-tag-disabled': _vm.disabled, 'z-tag-round': _vm.round, 'z-tag-link':_vm.isLink }, _vm.plain ? ("z-tag-" + _vm.type + "-plain") : ''],on:{"click":_vm.bindClick}},[_c('span',{staticClass:"z-tag-wrapper"},[(_vm.iconName || _vm.$slots.icon)?_vm._t("icon",[_c('icon',{staticClass:"z-tag-icon",attrs:{"name":_vm.iconName}})]):_vm._e(),_vm._v(" "),(_vm.val || _vm.$slots.val)?_vm._t("val",[_vm._v(_vm._s(_vm.val))]):_vm._e()],2)])}
var Tag_staticRenderFns = []
var Tag_esExports = { render: Tag_render, staticRenderFns: Tag_staticRenderFns }
/* harmony default export */ var src_Tag = (Tag_esExports);
// CONCATENATED MODULE: ../src/components/Tag/src/Tag.vue
function Tag_injectStyle (ssrContext) {
  __webpack_require__("KRaL")
}
var Tag_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Tag___vue_template_functional__ = false
/* styles */
var Tag___vue_styles__ = Tag_injectStyle
/* scopeId */
var Tag___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Tag___vue_module_identifier__ = null
var Tag_Component = Tag_normalizeComponent(
  Tag,
  src_Tag,
  Tag___vue_template_functional__,
  Tag___vue_styles__,
  Tag___vue_scopeId__,
  Tag___vue_module_identifier__
)

/* harmony default export */ var Tag_src_Tag = (Tag_Component.exports);

// CONCATENATED MODULE: ../src/components/Tag/index.js


Tag_src_Tag.install = (Vue) => {
  Vue.component(Tag_src_Tag.name, Tag_src_Tag)
}

/* harmony default export */ var components_Tag = (Tag_src_Tag);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Tabbar/src/Tabbar.vue
//
//
//
//
//
//


/*
* @params backgroundColor 背景色 默认白色
* @params bottom 距离底部 默认0
* @params v-model 当前索引
* */
/* harmony default export */ var Tabbar = ({
  name: 'zTabBar',
  props: {
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    bottom: {
      type: [String, Number],
      default: '0px'
    },
    value: Number
  },
  data: function data() {
    return {
      item: []
    };
  },

  methods: {
    getActiveItem: function getActiveItem() {
      var _this = this;

      this.item.forEach(function (item, index) {
        item.active = index === _this.value;
      });
    },
    onChange: function onChange(active) {
      this.$emit('input', active);
      this.$emit('change', active);
    }
  },
  watch: {
    item: function item() {
      this.getActiveItem();
    },
    value: function value() {
      this.getActiveItem();
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-39bcd5e3","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Tabbar/src/Tabbar.vue
var Tabbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-tab-bar-container",style:({ backgroundColor: _vm.backgroundColor, bottom: _vm.bottom })},[_vm._t("default")],2)}
var Tabbar_staticRenderFns = []
var Tabbar_esExports = { render: Tabbar_render, staticRenderFns: Tabbar_staticRenderFns }
/* harmony default export */ var src_Tabbar = (Tabbar_esExports);
// CONCATENATED MODULE: ../src/components/Tabbar/src/Tabbar.vue
function Tabbar_injectStyle (ssrContext) {
  __webpack_require__("USui")
}
var Tabbar_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Tabbar___vue_template_functional__ = false
/* styles */
var Tabbar___vue_styles__ = Tabbar_injectStyle
/* scopeId */
var Tabbar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Tabbar___vue_module_identifier__ = null
var Tabbar_Component = Tabbar_normalizeComponent(
  Tabbar,
  src_Tabbar,
  Tabbar___vue_template_functional__,
  Tabbar___vue_styles__,
  Tabbar___vue_scopeId__,
  Tabbar___vue_module_identifier__
)

/* harmony default export */ var Tabbar_src_Tabbar = (Tabbar_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Tabbar/src/Tabbar-item.vue
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
* @params label String 文案
* @params iconName String 基于icon组件name
* @params height Number/String tabbar 高度 默认42px
* @params point Boolean 是否显示右上角红点
* @params info Number/String 右上角显示文案
* @slot icon icon标签
* @slot label 文案标签
* */
/* harmony default export */ var Tabbar_item = ({
  name: 'zTabBarItem',
  components: {
    Icon: components_Icon
  },
  props: {
    label: {
      type: [String, Number],
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: '46px'
    },
    point: {
      type: Boolean,
      default: false
    },
    info: {
      type: [String, Number],
      default: ''
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.item.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.item.splice(this.$parent.item.indexOf(this), 1);
  },

  methods: {
    bindClick: function bindClick(e) {
      this.$parent.onChange(this.$parent.item.indexOf(this));
      this.$emit('click', e);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-ad8d6ad6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Tabbar/src/Tabbar-item.vue
var Tabbar_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-tab-bar-item-container",class:[ {'z-tab-bar-active': _vm.active} ],style:({ height: _vm.height }),on:{"click":_vm.bindClick}},[(_vm.iconName || _vm.$slots.icon)?_c('div',{staticClass:"z-tab-bar-item-icon-wrapper",class:[{'z-tab-bar-item-icon-point': _vm.point}]},[_vm._t("icon",[_c('icon',{staticClass:"z-tab-bar-icon-info",attrs:{"name":_vm.iconName}})]),_vm._v(" "),(_vm.info)?_c('em',{staticClass:"z-tab-bar-item-info"},[_vm._v(_vm._s(typeof _vm.info === 'number' ? (_vm.info >= 99 ? '99+' : _vm.info) : _vm.info))]):_vm._e()],2):_vm._e(),_vm._v(" "),(_vm.label || _vm.$slots.label)?_c('div',{staticClass:"z-tab-bar-item-label-wrapper"},[_vm._t("label",[_c('span',{staticClass:"z-tab-bar-item-label-info"},[_vm._v(_vm._s(_vm.label))])])],2):_vm._e()])}
var Tabbar_item_staticRenderFns = []
var Tabbar_item_esExports = { render: Tabbar_item_render, staticRenderFns: Tabbar_item_staticRenderFns }
/* harmony default export */ var src_Tabbar_item = (Tabbar_item_esExports);
// CONCATENATED MODULE: ../src/components/Tabbar/src/Tabbar-item.vue
function Tabbar_item_injectStyle (ssrContext) {
  __webpack_require__("HggN")
}
var Tabbar_item_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Tabbar_item___vue_template_functional__ = false
/* styles */
var Tabbar_item___vue_styles__ = Tabbar_item_injectStyle
/* scopeId */
var Tabbar_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Tabbar_item___vue_module_identifier__ = null
var Tabbar_item_Component = Tabbar_item_normalizeComponent(
  Tabbar_item,
  src_Tabbar_item,
  Tabbar_item___vue_template_functional__,
  Tabbar_item___vue_styles__,
  Tabbar_item___vue_scopeId__,
  Tabbar_item___vue_module_identifier__
)

/* harmony default export */ var Tabbar_src_Tabbar_item = (Tabbar_item_Component.exports);

// CONCATENATED MODULE: ../src/components/Tabbar/index.js



Tabbar_src_Tabbar.install = (Vue) => {
  Vue.component(Tabbar_src_Tabbar.name, Tabbar_src_Tabbar)
  Vue.component(Tabbar_src_Tabbar_item.name, Tabbar_src_Tabbar_item)
}

Tabbar_src_Tabbar.Item = Tabbar_src_Tabbar_item

/* harmony default export */ var components_Tabbar = (Tabbar_src_Tabbar);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Collapse/src/Collapse.vue
//
//
//
//
//
//

/*
* @params accordion Boolean 是否启用手风情模式
* @params defaultIndex Array 设置默认展开
* */
/* harmony default export */ var Collapse = ({
  name: 'zCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    defaultIndex: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      item: []
    };
  },

  methods: {
    getActiveItem: function getActiveItem() {
      var _this = this;

      this.defaultIndex.forEach(function (index) {
        _this.item[index].active = true;
      });
    }
  },
  watch: {
    item: function item() {
      this.getActiveItem();
    },
    defaultIndex: function defaultIndex() {
      this.getActiveItem();
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-dcf5a94e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Collapse/src/Collapse.vue
var Collapse_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-collapse-container"},[_vm._t("default")],2)}
var Collapse_staticRenderFns = []
var Collapse_esExports = { render: Collapse_render, staticRenderFns: Collapse_staticRenderFns }
/* harmony default export */ var src_Collapse = (Collapse_esExports);
// CONCATENATED MODULE: ../src/components/Collapse/src/Collapse.vue
function Collapse_injectStyle (ssrContext) {
  __webpack_require__("IzUM")
}
var Collapse_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Collapse___vue_template_functional__ = false
/* styles */
var Collapse___vue_styles__ = Collapse_injectStyle
/* scopeId */
var Collapse___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Collapse___vue_module_identifier__ = null
var Collapse_Component = Collapse_normalizeComponent(
  Collapse,
  src_Collapse,
  Collapse___vue_template_functional__,
  Collapse___vue_styles__,
  Collapse___vue_scopeId__,
  Collapse___vue_module_identifier__
)

/* harmony default export */ var Collapse_src_Collapse = (Collapse_Component.exports);

// CONCATENATED MODULE: ../src/utils/CollapseTransition.js
const elTransition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
const Transition = {
  'before-enter' (el) {
    el.style.transition = elTransition
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.height = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },

  'enter' (el) {
    el.dataset.oldOverflow = el.style.overflow
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px'
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }

    el.style.overflow = 'hidden'
  },

  'after-enter' (el) {
    el.style.transition = ''
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  },

  'before-leave' (el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },

  'leave' (el) {
    if (el.scrollHeight !== 0) {
      el.style.transition = elTransition
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },

  'after-leave' (el) {
    el.style.transition = ''
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }
}

/* harmony default export */ var CollapseTransition = ({
  name: 'collapseTransition',
  functional: true,
  render (h, { children }) {
    const data = {
      on: Transition
    }
    return h('transition', data, children)
  }
});

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../src/components/Collapse/src/Collapse-item.vue
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
* @params title String/Number 说明
* @params disabled Boolean 是否被禁用
* @slot header 若需要自定义标题
* */
/* harmony default export */ var Collapse_item = ({
  name: 'zCollapseItem',
  components: {
    CollapseTransition: CollapseTransition,
    Icon: components_Icon
  },
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.item.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.item.splice(this.$parent.item.indexOf(this), 1);
  },

  methods: {
    bindClick: function bindClick(e) {
      var accordion = this.$parent.accordion;

      if (accordion) this.setAccordion();else this.active ? this.active = false : this.active = true;

      this.$emit('click', e);
    },
    setAccordion: function setAccordion() {
      var item = this.$parent.item;

      if (this.active) {
        for (var i = 0; i < item.length; i++) {
          item[i].active = false;
        }
      } else {
        for (var _i = 0; _i < item.length; _i++) {
          item[_i].active = false;
        }
        this.active = true;
      }
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-68457d73","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../src/components/Collapse/src/Collapse-item.vue
var Collapse_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-collapse-item-container",class:[{'z-collapse-active': _vm.active}]},[_c('div',{staticClass:"z-collapse-item-header",class:[{'z-collapse-disabled': _vm.disabled}],on:{"click":_vm.bindClick}},[_vm._t("header",[_c('span',{staticClass:"z-collapse-header-info"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('icon',{staticClass:"z-collapse-header-icon",attrs:{"name":"arrowRight"}})])],2),_vm._v(" "),_c('collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"z-collapse-item-content"},[_c('div',{staticClass:"z-collapse-item-content-main"},[_vm._t("default")],2)])])],1)}
var Collapse_item_staticRenderFns = []
var Collapse_item_esExports = { render: Collapse_item_render, staticRenderFns: Collapse_item_staticRenderFns }
/* harmony default export */ var src_Collapse_item = (Collapse_item_esExports);
// CONCATENATED MODULE: ../src/components/Collapse/src/Collapse-item.vue
function Collapse_item_injectStyle (ssrContext) {
  __webpack_require__("beey")
}
var Collapse_item_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var Collapse_item___vue_template_functional__ = false
/* styles */
var Collapse_item___vue_styles__ = Collapse_item_injectStyle
/* scopeId */
var Collapse_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Collapse_item___vue_module_identifier__ = null
var Collapse_item_Component = Collapse_item_normalizeComponent(
  Collapse_item,
  src_Collapse_item,
  Collapse_item___vue_template_functional__,
  Collapse_item___vue_styles__,
  Collapse_item___vue_scopeId__,
  Collapse_item___vue_module_identifier__
)

/* harmony default export */ var Collapse_src_Collapse_item = (Collapse_item_Component.exports);

// CONCATENATED MODULE: ../src/components/Collapse/index.js



Collapse_src_Collapse.install = (Vue) => {
  Vue.component(Collapse_src_Collapse.name, Collapse_src_Collapse)
  Vue.component(Collapse_src_Collapse_item.name, Collapse_src_Collapse_item)
}

Collapse_src_Collapse.Item = Collapse_src_Collapse_item

/* harmony default export */ var components_Collapse = (Collapse_src_Collapse);

// CONCATENATED MODULE: ../src/components/index.js

















// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Toast.vue
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
//
//
//
//
//
//
//
//
//



/* harmony default export */ var info_Toast = ({
  methods: {
    showToast: function showToast() {
      components_Toast('我是Toast');
    },
    showTypeToast: function showTypeToast(type, message) {
      components_Toast({ type: type, message: message });
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-5403270c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Toast.vue
var info_Toast_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"普通Toast","type":"primary"},on:{"click":_vm.showToast}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"成功Toast","type":"primary"},on:{"click":function($event){_vm.showTypeToast('success', '成功')}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"警告Toast","type":"primary"},on:{"click":function($event){_vm.showTypeToast('warning', '警告')}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"报错Toast","type":"primary"},on:{"click":function($event){_vm.showTypeToast('error', '错误')}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"success","type":"primary"},on:{"click":function($event){_vm.showTypeToast('success')}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"loading","type":"primary"},on:{"click":function($event){_vm.showTypeToast('loading')}}})],1)])}
var info_Toast_staticRenderFns = []
var info_Toast_esExports = { render: info_Toast_render, staticRenderFns: info_Toast_staticRenderFns }
/* harmony default export */ var demo_info_Toast = (info_Toast_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Toast.vue
function info_Toast_injectStyle (ssrContext) {
  __webpack_require__("Gbdk")
}
var info_Toast_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Toast___vue_template_functional__ = false
/* styles */
var info_Toast___vue_styles__ = info_Toast_injectStyle
/* scopeId */
var info_Toast___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Toast___vue_module_identifier__ = null
var info_Toast_Component = info_Toast_normalizeComponent(
  info_Toast,
  demo_info_Toast,
  info_Toast___vue_template_functional__,
  info_Toast___vue_styles__,
  info_Toast___vue_scopeId__,
  info_Toast___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Toast = (info_Toast_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Swipe.vue
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

/* harmony default export */ var info_Swipe = ({
  data: function data() {
    return {
      data1: [{ src: 'http://img5.imgtn.bdimg.com/it/u=1046983545,2051560208&fm=27&gp=0.jpg' }, { src: 'http://img5.imgtn.bdimg.com/it/u=1046983545,2051560208&fm=27&gp=0.jpg' }, { src: 'http://img.taopic.com/uploads/allimg/120727/201995-120HG1030762.jpg' }],
      data2: [{ value: 'swipe1' }, { value: 'swipe2' }, { value: 'swipe3' }, { value: 'swipe4' }]
    };
  },

  methods: {
    change: function change(val) {
      console.log(val);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-7eaded7c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Swipe.vue
var info_Swipe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('div',{staticClass:"swipe-container",staticStyle:{"height":"200px"}},[_c('z-swipe',{attrs:{"data":_vm.data1},on:{"change":_vm.change}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin":"10px 0"}}),_vm._v(" "),_c('div',{staticClass:"swipe-container",staticStyle:{"height":"200px"}},[_c('z-swipe',{attrs:{"data":_vm.data2}},_vm._l((_vm.data2),function(item,index){return _c('z-swipe-item',{key:index,attrs:{"item":item}},[_c('div',[_vm._v(_vm._s(item.value))])])}))],1)])}
var info_Swipe_staticRenderFns = []
var info_Swipe_esExports = { render: info_Swipe_render, staticRenderFns: info_Swipe_staticRenderFns }
/* harmony default export */ var demo_info_Swipe = (info_Swipe_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Swipe.vue
function Swipe_injectStyle (ssrContext) {
  __webpack_require__("gI5P")
}
var info_Swipe_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Swipe___vue_template_functional__ = false
/* styles */
var info_Swipe___vue_styles__ = Swipe_injectStyle
/* scopeId */
var info_Swipe___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Swipe___vue_module_identifier__ = null
var info_Swipe_Component = info_Swipe_normalizeComponent(
  info_Swipe,
  demo_info_Swipe,
  info_Swipe___vue_template_functional__,
  info_Swipe___vue_styles__,
  info_Swipe___vue_scopeId__,
  info_Swipe___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Swipe = (info_Swipe_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Alert.vue
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



/* harmony default export */ var info_Alert = ({
  methods: {
    showAlert: function showAlert() {
      components_Alert({ message: '我是一个普通Alert' });
    },
    showAlertIcon: function showAlertIcon() {
      components_Alert({ message: '我是一个带iconAlert', iconName: 'success' });
    },
    showConfirm: function showConfirm() {
      components_Alert({
        type: 'confirm',
        message: '确认提交吗?',
        callback: function callback(boolean) {
          console.log(boolean);
        }
      });
    },
    showConfirmIcon: function showConfirmIcon() {
      components_Alert({
        type: 'confirm',
        iconName: 'warning',
        message: '确认删除吗',
        callback: function callback(boolean) {
          console.log(boolean);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-b0f970f4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Alert.vue
var info_Alert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('z-scroll',{staticStyle:{"width":"92%","margin":"0 auto","height":"300px"}},[_c('div',{attrs:{"slot":"list"},slot:"list"},[_c('div',{staticStyle:{"margin":"10px auto"}},[_c('z-button',{attrs:{"val":"alert弹窗"},on:{"click":_vm.showAlert}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin":"10px auto"}},[_c('z-button',{attrs:{"val":"alert弹窗带Icon"},on:{"click":_vm.showAlertIcon}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin":"10px auto"}},[_c('z-button',{attrs:{"val":"二次确认弹窗"},on:{"click":_vm.showConfirm}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin":"10px auto"}},[_c('z-button',{attrs:{"val":"二次确认弹窗带Icon"},on:{"click":_vm.showConfirmIcon}})],1)])])}
var info_Alert_staticRenderFns = []
var info_Alert_esExports = { render: info_Alert_render, staticRenderFns: info_Alert_staticRenderFns }
/* harmony default export */ var demo_info_Alert = (info_Alert_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Alert.vue
var info_Alert_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Alert___vue_template_functional__ = false
/* styles */
var info_Alert___vue_styles__ = null
/* scopeId */
var info_Alert___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Alert___vue_module_identifier__ = null
var info_Alert_Component = info_Alert_normalizeComponent(
  info_Alert,
  demo_info_Alert,
  info_Alert___vue_template_functional__,
  info_Alert___vue_styles__,
  info_Alert___vue_scopeId__,
  info_Alert___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Alert = (info_Alert_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Popup.vue
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

/* harmony default export */ var info_Popup = ({
  data: function data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false
    };
  },

  methods: {
    showPopup: function showPopup() {
      this.visible1 = true;
    },
    showTopPopup: function showTopPopup() {
      this.visible2 = true;
    },
    showLeftPopup: function showLeftPopup() {
      this.visible3 = true;
    },
    showRightPopup: function showRightPopup() {
      this.visible4 = true;
    },
    showScreenLeftPopup: function showScreenLeftPopup(val) {
      this.visible5 = val;
    },
    showScreenTopPopup: function showScreenTopPopup(val) {
      this.visible6 = val;
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-5c9bdfc5","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Popup.vue
var info_Popup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('z-scroll',[_c('div',{attrs:{"slot":"list"},slot:"list"},[_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"底部滑出"},on:{"click":function($event){_vm.showPopup(true)}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"顶部滑出"},on:{"click":function($event){_vm.showTopPopup(true)}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"左侧滑出"},on:{"click":function($event){_vm.showLeftPopup(true)}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"右侧滑出"},on:{"click":function($event){_vm.showRightPopup(true)}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"全屏左侧滑出"},on:{"click":function($event){_vm.showScreenLeftPopup(true)}}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"92%","margin":"10px auto"}},[_c('z-button',{attrs:{"val":"全屏顶部滑出"},on:{"click":function($event){_vm.showScreenTopPopup(true)}}})],1)])]),_vm._v(" "),_c('z-popup',{attrs:{"syncVisible":_vm.visible1},on:{"update:syncVisible":function($event){_vm.visible1=$event}}},[_c('div',{staticStyle:{"background":"#fff","width":"100%","height":"200px"}},[_vm._v("我是底部滑出")])]),_vm._v(" "),_c('z-popup',{attrs:{"syncVisible":_vm.visible2,"position":"top"},on:{"update:syncVisible":function($event){_vm.visible2=$event}}},[_c('div',{staticStyle:{"background":"#fff","width":"100%","height":"200px"}},[_vm._v("我是顶部滑出")])]),_vm._v(" "),_c('z-popup',{attrs:{"syncVisible":_vm.visible3,"position":"left"},on:{"update:syncVisible":function($event){_vm.visible3=$event}}},[_c('div',{staticStyle:{"background":"#fff","width":"100px","height":"100%"}},[_vm._v("我是左侧滑出")])]),_vm._v(" "),_c('z-popup',{attrs:{"syncVisible":_vm.visible4,"position":"right"},on:{"update:syncVisible":function($event){_vm.visible4=$event}}},[_c('div',{staticStyle:{"background":"#fff","width":"100px","height":"100%"}},[_vm._v("我是右侧滑出")])]),_vm._v(" "),_c('z-popup',{attrs:{"syncVisible":_vm.visible5,"position":"left","screen":""},on:{"update:syncVisible":function($event){_vm.visible5=$event}}},[_c('div',{staticStyle:{"background":"#fff","width":"100%","height":"100%"}},[_c('div',{on:{"click":function($event){_vm.showScreenLeftPopup(false)}}},[_vm._v("点我关闭")])])]),_vm._v(" "),_c('z-popup',{attrs:{"syncVisible":_vm.visible6,"position":"top","screen":""},on:{"update:syncVisible":function($event){_vm.visible6=$event}}},[_c('div',{staticStyle:{"background":"#fff","width":"100%","height":"100%"}},[_c('div',{on:{"click":function($event){_vm.showScreenTopPopup(false)}}},[_vm._v("点我关闭")])])])],1)}
var info_Popup_staticRenderFns = []
var info_Popup_esExports = { render: info_Popup_render, staticRenderFns: info_Popup_staticRenderFns }
/* harmony default export */ var demo_info_Popup = (info_Popup_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Popup.vue
var info_Popup_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Popup___vue_template_functional__ = false
/* styles */
var info_Popup___vue_styles__ = null
/* scopeId */
var info_Popup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Popup___vue_module_identifier__ = null
var info_Popup_Component = info_Popup_normalizeComponent(
  info_Popup,
  demo_info_Popup,
  info_Popup___vue_template_functional__,
  info_Popup___vue_styles__,
  info_Popup___vue_scopeId__,
  info_Popup___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Popup = (info_Popup_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Spinner.vue
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



/* harmony default export */ var info_Spinner = ({
  methods: {
    showSpinner: function showSpinner() {
      var _this = this;

      components_Spinner.open();
      setTimeout(function () {
        _this.closeSpinner();
      }, 3000);
    },
    showIconSpinner: function showIconSpinner() {
      var _this2 = this;

      components_Spinner.open({
        iconName: 'loadingLine'
      });
      setTimeout(function () {
        _this2.closeSpinner();
      }, 3000);
    },
    showIconTxtSpinner: function showIconTxtSpinner() {
      var _this3 = this;

      components_Spinner.open({
        iconName: 'loadingLine',
        message: '我这是提示在加载中'
      });
      setTimeout(function () {
        _this3.closeSpinner();
      }, 3000);
    },
    closeSpinner: function closeSpinner() {
      components_Spinner.close();
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-1c101e0f","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Spinner.vue
var info_Spinner_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('z-scroll',[_c('div',{attrs:{"slot":"list"},slot:"list"},[_c('div',{staticStyle:{"margin":"10px auto","width":"92%"}},[_c('z-button',{attrs:{"val":"显示Spinner"},on:{"click":_vm.showSpinner}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin":"10px auto","width":"92%"}},[_c('z-button',{attrs:{"val":"显示Spinner修改Icon"},on:{"click":_vm.showIconSpinner}})],1),_vm._v(" "),_c('div',{staticStyle:{"margin":"10px auto","width":"92%"}},[_c('z-button',{attrs:{"val":"显示Spinner修改Icon显示文案"},on:{"click":_vm.showIconTxtSpinner}})],1)])])],1)}
var info_Spinner_staticRenderFns = []
var info_Spinner_esExports = { render: info_Spinner_render, staticRenderFns: info_Spinner_staticRenderFns }
/* harmony default export */ var demo_info_Spinner = (info_Spinner_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Spinner.vue
var info_Spinner_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Spinner___vue_template_functional__ = false
/* styles */
var info_Spinner___vue_styles__ = null
/* scopeId */
var info_Spinner___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Spinner___vue_module_identifier__ = null
var info_Spinner_Component = info_Spinner_normalizeComponent(
  info_Spinner,
  demo_info_Spinner,
  info_Spinner___vue_template_functional__,
  info_Spinner___vue_styles__,
  info_Spinner___vue_scopeId__,
  info_Spinner___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Spinner = (info_Spinner_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-56d7ce50","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Notice.vue
var info_Notice_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('div',{staticStyle:{"width":"100%","padding":"20px 0"}},[_c('z-notice',[_vm._v("\n      1234567890|1234567890|1234567890|1234567890|1234567890\n    ")])],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"20px 0"}},[_c('z-notice',{attrs:{"isScroll":false}},[_vm._v("\n      1234567890|1234567890|1234567890|1234567890|1234567890\n    ")])],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"20px 0"}},[_c('z-notice',[_vm._v("\n      1234567890\n    ")])],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"20px 0"}},[_c('z-notice',{attrs:{"showNotice":false,"showClose":false}},[_vm._v("\n      1234567890\n    ")])],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"20px 0"}},[_c('z-notice',{attrs:{"showNotice":false,"showClose":false}},[_vm._v("\n      1234567890|1234567890|1234567890|1234567890|1234567890|1234567890\n    ")])],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"20px 0"}},[_c('z-notice',[_c('div',{attrs:{"slot":"left"},slot:"left"},[_vm._v("\n        定义left标签\n      ")]),_vm._v("\n      1234567890|1234567890|1234567890|1234567890|1234567890|1234567890\n      "),_c('div',{attrs:{"slot":"right"},slot:"right"},[_vm._v("\n        自定义right标签\n      ")])])],1)])}
var info_Notice_staticRenderFns = []
var info_Notice_esExports = { render: info_Notice_render, staticRenderFns: info_Notice_staticRenderFns }
/* harmony default export */ var info_Notice = (info_Notice_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Notice.vue
var info_Notice_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Notice___vue_script__ = null
/* template */

/* template functional */
var info_Notice___vue_template_functional__ = false
/* styles */
var info_Notice___vue_styles__ = null
/* scopeId */
var info_Notice___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Notice___vue_module_identifier__ = null
var info_Notice_Component = info_Notice_normalizeComponent(
  Notice___vue_script__,
  info_Notice,
  info_Notice___vue_template_functional__,
  info_Notice___vue_styles__,
  info_Notice___vue_scopeId__,
  info_Notice___vue_module_identifier__
)

/* harmony default export */ var demo_info_Notice = (info_Notice_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Cell.vue
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
//
//
//

/* harmony default export */ var info_Cell = ({
  data: function data() {
    return {
      data1: [{ title: '标题', label: '内容' }, { title: '标题', label: '内容', message: '我是描述哈哈' }, { title: '标题', label: '内容', iconName: 'success' }, { title: '标题', label: '内容', isLink: true }, { title: '禁用', disabled: true, isLink: true }, { title: '标题' }, { label: '内容' }],
      data2: [{ title: '单个', iconName: 'alipay', isLink: true }]
    };
  },

  methods: {
    bindClick: function bindClick() {
      console.log(22);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-30840f6d","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Cell.vue
var info_Cell_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item",staticStyle:{"width":"100vw","height":"100vh"}},[_c('h3',[_vm._v("多列")]),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px 0"}},[_c('z-cell',_vm._l((_vm.data1),function(item,index){return _c('z-cell-item',{key:index,attrs:{"title":item.title,"label":item.label,"iconName":item.iconName,"isLink":item.isLink,"disabled":item.disabled,"message":item.message},on:{"click":_vm.bindClick}})}))],1),_vm._v(" "),_c('h3',[_vm._v("单列")]),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px 0"}},[_c('z-cell',_vm._l((_vm.data2),function(item,index){return _c('z-cell-item',{key:index,attrs:{"title":item.title,"label":item.label,"iconName":item.iconName,"isLink":item.isLink,"disabled":item.disabled,"message":item.message},on:{"click":_vm.bindClick}})}))],1),_vm._v(" "),_c('h3',[_vm._v("自定义")]),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px 0"}},[_c('z-cell',[_c('z-cell-item',{attrs:{"title":"用户名"}},[_c('z-icon',{attrs:{"slot":"leftIcon","name":"user"},slot:"leftIcon"}),_vm._v(" "),_c('z-icon',{attrs:{"slot":"rightIcon","name":"search"},slot:"rightIcon"})],1)],1)],1)])}
var info_Cell_staticRenderFns = []
var info_Cell_esExports = { render: info_Cell_render, staticRenderFns: info_Cell_staticRenderFns }
/* harmony default export */ var demo_info_Cell = (info_Cell_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Cell.vue
var info_Cell_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Cell___vue_template_functional__ = false
/* styles */
var info_Cell___vue_styles__ = null
/* scopeId */
var info_Cell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Cell___vue_module_identifier__ = null
var info_Cell_Component = info_Cell_normalizeComponent(
  info_Cell,
  demo_info_Cell,
  info_Cell___vue_template_functional__,
  info_Cell___vue_styles__,
  info_Cell___vue_scopeId__,
  info_Cell___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Cell = (info_Cell_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Tag.vue
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

/* harmony default export */ var info_Tag = ({});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-05ba2359","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Tag.vue
var info_Tag_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('div',{staticStyle:{"width":"100%","padding":"10px"}},[_c('z-tag',{attrs:{"val":"mini","size":"mini"}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"small","size":"small"}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"normal"}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"large","size":"large"}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px"}},[_c('z-tag',{attrs:{"val":"info"}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"primary","type":"primary"}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"warning","type":"warning"}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"danger","type":"danger"}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"success","type":"success"}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px"}},[_c('z-tag',{attrs:{"val":"info","plain":""}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"primary","type":"primary","plain":""}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"warning","type":"warning","plain":""}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"danger","type":"danger","plain":""}}),_vm._v(" "),_c('z-tag',{attrs:{"val":"success","type":"success","plain":""}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px"}},[_c('z-tag',{attrs:{"val":"禁用","disabled":"","type":"success"}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px"}},[_c('z-tag',{attrs:{"val":"icon","type":"success","iconName":"success"}}),_vm._v(" "),_c('z-tag',{attrs:{"type":"success","iconName":"weixin","size":"large"}})],1),_vm._v(" "),_c('div',{staticStyle:{"width":"100%","padding":"10px"}},[_c('z-tag',{attrs:{"val":"关闭点击","isLink":false}})],1)])}
var info_Tag_staticRenderFns = []
var info_Tag_esExports = { render: info_Tag_render, staticRenderFns: info_Tag_staticRenderFns }
/* harmony default export */ var demo_info_Tag = (info_Tag_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Tag.vue
var info_Tag_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Tag___vue_template_functional__ = false
/* styles */
var info_Tag___vue_styles__ = null
/* scopeId */
var info_Tag___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Tag___vue_module_identifier__ = null
var info_Tag_Component = info_Tag_normalizeComponent(
  info_Tag,
  demo_info_Tag,
  info_Tag___vue_template_functional__,
  info_Tag___vue_styles__,
  info_Tag___vue_scopeId__,
  info_Tag___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Tag = (info_Tag_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Tabbar.vue
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

/* harmony default export */ var info_Tabbar = ({
  data: function data() {
    return {
      index1: 2,
      data1: [{ label: '标签', iconName: 'user' }, { label: '标签', iconName: 'user' }, { label: '标签' }, { iconName: 'user' }],
      index2: 0,
      data2: [{ label: '标签', iconName: 'alipay', point: true }, { label: '标签', iconName: 'weixin', info: 100 }]
    };
  },

  methods: {
    bindClick: function bindClick(e) {
      console.log(e);
    }
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-10cb020a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Tabbar.vue
var info_Tabbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item",staticStyle:{"width":"100vw","height":"100vh","background-color":"#e5e5e5"}},[_c('z-tab-bar',{model:{value:(_vm.index1),callback:function ($$v) {_vm.index1=$$v},expression:"index1"}},_vm._l((_vm.data1),function(item,index){return _c('z-tab-bar-item',{key:index,attrs:{"label":item.label,"iconName":item.iconName}})})),_vm._v(" "),_c('z-tab-bar',{attrs:{"bottom":"100px"},model:{value:(_vm.index2),callback:function ($$v) {_vm.index2=$$v},expression:"index2"}},_vm._l((_vm.data2),function(item,index){return _c('z-tab-bar-item',{key:index,attrs:{"label":item.label,"iconName":item.iconName,"point":item.point,"info":item.info},on:{"click":_vm.bindClick}})}))],1)}
var info_Tabbar_staticRenderFns = []
var info_Tabbar_esExports = { render: info_Tabbar_render, staticRenderFns: info_Tabbar_staticRenderFns }
/* harmony default export */ var demo_info_Tabbar = (info_Tabbar_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Tabbar.vue
var info_Tabbar_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Tabbar___vue_template_functional__ = false
/* styles */
var info_Tabbar___vue_styles__ = null
/* scopeId */
var info_Tabbar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Tabbar___vue_module_identifier__ = null
var info_Tabbar_Component = info_Tabbar_normalizeComponent(
  info_Tabbar,
  demo_info_Tabbar,
  info_Tabbar___vue_template_functional__,
  info_Tabbar___vue_styles__,
  info_Tabbar___vue_scopeId__,
  info_Tabbar___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Tabbar = (info_Tabbar_Component.exports);

// CONCATENATED MODULE: ../node_modules/_babel-loader@7.1.4@babel-loader/lib!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!../example/views/demo/info/Collapse.vue
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

/* harmony default export */ var info_Collapse = ({
  methods: {
    clickItem: function clickItem(e) {}
  }
});
// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-2a42ce3c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/info/Collapse.vue
var info_Collapse_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("默认")]),_vm._v(" "),_c('div',{staticStyle:{"padding":"10px 0"}},[_c('z-collapse',{attrs:{"defaultIndex":[0]}},[_c('z-collapse-item',{attrs:{"title":"标题a"},on:{"click":_vm.clickItem}},[_vm._v("\n        哈哈哈哈1\n      ")]),_vm._v(" "),_c('z-collapse-item',{attrs:{"title":"标题b"}},[_vm._v("\n        哈哈哈哈2\n      ")]),_vm._v(" "),_c('z-collapse-item',{attrs:{"title":"标题c"}},[_vm._v("\n        哈哈哈哈3\n      ")])],1)],1),_vm._v(" "),_c('h3',[_vm._v("手风情模式")]),_vm._v(" "),_c('div',{staticStyle:{"padding":"10px 0"}},[_c('z-collapse',{attrs:{"defaultIndex":[1],"accordion":""}},[_c('z-collapse-item',{attrs:{"title":"被禁用","disabled":""}},[_vm._v("\n        哈哈哈哈1\n      ")]),_vm._v(" "),_c('z-collapse-item',{attrs:{"title":"标题b"}},[_vm._v("\n        哈哈哈哈2\n      ")]),_vm._v(" "),_c('z-collapse-item',{attrs:{"title":"标题c"}},[_vm._v("\n        哈哈哈哈3\n      ")])],1)],1)])}
var info_Collapse_staticRenderFns = []
var info_Collapse_esExports = { render: info_Collapse_render, staticRenderFns: info_Collapse_staticRenderFns }
/* harmony default export */ var demo_info_Collapse = (info_Collapse_esExports);
// CONCATENATED MODULE: ../example/views/demo/info/Collapse.vue
var info_Collapse_normalizeComponent = __webpack_require__("AYo0")
/* script */


/* template */

/* template functional */
var info_Collapse___vue_template_functional__ = false
/* styles */
var info_Collapse___vue_styles__ = null
/* scopeId */
var info_Collapse___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var info_Collapse___vue_module_identifier__ = null
var info_Collapse_Component = info_Collapse_normalizeComponent(
  info_Collapse,
  demo_info_Collapse,
  info_Collapse___vue_template_functional__,
  info_Collapse___vue_styles__,
  info_Collapse___vue_scopeId__,
  info_Collapse___vue_module_identifier__
)

/* harmony default export */ var views_demo_info_Collapse = (info_Collapse_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-db1c6736","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Icon.vue
var doc_Icon_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Icon_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("使用方法")]),_vm._v(" "),_c('code',[_vm._v("<z-icon name=\"loading\" />")])])}]
var doc_Icon_esExports = { render: doc_Icon_render, staticRenderFns: doc_Icon_staticRenderFns }
/* harmony default export */ var doc_Icon = (doc_Icon_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Icon.vue
function doc_Icon_injectStyle (ssrContext) {
  __webpack_require__("Zpxc")
}
var doc_Icon_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Icon___vue_script__ = null
/* template */

/* template functional */
var doc_Icon___vue_template_functional__ = false
/* styles */
var doc_Icon___vue_styles__ = doc_Icon_injectStyle
/* scopeId */
var doc_Icon___vue_scopeId__ = "data-v-db1c6736"
/* moduleIdentifier (server only) */
var doc_Icon___vue_module_identifier__ = null
var doc_Icon_Component = doc_Icon_normalizeComponent(
  Icon___vue_script__,
  doc_Icon,
  doc_Icon___vue_template_functional__,
  doc_Icon___vue_styles__,
  doc_Icon___vue_scopeId__,
  doc_Icon___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Icon = (doc_Icon_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-6be0a96c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Scroll.vue
var doc_Scroll_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Scroll_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("copy的didi的scroll "),_c('a',{staticStyle:{"text-decoration":"underline"},attrs:{"href":"https://didi.github.io/cube-ui/#/zh-CN/docs/scroll","target":"_blank"}},[_vm._v("doc地址")])])}]
var doc_Scroll_esExports = { render: doc_Scroll_render, staticRenderFns: doc_Scroll_staticRenderFns }
/* harmony default export */ var doc_Scroll = (doc_Scroll_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Scroll.vue
var doc_Scroll_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Scroll___vue_script__ = null
/* template */

/* template functional */
var doc_Scroll___vue_template_functional__ = false
/* styles */
var doc_Scroll___vue_styles__ = null
/* scopeId */
var doc_Scroll___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Scroll___vue_module_identifier__ = null
var doc_Scroll_Component = doc_Scroll_normalizeComponent(
  Scroll___vue_script__,
  doc_Scroll,
  doc_Scroll___vue_template_functional__,
  doc_Scroll___vue_styles__,
  doc_Scroll___vue_scopeId__,
  doc_Scroll___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Scroll = (doc_Scroll_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-3f2cfae0","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Button.vue
var doc_Button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Button_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("使用方法")]),_vm._v(" "),_c('code',[_vm._v("\n    <z-button val=\"info\" ></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"primary\" val=\"primary\" ></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"success\" val=\"success\" ></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"warning\" val=\"warning\" ></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"danger\" val=\"danger\" ></z-button>"),_c('br'),_vm._v("\n    <z-button val=\"plain\"  plain></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"primary\" val=\"plain\"  plain></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"success\" val=\"plain\"  plain></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"warning\" val=\"plain\"  plain></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"danger\" val=\"plain\"  plain></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"primary\" val=\"large\"  size=\"large\"></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"primary\" val=\"small\"  size=\"small\"></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"primary\" val=\"mini\"  size=\"mini\"></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"primary\" val=\"disabled\"  disabled></z-button>"),_c('br'),_vm._v("\n    <z-button type=\"primary\" val=\"primary\"  loading></z-button>\n  ")])])}]
var doc_Button_esExports = { render: doc_Button_render, staticRenderFns: doc_Button_staticRenderFns }
/* harmony default export */ var doc_Button = (doc_Button_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Button.vue
function doc_Button_injectStyle (ssrContext) {
  __webpack_require__("jpaV")
}
var doc_Button_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Button___vue_script__ = null
/* template */

/* template functional */
var doc_Button___vue_template_functional__ = false
/* styles */
var doc_Button___vue_styles__ = doc_Button_injectStyle
/* scopeId */
var doc_Button___vue_scopeId__ = "data-v-3f2cfae0"
/* moduleIdentifier (server only) */
var doc_Button___vue_module_identifier__ = null
var doc_Button_Component = doc_Button_normalizeComponent(
  Button___vue_script__,
  doc_Button,
  doc_Button___vue_template_functional__,
  doc_Button___vue_styles__,
  doc_Button___vue_scopeId__,
  doc_Button___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Button = (doc_Button_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-368b1dc5","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Toast.vue
var doc_Toast_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Toast_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("使用方法")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("Toast('我是Toast')")]),_vm._v("\n  ")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("Toast({ type: 'success', message: '成功' })")]),_vm._v("\n  ")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("Toast({ type: 'loading', duration: 3000 })")]),_vm._v("\n  ")])])}]
var doc_Toast_esExports = { render: doc_Toast_render, staticRenderFns: doc_Toast_staticRenderFns }
/* harmony default export */ var doc_Toast = (doc_Toast_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Toast.vue
var doc_Toast_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Toast___vue_script__ = null
/* template */

/* template functional */
var doc_Toast___vue_template_functional__ = false
/* styles */
var doc_Toast___vue_styles__ = null
/* scopeId */
var doc_Toast___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Toast___vue_module_identifier__ = null
var doc_Toast_Component = doc_Toast_normalizeComponent(
  Toast___vue_script__,
  doc_Toast,
  doc_Toast___vue_template_functional__,
  doc_Toast___vue_styles__,
  doc_Toast___vue_scopeId__,
  doc_Toast___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Toast = (doc_Toast_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-177d9415","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Swipe.vue
var doc_Swipe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Swipe_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_vm._v("\n  仿照的didi swipe "),_c('a',{staticStyle:{"text-decoration":"underline"},attrs:{"href":"https://didi.github.io/cube-ui/#/zh-CN/docs/slide","target":"_blank"}},[_vm._v("doc地址")]),_vm._v(" "),_c('div',[_vm._v("\n    * @params data 插入数据"),_c('br'),_vm._v("\n    * @params initialIndex 默认首个index"),_c('br'),_vm._v("\n    * @params loop 是否循环"),_c('br'),_vm._v("\n    * @params autoPlay 是否自动轮播"),_c('br'),_vm._v("\n    * @params duration 播放间隔"),_c('br'),_vm._v("\n    * @params threshold 滑动到多少切换(0, 1) 默认0.3"),_c('br'),_vm._v("\n    * @params speed 动画切换的速度"),_c('br'),_vm._v("\n    * @params verticalType 默认横向"),_c('br')])])}]
var doc_Swipe_esExports = { render: doc_Swipe_render, staticRenderFns: doc_Swipe_staticRenderFns }
/* harmony default export */ var doc_Swipe = (doc_Swipe_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Swipe.vue
function doc_Swipe_injectStyle (ssrContext) {
  __webpack_require__("WcEd")
}
var doc_Swipe_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Swipe___vue_script__ = null
/* template */

/* template functional */
var doc_Swipe___vue_template_functional__ = false
/* styles */
var doc_Swipe___vue_styles__ = doc_Swipe_injectStyle
/* scopeId */
var doc_Swipe___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Swipe___vue_module_identifier__ = null
var doc_Swipe_Component = doc_Swipe_normalizeComponent(
  Swipe___vue_script__,
  doc_Swipe,
  doc_Swipe___vue_template_functional__,
  doc_Swipe___vue_styles__,
  doc_Swipe___vue_scopeId__,
  doc_Swipe___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Swipe = (doc_Swipe_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-443499f2","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Alert.vue
var doc_Alert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Alert_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("普通弹窗")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("Alert({ message: '我是一个普通Alert' })")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("带iconAlert")]),_vm._v(" "),_c('pre',[_vm._v("     "),_c('code',[_vm._v("Alert({ message: '我是一个带iconAlert',  iconName: 'success' })")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("confirm弹窗")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n    Alert({"),_c('br'),_vm._v("\n      type: 'confirm',"),_c('br'),_vm._v("\n      message: '确认提交吗?',"),_c('br'),_vm._v("\n      callback: boolean => {"),_c('br'),_vm._v("\n      console.log(boolean)"),_c('br'),_vm._v("\n      }"),_c('br'),_vm._v("\n    })\n    ")]),_vm._v("\n  ")])])}]
var doc_Alert_esExports = { render: doc_Alert_render, staticRenderFns: doc_Alert_staticRenderFns }
/* harmony default export */ var doc_Alert = (doc_Alert_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Alert.vue
var doc_Alert_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Alert___vue_script__ = null
/* template */

/* template functional */
var doc_Alert___vue_template_functional__ = false
/* styles */
var doc_Alert___vue_styles__ = null
/* scopeId */
var doc_Alert___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Alert___vue_module_identifier__ = null
var doc_Alert_Component = doc_Alert_normalizeComponent(
  Alert___vue_script__,
  doc_Alert,
  doc_Alert___vue_template_functional__,
  doc_Alert___vue_styles__,
  doc_Alert___vue_scopeId__,
  doc_Alert___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Alert = (doc_Alert_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-59b0e16e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Popup.vue
var doc_Popup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Popup_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("引入方法")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-popup :syncVisible.sync=\"visible\" position=\"bottom\"></z-popup>"),_c('br'),_vm._v("\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("参数说明:")]),_vm._v(" "),_c('p',[_vm._v("syncVisible 是否显示 Boolean")]),_vm._v(" "),_c('p',[_vm._v("position 弹出方式 String top left right bottom 默认bottom")]),_vm._v(" "),_c('p',[_vm._v("screen 是否全屏滑出 Boolean 默认关闭 ")])])}]
var doc_Popup_esExports = { render: doc_Popup_render, staticRenderFns: doc_Popup_staticRenderFns }
/* harmony default export */ var doc_Popup = (doc_Popup_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Popup.vue
var doc_Popup_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Popup___vue_script__ = null
/* template */

/* template functional */
var doc_Popup___vue_template_functional__ = false
/* styles */
var doc_Popup___vue_styles__ = null
/* scopeId */
var doc_Popup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Popup___vue_module_identifier__ = null
var doc_Popup_Component = doc_Popup_normalizeComponent(
  Popup___vue_script__,
  doc_Popup,
  doc_Popup___vue_template_functional__,
  doc_Popup___vue_styles__,
  doc_Popup___vue_scopeId__,
  doc_Popup___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Popup = (doc_Popup_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-5b7d4386","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Spinner.vue
var doc_Spinner_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Spinner_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("默认方法")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      import { Spinner } from 'z-ui'\n\n      Spinner.open()\n      Spinner.close()\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("修改icon(紧支持icon里的name值)")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      Spinner.open({\n        iconName: 'loadingLine'\n      })\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("带文案和icon")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      Spinner.open({\n        iconName: 'loadingLine',\n        message: '你的文案'\n      })\n    ")]),_vm._v("\n  ")])])}]
var doc_Spinner_esExports = { render: doc_Spinner_render, staticRenderFns: doc_Spinner_staticRenderFns }
/* harmony default export */ var doc_Spinner = (doc_Spinner_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Spinner.vue
var doc_Spinner_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Spinner___vue_script__ = null
/* template */

/* template functional */
var doc_Spinner___vue_template_functional__ = false
/* styles */
var doc_Spinner___vue_styles__ = null
/* scopeId */
var doc_Spinner___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Spinner___vue_module_identifier__ = null
var doc_Spinner_Component = doc_Spinner_normalizeComponent(
  Spinner___vue_script__,
  doc_Spinner,
  doc_Spinner___vue_template_functional__,
  doc_Spinner___vue_styles__,
  doc_Spinner___vue_scopeId__,
  doc_Spinner___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Spinner = (doc_Spinner_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-709c5da6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Noticle.vue
var Noticle_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Noticle_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("配置参数说明")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n        * @params color String 字体颜色\n        * @params backgroundColor String 背景色\n        * @params isScroll Boolean 是否滚动\n        * @params speed Number 滚动速度\n        * @params delay Number 滚动间隔\n        * @params showNotice Boolean 是否显示左侧\n        * @params showClose Boolean 是否显示右侧\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("暴露方法")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      @change 内置visible变化\n      @handleClose 关闭事件\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("使用案例")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-notice>1234567890|1234567890|1234567890|1234567890|1234567890</z-notice>\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-notice :isScroll=\"false\">1234567890|1234567890|1234567890|1234567890|1234567890</z-notice>\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n        <z-notice>\n          <div slot=\"left\">\n            定义left标签\n          </div>\n          1234567890|1234567890|1234567890|1234567890|1234567890|1234567890\n          <div slot=\"right\">\n            自定义right标签\n          </div>\n        </z-notice>\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n       <z-notice :showNotice=\"false\" :showClose=\"false\">\n        1234567890|1234567890|1234567890|1234567890|1234567890|1234567890\n       </z-notice>\n    ")]),_vm._v("\n  ")])])}]
var Noticle_esExports = { render: Noticle_render, staticRenderFns: Noticle_staticRenderFns }
/* harmony default export */ var Noticle = (Noticle_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Noticle.vue
var Noticle_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Noticle___vue_script__ = null
/* template */

/* template functional */
var Noticle___vue_template_functional__ = false
/* styles */
var Noticle___vue_styles__ = null
/* scopeId */
var Noticle___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Noticle___vue_module_identifier__ = null
var Noticle_Component = Noticle_normalizeComponent(
  Noticle___vue_script__,
  Noticle,
  Noticle___vue_template_functional__,
  Noticle___vue_styles__,
  Noticle___vue_scopeId__,
  Noticle___vue_module_identifier__
)

/* harmony default export */ var doc_Noticle = (Noticle_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-4a436a8e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Cell.vue
var doc_Cell_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Cell_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("参数配置说明")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n        * @params title String 左侧标题\n        * @params label String 右侧内容\n        * @params iconName String 对应icon组件name\n        * @params message String 标题下面的描述\n        * @params disabled Boolean 是否禁用\n        * @slot leftIcon 左侧icon 标签\n        * @slot name 左侧标题 标签\n        * @slot rightIcon 右侧icon 标签\n        * @slot label 右侧内容 标签\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("普通使用事例")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n       <z-cell>\n          <z-cell-item v-for=\"(item, index) in data1\"\n                       :key=\"index\"\n                       :title=\"item.title\"\n                       :label=\"item.label\"\n                       :iconName=\"item.iconName\"\n                       :isLink=\"item.isLink\"\n                       :disabled=\"item.disabled\"\n                       :message=\"item.message\"\n                       @click=\"bindClick\">\n          </z-cell-item>\n        </z-cell>\n\n       data1: [\n        {title: '标题', label: '内容'},\n        {title: '标题', label: '内容', message: '我是描述哈哈'},\n        {title: '标题', label: '内容', iconName: 'success'},\n        {title: '标题', label: '内容', isLink: true},\n        {title: '标题'},\n        {label: '内容'},\n        {title: '禁用', disabled: true, isLink: true}\n      ]\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("自定义用法")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-cell>\n        <z-cell-item title=\"用户名\">\n          <i slot=\"leftIcon\"><z-icon name=\"user\" /></i>\n          <i slot=\"rightIcon\"><z-icon name=\"search\" /></i>\n        </z-cell-item>\n      </z-cell>\n    ")]),_vm._v("\n  ")])])}]
var doc_Cell_esExports = { render: doc_Cell_render, staticRenderFns: doc_Cell_staticRenderFns }
/* harmony default export */ var doc_Cell = (doc_Cell_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Cell.vue
var doc_Cell_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Cell___vue_script__ = null
/* template */

/* template functional */
var doc_Cell___vue_template_functional__ = false
/* styles */
var doc_Cell___vue_styles__ = null
/* scopeId */
var doc_Cell___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Cell___vue_module_identifier__ = null
var doc_Cell_Component = doc_Cell_normalizeComponent(
  Cell___vue_script__,
  doc_Cell,
  doc_Cell___vue_template_functional__,
  doc_Cell___vue_styles__,
  doc_Cell___vue_scopeId__,
  doc_Cell___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Cell = (doc_Cell_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-2dcd26b5","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Tag.vue
var doc_Tag_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Tag_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("配置参数说明")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n        * @params type String 样式类型\n        * @params val String 标签内容\n        * @params size String 尺寸\n        * @params iconName String 目前紧支持icon组件内的name\n        * @params disabled Boolean 是否禁用\n        * @params plain Boolean 是否镂空\n        * @params round Boolean 是否显示圆角\n        * @params isLink Boolean 是否可以被点击\n        * @slot icon 标签\n        * @slot val 标签\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("基础使用")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-tag val=\"mini\" size=\"mini\"></z-tag>\n      <z-tag val=\"small\" size=\"small\"></z-tag>\n      <z-tag val=\"normal\"></z-tag>\n      <z-tag val=\"large\" size=\"large\"></z-tag>\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("样式")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-tag val=\"info\" plain></z-tag>\n      <z-tag val=\"primary\" type=\"primary\" plain></z-tag>\n      <z-tag val=\"warning\" type=\"warning\" plain></z-tag>\n      <z-tag val=\"danger\" type=\"danger\" plain></z-tag>\n      <z-tag val=\"success\" type=\"success\" plain></z-tag>\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("Icon")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-tag val=\"icon\" type=\"success\" iconName=\"success\"></z-tag>\n      <z-tag type=\"success\" iconName=\"weixin\" size=\"large\"></z-tag>\n    ")]),_vm._v("\n  ")])])}]
var doc_Tag_esExports = { render: doc_Tag_render, staticRenderFns: doc_Tag_staticRenderFns }
/* harmony default export */ var doc_Tag = (doc_Tag_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Tag.vue
var doc_Tag_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Tag___vue_script__ = null
/* template */

/* template functional */
var doc_Tag___vue_template_functional__ = false
/* styles */
var doc_Tag___vue_styles__ = null
/* scopeId */
var doc_Tag___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Tag___vue_module_identifier__ = null
var doc_Tag_Component = doc_Tag_normalizeComponent(
  Tag___vue_script__,
  doc_Tag,
  doc_Tag___vue_template_functional__,
  doc_Tag___vue_styles__,
  doc_Tag___vue_scopeId__,
  doc_Tag___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Tag = (doc_Tag_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-4fc7bc2c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Tabbar.vue
var doc_Tabbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Tabbar_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("tab-bar配置参数说明")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n        * @params backgroundColor 背景色 默认白色\n        * @params bottom 距离底部 默认0\n        * @params v-model 当前索引\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("tab-bar-item配置参数说明")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n        * @params label String 文案\n        * @params iconName String 基于icon组件name\n        * @params height Number/String tabbar 高度 默认42px\n        * @params point Boolean 是否显示右上角红点\n        * @params info Number/String 右上角显示文案\n        * @slot icon icon标签\n        * @slot label 文案标签\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("基础使用方法")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n       <z-tab-bar v-model=\"index1\">\n          <z-tab-bar-item v-for=\"(item, index) in data1\" :key=\"index\" :label=\"item.label\" :iconName=\"item.iconName\">\n          </z-tab-bar-item>\n       </z-tab-bar>\n\n      index1: 2,\n      data1: [\n        {label: '标签', iconName: 'user'},\n        {label: '标签', iconName: 'user'},\n        {label: '标签'},\n        {iconName: 'user'}\n      ]\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("高级用法")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n       <z-tab-bar v-model=\"index2\" bottom=\"100px\">\n          <z-tab-bar-item v-for=\"(item, index) in data2\" :key=\"index\"\n                          :label=\"item.label\"\n                          :iconName=\"item.iconName\"\n                          :point=\"item.point\"\n                          :info=\"item.info\" @click=\"bindClick\">\n          </z-tab-bar-item>\n       </z-tab-bar>\n\n      index2: 0,\n      data2: [\n        {label: '标签', iconName: 'alipay', point: true},\n        {label: '标签', iconName: 'weixin', info: 100}\n      ]\n    ")]),_vm._v("\n  ")])])}]
var doc_Tabbar_esExports = { render: doc_Tabbar_render, staticRenderFns: doc_Tabbar_staticRenderFns }
/* harmony default export */ var doc_Tabbar = (doc_Tabbar_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Tabbar.vue
var doc_Tabbar_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Tabbar___vue_script__ = null
/* template */

/* template functional */
var doc_Tabbar___vue_template_functional__ = false
/* styles */
var doc_Tabbar___vue_styles__ = null
/* scopeId */
var doc_Tabbar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Tabbar___vue_module_identifier__ = null
var doc_Tabbar_Component = doc_Tabbar_normalizeComponent(
  Tabbar___vue_script__,
  doc_Tabbar,
  doc_Tabbar___vue_template_functional__,
  doc_Tabbar___vue_styles__,
  doc_Tabbar___vue_scopeId__,
  doc_Tabbar___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Tabbar = (doc_Tabbar_Component.exports);

// CONCATENATED MODULE: ../node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-6ae8baf9","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!../node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!../example/views/demo/doc/Collapse.vue
var doc_Collapse_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var doc_Collapse_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item"},[_c('h3',[_vm._v("coll-apse配置参数")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      * @params accordion Boolean 是否启用手风情模式\n      * @params defaultIndex Array 设置默认展开\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("coll-apse-item配置参数")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n        * @params title String/Number 说明\n        * @params disabled Boolean 是否被禁用\n        * @slot header 若需要自定义标题\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("基础使用实例")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n      <z-collapse :defaultIndex=\"[0]\">\n        <z-collapse-item title=\"标题a\" @click=\"clickItem\">\n          哈哈哈哈1\n        </z-collapse-item>\n        <z-collapse-item title=\"标题b\">\n          哈哈哈哈2\n        </z-collapse-item>\n        <z-collapse-item title=\"标题c\">\n          哈哈哈哈3\n        </z-collapse-item>\n      </z-collapse>\n    ")]),_vm._v("\n  ")]),_vm._v(" "),_c('h3',[_vm._v("手风情模式")]),_vm._v(" "),_c('pre',[_vm._v("    "),_c('code',[_vm._v("\n       <z-collapse :defaultIndex=\"[1]\" accordion>\n          <z-collapse-item title=\"被禁用\" disabled>\n            哈哈哈哈1\n          </z-collapse-item>\n          <z-collapse-item title=\"标题b\">\n            哈哈哈哈2\n          </z-collapse-item>\n          <z-collapse-item title=\"标题c\">\n            哈哈哈哈3\n          </z-collapse-item>\n       </z-collapse>\n    ")]),_vm._v("\n  ")])])}]
var doc_Collapse_esExports = { render: doc_Collapse_render, staticRenderFns: doc_Collapse_staticRenderFns }
/* harmony default export */ var doc_Collapse = (doc_Collapse_esExports);
// CONCATENATED MODULE: ../example/views/demo/doc/Collapse.vue
var doc_Collapse_normalizeComponent = __webpack_require__("AYo0")
/* script */
var Collapse___vue_script__ = null
/* template */

/* template functional */
var doc_Collapse___vue_template_functional__ = false
/* styles */
var doc_Collapse___vue_styles__ = null
/* scopeId */
var doc_Collapse___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var doc_Collapse___vue_module_identifier__ = null
var doc_Collapse_Component = doc_Collapse_normalizeComponent(
  Collapse___vue_script__,
  doc_Collapse,
  doc_Collapse___vue_template_functional__,
  doc_Collapse___vue_styles__,
  doc_Collapse___vue_scopeId__,
  doc_Collapse___vue_module_identifier__
)

/* harmony default export */ var demo_doc_Collapse = (doc_Collapse_Component.exports);

// CONCATENATED MODULE: ../example/views/index.js
// doc


// components















// doc列表
















// CONCATENATED MODULE: ../example/router/index.js




vue_esm["a" /* default */].use(vue_router_esm)

/* harmony default export */ var router = (new vue_router_esm({
  routes: [
    {path: '/', component: example_views_Container},
    {path: '/list', component: views_demo_List},

    {path: '/icon', component: demo_info_Icon},
    {path: '/toast', component: views_demo_info_Toast},
    {path: '/button', component: demo_info_Button},
    {path: '/scroll', component: demo_info_Scroll},
    {path: '/swipe', component: views_demo_info_Swipe},
    {path: '/alert', component: views_demo_info_Alert},
    {path: '/popup', component: views_demo_info_Popup},
    {path: '/spinner', component: views_demo_info_Spinner},
    {path: '/notice', component: demo_info_Notice},
    {path: '/cell', component: views_demo_info_Cell},
    {path: '/tag', component: views_demo_info_Tag},
    {path: '/tabbar', component: views_demo_info_Tabbar},
    {path: '/collapse', component: views_demo_info_Collapse},

    {path: '/doc-icon', component: demo_doc_Icon},
    {path: '/doc-toast', component: demo_doc_Toast},
    {path: '/doc-button', component: demo_doc_Button},
    {path: '/doc-scroll', component: demo_doc_Scroll},
    {path: '/doc-swipe', component: demo_doc_Swipe},
    {path: '/doc-alert', component: demo_doc_Alert},
    {path: '/doc-popup', component: demo_doc_Popup},
    {path: '/doc-spinner', component: demo_doc_Spinner},
    {path: '/doc-notice', component: doc_Noticle},
    {path: '/doc-cell', component: demo_doc_Cell},
    {path: '/doc-tag', component: demo_doc_Tag},
    {path: '/doc-tabbar', component: demo_doc_Tabbar},
    {path: '/doc-collapse', component: demo_doc_Collapse}
  ]
}));

// EXTERNAL MODULE: ../example/assets/style/reset.css
var style_reset = __webpack_require__("ETRq");
var reset_default = /*#__PURE__*/__webpack_require__.n(style_reset);

// CONCATENATED MODULE: ../example/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




vue_esm["a" /* default */].config.productionTip = false



vue_esm["a" /* default */].use(components_Icon)
vue_esm["a" /* default */].use(components_Scroll)
vue_esm["a" /* default */].use(components_Button)
vue_esm["a" /* default */].use(components_Swipe)
vue_esm["a" /* default */].use(components_Popup)
vue_esm["a" /* default */].use(components_Notice)
vue_esm["a" /* default */].use(components_Cell)
vue_esm["a" /* default */].use(components_Cell.Item)
vue_esm["a" /* default */].use(components_Tag)
vue_esm["a" /* default */].use(components_Tabbar)
vue_esm["a" /* default */].use(components_Tabbar.Item)
vue_esm["a" /* default */].use(components_Collapse)
vue_esm["a" /* default */].use(components_Collapse.Item)


/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: { App: example_App },
  template: '<App/>'
})


/***/ }),

/***/ "gI5P":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gSHJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("sbN1");
var $export = __webpack_require__("YU5P");
var redefine = __webpack_require__("ZIOw");
var hide = __webpack_require__("b72+");
var has = __webpack_require__("hEtQ");
var Iterators = __webpack_require__("ce1D");
var $iterCreate = __webpack_require__("FFIC");
var setToStringTag = __webpack_require__("hB9E");
var getPrototypeOf = __webpack_require__("sTNu");
var ITERATOR = __webpack_require__("dOr6")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "gzsj":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("8vjb");
var global = __webpack_require__("N+l2");
var hide = __webpack_require__("b72+");
var Iterators = __webpack_require__("ce1D");
var TO_STRING_TAG = __webpack_require__("dOr6")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "hB9E":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("MF3O").f;
var has = __webpack_require__("hEtQ");
var TAG = __webpack_require__("dOr6")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "hEtQ":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "hVZ0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hcud":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("FW53");
module.exports = __webpack_require__("6tbR").Object.assign;


/***/ }),

/***/ "hmpJ":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("V6GX");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "hobv":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("PbQQ");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "io2r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("MkoV"), __esModule: true };

/***/ }),

/***/ "j+32":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jlm0":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "jpaV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "llIn":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("PbQQ");
var TAG = __webpack_require__("dOr6")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "nAB9":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("PksZ");
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("NLzl")))

/***/ }),

/***/ "oRKa":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("Usa3");
var toLength = __webpack_require__("E6zZ");
var toAbsoluteIndex = __webpack_require__("hmpJ");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "ohHi":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("N+l2").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "ozb9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "pdvg":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("Gt1d");
var invoke = __webpack_require__("1YwH");
var html = __webpack_require__("ohHi");
var cel = __webpack_require__("U835");
var global = __webpack_require__("N+l2");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("PbQQ")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "rBHx":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("IvmU")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "rmiW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sTNu":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("hEtQ");
var toObject = __webpack_require__("SUGZ");
var IE_PROTO = __webpack_require__("LhVG")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "sWG3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("N+l2");
var core = __webpack_require__("6tbR");
var dP = __webpack_require__("MF3O");
var DESCRIPTORS = __webpack_require__("rBHx");
var SPECIES = __webpack_require__("dOr6")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "sbN1":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "snHU":
/***/ (function(module, exports) {



/***/ }),

/***/ "suPP":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0OA+");
var isObject = __webpack_require__("dYbq");
var newPromiseCapability = __webpack_require__("RC9M");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "t8u0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "u9Ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("ZuPK")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("gSHJ")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "uYGg":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("dYbq");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "wdCC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("5mnN");
var gOPS = __webpack_require__("eT7m");
var pIE = __webpack_require__("6QCa");
var toObject = __webpack_require__("SUGZ");
var IObject = __webpack_require__("hobv");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("IvmU")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "wrab":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "ycWB":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("N+l2");
var macrotask = __webpack_require__("pdvg").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("PbQQ")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "ykAS":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "zd6W":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ze7l":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("0OA+");
var aFunction = __webpack_require__("Tc1J");
var SPECIES = __webpack_require__("dOr6")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ })

},["fYJM"]);