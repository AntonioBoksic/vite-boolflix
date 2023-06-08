import { reactive } from "vue"


export const store= reactive({
    apiKey: "51ed3c7376b6d29c9a882f138444dd66",

    apiURL_movies:"https://api.themoviedb.org/3/search/movie?api_key=51ed3c7376b6d29c9a882f138444dd66&language=it-IT&query=",

    filmArray:[],


    // ESERCIZIO NUOVO DA QUI

    // collegato a v-model di input in AppSearch
    searchText:"",
    

   apio: "https://api.themoviedb.org/3/search/movie?query=ritorno&include_adult=false&language=en-US&page=1",
   
});