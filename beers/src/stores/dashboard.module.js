import axios from 'axios';
import { LOAD_BEERS } from './actions.type';
import { SET_BEERS } from './mutations.type';
import { GET_BEERS } from './getters.type';

window.ajax = axios.create({});
//window.ajax.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const state = {
    beers:[],
    currentPage: Number
};

const actions = {
    [LOAD_BEERS]({state, commit},data) {
        window.ajax.get('/api/GetBeers',
        {

        }).then(response=> {
            console.log(response.data);
            commit(SET_BEERS, response.data)
        }).catch(error => {
            console.log(error);
        })
    }
};

const mutations = {
    [SET_BEERS](state, payload) {
        state.beers = payload.data
        state.currentPage = payload.currentPage
        console.log("state")
        console.log(state.beers)
   },
};

const getters = {
    [GET_BEERS](state) {
        console.log("getter")
        console.log(state.beers)
        return state.beers;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}