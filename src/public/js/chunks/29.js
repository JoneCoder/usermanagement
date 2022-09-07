(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/register/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/register/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {
        name: "",
        username: "",
        mobile: "",
        address: "",
        email: "",
        password: "",
        re_password: ""
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        if (res) {
          _this.$root.spinner = true;
          axios.post("/registation", _this.data).then(function (res) {
            if (res.status == 200 && res.data.id) {
              Admin.login(res.data);

              _this.notification(res.data.message, "success");

              window.location = _this.$root.baseurl + "/admin/dashboard";
            } else {
              _this.$root.spinner = false;

              _this.notification(res.data.message, "error");
            }
          })["catch"](function (error) {
            return console.log(error);
          });
        }
      });
    }
  },
  created: function created() {
    $(".body").removeClass("hold-transition skin-blue sidebar-mini");
    $(".body").addClass("hold-transition login-page");
  },
  // ================== validation rule for form ==================
  validators: {
    "data.name": function dataName() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Name is required");
    },
    "data.username": function dataUsername() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Username is required");
    },
    "data.mobile": function dataMobile() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).minLength(11).maxLength(11);
    },
    "data.email": function dataEmail() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Email is required");
    },
    "data.password": function dataPassword() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Password is required").minLength(6);
    },
    "data.re_password": function dataRe_password() {
      var _this2 = this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Re Password is required").minLength(6).custom(function () {
        if (_this2.data.password != value) {
          return 'Password and re password dose not match!';
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/register/Register.vue?vue&type=template&id=1caf7640&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/register/Register.vue?vue&type=template&id=1caf7640& ***!
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

  return _c("div", {
    staticClass: "login-box"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "login-box-body"
  }, [_c("p", {
    staticClass: "login-box-msg"
  }, [_vm._v("New Registation")]), _vm._v(" "), !_vm.$root.spinner ? _vm._t("default", function () {
    return [_c("form", {
      attrs: {
        method: "post"
      },
      on: {
        submit: function submit($event) {
          $event.preventDefault();
          return _vm.submit.apply(null, arguments);
        }
      }
    }, [_c("div", {
      staticClass: "form-group has-feedback",
      "class": {
        "has-error": _vm.validation.hasError("data.name"),
        "has-success": _vm.data.name
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.data.name,
        expression: "data.name"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
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
      staticClass: "glyphicon glyphicon-envelope form-control-feedback"
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("data.name")))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group has-feedback",
      "class": {
        "has-error": _vm.validation.hasError("data.username"),
        "has-success": _vm.data.username
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.data.username,
        expression: "data.username"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: "Username"
      },
      domProps: {
        value: _vm.data.username
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.data, "username", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "glyphicon glyphicon-envelope form-control-feedback"
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("data.username")))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group has-feedback",
      "class": {
        "has-error": _vm.validation.hasError("data.mobile"),
        "has-success": _vm.data.mobile
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.data.mobile,
        expression: "data.mobile"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: "Mobile"
      },
      domProps: {
        value: _vm.data.mobile
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.data, "mobile", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "glyphicon glyphicon-envelope form-control-feedback"
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("data.mobile")))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group has-feedback",
      "class": {
        "has-error": _vm.validation.hasError("data.address"),
        "has-success": _vm.data.address
      }
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.data.address,
        expression: "data.address"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        placeholder: "Address"
      },
      domProps: {
        value: _vm.data.address
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.data, "address", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "glyphicon glyphicon-envelope form-control-feedback"
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("data.address")))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group has-feedback",
      "class": {
        "has-error": _vm.validation.hasError("data.email"),
        "has-success": _vm.data.email
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.data.email,
        expression: "data.email"
      }],
      staticClass: "form-control",
      attrs: {
        type: "email",
        placeholder: "Email"
      },
      domProps: {
        value: _vm.data.email
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.data, "email", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "glyphicon glyphicon-envelope form-control-feedback"
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("data.email")))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group has-feedback",
      "class": {
        "has-error": _vm.validation.hasError("data.password"),
        "has-success": _vm.data.password
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.data.password,
        expression: "data.password"
      }],
      staticClass: "form-control",
      attrs: {
        type: "password",
        placeholder: "Password"
      },
      domProps: {
        value: _vm.data.password
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.data, "password", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "glyphicon glyphicon-lock form-control-feedback"
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("data.password")))])]), _vm._v(" "), _c("div", {
      staticClass: "form-group has-feedback",
      "class": {
        "has-error": _vm.validation.hasError("data.re_password"),
        "has-success": _vm.data.re_password
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.data.re_password,
        expression: "data.re_password"
      }],
      staticClass: "form-control",
      attrs: {
        type: "password",
        placeholder: "Re type password"
      },
      domProps: {
        value: _vm.data.re_password
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.data, "re_password", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "glyphicon glyphicon-lock form-control-feedback"
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("data.re_password")))])]), _vm._v(" "), _c("div", {
      staticClass: "row flex justify-content-center"
    }, [_vm._m(1), _vm._v(" "), _c("div", {
      staticClass: "col-xs-4 ml-2 flex justify-content-center"
    }, [_c("router-link", {
      staticClass: "btn btn-info btn-block",
      attrs: {
        to: "/admin"
      }
    }, [_c("small", [_vm._v("Sign in")])])], 1)])])];
  }) : _vm._e(), _vm._v(" "), _vm.$root.spinner ? _c("spinner") : _vm._e()], 2)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "login-logo"
  }, [_c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("b", [_vm._v("Admin")]), _vm._v("Panel\n    ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-xs-4 flex justify-content-center"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-block btn-flat",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Registation")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/register/Register.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/register/Register.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_1caf7640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=1caf7640& */ "./resources/js/views/register/Register.vue?vue&type=template&id=1caf7640&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/register/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_1caf7640___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_1caf7640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/register/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/register/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/register/Register.vue?vue&type=template&id=1caf7640&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/register/Register.vue?vue&type=template&id=1caf7640& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1caf7640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=1caf7640& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/register/Register.vue?vue&type=template&id=1caf7640&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1caf7640___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_1caf7640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=29.js.map