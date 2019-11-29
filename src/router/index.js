import Vue from 'vue';
import Router from 'vue-router';
import Foo from '@/components/Foo.vue';
import Bar from '@/components/Bar.vue';
import Index from '@/components/Index.vue';

Vue.use(Router);

export default function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            // {path: '/', component: () => import('./components/Index.vue') },
            { path: '/', component: Index},
            // { path: '/', name: 'homepage', component: () => import('../components/Index.vue') //lazy loading },
            {path: '/foo', component: Foo },
            {path: '/bar', component: Bar }
        ]
    });
}