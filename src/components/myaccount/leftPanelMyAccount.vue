<template>
  <v-card class="mx-0 d-none d-sm-flex" width="256" elevation="0" tile>
    <v-navigation-drawer permanent>
      <v-card-title>Lorem ipsum</v-card-title>
      <v-list nav dense>
        <v-list-item-group color="primary"> <!--original line in tag has v-model="selectedItem"-->
          <v-list-item class="py-3 pl-6 text-h6" v-for="(link, i) in linksMyAccount" :key="i">
            <v-list-item-content>
              <v-list-item-title class="text-body-2" v-text="link.label"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {}
</script>

<style></style>
