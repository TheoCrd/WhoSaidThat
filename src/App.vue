<template>
	<div class="app">
		<HeaderPage title="Who said that" />
		<QuoteUnique :quote="quote" />
		<div class="button-container">
			<button @click="fetchQuote">NEW QUOTE</button>
		</div>
		<QuoteList :quotes="quotes" />
	</div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import QuoteUnique from './components/QuoteUnique.vue';
import QuoteList from './components/QuoteList.vue';
import {getQuoteData} from '@/services/api/quoteAPI.js';

export default {
	name: 'App',
	components: {
		HeaderPage,
		QuoteUnique,
		QuoteList
	},
	data() {
		return {
			quote: {
				content: '',
				character: '',
				anime: ''
			},
			quotes: []
		}
	},
	created () {
		this.fetchQuote();
	},
	methods: {
		async fetchQuote(){
         const data = await getQuoteData();
        if (this.quote.content){
			this.quotes = [...this.quotes, this.quote];
		}
      this.quote = {
          anime: data.anime,
          character: data.character,
          content: data.quote
      }
    }
  }
}
</script>

<style lang="scss">
:root {
	--primary: #D81E5B;
	--secondary: #8A4FFF;
	--tertiary: #32CBFF;
	--dark: #131A26;
	--light: #EEE;
	--grey: #848484;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira Sans', sans-serif;
}
.button-container {
	display: flex;
	justify-content: center;
	padding: 0px 32px;
	margin: 64px auto;
	button {
		border: none;
		outline: none;
		background-color: var(--primary);
		padding: 16px 32px;
		border-radius: 99px;
		color: var(--light);
		font-size: 1.5em;
		font-weight: 700;
		text-transform: uppercase;
		cursor: pointer;
		transition: 0.4s;
		&:hover {
			background-color: var(--secondary);
		}
	}
}
</style>