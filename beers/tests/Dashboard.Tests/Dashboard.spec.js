import {shallowMount,createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Vue from 'vue';
import Dashboard from '../../src/views/Dashboard.vue';
import dashboardModule from '../../src/stores/dashboard.module';
import moment from 'moment';

const localVue = createLocalVue()

localVue.use(Vuex)
Vue.use(Vuetify);
describe('Dashboard.vue', () => {
    let store;
    let dashboard;
    let actions;

    beforeEach(() => {
        actions = {

        }
        dashboard = {
            state:{
              
            },
            actions:{
               
            },
            getters:{
               
            }
        }
        store = new Vuex.Store({
            modules: {
                dashboardModule
            }
            
        });
    });
    it('Does *Dashboard* page render correctly', () => {
        const wrapper = shallowMount(Dashboard,{store, localVue})
        expect(wrapper.vm.$el).toMatchSnapshot();
    });

    
})