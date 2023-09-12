import React from "react";
import Menu from "./Menu";
import { videosData } from "../utils/data";

const VideoPlayer = () => {
  const generateMenuData = () => {
    return videosData.map((data) => {
      return { value: data.name };
    });
  };

  return (
    <div>
      <h1>Video Player</h1>
      <Menu data={generateMenuData()} />
    </div>
  );
};

export default VideoPlayer;
