<template>
  <div class="main-wrapper">
    <SearchingCharacter
      @search="searchCharacter"
      :initialCharacter="character"
    />
    <QuoteGalleryCharacter v-if="character" :character="character" />
  </div>
</template>

<script>
import SearchingCharacter from "../../components/SearchRelated/SearchingCharacter.vue";
import QuoteGalleryCharacter from "../../components/QuoteRelated/QuoteGalleryCharacter.vue";
export default {
  name: "SearchCharacter",
  components: {
    SearchingCharacter,
    QuoteGalleryCharacter,
  },
  data() {
    return {
      character: localStorage.getItem("searchedCharacter") || "",
    };
  },
  methods: {
    searchCharacter(character) {
      this.character = character;
      localStorage.setItem("searchedCharacter", character);
    },
  },
};
</script>

<style></style>
