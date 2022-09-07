(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Process/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Menu/Process/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// define model name
var model = "process";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: model,
      data: {
        dominion_id: "",
        guard: "admin"
      },
      errors: {}
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        // If there is an error
        if (error > 0) {
          _this.notification("You need to fill " + error + " more empty mandatory fields", "warning");

          return false;
        } // If there is no error


        if (res) {
          if (_this.data.id) {
            _this.update(_this.model, _this.data, _this.data.id);
          } else {
            _this.store(_this.model, _this.data);
          }
        }
      });
    },
    dominion: function dominion(event) {
      var all_process = "";
      var process = ["index", "create", "store", "show", "edit", "update", "destroy"];
      var dom = this.$root.allDominionList[event.target.value].toLowerCase().trim();
      process.forEach(function (element) {
        all_process += dom + "." + element + ",";
      });
      this.data.route_name = all_process.slice(0, -1);
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit"); // Set Breadcrumbs

      this.get_data(this.model, this.$route.params.id, "data"); // get data for edit
    } else {
      this.setBreadcrumbs(this.model, "create"); // Set Breadcrumbs

      setTimeout(function () {
        return _this2.$root.spinner = false;
      }, 200);
    }
  },
  beforeCreate: function beforeCreate() {
    this.$root.spinner = true;
  },
  // ================== validation rule for form ==================
  validators: {
    "data.dominion_id": function dataDominion_id() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Dominion is required");
    },
    "data.route_name": function dataRoute_name() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Route Name is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Process/Create.vue?vue&type=template&id=7e4cc0c2&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Menu/Process/Create.vue?vue&type=template&id=7e4cc0c2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.dominion_id"),
      "has-success": _vm.data.dominion_id
    }
  }, [_c("label", [_vm._v("Dominion")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.dominion_id,
      expression: "data.dominion_id"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.data, "dominion_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.dominion($event);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Select Dominion")]), _vm._v(" "), _vm._l(_vm.$root.allDominionList, function (dominion, dominion_id) {
    return _c("option", {
      key: dominion_id,
      domProps: {
        value: dominion_id
      }
    }, [_vm._v(_vm._s(dominion))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.dominion_id")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-8",
    "class": {
      "has-error": _vm.validation.hasError("data.route_name"),
      "has-success": _vm.data.route_name
    }
  }, [_c("label", [_vm._v("Route Name(x.index,x.create,x.store,x.show,x.edit,x.update,x.destroy)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.route_name,
      expression: "data.route_name"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Route Name"
    },
    domProps: {
      value: _vm.data.route_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.data, "route_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.route_name")))])]), _vm._v(" "), _vm._m(0)])])])]) : _vm._e()]);
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

/***/ "./resources/js/views/backend/Menu/Process/Create.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Process/Create.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_7e4cc0c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=7e4cc0c2& */ "./resources/js/views/backend/Menu/Process/Create.vue?vue&type=template&id=7e4cc0c2&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/Menu/Process/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_7e4cc0c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_7e4cc0c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/Menu/Process/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/Menu/Process/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Process/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Process/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/Menu/Process/Create.vue?vue&type=template&id=7e4cc0c2&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Process/Create.vue?vue&type=template&id=7e4cc0c2& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7e4cc0c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=7e4cc0c2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Process/Create.vue?vue&type=template&id=7e4cc0c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7e4cc0c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7e4cc0c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=3.js.map