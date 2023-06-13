<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'

const storeLayout = useLayoutStore()

const activeMenu = computed(() => storeLayout.activeMenu)

import MenuMobile from './MenuMobile.vue'
import BtnMenu from './BtnMenu.vue'

</script>

<template>
  <div class="main">
    <BtnMenu />
    <transition 
    enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutLeft"
      mode="out-in">
      <MenuMobile v-if="activeMenu"/>
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
.main {
  position: relative;
}
</style>
