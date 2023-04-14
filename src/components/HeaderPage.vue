<template>
	<header>
		<div class ="title">
			<v-icon class = "icon" color = "white" icon="mdi-comment-quote-outline" size="75px"></v-icon>
			<h1 class = "title-text">{{ title }}</h1>
		</div>
		<nav>
			<ul>
				<li><router-link to = "/">Home</router-link></li>
				<li><router-link to = "/pageSecond">Second Page</router-link></li>
				<li><router-link to = "/pageSecond">Third Page</router-link></li>
			</ul>
		</nav>
		<div class = "search-bar">
			<input v-model="searchInput" @input="handleSearchInput" placeholder="Search..." />
		</div>
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
	data() {
    return {
      searchInput: "" // Add the searchInput data property
    };
  },
  methods: {
    handleSearchInput() {
      // Implement your logic for handling search input here
      console.log("Search input changed:", this.searchInput);
    }
  }
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
.icon {
  margin-right: 16px; /* Added margin between icon and title */
  transition: transform 0.3s;
}

.icon:hover{
	opacity: 0.8;
	animation: shake 0.5s ease-in-out;
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


.search-bar {
  //flex-grow: 1; /* Added to make the search bar expand and take up remaining space */
  display: flex;
  justify-content: flex-end; /* Added to align the search bar to the right */
  align-items: center;
  margin-left: 16px;
}

input {
  padding: 8px;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: rgb(92, 44, 139);
  color: var(--light);
  transition: background-color 0.3s;
}

input::placeholder {
    opacity: 0.5;
    color: var(--light);
}

input:focus {
  background-color: rgb(118, 76, 160);
  color: var(--light);
}

.title{
	display: flex;
	align-items: center;
}
.title-text {
  //opacity: 0.8;
  position: relative;
}

.title-text:hover {
  animation: waveAnimation 1s infinite; /* Added :hover pseudo-class */
  transform-origin: bottom;
}

@keyframes waveAnimation {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
