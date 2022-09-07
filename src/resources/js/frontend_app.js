require('./frontend_bootstrap');
window.Vue = require('vue');
require('./Helpers/filter');
require('./Helpers/Frontend/mixin');
require('./Helpers/Frontend/plugin');
require('./Helpers/Frontend/crud');
import StoryblokVue from 'storyblok-vue'
import VueAnalytics from 'vue-analytics'
// ===============router=============
import router from "./Router/frontend_router.js";

Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === "production"

Vue.component('app', require('./components/FrontendApp.vue').default);
Vue.use(StoryblokVue);
Vue.use(VueAnalytics, {
  id: 'UA-139190314-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});

// ===============app===============
const app = new Vue({
    el: '#app',
    router,
    data: {
        baseurl: laravel.baseurl,
        spinner: false,
        menus: [],
        config: [],
        variable: []
    },
    methods: {
        getMenus: function () {
            axios
                .get("/menus")
                .then(res => {
                    this.menus = res.data.menus;
                    this.config = res.data.config;
                })
                .catch(error => console.log());
        },
        getVariables: function () {
            axios
                .get("frontendvariablelist")
                .then(response => {
                    this.variable = response.data;
                })
                .catch(error => {
                    console.log(error.response);
                });
        }

    },
    mounted() {
        // this.getMenus();
        // this.getVariables();
    },
    created() {
        // active parent menu
        // $('.nav-item').children('.nav-link').removeClass('parent-active')
        // setTimeout(() => {
        //     $('.router-link-exact-active').parents('.dropdown-menu').siblings('#navbarDropdown').addClass('parent-active');
        // }, 3000);
    }
});
