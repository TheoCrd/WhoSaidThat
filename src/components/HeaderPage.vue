<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
export default {
	name: "HeaderPage",
	props: ['title']
}
</script>

<style lang="scss" scoped>
header {
	padding: 24px 32px;
	display: flex;
	justify-content: center;
	h1 {
		font-family: 'Noto Sans JP', sans-serif;
		font-size: 2em;
		color: var(--dark);
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;
		padding-bottom: 8px;
		border-bottom: 5px solid var(--primary);
	}
}
</style>