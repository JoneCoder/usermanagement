import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./../views/frontend/Home";
import Meta from 'vue-meta'
Vue.use(VueRouter)

// ========== define route==========
const routes = [
    {
        path: '/', component: () => import('./../views/frontend/Layout'),
        // chlidren menu
        children: [{
            path: "/",
            name: "home",
            component: Home
          },
          {
            path: "/contact",
            name: "contact",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Contact.vue")
          },
          {
            path: "/resume",
            name: "resume",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Resume.vue")
          },
          {
            path: "/blog",
            name: "blog",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Blog.vue")
          },
          {
            path: "/blog/:id",
            name: "blogPost",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/BlogPost.vue")
          },
          {
            path: "/services",
            name: "services",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Services.vue")
          },
          {
            path: "/portfolio",
            name: "portfolio",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Portfolio/Portfolio.vue")
          },
          {
            path: "/portfolio/video",
            name: "videoPortfolio",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Portfolio/Video.vue")
          },
          {
            path: "/portfolio/graphic",
            name: "graphicPortfolio",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Portfolio/Graphic.vue")
          },
          {
            path: "/portfolio/web",
            name: "webPortfolio",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Portfolio/Web.vue")
          },
          {
            path: "*",
            name: "Error",
            component: () =>
              import( /* webpackChunkName: "about" */ "./../views/frontend/Error.vue")
          }
        ],
    },

]

// ========== define router==========
const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
    base: process.env.MIX_VUE_ROUTER_BASE,
    linkExactActiveClass: "active",
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});


router.beforeEach((to, from, next) => {
    next();
    // active parent menu
    // setTimeout(() => {
    //     $('.nav-item').children('.nav-link').removeClass('parent-active')
    //     $('.router-link-exact-active').parents('.dropdown-menu').siblings('#navbarDropdown').addClass('parent-active');
    // }, 100);
})

export default router
