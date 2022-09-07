(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// define model name
var model = "permission";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: model,
      check_all: null,
      dominions: {},
      data: {
        role_id: "",
        permissions: []
      },
      extraData: {
        roles: []
      },
      permission: [],
      errors: {}
    };
  },
  watch: {
    check_all: function check_all(val, oldval) {
      var _this = this;

      this.data.permissions = [];

      if (val) {
        this.dominions.forEach(function (dominion) {
          dominion.processes.forEach(function (process) {
            _this.data.permissions.push(process);
          });
        });
      }
    }
  },
  methods: {
    submit: function submit() {
      var _this2 = this;

      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        // If there is an error
        if (error > 0) {
          _this2.flashMessage.warning({
            title: "Empty Mandatory Fields!!",
            icon: _this2.$root.baseurl + "/images/warning.png",
            message: "You need to fill " + error + " more empty mandatory fields"
          });

          return false;
        } // If there is no error


        if (res) {
          if (_this2.data.id) {
            _this2.update(_this2.model, _this2.data, _this2.data.id);
          } else {
            _this2.store(_this2.model, _this2.data);
          }
        }
      });
    },
    allDominion: function allDominion() {
      var _this3 = this;

      this.$root.spinner = true;
      axios.get("/alldominion").then(function (response) {
        _this3.dominions = response.data;
      })["catch"](function (error) {
        return console.log();
      }).then(function (alw) {
        return setTimeout(function () {
          return _this3.$root.spinner = false;
        }, 200);
      });
    }
  },
  created: function created() {
    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit"); // Set Breadcrumbs

      this.get_data(this.model, this.$route.params.id, "data"); // get data for edit
    } else {
      this.setBreadcrumbs(this.model, "create"); // Set Breadcrumbs
    }

    this.get_paginate_data("role", {
      allData: true
    }, "roles"); // get roles

    this.allDominion();
  },
  // ================== validation rule for form ==================
  validators: {
    "data.role_id": function dataRole_id() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Role is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=template&id=c7e66074&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=template&id=c7e66074& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v(_vm._s(_vm.model + " Create"))]), _vm._v(" "), _c("AddOrBackButton", {
    attrs: {
      route: _vm.model + ".index",
      portion: _vm.model,
      icon: "arrow-left"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "box-body box-min-height"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("form", {
    staticClass: "form-row col-12",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group mb-2 col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.role_id"),
      "": _vm.data.role_id
    }
  }, [_c("label", {
    staticClass: "control-label"
  }, [_vm._v("Role")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.role_id,
      expression: "data.role_id"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.data, "role_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Select Role")]), _vm._v(" "), _vm._l(_vm.extraData.roles, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: value.id
      }
    }, [_vm._v(_vm._s(value.name))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.role_id")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-1 pt-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.check_all,
      expression: "check_all"
    }],
    attrs: {
      chacked: "",
      type: "checkbox",
      id: "is_closed",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.check_all) ? _vm._i(_vm.check_all, "1") > -1 : _vm.check_all
    },
    on: {
      change: function change($event) {
        var $$a = _vm.check_all,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = "1",
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.check_all = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.check_all = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.check_all = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "col-form-label-sm font-weight-normal mb-0",
    attrs: {
      "for": "is_closed"
    }
  }, [_vm._v("Check All")])]), _vm._v(" "), _c("div", {
    staticClass: "w-100"
  }), _vm._v(" "), _c("table", {
    staticClass: "table tablesorter border table-hover",
    attrs: {
      border: "1"
    }
  }, _vm._l(_vm.dominions, function (dominion) {
    return _c("tr", {
      key: dominion.id
    }, [_c("td", [_vm._v(_vm._s(dominion.name))]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "row"
    }, _vm._l(dominion.processes, function (processe) {
      return _c("div", {
        key: processe.id,
        staticClass: "col-3"
      }, [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.data.permissions,
          expression: "data.permissions"
        }],
        attrs: {
          type: "checkbox",
          checked: "",
          id: processe.id
        },
        domProps: {
          value: processe,
          checked: Array.isArray(_vm.data.permissions) ? _vm._i(_vm.data.permissions, processe) > -1 : _vm.data.permissions
        },
        on: {
          change: function change($event) {
            var $$a = _vm.data.permissions,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;

            if (Array.isArray($$a)) {
              var $$v = processe,
                  $$i = _vm._i($$a, $$v);

              if ($$el.checked) {
                $$i < 0 && _vm.$set(_vm.data, "permissions", $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(_vm.data, "permissions", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(_vm.data, "permissions", $$c);
            }
          }
        }
      }), _vm._v(" "), _c("label", {
        attrs: {
          "for": processe.id
        }
      }, [_vm._v(_vm._s(processe.name) + "(" + _vm._s(_vm.$root.guards[processe.guard]) + ")")])]);
    }), 0)])]);
  }), 0), _vm._v(" "), _vm._m(0)])])])]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-12 mb-3 mt-2"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-info",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/backend/Menu/Permission/Create.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Permission/Create.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_c7e66074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=c7e66074& */ "./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=template&id=c7e66074&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_c7e66074___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_c7e66074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/Menu/Permission/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=template&id=c7e66074&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=template&id=c7e66074& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c7e66074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=c7e66074& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Permission/Create.vue?vue&type=template&id=c7e66074&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c7e66074___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_c7e66074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=2.js.map