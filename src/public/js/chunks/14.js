(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Doc/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _data$methods$mounted;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// define model name
var model = "user";
var breadcrumb = [{
  route: "document.index",
  title: "Document List"
}]; // routes name

var routes = {
  view: model + ".show",
  edit: model + ".edit",
  destroy: model + ".destroy",
  array: [{
    route: model + ".passGenerate",
    icon: "users",
    btnColor: "info"
  }, {
    route: model + ".quotationList",
    icon: "users",
    btnColor: "success"
  }]
}; // extra button added in top

var extraButtons = [{
  route: model + ".passGenerate",
  icon: "lock",
  btnColor: "info",
  name: "info"
}, {
  route: model + ".quotationList",
  icon: "list",
  btnColor: "success",
  name: "info"
}]; // define table coloumn show in datatable / datalist

var tableColumns = [{
  field: "name",
  title: "Name"
}, {
  field: "email",
  title: "Email"
}, {
  field: "seen",
  title: "Seen",
  custom_status: true,
  value: {
    1: "Seen",
    0: "Unseen"
  }
}, {
  field: "image",
  title: "Image",
  image: true,
  width: "50",
  height: "50"
}, {
  field: "album",
  title: "Album Name",
  subfield: "name"
}, {
  field: "arrayValue",
  title: "Custom Array",
  array: true,
  array_value: [{
    title: "Name"
  }]
}, {
  field: "created_at",
  title: "Created at"
}]; //json fields for export excel

var json_fields = {
  Name: "name",
  "Created at": "created_at"
};
/* harmony default export */ __webpack_exports__["default"] = (_data$methods$mounted = {
  data: function data() {
    return {
      model: model,
      json_fields: json_fields,
      fields_name: {
        0: "Select One",
        name: "Name"
      },
      search_data: {
        pagination: 10,
        field_name: 0,
        value: ""
      },
      data: {},
      errors: {},
      table: {
        columns: tableColumns,
        routes: {},
        datas: [],
        meta: [],
        links: []
      }
    };
  },
  methods: {
    getDatas: function getDatas(page_index) {
      var _this = this;

      var url = "/user";

      if (page_index > 0) {
        url = "/user/?page=" + page_index;
      }

      axios.get(url, {
        params: this.search_data
      }).then(function (respons) {
        _this.table.datas = respons.data.data;
        _this.table.meta = respons.data.meta;
        _this.table.links = respons.data.links;
      })["catch"](function (error) {
        return console.log(error);
      }).then(function (alw) {
        return setTimeout(function () {
          return _this.$root.spinner = false;
        }, 200);
      });
    },
    submit: function submit() {
      var _this2 = this;

      this.$root.spinner = true;

      if (this.data.id) {
        axios.put("/user" + this.data.id, this.data).then(function (respons) {// this.$router.push("/country");
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this2.errors = error.response.data.errors || {};
          }
        }).then(function (alw) {
          return setTimeout(function () {
            return _this2.$root.spinner = false;
          }, 200);
        });
      } else {
        axios.post("/user", this.data).then(function (respons) {// this.$router.push("/country");
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this2.errors = error.response.data.errors || {};
          }
        }).then(function (alw) {
          return setTimeout(function () {
            return _this2.$root.spinner = false;
          }, 200);
        });
      }
    },
    get_data: function get_data(id) {
      var _this3 = this;

      axios.get("/user" + id).then(function (respons) {
        _this3.data = respons.data;
      })["catch"](function (error) {
        return console.log(error);
      }).then(function (alw) {
        return setTimeout(function () {
          return _this3.$root.spinner = false;
        }, 200);
      });
    }
  },
  mounted: function mounted() {
    this.getDatas();

    if (this.$route.params.id) {
      this.get_data(this.$route.params.id);
    }
  },
  created: function created() {
    var _this4 = this;

    breadcrumbs.dispatch("setBreadcrumbs", breadcrumb);
    setTimeout(function () {
      return _this4.$root.spinner = false;
    }, 200);
  }
}, _defineProperty(_data$methods$mounted, "created", function created() {
  var _this5 = this;

  return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this5.get_paginate_data(_this5.model, _this5.search_data);

          case 2:
            // get data list
            _this5.getRouteName(_this5.model); // get route name for edit / delete / show


            _this5.setBreadcrumbs(_this5.model, "index"); // Set Breadcrumbs
            // this.get_paginate_data("admin", { allData: true }, "admins"); // get admins


          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))();
}), _defineProperty(_data$methods$mounted, "beforeCreate", function beforeCreate() {
  this.$root.spinner = true;
}), _data$methods$mounted);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Index.vue?vue&type=template&id=550e975e&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Doc/Index.vue?vue&type=template&id=550e975e& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [!_vm.$root.spinner ? _c("div", {
    staticClass: "box box-success"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "box-tools pull-right"
  }, [_c("router-link", {
    staticClass: "btn btn-xs btn-success pull-left text-white",
    attrs: {
      to: {
        name: "document.create"
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Add New\n        ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover table-striped"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.table.datas, function (data, index) {
    return _vm._t("default", function () {
      return [_c("tr", {
        key: index
      }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(data.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(data.email))]), _vm._v(" "), _c("td", {
        staticClass: "action"
      }, [_vm.routes.view && _vm.$root.checkPermission(_vm.routes.view) ? _c("router-link", {
        staticClass: "btn btn-xs btn-success action-view",
        attrs: {
          to: {
            name: _vm.routes.view,
            params: {
              id: _vm.item.id
            }
          },
          title: "View"
        }
      }, [_c("i", {
        staticClass: "fa fa-eye"
      })]) : _vm._e(), _vm._v(" "), _vm.routes.edit && _vm.$root.checkPermission(_vm.routes.edit) ? _c("router-link", {
        staticClass: "btn btn-xs btn-primary action-pencil",
        attrs: {
          to: {
            name: _vm.routes.edit,
            params: {
              id: _vm.item.id
            }
          },
          title: "Edit"
        }
      }, [_c("i", {
        staticClass: "fa fa-pencil"
      })]) : _vm._e(), _vm._v(" "), _vm.routes.destroy && _vm.$root.checkPermission(_vm.routes.destroy) ? _c("button", {
        staticClass: "btn btn-xs btn-danger action-trash",
        attrs: {
          title: "Delete"
        },
        on: {
          click: function click($event) {
            return _vm.destroy(_vm.item.id);
          }
        }
      }, [_c("i", {
        staticClass: "fa fa-trash"
      })]) : _vm._e()], 1)])];
    });
  })], 2)])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "box-header with-border"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("form", {
    staticClass: "form-row col-12 no-padding pl-1",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.search.apply(null, arguments);
      }
    }
  }, [_c("Search", {
    attrs: {
      fields_name: _vm.fields_name
    }
  })], 1)]), _vm._v(" "), _c("AddOrBackButton", {
    attrs: {
      route: _vm.model + ".create",
      portion: _vm.model,
      icon: "plus"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("base-table", {
    attrs: {
      data: _vm.table.datas,
      columns: _vm.table.columns,
      routes: _vm.table.routes,
      "thead-classes": "bg-light text-secondary"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "box-footer clearfix"
  }, [!_vm.$root.spinner ? _c("Pagination", {
    attrs: {
      url: "/user/"
    }
  }) : _vm._e()], 1)]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-2 pl-3 no-padding"
  }, [_c("select", {
    staticClass: "form-control form-control-sm"
  }, [_c("option", [_vm._v("option 1")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-2 no-padding"
  }, [_c("input", {
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      name: "table_search",
      placeholder: "Search"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-1 no-padding"
  }, [_c("a", {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "fa fa-search"
  })])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", {
    staticClass: "bg-purple text-white base-table-thead"
  }, [_c("tr", [_c("th", {
    staticClass: "sl"
  }, [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("th", {
    staticClass: "action"
  }, [_vm._v("Action")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/backend/Doc/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/backend/Doc/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_550e975e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=550e975e& */ "./resources/js/views/backend/Doc/Index.vue?vue&type=template&id=550e975e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/Doc/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_550e975e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_550e975e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/Doc/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/Doc/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/backend/Doc/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/Doc/Index.vue?vue&type=template&id=550e975e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/backend/Doc/Index.vue?vue&type=template&id=550e975e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_550e975e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=550e975e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Index.vue?vue&type=template&id=550e975e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_550e975e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_550e975e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.js.map