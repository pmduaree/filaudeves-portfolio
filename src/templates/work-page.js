import React from "react"
import Layout from "../components/Layout"
import PropTypes from "prop-types"
import style from "../styles/workPage.module.css"
import meh from "../images/freshdesk-and-trello-greeting.png" //ToDo remove this

const WorkPage = (props) => {
  const workData = props.pageContext.workData;
  return (
    <Layout>
      <div className={'row'}>
        <div className={'one column'}/>
        <div className={'eight columns'}>
          <div className={style.mainTitle}>{workData.title}</div>
          <div className={style.mainSubtitle}>{workData.subtitle}</div>
          </div>
      </div>
      <div className={style.space}/>
      <div className={'row'}>
        <div className={'six columns'}>
          <img className={style.greetingImage} src={meh}/>
        </div>
        <div className={'six columns'}>
          <div className={style.space}/>
          <div className={'row'}>
            <div className={'eleven columns'}>
              <span className={style.greetingText}> {workData.greetingText} </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

WorkPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default WorkPage;
