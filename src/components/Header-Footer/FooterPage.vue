<template>
  <footer>
    <nav>
      <ul>
        <li>
          Website made with 💗 by Théo Couard for an IMAC course using Vue and
          <a href="https://animechan.vercel.app" target="_blank"
            >Animechan API</a
          >
          (⚠️only 100 requests per hour)
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 16px;
  background-color: var(--dark);
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 8px;
  font-size: 1.2em;
  color: var(--light);
}

a {
  font-family: "Noto Sans JP", sans-serif;
  color: var(--grey);
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
}

a:hover {
  color: #7a488f;
}

@media screen and (max-width: 480px) {
  li {
    font-size: 1em;
  }
}
</style>
