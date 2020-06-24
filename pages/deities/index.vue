<template>
  <article>
    <h1>Deities</h1>
    <p>
      For as long as Fragmicia has existed, there have been deities. In external
      realms, perhaps, there are more god-like beings that originate from a time
      far beyond that of Fragmicia, but this world is the result of the touch of
      a few deities, that of the Old Pantheon to be precise.
    </p>
    <p>
      Beside the Old Pantheon, the Deities are generally categorised by their
      alignments, power and presence. There are minor good gods, far more
      numerous but far less prominent in Fragmicia.
    </p>
    <p>
      There are the major neutral gods, serving disparate or even opposite
      interests of neither good nor evil nature, and minor neutral gods, most of
      which resemble mortals the most because of their mixed nature and nearly
      attainable power.
    </p>
    <p>
      Finally, there are the major evil gods, and their minor counterparts. For
      two thousand years, since the disappearance of Sediro and the fall of many
      other good gods, the world has been descending into darkness as the evil
      gods dominate more and more. Some of them have harmful agendas, some of
      them are simply unwitting monsters. They are all an affront to what is
      good.
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
