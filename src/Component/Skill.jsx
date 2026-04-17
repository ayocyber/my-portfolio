import React, { useState } from 'react';

const skills = [
  { name: "Flutter", icon: "◈", color: "#0288D1", bg: "#E1F5FE" },
  { name: "Dart", icon: "◇", color: "#01579B", bg: "#B3E5FC" },
  { name: "React", icon: "⬡", color: "#0277BD", bg: "#E3F2FD" },
  { name: "Laravel", icon: "◉", color: "#C62828", bg: "#FFEBEE" },
  {name: "PHP", icon: "◆", color: "#6A1B9A", bg: "#F3E5F5" },
  {name: "MySQL", icon: "⬟", color: "#2E7D32", bg: "#E8F5E9" },
  { name: "JavaScript", icon: "◇", color: "#F57F17", bg: "#FFFDE7" },
  { name: "Node.js", icon: "◈", color: "#2E7D32", bg: "#E8F5E9" },
  { name: "Firebase", icon: "◆", color: "#E65100", bg: "#FFF3E0" },
  { name: "Git", icon: "⬟", color: "#BF360C", bg: "#FBE9E7" },
  { name: "Figma", icon: "◉", color: "#6A1B9A", bg: "#F3E5F5" },
];

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="skill-card"
      style={{
        animationDelay: `${index * 70}ms`,
        background: hovered ? skill.color : '#fff',
        borderColor: hovered ? skill.color : 'rgba(0,0,0,0.09)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="skill-icon"
        style={{
          color: hovered ? '#fff' : skill.color,
          background: hovered ? 'rgba(255,255,255,0.18)' : skill.bg,
        }}
      >
        {skill.icon}
      </span>
      <span
        className="skill-name"
        style={{ color: hovered ? '#fff' : '#1a1a2e' }}
      >
        {skill.name}
      </span>
    </div>
  );
};

const Skill = () => {
  return (
    <section className="skill-section" id="skill">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,600;0,700;1,300;1,600&family=DM+Sans:wght@400;500&display=swap');

        .skill-section {
          background: #faf9f6;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .skill-section::before {
          content: '';
          position: absolute;
          top: -60px;
          left: -80px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, #e8eaff 0%, transparent 70%);
          pointer-events: none;
        }

        .skill-section::after {
          content: '';
          position: absolute;
          bottom: -60px;
          right: -80px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, #fde8e8 0%, transparent 70%);
          pointer-events: none;
        }

        .skill-inner {
          max-width: 820px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .skill-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 52px;
          flex-wrap: wrap;
        }

        .skill-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a0a0b0;
          margin-bottom: 12px;
        }

        .skill-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(34px, 5vw, 54px);
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .skill-title em {
          font-style: italic;
          font-weight: 300;
          color: #5c5cff;
        }

        .skill-desc {
          color: #72728a;
          font-size: 14px;
          line-height: 1.7;
          max-width: 260px;
          margin: 0;
          align-self: flex-end;
        }

        .skill-divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.07);
          margin-bottom: 40px;
        }

        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
        }

        .skill-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.09);
          background: #fff;
          cursor: default;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          animation: fadeUp 0.45s both ease-out;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        .skill-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        .skill-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .skill-name {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .skill-footer {
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-count-badge {
          font-size: 12px;
          color: #5c5cff;
          background: #eeeeff;
          padding: 5px 14px;
          border-radius: 20px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .skill-footer-note {
          font-size: 12px;
          color: #b0b0c0;
          font-style: italic;
          font-family: 'Fraunces', serif;
        }
      `}</style>

      <div className="skill-inner">
        <div className="skill-header">
          <div>
            <p className="skill-label">Capabilities</p>
            <h2 className="skill-title">
              Skills &amp;<br /><em>Experience</em>
            </h2>
          </div>
          <p className="skill-desc">
            Technologies and tools I use to build modern web and mobile applications.
          </p>
        </div>

        <div className="skill-divider" />

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        <div className="skill-footer">
          <span className="skill-count-badge">{skills.length} technologies</span>
          <span className="skill-footer-note">hover to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Skill;