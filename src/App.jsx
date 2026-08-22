import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo">
          Sakshi<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="hire-btn">
          Hire me
        </a>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-text">

            <p className="small-title">
              HELLO, I'M
            </p>

            <h1>
              Sakshi <span>Pawar</span>
            </h1>

            <h2>
              Data Analyst | AI & ML Graduate
            </h2>

            <p className="hero-description">
              AI & Machine Learning graduate skilled in SQL, Power BI,
              Python, Pandas, NumPy and Excel, with hands-on experience
              in data cleaning, exploratory data analysis, predictive
              analytics and dashboard development.
            </p>

            <p className="hero-description">
              I build end-to-end analytics projects that translate raw
              data into actionable business insights.
            </p>


            {/* BUTTONS */}

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View my work
              </a>

              <a
                href="https://www.linkedin.com/in/sakshipawar0407/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                LinkedIn
              </a>

              <a
                href="/Sakshi_Pawar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Resume
              </a>

            </div>


            {/* CONTACT INFO */}

            <div className="contact-info">

              <span>
                📍 Sangli, Maharashtra, India
              </span>

              <span>
                ✉️ psakshi2402@gmail.com
              </span>

              <span>
                📱 7385576691
              </span>

            </div>

          </div>


          {/* PHOTO */}

          <div className="hero-image">

            <div className="image-circle">

              <img
                src="/profile.jpg"
                alt="Sakshi Pawar"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="section"
        id="about"
      >

        <div className="section-heading">

          <p>ABOUT ME</p>

          <h2>
            Turning data into useful insights.
          </h2>

        </div>


        <div className="about-grid">

          <div className="about-card">

            <div className="card-icon">
              📊
            </div>

            <h3>
              Data Analytics
            </h3>

            <p>
              I work with structured and raw datasets to identify
              patterns, trends and useful business information.
            </p>

          </div>


          <div className="about-card">

            <div className="card-icon">
              💻
            </div>

            <h3>
              Python & SQL
            </h3>

            <p>
              I use Python and SQL for data cleaning, transformation,
              analysis and extracting meaningful information.
            </p>

          </div>


          <div className="about-card">

            <div className="card-icon">
              📈
            </div>

            <h3>
              Dashboard Development
            </h3>

            <p>
              I create interactive dashboards using Power BI to
              present KPIs, trends and business insights clearly.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        className="section"
        id="skills"
      >

        <div className="section-heading">

          <p>MY SKILLS</p>

          <h2>
            Tools I work with.
          </h2>

        </div>


        <div className="skills-grid">

          <div className="skill-card">

            <h3>
              Data Analytics & Visualization
            </h3>

            <div className="skill-tags">

              <span>Power BI</span>
              <span>Tableau</span>
              <span>Looker Studio</span>
              <span>Excel</span>
              <span>Pivot Tables</span>
              <span>VLOOKUP</span>

            </div>

          </div>


          <div className="skill-card">

            <h3>
              Programming & Database
            </h3>

            <div className="skill-tags">

              <span>Python</span>
              <span>SQL</span>
              <span>MySQL</span>
              <span>PHP</span>
              <span>Pandas</span>
              <span>NumPy</span>

            </div>

          </div>


          <div className="skill-card">

            <h3>
              Machine Learning
            </h3>

            <div className="skill-tags">

              <span>Predictive Analytics</span>
              <span>Classification</span>
              <span>Regression</span>
              <span>Model Evaluation</span>
              <span>NLP</span>

            </div>

          </div>


          <div className="skill-card">

            <h3>
              Tools & Platforms
            </h3>

            <div className="skill-tags">

              <span>GitHub</span>
              <span>VS Code</span>
              <span>Google Colab</span>
              <span>Android Studio</span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-heading">

          <p>SELECTED WORK</p>

          <h2>
            Projects
          </h2>

        </div>


        <div className="projects-grid">


          {/* PROJECT 1 */}

          <div className="project-card">

            <span className="project-number">
              01
            </span>

            <h3>
              Customer Churn & Revenue Risk Analysis
            </h3>

            <ul>

              <li>
                Analyzed 7,000+ customer records to identify
                key churn drivers, finding month-to-month
                contract customers churned far more than
                annual holders.
              </li>

              <li>
                Built a Logistic Regression model predicting
                churn risk with 80% accuracy and surfaced
                the top predictive retention features.
              </li>

              <li>
                Designed an interactive Power BI dashboard
                with churn KPIs and filterable segments.
              </li>

            </ul>

            <div className="tech-tags">

              <span>Python</span>
              <span>SQL</span>
              <span>scikit-learn</span>
              <span>Power BI</span>

            </div>

          </div>


          {/* PROJECT 2 */}

          <div className="project-card">

            <span className="project-number">
              02
            </span>

            <h3>
              Sales Dashboard Analysis
            </h3>

            <ul>

              <li>
                Developed interactive dashboards analyzing
                10,000+ sales records to track revenue
                trends and KPIs.
              </li>

              <li>
                Used SQL for extraction, cleaning and
                transformation, improving reporting time
                by 40%.
              </li>

            </ul>

            <div className="tech-tags">

              <span>Power BI</span>
              <span>SQL</span>
              <span>ETL</span>

            </div>

          </div>


          {/* PROJECT 3 */}

          <div className="project-card project-three">

            <span className="project-number">
              03
            </span>

            <h3>
              AI-Powered Smart Interview Preparation System
            </h3>

            <ul>

              <li>
                Built an AI interview preparation system
                supporting 100+ mock interview sessions.
              </li>

              <li>
                Implemented voice and facial analysis for
                real-time feedback, improving response
                accuracy by 25%.
              </li>

            </ul>

            <div className="tech-tags">

              <span>Python</span>
              <span>NLP</span>
              <span>Speech Recognition</span>
              <span>OpenCV</span>

            </div>

          </div>

        </div>

      </section>
<section className="experience-section" id="experience">

  <div className="experience-grid">

    {/* EXPERIENCE */}
    <div className="experience-column">

      <p className="section-label">
        WHERE I WORKED
      </p>

      <h2>Experience</h2>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-date">
            FEB 2026 – AUG 2026
          </div>

          <div className="timeline-title">
            Mobile Application Developer Intern
          </div>

          <div className="timeline-place">
            ECS Software Technologies Pvt. Ltd., Karad
          </div>

          <p className="timeline-description">
            — Built and tested features for an Android application using Java and Android Studio.
          </p>

          <p className="timeline-description">
            — Designed and implemented 5+ user interface screens.
          </p>

        </div>


        <div className="timeline-item">

          <div className="timeline-date">
            APR 2024 – MAY 2024
          </div>

          <div className="timeline-title">
            Python & Machine Learning Intern
          </div>

          <div className="timeline-place">
            Techspot Infotech, Sangli
          </div>

          <p className="timeline-description">
            — Developed Python scripts and ML models for data analysis and prediction tasks.
          </p>

          <p className="timeline-description">
            — Worked with datasets of 5,000+ records.
          </p>

        </div>


        <div className="timeline-item">

          <div className="timeline-date">
            JUL 2022 – AUG 2022
          </div>

          <div className="timeline-title">
            Software Trainee (PHP & MySQL)
          </div>

          <div className="timeline-place">
            EarthLogic Technologies, Kolhapur
          </div>

          <p className="timeline-description">
            — Built and maintained PHP/MySQL modules for web-based management systems.
          </p>

        </div>

      </div>

    </div>


    {/* EDUCATION */}
    <div className="education-column">

      <p className="section-label">
        ACADEMICS
      </p>

      <h2>Education</h2>

      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-date">
            SEPT 2023 – JUNE 2026
          </div>

          <div className="timeline-title">
            B.Tech in Artificial Intelligence & Machine Learning
          </div>

          <div className="timeline-place">
            Adarsh Institute of Technology & Research Center, Vita
          </div>

          <div className="education-score">
            CGPA: 8/10
          </div>

        </div>


        <div className="timeline-item">

          <div className="timeline-date">
            OCT 2020 – JUNE 2023
          </div>

          <div className="timeline-title">
            Diploma in Computer Engineering
          </div>

          <div className="timeline-place">
            Bharati Vidyapeeth's College of Engineering, Kolhapur
          </div>

          <div className="education-score">
            76%
          </div>

        </div>


        <div className="timeline-item">

          <div className="timeline-date">
            JUNE 2019 – MARCH 2020
          </div>

          <div className="timeline-title">
            Secondary School Certificate
          </div>

          <div className="timeline-place">
            Pt Vishnu Digambarkar Vidyalaya, Palus
          </div>

          <div className="education-score">
            79%
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* ================= CERTIFICATIONS ================= */}

      <section
        className="section"
        id="certifications"
      >

        <div className="section-heading">

          <p>CERTIFICATIONS</p>

          <h2>
            Learning & credentials.
          </h2>

        </div>


        <div className="certifications-grid">

          <div className="cert-card">

            <span>✓</span>

            <div>
              <h3>
                Google Cloud Career Launchpad
              </h3>

              <p>
                Data Analytics Track
              </p>
            </div>

          </div>


          <div className="cert-card">

            <span>✓</span>

            <div>
              <h3>
                Data Analytics
              </h3>

              <p>
                Deloitte
              </p>
            </div>

          </div>


          <div className="cert-card">

            <span>✓</span>

            <div>
              <h3>
                GenAI Powered Data Analytics
              </h3>

              <p>
                Tata · Forage
              </p>
            </div>

          </div>


          <div className="cert-card">

            <span>✓</span>

            <div>
              <h3>
                Python for Data Science
              </h3>

              <p>
                IBM
              </p>
            </div>

          </div>


          <div className="cert-card">

            <span>✓</span>

            <div>
              <h3>
                Machine Learning with Python
              </h3>

              <p>
                Professional Certification
              </p>
            </div>

          </div>


          <div className="cert-card">

            <span>✓</span>

            <div>
              <h3>
                Automatic Waste Segregation System
              </h3>

              <p>
                Paper Publication · IJIRT
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-container">

          <p className="small-title">
            GET IN TOUCH
          </p>

          <h2>
            Let's work <span>together.</span>
          </h2>

          <p>
            I'm open to Data Analyst, Business Analyst and
            entry-level AI & Machine Learning opportunities.
          </p>

          <a
            href="mailto:psakshi2402@gmail.com"
            className="contact-email"
          >
            psakshi2402@gmail.com
          </a>


          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/sakshipawar0407/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/psakshi2402-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="mailto:psakshi2402@gmail.com"
            >
              Email
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          © 2026 Sakshi Pawar
        </span>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;