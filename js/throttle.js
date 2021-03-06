import {
  getCSSVariable,
  getRealPosValue
} from "./utils.js";

let canvasWidth = 0;
let canvasHeight = 0;
let crosshairColor;

const crosshairThickness = 2.5;


export function drawCrosshair(ctx, throttleYPos) {
  const crosshairInitPos = canvasHeight / 2 - crosshairThickness / 2;

  const y = getRealPosValue(throttleYPos);

  ctx.fillStyle = crosshairColor;

  // draw crosshair
  ctx.fillRect(0, crosshairInitPos + y * crosshairInitPos, canvasWidth, crosshairThickness);
}

export function drawThrottle(throttleNumber, throttleYPos) {
  const canvas = document.getElementById(`throttle${throttleNumber}`);
  const ctx = canvas.getContext("2d");

  canvasWidth = canvas.offsetWidth;
  canvasHeight = canvas.offsetHeight - crosshairThickness * 2 + 1;

  crosshairColor = getCSSVariable("crosshair-color");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCrosshair(ctx, throttleYPos);
}