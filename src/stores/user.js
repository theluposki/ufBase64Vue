import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue';
import { encryptValue, decryptValue } from '../utils/crypto.js'
import { io } from 'socket.io-client';
import config from '../config.js'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  
  // const socket = io(config.BASE_URL_SOCKET, {
  //   transports: ['websocket']
  // })

  onMounted(() => {
    if(localStorage.getItem("user-connected")) {
      user.value = JSON.parse(decryptValue(localStorage.getItem("user-connected")))
    }
  })

  async function signIn(email, password) {
    console.log('signIn')
  }

  async function signUp(name, email, password) {
    console.log('signUp')
  }
  
  async function signOut() {
    console.log('signOut')
    user.value = {}
    localStorage.removeItem("user-connected");
  }
  
  return { 
    user, 
    signIn, 
    signUp, 
    signOut,
  }
})
