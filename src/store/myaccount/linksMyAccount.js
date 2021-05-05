export default {
  namespaced: true,
  state() {
    return {
      linksMyAccount: [
        { label: "Dashboard" }, 
        { label: "Profile" }, 
        { label: "Player protection tools" }, 
        { label: "Bank accounts" }, 
        { label: "Statement" }, 
        { label: "Settings" }
      ],

      linksMyAccountMobile: [
        { label: "Profile", icon: 'mdi-account-circle-outline' }, 
        { label: "Player protection tools", icon: 'mdi-shield-account-outline' }, 
        { label: "Bank accounts", icon: 'mdi-bank-outline' }, 
        { label: "Statement", icon: 'mdi-file-document-outline' }, 
        { label: "Settings", icon: 'mdi-cog-outline' }
      ]
    }
  },
  getters: {
    linksMyAccount(state) {
        return state.linksMyAccount
      },

      linksMyAccountMobile(state){
        return state.linksMyAccountMobile
      }
  }
}
