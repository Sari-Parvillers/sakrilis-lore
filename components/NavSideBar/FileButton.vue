<template>
  <span>
    <nuxt-link :to="file.path" tag="button" class="article-button">
      {{ file.name }}
    </nuxt-link>
    <button
      v-if="children.length"
      class="folder-button"
      alt="Open folder for this subject."
      @click="goToFolder()"
    >
      ↓
    </button>
  </span>
</template>

<script>
import { mapMutations } from 'Vuex'
import { computeFiles } from 'assets/computeFiles.js'
import { computeFolders } from 'assets/computeFolders.js'

export default {
  name: 'FileButton',
  props: {
    file: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      ancestors: [],
      children: []
    }
  },

  computed: {
    files() {
      return computeFiles(this.ancestors, this.children)
    },
    folders() {
      return computeFolders(this.ancestors)
    }
  },

  watch: {
    file() {
      import('@/pages' + this.file.path + '/relations.js').then((module) => {
        this.ancestors = module.ancestors
        this.children = module.children
      })
    }
  },

  created() {
    import('@/pages' + this.file.path + '/relations.js').then((module) => {
      this.ancestors = module.ancestors
      this.children = module.children
    })
  },

  methods: {
    ...mapMutations(['setCurrentFiles', 'setCurrentFolders']),
    goToFolder() {
      this.setCurrentFiles(this.files)
      this.setCurrentFolders(this.folders)
      this.$router.push(this.file.path)
    }
  }
}
</script>

<style scoped>
span {
  display: flex;
}

.article-button {
  margin: 0;

  border: solid purple;
  border-width: 1px 0 1px 0;
  background: rgb(237, 147, 250);
  background: linear-gradient(
    0deg,
    rgba(237, 147, 250, 1) 0%,
    rgba(221, 97, 224, 1) 100%
  );

  width: 100%;
  height: 40px;

  font-size: 18px;
  font-family: 'Cormorant Garamond', serif;
}

button:hover {
  background: rgb(241, 185, 250);
  background: linear-gradient(
    0deg,
    rgb(244, 176, 255) 0%,
    rgb(216, 121, 218) 100%
  );
  cursor: pointer;
}
</style>
