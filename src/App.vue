<template>
  <div class="container" :style="containerStyle">
    <Cell
      v-for="(cell, i) in cells"
      :key="i"
      :cell="cell"
      @click="onCellLeftClick(i)"
      @contextmenu.prevent="onCellRightClick(i)"
    />
  </div>
</template>

<script>
import Cell from "@/components/Cell.vue";
import config from "@/demo/grid.json";

export default {
  components: {
    Cell
  },
  data() {
    return {
      grid: {
        x: 9,
        y: 9
      },
      bombCount: 10,
      cells: [],
    }
  },
  mounted() {
    this.createGrid();
  },
  methods: {
    createGrid() {
      const count = this.grid.x * this.grid.y;

      // fill empty cells
      this.cells = new Array(count).fill().map((_, index) => {
        return {
          index: this.convertTo1d(this.convertTo2d(index)),
          grid: this.convertTo2d(index),
          isBomb: false,
          isClicked: false,
          isMarked: false
        };
      });

      this.fillRandomBombs(count);
      // this.fillDemoBombs();

      // calculate bomb-neighbour count for each cell
      this.cells.forEach(cell => {
        cell.count = this.getNeighbours(cell.grid).filter(c => c.isBomb).length;
      });
    },
    fillRandomBombs(count) {
      // fill random cells with bombs
      const indexes = new Array(count).fill().map((_, index) => index);
      const candidates = this.shuffleArray(indexes).slice(0, this.bombCount);
      candidates.forEach(bombIndex => {
        this.cells[bombIndex].isBomb = true;
      });
    },
    fillDemoBombs() {
      config["mines"].forEach(bombIndex => {
        this.cells[bombIndex].isBomb = true;
      });
    },
    onCellLeftClick(index) {
      const cell = this.cells[index];
      if (cell.isBomb) {
        this.cells.filter(c => c.isBomb).forEach(c => c.isClicked = true);
      }
      else {
        this.revealCell(cell);
      }
    },
    onCellRightClick(index) {
      const cell = this.cells[index];
      if (!cell.isClicked) {
        cell.isMarked = !cell.isMarked;
      }
    },
    revealCell(cell) {
      if (cell.isClicked) return;
      cell.isClicked = true;
      const neighbours = this.getNeighbours(cell.grid);
      const mines = neighbours.filter(c => c.isBomb);
      if (mines.length === 0) neighbours.forEach(c => this.revealCell(c));
    },
    convertTo2d(index) {
      return {
        x: index % this.grid.x,
        y: Math.floor(index / this.grid.y)
      }
    },
    convertTo1d({ x, y }) {
      return y * this.grid.x + x;
    },
    getNeighbours({ x, y }) {
      const cells = [];
      for (let _x = -1; _x <= 1; _x++) {
        for (let _y = -1; _y <= 1; _y++) {
          const pos = { x: x + _x, y: y + _y };
          if (_x === 0 && _y === 0) continue;
          if (this.isInside(pos)) {
            cells.push(this.cells[this.convertTo1d(pos)]);
          }
        }
      }
      return cells;
    },
    isInside({ x, y }) {
      return x >= 0 && x < this.grid.x && y >= 0 && y < this.grid.y;
    },
    shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    }
  },
  computed: {
    containerStyle() {
      return {
        "--grid-x": this.grid.x,
        "--grid-y": this.grid.y
      }
    },
  },
}
</script>

<style>
body {
  user-select: none;
}

.container {
  display: grid;
  grid-template-columns: repeat(var(--grid-x), 50px);
  grid-template-rows: repeat(var(--grid-y), 50px);
  grid-gap: 5px;
}

.cell {
  border: 1px solid black;
  font-size: 20px;
  text-align: center;
}
</style>
