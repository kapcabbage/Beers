import axios from 'axios';
import { LOAD_BEERS, LOAD_MORE_BEERS, SEARCH_BEER_NAME } from './actions.type';
import { SET_BEERS, SET_MORE_BEERS, SET_BEER } from './mutations.type';
import { GET_BEERS, GET_CURRENTPAGE, GET_TOTALPAGE} from './getters.type';

window.ajax = axios.create({});
//window.ajax.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const state = {
    beers:[],
    currentPage: 0,
    totalPage: 0
};

const actions = {
    [LOAD_BEERS]({state, commit},data) {
        
        if(state.currentPage === 0){
            window.ajax.get('/api/GetBeers',
            {

            }).then(response=> {
                console.log(response.data);
                commit(SET_BEERS, response.data)
            }).catch(error => {
                console.log(error);
            })
        }
    },
    [LOAD_MORE_BEERS]({state, commit},data) {
        window.ajax.get('/api/GetMoreBeers',
        {
            params:{
                pageNumber: data.pageNumber
            }
        }).then(response=> {
            console.log(response.data);
            commit(SET_MORE_BEERS, response.data)
        }).catch(error => {
            console.log(error);
        })
    },
    [SEARCH_BEER_NAME]({state, commit},data) {
        window.ajax.get('/api/GetBeerByName',
        {
            params:{
                name: data.name
            }
        }).then(response=> {
            console.log(response.data);
            commit(SET_BEER, response.data)
        }).catch(error => {
            console.log(error);
        })
    }
};

const mutations = {
    [SET_BEERS](state, payload) {
        state.beers = payload.data;
        state.currentPage = payload.currentPage;
        state.totalPage = payload.numberOfPages
        console.log("state");
        console.log(state.currentPage);
   },
   [SET_BEER](state, payload) {
       console.log("set beer");
       console.log(payload);
        if(payload.data){
            state.beers = payload.data;
        }
        else{
            state.beers = [];
        }
        state.currentPage = 0;
        state.totalPage = 0;
   },
   [SET_MORE_BEERS](state, payload) {
        state.beers = state.beers.concat(payload.data);
        state.currentPage = payload.currentPage;
        state.totalPage = payload.numberOfPages
        console.log("state");
        console.log(state.currentPage);
},
};

const getters = {
    [GET_BEERS](state) {
        return state.beers;
    },
    [GET_CURRENTPAGE](state) {
        return state.currentPage;
    },
    [GET_TOTALPAGE](state) {
        return state.totalPage;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}