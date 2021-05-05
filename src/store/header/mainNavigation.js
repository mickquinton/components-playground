export default {
  namespaced: true,
  state() {
    return {
      mainNavigation: [
        { label: "My account", path: "/" },
        { label: "About", path: "/about" }
      ]
    }
  },

  getters: {
    mainNavigation(state) {
        return state.mainNavigation
      }
  }
}
