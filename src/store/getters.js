import user from './modules/user'

const getters = {
    isEvenOdd(state) {
        return user.state.count % 2 == 1
            ? '奇数'
            : '偶数'
    }
}
export default getters