import React from "react"
import Layout from "../components/Layout"
import PropTypes from "prop-types"
import meh from "../images/freshdesk-and-trello-greeting.png" //ToDo remove this
import meh2 from "../images/freshdesk-trello-details.svg"
import WorkHeader from "../components/WorkHeader";
import WorkIntroduction from "../components/WorkIntroduction";
import ProjectDetails from "../components/ProjectDetails";

const WorkPage = (props) => {
  const workData = props.pageContext.workData;
  return (
    <Layout>
        <WorkHeader
          title={workData.title}
          subtitle={workData.subtitle}
        />
      <section>
        <WorkIntroduction
          greetingImage={meh}
          greetingText={workData.greetingText}
          role={workData.role}
          platform={workData.platform}
          tools={workData.tools}
        />
      </section>
      <section>
        <ProjectDetails
          detailsTitle={workData.detailsTitle}
          detailsText={workData.detailsText}
          detailsImage={meh2}
        />

      </section>
    </Layout>
  )
};

WorkPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default WorkPage;
