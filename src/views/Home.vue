<template>
  <v-main>
    <v-card class="d-flex" elevation="0">

      <!-- Left Panel -->
      <left-panel-my-acct></left-panel-my-acct>
      
      <!-- Main Content -->
      <v-card class="d-flex flex-column pb-15" width="100%" color="grey lighten-5" elevation="0">

        <!-- User name -->
        <v-card class="mx-4" width="90%" color="grey lighten-5" elevation="0">
          <v-card class="d-flex flex-row align-center mt-4" width="100%" color="grey lighten-5" elevation="0">
            <v-card class="d-flex flex-column mx-2" width="100%" color="grey lighten-5" elevation="0">
              <v-card-title>Juan dela Cruz</v-card-title>
              <v-card-subtitle>Last login: 31/04/2021 15:05:30</v-card-subtitle>
            </v-card>
            <v-btn class="mx-2" icon color="grey darken-2">
              <v-icon>mdi-help-circle-outline</v-icon>
            </v-btn>
          </v-card>
        </v-card>

        <!-- Profile verification banner -->
        <high-priority-banner class="d-none d-sm-flex"></high-priority-banner>

        <!-- Mobile Navigation -->
        <mobile-links-my-acct></mobile-links-my-acct>

        <!-- Player protection tools -->
        <v-card-title class="mx-4 mt-2 d-none d-sm-flex">Lorem ipsum dolor sit amet</v-card-title>
        <banner-active-ppt></banner-active-ppt>
      </v-card>
    </v-card>
  </v-main>
</template>

<script>
import LeftPanelMyAccount from "../components/myaccount/leftPanelMyAccount"
import HighPriorityBanner from "../components/kyc/highPriorityBanner"
import BannerActivePpt from "../components/ppt/bannerActive"
import MobileLinksMyAccount from "../components/myaccount/mobileLinksMyAccount"

export default {
  components: {
    "left-panel-my-acct": LeftPanelMyAccount,
    "high-priority-banner": HighPriorityBanner,
    "banner-active-ppt": BannerActivePpt,
    "mobile-links-my-acct": MobileLinksMyAccount
  }
}
</script>

<style></style>
