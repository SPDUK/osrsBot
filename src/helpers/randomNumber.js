/** @module
   * Returns a random number in a positive of negative range
   * eg: randomRange(20, 20) could return 0, or 40
   @param n The number you want a number close to
   @param amount The range positive or negative around that number
   */
function randomRange(n, amount) {
  const randomSign = Math.round(Math.random()) * 2 - 1;
  return n + Math.floor(Math.random() * amount) * randomSign;
}

/** @module 
 Generates a random x, y position in any given range.
 From 0, TO xRange, not including.
 randomXY(0,0,25,25) can return anything from [0,0] to [24,24]

 @param x The starting x position
 @param y  The starting Y position
 @param xRange  The maximum number (from x to xRange)
 @param xxRange The maximum number (from y to yRange)
 */
function randomXY(x, y, xRange, yRange) {
  const randX = (() => Math.floor(Math.random() * xRange) + x)();
  const randY = (() => Math.floor(Math.random() * yRange) + y)();
  return [randX, randY];
}

const randomNumber = {
  // 20 to 70
  verySmall: () => Math.floor(Math.random() * 10) + 5,
  small: () => Math.floor(Math.random() * 50) + 20,
  // 20 to 120
  medium: () => Math.floor(Math.random() * 100) + 20,
  // 80 to 180
  big: () => Math.floor(Math.random() * 100) + 80,
  // 150 to 300
  veryBig: () => Math.floor(Math.random() * 150) + 150,
  //  200 to 500
  veryBigRand: () => Math.floor(Math.random() * 300) + 200,
  // 550 to 700
  huge: () => Math.floor(Math.random() * 150) + 550,
  randomRange,
  randomXY
};

module.exports = randomNumber;
