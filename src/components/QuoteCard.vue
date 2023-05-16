<template>
        <div class="quote-card" ref="quoteCard">
            <img
                :src="imageSrc"
            />
            <router-link
                class="quote-card-overlay" :to="getQuoteDetailsLink(quoteData)"
                >
                <h4>{{ quoteData.anime }}</h4>
                <h5>{{ quoteData.character }}</h5>
            </router-link>
        </div>
</template>

<script>

import MyImage from '@/assets/bg-card.png';

export default {
    name: "QuoteCard",
    props: ["quoteData"],
    methods:{
        getQuoteDetailsLink(quote) {
            return `/quote?anime=${encodeURIComponent(quote.anime)}&character=${encodeURIComponent(quote.character)}&quote=${encodeURIComponent(quote.quote)}`;
        }
    },
    mounted(){
    },
    data() {
        return {
        imageSrc: MyImage
        };
    }
}
</script>

<style scoped>
.quote-card {
    position: relative;
    width: fit-content;
    border-radius: 5px;
    overflow: hidden;
    aspect-ratio: 1/1.3;
    width: 100%;
}

.quote-card > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.quote-card-overlay {
    width: 100%;
    height: 100%;
    background: rgba(215, 101, 231, 0.7);
    position: absolute;
    top: 100%;
    left: 0;
    transition: top 0.5s ease;
    text-decoration: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.quote-card-overlay > h5 {
    font-size: 18px;
    /* justify-self: flex-end; */
    color: black;
}

.quote-card-overlay > h4 {
    font-size: 18px;
    /* justify-self: flex-end; */
    color: white;
}

.quote-card-overlay > span {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: 100;
}

.quote-card:hover .quote-card-overlay {
    top: 0;
}
</style>
