import Vue from 'vue';
import Vuex from 'vuex';
import dashboard from "./stores/dashboard.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    dashboard
  },
});
