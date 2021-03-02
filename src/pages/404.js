import {Link} from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import style from "../styles/404.module.css";

const NotFoundPage = () => (
  <Layout>
    <div className={'row'}>
      <div className={'one column'}>&nbsp;</div>
      <div className={'ten columns'}>
        <h1 className={style.header}>404</h1>
        <div className={style.subtitle}>Page not found</div>
        <div className={style.container}>
          <Link className={style.returnHome} to="/">Return Home</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
