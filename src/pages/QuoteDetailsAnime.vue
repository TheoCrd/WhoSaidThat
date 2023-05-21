<template>
  <div>
    <h2>Quote Details</h2>
    <div>
      <h3>Anime: {{ anime }}</h3>
      <h4>Character: {{ character }}</h4>
      <p>Quote: {{ quote }}</p>
      <button @click="goBack">Go Back</button>
      <br/>
      <button @click="toggleBookmark">{{ bookmarked ? 'Remove Bookmark' : 'Bookmark' }}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "QuoteDetailsAnime",
  data() {
    return {
      bookmarked: false,
      anime: "",
      character: "",
      quote: "",
    };
  },
  methods:{
    goBack() {
      this.$router.push('/pageSecond');
    },
    toggleBookmark() {
      this.bookmarked = !this.bookmarked;

      // Get the current bookmarks from local storage
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

      if (this.bookmarked) {
        // Add the quote to bookmarks
        bookmarks.push({
          anime: this.anime,
          character: this.character,
          quote: this.quote,
        });
      } else {
        // Remove the quote from bookmarks
        bookmarks.splice(
          bookmarks.findIndex((bookmark) => bookmark.quote === this.quote),
          1
        );
      }

      // Save the updated bookmarks to local storage
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    },
 
  },
  created() {
    this.anime = decodeURIComponent(this.$route.query.anime);
    this.character = decodeURIComponent(this.$route.query.character);
    this.quote = decodeURIComponent(this.$route.query.quote);

    // Check if the current quote is already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    this.bookmarked = bookmarks.some((bookmark) => bookmark.quote === this.quote);
  },
};
</script>

<style>

</style>

