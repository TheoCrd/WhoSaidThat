<template>
<div>
	<div v-if="loading">Loading...</div>
	<div v-else>
		<div class="test">
			<h2>Quotes from {{ anime }}</h2>
			<div>
				<label for="characters">Filter by character:</label>
				<select id="characters" v-model="selectedCharacter">
					<option value="">All</option>
					<option v-for="character in characters" :key="character" :value="character">{{ character }}</option>
				</select>
			</div>
		</div>
		<div class="quote-cards">
			<QuoteCard v-for="quote in visibleQuotes" :key="quote.id" :quoteData="quote" @click="redirectToQuoteDetails(quote)" />
		</div>
		<div class="buttons-container">
			<button v-if="hasMore" @click="fetchMoreQuotes">Load more</button>
			<p v-else>No more quotes.</p>
			<button v-if="visibleQuotes.length > 10" @click="loadLess">Load less</button>
		</div>
	</div>
</div>
</template>

<script>
import QuoteCard from "@/components/QuoteCard.vue";

export default {
name: 'QuoteGallery2',
components:{
	QuoteCard
},
props: {
	anime: {
	type: String,
	required: true,
	},
},
data() {
	return {
	quotes: [],
	visibleQuotes: [],
	currentPage:0,
	loading: false,
	hasMore: true,
	selectedCharacter: '',
    allCharacters: [],
	};
},
watch: {
	anime: {
	handler: 'fetchQuotes',
	immediate: true,
	},
	selectedCharacter() {
		this.filterQuotes();
	}
},
methods: {

	redirectToQuoteDetails(quote) {
		this.$router.push({
			name: "QuoteDetails",
			query: {
				anime: encodeURIComponent(quote.anime),
				character: encodeURIComponent(quote.character),
				quote: encodeURIComponent(quote.quote),
			},
		});
	},
	async fetchQuotes() {
	this.loading = true;
	const response = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${this.anime}&page=${this.currentPage}`);
	const data = await response.json();
	this.quotes = data;
	this.hasMore = data.length > 0;
	this.loading = false;
	this.visibleQuotes = data.slice(0, 10);
	this.allCharacters = [...new Set(data.map(quote => quote.character))];
	},

	async fetchMoreQuotes() {
	this.loading = true;
	this.currentPage++;
	const response = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${this.anime}&page=${this.currentPage}`);
	const data = await response.json();
	this.quotes = [...this.quotes, ...data];
	this.hasMore = data.length > 0;
	this.loading = false;
	this.visibleQuotes = [...this.visibleQuotes, ...data];
	this.allCharacters = [...new Set([...this.allCharacters, ...data.map(quote => quote.character)])];
    },

	loadLess() {
    this.visibleQuotes = this.visibleQuotes.slice(0, -10);
  },

  filterQuotes() {
		if (this.selectedCharacter === '') {
			this.visibleQuotes = this.quotes.slice(0, 10);
		} else {
			this.visibleQuotes = this.quotes.filter(quote => quote.character === this.selectedCharacter);
		}
	},
	
},
computed: {
    characters() {
    if (this.selectedCharacter === '') {
      return this.allCharacters;
    } else {
      const characters = this.allCharacters.filter(character => character !== this.selectedCharacter);
      return [this.selectedCharacter, ...characters];
    }
  }
  }
};
</script>

<style>
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

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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