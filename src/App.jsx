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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-btn">
          Hire Me
        </a>
      </header>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-container">

          <div className="hero-text">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Sakshi <span>Pawar</span>
            </h1>

            <h2>B.Tech Graduate | Aspiring IT Professional</h2>

            <p className="hero-description">
            I am a 2026 B.Tech graduate in Artificial Intelligence and Machine Learning with knowledge of Python, SQL, Java, PHP, Linux, and various development and data tools. I have worked on academic projects and internships involving data analysis, machine learning, application development, and software testing. I enjoy learning new technologies, solving problems, and applying my technical knowledge to practical tasks. I am looking for an entry-level opportunity where I can contribute my skills, gain industry experience, and grow as a technology professional.
            </p>


            <div className="hero-buttons">
              <a
                href="/Sakshi_Pawar_Resume.pdf"
                className="btn primary"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>

              <a href="#contact" className="btn outline">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/sakshipawar0407/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/psakshi2402-hub"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="mailto:sakshirpawar24@gmail.com">
                Email
              </a>
            </div>
          </div>


          <div className="hero-image-wrapper">
            <div className="image-glow"></div>

            <div className="profile-image">
              <img src="/profile.jpg" alt="Sakshi Pawar" />
            </div>

            <div className="floating-card card-one">
              <strong>3+</strong>
              <span>Projects</span>
            </div>

            <div className="floating-card card-two">
              <strong>AI & ML</strong>
              <span>Graduate</span>
            </div>
          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="section about-section" id="about">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>A little about me</h2>
        </div>

        <div className="about-layout">

          <div className="about-image">
            <img src="/profile.jpg" alt="Sakshi Pawar" />
          </div>

          <div className="about-content">

            <span className="about-role">
              Data Analyst & AI / ML Graduate
            </span>

            <h3>
              I enjoy working with data and solving practical problems.
            </h3>

            <p>
              I recently completed my B.Tech in Artificial Intelligence
              and Machine Learning. During college and internships, I
              worked on projects related to data analysis, machine
              learning and application development.
            </p>

            <p>
              I enjoy learning new tools and trying them on practical
              problems. I am currently looking for an entry-level
              opportunity where I can use my skills, learn from the team
              and grow as a Data Analyst.
            </p>

            <div className="personal-info">

              <div>
                <span>Name</span>
                <strong>Sakshi Pawar</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>sakshirpawar24@gmail.com</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Sangli, Maharashtra</strong>
              </div>

              <div>
                <span>Interested In</span>
                <strong>Technology & IT Opportunities</strong>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= EDUCATION ================= */}
      <section className="section education-section" id="education">

        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My Education</h2>
        </div>

        <div className="education-grid">

          <div className="education-card">
            <span className="education-year">
              2023 – 2026
            </span>

            <h3>
              B.Tech in Artificial Intelligence & Machine Learning
            </h3>

            <h4>
              Adarsh Institute of Technology & Research Center, Vita
            </h4>

            <p className="score">
              CGPA: 8/10
            </p>
          </div>


          <div className="education-card">
            <span className="education-year">
              2020 – 2023
            </span>

            <h3>
              Diploma in Computer Engineering
            </h3>

            <h4>
              Bharati Vidyapeeth's College of Engineering, Kolhapur
            </h4>

            <p className="score">
              76%
            </p>
          </div>


          <div className="education-card">
            <span className="education-year">
              2019 – 2020
            </span>

            <h3>
              Secondary School Certificate
            </h3>

            <h4>
              Pt. Vishnu Digambar Paluskar Vidyalaya, Palus
            </h4>

            <p className="score">
              79%
            </p>
          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="section experience-section" id="experience">

        <div className="section-heading">
          <p>EXPERIENCE</p>
          <h2>My Internship Experience</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                FEB 2026 – AUG 2026
              </span>

              <h3>Project Trainee</h3>

              <h4>
                ECS Software Technologies Pvt. Ltd., Karad
              </h4>

              <p>
                Contributed to the Pigmy Bank Management System in the IT Operations department.Developed Customer Registration Module features using Java, XML and Android SDK, and created app screens in
Android Studio
              </p>

              <p>
               Worked on registration functionality, database connectivity and software testing.
              </p>

            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                APR 2024 – MAY 2024
              </span>

              <h3>AI/ML Developer Intern</h3>

              <h4>
                Techspot Infotech, Sangli
              </h4>

              <p>
                Completed assignments and project tasks involving Artificial Intelligence and Machine Learning concepts and tools.

              </p>

              <p>
                Practised machine learning methods and problem-solving through internship activities.
              </p>

            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                JUL 2022 – AUG 2022
              </span>

              <h3>Software Trainee – PHP & MySQL</h3>

              <h4>
                EarthLogic Technologies, Kolhapur
              </h4>

              <p>
                 I worked with PHP and MySQL to handle software tasks, such, as project design and analysis.Finished assigned tasks. I kept improving PHP, MySQL and software tasks communication and problem-solving
skills
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-card">
            <strong>13+</strong>
            <span>Projects</span>
          </div>

          <div className="stat-card">
            <strong>7+</strong>
            <span>Technical Skills</span>
          </div>

          <div className="stat-card">
            <strong>3</strong>
            <span>Internships</span>
          </div>

          <div className="stat-card">
            <strong>2026</strong>
            <span>B.Tech Graduate</span>
          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section className="section skills-section" id="skills">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Tools I Work With</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">01</div>

            <h3>Data Analytics & Visualization</h3>

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
            <div className="skill-icon">02</div>

            <h3>Programming & Database</h3>

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
            <div className="skill-icon">03</div>

            <h3>Machine Learning & AI</h3>

            <div className="skill-tags">
              <span>Predictive Analytics</span>
              <span>Classification</span>
              <span>Regression</span>
              <span>Model Evaluation</span>
              <span>NLP</span>
            </div>
          </div>


          <div className="skill-card">
            <div className="skill-icon">04</div>

            <h3>Tools & Platforms</h3>

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
      <section className="section projects-section" id="projects">

        <div className="section-heading">
          <p>MY PROJECTS</p>
          <h2>Projects I have worked on</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-top">
              <span>01</span>
              <span>DATA ANALYTICS</span>
            </div>

            <h3>
              Customer Churn & Revenue Risk Analysis
            </h3>

            <p>
              I worked with more than 7,000 customer records to
              understand why some customers leave a service.
            </p>

            <p>
              I used Python and SQL to clean and explore the data.
              I found that month-to-month customers were more likely
              to leave. I also built a Logistic Regression model that
              reached 80% accuracy.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>scikit-learn</span>
              <span>Power BI</span>
            </div>

          </div>


          <div className="project-card">

            <div className="project-top">
              <span>02</span>
              <span>POWER BI</span>
            </div>

            <h3>
              Sales Dashboard Analysis
            </h3>

            <p>
              I created a Power BI dashboard using more than 10,000
              sales records. The dashboard shows sales trends,
              revenue and important KPIs in one place.
            </p>

            <p>
              I used SQL to prepare and clean the data before
              creating the dashboard. This helped reduce the time
              needed for regular reporting.
            </p>

            <div className="project-tags">
              <span>Power BI</span>
              <span>SQL</span>
              <span>ETL</span>
            </div>

          </div>


          <div className="project-card">

            <div className="project-top">
              <span>03</span>
              <span>AI / ML</span>
            </div>

            <h3>
              AI-Powered Smart Interview Preparation System
            </h3>

            <p>
              I built this project to help students practice
              interviews. The system uses Python, NLP and Speech
              Recognition to process interview responses.
            </p>

            <p>
              I also added voice and facial analysis so users can
              receive feedback after a mock interview.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>NLP</span>
              <span>Speech Recognition</span>
              <span>OpenCV</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= RESUME ================= */}
      <section className="resume-section">

        <div className="resume-content">

          <div>
            <p className="eyebrow">MY RESUME</p>

            <h2>
              Interested in my work?
            </h2>

            <p>
              You can download my resume to see my education,
              internship experience, projects and skills.
            </p>
          </div>

          <a
            href="/Sakshi_Pawar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Download Resume
          </a>

        </div>
      </section>


     
      {/* ================= ACHIEVEMENTS ================= */}
      <section className="section achievements-section">

        <div className="section-heading">
          <p>ACHIEVEMENTS</p>
          <h2>Some things I am proud of</h2>
        </div>

        <div className="achievement-grid">

          <div className="achievement-card">
            <strong>13+</strong>
            <span>Projects Completed</span>
          </div>

          <div className="achievement-card">
            <strong>100+</strong>
            <span>Mock Interview Sessions</span>
          </div>

          <div className="achievement-card">
            <strong>2026</strong>
            <span>B.Tech Graduation</span>
          </div>

          <div className="achievement-card">
            <strong>2</strong>
            <span>Research Paper Presented</span>
          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">

        <div className="contact-container">

          <p className="eyebrow">CONTACT</p>

          <h2>
            Let's <span>connect.</span>
          </h2>

          <p>
            I'm currently looking for an entry-level opportunity in
            Data Analytics or a related field. If you have an
            opportunity or would simply like to connect, feel free
            to reach out.
          </p>

          <div className="contact-details">

            <a href="mailto:sakshirpawar24@gmail.com">
              <small>Email</small>
              sakshirpawar24@gmail.com
            </a>

            <a href="tel:7385576691">
              <small>Phone</small>
              7385576691
            </a>

            <div>
              <small>Location</small>
              Sangli, Maharashtra, India
            </div>

          </div>


          <div className="contact-buttons">

            <a
              href="https://www.linkedin.com/in/sakshipawar0407/"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/psakshi2402-hub"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              GitHub
            </a>

            <a
              href="mailto:sakshirpawar24@gmail.com"
              className="btn outline"
            >
              Email Me
            </a>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div>
          <strong>
            Sakshi<span>.</span>
          </strong>

          <p>
            Data Analyst | AI & ML Graduate
          </p>
        </div>

        <p>
          © 2026 Sakshi Pawar. All Rights Reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;