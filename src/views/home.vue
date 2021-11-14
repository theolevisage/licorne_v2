<template>
  <div class="flex h-screen bg-orange-400">
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: 'Home',
  components: {HelloWorld}
})
</script>

