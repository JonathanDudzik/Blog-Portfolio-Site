// React and extern libraries imports
import React from "react"

// import components
import Toolbar from "../../../components/Toolbar/toolbar"

// CSS Module import
import * as styles from "./module.module.css"


const Module = () => {
  return (
  <div className={styles.moduleGrid}>
    <div className={styles.moduleToolbar}>
      <Toolbar />
    </div>
    <div className={styles.moduleMain}>
      <div>
        <button>Download PDF transcript</button>
        <a href="google">Download PDF transcript</a>
        <video>blank</video>
      </div>
    </div>
  </div>
  )
}

export default Module
