import React from 'react';
import {TOOLS} from "../data/tools";
import AboutMeTool from "./AboutMeTool";
import style from '../styles/AboutMeTools.module.css'
import {arrayIntoSectionsOfTwo} from "../../utils/utils";

const AboutMeTools = () => {
  return (
    <>
      <h2>Tools</h2>
      <div>
        {arrayIntoSectionsOfTwo(TOOLS).map((toolsRow, index) => (
          <div className={['row', style.rowContainer].join(' ')} key={index}>
            {toolsRow.map((tool, toolIndex) => (
              <div className={'six columns'} key={toolIndex}>
                <AboutMeTool
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