import { defineStore } from "pinia"
export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'global data',
      text: 'I am text'
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