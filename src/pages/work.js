import React, {useState} from "react"

import Layout from "../components/Layout"
import {PROJECT_TYPES} from "../utils/portofolio_utils";
import WorkProjectSidebar from "../components/WorkProjectSidebar";

const WorkPage = () => {
  const [currentProjectType, setCurrentProjectType] = useState(PROJECT_TYPES.ALL_PROJECTS.name);

  return (
  <Layout>
    <WorkProjectSidebar
      currentProjectType={currentProjectType}
      setCurrentProjectType={setCurrentProjectType}
    />
  </Layout>
)}

export default WorkPage
