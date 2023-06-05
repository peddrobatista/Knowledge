import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/home/Home';
import AdminPages from '@/components/admin/AdminPages';
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'
import Auth from '@/components/auth/Auth'
import {userKey} from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    components: Home
}, {
    name: 'adminPages',
    path: '/admin',
    components: AdminPages,
    meta: {requiresAdmin: true}
}, {
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)
    if(to.matched.some(record => record.meta))
})

export default router