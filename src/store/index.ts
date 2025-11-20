import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ name: '', roles: [] as string[] }),
  actions: {
    setUserInfo(payload: { name: string; roles: string[] }) {
      this.name = payload.name
      this.roles = payload.roles
    }
  }
})
