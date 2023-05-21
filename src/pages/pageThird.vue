<template>
<div class="test">
  <SearchingTestCharacter @search="searchCharacter" :initialCharacter="character" />
    <QuoteGalleryCharacter v-if="character" :character="character" />
	</div>
</template>

<script>
import SearchingTestCharacter from '../components/SearchingTestCharacter.vue';
import QuoteGalleryCharacter from '../components/QuoteGalleryCharacter.vue';
export default {
  name: 'thirdPage',
  components:{
    SearchingTestCharacter,
    QuoteGalleryCharacter
  },
  data() {
    return {
      character: localStorage.getItem('searchedCharacter') || '',
    };
  },
  methods: {
    searchCharacter(character) {
      this.character = character;
      localStorage.setItem('searchedCharacter', character);
    },
  },
};
</script>

<style>
</style>