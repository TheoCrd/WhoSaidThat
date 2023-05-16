<template>
  <div>
    <h2>Quote Details</h2>
    <div>
      <h3>Anime: {{ anime }}</h3>
      <h4>Character: {{ character }}</h4>
      <p>Quote: {{ quote }}</p>
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteDetails",
  methods:{
    goBack() {
      this.$router.push('/pageSecond');
    },
  },
  data() {
    return {
      anime: "",
      character: "",
      quote: "",
    };
  },
  created() {
    this.anime = decodeURIComponent(this.$route.query.anime);
    this.character = decodeURIComponent(this.$route.query.character);
    this.quote = decodeURIComponent(this.$route.query.quote);
  },
};
</script>

<style>

</style>

