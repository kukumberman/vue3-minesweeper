<template>
  <!-- :style="containerStyle" -->
  <div class="container">
    <Cell
      v-for="(cell, i) in cells"
      :key="i"
      :cell="cell"
      @click="$emit('leftClick', $event, i)"
      @contextmenu.prevent="$emit('rightClick', $event, i)"
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
  data() {
    return {
      fontSize: 35,
      cellSize: 50,
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
    },
    cellSizeInPixels() {
      return this.cellSize + "px"
    },
    fontSizeInPixels() {
      return this.fontSize + "px"
    }
  },
}
</script>

<style>
.container {
  display: grid;
  /* grid-template-columns: repeat(var(--grid-x), 50px); */
  /* grid-template-rows: repeat(var(--grid-y), 50px); */
  grid-template-columns: repeat(v-bind("size.x"), v-bind("cellSizeInPixels"));
  grid-template-rows: repeat(v-bind("size.y"), v-bind("cellSizeInPixels"));
  /* grid-gap: 5px; */
}

.cell {
  border: 1px solid black;
  font-size: v-bind("fontSizeInPixels");
  text-align: center;
}
</style>
