import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer style={styles.root}>
      <div style={styles.inner}>

        <div style={styles.top}>
          <div style={styles.brand}>
            <p style={styles.logo}>Ayomide.</p>
            <p style={styles.tagline}>Fullstack developer & creative builder.</p>
          </div>
          <div style={styles.links}>
            <div style={styles.col}>
              <span style={styles.colLabel}>Work</span>
              <a href="#" style={styles.link}>Projects</a>
              <a href="#" style={styles.link}>Case studies</a>
              <a href="#" style={styles.link}>Open source</a>
            </div>
            <div style={styles.col}>
              <span style={styles.colLabel}>About</span>
              <a href="#" style={styles.link}>Story</a>
              <a href="#" style={styles.link}>Resume</a>
              <a href="#" style={styles.link}>Contact</a>
            </div>
          </div>
        </div>

        <hr style={styles.divider} />

        <div style={styles.bottom}>
          <p style={styles.copy}>© {year} Ayomide Lawal. All rights reserved.</p>
          <div style={styles.socials}>
            <a href="https://www.linkedin.com/in/ayomide-lawal-645237298/" target="_blank" rel="noreferrer" style={styles.socialBtn} title="LinkedIn">
              {/* LinkedIn SVG icon */}
            </a>
            <a href="https://github.com/ayocyber" target="_blank" rel="noreferrer" style={styles.socialBtn} title="GitHub">
              {/* GitHub SVG icon */}
            </a>
            <a href="https://twitter.com/LawalAyomide" target="_blank" rel="noreferrer" style={styles.socialBtn} title="Twitter">
              {/* Twitter SVG icon */}
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: '#F8F6F1',
    borderTop: '1px solid #E2DDD6',
    padding: '48px 40px 32px',
  },
  inner: { maxWidth: 960, margin: '0 auto' },
  top: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, gap: 24 },
  brand: { flex: 1 },
  logo: { fontFamily: "'DM Serif Display', serif", fontSize: 28, color: '#1A1714', margin: '0 0 8px' },
  tagline: { fontSize: 13, color: '#8A8479', margin: 0 },
  links: { display: 'flex', gap: 40 },
  col: { display: 'flex', flexDirection: 'column', gap: 10 },
  colLabel: { fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B3ADA5' },
  link: { fontSize: 14, color: '#4A463F', textDecoration: 'none' },
  divider: { border: 'none', borderTop: '1px solid #E2DDD6', margin: '0 0 24px' },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 },
  copy: { fontSize: 13, color: '#A09A91', margin: 0 },
  socials: { display: 'flex', gap: 10 },
  socialBtn: {
    width: 36, height: 36, borderRadius: 8,
    border: '1px solid #E2DDD6', background: '#FFFFFF',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    textDecoration: 'none',
  },
}

export default Footer