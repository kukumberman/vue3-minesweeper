<template>
  <div v-if="!gameplayState">
    <div>
      <span>Seed</span>
      <input type="text" v-model="seed">
      <button @click="randomizeSeed">Randomize</button>
    </div>
    <section
      v-for="(stage, i) in stages"
      :key="i"
    >
      <input type="radio" :id="stage.name" :value="i" v-model="stageIndex">
      <label :for="stage.name">{{ stage.name }}</label>
    </section>
    <div>
      <button @click="play">Play</button>
    </div>
  </div>
  <div v-else>
    <div>
      <button @click="backToMain">Menu</button>
      <button @click="revealCells">Reveal cells</button>
    </div>
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
      seed: "3301",
      stages: [],
      stageIndex: 0,
      grid: null,
      cells: [],
      gameplayState: false,
    }
  },
  created() {
    this.stages = config.stages

    const params = new URLSearchParams(window.location.search)
    
    if (!params.has("seed")) {
      return
    }

    if (!params.has("stage")) {
      return
    }

    this.seed = params.get("seed")

    const stageName = params.get("stage")
    let stageIndex = this.stages.findIndex(s => s.name === stageName)
    if (stageIndex === -1) {
      stageIndex = 0
    }
    this.stageIndex = stageIndex

    this.createGrid()
    this.gameplayState = true
  },
  computed: {
    stage() {
      return this.stages[this.stageIndex]
    }
  },
  methods: {
    randomizeSeed() {
      this.seed = this.getRandomSeed()
    },
    play() {
      this.updateWindowQueryParams()
      this.createGrid()
      this.gameplayState = true
    },
    backToMain() {
      this.gameplayState = false
      window.history.replaceState(null, "(although most browsers will ignore this parameter)", window.location.pathname)
    },
    revealCells() {
      this.cells.forEach(cell => cell.isClicked = true)
    },
    updateWindowQueryParams() {
      const { origin, pathname } = window.location
      let url = origin + pathname
      // ! "qs" module instead?
      url += "?seed=" + this.seed + "&stage=" + this.stages[this.stageIndex].name
      window.history.replaceState(null, "(although most browsers will ignore this parameter)", url)
    },
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
      this.grid = new Grid(this.stage.size.x, this.stage.size.y)
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
    onCellLeftClick(event, index) {
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
    onCellRightClick(event, index) {
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
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
