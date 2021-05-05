<template>
  <v-card class="ml-8 d-none d-sm-flex flex-column" height="16rem" width="27rem" rounded>
    <v-card class="d-flex flex-row align-top ml-2" elevation="0">
      <v-card elevation="0">
        <v-card-title>Lorem ipsum</v-card-title>
        <v-card-subtitle>DAILY</v-card-subtitle>
      </v-card>
      <v-card width="20%" height="3rem" elevation="0" color="yellow lighten-3" class="text-button text-center pt-2 ml-auto mt-3 mr-3">Active </v-card>
    </v-card>
    <v-card class="d-flex flex-column mt-2" elevation="0">
      <v-text class="ml-6">Lorem ipsum dolor</v-text>
      <v-text class="ml-6 text-h6">PHP 1,000.00</v-text>
      <v-text class="ml-6 text--disabled">Applied: 31/04/2021 15:05:30</v-text>
      <v-btn class="mx-5 mt-5 align-self-center" depressed width="90%"><v-icon left> mdi-update </v-icon>UPDATE</v-btn>
    </v-card>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
