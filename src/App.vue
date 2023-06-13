<script setup>
import { computed } from 'vue';
import { useUserStore } from './stores/user.js'

import HeaderM from './components/layout/Header.vue'
import MainM from './components/layout/Main.vue'
import MainLogged from './components/layout/MainLogged.vue'
import FooterM from './components/layout/Footer.vue'

const storeUser = useUserStore()

const user = computed(() => storeUser.user)

</script>

<template>
  <HeaderM />
  <!-- <MainM v-if="user.nickname"/> -->
  <MainLogged /> 
  <FooterM />
</template>

