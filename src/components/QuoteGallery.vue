<template>
<div>
	<div class="test">
		<h1>Quotes from {{ selectedAnime }}</h1>
	</div>
	<div class="quote-cards">
	<QuoteCard v-for="quote in displayedQuotes" :key="quote.id" :quoteData="quote" />
	</div>
	<div class="buttons-container">
		<button @click="loadMoreQuotes">Display quotes</button>
		<button v-if="currentPage > 1 || currentPage > 0" @click="loadLessQuotes">See Less</button>
	</div>
</div>
</template>

<script>
import QuoteCard from "@/components/QuoteCard.vue";

export default {
components: {
	QuoteCard,
},
data() {
	return {
	selectedAnime: "bleach",
	quotes: [],
	currentPage: 0,
	totalPages: 1,
	perPage: 10,
	};
},
computed: {
	displayedQuotes() {
	return this.quotes.slice(0, this.currentPage * this.perPage);
	},
},
methods: {
	getQuotes() {
	fetch(
		`https://animechan.vercel.app/api/quotes/anime?title=${this.selectedAnime}&page=${this.currentPage}`
	)
		.then((response) => response.json())
		.then((data) => {
		this.quotes = this.quotes.concat(data);
		this.totalPages = Math.ceil(this.quotes.length / this.perPage);
		})
		.catch((error) => {
		console.error("Error fetching quotes:", error);
		});
	},
	loadMoreQuotes() {
	this.currentPage++;
	this.getQuotes();
	},
	loadLessQuotes() {
	this.currentPage--;
	this.quotes = this.quotes.slice(0, this.currentPage * this.perPage);
	},
},
mounted() {
	this.getQuotes();
},
};
</script>
  
<style scoped>

.test{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

h1{
	text-align: center;
}
.quote-cards {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	padding-top: 20px;
	gap: 20px;
	width: 100%;
	justify-items: center;
}
.buttons-container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

@media screen and (max-width: 1600px) {
	.quote-cards{
		grid-template-columns: repeat(5, 1fr);
	}
}

@media screen and (max-width: 1023px) {
	.quote-cards {
		grid-template-columns: repeat(3, 1fr);
	}
}

@media screen and (max-width: 650px) {
	.quote-cards {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (max-width: 400px) {
	.quote-cards {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>