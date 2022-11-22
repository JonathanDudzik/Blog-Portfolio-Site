// import services
import * as React from "react"

// CSS Module import
import * as styles from "./resume.module.css"

const Resume = () => (
  <div className={styles.resumeGrid}>
    <div className={styles.leftGrid}>
      <div className={styles.contact}>
        <h1 style={{ fontSize: `xx-large` }}>Jonathan Wesley Dudzik</h1>
        <h2 style={{ fontSize: `large` }}>Software Developer</h2>
        <p>Jonathan.d.wesley@gmail.com</p>
        <p>419-944-4290</p>
        <p>2627 Dwight Place</p>
        <p>Raleigh, NC</p>
      </div>
      
      <h2 className={styles.header} style={{ fontSize: `x-large` }}>Summary of Skills</h2>
      
      <div className={styles.skillsList}>
        <h3>Soft Skills:</h3>
        <p>Servant leadership</p>
        <p>Teaching and mentorship</p>
        <p>Problem solving</p>
        <p>Open-mindedness</p>
        <p>Clear communication</p>
        <p>Independent learning</p>

        <h3 style={{ paddingTop: `2rem` }}>Front End UI:</h3>
        <p>HTML5, CSS3, JavaScript</p>
        <p>VueJS, ReactJS, jQuery</p>
        <p>Bootstrap, Bulma, Material Design</p>
        <p>Ajax (Fetch and Axios)</p>
        <p>UI mockups (Figma)</p>
        <p>Web Accessibility (WCAG)</p>

        <h3 style={{ paddingTop: `2rem` }}>DevOps and Backend:</h3>
        <p>Git version control</p>
        <p>Node.js</p>
        <p>Ruby</p>
        <p>Shell</p>
        <p>Heroku and Firebase</p>
        <p>Google Cloud and Azure</p>
        <p>Non-relational databases</p>
        <p>Relational SQL databases</p>
        <p>Agile methodology</p>
        
      </div>

      <h2 className={styles.header} style={{ fontSize: `x-large` }}>Education</h2>

      <div className={styles.educationList}>
        <p style={{ marginBottom: `0px` }}>Bachelor of Bussiness Communication</p>
        <p style={{ margin: `0px` }}><i>Ohio University</i></p>
        <p style={{ marginBottom: `0px` }}>Master of Instructional Design Technology</p>
        <p style={{ margin: `0px` }}><i>American College of Education</i></p>
      </div>
    </div>
    <div className={styles.rightFlex}>
      <h3 style={{ marginBottom: `0px` }}>Software Architect | Maverick Solutions</h3>
      <p style={{ margin: `0px` }}><i>November 2020 - Current</i></p>
      <p>Write clean, self documenting, and modular code</p>
      <p>Write unit and end-to-end (system) tests for all new features</p>
      <p>Manage Agile projects and development team</p>
      <p>Pair program to decrease time spent on difficult projects and speed up onboarding of new developers</p>
      <p>Assisted in a restructure of the development team that decreased developer turn over - achieved this by implementing agile principles and a culture of servant leadership and mentoring</p>
      <p>Took on new development project that was not anticipated to be completed on time due to the unexpected termination of Lead Developer - project completed on-time with 74 commits and 39,000 lines of code</p>
      <p>Refactored 24,953 lines of undocumented jQuery code that was causing errors</p>

      <h3 style={{ marginBottom: `0px` }}>Administrative Officer II | North Carolina DHHS</h3>
      <p style={{ margin: `0px` }}><i>March 2018 - November 2020</i></p>
      <p>Hired as Instructional Designer but necessarily learned web development in order to solve multifaceted problems our branch was facing</p>
      <p>Learned Vue.js and converted over 50 hours of Adobe Flash content into HTML5 while working closely with stakeholders and subject matter experts</p>
      <p>Documented and trained on UI, UX, accessibility, and branding standards for our branch website and public facing web apps</p>
      <p>Administered our Adobe Cloud platform which included using the Adobe API, deploying content, creating users, managing permissions, pulling reports, troubleshooting issues, and training staff</p>
      <p>Served as technical subject matter expert for our branch through excellently supporting our team in all technical areas, documenting technical requirements for software procurements, and writing internal technology policies</p>
      <p>Found solutions to training and technology problems through collaboration and innovative thinking</p>
      
      <h3 style={{ marginBottom: `0px` }}>Freelance Developer | Intricate, LLC</h3>
      <p style={{ margin: `0px` }}><i>June 2020 - September 2020</i></p>
      <p>Worked closely with a Senior Developer to implement functional components in React, Next.js, Express, Material UI, and Styled Components</p>

      <h3 style={{ marginBottom: `0px` }}>Volunteer Developer | Knowbility</h3>
      <p style={{ margin: `0px` }}><i>September 2019 - November 2019</i></p>
      <p>Worked with UX and accessibility professionals to create a fully WCAG 2.1 compliant website</p>
      
      <h3 style={{ marginBottom: `0px` }}>Freelance Developer | Immersive Design</h3>
      <p style={{ margin: `0px` }}><i>August 2019 - November 2020</i></p>
      <p>Removed bugs and refactored a large code base of non-documented jQuery code - clients included Kubota, the State of California, and Kia</p>
      
      <h3 style={{ marginBottom: `0px` }}>Volunteer Developer | IEEE ICICLE</h3>
      <p style={{ margin: `0px` }}><i>March 2019 - May 2019</i></p>
      <p>Saved the chapter from spending $300.00 on an event app by offering to develop the 2019 IEEE conference of Learning Engineering mobile app myself using Vue.js and AWS.</p>
      
      <h3 style={{ marginBottom: `0px` }}>Owner | On Course English, LLC</h3>
      <p style={{ margin: `0px` }}><i>September 2014 - April 2018</i></p>
      <p>Applied software development and system administration skills to create and maintain a hybrid WordPress and Moodle learning platform for my students</p>
    </div>
  </div>
)

export default Resume