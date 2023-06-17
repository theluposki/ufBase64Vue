import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const activeMenu = ref(false)
  const activeMenuConversation = ref(false)
  const activeMenuLoggedInUser = ref(false)

  function fnActiveMenu () {
    if(activeMenu.value) {
      activeMenu.value = false
      activeMenuConversation.value = false
      activeMenuLoggedInUser.value = false
    } else {
      activeMenu.value = true
      activeMenuConversation.value = false
      activeMenuLoggedInUser.value = false
    }
  }
  
  function fnActiveMenuConversation () {
    if(activeMenuConversation.value) {
      activeMenuConversation.value = false
      activeMenuLoggedInUser.value = false
      activeMenu.value = false
    } else {
      activeMenuConversation.value = true
      activeMenu.value = false
      activeMenuLoggedInUser.value = false
    }
  }

  function fnActiveMenuLoggedInUser () {
    if(activeMenuLoggedInUser.value) {
      activeMenuLoggedInUser.value = false
      activeMenuConversation.value = false
      activeMenu.value = false
    } else {
      activeMenuLoggedInUser.value = true
      activeMenuConversation.value = false
      activeMenu.value = false
    }
  }

  return {
    fnActiveMenu, 
    activeMenu,
    fnActiveMenuConversation, 
    activeMenuConversation,
    fnActiveMenuLoggedInUser,
    activeMenuLoggedInUser
  }
})
