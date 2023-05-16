<template>
<div class="test">
  <SearchingTest @search="searchAnime" :initialAnime="anime" />
    <QuoteGallery2 v-if="anime" :anime="anime" />
	</div>
</template>

<script>
import SearchingTest from '../components/SearchingTest.vue';
import QuoteGallery2 from '../components/QuoteGallery2.vue';
export default {
  name: 'secondPage',
  components:{
    SearchingTest,
    QuoteGallery2
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