import React from "react";
export const VideoHandler = () => {
  const videoSrc = "videos/park.mp4";
  return (
    <video src={videoSrc} width="100%" height="100%" controls autoPlay loop />
  );
};
