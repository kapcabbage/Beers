<template>
    <v-expand-x-transition>
        <v-navigation-drawer
        v-model="computedDrawer"
        :mini-variant.sync="mini"
        hide-overlay
        touchless
        stateless
        app
        >
            <v-toolbar flat color="primary">
                <v-list>
                    <v-list-tile >
                        <v-list-tile-avatar>
                        <img src= "/dist/assets/Logo.PNG" >
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                        <v-list-tile-title>RESPOT</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                        <v-btn
                            icon
                            v-on:click.stop="mini = !mini"
                        >
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list>
                <v-subheader class="mt-3 grey--text text--darken-1">Menu</v-subheader>
               
                <v-list-tile v-on:click.stop="goToPage('user_panel')">
                    <v-list-tile-avatar>
                        <v-icon color="grey darken-1">add_circle_outline</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey--text text--darken-1 body-1">My reservations</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                 <v-list-tile  v-on:click.stop="goToPage('dashboard')">
                    <v-list-tile-avatar>
                        <v-icon color="grey darken-1">directions_car</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey--text text--darken-1 body-1">Dashboard</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                
                 <v-list-tile v-on:click.stop="goToPage()">
                    <v-list-tile-avatar>
                        <v-icon color="grey darken-1">brightness_2</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                         <!-- <v-switch v-model="switch1">
                             <template v-slot:label>
                               <v-list-tile-title class="grey--text text--darken-1 body-1">Night mode</v-list-tile-title>
                            </template>
                         </v-switch> -->
                    </v-list-tile-content>
                </v-list-tile>
                
                <v-list-tile class="mt-5" v-on:click.stop="goToPage()">
                    <v-list-tile-avatar>
                        <v-icon color="grey darken-1">exit_to_app</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey--text text--darken-1 body-1">Logout</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                
            <!-- <v-list-tile v-for="item in items" :key="item.text" v-on:click="">
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
                {{ item.text }}
                </v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile> -->
            
            <!-- <v-list>
            <v-list-tile v-for="item in items2" :key="item.text" avatar v-on:click="">
                <v-list-tile-avatar>
                <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
                </v-list-tile-avatar>
                <v-list-tile-title v-text="item.text"></v-list-tile-title>
            </v-list-tile>
            </v-list> -->
            
            
            </v-list>
        </v-navigation-drawer>
    </v-expand-x-transition>
   
</template>


<script>
	export default {
		name: 'NavigationDrawer',
		data() {
			return {
                drawer: this.computedDrawer,
                mini: true,
				appTitle: 'Respot',
				items: [
					{ title: 'Dashboard', pageName: 'dashboard' },
					{ title: 'Obszary', pageName: 'areas' },
					{ title: 'Monitory', pageName: 'monitors' },
					{ title: 'Logi', pageName: 'logs' },
					{ title: 'Wyloguj się', pageName: 'logout' }
				]
			};
        },
        props: ['computedDrawer'],
		computed: {
			isAuthenticated() {
				return this.$store.getters.isAuthenticated;
            },
		},
		methods: {
			// logout() {
			// 	this.$store.dispatch('logout');
			// },
			goToPage(pageName) {
                console.log("go to page")
				this.$router.push({ name: pageName });
			}
		}
	};
</script>
