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
  // 550 to 700
  huge: () => Math.floor(Math.random() * 150) + 550,
  /** @module
   * Returns a random number in a positive of negative range
   * eg: randomRange(20, 20) could return 0, or 40
   @param n The number you want a number close to
   @param amount The range positive or negative around that number
   */
  randomRange: (n, amount) => {
    const randomSign = Math.round(Math.random()) * 2 - 1;
    return n + Math.floor(Math.random() * amount) * randomSign;
  }
};

module.exports = randomNumber;
