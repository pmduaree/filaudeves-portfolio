import React from 'react';
import {TOOLS} from "../data/tools";
import AboutMeTool from "./AboutMeTool";
import style from '../styles/AboutMeTools.module.css'

const AboutMeTools = () => {
  return (
    <>
      <h2>Tools</h2>
      <div>
        {TOOLS.map((toolsRow, index) => (
          <div className={['row', style.rowContainer].join(' ')} key={index}>
            {toolsRow.map((tool, toolIndex) => (
              <div className={'six columns'}>
                <AboutMeTool
                  key={toolIndex}
                  name={tool.name}
                  icon={tool.image}
                  value={tool.value}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutMeTools;