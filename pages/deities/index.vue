<template>
  <article>
    <h1>Deities</h1>
    <p>
      Fragmicia is a world made by and governed by Deities. They have a powerful
      influence on the world, some good, some evil, and some neutral. Some
      deities exist only within the confines of Fragmicia, some are external to
      this world, existing in places such as the Ethereal or Hell. Some are
      personified, and may even roam the world in physical form, others are
      conceptual and never speak words.
    </p>
    <p>
      Since the creation of Fragmicia, mortals inhabiting the Realm have been
      guided by the good gods, mainly the Sevens of the Old Pantheon. For two
      thousand years now, however, evil gods have been unleashed upon the world
      and have been in conflict with the good gods since.
    </p>
  </article>
</template>

<script>
import { ancestors } from '../relations.js'

export default {
  name: 'Deities',
  data() {
    return {
      ancestors
    }
  }
}
</script>

<style></style>
