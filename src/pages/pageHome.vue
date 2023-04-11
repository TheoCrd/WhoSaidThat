<template>
  <v-app id="inspire">
    <div class="app">
        <HeaderPage />
        <div class = "quote-unique">
        <QuoteUnique :quote="quote"  />
        </div>
        <div class="button-container">
        <button v-on:click="retrieveData()">NEW QUOTE</button>
        </div>
        <QuoteList :quotes="quotes" />
        <div class = "select-menu">
        <v-select
          v-model="selected"
          label="Select an Anime"
          :items="names"
          bg-color = "red"
          persistent-hint
          return-object
          single-line
          clearable
        ></v-select>
        </div>
    </div>
  </v-app>
</template>
  
  <script>
  import HeaderPage from '../components/HeaderPage.vue';
  import QuoteUnique from '../components/QuoteUnique.vue';
  import QuoteList from '../components/QuoteList.vue';
  import { getAllAnime, getQuoteData } from '@/services/api/quoteAPI.js';
  export default {
    name: 'HomePage',
    components: {
      HeaderPage,
      QuoteUnique,
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

.app{
  background-image: url("../assets/bg@2x.png"); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.quote-unique{
  margin-top: 5em;
}
</style>