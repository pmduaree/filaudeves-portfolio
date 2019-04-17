import React  from "react"
import PropTypes from "prop-types"
import style from "../styles/workIntroduction.module.css"
import arrowSVG from "../resources/arrow.svg"

const WorkIntroduction = ({greetingImage, greetingText, role, platform, tools}) => (
  <>
  <div className={'row'}>
    <div className={'six columns'}>
      <img className={style.greetingImage} src={greetingImage}/>
    </div>
    <div className={'six columns'}>
      <div className={['row', style.introductionText].join(' ')}>
        <div className={'eleven columns'}>
          <span className={style.greetingText}> {greetingText} </span>
        </div>
      </div>
      <div className={['row', style.moreInformation].join(' ')}>
        <div className={'four columns'}>
          <div className={style.titleText}>Role</div>
          <div>{role}</div>
        </div>
        <div className={'four columns'}>
          <div className={style.titleText}>Platform</div>
          <div>{platform}</div>
        </div>
        <div className={'four columns'}>
          <div className={style.titleText}>Tools</div>
          {tools.map((tool, index) =>
            (<div key={index}>{tool}</div>)
          )}
        </div>
      </div>
    </div>
  </div>
  <div className={['row', style.arrowContainer].join(' ')}>
    <img src={arrowSVG}/>
  </div>
  </>
  )
;

WorkIntroduction.propTypes = {
  greetingImage: PropTypes.node.isRequired,
  greetingText: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  tools: PropTypes.array.isRequired,
};

export default WorkIntroduction;
