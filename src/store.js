import { defineStore } from 'pinia'

export const useResultStore = defineStore('results', {
  actions: {
    set(resultsArray) {
      this.value = resultsArray
    },
  },
  state: () => ({ value: null }),
})
