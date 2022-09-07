import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// ========== define route==========
const routes = [
    { path: '/login', name: 'admin.loginme', component: () => import('./../views/login/Login') },
    { path: '/register', name: 'admin.loginme', component: () => import('./../views/register/Register') },

    { // allow for after login
        path: '/dashboard', component: () => import('./../views/backend/Layout'), beforeEnter: authGuard,
        // chlidran menu
        children: [

            {
                path: '/monthlyloginhistories',
                name: 'attendance.monthlyloginhistories',
                component: () =>
                    import ('./../views/backend/Attendance/MonthlyLoginHistory'),
                beforeEnter: authGuard
            },


            // ------------------User portion------------------
            { path: '/user', name: 'user.index', meta: { title: 'User', nav: true }, component: () => import('./../views/backend/User/Index'), beforeEnter: authGuard },
            { path: '/user/create', name: 'user.create', component: () => import('./../views/backend/User/Create'), beforeEnter: authGuard },
            { path: '/user/:id', name: 'user.show', component: () => import('./../views/backend/User/View'), beforeEnter: authGuard },
            { path: '/user/:id/edit', name: 'user.edit', component: () => import('./../views/backend/User/Create'), beforeEnter: authGuard },
            { path: '/dashboard', name: 'user.dashboard', meta: { title: 'Dashboard', nav: true }, component: () => import('./../views/backend/User/Dashboard'), beforeEnter: authGuard },
            
            // ------------------Role portion------------------
            { path: '/role', name: 'role.index', meta: { title: 'Role', nav: true }, component: () => import('./../views/backend/Menu/Role/Index'), beforeEnter: authGuard },
            { path: '/role/create', name: 'role.create', component: () => import('./../views/backend/Menu/Role/Create'), beforeEnter: authGuard },
            { path: '/role/:id', name: 'role.show', component: () => import('./../views/backend/Menu/Role/View'), beforeEnter: authGuard },
            { path: '/role/:id/edit', name: 'role.edit', component: () => import('./../views/backend/Menu/Role/Create'), beforeEnter: authGuard },
            
            // ------------------Dominion portion------------------
            { path: '/dominion', name: 'dominion.index', meta: { title: 'Dominion', nav: true }, component: () => import('./../views/backend/Menu/Dominion/Index'), beforeEnter: authGuard },
            { path: '/dominion/create', name: 'dominion.create', component: () => import('./../views/backend/Menu/Dominion/Create'), beforeEnter: authGuard },
            { path: '/dominion/:id', name: 'dominion.show', component: () => import('./../views/backend/Menu/Dominion/View'), beforeEnter: authGuard },
            { path: '/dominion/:id/edit', name: 'dominion.edit', component: () => import('./../views/backend/Menu/Dominion/Create'), beforeEnter: authGuard },
            
            // ------------------Process portion------------------
            { path: '/process', name: 'process.index', meta: { title: 'Process', nav: true }, component: () => import('./../views/backend/Menu/Process/Index'), beforeEnter: authGuard },
            { path: '/process/create', name: 'process.create', component: () => import('./../views/backend/Menu/Process/Create'), beforeEnter: authGuard },
            { path: '/process/:id', name: 'process.show', component: () => import('./../views/backend/Menu/Process/View'), beforeEnter: authGuard },
            { path: '/process/:id/edit', name: 'process.edit', component: () => import('./../views/backend/Menu/Process/Create'), beforeEnter: authGuard },
            
            // ------------------Permission portion------------------
            { path: '/permission', name: 'permission.index', meta: { title: 'Permission', nav: true }, component: () => import('./../views/backend/Menu/Permission/Index'), beforeEnter: authGuard },
            { path: '/permission/create', name: 'permission.create', component: () => import('./../views/backend/Menu/Permission/Create'), beforeEnter: authGuard },
            { path: '/permission/:id', name: 'permission.show', component: () => import('./../views/backend/Menu/Permission/View'), beforeEnter: authGuard },
            { path: '/permission/:id/edit', name: 'permission.edit', component: () => import('./../views/backend/Menu/Permission/Create'), beforeEnter: authGuard },
            
            // ------------------Authorizedmenu portion------------------
            { path: '/authorizedmenu', name: 'authorizedmenu.index', meta: { title: 'Authorized Menu', nav: true }, component: () => import('./../views/backend/Menu/Authorizedmenu/Index'), beforeEnter: authGuard },
            { path: '/authorizedmenu/create', name: 'authorizedmenu.create', component: () => import('./../views/backend/Menu/Authorizedmenu/Create'), beforeEnter: authGuard },
            { path: '/authorizedmenu/:id', name: 'authorizedmenu.show', component: () => import('./../views/backend/Menu/Authorizedmenu/View'), beforeEnter: authGuard },
            { path: '/authorizedmenu/:id/edit', name: 'authorizedmenu.edit', component: () => import('./../views/backend/Menu/Authorizedmenu/Create'), beforeEnter: authGuard },
            
            // ------------------Activity Log portion------------------
            { path: '/activityLog', name: 'activityLog.index', meta: { title: 'Activity Log', nav: true }, component: () => import('./../views/backend/ActivityLog/Index'), beforeEnter: authGuard },
            { path: '/activityLog/:id', name: 'activityLog.show', component: () => import('./../views/backend/ActivityLog/View'), beforeEnter: authGuard },
            
            // ------------------Documents portion------------------
            { path: '/document', name: 'document.index', meta: { title: 'Documents', nav: true }, component: () => import('./../views/backend/Doc/Index'), beforeEnter: authGuard },
            { path: '/document/create', name: 'document.create', component: () => import('./../views/backend/Doc/Create'), beforeEnter: authGuard },
        ]
    },

    // if any component or view not found then showing 404 page
    {
        path: '*', component: () => import('./../views/backend/NotFoundLayout'), beforeEnter: authGuard,
        children: [
            { path: '*', name: '404', component: () => import('./../views/errors/404'), beforeEnter: authGuard }
        ]
    }
];



// ========== define router==========
const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
    base: process.env.MIX_VUE_ROUTER_BASE + '/admin/',
    linkExactActiveClass: "active",
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
})

// ==========check login or not==========
function authGuard(to, from, next) {
    if (Admin.loggedIn()) {
        if (to.meta.nav) {
            const obj = { 'route': to.name, 'title': to.meta.title ? to.meta.title : to.name }
            breadcrumbs.dispatch("addMenu", obj);
        }
        next();
    } else {
        next({ name: 'admin.loginme' });
    }
}

export default router
