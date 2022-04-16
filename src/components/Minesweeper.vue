<template>
  <div>
    <button @click="revealCells">Reveal cells</button>
    <GridView
      :size="grid.size"
      :cells="cells"
      @leftClick="onCellLeftClick"
      @rightClick="onCellRightClick"
    />
  </div>
</template>

<script>
import GridView from "@/components/GridView"
import { enumerableRange } from "@/core/utils.js"
import { Random } from "@/core/Random.js"
import Grid from "@/core/Grid.js"

export default {
  emits: [
    "win",
    "lose"
  ],
  props: {
    seed: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    bombCount: {
      type: Number,
      required: true
    }
  },
  components: {
    GridView,
  },
  data() {
    return {
      grid: null,
      cells: [],
    }
  },
  created() {
    this.createGrid()
  },
  methods: {
    handleWin() {
      this.$emit("win")
    },
    handleLose() {
      this.$emit("lose")
    },
    revealCells() {
      this.cells.forEach(cell => cell.isClicked = true)
    },
    createGrid() {
      this.grid = new Grid(this.width, this.height)
      this.fillEmptyCells()
      this.fillRandomBombs()
      this.calculateCellsNeighbors()
    },
    fillEmptyCells() {
      const count = this.grid.size.x * this.grid.size.y

      this.cells = enumerableRange(0, count).map(index => {
        return {
          index,
          grid: this.grid.convertTo2d(index),
          isBomb: false,
          isClicked: false,
          isMarked: false
        }
      })
    },
    fillRandomBombs() {
      const count = this.grid.size.x * this.grid.size.y
      const indexes = enumerableRange(0, count)

      // ! index of cell where bomb should be placed
      const candidates = Random.shuffleArray(indexes, this.seed).slice(0, this.bombCount)

      candidates.forEach(bombIndex => {
        this.cells[bombIndex].isBomb = true
      })
    },
    calculateCellsNeighbors() {
      this.cells.forEach(cell => {
        cell.count = this.grid.getNeighbours(cell.grid)
          .map(index => this.cells[index])
          .filter(c => c.isBomb)
          .length
      })
    },
    onCellLeftClick(event, index) {
      const cell = this.cells[index]
      if (cell.isMarked) {
        return
      }

      if (cell.isBomb) {
        this.cells.filter(c => c.isBomb).forEach(c => c.isClicked = true)
        this.handleLose()
      }
      else {
        this.revealCell(cell)

        const revealedLength = this.cells.filter(cell => cell.isClicked).length
        const win = revealedLength === this.cells.length - this.bombCount
        if (win) {
          this.handleWin()
        }
      }
    },
    onCellRightClick(event, index) {
      const cell = this.cells[index]
      if (!cell.isClicked) {
        cell.isMarked = !cell.isMarked

        // ! win if all bomb cells is marked
        const markedBombsCount = this.cells.filter(cell => cell.isBomb && cell.isMarked).length
        const markedCellsCount = this.cells.filter(cell => cell.isMarked).length

        const win = markedBombsCount === this.bombCount && markedCellsCount == this.bombCount
        if (win) {
          this.handleWin()
        }
      }
    },
    revealCell(cell) {
      if (cell.isClicked) {
        return
      }
      cell.isClicked = true
      const neighbours = this.grid.getNeighbours(cell.grid).map(index => this.cells[index])
      const mines = neighbours.filter(c => c.isBomb)
      if (mines.length === 0) neighbours.forEach(c => this.revealCell(c))
    },
  }
}
</script>

<style>

</style>