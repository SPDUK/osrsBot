const robot = require('robotjs');

function MouseMovementCalculator(gravity, wind, mouseSpeed, targetError) {
  this.gravity = gravity;
  this.wind = wind;
  this.mouseSpeed = mouseSpeed;
  this.targetError = targetError;
}
MouseMovementCalculator.prototype.gravity = null;
MouseMovementCalculator.prototype.wind = null;
MouseMovementCalculator.prototype.mouseSpeed = null;
MouseMovementCalculator.prototype.targetError = null;
MouseMovementCalculator.prototype._windX = null;
MouseMovementCalculator.prototype._windY = null;

MouseMovementCalculator.prototype.calcCoordsAndDelay = function(startCoords, endCoords) {
  var veloXY = [0, 0];
  var coordsAndDelay = [];
  var xs = startCoords[0];
  var ys = startCoords[1];
  var xe = endCoords[0];
  var ye = endCoords[1];
  var totalDist = Math.hypot(xs - xe, ys - ye);

  this._windX = 0;
  this._windY = 0;

  do {
    veloXY = this._calcVelocity([xs, ys], [xe, ye], veloXY, totalDist);
    xs += veloXY[0];
    ys += veloXY[1];

    var w = Math.round(Math.max(Math.floor(Math.random() * Math.round(100 / this.mouseSpeed)) * 6, 5) * 0.9);

    coordsAndDelay.push({ coords: [xs, ys], delay: w });
  } while (Math.hypot(xs - xe, ys - ye) >= 1);

  if (Math.round(xe) !== Math.round(xs) || Math.round(ye) !== Math.round(ys))
    coordsAndDelay.push({ coords: [Math.round(xe), Math.round(ye)], delay: 0 });

  return coordsAndDelay;
};

MouseMovementCalculator.prototype._calcVelocity = function(curCoords, endCoords, veloXY, totalDist) {
  var veloX = veloXY[0];
  var veloY = veloXY[1];
  var xs = curCoords[0];
  var ys = curCoords[1];
  var xe = endCoords[0];
  var ye = endCoords[1];
  var dist = Math.hypot(xs - xe, ys - ye);
  this.wind = Math.max(Math.min(this.wind, dist), 1); // minE replaced with Math.min

  var maxStep;
  var D = Math.max(Math.min(Math.round(Math.round(totalDist) * 0.3) / 7, 25), 5);

  var rCnc = Math.floor(Math.random() * 6);
  if (rCnc === 1) D = 2;

  if (D <= Math.round(dist)) maxStep = D;
  else maxStep = Math.round(dist);

  if (dist >= this.targetError) {
    this._windX =
      this._windX / Math.sqrt(3) +
      (Math.floor(Math.random() * Math.round(this.wind) * 2 + 1) - this.wind) / Math.sqrt(5);
    this._windY =
      this._windY / Math.sqrt(3) +
      (Math.floor(Math.random() * Math.round(this.wind) * 2 + 1) - this.wind) / Math.sqrt(5);
  } else {
    this._windX = this._windX / Math.sqrt(2);
    this._windY = this._windY / Math.sqrt(2);
  }

  veloX = veloX + this._windX;
  veloY = veloY + this._windY;

  if (dist !== 0) {
    veloX = veloX + (this.gravity * (xe - xs)) / dist;
    veloY = veloY + (this.gravity * (ye - ys)) / dist;
  }

  if (Math.hypot(veloX, veloY) > maxStep) {
    var randomDist = maxStep / 2.0 + Math.floor(Math.random() * Math.floor(Math.round(maxStep) / 2));
    var veloMag = Math.sqrt(veloX * veloX + veloY * veloY);
    veloX = (veloX / veloMag) * randomDist;
    veloY = (veloY / veloMag) * randomDist;
  }

  return [veloX, veloY];
};

function moveBig(x, y) {
  const pos = robot.getMousePos();
  const gravity = Math.floor(Math.random() * 9 + 4);
  const wind = Math.floor(Math.random() * 2 + 1);
  const speed = Math.floor(Math.random() * 45 + 4);

  const mouseCalc = new MouseMovementCalculator(gravity, wind, speed, 1);
  const coordsAndDelay = mouseCalc.calcCoordsAndDelay([pos.x, pos.y], [x, y]);
  for (const move of coordsAndDelay) {
    const [x, y] = move.coords;
    robot.moveMouse(x, y);
    robot.setMouseDelay(move.delay);
  }
}

function moveSmall(x, y) {
  const pos = robot.getMousePos();
  const gravity = Math.floor(Math.random() * 9 + 4);
  const wind = Math.floor(Math.random() * 4 + 1);
  const speed = Math.floor(Math.random() * 60 + 20);
  const mouseCalc = new MouseMovementCalculator(gravity, wind, speed, 1);

  const coordsAndDelay = mouseCalc.calcCoordsAndDelay([pos.x, pos.y], [x, y]);

  for (const move of coordsAndDelay) {
    const [x, y] = move.coords;
    robot.moveMouse(x, y);
    robot.setMouseDelay(move.delay);
  }
}

const humanMouse = { moveBig, moveSmall };

module.exports = humanMouse;
