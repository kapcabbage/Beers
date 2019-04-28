<template>
	<v-app dark id="app">
    <v-toolbar app>
      <v-toolbar-title>Beers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-on:click.stop="goToPage('dashboard')" flat>Dashboard</v-btn>
        <v-btn v-on:click.stop="goToPage('grid')" flat>Grid</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
         <v-fab-transition>
            <v-btn 
              v-if="fab_vis"
              fab 
              dark 
              small 
              color="primary" 
              fixed 
              right 
              bottom
              v-on:click="scrollToTop">
              <v-icon dark >keyboard_arrow_up</v-icon>
            </v-btn>
          </v-fab-transition>
      </v-container>
    </v-content>
		<v-footer class="xs12 d-block pa-2 text-xs-center">
			Beers &copy; {{ new Date().getFullYear() }}
		</v-footer>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import goTo from 'vuetify/lib/components/Vuetify/goTo'

export default {
  name: "App",
  components: {
     
  },
  data() {
    return{
      visibility : false,
    }
  },
  computed: {
     fab_vis: {
      get(){
        return this.visibility;
      },
      set(newVal){
        this.visibility = newVal;
      }
    },
  },
  methods: {
			goToPage(pageName) {
				this.$router.push({ name: pageName });
      },
      onScroll (e) {
        let scroll = e.target.scrollingElement.scrollTop;
        if(scroll > 120){
          this.fab_vis = true;
        }
        else{
          this.fab_vis = false;
        }
        
      },
      scrollToTop(){
        let options = {
          duration: 200,
          offset: 0,
          easing: 'easeInOutCubic',
        };
        goTo(0, options)
      }
    },
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  }

};
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>