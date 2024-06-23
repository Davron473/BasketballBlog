import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Post2 = () => (
  <Layout>
    <Seo title="Top 10 NBA Players of All Time" />
    <article id="post2" className={styles.article}>
      <h2>Top 10 NBA Players of All Time</h2>
      <StaticImage
        src="../images/players.jpg"
        alt="Top NBA players"
        placeholder="blurred"
        layout="constrained"
        width={600}
      />
      <p>Above is a image of just a glimpse of half of the greatest basketball legends to ever touch a basketball. Some may argue and say that MJ is the GOAT, Lebron or even Kobe. Despite what others may think. This is my top 10 basketball players of all time:</p>
      <ol>
        <li><b>Kobe Bryant</b></li>
        <li><b>Michael Jordan</b></li>
        <li><b>LeBron James</b></li>
        <li><b>Magic Johnson</b></li>
        <li><b>Larry Bird</b></li>
        <li><b>Shaquille O'Neal</b></li>
        <li><b>Steph Curry</b></li>
        <li><b>Hakeem Olajuwon</b></li>
        <li><b>Bill Russell</b></li>
        <li><b>Wilt Chamberlain</b></li>
      </ol>
    </article>
  </Layout>
)

export default Post2
