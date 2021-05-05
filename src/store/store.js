import Vue from "vue"
import Vuex from "vuex"
import linksMyAccount from "./myaccount/linksMyAccount"
import mainNavigation from "./header/mainNavigation"
import statusProfVer from "./kyc/statusProfVer"

Vue.use(Vuex)

export default new Vuex.Store({
  state() {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    linksMyAccount,
    mainNavigation,
    statusProfVer
  }
})
