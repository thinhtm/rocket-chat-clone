import { API_USERS } from '../common/api.constants'
import APIService from '../common/api.service'

const UserAPI = {
  getUsers() {
    return APIService.get(API_USERS)
    .then(resp => {
      return resp.data
    })
    .catch(err => {
      console.error(err.toJSON().message)
    })
  }
}

export default UserAPI
