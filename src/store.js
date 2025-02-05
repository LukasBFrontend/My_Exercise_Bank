import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  actions: {
    increment() {
      this.value++
    },
  },
  state: () => ({ value: 0 }),
})

export const useResultStore = defineStore('results', {
  actions: {
    set(resultsArray) {
      this.value = resultsArray
    },
  },
  state: () => ({ value: null }),
})
