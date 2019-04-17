import React, {useState} from "react"

import Layout from "../components/Layout"
import WorkProjectSidebar from "../components/WorkProjectSidebar";
import WorkProjects from "../components/WorkProjects";
import {PROJECT_TYPES} from "../data/projects";

const WorkPage = (props) => {
  const [currentProjectType, setCurrentProjectType] = useState(PROJECT_TYPES.ALL_PROJECTS.name);

  return (
    <Layout pathName={props.location.pathname}>
      <div className='row'>
        <div className={'two columns'}>
          <WorkProjectSidebar
            currentProjectType={currentProjectType}
            setCurrentProjectType={setCurrentProjectType}
          />
        </div>
        <div className={'ten columns'}>
          <WorkProjects
            currentProjectType={currentProjectType}
          />
        </div>
      </div>
    </Layout>
  )
};

export default WorkPage
