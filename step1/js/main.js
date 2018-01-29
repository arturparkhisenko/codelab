// Strict mode changes previously accepted "bad syntax" into real errors.
'use strict';


const mediaStreamConstraints = {
  video: true,
};

/*
const mediaStreamConstraints = { video: { facingMode: "user" } };
const mediaStreamConstraints = { video: { facingMode: "environment" } };
*/

navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
.then(function(mediaStream) {
   /* use the stream */
   var video = document.querySelector('video');
   video.srcObject = mediaStream;
   video.onloadedmetadata = function(e) {
     video.play();
   };
})
.catch(function(err) {
   /* handle the error */
  console.error(err);
});
