<template>
  <main>
    <nav-side-bar />
    <nuxt />
    <right-side-bar />
  </main>
</template>

<script>
// import { mapMutations } from 'vuex'
// import { computeFiles } from 'assets/computeFiles.js'
// import { computeFolders } from 'assets/computeFolders.js'

import NavSideBar from '../components/NavSideBar.vue'
import RightSideBar from '../components/RightSideBar.vue'

export default {
  components: {
    NavSideBar,
    RightSideBar
  },

  created() {
    /* let ancestors = []
    let children = []
    import('@/pages' + this.$route.path + '/relations.js').then((module) => {
      ancestors = module.ancestors
      children = module.children
      this.setCurrentFiles(computeFiles(ancestors, children))
      this.setCurrentFolders(computeFolders(ancestors))
    }) */

    this.$router.replace('/')
  }
  // ,
  // methods: mapMutations(['setCurrentFiles', 'setCurrentFolders'])
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  background-color: #7d8f77;

  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
}

body {
  margin: 0;
}

main {
  display: grid;
  grid-template-columns: 20% auto 20%;
}

main > * {
  border: 1px solid black;
  min-height: 100vh;
  height: 100%;
}

article {
  padding: 10px;

  font-family: sans-serif;
  font-size: 16px;
  color: #e4e1e1;

  background: rgb(66, 11, 59);
  background: linear-gradient(
    90deg,
    rgba(66, 11, 59, 1) 0%,
    rgba(66, 7, 55, 1) 100%
  );
}

.link {
  color: #e3deca;
}

h1 {
  font-family: 'serif';
  text-align: center;
}

p {
  line-height: 1.4;
}

article > ul {
  line-height: 1.4;
}

article > ul > li {
  margin-top: 4px;
}
</style>
