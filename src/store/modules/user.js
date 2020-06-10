const state = {
    count: 5
}
const getters = {
    count:state=>state.count
}

const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    RESET(state,temp){
        state.count = temp
    }
}

const actions = {
    increment({commit}) {
        commit('INCREMENT')
    },
    decrement({commit}) {
        commit('DECREMENT')
    },
    reset({commit}){
        commit('RESET',5)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}