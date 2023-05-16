<template>
	<div>
	  <Search @search="performSearch"/>
	  <QuoteGallery :quotes="quotes"/>
	</div>
  </template>
  
  <script>
  import SearchingTest from "@/components/SearchingTest.vue";
  import QuoteGallery from './QuoteGallery.vue';
  
  export default {
	name: 'SearchingPage',
	components: {
	  SearchingTest,
	  QuoteGallery
	},
	data() {
	  return {
		quotes: []
	  };
	},
	methods: {
	  async performSearch(anime) {
		const response = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${anime}`);
		const data = await response.json();
		this.quotes = data;
	  }
	}
  };
  </script>