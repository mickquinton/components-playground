export default {
  computed: {
    linksMyAccount() {
      return this.$store.getters["linksMyAccount/linksMyAccount"]
    },

    linksMyAccountMobile() {
      return this.$store.getters["linksMyAccount/linksMyAccountMobile"]
    },

    mainNavigation() {
      return this.$store.getters["mainNavigation/mainNavigation"]
    }
  }
}
