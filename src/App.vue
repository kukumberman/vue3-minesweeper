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
      <label :for="stage.name">{{ formatStage(stage) }}</label>
    </section>
    <div>
      <button @click="play">Play</button>
    </div>
  </div>
  <div v-else>
    <button @click="backToMain">Menu</button>
    <Minesweeper
      :seed="seed"
      :width="stage.size.x"
      :height="stage.size.y"
      :bombCount="stage.bombCount"
      @win="winHandler"
      @lose="loseHandler"
    />
  </div>
  <FooterView />
</template>

<script>
import config from "@/config.json"
import Minesweeper from "@/components/Minesweeper"
import FooterView from "@/components/FooterView"

export default {
  components: {
    Minesweeper,
    FooterView,
  },
  data() {
    return {
      seed: "3301",
      stages: [],
      stageIndex: 0,
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
      this.gameplayState = true
    },
    backToMain() {
      this.gameplayState = false
      window.history.replaceState(null, "(although most browsers will ignore this parameter)", window.location.pathname)
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
    winHandler() {
      alert("todo: win logic")
    },
    loseHandler() {
      alert("todo: lose logic")
    },
    formatStage(stage) {
      const { name, size, bombCount } = stage
      return `${name} (${size.x}x${size.y} ${bombCount}💣)`
    }
  },
}
</script>

<style>
body {
  user-select: none;
}
</style>
