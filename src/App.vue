<template>
  <v-app>
    <v-main>
      <main-header></main-header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import mainHeader from "./components/theHeader"
export default {
  components: {
    "main-header": mainHeader
  }
}
</script>

<style lang="scss">
#app {
  color: #111;
}
</style>
