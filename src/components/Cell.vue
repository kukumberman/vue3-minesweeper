<template>
  <div class="cell">
    <span>{{ getDisplay() }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cell: Object,
  },
  methods: {
    getDisplay() {
      if (this.cell.isMarked) return "📌";
      if (!this.cell.isClicked) return "❔";
      if (this.cell.isBomb) return "💣";
      return this.array[this.cell.count];
    }
  },
  computed: {
    array() {
      return ["🟦", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];
    }
  }
}
</script>

<style>

</style>