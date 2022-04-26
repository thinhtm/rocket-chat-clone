import {
  API_GROUPS,
  API_CREATE_GROUP,
  API_ADD_MEMBER
} from '../common/api.constants'
import APIService from '../common/api.service'

const GroupAPI = {
  getGroupList() {
    return APIService.get(API_GROUPS)
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        console.error(err.toJSON().message)
      })
  },
  createGroup(newGroupData) {
    return APIService.post(API_CREATE_GROUP, { ...newGroupData })
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        console.error(err.toJSON().message)
      })
  },
  addMember(groupId, groupData) {
    return APIService.put(
      API_ADD_MEMBER.replace('<group_id>', groupId),
      { ...groupData }
    )
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        console.error(err.toJSON().message)
      })
  }
}

export default GroupAPI
