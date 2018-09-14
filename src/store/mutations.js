import * as types from './mutation-types'
import CryptoJS from 'crypto-js'
import { encryptedStorage } from 'common/js/util'
const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token
    encryptedStorage('lyk-t-n', token)
  },
  [types.SET_USER](state, user) {
    state.user = user
    encryptedStorage('lyk-u-r', user)
  },
  [types.SET_TOKENTIME](state, tokenTime) {
    state.tokenTime = tokenTime
    encryptedStorage('lyk-t-e', tokenTime)
  },
  [types.SET_BACKGROUND](state, background) {
    state.background = background
    encryptedStorage('lyk-b-d', background)
  }
}

export default mutations
