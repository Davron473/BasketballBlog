import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Post3 = () => (
  <Layout>
    <Seo title="How to Improve Your Basketball Skills" />
    <article id="post3" className={styles.article}>
      <h2>How to Improve Your Basketball Skills</h2>
      <StaticImage
        src="../images/skills.jpg"
        alt="Improving basketball skills"
        placeholder="blurred"
        layout="constrained"
        width={600}
      />
      <p>There's always space for improvement when it comes to honing your basketball talents, whether it's through ball handling proficiency, speed enhancement, endurance building, or mental toughness building. The greatest method to get better at basketball is to enjoy playing and hone your abilities. Coaches will steer you in the proper way if you practice alone, so it might be worth joining a club or basketball academy in your area.</p>
      <p> These are some basic top 5 ways to improve your basketball skills:</p>
      <ol>
        <li><b>Master ball handling skills</b></li>
        <li><b>Get in good shape</b></li>
        <li><b>Improve game speed</b></li>
        <li><b>Practice how to create space from defenders</b></li>
        <li><b>Identify and work on improving your weak spots</b></li>
      </ol>
    </article>
  </Layout>
)

export default Post3
