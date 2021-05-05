export default {
    state() {
        return {
          statusProfVer: ["Status 1", "Status 2", "Status 3"]
        }
      },

      getters: {
        statusProfVer(state){
            return state.statusProfVer
        }
      },

}