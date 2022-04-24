import { API_SIGN_IN, API_SIGN_UP } from '../common/api.constants'
import APIService from '../common/api.service'
import TokenService  from '../common/token.service'
import UserService from '../common/user.service'

const AuthAPI = {
  signIn(email, password) {
    return APIService.post(API_SIGN_IN, {
      email,
      password
    })
      .then(resp => {
        if (resp.data.accessToken) {
          TokenService.updateToken(resp.data.accessToken)
          UserService.updateUserId(resp.data.user.id)
        }
        return resp.data
      })
      .catch(err => {
        console.error(err.toJSON().message)
      })
  },
  signUp(userData) {
    return APIService.post(API_SIGN_UP, {
      ...userData
    })
      .then(resp => {
        if (resp.data.accessToken) {
          TokenService.updateToken(resp.data.accessToken)
          UserService.updateUserId(resp.data.user.id)
        }
        return resp.data
      })
      .catch(err => {
        console.error(err.toJSON().message)
      })
  },
  signOut() {
    TokenService.removeToken()
    UserService.removeUserId()
  }
}

export default AuthAPI
