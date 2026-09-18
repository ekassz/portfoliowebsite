import React from "react";
import "iconify-icon";

const tools = [
  ["simple-icons:visualstudiocode", "VS Code"],
  ["logos:gitlab", "GitLab"],
  ["logos:github", "GitHub"],
  ["simple-icons:postman", "Postman"],
  ["logos:linux-tux", "Linux"],
  ["simple-icons:androidstudio", "Android Studio"],
  ["logos:firebase", "Firebase"],
  ["simple-icons:unity", "Unity"],
  ["logos:jupyter", "Jupyter"],
  ["logos:vim", "Vim"],
  ["simple-icons:miro", "Miro"],
  ["logos:figma", "Figma"],
];

function ToolTrack({ hidden = false }) {
  return (
    <div className="carnival-track" aria-hidden={hidden}>
      {tools.map(([icon, name]) => (
        <div className="carnival-tile" key={`${hidden}-${name}`} tabIndex={hidden ? -1 : 0}>
          <iconify-icon icon={icon} width="70" height="50"></iconify-icon>
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

function Toolstack() {
  return (
    <div className="carnival-carousel carnival-carousel-tools" aria-label="Tools I use">
      <div className="carnival-marquee">
        <ToolTrack />
        <ToolTrack hidden />
      </div>
    </div>
  );
}

export default Toolstack;
