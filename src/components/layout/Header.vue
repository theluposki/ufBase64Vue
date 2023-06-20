<script setup>
import Logo from './Logo.vue'
import LoggedInUser from './loggedInUser.vue'
import BtnsLogin from './BtnsLogin.vue'

import { computed } from 'vue';
import { useUserStore } from '../../stores/user.js';

const storeUser = useUserStore()

const user = computed(() => storeUser.user)

</script>
<template> 
  <div class="header">
    <Logo />
    <LoggedInUser v-if="user.nickname"/>
    <BtnsLogin v-if="!user.nickname" />
  </div>
</template>

<style scoped>
.header {
  background-color: var(--dark);
  color: var(--white);
  min-height: 60px;
  max-height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  font-weight: 700;
}
</style>
