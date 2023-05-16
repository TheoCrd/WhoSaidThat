<template>
  <div class="app">
    <HeaderPage />
    <router-view/>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
export default {
  name: "App",
  components: {
    HeaderPage
  },
};
</script>

<style lang = "scss">

:root {
  --primary: #D81E5B;
  --secondary: #8A4FFF;
  --tertiary: #32CBFF;
  --dark: #131A26;
  --light: #EEE;
  --grey: #848484;
}
body{
background-image: url("./assets/bg@2x.png"); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>