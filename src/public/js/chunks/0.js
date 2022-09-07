(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {// define model name
var model = "authorizedmenu";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      model: model,
      dominions: {},
      ProcessList: [],
      AllProcess: [],
      rootMenu: [],
      data: {
        parent_id: "",
        dominion_id: "",
        process_id: "",
        position: 0,
        icon: "<i class='fa fa-circle-o text-aqua'></i>",
        show_dasboard: 0,
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
    dominionList: function dominionList() {
      var _this2 = this;

      axios.get("/dominionList").then(function (response) {
        _this2.dominions = response.data;
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    getProcessList: function getProcessList() {
      var _this3 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var url = "/processList";

      if (id.length > 0 & field.length > 0) {
        url = url + "/" + id + "/" + field;
      }

      axios.get(url).then(function (response) {
        _this3.ProcessList = response.data;
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    getAllProcess: function getAllProcess() {
      var _this4 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var url = "/AllProcess";

      if (id.length > 0 & field.length > 0) {
        url = url + "/" + id + "/" + field;
      }

      axios.get(url).then(function (response) {
        _this4.AllProcess = response.data;
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    getRootMenu: function getRootMenu() {
      var _this5 = this;

      axios.get("/rootmenu").then(function (response) {
        _this5.rootMenu = response.data; // console.log(response.data);
      })["catch"](function (error) {
        console.log(error.response);
      });
    },
    changeGuard: function changeGuard(process_id) {
      for (process in this.AllProcess) {
        if (this.AllProcess[process].id == process_id) {
          this.data.guard = this.AllProcess[process].guard;
          this.data.route_name = this.AllProcess[process].route_name;
        }
      }
    }
  },
  created: function created() {
    var _this6 = this;

    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit"); // Set Breadcrumbs

      this.get_data(this.model, this.$route.params.id, "data"); // get data for edit

      this.getAllProcess(this.data.dominion_id, "dominion_id");
    } else {
      this.setBreadcrumbs(this.model, "create"); // Set Breadcrumbs

      setTimeout(function () {
        return _this6.$root.spinner = false;
      }, 200);
    }

    this.dominionList();
    this.getRootMenu();
  },
  beforeCreate: function beforeCreate() {
    this.$root.spinner = true;
  },
  // ================== validation rule for form ==================
  validators: {
    "data.name": function dataName() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Name is required");
    },
    // "data.dominion_id": function(value = null) {
    //   return Validator.value(value).required("Dominion is required");
    // },
    // "data.process_id": function(value = null) {
    //   return Validator.value(value).required("Process is required");
    // },
    "data.position": function dataPosition() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).digit();
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=template&id=8a28a38a&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=template&id=8a28a38a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      "has-error": _vm.validation.hasError("data.parent_id"),
      "has-success": _vm.data.parent_id
    }
  }, [_c("label", [_vm._v("Parent menu")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.parent_id,
      expression: "data.parent_id"
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

        _vm.$set(_vm.data, "parent_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Select parent menu")]), _vm._v(" "), _vm._l(_vm.rootMenu, function (value, id, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: id
      }
    }, [_vm._v(_vm._s(value))]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.parent_id")))])]), _vm._v(" "), _c("div", {
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
        return _vm.getAllProcess(_vm.data.dominion_id, "dominion_id");
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
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.process_id"),
      "has-success": _vm.data.process_id
    }
  }, [_c("label", [_vm._v("Process")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.process_id,
      expression: "data.process_id"
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

        _vm.$set(_vm.data, "process_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.changeGuard(_vm.data.process_id);
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Select Process")]), _vm._v(" "), _vm._l(_vm.AllProcess, function (process, id, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: process.id
      }
    }, [_vm._v(_vm._s(process.name) + "(" + _vm._s(_vm.$root.guards[process.guard]) + ")")]);
  })], 2), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.process_id")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.icon"),
      "has-success": _vm.data.icon
    }
  }, [_c("label", [_vm._v("Icon")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.icon,
      expression: "data.icon"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Icon"
    },
    domProps: {
      value: _vm.data.icon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.data, "icon", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.icon")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.position"),
      "has-success": _vm.data.position
    }
  }, [_c("label", [_vm._v("Position")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.data.position,
      expression: "data.position",
      modifiers: {
        number: true
      }
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Position"
    },
    domProps: {
      value: _vm.data.position
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.data, "position", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.position")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.route_name"),
      "has-success": _vm.data.route_name
    }
  }, [_c("label", [_vm._v("Route Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.route_name,
      expression: "data.route_name"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Route Name",
      disabled: ""
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
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.route_name")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-3",
    "class": {
      "has-error": _vm.validation.hasError("data.params"),
      "has-success": _vm.data.params
    }
  }, [_c("label", [_vm._v("Params")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.params,
      expression: "data.params"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Params"
    },
    domProps: {
      value: _vm.data.params
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.data, "params", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "help-block"
  }, [_vm._v(_vm._s(_vm.validation.firstError("data.params")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-2"
  }, [_c("label", [_vm._v("Show Dashboard")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.show_dasboard,
      expression: "data.show_dasboard"
    }],
    attrs: {
      type: "radio",
      name: "status"
    },
    domProps: {
      value: 0,
      checked: _vm._q(_vm.data.show_dasboard, 0)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.data, "show_dasboard", 0);
      }
    }
  }), _vm._v(" No\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.show_dasboard,
      expression: "data.show_dasboard"
    }],
    attrs: {
      type: "radio",
      name: "status"
    },
    domProps: {
      value: 1,
      checked: _vm._q(_vm.data.show_dasboard, 1)
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.data, "show_dasboard", 1);
      }
    }
  }), _vm._v(" Yes\n              ")])])]), _vm._v(" "), _vm._m(0)])])])]) : _vm._e()]);
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

/***/ "./resources/js/views/backend/Menu/Authorizedmenu/Create.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Authorizedmenu/Create.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_8a28a38a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=8a28a38a& */ "./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=template&id=8a28a38a&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_8a28a38a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_8a28a38a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/Menu/Authorizedmenu/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=template&id=8a28a38a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=template&id=8a28a38a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_8a28a38a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=8a28a38a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Menu/Authorizedmenu/Create.vue?vue&type=template&id=8a28a38a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_8a28a38a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_8a28a38a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=0.js.map