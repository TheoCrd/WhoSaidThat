<template>
  <div class="main-container">
    <HeaderPage />
    <router-view/>
    <FooterPage/>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  name: "App",
  components: {
    HeaderPage,
    FooterPage
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
.main-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>