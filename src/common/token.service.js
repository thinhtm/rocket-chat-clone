const ACCESS_TOKEN = 'access_token'

const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN)
}

const updateToken = (token) => {
  return localStorage.setItem(ACCESS_TOKEN, token)
}

const removeToken = () => {
  return localStorage.removeItem(ACCESS_TOKEN)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getToken,
  updateToken,
  removeToken
}
