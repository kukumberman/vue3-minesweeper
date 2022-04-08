<template>
  <!-- :style="containerStyle" -->
  <div class="container">
    <Cell
      v-for="(cell, i) in cells"
      :key="i"
      :cell="cell"
      @click="$emit('leftClick', i)"
      @contextmenu.prevent="$emit('rightClick', i)"
    />
  </div>
</template>

<script>
import Cell from "@/components/Cell.vue"
import Vector2 from "@/utils/Vector2.js"

export default {
  components: {
    Cell
  },
  emits: ["leftClick", "rightClick"],
  props: {
    cells: {
      type: Array,
      required: true
    },
    size: {
      type: Vector2,
      required: true
    }
  },
  computed: {
    // containerStyle() {
    //   return {
    //     "--grid-x": this.size.x,
    //     "--grid-y": this.size.y
    //   }
    // },
    x() {
      return this.size.x
    },
    y() {
      return this.size.y
    }
  },
}
</script>

<style scoped>
.container {
  display: grid;
  /* grid-template-columns: repeat(var(--grid-x), 50px); */
  /* grid-template-rows: repeat(var(--grid-y), 50px); */
  grid-template-columns: repeat(v-bind("size.x"), 50px);
  grid-template-rows: repeat(v-bind("size.y"), 50px);
  grid-gap: 5px;
}

.cell {
  border: 1px solid black;
  font-size: 40px;
  text-align: center;
}
</style>
