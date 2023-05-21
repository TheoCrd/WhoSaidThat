<template>
	<div v-if="loading">
		<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
	</div>
	<div v-else>
		<div class="test">
			<div class="label-container">
				<label for="animes">Filter by anime:</label>
					<select id="anime" v-model="selectedAnime">
						<option value="">All</option>
						<option v-for="anime in filterAnimes" :key="anime" :value="anime">{{ anime }}</option>
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
</template>

<script>
import QuoteCard from "@/components/QuoteCard.vue";
import { getSearchedQuoteByCharacter } from '@/services/api/quoteAPI.js';

export default {
name: 'QuoteGalleryCharacter',
components:{
	QuoteCard
},
props: {
	character: {
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
	selectedAnime: '',
    allAnimes: [],
	};
},
watch: {
	character: {
	handler: 'fetchQuotes',
	immediate: true,
	},
	selectedAnime() {
		this.filterQuotes();
	}
},
methods: {

	redirectToQuoteDetails(quote) {
		this.$router.push({
			name: "QuoteDetailsCharacter",
			query: {
				anime: encodeURIComponent(quote.anime),
				character: encodeURIComponent(quote.character),
				quote: encodeURIComponent(quote.quote),
				originPage: "Third"
			},
		});
	},
	async fetchQuotes() {
	this.loading = true;
	const data = await getSearchedQuoteByCharacter(this.character, this.currentPage);
	this.quotes = data;
	this.hasMore = data.length > 0;
	this.loading = false;
	this.visibleQuotes = data.slice(0, 10);
	this.allAnimes = [...new Set(data.map(quote => quote.anime))];
	},

	async fetchMoreQuotes() {
	this.loading = true;
	this.currentPage++;
	const data = await getSearchedQuoteByCharacter(this.character, this.currentPage);
	this.quotes = [...this.quotes, ...data];
	this.hasMore = data.length > 0;
	this.loading = false;
	this.visibleQuotes = [...this.visibleQuotes, ...data];
	this.allAnimes = [...new Set([...this.allAnimes, ...data.map(quote => quote.anime)])];
    },

	loadLess() {
    this.visibleQuotes = this.visibleQuotes.slice(0, -10);
  },

  filterQuotes() {
		if (this.selectedAnime === '') {
			this.visibleQuotes = this.quotes.slice(0, 10);
		} else {
			this.visibleQuotes = this.quotes.filter(quote => quote.anime === this.selectedAnime);
		}
	},
	
},
computed: {
    filterAnimes() {
    if (this.selectedAnime === '') {
      return this.allAnimes;
    } else {
      const animes = this.allAnimes.filter(anime => anime !== this.selectedAnime);
      return [this.selectedAnime, ...animes];
    }
  }
  }
};
</script>

<style>
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
}

select option {
	color: white;
	font-size: 1.2em;
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

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
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