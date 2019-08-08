import axios from "../plugins/axios";

export default {

    'VIEW_HEAD': ({ commit, state }, payload) => { commit('VIEW_HEAD', payload) },
    'VIEW_FOOT': ({ commit, state }, payload) => commit('VIEW_FOOT', payload),
    'VIEW_LOADING': ({ commit, state }, payload) => {
        console.log('actions');
        commit('VIEW_LOADING', payload)
    },

    'UPDATE_HOME': ({ commit, state }, payload) => {
        axios({
            // 请求接口home
            url: '/api/home',
            params: { _page: 1, _limit: 10 }
        }).then(
            // commit（请求类型，负载）给mutations传数据
            res => commit('UPDATE_HOME', res.data.data)
        )
    },

    'UPDATE_LIST': ({ commit, state }, payload) => {
        axios({
            url: '/api/list',
            params: { _page: 1, _limit: 10 }
        }).then(
            res => commit('UPDATE_LIST', res.data.data)
        )
    },

    'UPDATE_COLUMN': ({ commit, state }, payload) => {
        axios({
            url: '/api/column',
            params: { _page: 1, _limit: 6 }
        }).then(
            res => commit('UPDATE_COLUMN', res.data.data)
        )
    },

    'UPDATE_BANNER': ({ commit, state }, payload) => {
        axios({
            url: '/api/banner',
            params: { _page: 1, _limit: 3 }
        }).then(
            res => commit('UPDATE_BANNER', res.data.data)
        )
    },
    // 因为在Detail里面发送请求用的是type形式，所以发送过来的是一个参数，包含了type和payload，所以这里要结构{ type, payload }
    // 又因为payload中又包含了数组对象，所以在Detail里先解构一次，到了这边再解构一次这样就可以分别拿到数据了
    'UPDATE_DETAIL': ({ commit, state }, { type, payload }) => {
        // console.log('UPDATE_DETAIL',payload)
        axios({
            url: `/api/${payload.dataName}/${payload.id}`
        }).then(
            res => commit('UPDATE_DETAIL', res.data.data)
        )
    },
    /* 
      'UPDATE_USER': async ({commit,state},payload)=>{
        let res = await axios({url:'/api/user'})
        commit('UPDATE_USER',res.data)
      } */

}