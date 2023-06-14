<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '../../stores/layout.js'
const storeLayout = useLayoutStore()

const activeMenuConversation = computed(() => storeLayout.activeMenuConversation)

const fnActiveMenuConversation = () => storeLayout.fnActiveMenuConversation()
</script>

<template>
  <div class="menu-container">
    <div class="btn-closed" v-if="activeMenuConversation" @click="fnActiveMenuConversation">
      <i class='bx bx-chevron-right' ></i>
    </div>
    
    <div class="search-conversation">
      <input type="text" class="input" placeholder="Pesquisar">
    </div>
    
    <ul class="conversations">
      <li class="c-item">
        <img class="picture" src="https://i.pravatar.cc/150?img=38" alt="friend picture" />
        <div class="infos">
          <span class="name">Monique</span>
          <span class="lastMessage">ta combinado então</span>
        </div>
        <div class="time">
          00:00
        </div>
        <span class="offline"></span>
      </li>
      <li class="c-item">
        <img class="picture" src="https://i.pravatar.cc/150?img=32" alt="friend picture" />
        <div class="infos">
          <span class="name">Mylena</span>
          <span class="lastMessage">onde se tá</span>
        </div>
        <div class="time">
          03:52
        </div>
        <span class="online"></span>
      </li>
      <li class="c-item">
        <img class="picture" src="https://i.pravatar.cc/150?img=33" alt="friend picture" />
        <div class="infos">
          <span class="name">Luposki</span>
          <span class="lastMessage">Suave</span>
        </div>
        <div class="time">
          12:10
        </div>
        <span class="offline"></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-container {
  position: absolute;
  top: 2px;
  right: 0;
  z-index: 10000;

  background-color: var(--dark);
  border-radius: 6px 0 0 6px;
  color: var(--white);

  width: 200px;
  height: calc(100vh - 78px);
  padding: 12px;
}

.btn-closed {
  position: absolute;
  top: 0;
  left: 0;
  
  background-color: transparent;
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: calc(100vh - 78px);

  border-radius: 0 12px 12px 0;
  cursor: pointer;
  font-size: 2.5rem;
  transition: all ease 2s;
}

.search-conversation {
  display: flex;
  align-items: center;
  margin: 0 0 12px 0;
  background: var(--dark2);
  border-radius: 4px;
}

.input {
  width: 100%;
  min-height: 40px;
  padding: 0px;
  caret-color: var(--blue-l);
  color: var(--white);
  font-size: 1.6rem;
  
  background-color: transparent;
  border: solid 1px transparent;
  outline: solid 1px transparent;
}

.input:hover, .input:focus {
  border-bottom: solid 1px var(--blue-l);
}


.conversations {
  width: 100%;
  height: calc(100vh - 148px);
  padding: 12px 0;
  
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.c-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--dark2);
  border-radius: 25px 12px 12px 25px;
  max-height: 50px;
}
.picture {
  width: 50px;
  height: 50px;
  object-fit: cover;
  
  border-radius: 50%;
}

.infos {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 40px;
  max-height: 40px;
  padding: 4px 0;
}

.name {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--white2);
}

.lastMessage {
  font-size: .8rem;
  color: #555;
  line-height: 1;
}

.time {
  font-size: 0.6rem;
  padding: 12px;
  
  display: flex;
  flex-direction: column;
  min-height: 50px;
  
  border-radius: 0 12px 12px 0;
}

.online {
  position: absolute;
  bottom: -1px;
  left: -1px;
  
  min-width: 15px;
  max-width: 15px;
  min-height: 15px;
  max-height: 15px;
  border-radius: 50%;
  background-color: var(--green);
  
  display: flex;
}


.offline {
  position: absolute;
  bottom: -1px;
  left: -1px;
  
  min-width: 15px;
  max-width: 15px;
  min-height: 15px;
  max-height: 15px;
  border-radius: 50%;
  background-color: #555;
  
  display: flex;
}

</style>
