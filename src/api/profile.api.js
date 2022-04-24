import { API_PROFILE } from '../common/api.constants'
import APIService from '../common/api.service'

const ProfileAPI = {
  getProfile(userId) {
    return APIService.get(
      API_PROFILE.replace('<user_id>', userId.toString())
    )
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        console.error(err.toJSON().message)
      })
  }
}

export default ProfileAPI
