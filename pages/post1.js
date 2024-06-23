import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Post1 = () => (
  <Layout>
    <Seo title="The Greatest Shooter Of All Time" />
    <article id="post1" className={styles.article}>
      <h2>The Greatest Shooter Of All Time</h2>
      <StaticImage
        src="../images/game.jpg"
        alt="Basketball game"
        placeholder="blurred"
        layout="constrained"
        width={600}
      />
      <p>There is no question on who is the greatest basketball shooter of all time. He was the seventh overall choice in the 2009 NBA draft, having played Davidson's college ball before. Being the owner of multiple records, especially in three-point shooting, Curry is considered the best player of all time and the best shooter in history. Throughout his 15 NBA seasons, Curry has represented the Warriors. He is a four-time NBA champion, two-time NBA MVP, NBA Finals MVP, NBA All-Star Game MVP, NBA Clutch Player of the Year, and the first-ever MVP of the Western Conference Finals. Along with winning two gold medals at the FIBA World Cup with the U.S. men's national team, he is also a ten-time NBA All-Star, a two-time NBA scoring champion, and an All-NBA pick (four of which were on the First Team). HIS NAME IS STEPH CURRY!</p>
    </article>
  </Layout>
)

export default Post1
