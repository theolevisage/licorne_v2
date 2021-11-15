<template>
  <div class="app">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import image from './assets/img/title.png'
import { UNICORN_STORE } from "./store/constants";

export default defineComponent({
  name: 'App',
  data() {
    return {
      isOpen: false,
      image: image
    }
  },
  beforeCreate() {
    this.$store.dispatch(UNICORN_STORE.ACTIONS.INITIALIZE_STORE);
  }
});
</script>

<style lang="scss" scoped>
</style>