/** ----------------------------
 * Imports
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//sections
import Navbar from './components/sections/Navbar'

//components
import HomePage from './components/pages/HomePage'
import SubPage from './components/pages/SubPage'
import UsersPage from './components/pages/Userspage'
import ErrorPage from './components/pages/ErrorPage'


Vue.use(VueRouter);

/** ----------------------------
 * Routes
 */
const routes = [
    {
        path: '/',
        components: {
            navbar: Navbar,
            default: HomePage,
        },
    },
    {
        path: '/subpage',
        components: {
            navbar: Navbar,
            default: SubPage,
        },
    },
    {
        path: '/users',
        components: {
            navbar: Navbar,
            default: UsersPage,
        },
        children: [
            {
              path: 'test',
              component: { template: `<div>Dit is de test child</div>` }
            },
        ]
    },

    //  DEFAULT ROUTE
    {
        path: '*',
        components: {
            navbar: Navbar,
            default: ErrorPage,
        },
    }
];


/** ----------------------------
 * Create router instance with the routes
 * @type {VueRouter}
 */
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

export default router