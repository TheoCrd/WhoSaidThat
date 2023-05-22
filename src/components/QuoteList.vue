<template>
	<section class="quote-list">
		<div v-if="quotes.length > 0" class = "history">Quotes history</div>
		<div class="quote" v-for="(quote, index) in quotes.slice().reverse()" :key="index">
			<div class="quote-header">
				{{ quote.content }}
			</div>
		</div>
		<button v-if="quotes.length > 0" class = "refresh-button" @click="refreshPage" >Refresh</button>
	</section>
</template>

<script>
export default {
	props: ['quotes'],
	methods: {
		refreshPage() {
			window.location.reload();
		}
	}
}
</script>

<style lang="scss" scoped>
	.quote-list {
		padding: 32px;
		max-width: 720px;
		margin: 0 auto;
		color: rgb(255, 255, 255);
		font-weight: bolder;
		.quote {
			background-color: var(--secondary);
			padding: 16px;
			border-radius: 16px;
			margin-bottom: 16px;
			font-family: 'Roboto', sans-serif;
			transition: 0.4s ease-in-out;
			
			&-header {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				line-height: 1.2em;
				max-height: 1.2em;
			} 
			&:hover {
				transform: scale(1.05);
				.quote-header {
					white-space: unset;
					max-height: unset;
				}
			}
		}
	}

	.history{
		display: flex;
		justify-content: center;
		margin-bottom: 2%;
		font-weight: 700;
		font-size: 1.75em;
	}
	.refresh-button{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 0 auto;
		margin-bottom: 2%;
		width: fit-content;
		border: none;
		outline: none;
		background-color: var(--primary);
		padding: 16px 32px;
		border-radius: 25px;
		color: var(--light);
		font-size: 1em;
		font-weight: 700;
		text-transform: uppercase;
		cursor: pointer;
		transition: 0.4s;

		&:hover {
		background-color: var(--secondary);
		transform: scale(1.05); // Add the desired transformation on hover
    }
	}
</style>