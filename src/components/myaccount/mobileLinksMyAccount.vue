<template>
  <v-card class="mx-4 mt-4 d-flex d-sm-none align-self-center" width="90%" elevation="2" rounded>
    <v-list class="d-flex flex-column" width="100%" elevation="0">
      <!-- Profile -->
      <v-btn class="mt-4" width="100%" elevation="0" text>
        <v-list-item>
          <v-icon class="mr-4">{{ linksMyAccountMobile[0].icon }}</v-icon>
          <v-list-title class="text-body-1 font-weight-medium text-capitalize" v-text="linksMyAccountMobile[0].label"></v-list-title>
        </v-list-item>
      </v-btn>

      <!-- KYC -->
      <v-card class="align-self-center my-4" elevation="0" width="90%" color="red lighten-4">
        <v-card class="d-flex flex-row align-center mt-1" width="100%" elevation="0" color="red lighten-4">
          <v-card class="d-flex flex-column" width="100%" elevation="0" color="red lighten-4">
            <v-card-title class="text-subtitle-1" width="100%">Lorem ipsum dolor</v-card-title>
            <v-card-subtitle class="text-subtitle-1 font-weight-black red--text">STATUS 1</v-card-subtitle>
            <!-- <v-text class="mx-4 mb-5">Please submit the required documents to avoid account suspension. </v-text> -->
          </v-card>
          <v-btn class="mx-6" icon color="pink">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card>
      </v-card>

      <!-- Player protection tools -->
      <v-btn class="my-4" width="100%" elevation="0" text>
        <v-list-item>
          <v-icon class="mr-4">{{ linksMyAccountMobile[1].icon }}</v-icon>
          <v-list-title class="text-body-1 font-weight-medium text-capitalize" v-text="linksMyAccountMobile[1].label"></v-list-title>
        </v-list-item>
      </v-btn>

      <!-- Bank accounts -->
      <v-btn class="my-4" width="100%" elevation="0" text>
        <v-list-item>
          <v-icon class="mr-4">{{ linksMyAccountMobile[2].icon }}</v-icon>
          <v-list-title class="text-body-1 font-weight-medium text-capitalize" v-text="linksMyAccountMobile[2].label"></v-list-title>
        </v-list-item>
      </v-btn>

      <!-- Statement -->
      <v-btn class="my-4" width="100%" elevation="0" text>
        <v-list-item>
          <v-icon class="mr-4">{{ linksMyAccountMobile[3].icon }}</v-icon>
          <v-list-title class="text-body-1 font-weight-medium text-capitalize" v-text="linksMyAccountMobile[3].label"></v-list-title>
        </v-list-item>
      </v-btn>

      <!-- Settings -->
      <v-btn class="my-4" width="100%" elevation="0" text>
        <v-list-item>
          <v-icon class="mr-4">{{ linksMyAccountMobile[4].icon }}</v-icon>
          <v-list-title class="text-body-1 font-weight-medium text-capitalize" v-text="linksMyAccountMobile[4].label"></v-list-title>
        </v-list-item>
      </v-btn>
    </v-list>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
