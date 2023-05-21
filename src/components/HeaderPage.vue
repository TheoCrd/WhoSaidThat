<template>
	<header>
		<div class ="title">
			<router-link to="/">
				<v-icon class = "icon" color = "white" icon="mdi-comment-quote-outline" size="75px"></v-icon>
			</router-link>
			<h1 class = "title-text">{{ title }}</h1>
		</div>
		<nav>
			<ul>
				<li><router-link to = "/">Home</router-link></li>
				<li><router-link to = "/pageSecond">Search by Anime</router-link></li>
				<li><router-link to = "/pageThird">Search by Character</router-link></li>
				<li><router-link to = "/bookmarks">Bookmarks</router-link></li>
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
	},
};
</script>
  
<style lang="scss" scoped>
header {
	padding: 24px 32px;
	display: flex;
	justify-content: center;
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
	font-family: "Noto Sans JP", sans-serif;
}

li {
	margin-left: 16px; /* Added margin between links */
	font-family: "Noto Sans JP", sans-serif;
}

a {
	font-family: "Noto Sans JP", sans-serif;
	font-size: 1.2em;
	color: var(--light); /* Changed text color to light */
	text-decoration: none;
	transition: color 0.3s; /* Added transition for smooth color change on hover */
}

a:hover {
	color:#7A488F;
}
.icon {
  margin-right: 16px; /* Added margin between icon and title */
  transition: transform 0.3s;
}

.icon:hover{
	animation: shake 0.5s ease-in-out;
	cursor: pointer;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.title{
	display: flex;
	align-items: center;
}
.title-text {
  position: relative;
}

@media screen and (max-width: 768px) {
	header {
	flex-direction: column;
	align-items: center;
	}

	.title {
	margin-bottom: 16px;
	}

	nav {
	margin-top: 16px;
	}

	h1 {
	border-right: none;
	padding-right: 0;
	}

	ul {
	flex-direction: column;
	}

	li {
	margin: 8px 0;
	}
}
</style>
