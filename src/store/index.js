import { defineStore } from "pinia"
export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'global data'
    }
  },
  getters: {

  },
  actions: {
    changeMsg(val){
      this.msg = val
    }
  },
})