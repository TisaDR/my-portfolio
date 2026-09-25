
const githubUrl = "YOUR_GITHUB_URL";
const linkedinUrl = "YOUR_LINKEDIN_URL";
const email = "YOUR_EMAIL";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
     
<nav>
  <a href="#" className="nav-logo">
    TISA
  </a>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#experience">Experience</a>
    <a href="#contact">Contact</a>
  </div>

  <a
    href="#contact"
    className="nav-button"
  >
    Let's Talk ↗
  </a>
</nav>


{/* Hero */}

<section className="hero">

  <div className="hero-content">
    <p className="hero-label">HELLO, I'M TISA PATEL</p>

    <h1>
      Building software
      <br />
      <span>that solves problems.</span>
    </h1>

    <p className="hero-description">
      I'm a technology student focused on backend development,
      artificial intelligence, and data-driven applications.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View Projects
      </a>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-button"
      >
        GitHub ↗
      </a>

      <a
        href="/Tisa_Patel_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-button"
      >
        Resume ↗
      </a>
    </div>
  </div>

  <div className="hero-visual">
    <div className="anime-placeholder">
      <span>YOUR</span>
      <strong>CHARACTER</strong>
      <small>COMING SOON</small>
    </div>
  </div>

</section>


{/* About */}
<section id="about">
  <div className="section-heading">
    <p className="section-number">03 — ABOUT</p>
    <h2>A little about me.</h2>
  </div>

  <div className="about-content">
    <div className="about-text">
      <p>
        I'm a technology student interested in building software
        that combines backend engineering, artificial intelligence,
        and data.
      </p>

      <p>
        I enjoy turning ideas into working applications and
        continuously learning new technologies through hands-on
        projects.
      </p>
    </div>

    <div className="about-details">

      <div className="detail-block">
        <span>Currently</span>
        <h3>IT Student</h3>
      </div>

      <div className="detail-block">
        <span>Focus</span>
        <h3>Backend • AI • Data</h3>
      </div>

      <div className="detail-block">
        <span>Based in</span>
        <h3>Toronto, Canada</h3>
      </div>

    </div>
  </div>
</section>

{/* Experience */}
<section id="experience">
  <div className="section-heading">
    <p className="section-number">04 — EXPERIENCE</p>
    <h2>Where I've worked.</h2>
  </div>

  <div className="experience-item">
    <div>
      <span className="experience-date">2025 — Present</span>
    </div>

    <div>
      <h3>Customer Service Representative</h3>
      <p className="experience-company">
        Farm Boy
      </p>

      <p className="experience-description">
        Working in a customer-focused environment while developing
        communication, teamwork, problem-solving, and operational skills.
      </p>
    </div>
  </div>
</section>

{/* Education */}
<section id="education">
  <div className="section-heading">
    <p className="section-number">05 — EDUCATION</p>
    <h2>My education.</h2>
  </div>

  <div className="education-item">
    <div>
      <span className="experience-date">2025 — 2026</span>
    </div>

    <div>
      <h3>Post-Graduate Certificate — Information Technology</h3>
      <p className="experience-company">
        College Name
      </p>

      <p className="experience-description">
        Coursework and hands-on projects focused on software
        development, databases, data analytics, and modern
        technology.
      </p>
    </div>
  </div>

  <div className="education-item">
    <div>
      <span className="experience-date">Bachelor's Degree</span>
    </div>

    <div>
      <h3>Bachelor's Degree</h3>
      <p className="experience-company">
        University Name, India
      </p>
    </div>
  </div>
</section>


   
{/* Projects */}
<section id="projects">
  <div className="section-heading">
    <p className="section-number">01 — PROJECTS</p>
    <h2>Things I've built.</h2>
  </div>

  ```tsx
<div className="projects-grid">

  <article className="project-card">
    <div className="project-top">
      <span>01</span>
      <span>BACKEND • AI</span>
    </div>

    <h3>AI Conversation Manager</h3>

    <p>
      A backend application designed to preserve AI conversation
      context across model limits, helping maintain continuity
      throughout long conversations.
    </p>

    <div className="tech-tags">
      <span>Spring Boot</span>
      <span>PostgreSQL</span>
      <span>Docker</span>
      <span>AI</span>
    </div>

    <div className="project-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Demo ↗
      </a>
    </div>
  </article>


  <article className="project-card">
    <div className="project-top">
      <span>02</span>
      <span>FULL STACK • GRAPH</span>
    </div>

    <h3>CreatorMarket</h3>

    <p>
      A marketplace connecting brands and creators with
      authentication, sponsorship features, database integration,
      and graph-based analytics.
    </p>

    <div className="tech-tags">
      <span>Next.js</span>
      <span>TypeScript</span>
      <span>Prisma</span>
      <span>Neo4j</span>
    </div>

    <div className="project-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Demo ↗
      </a>
    </div>
  </article>


  <article className="project-card">
    <div className="project-top">
      <span>03</span>
      <span>DATA • ANALYTICS</span>
    </div>

    <h3>Wealth Insights</h3>

    <p>
      A financial analytics dashboard for exploring client,
      portfolio, and transaction data through interactive
      visualizations and business insights.
    </p>

    <div className="tech-tags">
      <span>Power BI</span>
      <span>Python</span>
      <span>SQL</span>
      <span>Data Analytics</span>
    </div>

    <div className="project-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Dashboard ↗
      </a>
    </div>
  </article>


  <article className="project-card">
    <div className="project-top">
      <span>04</span>
      <span>FULL STACK • PAYROLL</span>
    </div>

    <h3>Payroll Management System</h3>

    <p>
      A payroll-focused application with employee management,
      backend APIs, payroll history, and AI-powered anomaly
      detection.
    </p>

    <div className="tech-tags">
      <span>Java</span>
      <span>Spring Boot</span>
      <span>React</span>
      <span>PostgreSQL</span>
    </div>

    <div className="project-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
        GitHub ↗
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Demo ↗
      </a>
    </div>
  </article>





  </div>
</section>


    
{/* Skills */}
<section id="skills">
  <div className="section-heading">
    <p className="section-number">02 — SKILLS</p>
    <h2>What I work with.</h2>
  </div>

  <div className="skills-grid">

    <div className="skill-category">
      <h3>Languages</h3>
      <div className="skill-list">
        <span>Java</span>
        <span>Python</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>Kotlin</span>
        <span>SQL</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Backend</h3>
      <div className="skill-list">
        <span>Spring Boot</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>REST APIs</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Frontend</h3>
      <div className="skill-list">
        <span>React</span>
        <span>Next.js</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Data & AI</h3>
      <div className="skill-list">
        <span>PostgreSQL</span>
        <span>MongoDB</span>
        <span>Power BI</span>
        <span>Machine Learning</span>
        <span>Hugging Face</span>
      </div>
    </div>

    <div className="skill-category">
      <h3>Tools</h3>
      <div className="skill-list">
        <span>Git</span>
        <span>GitHub</span>
        <span>Docker</span>
        <span>Postman</span>
      </div>
    </div>

  </div>
</section>


{/* Contact */}
<section id="contact">
  <div className="contact-content">
    <p className="section-number">06 — CONTACT</p>

    <h2>
      Let's build something
      <br />
      <span>together.</span>
    </h2>

    <p className="contact-description">
      I'm always interested in connecting, learning, and
      working on interesting technology projects.
    </p>

    <div className="contact-links">
     <a href={`mailto:${email}`}>
  Email Me ↗
</a>

     <a
  href={linkedinUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn ↗
</a>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
    </div>
  </div>
</section>

<footer>
  <p>© 2026 Tisa Patel</p>
  <p>Built with Next.js & TypeScript</p>
</footer>


</main>
  );
}
