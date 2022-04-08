import Vector2 from "./Vector2"

export default class Grid {
  /**
   * 
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    this.size = new Vector2(x, y)
  }

  /**
   * 
   * @param {Vector2} position 
   */
  getNeighbours(position) {
    const cells = []
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) {
          continue
        }
        const pos = new Vector2(position.x + x, position.y + y)
        if (this.isInside(pos)) {
          const index = this.convertTo1d(pos)
          cells.push(index)
        }
      }
    }
    return cells
  }

  /**
   * 
   * @param {Vector2} position 
   */
  isInside(position) {
    return position.x >= 0 && position.x < this.size.x && position.y >= 0 && position.y < this.size.y
  }

  /**
   * 
   * @param {Vector2} position 
   */
  convertTo1d(position) {
    return position.y * this.size.x + position.x
  }

  /**
   * 
   * @param {number} index 
   * @returns 
   */
  convertTo2d(index) {
    return new Vector2(
      index % this.size.x,
      Math.floor(index / this.size.y)
    )
  }
}
