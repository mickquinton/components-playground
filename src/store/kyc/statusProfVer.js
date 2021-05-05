export default {
    state() {
        return {
          statusProfVer: ["Required", "Optional", "Insufficient"]
        }
      },

      getters: {
        statusProfVer(state){
            return state.statusProfVer
        }
      },

}