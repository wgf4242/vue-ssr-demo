import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            // {path: '/', component: () => import('./components/Index.vue') },
            // { path: '/', component: Index},
            { path: '/', name: 'homepage', component: () => import('@/components/Index.vue') }, //lazy loading },
            {path: '/foo', component: () => import('@/components/Foo.vue') },
            {path: '/bar', component: () => import('@/components/Bar.vue') }
        ]
    });
}