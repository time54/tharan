import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username } = body
      if (username === 'admin') return { code: 0, data: { token: 'token-admin' } }
      return { code: 0, data: { token: 'token-user' } }
    }
  },
  {
    url: '/api/user/profile',
    method: 'get',
    response: () => ({
      code: 0,
      data: { name: '示例用户', roles: ['user'] }
    })
  }
] as MockMethod[]
