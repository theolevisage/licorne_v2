<template>


  <head>
      <meta charset="utf-8">
      <title>Unicorn Renting</title>
      <link rel="stylesheet" href="..\assets\css\css.css">
      <link rel="stylesheet" type="text/css" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
  </head>


  <Header/>

        <UnicornRegister/>

  <Footer/>

</template>

<style>
    @import '..\assets\css\css.css';
</style>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Header from "../components/header.vue";
    import Footer from "../components/footer.vue";
    import UnicornRegister from "../components/unicornRegister.vue";



    export default defineComponent({
      name: 'Home',
      components: {UnicornRegister, Footer, Header},
    })

</script>




