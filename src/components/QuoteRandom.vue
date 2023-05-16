<template>
	<section class="quote" v-if="quote.content">
		<div class="quote-content">
			{{ quote.content }}
		</div>
		<div class="quote-info">
			<div class="quote-info-anime">
				{{ quote.anime }}
			</div>
			<div class="quote-info-author">
				{{ quote.character }}
			</div>
		</div>
	</section>
	<div v-else>
		<div class="quote-content-load">
			<!-- Loader animation divs -->
			<div class="lds-ring"><div></div><div></div><div></div><div></div></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["anime", "character", "quote"]
}
</script>

<style lang="scss" scoped>
.quote {
	position: relative;
	padding: 32px;
	margin: 0 auto;
	max-width: 720px;
	font-family: 'Fira-Sans', sans-serif;
	&-content {
		position: relative;
		font-size: 1.75em;
		font-weight: 600;
		background-color: var(--dark);
		color: var(--light);
		padding: 48px 32px;
		border-radius: 16px;
		&:before{
			content:"\“";
			color: var(--grey);
			margin: 0 2px;
		} 
		&:after {
			content: "\”";
			color: var(--grey);
			margin: 0 2px;
		}
	}
	&-info {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 32px;
		transition: 0.4s;
		&-author, &-anime {
			position: absolute;
			padding: 10px 16px;
			font-size: 1.2em;
			font-weight: 400;
			border-radius: 50px;
			color: var(--light);
			text-align: center;
		}
		&-author {
			top: calc(100% - 32px);
			right: 0px;
			transform: translateY(-50%);
			background-color: var(--secondary);
		}
		&-anime {
			top: 10px;
			left: 0px;
			background-color: var(--tertiary);
			color: var(--dark);
		}
	}
}
.quote-content-load{
	position: relative;
	padding: 32px;
	margin: 0 auto;
	max-width: 720px;
	font-family: 'Fira-Sans', sans-serif;
	text-align: center;
	font-size: 1.75em;
		font-weight: 600;
		background-color: var(--dark);
		color: var(--light);
		padding: 48px 32px;
		border-radius: 16px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #c4a9c3;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #c4a9c3 transparent transparent transparent;
}

//loader animation section
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>