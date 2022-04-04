import { defineStore } from "pinia"
import { Names } from "./store-name"

const login = ():Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name:'zaza',
        age:12
      })
    })
  })
}
type User = {
  name: string,
  age: number
}
export const useTestStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      name: '小满',
      user: <User>{}
    }
  },
  // 相当于computed
  getters: {
    newName():string {
      return `$-${this.name}`
    }
  },
  // 可以同步或者异步操作
  actions: {
    setCurrent(val:number){
      this.current = val
    },
    async getUser(){
      const res = await login()
      this.user = res
    }
  }
})