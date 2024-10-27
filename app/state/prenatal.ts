import { acceptHMRUpdate, defineStore } from 'pinia'

import type { Prenatal } from '~/types/mom'

// const { VITE_APP_USER_ID } = import.meta.env

export const usePrenatalStore = defineStore('prenatal', () => {
  const prenatalDataList = ref<Prenatal[]>([])

  return {
    prenatalDataList,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePrenatalStore as any, import.meta.hot))
