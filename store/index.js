export const state = {
  currentFolders: [],
  currentFiles: []
}

export const mutations = {
  setCurrentFolders(state, payload) {
    state.currentFolders = payload
  },

  setCurrentFiles(state, payload) {
    state.currentFiles = payload
  }
}
