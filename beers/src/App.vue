<template>
	<v-app dark id="app">
    
		<v-content>
       <router-view></router-view>
		</v-content>
		<v-footer class="xs12 d-block pa-2 text-xs-center">
			Beers &copy; {{ new Date().getFullYear() }}
		</v-footer>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: {
     
  },
  data() {
    return{

    }
  },
  computed: {
    
  },

};
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>