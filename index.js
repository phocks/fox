function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = setInterval(function () {

     callback();

     if (++x === repetitions) {
         clearInterval(intervalID);
     }
  }, delay);
}

module.exports = {
  setIntervalX
}