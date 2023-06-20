<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'

const storeLayout = useLayoutStore()

import PanelLogin from './PanelLogin.vue'
const activeContainerLogin = computed(() => storeLayout.activeContainerLogin)

</script>
<template>
  <div class="page">
    <div class="main">
      Seja ben-vindo ao MyReb

    <transition 
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight"
      mode="out-in">
      <PanelLogin v-if="activeContainerLogin"/>
    </transition>
    </div>
  </div>
</template>

<style></style>
