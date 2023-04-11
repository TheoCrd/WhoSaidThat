<template>
	<header>
		<div class ="title">
			<v-icon class = "icon" color = "white" icon="mdi-comment-quote-outline" size="75px"></v-icon>
			<h1>{{ title }}</h1>
		</div>
		<nav>
			<ul>
				<li><router-link to = "/">Home</router-link></li>
				<li><router-link to = "/pageSecond">Second Page</router-link></li>
			</ul>
		</nav>
	</header>
</template>
  
<script>
export default {
	name: "HeaderPage",
	props: {
		title: {
		type: String,
		default: "Who said that"
		}
	}
};
</script>
  
<style lang="scss" scoped>
header {
	padding: 24px 32px;
	display: flex;
	justify-content: left;
	background-color: var(--dark); /* Added background color for the header */
}

nav {
	display: flex;
	align-items: center;
}

h1 {
	font-family: "Noto Sans JP", sans-serif;
	font-size: 2em;
	color: var(--light); /* Changed text color to light */
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;
	padding-right: 16px; /* Added padding to separate the title from links */
	border-right: 1px solid var(--light); /* Added border between title and links */
}

ul {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
}

li {
	margin-left: 16px; /* Added margin between links */
}

a {
	font-family: "Noto Sans JP", sans-serif;
	font-size: 1.2em;
	color: var(--light); /* Changed text color to light */
	text-decoration: none;
	transition: color 0.3s; /* Added transition for smooth color change on hover */
}

a:hover {
	color: var(--primary); /* Changed color on hover */
}
.title{
	display: flex;
	align-items: center;
}
.icon {
  margin-right: 16px; /* Added margin between icon and title */
}
</style>