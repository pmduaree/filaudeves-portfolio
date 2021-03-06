import React from "react"
import PropTypes from "prop-types"
import style from "../styles/projectIntroduction.module.css"
import arrowSVG from "../resources/down-arrow.svg"

const ProjectIntroduction = ({ greetingImage, greetingText, role, platform, tools, id }) => {
  const moveToNextSection = () => {
    const projectDetails = document.getElementById('projectDetails');
    const y = projectDetails.getBoundingClientRect().top + window.scrollY - 20;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className={'row'}>
        <div className={'six columns'}>
          <img className={[style.greetingImage, id === 'vehicle-health' ? style.noBoxShadow : ''].join(' ')} src={greetingImage.publicURL} />
        </div>
        <div className={'six columns'}>
          <div className={['row', style.introductionText].join(' ')}>
            <div className={'eleven columns'}>
              <span className={style.greetingText} dangerouslySetInnerHTML={{__html: greetingText}}/>
            </div>
          </div>
          <div className={['row', style.moreInformation].join(' ')}>
            {role && (<div className={'four columns'}>
              <h5>Role</h5>
              <div>{role}</div>
            </div>
            )}
            {platform && (
              <div className={'four columns'}>
                <h5>Platform</h5>
                <div>{platform}</div>
              </div>
            )}
            {!platform && !role && (
              <div>
                <h5>Tools</h5>
                {tools.map((tool, index) =>
                  (<div key={index}>{tool}</div>)
                )}
              </div>
            )}
            {platform && role && (
              <div className={'four columns'}>
                <h5>Tools</h5>
                {tools.map((tool, index) =>
                  (<div key={index}>{tool}</div>)
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={['row', style.arrowContainer].join(' ')}>
        <img src={arrowSVG} onClick={moveToNextSection} />
      </div>
    </>
  )
};

ProjectIntroduction.propTypes = {
  id: PropTypes.string.isRequired,
  greetingImage: PropTypes.object.isRequired,
  greetingText: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired
};

export default ProjectIntroduction;
