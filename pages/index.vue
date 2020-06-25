<template>
  <article>
    <h1>The Fragmicia Codex</h1>
    <p>
      Fragmicia is a world of Deities and Magic. All beings within it, as well
      the world, magic, time, and more, originate from gods.
    </p>
    <p>
      The Codex gathers general information about this world, its deities, its
      realms, its lore.
    </p>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
import { computeFiles } from 'assets/computeFiles.js'
import { computeFolders } from '../assets/computeFolders'
import { ancestors, children } from './relations.js'

export default {
  name: 'TheCodex',
  data() {
    return {
      ancestors,
      children
    }
  },

  created() {
    this.setCurrentFiles(computeFiles(this.ancestors, this.children))
    this.setCurrentFolders(computeFolders(this.ancestors))
  },

  methods: {
    ...mapMutations(['setCurrentFiles', 'setCurrentFolders'])
  }
}
</script>

<style></style>
