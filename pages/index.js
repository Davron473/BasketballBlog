import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className={styles.header}>
      <h1>Basketball Blog</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link to="/post1">Post 1</Link></li>
          <li><Link to="/post2">Post 2</Link></li>
          <li><Link to="/post3">Post 3</Link></li>
        </ul>
      </nav>
    </header>

    <main className={styles.mainContent}>
      <p>Welcome to the Basketball Blog! Click on the links above to read the posts.</p>
      <StaticImage
        src="../images/home.jpg"
        alt="Home image"
        placeholder="blurred"
        layout="constrained"
        width={600}
      />
    </main>

    <footer className={styles.footer}>
      <p>&copy; Davron's 2024 Basketball Blog. MIU Miami University · Built with Gatsby</p>
    </footer>
  </Layout>
)

export default IndexPage
