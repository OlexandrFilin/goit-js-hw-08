import Player from '@vimeo/player';
throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: 19231868,
  width: 1640,
});

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

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
    .then(function (seconds) {
      //seconds = Number(videoPlCurTime);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
