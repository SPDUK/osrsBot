const randomNumber = {
  // 20 to 70
  small: () => Math.floor(Math.random() * 50) + 20,
  // 20 to 120
  medium: () => Math.floor(Math.random() * 100) + 20,
  // 80 to 180
  big: () => Math.floor(Math.random() * 100) + 80,
  // 150 to 300
  veryBig: () => Math.floor(Math.random() * 150) + 150,
  // 550 to 700
  huge: () => Math.floor(Math.random() * 150) + 550
};

module.exports = randomNumber;
