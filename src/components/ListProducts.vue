<script>

import ProductCard from './ProductCard.vue';
import { store } from "./../store.js";

export default {

  name: "ListProducts",

  components: {
    ProductCard
  },

  data() {
     return {
       store,
            
     }
  },

  mounted() {
    console.log("caricato");
  }
  
}
</script>

<!-- HTML -->
<template>
  <div class="container">
    <section class="products">

      <div class="boxes">

        <!-- blocco prodotto -->
        <ProductCard v-for="(film,index) in store.filmArray" :key='index'
        :details="film"
        />

      </div>   

    </section>
  </div>

</template>

<!-- STILE -->

<style scoped lang="scss">

.boxes {
    display: flex;
    flex-wrap: wrap;
}

.container {
    color: white;
    height: 100%;
}




</style>


