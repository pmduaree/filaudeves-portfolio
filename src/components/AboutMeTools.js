import React from 'react';
import {TOOLS} from "../data/tools";
import AboutMeTool from "./AboutMeTool";

const AboutMeTools = () => {

  return (
    <>
      <h2>Tools</h2>
      <div>
        {TOOLS.map((tool, index) => (
          <AboutMeTool
            key={index}
            name={tool.name}
            icon={tool.image}
            value={tool.value}
          />
        ))}
      </div>
    </>
  );
};

export default AboutMeTools;