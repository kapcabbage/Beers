<template>
    <v-flex :xs4="!showDetails" :xs12="showDetails" v-bind:class="[showDetails ? 'first' : 'default']">
              <v-card
              color="#26c6da"
              dark
              width="100%"
            >
              <v-card-title>
                <v-list-tile-avatar color="grey darken-3">
                  <v-img  
                    v-if="beer.labels"
                    v-bind:src="beer.labels.icon"
                    class="elevation-6"
                  ></v-img>
                </v-list-tile-avatar>

                <span class="font-weight-bold">{{ showDetails ? beer.nameDisplay : beer.nameDisplay.substring(0, 43) }}</span>
              </v-card-title>
              <v-spacer/>
              <v-btn outline @click="toggleDetails()">
                <v-icon>{{ showDetails ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                {{ showDetails ? 'COLLAPSE DETAILS' : 'EXPAND DETAILS'}}
              </v-btn>
               <v-card-title primary-title v-show="showDetails" v-if="beer.style">
                <div>
                    <h3 class="headline mb-0">About</h3>
                    <div> {{ beer.style.description }} </div>
                </div>
                </v-card-title>
                
            </v-card> 
          </v-flex>
</template>

<script>
import goTo from 'vuetify/lib/components/Vuetify/goTo'
export default {
  props: ['beer'],
  data () {
    return {
      showDetails: false,
      lastScrollPosition: Number,
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
      if(this.showDetails){
          this.lastScrollPosition = window.scrollY;
          this.scrollTo(0);
      }
      else{
          console.log(this.lastScrollPosition)
          this.scrollTo(this.lastScrollPosition);
      }
    },
    scrollTo(pos){
        let options = {
          duration: 400,
          offset: 0,
          easing: 'easeInOutCubic',
        };
        goTo(pos, options)
      }
  }
}
</script>

<style  lang="scss">
  .first {
    order: 1;
  };
  .default{
    order: 2;
  }
</style>
