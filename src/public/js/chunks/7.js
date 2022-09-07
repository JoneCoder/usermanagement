(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Breadcrumbs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    removeMenu: function removeMenu(index) {
      breadcrumbs.dispatch("removeMenu", index);
    }
  },
  computed: {
    breadcrumbLevels: function breadcrumbLevels() {
      return breadcrumbs.state.breadcrumbLevels;
    },
    menuTags: function menuTags() {
      return breadcrumbs.state.menuTags;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      role_name: "",
      logged_id: "",
      logged_name: "",
      username: "",
      shortName: ""
    };
  },
  computed: {
    profileImage: function profileImage() {
      return profile.state.image;
    }
  },
  methods: {
    Logout: function Logout() {
      this.$root.spinner = true;
      Admin.logout();
    },
    CreateShortName: function CreateShortName(username) {
      var len = username.length,
          i = 0,
          shortName = '';

      while (i <= len) {
        var character = username.charAt(i);

        if (character == character.toUpperCase()) {
          shortName += character;
        }

        i++;
      }

      return shortName;
    }
  },
  mounted: function mounted() {
    this.logged_id = Admin.id();
    this.role_name = Admin.role();
    this.logged_name = Admin.name();
    this.username = Admin.username();
    this.shortName = this.CreateShortName(Admin.username());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Leftside.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Leftside.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecursiveMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecursiveMenu */ "./resources/js/components/backend/RecursiveMenu.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RecursiveMenu: _RecursiveMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      logged_name: ""
    };
  },
  computed: {
    profileImage: function profileImage() {
      return profile.state.image;
    }
  },
  created: function created() {
    this.logged_name = Admin.name();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/RecursiveMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/RecursiveMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecursiveMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecursiveMenu */ "./resources/js/components/backend/RecursiveMenu.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RecursiveMenu",
  components: {
    RecursiveMenu: _RecursiveMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["all_children_menus", "root_menu"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Layout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Layout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_backend_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/backend/Header */ "./resources/js/components/backend/Header.vue");
/* harmony import */ var _components_backend_Leftside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/backend/Leftside */ "./resources/js/components/backend/Leftside.vue");
/* harmony import */ var _components_backend_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/backend/Footer */ "./resources/js/components/backend/Footer.vue");
/* harmony import */ var _components_backend_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/backend/Breadcrumbs */ "./resources/js/components/backend/Breadcrumbs.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Breadcrumbs: _components_backend_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"],
    Header: _components_backend_Header__WEBPACK_IMPORTED_MODULE_0__["default"],
    LeftSide: _components_backend_Leftside__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_backend_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  beforeCreate: function beforeCreate() {
    if (!Admin.id()) {
      Admin.logout();
    }
  },
  created: function created() {
    $(document).ready(function () {
      $(".sidebar-menu").tree();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Breadcrumbs.vue?vue&type=template&id=4c4e413a&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Breadcrumbs.vue?vue&type=template&id=4c4e413a& ***!
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

  return _c("div", [Object.keys(_vm.breadcrumbLevels).length > 0 ? _c("section", {
    staticClass: "content-header"
  }, [_c("h1", [_vm._v(_vm._s(_vm.breadcrumbLevels[0] ? _vm.breadcrumbLevels[0][Object.keys(_vm.breadcrumbLevels[0]).length - 1]["title"] : ""))]), _vm._v(" "), _c("ol", {
    staticClass: "breadcrumb"
  }, [_c("li", [_c("router-link", {
    attrs: {
      to: {
        name: "admin.dashboard"
      }
    }
  }, [_vm._v("Dashboard")])], 1), _vm._v(" "), _vm._l(_vm.breadcrumbLevels[0], function (menu, index1) {
    return _c("li", {
      key: index1
    }, [_c("router-link", {
      attrs: {
        to: {
          name: menu.route,
          params: {
            slug: menu.slug ? menu.slug : ""
          }
        }
      }
    }, [_vm._v(_vm._s(menu.title))])], 1);
  })], 2)]) : _vm._e(), _vm._v(" "), Object.keys(_vm.menuTags).length > 0 ? _c("section", {
    staticClass: "menu-tags"
  }, [_c("ul", {
    staticClass: "tags"
  }, [_vm._l(_vm.menuTags, function (menuName, index) {
    return _vm._t("default", function () {
      return [_c("li", {
        key: index,
        "class": menuName.route == _vm.$route.name ? "active" : ""
      }, [_vm.$root.checkPermission(menuName.route) ? _c("router-link", {
        attrs: {
          to: {
            name: menuName.route,
            params: {
              slug: menuName.slug ? menuName.slug : ""
            }
          }
        }
      }, [_vm._v("\n            " + _vm._s(menuName.title) + "\n            "), index != 0 ? _c("i", {
        staticClass: "fa fa-times",
        on: {
          click: function click($event) {
            return _vm.removeMenu(index);
          }
        }
      }) : _vm._e()]) : _vm._e()], 1)];
    });
  })], 2)]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Footer.vue?vue&type=template&id=0edda1a1&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Footer.vue?vue&type=template&id=0edda1a1& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("footer", {
    staticClass: "main-footer"
  }, [_c("div", {
    staticClass: "pull-right hidden-xs"
  }, [_c("b", [_vm._v("Developed by:")]), _vm._v(" MD. SHARIFUL ISLAM")]), _vm._v(" "), _c("strong", [_vm._v("\n    Copyright © 2020\n    "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("JoneCoder")]), _vm._v(".\n  ")]), _vm._v("\n  All rights reserved.\n")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=template&id=30100593&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Header.vue?vue&type=template&id=30100593& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("header", {
    staticClass: "main-header"
  }, [_c("a", {
    staticClass: "logo",
    attrs: {
      href: "#"
    }
  }, [_c("span", {
    staticClass: "logo-mini"
  }, [_c("b", [_vm._v(_vm._s(_vm.shortName))])]), _vm._v(" "), _c("span", {
    staticClass: "logo-lg"
  }, [_vm._v(" " + _vm._s(_vm.username) + " ")])]), _vm._v(" "), _c("nav", {
    staticClass: "navbar navbar-expand-md",
    attrs: {
      role: "navigation"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "collapse navbar-collapse",
    attrs: {
      id: "navbarCollapse"
    }
  }, [_c("ul", {
    staticClass: "nav navbar-nav ml-auto"
  }, [_c("li", {
    staticClass: "nav-item dropdown messages-menu"
  }, [_vm._m(1), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-right"
  }, [_c("li", {
    staticClass: "header"
  }, [_vm._v("You have 4 messages")]), _vm._v(" "), _c("li", [_c("ul", {
    staticClass: "menu"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("div", {
    staticClass: "pull-left"
  }, [_c("img", {
    staticClass: "img-circle",
    attrs: {
      src: _vm.$root.userimage,
      alt: "User Image"
    }
  })]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("p", [_vm._v("Why not buy a new awesome theme?")])])])])]), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("li", {
    staticClass: "nav-item dropdown user user-menu"
  }, [_c("a", {
    staticClass: "nav-link dropdown-toggle",
    attrs: {
      href: "#",
      "data-toggle": "dropdown"
    }
  }, [_c("img", {
    staticClass: "user-image",
    attrs: {
      src: _vm.profileImage ? _vm.profileImage : _vm.$root.userimage,
      alt: "User Image"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden-xs"
  }, [_vm._v(_vm._s(_vm.logged_name))])]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-right"
  }, [_c("li", {
    staticClass: "user-header"
  }, [_c("img", {
    staticClass: "img-circle",
    attrs: {
      src: _vm.profileImage ? _vm.profileImage : _vm.$root.userimage,
      alt: "User Image"
    }
  }), _vm._v(" "), _c("p", [_vm._v("\n                                " + _vm._s(_vm.logged_name) + "\n                                "), _c("small", [_vm._v(_vm._s(_vm.role_name))])])]), _vm._v(" "), _c("li", {
    staticClass: "user-footer"
  }, [_c("div", {
    staticClass: "pull-left"
  }, [_c("router-link", {
    staticClass: "btn btn-sm btn-success border border-success",
    attrs: {
      to: {
        name: "user.show",
        params: {
          id: _vm.logged_id
        }
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-user"
  }), _vm._v(" Profile\n                                ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "pull-right"
  }, [_c("a", {
    staticClass: "btn btn-sm btn-danger border border-danger",
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: function click($event) {
        return _vm.Logout();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-sign-out"
  }), _vm._v(" Sign out\n                                ")])])])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "sidebar-toggle",
    attrs: {
      href: "#",
      "data-toggle": "push-menu",
      role: "button"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c("span", {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c("span", {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c("span", {
    staticClass: "icon-bar"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "nav-link dropdown-toggle",
    attrs: {
      href: "#",
      "data-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "fa fa-envelope-o"
  }), _vm._v(" "), _c("span", {
    staticClass: "label label-success"
  }, [_vm._v("4")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("h4", [_vm._v("\n                                            Support Team\n                                            "), _c("small", [_c("i", {
    staticClass: "fa fa-clock-o"
  }), _vm._v(" 5 mins ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("li", {
    staticClass: "footer"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("See All Messages")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("li", {
    staticClass: "nav-item dropdown notifications-menu"
  }, [_c("a", {
    staticClass: "nav-link dropdown-toggle",
    attrs: {
      href: "#",
      "data-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "fa fa-bell-o"
  }), _vm._v(" "), _c("span", {
    staticClass: "label label-warning"
  }, [_vm._v("10")])]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-right"
  }, [_c("li", {
    staticClass: "header"
  }, [_vm._v("You have 10 notifications")]), _vm._v(" "), _c("li", [_c("ul", {
    staticClass: "menu"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "fa fa-users text-aqua"
  }), _vm._v(" 5 new members joined\n                                        today\n                                    ")])])])]), _vm._v(" "), _c("li", {
    staticClass: "footer"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("View all")])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("li", {
    staticClass: "nav-item dropdown tasks-menu"
  }, [_c("a", {
    staticClass: "nav-link dropdown-toggle",
    attrs: {
      href: "#",
      "data-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "fa fa-flag-o"
  }), _vm._v(" "), _c("span", {
    staticClass: "label label-danger"
  }, [_vm._v("9")])]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-right"
  }, [_c("li", {
    staticClass: "header"
  }, [_vm._v("You have 9 tasks")]), _vm._v(" "), _c("li", [_c("ul", {
    staticClass: "menu"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("h3", [_vm._v("\n                                            Design some buttons\n                                            "), _c("small", {
    staticClass: "pull-right"
  }, [_vm._v("20%")])]), _vm._v(" "), _c("div", {
    staticClass: "progress xs"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-aqua",
    staticStyle: {
      width: "20%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "20",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("20% Complete")])])])])])])]), _vm._v(" "), _c("li", {
    staticClass: "footer"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v("View all tasks")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Leftside.vue?vue&type=template&id=7c1f9e38&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Leftside.vue?vue&type=template&id=7c1f9e38& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("aside", {
    staticClass: "main-sidebar"
  }, [_c("section", {
    staticClass: "sidebar"
  }, [_c("div", {
    staticClass: "user-panel"
  }, [_c("div", {
    staticClass: "pull-left image"
  }, [_c("img", {
    staticClass: "img-circle",
    attrs: {
      src: _vm.profileImage ? _vm.profileImage : _vm.$root.userimage,
      alt: "User Image"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "pull-left info"
  }, [_c("p", [_vm._v(_vm._s(_vm.logged_name))]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("ul", {
    staticClass: "sidebar-menu"
  }, [_c("li", {
    staticClass: "header"
  }, [_vm._v("MAIN NAVIGATION")]), _vm._v(" "), _vm._l(_vm.$root.menu_datas, function (root_menu, index) {
    return _vm._t("default", function () {
      return [root_menu.route_name ? _c("li", {
        key: index,
        staticClass: "treeview"
      }, [_vm.$root.checkPermission(root_menu.route_name) ? _c("router-link", {
        attrs: {
          to: {
            name: root_menu.route_name
          }
        }
      }, [root_menu.icon ? _c("em", {
        domProps: {
          innerHTML: _vm._s(root_menu.icon)
        }
      }) : _c("i", {
        staticClass: "fa fa-circle-o text-aqua"
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(root_menu.name))])]) : _vm._e()], 1) : Object.keys(root_menu.all_children_menus).length > 0 ? _vm._t("default", function () {
        return [_c("li", {
          key: index,
          staticClass: "treeview"
        }, [_c("a", {
          attrs: {
            href: "javascript:void(0)"
          }
        }, [root_menu.icon ? _c("em", {
          domProps: {
            innerHTML: _vm._s(root_menu.icon)
          }
        }) : _c("i", {
          staticClass: "fa fa-circle-o text-aqua"
        }), _vm._v(" "), _c("span", [_vm._v(_vm._s(root_menu.name))]), _vm._v(" "), _vm._m(1, true)]), _vm._v(" "), _c("RecursiveMenu", {
          attrs: {
            root_menu: root_menu.name,
            all_children_menus: root_menu.all_children_menus
          }
        })], 1)];
      }) : _vm._e()];
    });
  })], 2)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    attrs: {
      href: "javascript:void(0)"
    }
  }, [_c("i", {
    staticClass: "fa fa-circle text-success"
  }), _vm._v(" Online\n        ")]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("span", {
    staticClass: "pull-right-container"
  }, [_c("i", {
    staticClass: "fa fa-angle-left pull-right"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/RecursiveMenu.vue?vue&type=template&id=ce241fca&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/RecursiveMenu.vue?vue&type=template&id=ce241fca& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("ul", {
    staticClass: "treeview-menu"
  }, _vm._l(_vm.all_children_menus, function (child_menu, index) {
    return _c("li", {
      key: index,
      staticClass: "treeview"
    }, [Object.keys(child_menu.all_children_menus).length > 0 ? _c("a", {
      attrs: {
        href: "javascript:void(0)"
      }
    }, [child_menu.icon ? _c("em", {
      domProps: {
        innerHTML: _vm._s(child_menu.icon)
      }
    }) : _c("i", {
      staticClass: "fa fa-circle-o text-aqua"
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(child_menu.name))]), _vm._v(" "), Object.keys(child_menu.all_children_menus).length > 0 ? _c("span", {
      staticClass: "pull-right-container"
    }, [_c("i", {
      staticClass: "fa fa-angle-left pull-right"
    })]) : _vm._e()]) : _vm._t("default", function () {
      return [_vm.$root.checkPermission(child_menu.route_name) ? _c("router-link", {
        attrs: {
          to: {
            name: child_menu.route_name,
            params: {
              slug: child_menu.params
            }
          }
        }
      }, [child_menu.icon ? _c("em", {
        domProps: {
          innerHTML: _vm._s(child_menu.icon)
        }
      }) : _c("i", {
        staticClass: "fa fa-circle-o text-aqua"
      }), _vm._v(" "), _c("span", [_vm._v(_vm._s(child_menu.name))]), _vm._v(" "), Object.keys(child_menu.all_children_menus).length > 0 ? _c("span", {
        staticClass: "pull-right-container"
      }, [_c("i", {
        staticClass: "fa fa-angle-left pull-right"
      })]) : _vm._e()]) : _vm._e()];
    }), _vm._v(" "), Object.keys(child_menu.all_children_menus).length > 0 ? _vm._t("default", function () {
      return [_c("RecursiveMenu", {
        key: index + "A",
        attrs: {
          root_menu: child_menu.name,
          all_children_menus: child_menu.all_children_menus
        }
      })];
    }) : _vm._e()], 2);
  }), 0);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Layout.vue?vue&type=template&id=2322c138&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/backend/Layout.vue?vue&type=template&id=2322c138& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "wrapper"
  }, [_c("Header"), _vm._v(" "), _c("LeftSide"), _vm._v(" "), _c("div", {
    staticClass: "content-wrapper"
  }, [_c("Breadcrumbs"), _vm._v(" "), _c("section", {
    staticClass: "content"
  }, [_c("router-view"), _vm._v(" "), _vm.$root.spinner ? _c("div", {
    staticClass: "box box-success p-5"
  }, [_c("div", {
    staticClass: "row d-flex align-items-center justify-content-center",
    staticStyle: {
      height: "350px"
    }
  }, [_c("spinner")], 1)]) : _vm._e()], 1)], 1), _vm._v(" "), _c("Footer")], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar {\n    height: 50px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=30100593&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/backend/Breadcrumbs.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/backend/Breadcrumbs.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumbs_vue_vue_type_template_id_4c4e413a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=template&id=4c4e413a& */ "./resources/js/components/backend/Breadcrumbs.vue?vue&type=template&id=4c4e413a&");
/* harmony import */ var _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Breadcrumbs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumbs_vue_vue_type_template_id_4c4e413a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breadcrumbs_vue_vue_type_template_id_4c4e413a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Breadcrumbs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Breadcrumbs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/backend/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumbs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Breadcrumbs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Breadcrumbs.vue?vue&type=template&id=4c4e413a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/backend/Breadcrumbs.vue?vue&type=template&id=4c4e413a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_4c4e413a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumbs.vue?vue&type=template&id=4c4e413a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Breadcrumbs.vue?vue&type=template&id=4c4e413a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_4c4e413a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_4c4e413a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/Footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/backend/Footer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_0edda1a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=0edda1a1& */ "./resources/js/components/backend/Footer.vue?vue&type=template&id=0edda1a1&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_0edda1a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_0edda1a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/backend/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Footer.vue?vue&type=template&id=0edda1a1&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/backend/Footer.vue?vue&type=template&id=0edda1a1& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0edda1a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=0edda1a1& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Footer.vue?vue&type=template&id=0edda1a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0edda1a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0edda1a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/Header.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/backend/Header.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_30100593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=30100593& */ "./resources/js/components/backend/Header.vue?vue&type=template&id=30100593&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_30100593_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=30100593&lang=css& */ "./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_30100593___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_30100593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/backend/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_30100593_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=30100593&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=style&index=0&id=30100593&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_30100593_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_30100593_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_30100593_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_30100593_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/backend/Header.vue?vue&type=template&id=30100593&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/backend/Header.vue?vue&type=template&id=30100593& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_30100593___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=30100593& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Header.vue?vue&type=template&id=30100593&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_30100593___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_30100593___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/Leftside.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/backend/Leftside.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Leftside_vue_vue_type_template_id_7c1f9e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leftside.vue?vue&type=template&id=7c1f9e38& */ "./resources/js/components/backend/Leftside.vue?vue&type=template&id=7c1f9e38&");
/* harmony import */ var _Leftside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leftside.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/Leftside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Leftside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Leftside_vue_vue_type_template_id_7c1f9e38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Leftside_vue_vue_type_template_id_7c1f9e38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/Leftside.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/Leftside.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/backend/Leftside.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Leftside.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Leftside.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftside_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/Leftside.vue?vue&type=template&id=7c1f9e38&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/backend/Leftside.vue?vue&type=template&id=7c1f9e38& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftside_vue_vue_type_template_id_7c1f9e38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Leftside.vue?vue&type=template&id=7c1f9e38& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/Leftside.vue?vue&type=template&id=7c1f9e38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftside_vue_vue_type_template_id_7c1f9e38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Leftside_vue_vue_type_template_id_7c1f9e38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/backend/RecursiveMenu.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/backend/RecursiveMenu.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecursiveMenu_vue_vue_type_template_id_ce241fca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecursiveMenu.vue?vue&type=template&id=ce241fca& */ "./resources/js/components/backend/RecursiveMenu.vue?vue&type=template&id=ce241fca&");
/* harmony import */ var _RecursiveMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecursiveMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/RecursiveMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecursiveMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecursiveMenu_vue_vue_type_template_id_ce241fca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecursiveMenu_vue_vue_type_template_id_ce241fca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/RecursiveMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/RecursiveMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/backend/RecursiveMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecursiveMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecursiveMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/RecursiveMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecursiveMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/backend/RecursiveMenu.vue?vue&type=template&id=ce241fca&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/backend/RecursiveMenu.vue?vue&type=template&id=ce241fca& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RecursiveMenu_vue_vue_type_template_id_ce241fca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecursiveMenu.vue?vue&type=template&id=ce241fca& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/backend/RecursiveMenu.vue?vue&type=template&id=ce241fca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RecursiveMenu_vue_vue_type_template_id_ce241fca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RecursiveMenu_vue_vue_type_template_id_ce241fca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/backend/Layout.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/backend/Layout.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_2322c138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=2322c138& */ "./resources/js/views/backend/Layout.vue?vue&type=template&id=2322c138&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_2322c138___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_2322c138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/Layout.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/backend/Layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/Layout.vue?vue&type=template&id=2322c138&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/backend/Layout.vue?vue&type=template&id=2322c138& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_2322c138___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=2322c138& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/backend/Layout.vue?vue&type=template&id=2322c138&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_2322c138___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_2322c138___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=7.js.map