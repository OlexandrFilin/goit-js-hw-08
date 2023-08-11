import Player from '@vimeo/player';

throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onTime, 1000));
function onTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}
const videoPlCurTime = localStorage.getItem('videoplayer-current-time');
if (videoPlCurTime) {
  console.log(videoPlCurTime);
  player
    .setCurrentTime(Number(videoPlCurTime))
    .then(function () {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          console.log(error.name);
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
