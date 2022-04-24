const USER = 'user_id'

const getUserId = () => {
  return localStorage.getItem(USER)
}

const updateUserId = (userId) => {
  return localStorage.setItem(USER, userId)
}

const removeUserId = () => {
  return localStorage.removeItem(USER)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUserId,
  updateUserId,
  removeUserId
}
