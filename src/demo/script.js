// https://minesweeperonline.com/#beginner
// https://minesweeper.online/ru/game/787354772

(function(query, bombClasses) {
  const cells = Array.from(document.querySelectorAll(query))
  .map((e, index) => {
    const isBomb = bombClasses.some(type => e.classList.contains(type));
    return { index, isBomb };
  })
  .filter(e => e.isBomb)
  .map(e => e.index);
  console.log(cells);
})
("#game > .square", ["bombrevealed", "bombdeath"]);
("#A43 > .cell", ["hd_type11", "hd_type10"]);

