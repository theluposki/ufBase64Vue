<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'

const storeLayout = useLayoutStore()

const activeMenuConversation = computed(() => storeLayout.activeMenuConversation)

const fnActiveMenuConversation = () => storeLayout.fnActiveMenuConversation()

</script>
<template>
  <div class="btn-conversatio" @click="fnActiveMenuConversation">
    <i class='bx bxs-conversation'></i>
  </div>
</template>

<style>
.btn-conversatio {
  position: absolute;
  z-index: 10000;
  top: 30%;
  right: 0;

  background-color: rgba(33,33,33,0.4);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 50px;

  border-radius: 12px 0 0 12px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all ease 2s;
  transform: translateY(-50%);
}

.btn-conversatio:hover {
  transition: border ease .4s;
  border-right: solid 2px var(--dark);
}

.btn-conversatio:active {
  scale: .95;
}
</style>
