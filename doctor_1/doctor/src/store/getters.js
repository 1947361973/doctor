export default {
    Head: (state) => state.bHead,
    bFoot: (state) => state.bFoot,
    bLoading: (state) => { console.log('getters..'), state.bLoading },
    home: (state) => state.home,
    list: (state) => state.list,
    banner: (state) => state.banner,
    // 这里user后面点了一个data是因为user在登录成功后数据都在user.data里面
    user: (state) => state.user.data,
    detail: (state) => state.detail
}