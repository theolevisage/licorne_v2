<template>
  <div class="flex h-screen bg-blue-400 ">
    <header/>
    <div class="inline-flex flex-wrap h-full">
      <unicorn-card
              class="w-4/10"
              v-for="(item, index) in unicorns"
              :key="index"
              :nom="item.nom"
              :description="item.description"
              :image="item.image"
      />
    </div>
    <footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from "../components/HelloWorld.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import UnicornCard from "../components/unicornCard.vue";
import { UNICORN_STORE } from "../store/constants"

export default defineComponent({
  name: 'Home',
  components: {UnicornCard, Footer, Header, HelloWorld},
  computed: {
    unicorns() {
      return this.$store.getters[UNICORN_STORE.GETTERS.GET_UNICORNS];
    }
  },
})
</script>

