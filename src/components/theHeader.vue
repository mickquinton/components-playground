<template>
  <header>
    <v-app-bar color="#262626" height="72px">
      <v-btn plain class="font-weight-bold" color="white" v-for="(nav, i) in mainNavigation" :key="i" :to="nav.path">{{ nav.label }}</v-btn>
    </v-app-bar>
  </header>
</template>

<script>
export default {}
</script>
