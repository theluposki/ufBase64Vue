import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const activeMenu = ref(false)

  function fnActiveMenu () {
    console.log("sdadasdas")
    activeMenu.value = !activeMenu.value
  }

  return {
    fnActiveMenu, 
    activeMenu,
  }
})
