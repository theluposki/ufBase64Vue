<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'

const storeLayout = useLayoutStore()

const activeMenu = computed(() => storeLayout.activeMenu)
const activeMenuConversation = computed(() => storeLayout.activeMenuConversation)

import MenuMobile from './MenuMobile.vue'
import MenuConversation from './MenuConversation.vue'
import BtnMenu from './BtnMenu.vue'
import BtnConversation from './BtnConversation.vue'

</script>

<template>
  <div class="main">
     <BtnMenu />
     <BtnConversation />
    <transition 
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
      mode="out-in">
      <MenuMobile v-if="activeMenu"/>
    </transition>
    
    <transition 
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight"
      mode="out-in">
      <MenuConversation v-if="activeMenuConversation"/>
    </transition>
    
    <router-view></router-view>
  </div>
</template>


<style scoped>
.animate__animated.animate__slideInLeft {
  --animate-duration: 0.5s;
}
.animate__animated.animate__slideOutLeft {
  --animate-duration: 0.5s;
}
.animate__animated.animate__slideInRight {
  --animate-duration: 0.5s;
}
.animate__animated.animate__slideOutRight {
  --animate-duration: 0.5s;
}
.main {
  position: relative;
}
</style>
