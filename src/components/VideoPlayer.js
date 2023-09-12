import React from "react";
import Menu from "./Menu";
import { videosData } from "../utils/data";

const VideoPlayer = () => {
  const generateMenuData = () => {
    videosData.map((data) => {
      return { name: data.name };
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
