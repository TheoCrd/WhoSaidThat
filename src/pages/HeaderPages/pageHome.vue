<template>
  <div class="quote-random">
    <h2>Random quote</h2>
    <QuoteRandom :quote="quote" />
  </div>
  <div class="button-container">
    <button v-on:click="retrieveData()">NEW QUOTE</button>
  </div>
  <QuoteList :quotes="quotes" />
</template>

<script>
import QuoteRandom from "../../components/QuoteRelated/QuoteRandom.vue";
import QuoteList from "../../components/QuoteRelated/QuoteList.vue";
import { getRandomQuoteData } from "@/services/api/quoteAPI.js";
export default {
  name: "HomePage",
  components: {
    QuoteRandom,
    QuoteList,
  },
  data() {
    return {
      quote: {
        character: "",
        anime: "",
        content: "",
      },
      quotes: [],
    };
  },
  created() {
    this.retrieveData();
  },
  methods: {
    async retrieveData() {
      const data = await getRandomQuoteData();
      if (this.quote.content) {
        this.quotes = [...this.quotes, this.quote];
      }
      this.quote = {
        anime: data.anime,
        character: data.character,
        content: data.quote,
      };
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
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
      transform: scale(1.05);
    }
  }
}

.quote-random {
  margin-top: 5em;
}
</style>
