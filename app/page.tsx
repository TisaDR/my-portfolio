
const githubUrl = "YOUR_GITHUB_URL";
const linkedinUrl = "YOUR_LINKEDIN_URL";
const email = "YOUR_EMAIL";

export default function Home() {
  return (
    <main>
      <nav>
        <a href="#" className="nav-logo">
          TISA
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let&apos;s Talk ↗
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">HELLO, I&apos;M TISA PATEL</p>

          <h1>
            Building software
            <br />
            <span>that solves problems.</span>
          </h1>

          <p className="hero-description">
            I&apos;m a technology student focused on backend development,
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

        {/* ANIME CHARACTER */}
        <div className="hero-visual">
          <div className="anime-scene">
            <svg
              className="anime-svg"
              viewBox="0 0 500 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="pinkGlow">
                  <stop offset="0%" stopColor="#c487df" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                <linearGradient
                  id="hairGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#30283b" />
                  <stop offset="55%" stopColor="#15131c" />
                  <stop offset="100%" stopColor="#09090d" />
                </linearGradient>

                <linearGradient
                  id="hoodieGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#292332" />
                  <stop offset="100%" stopColor="#0e0d13" />
                </linearGradient>
              </defs>

              <ellipse
                cx="300"
                cy="280"
                rx="230"
                ry="260"
                fill="url(#pinkGlow)"
              />

              {/* Chair */}
              <path
                d="M390 260 Q465 260 465 365 L445 480 L380 480 L390 350"
                fill="#17151d"
                stroke="#3a3343"
                strokeWidth="4"
              />

              {/* Hair */}
              <g className="anime-hair">
                <path
                  d="M175 205
                  Q150 110 225 65
                  Q320 5 400 75
                  Q455 125 420 255
                  Q410 350 350 390
                  L180 355
                  Q125 290 175 205Z"
                  fill="url(#hairGradient)"
                />

                <circle
                  cx="370"
                  cy="73"
                  r="52"
                  fill="#17131d"
                  stroke="#3a3045"
                  strokeWidth="5"
                />

                <path
                  d="M340 55 Q370 25 400 58"
                  fill="none"
                  stroke="#51425e"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </g>

              {/* Face */}
              <path
                d="M205 135
                Q290 88 375 140
                L365 245
                Q345 300 290 315
                Q235 300 215 245Z"
                fill="#e5bbae"
              />

              {/* Fringe */}
              <path
                d="M190 160
                Q190 82 280 75
                Q375 70 395 155
                Q350 120 330 145
                Q310 95 285 145
                Q250 105 225 160Z"
                fill="#211b29"
              />

              {/* Eyes */}
              <g className="anime-eyes">
                <ellipse
                  cx="250"
                  cy="200"
                  rx="17"
                  ry="25"
                  fill="#211b2d"
                />

                <ellipse
                  cx="330"
                  cy="200"
                  rx="17"
                  ry="25"
                  fill="#211b2d"
                />

                <circle cx="255" cy="193" r="6" fill="white" />
                <circle cx="335" cy="193" r="6" fill="white" />

                <path
                  d="M230 180 Q250 165 270 180"
                  fill="none"
                  stroke="#211b29"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M310 180 Q330 165 350 180"
                  fill="none"
                  stroke="#211b29"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>

              {/* Nose */}
              <path
                d="M292 210 Q285 230 294 235"
                fill="none"
                stroke="#b98682"
                strokeWidth="3"
              />

              {/* Smile */}
              <path
                d="M278 255 Q295 267 312 255"
                fill="none"
                stroke="#955f69"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Headphones */}
              <path
                d="M195 185 Q195 75 290 75 Q385 75 385 185"
                fill="none"
                stroke="#c487df"
                strokeWidth="17"
                strokeLinecap="round"
              />

              <rect
                x="178"
                y="168"
                width="40"
                height="68"
                rx="17"
                fill="#c487df"
                stroke="#8f5fa4"
                strokeWidth="4"
              />

              <rect
                x="362"
                y="168"
                width="40"
                height="68"
                rx="17"
                fill="#c487df"
                stroke="#8f5fa4"
                strokeWidth="4"
              />

              <circle cx="198" cy="202" r="12" fill="#211b29" />
              <circle cx="382" cy="202" r="12" fill="#211b29" />

              {/* Neck */}
              <path
                d="M270 290 L270 330 L325 330 L325 290"
                fill="#e5bbae"
              />

              {/* Hoodie */}
              <path
                d="M205 315
                Q240 300 270 315
                Q295 335 325 315
                Q375 320 405 370
                L430 520
                L160 520
                L180 370Z"
                fill="url(#hoodieGradient)"
                stroke="#383040"
                strokeWidth="5"
              />

              {/* Hood */}
              <path
                d="M235 320 Q295 350 355 320"
                fill="none"
                stroke="#4a3d51"
                strokeWidth="12"
              />

              {/* Hoodie strings */}
              <path
                d="M270 340 L265 395"
                stroke="#c487df"
                strokeWidth="4"
              />

              <path
                d="M320 340 L325 395"
                stroke="#c487df"
                strokeWidth="4"
              />

              {/* Arms */}
              <path
                d="M190 370
                Q145 390 135 455
                Q135 485 165 490
                Q195 485 210 445
                L235 390Z"
                fill="#1b1722"
                stroke="#383040"
                strokeWidth="5"
              />

              <path
                d="M380 365
                Q425 390 430 450
                Q425 485 395 485
                Q370 470 370 430Z"
                fill="#1b1722"
                stroke="#383040"
                strokeWidth="5"
              />

              {/* Desk */}
              <rect
                x="85"
                y="480"
                width="350"
                height="28"
                rx="8"
                fill="#29232f"
              />

              <rect
                x="110"
                y="505"
                width="20"
                height="80"
                fill="#18151d"
              />

              <rect
                x="390"
                y="505"
                width="20"
                height="80"
                fill="#18151d"
              />

              {/* Laptop */}
              <path
                d="M175 365 L365 365 L385 485 L155 485Z"
                fill="#302a38"
                stroke="#777080"
                strokeWidth="6"
              />

              <rect
                x="190"
                y="380"
                width="160"
                height="85"
                rx="6"
                fill="#0b0a0f"
              />

              <text
                x="220"
                y="420"
                fill="#c487df"
                fontSize="25"
                fontFamily="monospace"
              >
                {"</>"}
              </text>

              <path
                d="M150 485 L385 485 L410 500 L125 500Z"
                fill="#625a68"
              />

              {/* Books */}
              <rect
                x="30"
                y="445"
                width="105"
                height="25"
                rx="4"
                fill="#3a3045"
              />

              <rect
                x="40"
                y="418"
                width="95"
                height="25"
                rx="4"
                fill="#544363"
              />

              <rect
                x="50"
                y="391"
                width="85"
                height="25"
                rx="4"
                fill="#29232f"
              />

              <text x="58" y="435" fill="#c7a8d5" fontSize="11">
                CODE
              </text>

              <text x="62" y="462" fill="#c7a8d5" fontSize="10">
                DREAM
              </text>

              {/* Drink */}
              <path
                d="M425 410 L475 410 L467 485 L433 485Z"
                fill="#8f5fa4"
                stroke="#c487df"
                strokeWidth="3"
              />

              <rect
                x="430"
                y="395"
                width="40"
                height="18"
                rx="8"
                fill="#c487df"
              />

              <path
                d="M450 395 L450 360"
                stroke="#c487df"
                strokeWidth="5"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-heading">
          <p className="section-number">01 — PROJECTS</p>
          <h2>Things I&apos;ve built.</h2>
        </div>

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

      {/* SKILLS */}
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
            <h3>Data &amp; AI</h3>
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

      {/* ABOUT */}
      <section id="about">
        <div className="section-heading">
          <p className="section-number">03 — ABOUT</p>
          <h2>A little about me.</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I&apos;m a technology student who enjoys building practical
              software and understanding how systems work behind the scenes.
            </p>

            <p>
              My interests are centered around backend development,
              artificial intelligence, and data. I like taking an idea,
              breaking it down, and turning it into a working application.
            </p>

            <p>
              Outside of coding, I&apos;m always exploring new technologies
              and looking for opportunities to grow through real-world
              projects and experiences.
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

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-heading">
          <p className="section-number">04 — EXPERIENCE</p>
          <h2>Where I&apos;ve worked.</h2>
        </div>

        <div className="experience-item">
          <div>
            <span className="experience-date">2025 — Present</span>
          </div>

          <div>
            <h3>Customer Service Representative</h3>

            <p className="experience-company">Farm Boy</p>

            <p className="experience-description">
              Working in a customer-focused environment while developing
              communication, teamwork, problem-solving, and operational skills.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
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

            <p className="experience-company">College Name</p>

            <p className="experience-description">
              Coursework and hands-on projects focused on software
              development, databases, data analytics, and modern technology.
            </p>
          </div>
        </div>

        <div className="education-item">
          <div>
            <span className="experience-date">Bachelor&apos;s Degree</span>
          </div>

          <div>
            <h3>Bachelor&apos;s Degree</h3>

            <p className="experience-company">University Name, India</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-content">
          <p className="section-number">06 — CONTACT</p>

          <h2>
            Let&apos;s build something
            <br />
            <span>together.</span>
          </h2>

          <p className="contact-description">
            I&apos;m always interested in connecting, learning, and
            working on interesting technology projects.
          </p>

          <div className="contact-links">
            <a href={`mailto:${email}`}>Email Me ↗</a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href={githubUrl}
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
        <p>Built with Next.js &amp; TypeScript</p>
      </footer>
    </main>
  );
}
