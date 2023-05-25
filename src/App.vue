<template>
  <div class="main-container">
    <HeaderPage />
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "@/components/Header-Footer/HeaderPage.vue";
import FooterPage from "@/components/Header-Footer/FooterPage.vue";
export default {
  name: "App",
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
:root {
  --primary: #d81e5b;
  --secondary: #8a4fff;
  --tertiary: #32cbff;
  --dark: #131a26;
  --light: #eee;
  --grey: #848484;
  --yellow: #ecde0d;
}
body {
  background-image: url("./assets/main-bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
