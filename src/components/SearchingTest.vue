<template>
<div>
	<form @submit.prevent="searchQuotes">
	<label for="anime">Anime:</label>
	<input type="text" v-model="anime" id="anime">
	<button type="submit">Search</button>
	</form>
</div>
</template>

<script>
export default {
name: 'SearchingTest',
props: {
    initialAnime: {
      type: String,
      default: '',
    },
},
data() {
	return {
		anime: this.initialAnime,
	};
},
methods: {
	searchQuotes() {
	this.$emit('search', this.anime);
	},
},
};
</script>