import React, { useState } from 'react';

const cardColors = ['#dde8f5', '#f5e6dd', '#ddf5e8', '#f5dde8', '#e8ddf5', '#f5f0dd'];

const ProjectCard = ({ title, description, tag, imgUrl, link, index }) => {
  const [hovered, setHovered] = useState(false);
  const bgColor = cardColors[index % cardColors.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid #ece8e2',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.08)' : 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ height: 160, overflow: 'hidden', background: bgColor, position: 'relative' }}>
        <img
          src={imgUrl}
          alt={`${title} preview`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {tag && (
          <span style={{
            position: 'absolute', top: 10, left: 10,
            fontSize: 10, fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', padding: '4px 10px',
            borderRadius: 100, background: 'rgba(255,255,255,0.88)',
            color: '#6b6460', backdropFilter: 'blur(4px)',
          }}>
            {tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '1.1rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ fontSize: 15, fontWeight: 500, color: '#1a1a1a', margin: '0 0 4px' }}>{title}</p>
        <p style={{ fontSize: 13, color: '#9a9490', margin: '0 0 1rem', fontWeight: 300 }}>{description}</p>

        <a                                      
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 500, color: '#b87c4c',
            textDecoration: 'none', marginTop: 'auto',
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#b87c4c'}
          onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
        >
          View project
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H5M10 2V7" stroke="#b87c4c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;