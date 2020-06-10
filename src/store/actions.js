const actions = {
    incrementAsync({commit, state}) {
        var p = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 3000)
        })
        p.then(() => {
            commit('INCREMENT')
        }).catch(() => {
            console('haha')
        })
    }
}

export default actions