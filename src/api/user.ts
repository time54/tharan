import request from './index'

export const login = (data: { username: string; password: string }) =>
  request.post('/user/login', data)

export const getProfile = () => request.get('/user/profile')
