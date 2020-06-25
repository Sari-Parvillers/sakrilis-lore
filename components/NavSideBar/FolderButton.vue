<template>
  <span>
    <nuxt-link tag="button" :to="folder.path" class="article-button">
      {{ folder.name }}
    </nuxt-link>
    <button
      v-if="parent.path"
      class="folder-button"
      alt="Open this folder back."
      @click="goToFolder()"
    >
      ↑
    </button>
  </span>
</template>

<script>
import { mapMutations } from 'vuex'
import { computeFiles } from 'assets/computeFiles.js'
import { computeFolders } from 'assets/computeFolders.js'

export default {
  name: 'FolderButton',
  props: {
    folder: {
      type: Object,
      default() {
        return {}
      }
    },
    parent: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      ancestors: [],
      siblings: []
    }
  },

  computed: {
    files() {
      return computeFiles(this.ancestors, this.siblings)
    },

    folders() {
      return computeFolders(this.ancestors)
    }
  },

  watch: {
    folder() {
      if (this.parent.path) {
        import('@/pages' + this.parent.path + 'relations.js').then((module) => {
          this.ancestors = module.ancestors
          this.siblings = module.children
        })
      }
    }
  },

  created() {
    if (this.parent.path) {
      import('@/pages' + this.parent.path + 'relations.js').then((module) => {
        this.ancestors = module.ancestors
        this.siblings = module.children
      })
    }
  },

  methods: {
    ...mapMutations(['setCurrentFiles', 'setCurrentFolders']),
    goToFolder() {
      this.setCurrentFiles(this.files)
      this.setCurrentFolders(this.folders)
      this.$router.push(this.parent.path)
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
  background: #bd3fae;
  background: linear-gradient(0deg, #bd3fae 0%, #8f1e80 50%);

  width: 100%;
  height: 40px;

  font-size: 18px;
  font-weight: 600;
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
