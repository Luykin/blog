import axios from 'axios'
import qs from 'qs'
import { PREFIX_URL } from './config'

export function login(userName, userPassword) {
  const url = `${PREFIX_URL}/users/login`
  let data = {
    userName,
    userPassword
  }
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}

export function index() {
  const url = `${PREFIX_URL}/index`
  let data = {
  }
  return axios.get(url, {params: data})
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}

// export function getUserInfo(userName, userPassword) {
//   const url = `${PREFIX_URL}/user_info`
//   let data = {
//     userName,
//     userPassword
//   }
//   return axios.get(url, {
//       params: Object.assign({
//         sign: getSign(data)
//       }, data)
//     })
//     .then(function(res) {
//       return Promise.resolve(res)
//     })
//     .catch(function(error) {
//       if (error.response) {
//         console.log(error.response.status)
//         return Promise.resolve({
//           data: {
//             err_code: error.response.status,
//             err_msg: error.response.status
//           }
//         })
//       } else {
//         return Promise.resolve({
//           data: {
//             err_code: -1,
//             err_msg: -1
//           }
//         })
//       }
//     })
// }
// export function getCombos(categoryid) {
//   const url = `${PREFIX_URL}/combos`
//   let data = {
//     category_id: categoryid,
//     uaid: UAID
//   }
//   return axios.post(url, qs.stringify(Object.assign({
//       sign: getSign(data)
//     }, data)))
//     .then(function(res) {
//       return Promise.resolve(res)
//     }).catch(function(error) {
//       if (error.response) {
//         console.log(error.response.status)
//         return Promise.resolve({
//           data: {
//             err_code: error.response.status,
//             err_msg: error.response.status
//           }
//         })
//       } else {
//         return Promise.resolve({
//           data: {
//             err_code: -1,
//             err_msg: -1
//           }
//         })
//       }
//     })
// }
