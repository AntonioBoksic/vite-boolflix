<script>

export default {
    name: "ProductCard",
    props: {
    details: Object,
    // dettagli: Object,
  }
}

</script>

<!-- HTML -->
<template>
    
    <!-- blocco prodotto -->
    <div class="prod-card">

            <div class="img-card">
                <img src="" alt="">

            </div>
        
            <div class="titolo-card">{{ details.title ? details.title : details.name }}</div>  
            <!-- .name per SERIE  -->

            <div class="titoloOriginale-card">{{ details.original_title ? details.original_title : details.original_name }}</div>
             <!-- .original_name per SERIE  -->

            <div class="voto-card">Voto: {{ details.vote_average }}</div>
            <!-- .vote_average per SERIE  -->

            <div class="lingua-card">Lingua originale: {{ details.original_language }}</div>
            <!-- .original_language per SERIE  -->

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

    .img-card{
        height: 70%;

        img{
        height: 100%;
        width: 100%;
        }

    }

    .titolo-card {
        padding-top: 6px;
        height: 15%;
        text-align: center;
        font-weight: 900;
    }

    .archetype-card {
        padding-top: 6px;
        height: 15%;
        text-align: center;
        color: black;
    }


    
}


</style>
