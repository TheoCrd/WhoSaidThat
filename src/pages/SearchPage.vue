<template>
	<div class="search-page">
		<h1 v-if="search">You've searched {{ search }} !</h1>
		<h1 v-else>Find quotes by anime</h1>
		<SearchBar v-on:submitForm="formSubmition" v-on:inputForm="inputDetected" :search="search" v-on:update:search="search = $event"/>
		<div class="sort-filter-bar">
			<div class="sort-input">
				<label for="anime-sort">Sort by : </label>
				<select v-model="animeSortType" id="anime-sort">
					<option value="None" selected>None</option>

					<option value="AZName">Name (A to Z)</option>
					<option value="ZAName">Name (Z to A)</option>
				</select>
			</div>
		</div>
		
		<div class="search-result">
			<QuoteGallery :quotes="quotesData" :selectedAnime = "search"/>
		</div>
	</div>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import QuoteGallery from '@/components/QuoteGallery.vue';
//import QuoteCard from "@/components/QuoteCard";
import { getSearchedQuoteByAnime } from '@/services/api/quoteAPI';

export default {
	name: 'SearchPage',
	components: {
		SearchBar,
		QuoteGallery,
		//QuoteCard
	},
	data() {
		return {
			quotesData: [],
			search: localStorage.getItem('search') || '',
			searchWord: localStorage.getItem('search') || '',
			currentPage: 0,

			animeSortType: 'None',
		}
	},
	computed: {
		animeComputedData: function () {
			let data
			switch (this.animeSortType) {
				case 'None':
					data = this.quotesData
					break

				case 'AZName':
					data = this.quotesData.slice(0).sort((a, b) => {
						if (a.anime > b.anime) {
							return 1
						}
						if (b.anime > a.anime) {
							return -1
						}
						return 0
					})
					break
				case 'ZAName':
					data = this.quotesData.slice(0).sort((a, b) => {
						if (a.anime > b.anime) {
							return -1
						}
						if (b.title > a.title) {
							return 1
						}
						return 0
					})
					break

				default:
					break
			}
			return data
		},
	},
	created() {
      this.retrieveAnimeQuoteData();
    },
	methods: {
		
			formSubmition: function () {
			this.quotesData = []
			this.retrieveSearchedAnimeQuoteData()
			this.searchWord = this.search
		},

		inputDetected: function () {
			this.setLocalStorage()
			this.currentPage = 0
		},

		setLocalStorage: function () {
			localStorage.setItem('search', this.search)
		},

		async retrieveAnimeQuoteData() {
			const data = await getSearchedQuoteByAnime(this.search,this.currentPage);
			this.quotesData = {
				anime: data.anime,
				character: data.character,
				content: data.quote
			}
			this.currentPage++;
		},
	}
}
</script>

<style scoped>
.search-page{
	margin-left: 10px;
}
.search-page > h1 {
	margin: 1px 0 20px 0;
}

.search-bar {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	margin-bottom: 16px;
}

.search-bar > form {
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.search-bar input {
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 4px;
	padding: 10px 15px;
	outline: none;
	color: black;
}

.search-bar button {
	background: #307351;
	border: none;
	height: 100%;
	aspect-ratio: 1;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.search-bar > button.search-delete {
	background: #b41c1c;
	border: none;
	height: 100%;
	aspect-ratio: 1;
	border-radius: 100px;
}

.search-bar > button:hover {
	cursor: pointer;
}

.search-result {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	margin-top: 16px;
}

.sort-filter-bar {
	display: flex;
	align-items: center;
	gap: 50px;
}

.filters {
	display: flex;
	align-items: center;
	gap: 10px;
}

@media screen and (max-width: 1023px) {
	.sort-filter-bar {
		flex-direction: column;
		align-items: baseline;
		gap: 10px;
	}
}

@media screen and (max-width: 650px) {
	.filters {
		display: flex;
		flex-direction: column;
		align-items: baseline;
	}
}
</style>
