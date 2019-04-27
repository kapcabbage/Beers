import Vue from 'vue';
import Vuetify from 'vuetify';
import pl from 'vuetify/src/locale/pl.ts';
import 'vuetify/src/stylus/main.styl';

import router from './router';
import store from './stores/store';

import app from './App.vue';

Vue.use(
    Vuetify, {
      lang: {
        locales: { pl },
        current: 'pl'
      },
      theme:{
        primary: '#4caf50',
        secondary: '#4caf50',
        tertiary: '#495057',
        accent: '#82B1FF',
        error: '#f55a4e',
        info: '#00d3ee',
        success: '#5cb860',
        warning: '#ffa21a'
      }
    });

new Vue({
    router,
    store,
    render: h => h(app)
  }).$mount('#app')