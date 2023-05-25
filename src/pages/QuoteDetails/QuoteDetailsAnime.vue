<template>
  <h2>Quote Details</h2>
  <div class="quote">
    <div class="quote-content">
      {{ quote }}
    </div>
    <div class="quote-info">
      <div class="quote-info-anime">
        {{ anime }}
      </div>
      <div class="quote-info-character">
        {{ character }}
      </div>
    </div>
  </div>
  <div class="button-wrapper">
    <button @click="goBack">Go Back</button>
    <br />
    <button @click="toggleBookmark">
      {{ bookmarked ? "Remove Bookmark" : "Bookmark" }}
    </button>
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
  methods: {
    goBack() {
      this.$router.push("/SearchQuoteAnime");
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
    this.bookmarked = bookmarks.some(
      (bookmark) => bookmark.quote === this.quote
    );
  },
};
</script>

<style lang="scss">
.quote {
  position: relative;
  padding: 32px;
  margin: 0 auto;
  max-width: 720px;
  font-family: "Fira-Sans", sans-serif;
  &-content {
    position: relative;
    font-size: 1.75em;
    font-weight: 600;
    background-color: var(--dark);
    color: var(--light);
    padding: 48px 32px;
    border-radius: 16px;
    &:before {
      content: "\“";
      color: var(--grey);
      margin: 0 2px;
    }
    &:after {
      content: "\”";
      color: var(--grey);
      margin: 0 2px;
    }
  }
  &-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 32px;
    transition: 0.4s;
    &-character,
    &-anime {
      position: absolute;
      padding: 10px 16px;
      font-size: 1.2em;
      font-weight: 400;
      border-radius: 50px;
      color: var(--light);
      text-align: center;
    }
    &-character {
      top: calc(100% - 32px);
      right: 0px;
      transform: translateY(-50%);
      background-color: var(--secondary);
    }
    &-anime {
      top: 10px;
      left: 0px;
      background-color: var(--tertiary);
      color: var(--dark);
    }
  }
}

.button-wrapper {
  display: flex;
  justify-content: center;
  padding: 0px 32px;
  margin: 64px auto;

  button {
    border: none;
    outline: none;
    background-color: var(--primary);
    padding: 16px 32px;
    border-radius: 99px;
    color: var(--light);
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.4s;
    margin-right: 10px;
    margin-left: 10px;

    &:hover {
      background-color: var(--secondary);
      transform: scale(1.05); // Add the desired transformation on hover
    }
  }
}
</style>
