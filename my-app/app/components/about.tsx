// /components/about.tsx

import Image from "next/image";

const About = () => {
  return (
    <section className="about-container">
      {/* Top Section */}
      <div className="header">
        <div className="profile-image">
          <Image
            src="/profile.jfif" // Replace with your image path
            alt="Kristine A. Trienta"
            width={150}
            height={150}
          />
        </div>
        <div className="header-text">
          <h1 className="name">Kristine A. Trienta</h1>
          <p className="contact">09696087815</p>
          <p className="email">katrienta389.pbox@parsu.edu.ph</p>
          <p className="quote">
            "I focus on building reliable, user-friendly web applications. I enjoy solving problems, working with others, and making sure the end result works well for the people who use it."
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate Web Engineer with 5 years of hands-on experience building responsive, scalable, and user-centric web applications. My journey began with curiosity and a love for clean code, and has evolved into a career where I get to solve real-world problems through elegant digital solutions.
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Workflow</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Figma</li>
              <li>Agile/Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
