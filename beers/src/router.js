import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Grid from './views/Grid.vue';
import store from './stores/store.js';


Vue.use(Router)

const router = new Router(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
          path: '/grid',
          name: 'grid',
          component: Grid
      },
        ]
    }
);

export default router;