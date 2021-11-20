<template>
  <div>
    <unicorn-header></unicorn-header>
    <div class="flex justify-center h-screen">
      <div class="inline-flex justify-center flex-wrap h-full">
        <unicorn-card
                class="w-96"
                v-for="(item, index) in unicorns"
                :key="index"
                :nom="item.nom"
                :description="item.description"
                :image="item.image"
        />
      </div>
    </div>
    <unicorn-footer></unicorn-footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import UnicornHeader from "../components/unicornHeader.vue";
import UnicornFooter from "../components/unicornFooter.vue";
import UnicornCard from "../components/unicornCard.vue";
import { UNICORN_STORE } from "../store/constants"

export default defineComponent({
  name: 'Home',
  components: {UnicornCard, UnicornFooter, UnicornHeader},
  computed: {
    unicorns() {
      return this.$store.getters[UNICORN_STORE.GETTERS.GET_UNICORNS];
    }
  },
})
</script>

