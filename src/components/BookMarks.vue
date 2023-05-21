<template>
    <div>
      <h2>Bookmarks</h2>
      <div v-for="quote in bookmarkedQuotes" :key="quote.quote">
        <h3>Anime: {{ quote.anime }}</h3>
        <h4>Character: {{ quote.character }}</h4>
        <p>Quote: {{ quote.quote }}</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "BookMarks",
    props: {
      bookmarkedQuotes: {
        type: Array,
        default: () => [],
      },
    },
    // ...
  };
</script>
  