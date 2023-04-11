<template>
<v-app id="inspire">
    <div class="app">
        <HeaderPage />
    </div>
  </v-app>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';

export default {
    name: 'secondPage',
    components: {
        HeaderPage,
    },
}
</script>

<style>
#inspire{
  background-image: url("../assets/bg@2x.png"); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>