<template>
  <div class="app">
    <div class="form">
      <!-- <select v-model="selected">
        <option v-for="name in names" :key="name" :value="name">
          {{ name }}
        </option>
      </select> -->
    </div>  
    <HeaderPage title="Who said that" />
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
        persistent-hint
        return-object
        single-line
        clearable
      ></v-select>
    </div>
     
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import QuoteUnique from './components/QuoteUnique.vue';
import QuoteList from './components/QuoteList.vue';
import { getAllAnime, getQuoteData } from '@/services/api/quoteAPI.js';
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
        character: '',
        anime: '',
        content: ''
      },
      quotes: [],
      selected: '',
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
  .app{
    background: #32CBFF;
  }
}</style>