<template>
<div class="test">
  <SearchingAnime @search="searchAnime" :initialAnime="anime" />
  <QuoteGalleryAnime v-if="anime" :anime="anime" />
	</div>
</template>

<script>
import SearchingAnime from '../components/SearchingAnime.vue';
import QuoteGalleryAnime from '../components/QuoteGalleryAnime.vue';
export default {
  name: 'SearchAnime',
  components:{
    SearchingAnime,
    QuoteGalleryAnime
  },
  data() {
    return {
      anime: localStorage.getItem('searchedAnime') || '',
    };
  },
  methods: {
    searchAnime(anime) {
      this.anime = anime;
      localStorage.setItem('searchedAnime', anime);
    },
  },
};
</script>

<style scoped>
</style>