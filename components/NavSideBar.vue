<template>
  <aside>
    <ul class="folder-list">
      <li v-for="(folder, index) in currentFolders" :key="index">
        <folder-button :folder="folder" :parent="currentFolders[index - 1]" />
      </li>
    </ul>
    <ul class="file-list">
      <li v-for="(file, index) in currentFiles" :key="index">
        <file-button :file="file" />
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

import FileButton from './NavSideBar/FileButton.vue'
import FolderButton from './NavSideBar/FolderButton.vue'

export default {
  name: 'NavSideBar',
  components: {
    FileButton,
    FolderButton
  },

  data() {
    return {}
  },

  computed: {
    ...mapState(['currentFiles', 'currentFolders'])
  }
}
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;

  border: solid purple;
  border-width: 1px 0 1px 0;
  background: #6e5b73;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>

<style>
.folder-button {
  width: 40px;
  border: 1px solid black;
  border-width: 1px 0 1px 2px;

  background: rgb(233, 126, 250);
  background: linear-gradient(
    0deg,
    rgb(232, 125, 248) 0%,
    rgb(219, 77, 221) 100%
  );

  font-size: 20px;
  font-family: 'Cormorant Garamond', serif;
}
</style>
