<template>
  <Card v-bind="$attrs" class="v-card--material-chart" v-on="$listeners">
    <v-sheet slot="header" elevation="6" height="500">
      <v-calendar :now="today" color="primary">
        <template v-slot:day="{ date }">
          <template v-for="event in eventsMap[date]">
            <v-menu :key="event.parkingSpotId" full-width offset-x >
              <template v-slot:activator="{ on }">
                <div v-ripple class="my-event" v-on="on" v-html="event.parkingNumber" ></div>
              </template>
              <v-card color="grey darken-1" min-width="350px" flat>
                <v-toolbar color="primary" dark> 
                  <v-toolbar-title>Parking no. {{event.parkingNumber}}</v-toolbar-title>
                </v-toolbar>
                <v-card-title primary-title>
                  <span v-html="event.parkingNumber"></span>
                </v-card-title>
                <v-card-actions>
                  <v-btn raised color="error">Cancel</v-btn>
                  <v-btn raised color="primary">Reserve</v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </template>
        </template>
      </v-calendar>
    </v-sheet>

    <slot/>

    <slot slot="actions" name="actions"/>
  </Card>
</template>

<script>
import Card from "./MaterialCard.vue";
export default {
  components: {
    Card
  },
  inheritAttrs: false,
  props: {
    today: String,
    eventsMap: {}
  }
};
</script>

<style lang="scss" >
	.my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #4caf50;
    color: #ffffff;
    border: 1px solid #4caf50;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>
