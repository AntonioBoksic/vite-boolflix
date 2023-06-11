<script>

import { store } from "./../store.js";

export default {
    name: "ProductCard",
    props: {
    details: Object,
    // dettagli: Object,
  },
  data() {
     return {
       store,
            
     }
  },
}

</script>

<!-- HTML -->
<template>
    
    <!-- blocco prodotto -->
    <div class="prod-card">
        <div class="img-card">
            <img :src="'https://image.tmdb.org/t/p/w342' + details.backdrop_path" alt="immagine film">
        </div>

        
            <div class="titolo-card">{{ details.title ? details.title : details.name }}</div>  
            <!-- .name per SERIE  -->

            <div class="titoloOriginale-card">Titolo originale: {{ details.original_title ? details.original_title : details.original_name }}</div>
             <!-- .original_name per SERIE  -->

            <div class="voto-card">Voto: {{ details.vote_average }}</div>
            <!-- .vote_average per SERIE  -->

            <!-- <div class="lingua-card">Lingua originale: {{ store.lingueDiCuiHoBandiere.includes(details.original_language) ? '../../public/' + details.original_language + '.png' : details.original_language }}</div> -->
            <!-- .original_language per SERIE  -->

            <span>Lingua originale:</span>
            <img class="bandiera"
            :src="store.lingueDiCuiHoBandiere.includes(details.original_language) ? '/' + details.original_language + '.png' : details.original_language" :alt="store.lingueDiCuiHoBandiere.includes(details.original_language) ? '/' + details.original_language + '.png' : details.original_language">

    </div>


</template>

<!-- STILE -->

<style scoped lang="scss">

.prod-card {
    border: 1px solid black;
    width: calc(100%/6 - 20px);
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
    height: 350px;

    .img-card {
        width: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
    

    .titolo-card {
        padding-top: 6px;
        height: 15%;
        text-align: center;
        font-weight: 900;
    }

    .bandiera {
        width: 30px;
        height: 20px;
    }



    
}


</style>
