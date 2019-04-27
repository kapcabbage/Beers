<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="font-weight-thin display-3">Look at all this beers</h2>
      </v-flex>
       <v-flex xs12>
          <v-text-field
            solo
            light
            round
            label="Search beer name"
          ></v-text-field>
        </v-flex>
      <v-container fluid grid-list-md>
        <v-layout row wrap justify-start>
          <!-- <p v-for="(beer, index) in beers" :key="index"> {{ beer.name }} </p> -->
          <v-flex v-for="(beer, index) in beers" :key="index" xs3>
            <v-card
              color="#26c6da"
              dark
              width="100%"
              height="120"
            >
              <v-card-title>
                <v-list-tile-avatar color="grey darken-3">
                  <v-img  
                    v-if="beer.labels"
                    v-bind:src="beer.labels.icon"
                    class="elevation-6"
                  ></v-img>
                </v-list-tile-avatar>

                <span class="title font-weight-bold">{{ beer.nameDisplay }}</span>
              </v-card-title>

              <!-- <v-card-text
                max-height="200"
                v-if="beer.style" 
                class="font-weight-bold overflow">
                {{ beer.style.description}}
              </v-card-text> -->
            </v-card> 
          </v-flex>
          
        </v-layout>
      </v-container>
      
    </v-layout>
  </v-container>
</template>

<script>
import { LOAD_BEERS } from "../stores/actions.type";
import { GET_BEERS } from "../stores/getters.type";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      
    };
  },
  components: {
  },
  mounted() {
   this.$store.dispatch(LOAD_BEERS);
  },
  methods: {
    
  },

  computed: {
    ...mapGetters({
      beers: GET_BEERS
    })
  }
};
</script>

<style  lang="scss">
</style>