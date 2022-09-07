(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Doc/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_0__);
// ===============Promise===============
 //when use validation custom
// define model name

var model = "doc"; // set breadcrumb
//const breadcrumb = [{ route: "module.create", title: "Module Create" }];

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: model,
      selectMenu: {
        1: "Nothing",
        2: "Something"
      },
      data: {
        select: "",
        profile: "",
        pdf_file: ""
      },
      image: {},
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
          _this.flashMessage.warning({
            title: "Empty Mandatory Fields!!",
            icon: _this.$root.baseurl + "/images/warning.png",
            message: "You need to fill " + error + " more empty mandatory fields"
          });

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
    submitWithImage: function submitWithImage() {
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
          var form = document.getElementById("form");
          var formData = new FormData(form);

          if (_this2.image.image) {
            formData.append("image", _this2.image.image);
          } else {
            formData.append("image", "");
          }

          if (_this2.data.description) {
            formData.append("description", _this2.data.description);
          } else {
            formData.append("description", "");
          }

          if (_this2.data.id) {
            _this2.update(_this2.model, formData, _this2.data.id, "image");
          } else {
            _this2.store(_this2.model, formData);
          }
        }
      });
    },
    onFileChange: function onFileChange(e, model, fileClass) {
      var pdf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      this.showImage(e, model, model, fileClass, pdf); // 1st data image, second show image
    },
    axiosReq: function axiosReq() {
      var _this3 = this;

      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        if (res) {
          _this3.$root.spinner = true;
          axios.post("/module/create", _this3.data).then(function (res) {
            _this3.notification("Module Create Successfully", "success");

            _this3.$router.push({
              name: _this3.model + ".index",
              params: {
                model: _this3.data.model_name
              }
            });
          })["catch"](function (error) {
            return _this3.notification("Something went wrong, but Some file are crated, please check", "error");
          }).then(function (alw) {
            return setTimeout(function () {
              return _this3.$root.spinner = false;
            }, 200);
          });
        }
      });
    }
  },
  created: function created() {
    var _this4 = this;

    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit"); // Set Breadcrumbs

      this.get_data(this.model, this.$route.params.id, "data"); // get data for edit
    } else {
      this.setBreadcrumbs(this.model, "create"); // Set Breadcrumbs
      //breadcrumbs.dispatch("setBreadcrumbs", breadcrumb); // Set Breadcrumbs

      setTimeout(function () {
        return _this4.$root.spinner = false;
      }, 200);
    }
  },
  beforeCreate: function beforeCreate() {
    this.$root.spinner = true;
  },
  // ================== validation rule for form ==================
  validators: {
    "data.name": function dataName() {//return Validator.value(value).required("Name is required");

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Create.vue?vue&type=template&id=0152208d&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Doc/Create.vue?vue&type=template&id=0152208d& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "form"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.name"),
      "has-success": _vm.data.name
    }
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.name,
      expression: "data.name"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      name: "name",
      placeholder: "Name"
    },
    domProps: {
      value: _vm.data.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.data, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.name")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.name"),
      "has-success": _vm.data.name
    }
  }, [_c("label", [_vm._v("Select Menu")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.select,
      expression: "data.select"
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

        _vm.$set(_vm.data, "select", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("--Select one--")]), _vm._v(" "), _vm._l(_vm.selectMenu, function (value, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: value
      }
    }, [_vm._v(_vm._s(value))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.name")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2",
    "class": {
      "has-error": _vm.validation.hasError("data.sorting"),
      "has-success": _vm.data.sorting
    }
  }, [_c("label", [_vm._v("Sorting")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.sorting,
      expression: "data.sorting"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "number",
      name: "sorting",
      placeholder: "Sorting"
    },
    domProps: {
      value: _vm.data.sorting
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.data, "sorting", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.sorting")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2",
    "class": {
      "has-error": _vm.validation.hasError("data.date"),
      "has-success": _vm.data.date
    }
  }, [_c("label", [_vm._v("Datepicker")]), _vm._v(" "), _c("b-form-datepicker", {
    staticClass: "col-12 no-padding",
    attrs: {
      id: "datepicker-sm",
      size: "sm",
      "date-format-options": {
        year: "numeric",
        month: "short",
        day: "2-digit",
        weekday: "short"
      }
    },
    model: {
      value: _vm.data.date,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "date", $$v);
      },
      expression: "data.date"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.date")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("label", [_vm._v("Status")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.status,
      expression: "data.status"
    }],
    attrs: {
      type: "radio",
      name: "status"
    },
    domProps: {
      value: 1,
      checked: _vm._q(_vm.data.status, 1)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.data, "status", 1);
      }
    }
  }), _vm._v(" Active\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.status,
      expression: "data.status"
    }],
    attrs: {
      type: "radio",
      name: "status"
    },
    domProps: {
      value: 0,
      checked: _vm._q(_vm.data.status, 0)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.data, "status", 0);
      }
    }
  }), _vm._v(" Deactive\n              ")])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("label", [_vm._v("Active / Deactive")]), _vm._v(" "), _c("div", {
    staticClass: "row col-12 mt-2"
  }, [_c("b-form-checkbox", {
    staticClass: "col-form-label-sm col-6",
    attrs: {
      name: "status2",
      value: 1,
      "unchecked-value": null
    },
    model: {
      value: _vm.data.status2,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "status2", $$v);
      },
      expression: "data.status2"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "col-form-label-sm col-6",
    attrs: {
      name: "status2",
      value: 1,
      "unchecked-value": null
    },
    model: {
      value: _vm.data.status2,
      callback: function callback($$v) {
        _vm.$set(_vm.data, "status2", $$v);
      },
      expression: "data.status2"
    }
  }, [_vm._v("Deactive")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-row col-12"
  }, [_c("label", {
    staticClass: "col-12"
  }, [_vm._v("Description")]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("editor", {
    attrs: {
      editorModel: "description"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.profile"),
      "has-success": _vm.data.profile
    }
  }, [_c("label", [_vm._v("Image")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-2"
  }, [_c("img", {
    staticClass: "img-responsive rounded-circle choose-file-size",
    attrs: {
      src: _vm.data.profile ? _vm.data.profile : _vm.$root.noimage,
      alt: "picture"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-10"
  }, [_c("b-form-file", {
    staticClass: "file1",
    attrs: {
      accept: "image/*",
      id: "file-small",
      size: "sm",
      "drop-placeholder": "Drop file here"
    },
    on: {
      change: function change($event) {
        return _vm.onFileChange($event, "profile", "file1");
      }
    }
  })], 1)]), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.profile")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.pdf_file"),
      "has-success": _vm.data.pdf_file
    }
  }, [_c("label", [_vm._v("File")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-2"
  }, [_c("img", {
    staticClass: "img-responsive rounded-circle choose-file-size",
    attrs: {
      src: _vm.data.pdf_file ? _vm.data.pdf_file : _vm.$root.noimage,
      alt: "picture"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-10"
  }, [_c("b-form-file", {
    staticClass: "file2",
    attrs: {
      accept: ".pdf",
      id: "file-small",
      size: "sm",
      "drop-placeholder": "Drop file here"
    },
    on: {
      change: function change($event) {
        return _vm.onFileChange($event, "pdf_file", "file2", "pdf");
      }
    }
  })], 1)]), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.pdf_file")))])]), _vm._v(" "), _vm._m(0)])])])]) : _vm._e()]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-12 mb-3 mt-5"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-info",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/backend/Doc/Create.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/backend/Doc/Create.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_0152208d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=0152208d& */ "./resources/js/views/backend/Doc/Create.vue?vue&type=template&id=0152208d&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/Doc/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_0152208d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_0152208d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/Doc/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/Doc/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/backend/Doc/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/Doc/Create.vue?vue&type=template&id=0152208d&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/backend/Doc/Create.vue?vue&type=template&id=0152208d& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0152208d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=0152208d& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Doc/Create.vue?vue&type=template&id=0152208d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0152208d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_0152208d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map