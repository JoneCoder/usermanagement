(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/ActivityLog/View.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/ActivityLog/View.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// define model name
var model = "activityLog";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: model,
      data: []
    };
  },
  created: function created() {
    this.get_data(this.model, this.$route.params.id, "data"); // get data

    this.setBreadcrumbs(this.model, "view"); // Set Breadcrumbs
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/ActivityLog/View.vue?vue&type=template&id=53d0fe19&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/ActivityLog/View.vue?vue&type=template&id=53d0fe19& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("b", [_vm._v(_vm._s(_vm.data.log_name))]), _vm._v("\n        ( " + _vm._s(_vm.data.description) + " )\n      ")]), _vm._v(" "), _c("AddOrBackButton", {
    attrs: {
      route: _vm.model + ".index",
      portion: _vm.model,
      icon: "arrow-left"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [!_vm.$root.spinner ? _c("div", {
    staticClass: "box box-danger"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover"
  }, [_c("tbody", _vm._l(_vm.data.properties.old, function (item, name) {
    return _c("tr", {
      key: "A" + name
    }, [typeof item == "string" ? _c("th", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(name.replace(new RegExp("_", "g"), " ")))]) : _vm._e(), _vm._v(" "), typeof item == "string" ? _c("td", [name == "created_at" ? _c("span", [_vm._v(_vm._s(_vm._f("formatDate")(item)))]) : name == "updated_at" ? _c("span", [_vm._v(_vm._s(_vm._f("formatDate")(item)))]) : _c("span", [_vm._v(_vm._s(item))])]) : _vm._e()]);
  }), 0)])])])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [!_vm.$root.spinner ? _c("div", {
    staticClass: "box box-success"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover"
  }, [_c("tbody", _vm._l(_vm.data.properties.attributes, function (item, name) {
    return _c("tr", {
      key: "A" + name
    }, [typeof item == "string" ? _c("th", {
      staticClass: "text-capitalize"
    }, [_vm._v(_vm._s(name.replace(new RegExp("_", "g"), " ")))]) : _vm._e(), _vm._v(" "), typeof item == "string" ? _c("td", [name == "created_at" ? _c("span", [_vm._v(_vm._s(_vm._f("formatDate")(item)))]) : name == "updated_at" ? _c("span", [_vm._v(_vm._s(_vm._f("formatDate")(item)))]) : _c("span", [_vm._v(_vm._s(item))])]) : _vm._e()]);
  }), 0)])])])]) : _vm._e()])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v("Before process data")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v("After process data")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/backend/ActivityLog/View.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/backend/ActivityLog/View.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_53d0fe19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=53d0fe19& */ "./resources/js/views/backend/ActivityLog/View.vue?vue&type=template&id=53d0fe19&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/ActivityLog/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_53d0fe19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_53d0fe19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/ActivityLog/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/ActivityLog/View.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/backend/ActivityLog/View.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/ActivityLog/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/ActivityLog/View.vue?vue&type=template&id=53d0fe19&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/backend/ActivityLog/View.vue?vue&type=template&id=53d0fe19& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_53d0fe19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=53d0fe19& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/ActivityLog/View.vue?vue&type=template&id=53d0fe19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_53d0fe19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_53d0fe19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=12.js.map