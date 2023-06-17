<script setup>
import Logo from './Logo.vue'
import LoggedInUser from './loggedInUser.vue'

</script>
<template> 
  <div class="header">
    <Logo />
    <LoggedInUser />
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
