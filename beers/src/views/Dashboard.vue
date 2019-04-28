<template>
  <v-container 
  fluid 
  fill-height>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="font-weight-thin display-3">Look at all this beers</h2>
      </v-flex>
       <v-flex xs12>
          <v-text-field
            solo
            light
            round
            clearable
            label="Search beer name"
            append-icon="search"
            v-on:keyup.enter="search"
            @click:clear="clear"
            v-model="searchName"
          ></v-text-field>
        </v-flex>
      <v-container fluid grid-list-md>
        <v-layout row wrap justify-start>
          <beer-tile v-for="(beer, index) in beers" :key="index" :beer="beer"/>
            
        <v-flex xs12 v-if="load_vis" class="last"> 
          <v-layout flex row justify-space-around>       
            <v-btn outline round v-on:click="loadMore" color="grey lighten-1">Load more</v-btn>
          </v-layout>
        </v-flex>
        </v-layout>
      </v-container>
      
    </v-layout>
  </v-container>
</template>

<script>
import { LOAD_BEERS, LOAD_MORE_BEERS, SEARCH_BEER_NAME} from "../stores/actions.type";
import { GET_BEERS, GET_CURRENTPAGE, GET_TOTALPAGE } from "../stores/getters.type";
import { mapGetters } from "vuex";
import BeerTile from '../components/BeerTile.vue';

export default {
  data() {
    return {
      visibility : false,
      searchName: "",
      show: false
    };
  },
  components: {
    BeerTile
  },
  mounted() {
    this.$store.dispatch(LOAD_BEERS);
  },
  methods: {
   loadMore(){
     this.$store.dispatch(LOAD_MORE_BEERS, {pageNumber: (this.currentPage + 1)});
   },
   search(){
     console.log(this.searchName)
     if(this.searchName === ""){
       this.$store.dispatch(LOAD_BEERS);
     }
     else{
       this.$store.dispatch(SEARCH_BEER_NAME, {name: this.searchName});
     }
     
   },
   clear(){
       this.$store.dispatch(LOAD_BEERS);
   }
  },

  computed: {
    ...mapGetters({
      beers: GET_BEERS,
      currentPage : GET_CURRENTPAGE,
      totalPage: GET_TOTALPAGE
    }),

    load_vis: function(){
        if(this.beers.lenght === 0){
          return false;
        }
        if(this.currentPage === this.totalPage){
          return false;
        }
        return true
    },
  }
};
</script>

<style  lang="scss">
  .last {
    order: 3;
  }
</style>