<template>
	<div class = "search-bar">
		<form @submit.prevent="searchQuotes">
			<div class="input-container">
				<input type="text" v-model="character" id="character" placeholder="Search by Character (e.g. Ichigo)" class = "text-input">
				<v-icon class="search-icon" color="white" icon = "mdi-magnify" @click="searchQuotes"></v-icon>
			</div>
		</form>
	</div>
</template>

<script>
export default {
name: 'SearchingTestCharacter',
props: {
    initialCharacter: {
      type: String,
      default: '',
    },
},
data() {
	return {
		character: this.initialCharacter,
	};
},
methods: {
	searchQuotes() {
	this.$emit('search', this.character);
	},
},
};
</script>

<style scoped>
.search-bar{
	width: 50%;
	max-width: 500px;
	margin: 0 auto;
	margin-top: 0.5%;
}
.text-input {
	color: white;
	padding: 0 12px;
	width: 100%;
	box-sizing: border-box;
}

.input-container {
	position: relative;
	display: inline-flex;
	align-items: center;
	width: 100%;
}

.input-container .search-icon {
	position: absolute;
	right: 8px;
	cursor: pointer;
	z-index: 1;
}

@media screen and (max-width: 480px) {
	.text-input {
	padding-right: 20px;
	}
}

</style>