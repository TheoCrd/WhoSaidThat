<template>
  <h2>
    You have <span class="counter">&nbsp;{{ bookmarkCount }}&nbsp;</span>
    {{ quoteNumberAgree }} as bookmarks
  </h2>
  <div v-if="bookmarks.length === 0" class="no-bookmarks">
    <p>No bookmarks found.</p>
  </div>
  <div v-else>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by Anime or Character (e.g. Naruto)"
      />
    </div>
    <div class="quote-gallery">
      <div
        v-for="(bookmark, index) in filteredBookmarks"
        :key="index"
        class="quote-item"
      >
        <p><b>Anime:</b> {{ bookmark.anime }}</p>
        <p><b>Character:</b> {{ bookmark.character }}</p>
        <p><b>Quote:</b> {{ bookmark.quote }}</p>
        <button @click="removeBookmark(bookmark)" class="remove-button">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageBookmarks",
  data() {
    return {
      bookmarks: [],
      searchQuery: "",
    };
  },
  created() {
    // Load bookmarks from local storage
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    this.bookmarks = bookmarks;
  },
  computed: {
    filteredBookmarks() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.bookmarks.filter(
        (bookmark) =>
          bookmark.anime.toLowerCase().includes(searchQuery) ||
          bookmark.character.toLowerCase().includes(searchQuery)
      );
    },
    bookmarkCount() {
      return this.bookmarks.length;
    },
    quoteNumberAgree() {
      const count = this.bookmarkCount;
      if (count === 1) {
        return "quote";
      } else {
        return "quotes";
      }
    },
  },
  methods: {
    removeBookmark(bookmark) {
      const index = this.bookmarks.indexOf(bookmark);
      if (index !== -1) {
        this.bookmarks.splice(index, 1);
        localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
      }
    },
  },
};
</script>

<style>
h2,
.no-bookmarks {
  display: flex;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 0.5%;
  color: var(--light);
}

.quote-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 1%;
}

.quote-item {
  background-color: #9c62b4;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1em;
  height: 100%;
}

.quote-item > p {
  color: var(--light);
}

.search-bar {
  background-color: #9c62b4;
  padding: 8px;
  border-radius: 4px;
  margin: 0 auto;
  width: 50%;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  color: var(--light);
  font-size: 16px;
  border: 1px solid #9c62b4;
  border-radius: 4px;
  background-color: #9c62b4;
}

input[type="text"]::placeholder {
  color: var(--light);
}

input[type="text"]:focus {
  outline: none;
  border-color: #333;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}

.remove-button {
  padding: 8px 16px;
  background-color: #7a488f;
  color: var(--light);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: auto;
}

.remove-button:hover {
  background-color: #9c62b4;
}
</style>
