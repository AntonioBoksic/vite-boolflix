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
    getMovies_and_series() {
      let myURL_movies = store.apiURL_movies
      let myURL_series = store.apiURL_series

      if(store.searchText !== ""){
      myURL_movies = myURL_movies + `${store.searchText}`
      myURL_series = store.apiURL_series + `${store.searchText}`
      }

      axios.get(myURL_movies)
      .then
        ( (datoindietro) => {

        
        const resultArray = datoindietro.data.results
        console.log(datoindietro.data.results);

        store.filmArray = resultArray

      })
      .catch(err =>{
        console.log(err)
      });

      axios.get(myURL_series)
      .then
        ( (datoindietro) => {

        
        const resultArray = datoindietro.data.results
        console.log(datoindietro.data.results);

        store.seriesArray = resultArray

      })
      .catch(err =>{
        console.log(err)
      });
    },
    // getSeries() {
    //   let myURL_series = store.apiURL_series

    //   if(store.searchText !== ""){
    //   myURL_series = myURL_series + `${store.searchText}`
    //   }

    //   axios.get(myURL_series)
    //   .then
    //     ( (datoindietro) => {

        
    //     const resultArray = datoindietro.data.results
    //     console.log(datoindietro.data);

    //     store.seriesArray = resultArray

    //   })
    //   .catch(err =>{
    //     console.log(err)
    //   });
    // },
  },
  created(){
    // this.getMovies_and_series();

    // this.getSeries();
  },
}
</script>

<template>

  <header>
    <div class="container">
      <h1>BOOLFLIX</h1>
      <AppSearch @mySelection="getMovies_and_series"/>
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

