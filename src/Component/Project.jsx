import React, { useState } from 'react';
import ProjectCard from './ProjectCard';


import flight from "../asset/img/flight-booking.png";
import Chat_App from "../asset/img/Chat-App.png";
import Gallery from "../asset/img/Gallery-app.png";
import YouTube from "../asset/img/YouTube_Clone.png";
import BugetPlanner from "../asset/img/Budget_Planner.png";
import Jobwebsite from "../asset/img/Job-website.png";
import desc from "../asset/img/desc screen.png";
import app_pic1 from "../asset/img/app_pic1.jpg";
import app_pic2 from "../asset/img/app_pics2.jpg"
const Project = () => {
  const [activeTab, setActiveTab] = useState('web');

  const webProjects = [
    { title: "Job Website", description: "Backend development", tag: "Backend", imgUrl: Jobwebsite, link: "https://pixel-position-t9ce.onrender.com/" },
    { title: "Flight Booking", description: "Design and development", tag: "Full-stack", imgUrl: flight, link: "https://flight-booking-website-eta.vercel.app/" },
    { title: "Chat App", description: "Messaging website", tag: "Real-time", imgUrl: Chat_App, link: "https://chat-website-three.vercel.app/" },
    { title: "Photo Gallery", description: "Photo storage website", tag: "Frontend", imgUrl: Gallery, link: "https://photo-gallery-sepia-seven.vercel.app/" },
    { title: "Vid Tube", description: "YouTube clone", tag: "Clone", imgUrl: YouTube, link: "https://youtube-clone-virid-six.vercel.app/" },
    { title: "Budget Planner", description: "Budget planning website", tag: "Utility", imgUrl: BugetPlanner, link: "https://expense-tracker-pi-gules.vercel.app/" },
  ];

  const gameProjects = [
    { title: "WayaGram", description: "Mobile App", tag: "app", imgUrl: app_pic2, link: "https://play.google.com/store/apps/details?id=com.wayagram.euApp&hl=en" },
    { title: "TUtus's App", description: "Ecommerce App", tag: "app", imgUrl: desc, link: "https://drive.google.com/file/d/1Ppid1Oo9_VKUuluc9LlhjjW-Alx140Zr/view?usp=drive_link" },
    { title: "SFGHB – Searching for God’s Heartbeat ", description: "Design and development", tag: "Mobile Application", imgUrl: app_pic1, link: "https://play.google.com/store/search?q=sfghb&c=apps&hl=en" },
  ];

  const tabs = [
    { key: 'web', label: 'Web Apps' },
    { key: 'apps', label: 'Mobile Apps' },
    { key: 'upcoming', label: 'Upcoming' },
  ];

  const currentProjects = activeTab === 'web' ? webProjects : activeTab === 'apps' ? gameProjects : [];

  return (
    <section style={{ background: '#faf9f6', padding: '4rem 1.5rem', minHeight: '100vh' }} id="projects">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9a7f5e', fontWeight: 500, marginBottom: '0.6rem' }}>
          Portfolio
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.8rem', fontWeight: 400, color: '#1a1a1a', margin: '0 0 1rem' }}>
          My <em style={{ fontStyle: 'italic', color: '#b87c4c' }}>Projects</em>
        </h2>
        <p style={{ fontSize: 15, color: '#6b6460', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
          A selection of recent work spanning design, development, and everything in between.
        </p>
      </div>

      {/* Tab Switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', gap: 4, background: '#f0ece6', borderRadius: 100, padding: 4 }}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '8px 20px',
                fontSize: 13,
                fontWeight: 500,
                border: 'none',
                borderRadius: 100,
                cursor: 'pointer',
                color: activeTab === tab.key ? '#1a1a1a' : '#6b6460',
                background: activeTab === tab.key ? '#fff' : 'transparent',
                boxShadow: activeTab === tab.key ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid or Empty State */}
      {activeTab === 'upcoming' ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#9a9490' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem', opacity: 0.4 }}>◇</div>
          <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', fontWeight: 400, color: '#4a4540', margin: '0 0 0.5rem' }}>
            More to come
          </h4>
          <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.6, maxWidth: 300, margin: '0 auto' }}>
            New projects and releases coming soon — stay tuned for updates.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Project;