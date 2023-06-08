<script>
import ListProducts from './components/ListProducts.vue';
import AppSearch from './components/AppSearch.vue';
import { store } from "./store";




export default {
  components: {
    ListProducts,
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharachters() {

      let myURL = store.apiURL_movies

      if(store.chosenArchetype !== ""){
      //   // qua possiamo usare o backtick o concat, entrambi uniscono/aggiungono una stringa all altra
      myURL = store.apiURL_movies + `${store.searchText}`

      }

      axios.get(myURL)
      .then
        ( (datoindietro) => {

        
        const resultArray = datoindietro.data.results
        console.log(datoindietro.data);

        store.filmArray = resultArray

      })
      .catch(err =>{
        console.log(err)
      });
    },
  },
  created(){
    this.getCharachters();
  },
}
</script>

<template>

  <header>
    <div class="container">
      <h1>BOOLFLIX</h1>
      <AppSearch @mySelection="getCharachters"/>
    </div>
    
  </header>

  <main>
    <ListProducts />
  </main>

</template>

<style lang="scss">

@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;

header {

  background-color: $primary;

  .container {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;

    h1 {
    color: red;
    }
  }
  
}

main {
  background-color: grey;
  padding-bottom: 20px;
 

  // .container {
  // margin: 0 auto;
  // width: 80%;
  // // border: 1px solid red;
  // text-align: center;
  
  // }

.jumbotron {
  height: 300px;
  
    img{
      width: 100%;
      height: 100%;
      object-fit:cover;
      object-position: top;
      
    }
  
}
  
}



</style>

