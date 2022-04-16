const crypto = require("crypto")

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

/**
 * Returns a random floating-point number between 0 (inclusive) and 1 (exclusive) for specified seed
 * @param {string} seed 
 * @returns 
 */
export function pseudoRandom(seed) {
  const hash = crypto.createHash("sha256").update(seed).digest("hex")
  const substr = hash.substring(0, 4)
  const value01 = parseInt(substr, 16) / (0xffff + 1)
  return value01
}

/**
 * Generates a sequence of integral numbers within a specified range
 * @param {number} start 
 * @param {number} count 
 */
export function enumerableRange(start, count) {
  return Array(count).fill().map((_, i) => i + start)
}
