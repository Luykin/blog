import {loadSearch} from 'common/js/cache'

const state = {
  user: loadSearch('lyk-u-r'),
  token: loadSearch('lyk-t-n'),
  tokenTime: loadSearch('lyk-t-e'),
  background: loadSearch('lyk-b-d')
}
export default state
