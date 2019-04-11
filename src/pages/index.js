import React from "react"

import Layout from "../components/Layout"
import homeImg from "../resources/home.svg";
import style from "../styles/index.module.css";

const IndexPage = () => (
  <Layout>
    <div className={style.greetingText}>
      <div className={style.nameText}>I'm Ivonne.</div>
      <div>UX/UI Designer</div>
    </div>
    <img className={style.imageContainer} src={homeImg}/>
  </Layout>
);

export default IndexPage
