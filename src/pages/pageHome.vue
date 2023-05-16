<template>
<div class="app">
        <div class = "quote-unique">
        <QuoteRandom :quote="quote"  />
        </div>
        <div class="button-container">
        <button v-on:click="retrieveData()">NEW QUOTE</button>
        </div>
        <QuoteList :quotes="quotes" />
</div>
</template>
  
  <script>

  import QuoteRandom from '../components/QuoteRandom.vue';
  import QuoteList from '../components/QuoteList.vue';
  import { getAllAnime, getQuoteData } from '@/services/api/quoteAPI.js';
  export default {
    name: 'HomePage',
    components: {
      QuoteRandom,
      QuoteList
    },
    data() {
      return {
        quote: {
          character: '',
          anime: '',
          content: ''
        },
        quotes: [],
        selected: 'Select an Anime',
        names:[],
      }
    },
    created() {
      this.retrieveData();
      this.retrieveAllAnimeData();
    },
    methods: {
      async retrieveData() {
        const data = await getQuoteData();
        if (this.quote.content) {
          this.quotes = [...this.quotes, this.quote];
        }
        this.quote = {
          anime: data.anime,
          character: data.character,
          content: data.quote
        }
      },
      async retrieveAllAnimeData(){
        const data = await getAllAnime();
        this.names = data;
      }
    }
  }
  </script>
  
<style lang="scss">

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
			transform: scale(1.05); // Add the desired transformation on hover
    }
  }
}

.quote-unique{
  margin-top: 5em;
}
</style>