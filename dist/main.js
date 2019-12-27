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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db-config.json":
/*!************************!*\
  !*** ./db-config.json ***!
  \************************/
/*! exports provided: OPEN_WEATHER_KEY, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"OPEN_WEATHER_KEY\":\"52dd2a6798a51432a71eb6fb1137fcc0\"}");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/*! exports provided: findNearMe, renderForecast, submit, getInput, resetHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNearMe", function() { return findNearMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderForecast", function() { return renderForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return getInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHTML", function() { return resetHTML; });
var kelvinToCelsius = function kelvinToCelsius(k) {
  return (k - 273.15).toFixed(0);
};

var kelvinToFahrenheit = function kelvinToFahrenheit(k) {
  return ((k - 273.15) * 9 / 5 + 32).toFixed(0);
};

var $weatherDivAll = document.querySelectorAll('.weather');
var findNearMe = document.getElementById('find-near-me');
var $inputCity = document.getElementById('city');
var $inputToggle = document.getElementById('unit');
var $search = document.getElementById('search');
var $searchNoInfo = document.querySelector('.no-info');
var $loadingAnimation = document.getElementById('loading-animation');
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var getIconUrl = function getIconUrl(icon) {
  return "https://openweathermap.org/img/wn/".concat(icon, "@2x.png");
};

var $kelvinTemperatureAll = [];

var customUnit = function customUnit() {
  return $inputToggle.checked ? '°C' : '°F';
};

var kelvinToCustomUnit = function kelvinToCustomUnit(k) {
  return $inputToggle.checked ? kelvinToCelsius(k) : kelvinToFahrenheit(k);
};

var locationDate = function locationDate(city, time) {
  var offsetDiff = new Date().getTimezoneOffset() * 60 + city.timezone;
  return new Date((time + offsetDiff) * 1000);
};

var getSunTime = function getSunTime(city, _ref) {
  var sunOption = _ref.sunOption;
  var date = locationDate(city, city[sunOption]);
  var hours = date.getHours();
  var sec = date.getSeconds();
  var min = "0".concat(date.getMinutes() + (sec >= 30)); // round for second

  return {
    hours: hours,
    min: min
  };
};

var sunriseTime = function sunriseTime(city) {
  var _getSunTime = getSunTime(city, {
    sunOption: 'sunrise'
  }),
      hours = _getSunTime.hours,
      min = _getSunTime.min;

  return "".concat(hours, ":").concat(min.substr(-2));
};

var sunsetTime = function sunsetTime(forecast) {
  var _getSunTime2 = getSunTime(forecast, {
    sunOption: 'sunset'
  }),
      hours = _getSunTime2.hours,
      min = _getSunTime2.min;

  return "".concat(hours, ":").concat(min.substr(-2));
};

var drawText = function drawText(_ref2) {
  var tag = _ref2.tag,
      classes = _ref2.classes,
      text = _ref2.text;
  var obj = document.createElement(tag);
  if (classes) classes.split(' ').forEach(function (c) {
    return obj.classList.add(c);
  });
  obj.appendChild(document.createTextNode(text));
  return obj;
};

var daylight = function daylight(city) {
  var text = "Daylight: ".concat(sunriseTime(city), " - ").concat(sunsetTime(city));
  return drawText({
    tag: 'div',
    text: text
  });
};

Date.prototype.mmdd = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based

  var dd = this.getDate();
  return [(mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join(' / ');
};

var createCityHTML = function createCityHTML(city) {
  var container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');
  var header = drawText({
    tag: 'h3',
    text: weekDays[new Date().getDay()]
  });
  container.appendChild(header);
  container.appendChild(drawText({
    tag: 'div',
    text: locationDate(city, city.sunrise).mmdd()
  }));
  container.appendChild(drawText({
    tag: 'div',
    text: "".concat(city.name, ", ").concat(city.country)
  }));
  container.appendChild(daylight(city));
  return container;
};

var drawIconImage = function drawIconImage(weather) {
  var icon = weather.icon;
  if (icon === '01n') icon = '01d';
  var image = document.createElement('img');
  image.src = getIconUrl(icon);
  image.alt = 'no info';
  return image;
};

var drawTemperature = function drawTemperature(_ref3) {
  var min = _ref3.min,
      max = _ref3.max;
  var temp = "".concat(kelvinToCustomUnit(min), " / ").concat(kelvinToCustomUnit(max), " ").concat(customUnit());
  return temp;
};

var minMaxDegree = function minMaxDegree(listAll, index) {
  var max;
  var min;

  for (var i = index; i < index + 8; i++) {
    var currMax = listAll[i].main.temp_max;
    var currMin = listAll[i].main.temp_min;
    if (!max || max < currMax) max = currMax;
    if (!min || min > currMin) min = currMin;
  }

  $kelvinTemperatureAll.push({
    min: min,
    max: max
  });
  return {
    min: min,
    max: max
  };
};

var toggleTemperatureUnit = function toggleTemperatureUnit() {
  var targetAll = document.querySelectorAll('.temperature');
  targetAll.forEach(function (target, i) {
    var _$kelvinTemperatureAl = $kelvinTemperatureAll[i],
        min = _$kelvinTemperatureAl.min,
        max = _$kelvinTemperatureAl.max;
    target.innerHTML = drawTemperature({
      min: min,
      max: max
    });
  });
};

var drawWindDirection = function drawWindDirection(deg) {
  var direction = document.createElement('i');
  direction.classList.add('fas', 'fa-location-arrow');
  direction.style.transform = "rotate(".concat(deg + 180 - 45, "deg)"); // wind from(180), original icon(45)

  return direction;
};

var drawWind = function drawWind(wind) {
  var deg = wind.deg;
  var windSpeed = wind.speed;
  var container = document.createElement('div');
  container.appendChild(drawWindDirection(deg));
  container.appendChild(document.createTextNode("".concat(windSpeed, " m/s")));
  return container;
};

var drawHumidity = function drawHumidity(main) {
  var container = document.createElement('div');
  var icon = document.createElement('i');
  var percentage = document.createTextNode("".concat(main.humidity, " %"));
  icon.classList.add('fas', 'fa-tint');
  container.appendChild(percentage);
  container.appendChild(icon);
  return container;
};

var drawPressure = function drawPressure(main) {
  return "".concat(main.pressure, " hPa");
};

var createWeatherHTML = function createWeatherHTML(listAll) {
  var container = document.createElement('div');
  container.classList.add('col-md-6', 'weather-description');
  var list = listAll[0];
  var temperature = drawTemperature(minMaxDegree(listAll, 0));
  container.appendChild(drawIconImage(list.weather[0]));
  container.appendChild(drawText({
    tag: 'h2',
    classes: 'temperature',
    text: temperature
  }));
  container.appendChild(drawText({
    tag: 'div',
    text: list.weather[0].main
  }));
  container.appendChild(drawWind(list.wind));
  container.appendChild(drawHumidity(list.main));
  container.appendChild(drawText({
    tag: 'div',
    text: drawPressure(list.main)
  }));
  return container;
};

var createNthDayHtml = function createNthDayHtml(listAll, i) {
  var list = listAll[i];
  var date = new Date().getDay() + Math.floor(i / 8);
  var first = document.createElement('div');
  var second = document.createElement('div');
  var temperature = drawTemperature(minMaxDegree(listAll, i));
  first.appendChild(drawIconImage(list.weather[0]));
  second.appendChild(drawText({
    tag: 'div',
    text: weekDays[date % 7]
  }));
  second.appendChild(drawText({
    tag: 'div',
    classes: 'temperature',
    text: temperature
  }));
  second.appendChild(drawWind(list.wind));
  second.appendChild(drawHumidity(list.main));
  second.appendChild(drawText({
    tag: 'div',
    text: drawPressure(list.main)
  }));
  return {
    first: first,
    second: second
  };
};

$inputToggle.addEventListener('click', function () {
  toggleTemperatureUnit();
});
var renderForecast = function renderForecast(forecast) {
  $loadingAnimation.classList.add('d-none');

  if (!forecast) {
    $searchNoInfo.classList.remove('d-none');
    return;
  }

  var cityContent = createCityHTML(forecast.city);
  var weatherContent = createWeatherHTML(forecast.list);
  $weatherDivAll[0].appendChild(cityContent);
  $weatherDivAll[0].appendChild(weatherContent);
  $weatherDivAll[0].style.visibility = 'visible';

  for (var i = 1; i < 5; i++) {
    var _createNthDayHtml = createNthDayHtml(forecast.list, i * 8),
        first = _createNthDayHtml.first,
        second = _createNthDayHtml.second;

    $weatherDivAll[i].appendChild(first);
    $weatherDivAll[i].appendChild(second);
    $weatherDivAll[i].style.visibility = 'visible';
  }
};
var submit = function submit() {
  return $inputCity;
};
var getInput = function getInput() {
  var value = $inputCity.value;
  $inputCity.value = '';
  return value;
};
var resetHTML = function resetHTML() {
  $search.classList.add('corner');
  $search.querySelector('#search .header').style.display = 'none';
  $weatherDivAll.forEach(function (div) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    div.style.visibility = 'hidden';
  });
  $searchNoInfo.classList.add('d-none');
  $loadingAnimation.classList.remove('d-none');
  $kelvinTemperatureAll = [];
};
$inputCity.focus();

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: getForecast, getForecastFromGeo, fetchCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForecast", function() { return getForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForecastFromGeo", function() { return getForecastFromGeo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCoordinates", function() { return fetchCoordinates; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var $dbConfig = __webpack_require__(/*! ./../db-config.json */ "./db-config.json");

var $openWeatherKey = $dbConfig.OPEN_WEATHER_KEY;
var $weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';

function errorHandler(err) {
  alert(err);
}

var getForecast =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(getInput) {
    var urlToFetch, response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlToFetch = "".concat($weatherUrl, "?q=").concat(getInput(), "&APPID=").concat($openWeatherKey);
            _context.next = 3;
            return fetch(urlToFetch);

          case 3:
            response = _context.sent;
            _context.prev = 4;

            if (!response.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.json();

          case 8:
            jsonResponse = _context.sent;
            return _context.abrupt("return", jsonResponse);

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](4);
            errorHandler(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 12]]);
  }));

  return function getForecast(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getForecastFromGeo =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref2) {
    var lat, lon, urlToFetch, response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            lat = _ref2.lat, lon = _ref2.lon;

            if (!(!lat || !lon)) {
              _context2.next = 4;
              break;
            }

            errorHandler("Sorry, browser does not support geolocation!");
            return _context2.abrupt("return");

          case 4:
            urlToFetch = "".concat($weatherUrl, "?lat=").concat(lat, "&lon=").concat(lon, "&appid=").concat($openWeatherKey);
            _context2.next = 7;
            return fetch(urlToFetch);

          case 7:
            response = _context2.sent;
            _context2.prev = 8;

            if (!response.ok) {
              _context2.next = 14;
              break;
            }

            _context2.next = 12;
            return response.json();

          case 12:
            jsonResponse = _context2.sent;
            return _context2.abrupt("return", jsonResponse);

          case 14:
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](8);
            errorHandler(_context2.t0);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[8, 16]]);
  }));

  return function getForecastFromGeo(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getCurrentPosition = function getCurrentPosition() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

var fetchCoordinates =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var _ref5, coords, latitude, longitude;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getCurrentPosition({
              timeout: 4000
            });

          case 3:
            _ref5 = _context3.sent;
            coords = _ref5.coords;
            latitude = coords.latitude, longitude = coords.longitude;
            return _context3.abrupt("return", {
              lat: latitude,
              lon: longitude
            });

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            errorHandler(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function fetchCoordinates() {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");



var searchWithInput = function searchWithInput() {
  Object(_components__WEBPACK_IMPORTED_MODULE_0__["resetHTML"])();
  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getForecast"])(_components__WEBPACK_IMPORTED_MODULE_0__["getInput"]).then(function (forecast) {
    return Object(_components__WEBPACK_IMPORTED_MODULE_0__["renderForecast"])(forecast);
  });
};

var searchWithGeo = function searchWithGeo() {
  Object(_components__WEBPACK_IMPORTED_MODULE_0__["resetHTML"])();
  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["fetchCoordinates"])().then(function (coord) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getForecastFromGeo"])(coord);
  }).then(function (forecast) {
    return Object(_components__WEBPACK_IMPORTED_MODULE_0__["renderForecast"])(forecast);
  });
};

Object(_components__WEBPACK_IMPORTED_MODULE_0__["submit"])().addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchWithInput();
  }
});
_components__WEBPACK_IMPORTED_MODULE_0__["findNearMe"].addEventListener('click', function () {
  searchWithGeo();
});

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi regenerator-runtime/runtime ./src/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsia2VsdmluVG9DZWxzaXVzIiwiayIsInRvRml4ZWQiLCJrZWx2aW5Ub0ZhaHJlbmhlaXQiLCIkd2VhdGhlckRpdkFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZpbmROZWFyTWUiLCJnZXRFbGVtZW50QnlJZCIsIiRpbnB1dENpdHkiLCIkaW5wdXRUb2dnbGUiLCIkc2VhcmNoIiwiJHNlYXJjaE5vSW5mbyIsInF1ZXJ5U2VsZWN0b3IiLCIkbG9hZGluZ0FuaW1hdGlvbiIsIndlZWtEYXlzIiwiZ2V0SWNvblVybCIsImljb24iLCIka2VsdmluVGVtcGVyYXR1cmVBbGwiLCJjdXN0b21Vbml0IiwiY2hlY2tlZCIsImtlbHZpblRvQ3VzdG9tVW5pdCIsImxvY2F0aW9uRGF0ZSIsImNpdHkiLCJ0aW1lIiwib2Zmc2V0RGlmZiIsIkRhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRpbWV6b25lIiwiZ2V0U3VuVGltZSIsInN1bk9wdGlvbiIsImRhdGUiLCJob3VycyIsImdldEhvdXJzIiwic2VjIiwiZ2V0U2Vjb25kcyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzdW5yaXNlVGltZSIsInN1YnN0ciIsInN1bnNldFRpbWUiLCJmb3JlY2FzdCIsImRyYXdUZXh0IiwidGFnIiwiY2xhc3NlcyIsInRleHQiLCJvYmoiLCJjcmVhdGVFbGVtZW50Iiwic3BsaXQiLCJmb3JFYWNoIiwiYyIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJkYXlsaWdodCIsInByb3RvdHlwZSIsIm1tZGQiLCJtbSIsImdldE1vbnRoIiwiZGQiLCJnZXREYXRlIiwiam9pbiIsImNyZWF0ZUNpdHlIVE1MIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiZ2V0RGF5Iiwic3VucmlzZSIsIm5hbWUiLCJjb3VudHJ5IiwiZHJhd0ljb25JbWFnZSIsIndlYXRoZXIiLCJpbWFnZSIsInNyYyIsImFsdCIsImRyYXdUZW1wZXJhdHVyZSIsIm1heCIsInRlbXAiLCJtaW5NYXhEZWdyZWUiLCJsaXN0QWxsIiwiaW5kZXgiLCJpIiwiY3Vyck1heCIsIm1haW4iLCJ0ZW1wX21heCIsImN1cnJNaW4iLCJ0ZW1wX21pbiIsInB1c2giLCJ0b2dnbGVUZW1wZXJhdHVyZVVuaXQiLCJ0YXJnZXRBbGwiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJkcmF3V2luZERpcmVjdGlvbiIsImRlZyIsImRpcmVjdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwiZHJhd1dpbmQiLCJ3aW5kIiwid2luZFNwZWVkIiwic3BlZWQiLCJkcmF3SHVtaWRpdHkiLCJwZXJjZW50YWdlIiwiaHVtaWRpdHkiLCJkcmF3UHJlc3N1cmUiLCJwcmVzc3VyZSIsImNyZWF0ZVdlYXRoZXJIVE1MIiwibGlzdCIsInRlbXBlcmF0dXJlIiwiY3JlYXRlTnRoRGF5SHRtbCIsIk1hdGgiLCJmbG9vciIsImZpcnN0Iiwic2Vjb25kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlckZvcmVjYXN0IiwicmVtb3ZlIiwiY2l0eUNvbnRlbnQiLCJ3ZWF0aGVyQ29udGVudCIsInZpc2liaWxpdHkiLCJzdWJtaXQiLCJnZXRJbnB1dCIsInZhbHVlIiwicmVzZXRIVE1MIiwiZGlzcGxheSIsImRpdiIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImZvY3VzIiwiJGRiQ29uZmlnIiwicmVxdWlyZSIsIiRvcGVuV2VhdGhlcktleSIsIk9QRU5fV0VBVEhFUl9LRVkiLCIkd2VhdGhlclVybCIsImVycm9ySGFuZGxlciIsImVyciIsImFsZXJ0IiwiZ2V0Rm9yZWNhc3QiLCJ1cmxUb0ZldGNoIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImpzb25SZXNwb25zZSIsImdldEZvcmVjYXN0RnJvbUdlbyIsImxhdCIsImxvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZmV0Y2hDb29yZGluYXRlcyIsInRpbWVvdXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInNlYXJjaFdpdGhJbnB1dCIsInRoZW4iLCJzZWFyY2hXaXRoR2VvIiwiY29vcmQiLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNB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QU4sbUJBQWU7QUFDaEI7QUFDRixDQUxEO0FBT0F4SixzREFBVSxDQUFDMkcsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6QytDLGVBQWE7QUFDZCxDQUZELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiY29uc3Qga2VsdmluVG9DZWxzaXVzID0gayA9PiAoayAtIDI3My4xNSkudG9GaXhlZCgwKTtcbmNvbnN0IGtlbHZpblRvRmFocmVuaGVpdCA9IGsgPT4gKChrIC0gMjczLjE1KSAqIDkgLyA1ICsgMzIpLnRvRml4ZWQoMCk7XG5jb25zdCAkd2VhdGhlckRpdkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVyJyk7XG5leHBvcnQgY29uc3QgZmluZE5lYXJNZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kLW5lYXItbWUnKTtcbmNvbnN0ICRpbnB1dENpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuY29uc3QgJGlucHV0VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXQnKTtcbmNvbnN0ICRzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCAkc2VhcmNoTm9JbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vLWluZm8nKTtcbmNvbnN0ICRsb2FkaW5nQW5pbWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmctYW5pbWF0aW9uJyk7XG5jb25zdCB3ZWVrRGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbmNvbnN0IGdldEljb25VcmwgPSBpY29uID0+IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xubGV0ICRrZWx2aW5UZW1wZXJhdHVyZUFsbCA9IFtdO1xuXG5jb25zdCBjdXN0b21Vbml0ID0gKCkgPT4gKCRpbnB1dFRvZ2dsZS5jaGVja2VkID8gJ8KwQycgOiAnwrBGJyk7XG5cbmNvbnN0IGtlbHZpblRvQ3VzdG9tVW5pdCA9IGsgPT4gKCRpbnB1dFRvZ2dsZS5jaGVja2VkID8ga2VsdmluVG9DZWxzaXVzKGspIDoga2VsdmluVG9GYWhyZW5oZWl0KGspKTtcblxuY29uc3QgbG9jYXRpb25EYXRlID0gKGNpdHksIHRpbWUpID0+IHtcbiAgY29uc3Qgb2Zmc2V0RGlmZiA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICsgY2l0eS50aW1lem9uZTtcbiAgcmV0dXJuIG5ldyBEYXRlKCh0aW1lICsgb2Zmc2V0RGlmZikgKiAxMDAwKTtcbn07XG5cbmNvbnN0IGdldFN1blRpbWUgPSAoY2l0eSwgeyBzdW5PcHRpb24gfSkgPT4ge1xuICBjb25zdCBkYXRlID0gbG9jYXRpb25EYXRlKGNpdHksIGNpdHlbc3VuT3B0aW9uXSk7XG4gIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBzZWMgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgY29uc3QgbWluID0gYDAke2RhdGUuZ2V0TWludXRlcygpICsgKHNlYyA+PSAzMCl9YDsgLy8gcm91bmQgZm9yIHNlY29uZFxuICByZXR1cm4geyBob3VycywgbWluIH07XG59O1xuXG5jb25zdCBzdW5yaXNlVGltZSA9IChjaXR5KSA9PiB7XG4gIGNvbnN0IHsgaG91cnMsIG1pbiB9ID0gZ2V0U3VuVGltZShjaXR5LCB7IHN1bk9wdGlvbjogJ3N1bnJpc2UnIH0pO1xuICByZXR1cm4gYCR7aG91cnN9OiR7bWluLnN1YnN0cigtMil9YDtcbn07XG5cbmNvbnN0IHN1bnNldFRpbWUgPSAoZm9yZWNhc3QpID0+IHtcbiAgY29uc3QgeyBob3VycywgbWluIH0gPSBnZXRTdW5UaW1lKGZvcmVjYXN0LCB7IHN1bk9wdGlvbjogJ3N1bnNldCcgfSk7XG4gIHJldHVybiBgJHtob3Vyc306JHttaW4uc3Vic3RyKC0yKX1gO1xufTtcblxuY29uc3QgZHJhd1RleHQgPSAoeyB0YWcsIGNsYXNzZXMsIHRleHQgfSkgPT4ge1xuICBjb25zdCBvYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChjbGFzc2VzKSBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChjID0+IG9iai5jbGFzc0xpc3QuYWRkKGMpKTtcbiAgb2JqLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcbiAgcmV0dXJuIG9iajtcbn07XG5cbmNvbnN0IGRheWxpZ2h0ID0gKGNpdHkpID0+IHtcbiAgY29uc3QgdGV4dCA9IGBEYXlsaWdodDogJHtzdW5yaXNlVGltZShjaXR5KX0gLSAke3N1bnNldFRpbWUoY2l0eSl9YDtcbiAgcmV0dXJuIGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dCB9KTtcbn07XG5cbkRhdGUucHJvdG90eXBlLm1tZGQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1tID0gdGhpcy5nZXRNb250aCgpICsgMTsgLy8gZ2V0TW9udGgoKSBpcyB6ZXJvLWJhc2VkXG4gIGNvbnN0IGRkID0gdGhpcy5nZXREYXRlKCk7XG5cbiAgcmV0dXJuIFsobW0gPiA5ID8gJycgOiAnMCcpICsgbW0sXG4gICAgKGRkID4gOSA/ICcnIDogJzAnKSArIGRkLFxuICBdLmpvaW4oJyAvICcpO1xufTtcblxuY29uc3QgY3JlYXRlQ2l0eUhUTUwgPSAoY2l0eSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC1tZC02JywgJ3dlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgaGVhZGVyID0gZHJhd1RleHQoeyB0YWc6ICdoMycsIHRleHQ6IHdlZWtEYXlzWyhuZXcgRGF0ZSgpKS5nZXREYXkoKV0gfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGV4dCh7IHRhZzogJ2RpdicsIHRleHQ6IGxvY2F0aW9uRGF0ZShjaXR5LCBjaXR5LnN1bnJpc2UpLm1tZGQoKSB9KSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGV4dCh7IHRhZzogJ2RpdicsIHRleHQ6IGAke2NpdHkubmFtZX0sICR7Y2l0eS5jb3VudHJ5fWAgfSkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5bGlnaHQoY2l0eSkpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgZHJhd0ljb25JbWFnZSA9ICh3ZWF0aGVyKSA9PiB7XG4gIGxldCB7IGljb24gfSA9IHdlYXRoZXI7XG4gIGlmIChpY29uID09PSAnMDFuJykgaWNvbiA9ICcwMWQnO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5zcmMgPSBnZXRJY29uVXJsKGljb24pO1xuICBpbWFnZS5hbHQgPSAnbm8gaW5mbyc7XG4gIHJldHVybiBpbWFnZTtcbn07XG5cbmNvbnN0IGRyYXdUZW1wZXJhdHVyZSA9ICh7IG1pbiwgbWF4IH0pID0+IHtcbiAgY29uc3QgdGVtcCA9IGAke2tlbHZpblRvQ3VzdG9tVW5pdChtaW4pfSAvICR7a2VsdmluVG9DdXN0b21Vbml0KG1heCl9ICR7Y3VzdG9tVW5pdCgpfWA7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuY29uc3QgbWluTWF4RGVncmVlID0gKGxpc3RBbGwsIGluZGV4KSA9PiB7XG4gIGxldCBtYXg7XG4gIGxldCBtaW47XG4gIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGluZGV4ICsgODsgaSsrKSB7XG4gICAgY29uc3QgY3Vyck1heCA9IGxpc3RBbGxbaV0ubWFpbi50ZW1wX21heDtcbiAgICBjb25zdCBjdXJyTWluID0gbGlzdEFsbFtpXS5tYWluLnRlbXBfbWluO1xuICAgIGlmICghbWF4IHx8IG1heCA8IGN1cnJNYXgpIG1heCA9IGN1cnJNYXg7XG4gICAgaWYgKCFtaW4gfHwgbWluID4gY3Vyck1pbikgbWluID0gY3Vyck1pbjtcbiAgfVxuICAka2VsdmluVGVtcGVyYXR1cmVBbGwucHVzaCh7IG1pbiwgbWF4IH0pO1xuICByZXR1cm4geyBtaW4sIG1heCB9O1xufTtcblxuY29uc3QgdG9nZ2xlVGVtcGVyYXR1cmVVbml0ID0gKCkgPT4ge1xuICBjb25zdCB0YXJnZXRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcGVyYXR1cmUnKTtcbiAgdGFyZ2V0QWxsLmZvckVhY2goKHRhcmdldCwgaSkgPT4ge1xuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9ICRrZWx2aW5UZW1wZXJhdHVyZUFsbFtpXTtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gZHJhd1RlbXBlcmF0dXJlKHsgbWluLCBtYXggfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZHJhd1dpbmREaXJlY3Rpb24gPSAoZGVnKSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZGlyZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1sb2NhdGlvbi1hcnJvdycpO1xuICBkaXJlY3Rpb24uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2RlZyArIDE4MCAtIDQ1fWRlZylgOyAvLyB3aW5kIGZyb20oMTgwKSwgb3JpZ2luYWwgaWNvbig0NSlcbiAgcmV0dXJuIGRpcmVjdGlvbjtcbn07XG5cbmNvbnN0IGRyYXdXaW5kID0gKHdpbmQpID0+IHtcbiAgY29uc3QgeyBkZWcgfSA9IHdpbmQ7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IHdpbmQuc3BlZWQ7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1dpbmREaXJlY3Rpb24oZGVnKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt3aW5kU3BlZWR9IG0vc2ApKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGRyYXdIdW1pZGl0eSA9IChtYWluKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBwZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7bWFpbi5odW1pZGl0eX0gJWApO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS10aW50Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJjZW50YWdlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgZHJhd1ByZXNzdXJlID0gbWFpbiA9PiBgJHttYWluLnByZXNzdXJlfSBoUGFgO1xuXG5jb25zdCBjcmVhdGVXZWF0aGVySFRNTCA9IChsaXN0QWxsKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29sLW1kLTYnLCAnd2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBsaXN0ID0gbGlzdEFsbFswXTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkcmF3VGVtcGVyYXR1cmUobWluTWF4RGVncmVlKGxpc3RBbGwsIDApKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdJY29uSW1hZ2UobGlzdC53ZWF0aGVyWzBdKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3VGV4dCh7IHRhZzogJ2gyJywgY2xhc3NlczogJ3RlbXBlcmF0dXJlJywgdGV4dDogdGVtcGVyYXR1cmUgfSkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCB0ZXh0OiBsaXN0LndlYXRoZXJbMF0ubWFpbiB9KSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmF3V2luZChsaXN0LndpbmQpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdIdW1pZGl0eShsaXN0Lm1haW4pKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogZHJhd1ByZXNzdXJlKGxpc3QubWFpbikgfSkpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlTnRoRGF5SHRtbCA9IChsaXN0QWxsLCBpKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBsaXN0QWxsW2ldO1xuICBjb25zdCBkYXRlID0gKG5ldyBEYXRlKCkpLmdldERheSgpICsgTWF0aC5mbG9vcihpIC8gOCk7XG4gIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRyYXdUZW1wZXJhdHVyZShtaW5NYXhEZWdyZWUobGlzdEFsbCwgaSkpO1xuICBmaXJzdC5hcHBlbmRDaGlsZChkcmF3SWNvbkltYWdlKGxpc3Qud2VhdGhlclswXSkpO1xuICBzZWNvbmQuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCB0ZXh0OiB3ZWVrRGF5c1tkYXRlICUgN10gfSkpO1xuICBzZWNvbmQuYXBwZW5kQ2hpbGQoZHJhd1RleHQoeyB0YWc6ICdkaXYnLCBjbGFzc2VzOiAndGVtcGVyYXR1cmUnLCB0ZXh0OiB0ZW1wZXJhdHVyZSB9KSk7XG4gIHNlY29uZC5hcHBlbmRDaGlsZChkcmF3V2luZChsaXN0LndpbmQpKTtcbiAgc2Vjb25kLmFwcGVuZENoaWxkKGRyYXdIdW1pZGl0eShsaXN0Lm1haW4pKTtcbiAgc2Vjb25kLmFwcGVuZENoaWxkKGRyYXdUZXh0KHsgdGFnOiAnZGl2JywgdGV4dDogZHJhd1ByZXNzdXJlKGxpc3QubWFpbikgfSkpO1xuICByZXR1cm4geyBmaXJzdCwgc2Vjb25kIH07XG59O1xuXG4kaW5wdXRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRvZ2dsZVRlbXBlcmF0dXJlVW5pdCgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJGb3JlY2FzdCA9IChmb3JlY2FzdCkgPT4ge1xuICAkbG9hZGluZ0FuaW1hdGlvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgaWYgKCFmb3JlY2FzdCkge1xuICAgICRzZWFyY2hOb0luZm8uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNpdHlDb250ZW50ID0gY3JlYXRlQ2l0eUhUTUwoZm9yZWNhc3QuY2l0eSk7XG4gIGNvbnN0IHdlYXRoZXJDb250ZW50ID0gY3JlYXRlV2VhdGhlckhUTUwoZm9yZWNhc3QubGlzdCk7XG4gICR3ZWF0aGVyRGl2QWxsWzBdLmFwcGVuZENoaWxkKGNpdHlDb250ZW50KTtcbiAgJHdlYXRoZXJEaXZBbGxbMF0uYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRlbnQpO1xuICAkd2VhdGhlckRpdkFsbFswXS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gY3JlYXRlTnRoRGF5SHRtbChmb3JlY2FzdC5saXN0LCBpICogOCk7XG4gICAgJHdlYXRoZXJEaXZBbGxbaV0uYXBwZW5kQ2hpbGQoZmlyc3QpO1xuICAgICR3ZWF0aGVyRGl2QWxsW2ldLmFwcGVuZENoaWxkKHNlY29uZCk7XG4gICAgJHdlYXRoZXJEaXZBbGxbaV0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdCA9ICgpID0+ICRpbnB1dENpdHk7XG5cbmV4cG9ydCBjb25zdCBnZXRJbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgdmFsdWUgPSAkaW5wdXRDaXR5LnZhbHVlO1xuICAkaW5wdXRDaXR5LnZhbHVlID0gJyc7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldEhUTUwgPSAoKSA9PiB7XG4gICRzZWFyY2guY2xhc3NMaXN0LmFkZCgnY29ybmVyJyk7XG4gICRzZWFyY2gucXVlcnlTZWxlY3RvcignI3NlYXJjaCAuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgJHdlYXRoZXJEaXZBbGwuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgd2hpbGUgKGRpdi5maXJzdENoaWxkKSB7XG4gICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBkaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9KTtcbiAgJHNlYXJjaE5vSW5mby5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgJGxvYWRpbmdBbmltYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICRrZWx2aW5UZW1wZXJhdHVyZUFsbCA9IFtdO1xufTtcblxuJGlucHV0Q2l0eS5mb2N1cygpO1xuIiwiY29uc3QgJGRiQ29uZmlnID0gcmVxdWlyZSgnLi8uLi9kYi1jb25maWcuanNvbicpO1xuXG5jb25zdCAkb3BlbldlYXRoZXJLZXkgPSAkZGJDb25maWcuT1BFTl9XRUFUSEVSX0tFWTtcbmNvbnN0ICR3ZWF0aGVyVXJsID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdCc7XG5cbmZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnIpIHtcbiAgYWxlcnQoZXJyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvcmVjYXN0ID0gYXN5bmMgKGdldElucHV0KSA9PiB7XG4gIGNvbnN0IHVybFRvRmV0Y2ggPSBgJHskd2VhdGhlclVybH0/cT0ke2dldElucHV0KCl9JkFQUElEPSR7JG9wZW5XZWF0aGVyS2V5fWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsVG9GZXRjaCk7XG4gIHRyeSB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4ganNvblJlc3BvbnNlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvckhhbmRsZXIoZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Rm9yZWNhc3RGcm9tR2VvID0gYXN5bmMgKHsgbGF0LCBsb24gfSkgPT4ge1xuICBpZiAoIWxhdCB8fCAhbG9uKSB7XG4gICAgZXJyb3JIYW5kbGVyKFwiU29ycnksIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBnZW9sb2NhdGlvbiFcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgdXJsVG9GZXRjaCA9IGAkeyR3ZWF0aGVyVXJsfT9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHskb3BlbldlYXRoZXJLZXl9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmxUb0ZldGNoKTtcbiAgdHJ5IHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGVycm9ySGFuZGxlcihlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGdldEN1cnJlbnRQb3NpdGlvbiA9IChvcHRpb25zID0ge30pID0+IChcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKTtcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvb3JkaW5hdGVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgY29vcmRzIH0gPSBhd2FpdCBnZXRDdXJyZW50UG9zaXRpb24oeyB0aW1lb3V0OiA0MDAwIH0pO1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gY29vcmRzO1xuICAgIHJldHVybiB7IGxhdDogbGF0aXR1ZGUsIGxvbjogbG9uZ2l0dWRlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZXJyb3JIYW5kbGVyKGVycm9yKTtcbiAgfVxufTtcbiIsImltcG9ydCB7XG4gIHJlbmRlckZvcmVjYXN0LCBzdWJtaXQsIGdldElucHV0LCByZXNldEhUTUwsIGZpbmROZWFyTWUsXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIGdldEZvcmVjYXN0LCBnZXRGb3JlY2FzdEZyb21HZW8sIGZldGNoQ29vcmRpbmF0ZXMsXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IHNlYXJjaFdpdGhJbnB1dCA9ICgpID0+IHtcbiAgcmVzZXRIVE1MKCk7XG4gIGdldEZvcmVjYXN0KGdldElucHV0KS50aGVuKGZvcmVjYXN0ID0+IHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KSk7XG59O1xuXG5jb25zdCBzZWFyY2hXaXRoR2VvID0gKCkgPT4ge1xuICByZXNldEhUTUwoKTtcbiAgZmV0Y2hDb29yZGluYXRlcygpXG4gICAgLnRoZW4oY29vcmQgPT4gZ2V0Rm9yZWNhc3RGcm9tR2VvKGNvb3JkKSlcbiAgICAudGhlbihmb3JlY2FzdCA9PiByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCkpO1xufTtcblxuc3VibWl0KCkuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hXaXRoSW5wdXQoKTtcbiAgfVxufSk7XG5cbmZpbmROZWFyTWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNlYXJjaFdpdGhHZW8oKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==