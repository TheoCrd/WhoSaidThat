<template>
<v-app id="inspire">
    <div class="app">
        <HeaderPage />
    </div>
        <v-row
          class = "card-container"
        >
          <v-col
            v-for="card in cards"
            :key="card.title"
            :row="card.flex"
          >
            <v-card>
                <v-card-title class="text-black" v-text="card.title"></v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
  
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>
  
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
  </v-app>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';

export default {
    name: 'secondPage',
    components: {
        HeaderPage,
    },
    data(){
      return {
        cards: [
          { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
          { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
      }
    }
}
</script>

<style>
#inspire{
  background-image: url("../assets/bg@2x.png"); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.card-container{
  margin-top:1em;
}
</style>