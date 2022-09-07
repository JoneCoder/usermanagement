(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/PostPreview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/PostPreview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Blog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Blog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_frontend_PostPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/frontend/PostPreview */ "./resources/js/components/frontend/PostPreview.vue");
/* harmony import */ var storyblok_js_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storyblok-js-client */ "./node_modules/storyblok-js-client/dist/index.js");
/* harmony import */ var storyblok_js_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storyblok_js_client__WEBPACK_IMPORTED_MODULE_1__);


var token = "iyPj3vEKmPladyz3zeqKuwtt";
var storyapi = new storyblok_js_client__WEBPACK_IMPORTED_MODULE_1___default.a({
  accessToken: token
});
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Blog",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      ontent: "Eldin Zaimovic's Blog"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Eldin Zaimovic's Blog"
    }]
  },
  data: function data() {
    return {
      posts: []
    };
  },
  created: function created() {
    var _this = this;

    window.storyblok.init({
      accessToken: token
    });
    window.storyblok.on("change", function () {
      _this.getStory("home", "draft");
    });
    window.storyblok.pingEditor(function () {
      if (window.storyblok.isInEditor()) {
        _this.getStory("home", "draft");
      } else {
        _this.getStory("home", "published");
      }
    });
  },
  methods: {
    getStory: function getStory(version) {
      var _this2 = this;

      storyapi.get("cdn/stories", {
        version: "draft",
        starts_with: "blog/"
      }).then(function (res) {
        _this2.posts = res.data.stories.map(function (bp) {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.summary,
            thumbnailUrl: bp.content.thumbnail
          };
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  components: {
    PostPreview: _components_frontend_PostPreview__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/BlogPost.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/BlogPost.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.umd.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var storyblok_js_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storyblok-js-client */ "./node_modules/storyblok-js-client/dist/index.js");
/* harmony import */ var storyblok_js_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storyblok_js_client__WEBPACK_IMPORTED_MODULE_1__);


var token = "iyPj3vEKmPladyz3zeqKuwtt";
var storyapi = new storyblok_js_client__WEBPACK_IMPORTED_MODULE_1___default.a({
  accessToken: token
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: [],
      result: {}
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.result.title,
      titleTemplate: "%s ← Eldin's Blog",
      meta: [{
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        name: "description",
        content: this.result.content
      }, {
        charset: "utf-8"
      }, {
        property: "og:title",
        content: "Eldin' Space"
      }, {
        property: "og:site_name",
        content: "Eldin' Space"
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: "https://eldin.space"
      }, {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      }, {
        property: "og:description",
        content: this.result.content
      }]
    };
  },
  computed: {
    body: function body() {
      return marked__WEBPACK_IMPORTED_MODULE_0___default()(this.result.content);
    }
  },
  created: function created() {
    var _this = this;

    window.storyblok.init({
      accessToken: token
    });
    window.storyblok.on("change", function () {
      _this.getStory("home", "draft");
    });
    window.storyblok.pingEditor(function () {
      if (window.storyblok.isInEditor()) {
        _this.getStory("home", "draft");
      } else {
        _this.getStory("home", "published");
      }
    });
  },
  methods: {
    getStory: function getStory(version) {
      var _this2 = this;

      storyapi.get("cdn/stories", {
        version: "draft",
        starts_with: "blog/"
      }).then(function (res) {
        _this2.posts = res.data.stories.map(function (bp) {
          return {
            id: bp.slug,
            title: bp.content.title,
            blok: bp.content,
            image: bp.content.thumbnail,
            content: bp.content.content,
            date: new Date(bp.content.date)
          };
        });
        _this2.result = _this2.posts.find(function (rightPost) {
          return rightPost.id === _this2.$route.params.id;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Contact.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Contact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Contact",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      content: "Eldin Zaimovic's Contact Doboj Bosnia and Herzegovina Freelance Get in Touch ContactMe"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Eldin Zaimovic's Contact Doboj Bosnia and Herzegovina Freelance Get in Touch ContactMe"
    }]
  },
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_0__["validationMixin"]],
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(20)
    },
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
    },
    body: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(20)
    }
  },
  data: function data() {
    return {
      name: "",
      email: "",
      body: ""
    };
  },
  methods: {
    submit: function submit() {
      this.$v.$touch();
    },
    clear: function clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    }
  },
  computed: {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    bodyErrors: function bodyErrors() {
      var errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength && errors.push("Text must be at least 20 characters long");
      !this.$v.body.required && errors.push("Text is required");
      return errors;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Error.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Graphic Portfolio ",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      content: "Eldin Zaimovic's Graphic Adobe PhotoShop Logo Design Instagram Poster"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Eldin Zaimovic's Graphic Adobe PhotoShop Logo Design Instagram Poster"
    }]
  },
  data: function data() {
    return {
      dialog: false,
      images: [{
        dialog: false,
        title: "VilaShirts Logo",
        poster: "https://i.imgur.com/QEnmqcE.png"
      }, {
        dialog: false,
        title: "BlackBird Property Group Logo",
        poster: "https://i.imgur.com/b37FfUU.jpg"
      }, {
        dialog: false,
        title: "TeeLock Consulting Logo",
        poster: "https://i.imgur.com/XSo4bmw.jpg"
      }, {
        dialog: false,
        title: "SEA||WA||MMXI",
        poster: "https://i.imgur.com/thxUnTH.jpg"
      }, {
        dialog: false,
        title: "Alpine365 Logo",
        poster: "https://i.imgur.com/LOzW21e.jpg"
      }, {
        dialog: false,
        title: "Josefine Product Pack",
        poster: "https://i.imgur.com/TrthgRN.jpg"
      }, {
        dialog: false,
        title: "Next Party Flayer",
        poster: "https://i.imgur.com/tYjfL2d.jpg"
      }, {
        dialog: false,
        title: "VilaShirts T-Shirts",
        poster: "https://i.imgur.com/ULuRuFB.jpg"
      }, {
        dialog: false,
        title: "BAB Coin",
        poster: "https://i.imgur.com/YU52AVB.jpg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      content: "Eldin Zaimovic's Portfolio Web Development Video Editing Graphic Design Front-End Advetising"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Eldin Zaimovic's Portfolio Web Development Video Editing Graphic Design Front-End Advetising"
    }]
  },
  data: function data() {
    return {
      portfolios: [{
        src: "https://i.imgur.com/GvTt5GG.png",
        title: "Web"
      }, {
        src: "https://i.imgur.com/wXLtLKy.png",
        title: "Video"
      }, {
        src: "https://i.imgur.com/g74mGuU.png",
        title: "Graphic"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plyr */ "./node_modules/vue-plyr/dist/vue-plyr.es.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Video Portfolio",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      content: "Eldin Zaimovic's Services Adobe Premire After Effects Video Ad's Social Media Logo Animation Instagram Facebook Video Editing Advetising"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Eldin Zaimovic's Services Adobe Premire After Effects Video Ad's Social Media Logo Animation Instagram Facebook Video Editing Advetising"
    }]
  },
  components: {
    plyr: vue_plyr__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      videos: [{
        dialog: false,
        title: "Vila Design Promo video",
        href: "https://www.youtube.com/embed/XP8j7NA_wzc",
        type: "text/html",
        youtube: "XP8j7NA_wzc",
        poster: "https://img.youtube.com/vi/XP8j7NA_wzc/maxresdefault.jpg"
      }, {
        dialog: false,
        title: "Pushartist Promo video",
        href: "https://www.youtube.com/embed/PZnn1fDUb6U",
        type: "text/html",
        youtube: "PZnn1fDUb6U",
        poster: "https://img.youtube.com/vi/PZnn1fDUb6U/maxresdefault.jpg"
      }, {
        dialog: false,
        title: "Unbroken Designs Instagram Promo video",
        href: "https://www.youtube.com/embed/KfxHI3vwALk",
        type: "text/html",
        youtube: "KfxHI3vwALk",
        poster: "https://img.youtube.com/vi/KfxHI3vwALk/maxresdefault.jpg"
      }, {
        dialog: false,
        title: "EEVOY APP Promo",
        href: "https://www.youtube.com/embed/JEhpsP75STk",
        type: "text/html",
        youtube: "JEhpsP75STk",
        poster: "https://i.imgur.com/7CLqR2o.png"
      }, {
        dialog: false,
        title: "Patty Boland's Party video",
        href: "https://www.youtube.com/embed/5zB4FIkhFHk",
        type: "text/html",
        youtube: "5zB4FIkhFHk",
        poster: "https://img.youtube.com/vi/5zB4FIkhFHk/maxresdefault.jpg"
      }, {
        dialog: false,
        title: "Montenegro Summer 2017",
        href: "https://www.youtube.com/embed/kZahccWTpGc",
        type: "text/html",
        youtube: "kZahccWTpGc",
        poster: "https://i.imgur.com/4yTFAlM.jpg"
      }, {
        dialog: false,
        title: "VilaShirts Promo video",
        href: "https://www.youtube.com/embed/SZVMKtEORRw",
        type: "text/html",
        youtube: "SZVMKtEORRw",
        poster: "https://i.imgur.com/POCbX1B.jpg"
      }, {
        dialog: false,
        title: "Albania Durres Summer 2018",
        href: "https://www.youtube.com/embed/jd9pDFaRDKI",
        type: "text/html",
        youtube: "jd9pDFaRDKI",
        poster: "https://img.youtube.com/vi/jd9pDFaRDKI/maxresdefault.jpg"
      }, {
        dialog: false,
        title: "Matricar Instagram Promo video",
        href: "https://www.youtube.com/embed/S-2hNuuwmpY",
        type: "text/html",
        youtube: "S-2hNuuwmpY",
        poster: "https://img.youtube.com/vi/S-2hNuuwmpY/maxresdefault.jpg"
      }, {
        dialog: false,
        title: "Vila Design Glitch Logo Animation",
        href: "https://www.youtube.com/embed/SrX8T2G6bew",
        type: "text/html",
        youtube: "SrX8T2G6bew",
        poster: "https://img.youtube.com/vi/SrX8T2G6bew/maxresdefault.jpg"
      }, {
        dialog: false,
        title: "Splash logo animation",
        href: "https://www.youtube.com/embed/vBAZpwtq08I",
        type: "text/html",
        youtube: "vBAZpwtq08I",
        poster: "https://i.imgur.com/3jK0rTs.png"
      }, {
        dialog: false,
        title: "Julie Lindh CBD Infusion Facial",
        href: "https://www.youtube.com/embed/9qFQMV9IJ9I",
        type: "text/html",
        youtube: "9qFQMV9IJ9I",
        poster: "https://img.youtube.com/vi/9qFQMV9IJ9I/maxresdefault.jpg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Web.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Web.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Web Portfolio",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      content: "Eldin Zaimovic's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Eldin Zaimovic's Web Portfolio Vue Vue.js Nuxt Nuxt.js HTML CSS Vuetify Axios GraphQL JavaScript Web Developer Front-End Frontend Designer App Responsive"
    }]
  },
  data: function data() {
    return {
      dialog: false,
      projects: [{
        dialog: false,
        title: "Euphoric Voyage",
        git: "https://github.com/EldinZaimovic/euphoric-voyage",
        demo: "https://www.euphoric-voyage.com/",
        tech: {
          tech1: "Gatsby",
          tech2: "JavaScript",
          tech3: "SCSS",
          tech4: "Markdown"
        },
        poster: "https://i.imgur.com/9Ww2bvm.png"
      }, {
        dialog: false,
        title: "This Site",
        git: "https://github.com/EldinZaimovic/Eldin-Space-Vue",
        demo: "https://eldin.space/",
        tech: {
          tech1: "VUE",
          tech2: "Storyblok",
          tech3: "HTML",
          tech4: "JavaScript"
        },
        poster: "https://i.imgur.com/sGUofpv.png"
      }, {
        dialog: false,
        title: "Frontend Developer at Brandly.com",
        git: "https://cdn.neow.in/news/images/uploaded/2018/11/1543476286_cybersecurity.jpg",
        demo: "https://www.brandly.com/",
        tech: {
          tech1: "VUE",
          tech2: "SCSS",
          tech3: "HTML",
          tech4: "JavaScript"
        },
        poster: "https://i.imgur.com/nVqtTAf.png"
      }, {
        dialog: false,
        title: "Digital Madness Test",
        git: "https://github.com/EldinZaimovic/Digital-Madness-test",
        demo: "https://digital-madness-test.netlify.com/",
        tech: {
          tech1: "VUE",
          tech2: "CSS",
          tech3: "HTML",
          tech4: "JavaScript"
        },
        poster: "https://i.imgur.com/GOIIL06.png"
      }, {
        dialog: false,
        title: "Snowball Coding Challenge",
        git: "https://github.com/EldinZaimovic/SnowBall-Project",
        demo: "https://snowball-test.netlify.com/",
        tech: {
          tech1: "VUE",
          tech2: "GraphQL",
          tech3: "Axios",
          tech4: "JavaScript"
        },
        poster: "https://i.imgur.com/rXHBs36.png"
      }, {
        dialog: false,
        title: "IBM Coding Challenge - Films Location",
        git: "https://github.com/EldinZaimovic/Film-Location-List",
        demo: "https://film-location-ibm-cc.netlify.com/",
        tech: {
          tech1: "VUE",
          tech2: "Lodash",
          tech3: "HTML",
          tech4: "JavaScript"
        },
        poster: "https://i.imgur.com/kCN1CFH.png"
      }, {
        dialog: false,
        title: "Stock Trader",
        git: "https://github.com/EldinZaimovic/Stock-Trader",
        demo: "https://stock-trader-eldin.netlify.com/",
        tech: {
          tech1: "VUE",
          tech2: "Vuex",
          tech3: "Firebase",
          tech4: "JavaScript"
        },
        poster: "https://i.imgur.com/wK5dqP7.png"
      }, {
        dialog: false,
        title: "Riders Share Newsleter",
        git: "",
        demo: "https://imgur.com/zTMJhGk",
        tech: {
          tech1: "HTML",
          tech2: "CSS",
          tech3: "MailChimp",
          tech4: "JavaScript"
        },
        poster: "https://i.imgur.com/zTMJhGk.jpg"
      }, {
        dialog: false,
        title: "My Old Web Portfolio",
        git: "https://github.com/EldinZaimovic/EldinZaimovic.github.io",
        demo: "https://eldinzaimovic.github.io/index.html",
        tech: {
          tech1: "HTML",
          tech2: "CSS",
          tech3: "JavaScript",
          tech4: "jQuery"
        },
        poster: "https://i.imgur.com/AW7CXD5.jpg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Resume.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Resume.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      content: "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
    }]
  },
  data: function data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted: function mounted() {
    this.startBuffer();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startBuffer: function startBuffer() {
      var _this = this;

      this.interval = setInterval(function () {
        _this.buffer1 = 90;
        _this.buffer2 = 85;
        _this.buffer3 = 80;
        _this.buffer4 = 80;
        _this.buffer5 = 90;
        _this.buffer6 = 70;
      }, 800);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Services.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Services",
    titleTemplate: "%s ← Eldin's Space",
    meta: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "description",
      content: "Eldin Zaimovic's Services Web Development Video Editing Graphic Design Front-End Advetising"
    }, {
      charset: "utf-8"
    }, {
      property: "og:title",
      content: "Eldin' Space"
    }, {
      property: "og:site_name",
      content: "Eldin' Space"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "https://eldin.space"
    }, {
      property: "og:image",
      content: "https://i.imgur.com/Dcz2PGx.jpg"
    }, {
      property: "og:description",
      content: "Eldin Zaimovic's Services Web Development Video Editing Graphic Design Front-End Advetising"
    }]
  },
  data: function data() {
    return {
      clients: [{
        name: "Brandly",
        src: "https://i.imgur.com/BLJ16wb.png",
        href: "https://www.brandly.com/"
      }, {
        name: "EEVOY",
        src: "https://i.imgur.com/lIJePVb.png",
        href: "https://www.eevoy.com/"
      }, {
        name: "Riders Share",
        src: "https://i.imgur.com/pgkY80b.png",
        href: "https://www.riders-share.com/"
      }, {
        name: "Esthetician Connection",
        src: "https://estheticianconnection.com/wp-content/uploads/2019/01/EC-logo.png",
        href: "https://estheticianconnection.com/"
      }, {
        name: "Goldentimepieces",
        src: "https://i.imgur.com/sEybxZ5.png",
        href: "https://goldentimepieces.com/"
      }, {
        name: "MFS-EMMAUS",
        src: "https://i.imgur.com/33xPmQ8.png",
        href: "https://mfs-emmaus.ba/"
      }, {
        name: "Scanlister",
        src: "https://i.imgur.com/5K7h7c4.png",
        href: "https://www.scanlister.com/"
      }, {
        name: "Unbroken Designs",
        src: "https://i.imgur.com/kDLRh64.png",
        href: "https://www.unbrokendesigns.com/"
      }, {
        name: "VilaShirts",
        src: "https://i.imgur.com/Fg26T32.png",
        href: "https://www.instagram.com/_vilashirts_/"
      }],
      services: [{
        src: "https://i.imgur.com/GvTt5GG.png",
        title: "Web Development"
      }, {
        src: "https://i.imgur.com/g74mGuU.png",
        title: "Web Design"
      }, {
        src: "https://i.imgur.com/wXLtLKy.png",
        title: "Video Editing"
      }, {
        src: "https://i.imgur.com/tcZnDep.png",
        title: "Advertising"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/PostPreview.vue?vue&type=template&id=613015b6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/PostPreview.vue?vue&type=template&id=613015b6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-flex", {
    attrs: {
      xs12: "",
      sm6: "",
      md4: "",
      lg4: "",
      xl4: ""
    }
  }, [_c("v-card", {
    attrs: {
      to: "/blog/" + _vm.id,
      hover: ""
    }
  }, [_c("v-img", {
    attrs: {
      src: _vm.thumbnailImage,
      "aspect-ratio": "2.75",
      height: "230",
      alt: _vm.title
    }
  }), _vm._v(" "), _c("v-card-title", {
    attrs: {
      "primary-title": ""
    }
  }, [_c("div", [_c("h3", {
    staticClass: "headline mb-0"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "green--text font-weight-medium"
  }, [_vm._v(_vm._s(_vm.excerpt))])])])])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Blog.vue?vue&type=template&id=a5f910a0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Blog.vue?vue&type=template&id=a5f910a0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      "justify-center": "",
      "align-center": ""
    }
  }, [_c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      wrap: ""
    }
  }, _vm._l(_vm.posts, function (post) {
    return _c("PostPreview", {
      key: post.id,
      attrs: {
        title: post.title,
        excerpt: post.previewText,
        thumbnailImage: post.thumbnailUrl,
        id: post.id
      }
    });
  }), 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/BlogPost.vue?vue&type=template&id=613cd870&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/BlogPost.vue?vue&type=template&id=613cd870&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-layout", {
    directives: [{
      name: "editable",
      rawName: "v-editable",
      value: _vm.result.blok,
      expression: "result.blok"
    }],
    staticClass: "mt-4 pt-2",
    attrs: {
      column: "",
      "justify-center": ""
    }
  }, [_c("h1", {
    staticClass: "text-xs-center mb-4 pb-2"
  }, [_vm._v(_vm._s(_vm.result.title))]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.result.date.getDate()) + "." + _vm._s(_vm.result.date.getMonth() + 1) + "." + _vm._s(_vm.result.date.getFullYear()))]), _vm._v(" "), _c("v-img", {
    attrs: {
      src: _vm.result.image,
      "aspect-ratio": "2.75",
      height: "330",
      contain: "",
      alt: _vm.result.title
    }
  }), _vm._v(" "), _c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      column: "",
      "justify-center": "",
      "align-center": ""
    }
  }, [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.body)
    }
  })]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("v-btn", {
    staticClass: "green--text",
    attrs: {
      large: "",
      flat: "",
      to: "/blog"
    }
  }, [_c("v-icon", [_vm._v("arrow_back")]), _vm._v("Back to Blog\n  ")], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Contact.vue?vue&type=template&id=53bd7482&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Contact.vue?vue&type=template&id=53bd7482&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      sm12: "",
      md6: "",
      lg6: "",
      xl6: ""
    }
  }, [_c("h2", {
    staticClass: "pb-4 mt-2"
  }, [_c("span", [_vm._v("GetIn")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Touch")])]), _vm._v(" "), _c("div", {
    staticClass: "py-4 subheading font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      large: "",
      color: "green",
      left: ""
    }
  }, [_vm._v("fas fa-map-marker-alt")]), _vm._v(" "), _c("span", [_vm._v("Doboj, ")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Bosnia & Herzegovina")])], 1), _vm._v(" "), _c("div", {
    staticClass: "py-4 subheading font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      large: "",
      color: "green",
      left: ""
    }
  }, [_vm._v("fas fa-envelope")]), _vm._v(" "), _c("span", [_vm._v("eldin@")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("zaimovic.com")])], 1), _vm._v(" "), _c("div", {
    staticClass: "py-4 subheading font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      large: "",
      color: "green",
      left: ""
    }
  }, [_vm._v("fas fa-phone")]), _vm._v(" "), _c("span", [_vm._v("+387 ")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("61 596 676")])], 1), _vm._v(" "), _c("div", {
    staticClass: "py-4 subheading font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      large: "",
      color: "green",
      left: ""
    }
  }, [_vm._v("fas fa-check")]), _vm._v(" "), _c("span", [_vm._v("Freelance")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Available")])], 1)]), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: "",
      sm12: "",
      md6: "",
      lg6: "",
      xl6: ""
    }
  }, [_c("h2", {
    staticClass: "pb-4 mb-4"
  }, [_c("span", [_vm._v("Contact")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Form")])]), _vm._v(" "), _c("form", {
    attrs: {
      method: "POST",
      action: "https://formspree.io/eldin@zaimovic.com"
    }
  }, [_c("v-text-field", {
    attrs: {
      name: "name",
      color: "green",
      "background-color": "transparent",
      "error-messages": _vm.nameErrors,
      label: "Name",
      required: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.name.$touch();
      }
    },
    model: {
      value: _vm.name,
      callback: function callback($$v) {
        _vm.name = $$v;
      },
      expression: "name"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      type: "email",
      color: "green",
      "background-color": "transparent",
      name: "email",
      "error-messages": _vm.emailErrors,
      label: "E-mail",
      required: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.email.$touch();
      }
    },
    model: {
      value: _vm.email,
      callback: function callback($$v) {
        _vm.email = $$v;
      },
      expression: "email"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      color: "green",
      "background-color": "transparent",
      counter: 200,
      "error-messages": _vm.bodyErrors,
      label: "Textarea",
      name: "body"
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.body.$touch();
      }
    },
    model: {
      value: _vm.body,
      callback: function callback($$v) {
        _vm.body = $$v;
      },
      expression: "body"
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "white--text",
    attrs: {
      type: "submit",
      color: "green",
      disabled: _vm.body.length <= 20
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("SEND MESSAGE")]), _vm._v(" "), _c("v-btn", {
    on: {
      click: _vm.clear
    }
  }, [_vm._v("clear")])], 1)])], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=template&id=61124e2c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Error.vue?vue&type=template&id=61124e2c&scoped=true& ***!
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

  return _c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, [_c("div", {
    staticClass: "circles"
  }, [_c("p", [_vm._v("\n      404\n      "), _c("br"), _vm._v(" "), _c("small", [_vm._v("PAGE NOT FOUND")])]), _vm._v(" "), _c("span", {
    staticClass: "circle big"
  }), _vm._v(" "), _c("span", {
    staticClass: "circle med"
  }), _vm._v(" "), _c("span", {
    staticClass: "circle small"
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("v-btn", {
    staticClass: "green--text",
    attrs: {
      large: "",
      to: "/"
    }
  }, [_c("v-icon", [_vm._v("arrow_back")]), _vm._v("GO HOME\n    ")], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=template&id=d632ef3a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=template&id=d632ef3a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("h2", {
    staticClass: "pl-4"
  }, [_c("span", [_vm._v("Graphic")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Portfolio")])]), _vm._v(" "), _c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, _vm._l(_vm.images, function (image) {
    return _c("v-dialog", {
      key: image.title,
      attrs: {
        lazy: "",
        "max-width": "800"
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on;
          return [_c("v-flex", _vm._g({
            attrs: {
              xs12: "",
              sm6: "",
              md4: "",
              lg4: "",
              xl4: ""
            }
          }, on), [_c("v-card", {
            attrs: {
              hover: "",
              flat: "",
              color: "transparent"
            }
          }, [_c("v-img", {
            attrs: {
              src: image.poster,
              height: "230",
              alt: image.title,
              "lazy-src": "https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            }
          }), _vm._v(" "), _c("v-card-title", {
            staticClass: "justify-center",
            attrs: {
              "primary-title": ""
            }
          }, [_vm._v(_vm._s(image.title))])], 1)], 1)];
        }
      }], null, true),
      model: {
        value: image.dialog,
        callback: function callback($$v) {
          _vm.$set(image, "dialog", $$v);
        },
        expression: "image.dialog"
      }
    }, [_vm._v(" "), image.dialog ? _c("v-card", [_c("v-img", {
      attrs: {
        src: image.poster
      }
    })], 1) : _vm._e()], 1);
  }), 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=template&id=7c437e03&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=template&id=7c437e03&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, _vm._l(_vm.portfolios, function (portfolio) {
    return _c("v-flex", {
      key: portfolio.src,
      attrs: {
        xs12: "",
        sm12: "",
        md4: "",
        lg4: "",
        xl4: ""
      }
    }, [_c("v-card", {
      attrs: {
        to: "/portfolio/" + portfolio.title.toLowerCase(),
        hover: "",
        flat: "",
        color: "transparent",
        height: "230"
      }
    }, [_c("v-card-title"), _vm._v(" "), _c("v-img", {
      attrs: {
        src: portfolio.src,
        "aspect-ratio": "2.75",
        height: "130",
        contain: ""
      }
    }), _vm._v(" "), _c("v-card-title", {
      staticClass: "justify-center",
      attrs: {
        "primary-title": ""
      }
    }, [_c("v-flex", {
      attrs: {
        "text-xs-center": "",
        subheading: "",
        "font-weight-bold": ""
      }
    }, [_vm._v(_vm._s(portfolio.title))])], 1)], 1)], 1);
  }), 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=template&id=5b1e4536&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=template&id=5b1e4536&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("h2", {
    staticClass: "pl-4"
  }, [_c("span", [_vm._v("Video")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Portfolio")])]), _vm._v(" "), _c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, _vm._l(_vm.videos, function (video) {
    return _c("v-dialog", {
      key: video.title,
      attrs: {
        lazy: "",
        "max-width": "800"
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on;
          return [_c("v-flex", _vm._g({
            attrs: {
              xs12: "",
              sm6: "",
              md4: "",
              lg4: "",
              xl4: ""
            }
          }, on), [_c("v-card", {
            attrs: {
              hover: "",
              flat: "",
              color: "transparent"
            }
          }, [_c("v-img", {
            attrs: {
              src: video.poster,
              "aspect-ratio": "1.7778",
              alt: video.title,
              "lazy-src": "https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif",
              contain: ""
            }
          }), _vm._v(" "), _c("v-card-title", {
            staticClass: "justify-center",
            attrs: {
              "primary-title": ""
            }
          }, [_vm._v(_vm._s(video.title))])], 1)], 1)];
        }
      }], null, true),
      model: {
        value: video.dialog,
        callback: function callback($$v) {
          _vm.$set(video, "dialog", $$v);
        },
        expression: "video.dialog"
      }
    }, [_vm._v(" "), video.dialog ? _c("v-card", [_c("plyr", [_c("div", {
      staticClass: "plyr__video-embed"
    }, [_c("iframe", {
      attrs: {
        src: video.href,
        allowfullscreen: "",
        allowtransparency: "",
        allow: "autoplay"
      }
    })])])], 1) : _vm._e()], 1);
  }), 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Web.vue?vue&type=template&id=f7751762&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Web.vue?vue&type=template&id=f7751762&scoped=true& ***!
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

  return _c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("h2", {
    staticClass: "pl-4"
  }, [_c("span", [_vm._v("Web")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Portfolio")])]), _vm._v(" "), _c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, _vm._l(_vm.projects, function (project) {
    return _c("v-dialog", {
      key: project.title,
      attrs: {
        lazy: "",
        "max-width": "1000"
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on;
          return [_c("v-flex", _vm._g({
            attrs: {
              xs12: "",
              sm6: "",
              md4: "",
              lg4: "",
              xl4: ""
            }
          }, on), [_c("v-card", {
            attrs: {
              hover: "",
              flat: "",
              color: "transparent"
            }
          }, [_c("v-img", {
            attrs: {
              src: project.poster,
              alt: project.title,
              height: "230",
              "lazy-src": "https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
            }
          }), _vm._v(" "), _c("v-card-title", {
            staticClass: "justify-center",
            attrs: {
              "primary-title": ""
            }
          }, [_vm._v(_vm._s(project.title))])], 1)], 1)];
        }
      }], null, true),
      model: {
        value: project.dialog,
        callback: function callback($$v) {
          _vm.$set(project, "dialog", $$v);
        },
        expression: "project.dialog"
      }
    }, [_vm._v(" "), project.dialog ? _c("v-card", [_c("v-img", {
      attrs: {
        src: project.poster
      }
    }), _vm._v(" "), _c("v-card-text", [_c("h3", {
      staticClass: "headline mb-0"
    }, [_c("span", [_vm._v("Technology")])]), _vm._v(" "), _c("v-chip", {
      attrs: {
        color: "green",
        "text-color": "white"
      }
    }, [_vm._v(_vm._s(project.tech.tech1))]), _vm._v(" "), _c("v-chip", {
      attrs: {
        color: "green",
        "text-color": "white"
      }
    }, [_vm._v(_vm._s(project.tech.tech2))]), _vm._v(" "), _c("v-chip", {
      attrs: {
        color: "green",
        "text-color": "white"
      }
    }, [_vm._v(_vm._s(project.tech.tech3))]), _vm._v(" "), _c("v-chip", {
      attrs: {
        color: "green",
        "text-color": "white"
      }
    }, [_vm._v(_vm._s(project.tech.tech4))])], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
      attrs: {
        flat: "",
        large: "",
        dark: "",
        color: "green",
        href: project.git,
        target: "_blank"
      }
    }, [_c("v-icon", {
      attrs: {
        left: ""
      }
    }, [_vm._v("fab fa-github")]), _vm._v("GitHub\n          ")], 1), _vm._v(" "), _c("v-btn", {
      attrs: {
        large: "",
        flat: "",
        dark: "",
        color: "green",
        href: project.demo,
        target: "_blank"
      }
    }, [_c("v-icon", {
      attrs: {
        left: ""
      }
    }, [_vm._v("fas fa-desktop")]), _vm._v("Demo\n          ")], 1)], 1)], 1) : _vm._e()], 1);
  }), 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Resume.vue?vue&type=template&id=c16be58a&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Resume.vue?vue&type=template&id=c16be58a& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, [_c("v-flex", {
    staticClass: "mt-4 pt-4",
    attrs: {
      xs12: "",
      sm12: "",
      md5: "",
      lg6: "",
      xl6: ""
    }
  }, [_c("h2", {
    staticClass: "mb-4 pl-4 pt-2"
  }, [_vm._v("Education")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "py-0"
  }, [_c("v-timeline", {
    attrs: {
      "align-top": "",
      dense: ""
    }
  }, [_c("v-timeline-item", {
    attrs: {
      color: "green",
      small: ""
    }
  }, [_c("v-layout", {
    attrs: {
      "pt-3": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs4: ""
    }
  }, [_c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("JAN 2013 -")]), _vm._v(" "), _c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("MAY 2016")])]), _vm._v(" "), _c("v-flex", {
    staticClass: "pl-2"
  }, [_c("strong", [_vm._v("Bachelor's of Social Science")]), _vm._v(" "), _c("div", {
    staticClass: "caption mb-2"
  }, [_vm._v("Kabi Nazrul Government College")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "green",
      small: ""
    }
  }, [_c("v-layout", {
    attrs: {
      "pt-3": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs4: ""
    }
  }, [_c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("JAN 2011 -")]), _vm._v(" "), _c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("MAY 2013")])]), _vm._v(" "), _c("v-flex", {
    staticClass: "pl-2"
  }, [_c("strong", [_vm._v("Intermediate")]), _vm._v(" "), _c("div", {
    staticClass: "caption mb-2"
  }, [_vm._v("Habibullah Bahar University College")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "green",
      small: ""
    }
  }, [_c("v-layout", {
    attrs: {
      "pt-3": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs4: ""
    }
  }, [_c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("JAN 2010 -")]), _vm._v(" "), _c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("DEC 2011")])]), _vm._v(" "), _c("v-flex", {
    staticClass: "pl-2"
  }, [_c("strong", [_vm._v("SSC")]), _vm._v(" "), _c("div", {
    staticClass: "caption mb-2"
  }, [_vm._v("Ibrahimpur I C High School")])])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-flex", {
    staticClass: "mt-4 pt-2",
    attrs: {
      xs12: "",
      sm12: "",
      md4: "",
      lg6: "",
      xl6: ""
    }
  }, [_c("h2", {
    staticClass: "mb-4 pl-4"
  }, [_vm._v("Experience")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "py-0"
  }, [_c("v-timeline", {
    attrs: {
      "align-top": "",
      dense: ""
    }
  }, [_c("v-timeline-item", {
    attrs: {
      color: "green",
      small: ""
    }
  }, [_c("v-layout", {
    attrs: {
      "pt-3": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs4: ""
    }
  }, [_c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("JAN 2021 -")]), _vm._v(" "), _c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("PRESENT")])]), _vm._v(" "), _c("v-flex", {
    staticClass: "pl-2"
  }, [_c("strong", [_vm._v("Full Stack Software Developer")]), _vm._v(" "), _c("div", {
    staticClass: "caption mb-2"
  }, [_vm._v("Nogor Solutions Limited.")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "green",
      small: ""
    }
  }, [_c("v-layout", {
    attrs: {
      "pt-3": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs4: ""
    }
  }, [_c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("NOV 2019 -")]), _vm._v(" "), _c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("DEC 2020")])]), _vm._v(" "), _c("v-flex", {
    staticClass: "pl-2"
  }, [_c("strong", [_vm._v("Software Developer")]), _vm._v(" "), _c("div", {
    staticClass: "caption mb-2"
  }, [_vm._v("Innovation IT")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "green",
      small: ""
    }
  }, [_c("v-layout", {
    attrs: {
      "pt-3": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs4: ""
    }
  }, [_c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("APR 2019 -")]), _vm._v(" "), _c("div", {
    staticClass: "caption font-weight-bold green--text"
  }, [_vm._v("NOV 2019")])]), _vm._v(" "), _c("v-flex", {
    staticClass: "pl-2"
  }, [_c("strong", [_vm._v("Web Application Developer")]), _vm._v(" "), _c("div", {
    staticClass: "caption mb-2"
  }, [_vm._v("Felix Tech Limited")])])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, [_c("v-flex", {
    staticClass: "mx-2 pt-4",
    attrs: {
      xs12: "",
      sm12: "",
      md4: "",
      lg5: "",
      xl5: ""
    }
  }, [_c("h2", [_c("span", [_vm._v("Design/Frontend")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Skills")])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("strong", [_vm._v("VUE/NUXT")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer3,
      callback: function callback($$v) {
        _vm.buffer3 = $$v;
      },
      expression: "buffer3"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("HTML/CSS")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer3,
      callback: function callback($$v) {
        _vm.buffer3 = $$v;
      },
      expression: "buffer3"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("JavaScript")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer3,
      callback: function callback($$v) {
        _vm.buffer3 = $$v;
      },
      expression: "buffer3"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("Photoshop")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer1,
      callback: function callback($$v) {
        _vm.buffer1 = $$v;
      },
      expression: "buffer1"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("Illustrator")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer2,
      callback: function callback($$v) {
        _vm.buffer2 = $$v;
      },
      expression: "buffer2"
    }
  })], 1), _vm._v(" "), _c("v-flex", {
    staticClass: "mx-2 pt-4",
    attrs: {
      xs12: "",
      sm12: "",
      md4: "",
      lg5: "",
      xl5: ""
    }
  }, [_c("h2", [_c("span", [_vm._v("Coding")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Skills")])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("strong", [_vm._v("PHP")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer4,
      callback: function callback($$v) {
        _vm.buffer4 = $$v;
      },
      expression: "buffer4"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("Laravel")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer5,
      callback: function callback($$v) {
        _vm.buffer5 = $$v;
      },
      expression: "buffer5"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("MySQL")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer6,
      callback: function callback($$v) {
        _vm.buffer6 = $$v;
      },
      expression: "buffer6"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("Git")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer6,
      callback: function callback($$v) {
        _vm.buffer6 = $$v;
      },
      expression: "buffer6"
    }
  }), _vm._v(" "), _c("strong", [_vm._v("Linux Server")]), _vm._v(" "), _c("v-progress-linear", {
    attrs: {
      "buffer-value": _vm.bufferValue,
      color: "green",
      height: "16"
    },
    model: {
      value: _vm.buffer6,
      callback: function callback($$v) {
        _vm.buffer6 = $$v;
      },
      expression: "buffer6"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-4 pt-2"
  }, [_c("v-btn", {
    attrs: {
      href: "/assets/frontend/files/Md._Shariful_Islam_CV.pdf",
      target: "_blank",
      color: "green",
      dark: "",
      large: ""
    }
  }, [_vm._v("\n        Download Resume\n        "), _c("v-icon", {
    attrs: {
      right: "",
      dark: ""
    }
  }, [_vm._v("fas fa-file-download")])], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=template&id=1e312128&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Services.vue?vue&type=template&id=1e312128& ***!
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

  return _c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("v-layout", {
    staticClass: "mt-4 pt-2",
    attrs: {
      row: "",
      "justify-center": "",
      "align-center": "",
      wrap: ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      sm12: "",
      md12: "",
      lg12: "",
      xl12: ""
    }
  }, [_c("h2", {
    staticClass: "pl-4"
  }, [_c("span", [_vm._v("My")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Services")])])]), _vm._v(" "), _vm._l(_vm.services, function (service) {
    return _c("v-flex", {
      key: service.src,
      attrs: {
        xs6: "",
        sm3: "",
        md3: "",
        lg3: "",
        xl3: ""
      }
    }, [_c("v-card", {
      style: {
        cursor: "context-menu"
      },
      attrs: {
        hover: "",
        flat: "",
        color: "transparent"
      }
    }, [_c("v-card-title"), _vm._v(" "), _c("v-img", {
      attrs: {
        src: service.src,
        height: "100",
        "aspect-ratio": "2.75",
        alt: "Eldin do " + service.title,
        "lazy-src": "https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif",
        contain: ""
      }
    }), _vm._v(" "), _c("v-card-title", {
      staticClass: "justify-center"
    }, [_c("v-flex", {
      attrs: {
        "text-xs-center": "",
        subheading: "",
        "font-weight-bold": ""
      }
    }, [_vm._v(_vm._s(service.title))])], 1)], 1)], 1);
  }), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: "",
      sm12: "",
      md12: "",
      lg12: "",
      xl12: ""
    }
  }, [_c("h2", {
    staticClass: "pl-4"
  }, [_c("span", [_vm._v("My")]), _vm._v(" "), _c("span", {
    staticClass: "green--text"
  }, [_vm._v("Clients")])])]), _vm._v(" "), _vm._l(_vm.clients, function (client) {
    return _c("v-flex", {
      key: client.src,
      attrs: {
        xs6: "",
        sm4: "",
        md3: "",
        lg2: "",
        xl2: ""
      }
    }, [_c("v-card", {
      attrs: {
        flat: "",
        href: client.href,
        target: "_blank",
        color: "transparent"
      }
    }, [_c("v-hover", {
      scopedSlots: _vm._u([{
        key: "default",
        fn: function fn(_ref) {
          var hover = _ref.hover;
          return _c("v-img", {
            attrs: {
              src: client.src,
              alt: client.name + " logo",
              "lazy-src": "https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif",
              height: "100",
              width: "160",
              "aspect-ratio": "2.75",
              contain: ""
            }
          }, [_c("v-expand-transition", [!hover ? _c("div", {
            staticClass: "transition-fast-in-fast-out green v-img--reveal",
            staticStyle: {
              height: "100%"
            }
          }) : _vm._e()])], 1);
        }
      }], null, true)
    })], 1)], 1);
  })], 2)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.circles[data-v-61124e2c]:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n\n  position: absolute;\n  top: -50px;\n  left: 0;\n  transform: skewY(-4deg);\n  -webkit-transform: skewY(-4deg);\n}\n.circles[data-v-61124e2c] {\n  text-align: center;\n  position: relative;\n}\n.circles p[data-v-61124e2c] {\n  font-size: 240px;\n  color: green;\n  padding-top: 90px;\n  position: relative;\n  z-index: 9;\n  line-height: 100%;\n}\n.circles p small[data-v-61124e2c] {\n  font-size: 40px;\n  line-height: 100%;\n  vertical-align: top;\n}\n.circles .circle.small[data-v-61124e2c] {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background: rgb(200, 223, 166);\n  position: absolute;\n  z-index: 1;\n  top: 80px;\n  left: 50%;\n  animation: 7s smallmove-61124e2c infinite cubic-bezier(1, 0.22, 0.71, 0.98);\n  -webkit-animation: 7s smallmove-61124e2c infinite cubic-bezier(1, 0.22, 0.71, 0.98);\n  animation-delay: 1.2s;\n  -webkit-animation-delay: 1.2s;\n}\n.circles .circle.med[data-v-61124e2c] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgb(141, 214, 163);\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 10%;\n  animation: 7s medmove-61124e2c infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);\n  -webkit-animation: 7s medmove-61124e2c infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);\n  animation-delay: 0.4s;\n  -webkit-animation-delay: 0.4s;\n}\n.circles .circle.big[data-v-61124e2c] {\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background: rgb(173, 211, 129);\n  position: absolute;\n  z-index: 1;\n  top: 200px;\n  right: 0;\n  animation: 8s bigmove-61124e2c infinite;\n  -webkit-animation: 8s bigmove-61124e2c infinite;\n  animation-delay: 3s;\n  -webkit-animation-delay: 1s;\n}\n@-webkit-keyframes smallmove-61124e2c {\n0% {\n    top: 10px;\n    left: 45%;\n    opacity: 1;\n}\n25% {\n    top: 300px;\n    left: 40%;\n    opacity: 0.7;\n}\n50% {\n    top: 240px;\n    left: 55%;\n    opacity: 0.4;\n}\n75% {\n    top: 100px;\n    left: 40%;\n    opacity: 0.6;\n}\n100% {\n    top: 10px;\n    left: 45%;\n    opacity: 1;\n}\n}\n@keyframes smallmove-61124e2c {\n0% {\n    top: 10px;\n    left: 45%;\n    opacity: 1;\n}\n25% {\n    top: 300px;\n    left: 40%;\n    opacity: 0.7;\n}\n50% {\n    top: 240px;\n    left: 55%;\n    opacity: 0.4;\n}\n75% {\n    top: 100px;\n    left: 40%;\n    opacity: 0.6;\n}\n100% {\n    top: 10px;\n    left: 45%;\n    opacity: 1;\n}\n}\n@-webkit-keyframes medmove-61124e2c {\n0% {\n    top: 0px;\n    left: 20%;\n    opacity: 1;\n}\n25% {\n    top: 300px;\n    left: 80%;\n    opacity: 0.7;\n}\n50% {\n    top: 240px;\n    left: 55%;\n    opacity: 0.4;\n}\n75% {\n    top: 100px;\n    left: 40%;\n    opacity: 0.6;\n}\n100% {\n    top: 0px;\n    left: 20%;\n    opacity: 1;\n}\n}\n@keyframes medmove-61124e2c {\n0% {\n    top: 0px;\n    left: 20%;\n    opacity: 1;\n}\n25% {\n    top: 300px;\n    left: 80%;\n    opacity: 0.7;\n}\n50% {\n    top: 240px;\n    left: 55%;\n    opacity: 0.4;\n}\n75% {\n    top: 100px;\n    left: 40%;\n    opacity: 0.6;\n}\n100% {\n    top: 0px;\n    left: 20%;\n    opacity: 1;\n}\n}\n@-webkit-keyframes bigmove-61124e2c {\n0% {\n    top: 0px;\n    right: 4%;\n    opacity: 0.5;\n}\n25% {\n    top: 100px;\n    right: 40%;\n    opacity: 0.4;\n}\n50% {\n    top: 240px;\n    right: 45%;\n    opacity: 0.8;\n}\n75% {\n    top: 100px;\n    right: 35%;\n    opacity: 0.6;\n}\n100% {\n    top: 0px;\n    right: 4%;\n    opacity: 0.5;\n}\n}\n@keyframes bigmove-61124e2c {\n0% {\n    top: 0px;\n    right: 4%;\n    opacity: 0.5;\n}\n25% {\n    top: 100px;\n    right: 40%;\n    opacity: 0.4;\n}\n50% {\n    top: 240px;\n    right: 45%;\n    opacity: 0.8;\n}\n75% {\n    top: 100px;\n    right: 35%;\n    opacity: 0.6;\n}\n100% {\n    top: 0px;\n    right: 4%;\n    opacity: 0.5;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* @import \"./../../../../../node_modules/vue-plyr/dist/vue-plyr.css\"; */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-img--reveal {\n  opacity: 0.3;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=1e312128&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css&");

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

/***/ "./resources/js/components/frontend/PostPreview.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/frontend/PostPreview.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostPreview_vue_vue_type_template_id_613015b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostPreview.vue?vue&type=template&id=613015b6&scoped=true& */ "./resources/js/components/frontend/PostPreview.vue?vue&type=template&id=613015b6&scoped=true&");
/* harmony import */ var _PostPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostPreview.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/PostPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostPreview_vue_vue_type_template_id_613015b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostPreview_vue_vue_type_template_id_613015b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "613015b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/PostPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/PostPreview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/frontend/PostPreview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/PostPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/PostPreview.vue?vue&type=template&id=613015b6&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/frontend/PostPreview.vue?vue&type=template&id=613015b6&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_template_id_613015b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostPreview.vue?vue&type=template&id=613015b6&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/PostPreview.vue?vue&type=template&id=613015b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_template_id_613015b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_template_id_613015b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Blog.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/frontend/Blog.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog_vue_vue_type_template_id_a5f910a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=a5f910a0&scoped=true& */ "./resources/js/views/frontend/Blog.vue?vue&type=template&id=a5f910a0&scoped=true&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blog_vue_vue_type_template_id_a5f910a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blog_vue_vue_type_template_id_a5f910a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a5f910a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Blog.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/frontend/Blog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Blog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Blog.vue?vue&type=template&id=a5f910a0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/frontend/Blog.vue?vue&type=template&id=a5f910a0&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_a5f910a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=template&id=a5f910a0&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Blog.vue?vue&type=template&id=a5f910a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_a5f910a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_a5f910a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/BlogPost.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/frontend/BlogPost.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogPost_vue_vue_type_template_id_613cd870_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogPost.vue?vue&type=template&id=613cd870&scoped=true& */ "./resources/js/views/frontend/BlogPost.vue?vue&type=template&id=613cd870&scoped=true&");
/* harmony import */ var _BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPost.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/BlogPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogPost_vue_vue_type_template_id_613cd870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogPost_vue_vue_type_template_id_613cd870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "613cd870",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/BlogPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/BlogPost.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/frontend/BlogPost.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/BlogPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/BlogPost.vue?vue&type=template&id=613cd870&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/frontend/BlogPost.vue?vue&type=template&id=613cd870&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_613cd870_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPost.vue?vue&type=template&id=613cd870&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/BlogPost.vue?vue&type=template&id=613cd870&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_613cd870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPost_vue_vue_type_template_id_613cd870_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Contact.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/frontend/Contact.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_53bd7482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=53bd7482&scoped=true& */ "./resources/js/views/frontend/Contact.vue?vue&type=template&id=53bd7482&scoped=true&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_53bd7482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_53bd7482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53bd7482",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Contact.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/frontend/Contact.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Contact.vue?vue&type=template&id=53bd7482&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/frontend/Contact.vue?vue&type=template&id=53bd7482&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_53bd7482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=53bd7482&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Contact.vue?vue&type=template&id=53bd7482&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_53bd7482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_53bd7482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Error.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/frontend/Error.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error_vue_vue_type_template_id_61124e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=61124e2c&scoped=true& */ "./resources/js/views/frontend/Error.vue?vue&type=template&id=61124e2c&scoped=true&");
/* harmony import */ var _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Error_vue_vue_type_style_index_0_id_61124e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css& */ "./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error_vue_vue_type_template_id_61124e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error_vue_vue_type_template_id_61124e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61124e2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Error.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/frontend/Error.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_61124e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=style&index=0&id=61124e2c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_61124e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_61124e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_61124e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_61124e2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/frontend/Error.vue?vue&type=template&id=61124e2c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/frontend/Error.vue?vue&type=template&id=61124e2c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_61124e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=template&id=61124e2c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Error.vue?vue&type=template&id=61124e2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_61124e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_61124e2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Graphic.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Graphic.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Graphic_vue_vue_type_template_id_d632ef3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphic.vue?vue&type=template&id=d632ef3a&scoped=true& */ "./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=template&id=d632ef3a&scoped=true&");
/* harmony import */ var _Graphic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphic.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Graphic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Graphic_vue_vue_type_template_id_d632ef3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Graphic_vue_vue_type_template_id_d632ef3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d632ef3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Portfolio/Graphic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Graphic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Graphic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Graphic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=template&id=d632ef3a&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=template&id=d632ef3a&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Graphic_vue_vue_type_template_id_d632ef3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Graphic.vue?vue&type=template&id=d632ef3a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Graphic.vue?vue&type=template&id=d632ef3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Graphic_vue_vue_type_template_id_d632ef3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Graphic_vue_vue_type_template_id_d632ef3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Portfolio.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Portfolio.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portfolio_vue_vue_type_template_id_7c437e03_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=template&id=7c437e03&scoped=true& */ "./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=template&id=7c437e03&scoped=true&");
/* harmony import */ var _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Portfolio.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Portfolio_vue_vue_type_template_id_7c437e03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Portfolio_vue_vue_type_template_id_7c437e03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c437e03",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Portfolio/Portfolio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=template&id=7c437e03&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=template&id=7c437e03&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_7c437e03_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Portfolio.vue?vue&type=template&id=7c437e03&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Portfolio.vue?vue&type=template&id=7c437e03&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_7c437e03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Portfolio_vue_vue_type_template_id_7c437e03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Video.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Video.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Video_vue_vue_type_template_id_5b1e4536_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video.vue?vue&type=template&id=5b1e4536&scoped=true& */ "./resources/js/views/frontend/Portfolio/Video.vue?vue&type=template&id=5b1e4536&scoped=true&");
/* harmony import */ var _Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Portfolio/Video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Video_vue_vue_type_style_index_0_id_5b1e4536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css& */ "./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Video_vue_vue_type_template_id_5b1e4536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Video_vue_vue_type_template_id_5b1e4536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b1e4536",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Portfolio/Video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Video.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Video.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_5b1e4536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=style&index=0&id=5b1e4536&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_5b1e4536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_5b1e4536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_5b1e4536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_5b1e4536_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Video.vue?vue&type=template&id=5b1e4536&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Video.vue?vue&type=template&id=5b1e4536&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_5b1e4536_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Video.vue?vue&type=template&id=5b1e4536&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Video.vue?vue&type=template&id=5b1e4536&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_5b1e4536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_template_id_5b1e4536_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Web.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Web.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Web_vue_vue_type_template_id_f7751762_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Web.vue?vue&type=template&id=f7751762&scoped=true& */ "./resources/js/views/frontend/Portfolio/Web.vue?vue&type=template&id=f7751762&scoped=true&");
/* harmony import */ var _Web_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Web.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Portfolio/Web.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Web_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Web_vue_vue_type_template_id_f7751762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Web_vue_vue_type_template_id_f7751762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f7751762",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Portfolio/Web.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Web.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Web.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Web_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Web.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Web.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Web_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Portfolio/Web.vue?vue&type=template&id=f7751762&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/frontend/Portfolio/Web.vue?vue&type=template&id=f7751762&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Web_vue_vue_type_template_id_f7751762_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Web.vue?vue&type=template&id=f7751762&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Portfolio/Web.vue?vue&type=template&id=f7751762&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Web_vue_vue_type_template_id_f7751762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Web_vue_vue_type_template_id_f7751762_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Resume.vue":
/*!************************************************!*\
  !*** ./resources/js/views/frontend/Resume.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resume_vue_vue_type_template_id_c16be58a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resume.vue?vue&type=template&id=c16be58a& */ "./resources/js/views/frontend/Resume.vue?vue&type=template&id=c16be58a&");
/* harmony import */ var _Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resume.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Resume.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resume_vue_vue_type_template_id_c16be58a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resume_vue_vue_type_template_id_c16be58a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Resume.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Resume.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/frontend/Resume.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resume.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Resume.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Resume.vue?vue&type=template&id=c16be58a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/frontend/Resume.vue?vue&type=template&id=c16be58a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_template_id_c16be58a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resume.vue?vue&type=template&id=c16be58a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Resume.vue?vue&type=template&id=c16be58a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_template_id_c16be58a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_template_id_c16be58a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/frontend/Services.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/frontend/Services.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_vue_vue_type_template_id_1e312128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services.vue?vue&type=template&id=1e312128& */ "./resources/js/views/frontend/Services.vue?vue&type=template&id=1e312128&");
/* harmony import */ var _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.vue?vue&type=script&lang=js& */ "./resources/js/views/frontend/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Services_vue_vue_type_style_index_0_id_1e312128_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.vue?vue&type=style&index=0&id=1e312128&lang=css& */ "./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Services_vue_vue_type_template_id_1e312128___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Services_vue_vue_type_template_id_1e312128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/frontend/Services.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/frontend/Services.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/frontend/Services.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_1e312128_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=style&index=0&id=1e312128&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=style&index=0&id=1e312128&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_1e312128_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_1e312128_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_1e312128_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_1e312128_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/frontend/Services.vue?vue&type=template&id=1e312128&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/frontend/Services.vue?vue&type=template&id=1e312128& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_1e312128___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Services.vue?vue&type=template&id=1e312128& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/frontend/Services.vue?vue&type=template&id=1e312128&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_1e312128___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_template_id_1e312128___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 3:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=about.js.map