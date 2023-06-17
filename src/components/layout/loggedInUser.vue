<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/user.js'
import { useLayoutStore } from '../../stores/layout.js'

import MenuLoggedInUser from './MenuLoggedInUser.vue';

const storeUser = useUserStore()
const storeLayout = useLayoutStore()

const user = computed(() => storeUser.user)
const activeMenuLoggedInUser = computed(() => storeLayout.activeMenuLoggedInUser)

const fnActiveMenuLoggedInUser = () => {
  storeLayout.fnActiveMenuLoggedInUser()
}

</script>
<template> 
  <div v-if="user.picture" class="loggedInUser">
    <img :src="user.picture"  @click="fnActiveMenuLoggedInUser"  class="picture" alt="image profile">
  </div>

  <transition 
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight"
      mode="out-in">
      <MenuLoggedInUser v-if="activeMenuLoggedInUser"/>
  </transition>

</template>

<style scoped>
.loggedInUser {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.picture {
  width: 50px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
}

.picture:hover {
  transition: all ease .4s;
  scale: .97;
}

.picture:active {
  scale: 1.1;
}
</style>
