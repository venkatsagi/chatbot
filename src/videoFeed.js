import React, { useRef, useEffect } from "react";
 
export default function VideoFeed() {
  const ref = useRef(null);
  let currentStream;
 
  function stopMediaTracks(stream) {
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  }
  function getVideoStream(video) {
    if (typeof currentStream !== "undefined") {
      stopMediaTracks(currentStream);
    }
 
    const constraints = {
      video: true,
      audio: false,
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        currentStream = stream;
        video.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
  useEffect(() => {
    const el = ref.current;
    el.muted = true;
    getVideoStream(el);
  }, []);
 
  return (
    <video
      id="video"
      ref={ref}
      autoPlay
      playsInline
      style={{ width: "200px", height: "200px" }}
    ></video>
  );
}
