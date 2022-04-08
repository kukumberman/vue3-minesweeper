<template>
  <GridView
    :size="grid.size"
    :cells="cells"
    @leftClick="onCellLeftClick"
    @rightClick="onCellRightClick"
  />
</template>

<script>
import GridView from "@/components/GridView"
import { enumerableRange } from "@/utils/utils.js"
import { Random } from "@/utils/Random.js"
import Grid from "@/utils/Grid.js"
import config from "@/config.json"

export default {
  components: {
    GridView,
  },
  data() {
    return {
      seed: "123",
      stage: null,
      grid: null,
      bombCount: 10,
      cells: [],
    }
  },
  created() {
    const params = new URLSearchParams(window.location.search)
    
    if (params.has("seed")) {
      this.seed = params.get("seed")
    }

    if (params.has("stage")) {
      const stage = params.get("stage")
      if (config.stages[stage]) {
        this.stage = config.stages[stage]
      }
      else {
        this.stage = config.stages.newbie
      }
    }
    else {
      this.stage = config.stages.newbie
    }

    this.grid = new Grid(this.stage.size.x, this.stage.size.y)
  },
  mounted() {
    this.createGrid()
  },
  methods: {
    getRandomSeed() {
      return (Date.now() % 0xffff).toString(16)
    },
    winLogic() {
      alert("todo: win logic")
    },
    loseLogic() {
      alert("todo: lose logic")
    },
    createGrid() {
      const count = this.grid.size.x * this.grid.size.y

      // ! fill empty cells
      this.cells = enumerableRange(0, count).map(index => {
        return {
          index,
          grid: this.grid.convertTo2d(index),
          isBomb: false,
          isClicked: false,
          isMarked: false
        }
      })

      // ! fill random cells with bombs
      this.fillRandomBombs()

      // ! calculate bomb-neighbour count for each cell
      this.cells.forEach(cell => {
        cell.count = this.grid.getNeighbours(cell.grid)
          .map(index => this.cells[index])
          .filter(c => c.isBomb)
          .length
      })
    },
    fillRandomBombs() {
      const count = this.grid.size.x * this.grid.size.y
      const indexes = enumerableRange(0, count)

      // ! index of cell where bomb should be placed
      const candidates = Random.shuffleArray(indexes, this.seed).slice(0, this.stage.bombCount)

      candidates.forEach(bombIndex => {
        this.cells[bombIndex].isBomb = true
      })
    },
    onCellLeftClick(index) {
      const cell = this.cells[index]
      if (cell.isMarked) {
        return
      }

      if (cell.isBomb) {
        this.cells.filter(c => c.isBomb).forEach(c => c.isClicked = true)
        this.loseLogic()
      }
      else {
        this.revealCell(cell)

        const revealedLength = this.cells.filter(cell => cell.isClicked).length
        const win = revealedLength === this.cells.length - this.stage.bombCount
        if (win) {
          this.winLogic()
        }
      }
    },
    onCellRightClick(index) {
      const cell = this.cells[index]
      if (!cell.isClicked) {
        cell.isMarked = !cell.isMarked
        // ! win if all bomb cells is marked
        const markedBombsCount = this.cells.filter(cell => cell.isBomb && cell.isMarked).length
        const win = markedBombsCount === this.stage.bombCount
        if (win) {
          this.winLogic()
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
  },
}
</script>

<style>
body {
  user-select: none;
}
</style>
