import React from "react";
import "iconify-icon";

const technologies = [
  ["simple-icons:rstudio", "RStudio"],
  ["logos:react", "React"],
  ["logos:javascript", "JavaScript"],
  ["simple-icons:git", "Git"],
  ["logos:python", "Python"],
  ["logos:java", "Java"],
  ["simple-icons:kotlin", "Kotlin"],
  ["logos:bash", "Bash"],
  ["logos:html-5", "HTML5"],
  ["logos:css-3", "CSS3"],
  ["logos:bootstrap", "Bootstrap"],
  ["simple-icons:docker", "Docker"],
];

function TechnologyTrack({ hidden = false }) {
  return (
    <div className="carnival-track" aria-hidden={hidden}>
      {technologies.map(([icon, name]) => (
        <div className="carnival-tile" key={`${hidden}-${name}`} tabIndex={hidden ? -1 : 0}>
          <iconify-icon icon={icon} width="70" height="50"></iconify-icon>
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

function Techstack() {
  return (
    <div className="carnival-carousel" aria-label="Professional technologies">
      <div className="carnival-marquee">
        <TechnologyTrack />
        <TechnologyTrack hidden />
      </div>
    </div>
  );
}

export default Techstack;

