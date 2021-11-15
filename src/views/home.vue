<template>


  <head>
      <meta charset="utf-8">
      <title>Unicorn Renting</title>
      <link rel="stylesheet" href="..\assets\css\css.css">
      <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
  </head>


  <Header/>


  <div class="flex h-screen bg-blue-400 ">
    <div class="flex-wrap h-full row">
      <unicorn-card
              class="w-4/10"
              v-for="(item, index) in unicorns"
              :key="index"
              :nom="item.nom"
              :description="item.description"
              :image="item.image"
      />
    </div>
  </div>


  <Footer/>
</template>

<style>
  @import '..\assets\css\css.css';
</style>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import UnicornCard from "../components/unicornCard.vue";
import { UNICORN_STORE } from "../store/constants";



export default defineComponent({
  name: 'Home',
  components: {UnicornCard, Footer, Header},
  computed: {
    unicorns() {
      return this.$store.getters[UNICORN_STORE.GETTERS.GET_UNICORNS];
    }
  },
})

</script>




