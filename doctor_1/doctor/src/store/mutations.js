export default {
    'VIEW_HEAD': (state, payload) => state.bHead = payload,
    'VIEW_FOOT': (state, payload) => state.bFoot = payload,
    'VIEW_LOADING': (state, payload) => state.bLoading = payload,

    'UPDATE_HOME': (state, payload) => state.home = payload,
    'UPDATE_LIST': (state, payload) => state.list = payload,
    'UPDATE_COLUMN': (state, payload) => state.column = payload,
    'UPDATE_BANNER': (state, payload) => state.banner = payload,
    'UPDATE_DETAIL': (state, payload) => state.detail = payload,
    'UPDATE_USER': (state, payload) => state.user = payload,
}