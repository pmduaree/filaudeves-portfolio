import React from "react"
import Layout from "./Layout"
import PropTypes from "prop-types"
import ProjectHeader from "./ProjectHeader";
import ProjectIntroduction from "./ProjectIntroduction";
import ProjectDetails from "./ProjectDetails";
import ProjectContribution from "./ProjectContribution";
import ProjectCarousel from "./ProjectCarousel";

const ProjectPage = (props) => {
  const workData = props.pageContext.workData;
  return (
    <Layout>
        <ProjectHeader
          title={workData.title}
          subtitle={workData.subtitle}
        />
      <section>
        <ProjectIntroduction
          greetingImage={workData.greetingImage}
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
          detailsImage={workData.detailsImage}
        />
      </section>
      <section>
        <ProjectContribution
          contributionImage={workData.contributionImage}
          contributionList={workData.contributionList}
        />
      </section>
        {workData.carousels.map((carousel, index) => (
          <section key={index}>
            <ProjectCarousel
              title={carousel.title}
              images={carousel.images}
            />
          </section>
        ))}
    </Layout>
  )
};

ProjectPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default ProjectPage;
