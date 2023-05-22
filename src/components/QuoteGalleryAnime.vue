<template>
	<div v-if="loading">
		<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
	</div>
	<div v-else>
		<div class="test">
			<div class="label-container">
				<label for="characters">Filter by character:</label>
					<select id="characters" v-model="selectedCharacter">
						<option value="">All</option>
						<option v-for="character in filterCharacters" :key="character" :value="character">{{ character }}</option>
					</select>
			</div>
		</div>
		<div class="quote-cards">
			<QuoteCard v-for="quote in visibleQuotes" :key="quote.id" :quoteData="quote" @click="redirectToQuoteDetails(quote)" />
		</div>
		<div class="buttons-container">
			<button v-if="hasMore" @click="fetchMoreQuotes" class = "button-load-more">Load more</button>
			<p v-else>No more quotes.</p>
			<button v-if="visibleQuotes.length > 10" @click="loadLess" class = "button-load-less">Load less</button>
		</div>
	</div>
</template>

<script>
import QuoteCard from "@/components/QuoteCard.vue";
import { getSearchedQuoteByAnime } from '@/services/api/quoteAPI.js';

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
		name: "QuoteDetailsAnime",
		query: {

			anime: encodeURIComponent(quote.anime),
			character: encodeURIComponent(quote.character),
			quote: encodeURIComponent(quote.quote),
		},
	});
},
async fetchQuotes() {
	this.loading = true;
	const data = await getSearchedQuoteByAnime(this.anime, this.currentPage);
	this.quotes = data;
	this.hasMore = data.length > 0;
	this.loading = false;
	this.visibleQuotes = data.slice(0, 10);
	this.allCharacters = [...new Set(data.map(quote => quote.character))];
},

async fetchMoreQuotes() {
	this.loading = true;
	this.currentPage++;
	const data = await getSearchedQuoteByAnime(this.anime, this.currentPage);
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
filterCharacters() {
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

<style scoped>
	.test {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2.5%;
	}

	.label-container {
		display: flex;
		align-items: center;
		background-color: #9a54b8;
		padding: 8px; 
		border-radius: 4px;
		width: 50%;
	}

	.label-container label {
		font-family: "Noto Sans JP", sans-serif;
		font-size: 1.2em;
		color: var(--light);
		margin-right: 8px;
	}

	select{
		color: white;
		width: 50%;
	}

	select option {
		color: white;
		background: #9a54b8;
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

	.button-load-more, .button-load-less {
		padding: 8px 16px;
		background-color: #7A488F;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: auto;
		margin-right: 10px;
		margin-bottom: 10px;
	}

	.button-load-more:hover, .button-load-less:hover {
		background-color: #9c62b4;
	}

	.lds-ring {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
		margin-top: 20%;
	}

	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid #ffffff;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #ffffff transparent transparent transparent;
	}

	/* loader animation section */

	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}

	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}

	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@media screen and (max-width: 1600px) {
		.quote-cards {
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

	@media screen and (max-width: 768px) {
		.label-container {
			flex-direction: column;
			align-items: flex-start;
		}
		.label-container label {
			margin-bottom: 8px;
		}
	}
</style>