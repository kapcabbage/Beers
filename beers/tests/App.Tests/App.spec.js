import {shallowMount,createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Vue from 'vue';
import App from '../../src/App.vue';
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
Vue.use(Vuetify);
describe('App.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(App,{
            localVue
        });
    });
    it('Does *App* page render correctly', () => {
        //assert
        expect(wrapper.vm.$el).toMatchSnapshot();
    });
})