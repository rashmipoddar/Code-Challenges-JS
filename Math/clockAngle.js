// Two numbers of a clock, hour and minutes are given.
// Return the smaller angle (in degrees) formed between the hour and the minute hand.

const angleClock = (hour, minutes) => {
  let anglePerMinute = 360 / 60;
  let anglePerHour = 360 / 12;
  let hourAngleChangePerMin = 30 / 60;
  let minutesAngle = minutes * anglePerMinute;
  let hourAngle;

  if (hour !== 12) {
    hourAngle = (hour * anglePerHour) + (minutes * hourAngleChangePerMin);
  } else {
    hourAngle = (minutes * hourAngleChangePerMin)
  }

  let angle = Math.abs(minutesAngle - hourAngle);
  return Math.min(angle, 360 - angle);

};

console.log(angleClock(12,30)); // 165
console.log(angleClock(3,30)); // 75
console.log(angleClock(3, 15)); // 7.5
console.log(angleClock(4,50)); // 155
console.log(angleClock(12,0)); // 0
console.log(angleClock(1,57)); // 76.5

