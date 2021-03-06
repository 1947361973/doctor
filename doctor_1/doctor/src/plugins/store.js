import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from '../store/state'
import actions from '../store/actions'
import mutations from '../store/mutations'
import getters from '../store/getters'

let store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state
});

export default store;