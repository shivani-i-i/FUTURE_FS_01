import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Award, Users, BookOpen } from "lucide-react";
import profile from "./assets/shivani.jpg";

function App() {
  const [dark, setDark] = useState(true);

  const skills = [
    { name: "C++", category: "Programming" },
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "SQL", category: "Database" },
    { name: "React.js", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "HTML and CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Pandas", category: "Data Science" },
    { name: "NumPy", category: "Data Science" },
    { name: "scikit-learn", category: "Data Science" },
    { name: "TensorFlow", category: "Data Science" },
    { name: "Data Analysis", category: "Data Science" },
    { name: "Machine Learning", category: "Data Science" },
    { name: "Git and GitHub", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Jupyter", category: "Tools" }
  ];

  const projects = [
    {
      title: "Smart Agriculture App for Kerala Farmers",
      description: "Built a comprehensive data-driven application specifically designed to help Kerala farmers with crop health analysis and weather-based recommendations. The application features offline-first functionality to ensure accessibility in low-connectivity rural regions, making it practical for real-world agricultural use.",
      tech: ["Python", "Data Analysis", "Mobile App", "Offline-First"],
      github: "https://github.com/shivani-i-i",
      live: "#",
      highlights: ["Crop Health Analysis", "Weather-Based Recommendations", "Offline-First Design", "Rural Connectivity Solution"]
    },
    {
      title: "MindPause – Mental Health Platform",
      description: "Developed a scalable mental health platform with AI-based mood analysis to help users track and understand their emotional well-being. Focused on modular system design and user-centric architecture to ensure privacy, accessibility, and ease of use.",
      tech: ["AI/ML", "React", "Python", "System Design"],
      github: "https://github.com/shivani-i-i",
      live: "#",
      highlights: ["AI-Based Mood Analysis", "Modular Architecture", "User-Centric Design", "Privacy-Focused"]
    },
    {
      title: "Car Rental System",
      description: "Implemented a comprehensive booking and vehicle management system using Object-Oriented Programming principles. The system features user authentication, dynamic pricing logic based on vehicle type and rental duration, and efficient data handling.",
      tech: ["Java", "OOP", "SQL", "Authentication"],
      github: "https://github.com/shivani-i-i",
      live: "#",
      highlights: ["User Authentication", "Dynamic Pricing Logic", "OOP Design Patterns", "Data Persistence"]
    }
  ];

  const experiences = [
    {
      role: "Data Science Intern",
      company: "Corizo",
      period: "January 2025 – March 2025",
      description: "Gained hands-on experience in the complete data science workflow. Performed comprehensive data analysis and preprocessing using Python, Pandas, and NumPy. Built and evaluated machine learning models using scikit-learn, focusing on model accuracy and performance optimization. Created insightful data visualizations using Matplotlib and Seaborn to communicate findings effectively to cross-functional teams.",
      skills: ["Python", "Pandas", "NumPy", "scikit-learn", "Data Visualization", "Machine Learning", "Data Preprocessing"]
    },
    {
      role: "React Development Intern",
      company: "Skillfiled",
      period: "October 2025 – November 2025",
      description: "Contributed to the development of modern web applications using React.js. Developed reusable and responsive React UI components following industry best practices. Improved UI performance through efficient state management and component optimization. Mentored peers in frontend development best practices and collaborated with cross-functional teams in an agile development environment.",
      skills: ["React.js", "JavaScript", "Component Design", "UI/UX", "Performance Optimization", "Agile", "Mentorship"]
    }
  ];

  const education = [
    {
      institution: "SRM Institute of Science and Technology, Ramapuram",
      degree: "B.Tech Computer Science (Big Data Analytics)",
      period: "2024 – 2028",
      grade: "CGPA: 9.6/10",
      location: "Chennai, Tamil Nadu"
    },
    {
      institution: "Army Public School, Wellington (CBSE)",
      degree: "Higher Secondary Education",
      period: "2021 – 2024",
      grade: "Class 12: 83.3% | Class 10: 93.8%",
      location: "Wellington, Tamil Nadu"
    }
  ];

  const extracurricular = [
    {
      title: "Tech Lead",
      organization: "Coding Club, SRM Ramapuram",
      description: "Leading technical initiatives and mentoring junior students in programming, data structures, and competitive coding."
    },
    {
      title: "Creative Co-Lead",
      organization: "IIE Innovation Incubation Entrepreneurship Cell",
      description: "Driving creative initiatives and fostering innovation culture among students."
    },
    {
      title: "Former Head Girl",
      organization: "Army Public School, Wellington",
      description: "Demonstrated leadership, organizational skills, and commitment to student welfare."
    },
    {
      title: "Basketball Player",
      organization: "School & College Athletics",
      description: "Active team player demonstrating teamwork, discipline, and competitive spirit."
    }
  ];

  const awards = [
    {
      title: "District-Level Medalist in Karate",
      description: "Demonstrated discipline, consistency, and competitive excellence in martial arts."
    },
    {
      title: "Winner, Southern-Level Debate Competition",
      description: "Recognized for critical thinking, effective communication, and leadership abilities."
    }
  ];

  return (
    <div className={dark ? "dark" : "light"} style={{
      minHeight: "100vh",
      fontFamily: "system-ui, -apple-system, sans-serif",
      transition: "all 0.4s",
      background: dark ? "#0f172a" : "#f8fafc",
      color: dark ? "#e5e7eb" : "#020617"
    }}>
      
      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        position: "sticky",
        top: 0,
        background: dark ? "rgba(15, 23, 42, 0.9)" : "rgba(248, 250, 252, 0.9)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
        borderBottom: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Kumari Shivani</h2>
        <button onClick={() => setDark(!dark)} style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          background: dark ? "#38bdf8" : "#0ea5e9",
          color: dark ? "#020617" : "#fff",
          transition: "transform 0.2s"
        }}
        onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.target.style.transform = "scale(1)"}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          padding: "100px 20px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <motion.img
          src={profile}
          alt="Kumari Shivani"
          whileHover={{ scale: 1.05 }}
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            margin: "0 auto 30px",
            border: "4px solid #38bdf8",
            display: "block"
          }}
        />
        
        <h1 style={{ fontSize: "3rem", marginBottom: "10px", fontWeight: "800" }}>
          Hi, I'm Shivani 👋
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          margin: "20px 0",
          color: dark ? "#cbd5e1" : "#475569",
          lineHeight: "1.6"
        }}>
          B.Tech CSE student specializing in <strong>Big Data Analytics</strong> at SRM Institute | Passionate about <strong>Data Science</strong>, <strong>Machine Learning</strong> & <strong>Full-Stack Development</strong>
        </p>
        <p style={{
          fontSize: "1rem",
          color: dark ? "#94a3b8" : "#64748b",
          marginBottom: "10px"
        }}>
          📍 Chennai, Tamil Nadu | 📧 Shivani82208@gmail.com | 📱 +91 8220833770
        </p>
        
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", marginTop: "30px" }}>
          <a href="https://github.com/shivani-i-i" target="_blank" rel="noopener noreferrer" style={{
            padding: "12px 24px",
            background: "#38bdf8",
            color: "#020617",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "transform 0.2s"
          }}
          onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
            <Github size={20} /> GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/kumari-shivani-h0/" target="_blank" rel="noopener noreferrer" style={{
            padding: "12px 24px",
            background: "#0ea5e9",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "transform 0.2s"
          }}
          onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
            <Linkedin size={20} /> LinkedIn
          </a>
          
          <button style={{
            padding: "12px 24px",
            background: dark ? "#1e293b" : "#e2e8f0",
            color: dark ? "#e5e7eb" : "#020617",
            border: `2px solid ${dark ? "#38bdf8" : "#0ea5e9"}`,
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "transform 0.2s"
          }}
          onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
            <Download size={20} /> Resume
          </button>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "30px", textAlign: "center", fontWeight: "700" }}>
          About Me
        </h2>
        <div style={{ 
          fontSize: "1.1rem", 
          lineHeight: "1.8",
          color: dark ? "#cbd5e1" : "#475569",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <p style={{ marginBottom: "20px", textAlign: "left" }}>
            I am a second-year B.Tech Computer Science Engineering student at <strong>SRM Institute of Science and Technology, Ramapuram</strong>, specializing in <strong>Big Data Analytics</strong>. With a strong academic record of <strong>9.6 CGPA</strong>, I have developed expertise in programming (C++, Java, Python), data structures, algorithms, and data analytics.
          </p>
          <p style={{ marginBottom: "20px", textAlign: "left" }}>
            My technical journey is driven by a passion for solving real-world problems through data-driven solutions and scalable software development. Through internships at <strong>Corizo</strong> (Data Science) and <strong>Skillfiled</strong> (React Development), I've gained hands-on experience in building machine learning models, developing responsive web applications, and collaborating in agile team environments.
          </p>
          <p style={{ marginBottom: "20px", textAlign: "left" }}>
            Beyond academics, I serve as <strong>Tech Lead of the Coding Club at SRM Ramapuram</strong>, where I mentor junior students in programming and competitive coding. I'm also the <strong>Creative Co-Lead at IIE Innovation Incubation Entrepreneurship Cell</strong>, driving innovation initiatives. My diverse interests include karate (district-level medalist), debate competitions (southern-level winner), and basketball.
          </p>
          <p style={{ textAlign: "left" }}>
            I am actively seeking opportunities in <strong>data science, machine learning, and full-stack development</strong> where I can apply my analytical mindset, technical skills, and leadership experience to create meaningful impact.
          </p>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", textAlign: "center", fontWeight: "700" }}>
          Technical Skills
        </h2>
        
        {["Programming", "Frontend", "Backend", "Data Science", "Database", "Tools"].map((category) => {
          const categorySkills = skills.filter(s => s.category === category);
          if (categorySkills.length === 0) return null;
          
          return (
            <div key={category} style={{ marginBottom: "40px" }}>
              <h3 style={{ 
                fontSize: "1.3rem", 
                marginBottom: "20px", 
                color: dark ? "#38bdf8" : "#0ea5e9",
                fontWeight: "600",
                textAlign: "left"
              }}>
                {category}
              </h3>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "15px"
              }}>
                {categorySkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      padding: "15px",
                      background: dark ? "rgba(56, 189, 248, 0.1)" : "rgba(14, 165, 233, 0.1)",
                      border: `2px solid ${dark ? "#38bdf8" : "#0ea5e9"}`,
                      borderRadius: "12px",
                      textAlign: "center",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s"
                    }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", textAlign: "center", fontWeight: "700" }}>
          Professional Experience
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "30px",
                background: dark ? "rgba(30, 41, 59, 0.5)" : "rgba(226, 232, 240, 0.5)",
                borderRadius: "12px",
                borderLeft: "4px solid #38bdf8"
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "5px", fontWeight: "700" }}>
                {exp.role}
              </h3>
              <p style={{ 
                color: dark ? "#94a3b8" : "#64748b",
                marginBottom: "15px",
                fontWeight: "600"
              }}>
                {exp.company} | {exp.period}
              </p>
              <p style={{ 
                lineHeight: "1.8",
                color: dark ? "#cbd5e1" : "#475569",
                marginBottom: "15px",
                textAlign: "left"
              }}>
                {exp.description}
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {exp.skills.map(skill => (
                  <span key={skill} style={{
                    padding: "4px 12px",
                    background: dark ? "rgba(56, 189, 248, 0.2)" : "rgba(14, 165, 233, 0.2)",
                    color: dark ? "#38bdf8" : "#0ea5e9",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", textAlign: "center", fontWeight: "700" }}>
          Projects
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                padding: "30px",
                background: dark ? "rgba(30, 41, 59, 0.5)" : "rgba(226, 232, 240, 0.5)",
                borderRadius: "12px",
                border: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
                transition: "all 0.3s"
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", fontWeight: "700" }}>
                {project.title}
              </h3>
              <p style={{ 
                marginBottom: "15px", 
                lineHeight: "1.8",
                color: dark ? "#cbd5e1" : "#475569",
                textAlign: "left"
              }}>
                {project.description}
              </p>
              
              {project.highlights && (
                <div style={{ marginBottom: "15px" }}>
                  <p style={{ 
                    fontWeight: "600", 
                    marginBottom: "8px",
                    color: dark ? "#38bdf8" : "#0ea5e9",
                    fontSize: "0.9rem"
                  }}>
                    Key Features:
                  </p>
                  <ul style={{ 
                    marginLeft: "20px",
                    color: dark ? "#cbd5e1" : "#475569",
                    lineHeight: "1.6"
                  }}>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ marginBottom: "5px" }}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{
                    padding: "4px 12px",
                    background: dark ? "#38bdf8" : "#0ea5e9",
                    color: dark ? "#020617" : "#fff",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  padding: "8px 16px",
                  background: dark ? "#1e293b" : "#e2e8f0",
                  color: dark ? "#e5e7eb" : "#020617",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  <Github size={16} /> Code
                </a>
                <a href={project.live} style={{
                  padding: "8px 16px",
                  background: "#38bdf8",
                  color: "#020617",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", textAlign: "center", fontWeight: "700" }}>
          <BookOpen size={32} style={{ display: "inline", marginRight: "10px", verticalAlign: "middle" }} />
          Education
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "30px",
                background: dark ? "rgba(30, 41, 59, 0.5)" : "rgba(226, 232, 240, 0.5)",
                borderRadius: "12px",
                borderLeft: "4px solid #38bdf8"
              }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "5px", fontWeight: "700" }}>
                {edu.institution}
              </h3>
              <p style={{ 
                color: dark ? "#38bdf8" : "#0ea5e9",
                marginBottom: "5px",
                fontWeight: "600",
                fontSize: "1.1rem"
              }}>
                {edu.degree}
              </p>
              <p style={{ 
                color: dark ? "#94a3b8" : "#64748b",
                marginBottom: "5px",
                fontWeight: "600"
              }}>
                {edu.period} | {edu.location}
              </p>
              <p style={{ 
                color: dark ? "#38bdf8" : "#0ea5e9",
                fontWeight: "700",
                fontSize: "1.1rem"
              }}>
                {edu.grade}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXTRACURRICULAR */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", textAlign: "center", fontWeight: "700" }}>
          <Users size={32} style={{ display: "inline", marginRight: "10px", verticalAlign: "middle" }} />
          Leadership & Extracurricular
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px"
        }}>
          {extracurricular.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                padding: "25px",
                background: dark ? "rgba(30, 41, 59, 0.5)" : "rgba(226, 232, 240, 0.5)",
                borderRadius: "12px",
                border: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
                transition: "all 0.3s"
              }}
            >
              <h3 style={{ 
                fontSize: "1.2rem", 
                marginBottom: "8px", 
                fontWeight: "700",
                color: dark ? "#38bdf8" : "#0ea5e9"
              }}>
                {activity.title}
              </h3>
              <p style={{ 
                color: dark ? "#94a3b8" : "#64748b",
                marginBottom: "10px",
                fontWeight: "600",
                fontSize: "0.95rem"
              }}>
                {activity.organization}
              </p>
              <p style={{ 
                lineHeight: "1.6",
                color: dark ? "#cbd5e1" : "#475569",
                fontSize: "0.95rem"
              }}>
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* AWARDS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ padding: "80px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", textAlign: "center", fontWeight: "700" }}>
          <Award size={32} style={{ display: "inline", marginRight: "10px", verticalAlign: "middle" }} />
          Honors & Awards
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "25px", maxWidth: "800px", margin: "0 auto" }}>
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "25px",
                background: dark ? "rgba(56, 189, 248, 0.1)" : "rgba(14, 165, 233, 0.1)",
                borderRadius: "12px",
                borderLeft: "4px solid #38bdf8"
              }}
            >
              <h3 style={{ 
                fontSize: "1.3rem", 
                marginBottom: "10px", 
                fontWeight: "700",
                color: dark ? "#38bdf8" : "#0ea5e9"
              }}>
                🏆 {award.title}
              </h3>
              <p style={{ 
                lineHeight: "1.6",
                color: dark ? "#cbd5e1" : "#475569"
              }}>
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ 
          padding: "80px 40px", 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "700" }}>
          Let's Connect
        </h2>
        <p style={{ 
          fontSize: "1.1rem",
          color: dark ? "#cbd5e1" : "#475569",
          marginBottom: "30px"
        }}>
          Feel free to reach out for collaborations or just a friendly chat!
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
          <a href="mailto:Shivani82208@gmail.com" style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "1.1rem",
            color: dark ? "#38bdf8" : "#0ea5e9",
            textDecoration: "none",
            fontWeight: "600"
          }}>
            <Mail size={24} /> Shivani82208@gmail.com
          </a>
          <p style={{ color: dark ? "#cbd5e1" : "#475569" }}>📱 +91 8220833770</p>
          <p style={{ color: dark ? "#cbd5e1" : "#475569" }}>📍 Chennai, Tamil Nadu, India</p>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "40px 20px",
        borderTop: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
        color: dark ? "#94a3b8" : "#64748b"
      }}>
        <p>© 2026 Kumari Shivani. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;