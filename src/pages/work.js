import React, {useEffect, useState} from "react"

import Layout from "../components/Layout"
import WorkProjectSidebar from "../components/WorkProjectSidebar";
import WorkProjects from "../components/WorkProjects";
import {PROJECT_TYPES, PROJECTS} from "../data/projects";
import style from "../styles/work.module.css";
import WorkProjectsMobile from "../components/WorkProjectsMobile";
import {filterProjects} from "../../utils/utils";

const WorkPage = () => {
  const [currentProjectType, setCurrentProjectType] = useState(PROJECT_TYPES.ALL_PROJECTS.name);
  const [currentProjects, setCurrentProjects] = useState(PROJECTS);

  useEffect(() => {
    setCurrentProjects(filterProjects(currentProjectType));
  }, [currentProjectType]);

  return (
    <Layout selectedPage={'work'}>
      <div className='row'>
        <div className={'two columns'}>
          <WorkProjectSidebar
            currentProjectType={currentProjectType}
            setCurrentProjectType={setCurrentProjectType}
          />
        </div>
        <div className={style.desktop}>
          <div className={'ten columns'}>
            <WorkProjects
              currentProjects={currentProjects}
            />
          </div>
        </div>
        <div className={style.mobile}>
          <WorkProjectsMobile
            currentProjects={currentProjects}
          />
        </div>
      </div>
    </Layout>
  )
};

export default WorkPage
