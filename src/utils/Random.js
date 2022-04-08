const { pseudoRandom } = require("./utils")

export class Random {
  constructor(seed) {
    this.seed = seed
    this.index = 0
  }

  /**
   * 
   * @param {number} maxValue 
   * @returns 
   */
  next(maxValue) {
    return this.range(0, maxValue)
  }

  /**
   * 
   * @param {number} min 
   * @param {number} max 
   * @returns 
   */
  range(min, max) {
    return Math.floor(this.random() * (max - min) + min)
  }

  /**
   * Returns a pseudo-random floating-point number between 0.0 and 1.0.
   * @returns 
   */
  random() {
    return pseudoRandom(`${this.seed}${this.index++}`)
  }

  static shuffleArray(array, seed) {
    const rnd = new Random(seed)
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rnd.random() * (i + 1))
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }
}
