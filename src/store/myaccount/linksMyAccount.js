export default {
  namespaced: true,
  state() {
    return {
      linksMyAccount: [
        { label: "Link 1 long label here" }, 
        { label: "Link 2 long label here" }, 
        { label: "Link 3 long label here" }, 
        { label: "Link 4 long label here" }, 
        { label: "Link 5 long label here" }, 
        { label: "Link 6 long label here" }
      ],

      linksMyAccountMobile: [
        { label: "Link 1 long label here", icon: 'mdi-account-circle-outline' }, 
        { label: "Link 2 long label here", icon: 'mdi-shield-account-outline' }, 
        { label: "Link 3 long label here", icon: 'mdi-bank-outline' }, 
        { label: "Link 4 long label here", icon: 'mdi-file-document-outline' }, 
        { label: "Link 5 long label here", icon: 'mdi-cog-outline' }
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
