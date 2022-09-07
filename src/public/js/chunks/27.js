(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/User/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/User/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_0__);
// ===============Promise===============
 // define model name

var model = "user";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: model,
      role_name: "",
      image: {},
      data: [],
      password_option: false,
      pass_verify: false,
      change_pass: {}
    };
  },
  methods: {
    updateInformation: function updateInformation() {
      var _this = this;

      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        if (res) {
          _this.$root.spinner = true;
          var form = document.getElementById("updateInfoForm");
          var formData = new FormData(form);
          formData.append("_method", "put");

          if (_this.image.profile) {
            formData.append("profile", _this.image.profile);
          } else {
            formData.append("profile", "");
          }

          axios.post("/admin/" + _this.$route.params.id, formData).then(function (res) {
            _this.notification(res.data.message, "success");

            _this.get_data(_this.model, _this.$route.params.id, "data");

            setTimeout(function () {
              profile.dispatch("setProfile", _this.data.profile);
            }, 400);
          })["catch"](function (error) {
            return console.log(error);
          }).then(function (alw) {
            return setTimeout(function () {
              return _this.$root.spinner = false;
            }, 200);
          });
        }
      });
    },
    onFileChange: function onFileChange(e, model, fileClass) {
      var pdf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      this.showImage(e, model, model, fileClass, pdf); // 1st profile image, second show image
    },
    passwordOption: function passwordOption(type) {
      this.password_option = type;
    },
    changePassword: function changePassword() {
      var _this2 = this;

      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        if (res) {
          _this2.$root.spinner = true;
          axios.post("/change-password", _this2.change_pass).then(function (res) {
            _this2.password_option = false;
            _this2.pass_verify = false;
            _this2.change_pass = {};

            _this2.notification(res.data.message, "success");
          })["catch"](function (error) {
            return console.log(error);
          }).then(function (alw) {
            return setTimeout(function () {
              return _this2.$root.spinner = false;
            }, 200);
          });
        }
      });
    }
  },
  created: function created() {
    this.role_name = Admin.role();
    this.change_pass.id = this.$route.params.id;
    this.get_data(this.model, this.$route.params.id, "data"); // get data

    this.setBreadcrumbs(this.model, "view"); // Set Breadcrumbs
  },
  // ================== validation rule for form ==================
  validators: {
    "data.name": function dataName() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.password_option) {
        return Validator.value(value).required("Name is required");
      }
    },
    "data.mobile": function dataMobile() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.password_option) {
        return Validator.value(value).digit().regex("01+[0-9+-]*$", "Must start with 01.").minLength(11).maxLength(15);
      }
    },
    "change_pass.old_password": function change_passOld_password() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var app = this;

      if (this.password_option) {
        return Validator.value(value).required("Old password is required").minLength(6).custom(function () {
          if (!Validator.isEmpty(value)) {
            axios.post("/check-old-password", app.change_pass).then(function (res) {
              if (res.data) {
                app.pass_verify = true;
              } else {
                app.pass_verify = false;
                return "Old password do not match our records!!";
              }
            });
            return bluebird__WEBPACK_IMPORTED_MODULE_0___default.a.delay(2000).then(function () {
              if (!app.pass_verify) {
                return "Old password do not match our records!!";
              }
            });
          }
        });
      }
    },
    "change_pass.new_password": function change_passNew_password() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.password_option && this.pass_verify) {
        return Validator.value(value).required("New password is required").minLength(6);
      }
    },
    "change_pass.confirm_password, change_pass.new_password": function change_passConfirm_passwordChange_passNew_password() {
      var confirm_password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var new_password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.password_option && this.pass_verify) {
        return Validator.value(confirm_password).required("Password confirmation is required").match(new_password);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/User/View.vue?vue&type=template&id=20564ebf&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/User/View.vue?vue&type=template&id=20564ebf& ***!
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

  return !_vm.$root.spinner ? _c("section", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "box box-primary"
  }, [_vm.data ? _c("div", {
    staticClass: "box-body box-profile"
  }, [_c("img", {
    staticClass: "profile-user-img img-responsive rounded-circle d-flex align-item-center",
    attrs: {
      src: _vm.data.profile ? _vm.data.profile : _vm.$root.userimage,
      alt: "User profile picture"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "profile-username text-center"
  }, [_vm._v(_vm._s(_vm.data.name))]), _vm._v(" "), _c("p", {
    staticClass: "text-muted text-center"
  }, [_vm._v(_vm._s(_vm.data.rolename.name))])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "box box-primary"
  }, [_vm._m(0), _vm._v(" "), _vm.data ? _c("div", {
    staticClass: "box-body"
  }, [_vm._m(1), _vm._v("\n          " + _vm._s(_vm.data.email) + "\n          "), _c("hr"), _vm._v(" "), _vm._m(2), _vm._v("\n          " + _vm._s(_vm.data.mobile) + "\n          "), _c("hr"), _vm._v(" "), _vm._m(3), _vm._v("\n          " + _vm._s(_vm.data.address) + "\n        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("div", {
    staticClass: "nav-tabs-custom"
  }, [_c("div", {
    staticClass: "card-header tab-card-header"
  }, [_c("ul", {
    staticClass: "nav nav-tabs card-header-tabs",
    attrs: {
      id: "myTab",
      role: "tablist"
    }
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link active text-black",
    attrs: {
      href: "#settings",
      "data-toggle": "tab"
    },
    on: {
      click: function click($event) {
        return _vm.passwordOption(false);
      }
    }
  }, [_vm._v("Settings")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link text-black",
    attrs: {
      href: "#change-password",
      "data-toggle": "tab"
    },
    on: {
      click: function click($event) {
        return _vm.passwordOption(true);
      }
    }
  }, [_vm._v("Change Password")])])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("div", {
    staticClass: "active tab-pane",
    attrs: {
      id: "settings"
    }
  }, [_c("form", {
    staticClass: "row border rounded border-default m-1 p-2",
    attrs: {
      enctype: "multipart/form-data",
      id: "updateInfoForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateInformation.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group mb-2 col-6",
    "class": {
      "has-error": _vm.validation.hasError("data.name"),
      "": _vm.data.name
    }
  }, [_c("label", {
    staticClass: "control-label"
  }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
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
    staticClass: "form-group mb-2 col-6",
    "class": {
      "has-error": _vm.validation.hasError("data.mobile"),
      "": _vm.data.mobile
    }
  }, [_c("label", {
    staticClass: "control-label"
  }, [_vm._v("Mobile")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.mobile,
      expression: "data.mobile"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      name: "mobile",
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
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.mobile")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-2 col-6",
    "class": {
      "": _vm.data.profile
    }
  }, [_c("label", {
    staticClass: "control-label"
  }, [_vm._v("Profile")]), _vm._v(" "), _c("b-form-file", {
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
    },
    model: {
      value: _vm.image.profile,
      callback: function callback($$v) {
        _vm.$set(_vm.image, "profile", $$v);
      },
      expression: "image.profile"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-2 col-6",
    "class": {
      "": _vm.data.address
    }
  }, [_c("label", {
    staticClass: "control-label"
  }, [_vm._v("Address")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.address,
      expression: "data.address"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      name: "address",
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
  })]), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane",
    attrs: {
      id: "change-password"
    }
  }, [_c("form", {
    staticClass: "row border rounded border-default m-1 p-2",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.changePassword.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group mb-2 col-6",
    "class": {
      "has-error": _vm.validation.hasError("change_pass.old_password"),
      "has-success": _vm.change_pass.old_password
    }
  }, [_c("label", {
    staticClass: "control-label"
  }, [_vm._v("Old Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.change_pass.old_password,
      expression: "change_pass.old_password"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "password",
      placeholder: "Old Password"
    },
    domProps: {
      value: _vm.change_pass.old_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.change_pass, "old_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("change_pass.old_password")))])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "w-100"
  }), _vm._v(" "), _vm.pass_verify ? _vm._t("default", function () {
    return [_vm.pass_verify ? _c("div", {
      staticClass: "form-group mb-2 col-6",
      "class": {
        "has-error": _vm.validation.hasError("change_pass.new_password"),
        "has-success": _vm.change_pass.new_password
      }
    }, [_c("label", {
      staticClass: "control-label"
    }, [_vm._v("New Password")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.change_pass.new_password,
        expression: "change_pass.new_password"
      }],
      staticClass: "form-control form-control-sm",
      attrs: {
        type: "password",
        placeholder: "New Password"
      },
      domProps: {
        value: _vm.change_pass.new_password
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.change_pass, "new_password", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("change_pass.new_password")))])]) : _vm._e(), _vm._v(" "), _vm.pass_verify ? _c("div", {
      staticClass: "form-group mb-2 col-6",
      "class": {
        "has-error": _vm.validation.hasError("change_pass.confirm_password"),
        "has-success": _vm.change_pass.confirm_password
      }
    }, [_c("label", {
      staticClass: "control-label"
    }, [_vm._v("Confirm Password")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.change_pass.confirm_password,
        expression: "change_pass.confirm_password"
      }],
      staticClass: "form-control form-control-sm",
      attrs: {
        type: "password",
        placeholder: "Confirm Password"
      },
      domProps: {
        value: _vm.change_pass.confirm_password
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(_vm.change_pass, "confirm_password", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "help-block"
    }, [_vm._v(_vm._s(_vm.validation.firstError("change_pass.confirm_password")))])]) : _vm._e()];
  }) : _vm._e(), _vm._v(" "), _vm._m(6)], 2)])])])])])]) : _vm._e();
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v("Contact Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("strong", [_c("i", {
    staticClass: "fa fa-envelope-o margin-r-5"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("strong", [_c("i", {
    staticClass: "fa fa-phone margin-r-5"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("strong", [_c("i", {
    staticClass: "fa fa-map margin-r-5"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row col-12 justify-content-center p-3"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Update Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-6 pt-4"
  }, [_c("small", {
    staticClass: "text-danger"
  }, [_vm._v("Please type your password slowly")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row col-12 justify-content-center p-3"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Change Password")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/backend/User/View.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/backend/User/View.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_20564ebf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=20564ebf& */ "./resources/js/views/backend/User/View.vue?vue&type=template&id=20564ebf&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/User/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_20564ebf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_20564ebf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/User/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/User/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/backend/User/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/User/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/User/View.vue?vue&type=template&id=20564ebf&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/backend/User/View.vue?vue&type=template&id=20564ebf& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_20564ebf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=20564ebf& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/User/View.vue?vue&type=template&id=20564ebf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_20564ebf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_20564ebf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.js.map