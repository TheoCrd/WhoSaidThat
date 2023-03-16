<template>
    <div class="quote-card">
      <img class="picture" src="https://ischoolconnect.com/blog/wp-content/uploads/2022/06/science-quotes-3.jpg"/>
      <div class = "description">
        <h2 class="quoter">Einstein</h2>
        <p class="year">1926</p>
      </div>  
    </div>
  </template>
  
  <script>
      export default {
        name: 'QuoteCard'
      }
  </script>
  
  <style>
      .quote-card {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .picture{
        /*width: 100px;*/
        vertical-align: center;
      }

      .description{
        text-align: center;
      }
  
      h2 {
           font-size: 20px;
      }
  </style>