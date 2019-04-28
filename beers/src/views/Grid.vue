<template>
  <v-container fluid fill-height>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 class="font-weight-thin display-3">Look at this grid of beers</h2>
      </v-flex>
       <v-flex xs12>
         <template>
            <v-card>
                <v-card-title>
                Beers
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="beers"
                :search="search"
                >
                <template v-slot:items="props">
                    <td width="50%">{{ props.item.name }}</td>
                    <td >{{ props.item.ibu }}</td>
                    <td >{{ props.item.abv }}</td>
                    <td >{{ props.item.isOrganic }}</td>
                </template>
                <template v-slot:no-results>
                    <v-alert :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                    </v-alert>
                </template>
                </v-data-table>
            </v-card>
            </template>
        </v-flex>
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
      headers: [
          {
            text: 'Beer name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'IBU', value: 'ibu' },
          { text: 'ABV', value: 'abv' },
          { text: 'Organic', value: 'isOrganic' },
      ],
      loading: true,
      pagination: {},
      search: ""

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