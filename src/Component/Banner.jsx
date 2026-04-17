import React from 'react';
import my_logo from "../asset/img/my_logo.png";

const toRotate = ["Flutter Developer", "Full-Stack Developer"];

const Banner = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState("");
  const [delta, setDelta] = React.useState(150);
  const period = 2000;

  React.useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text]);

  function tick() {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) setDelta(prev => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(300);
    }
  }

  return (
    <section className="banner-section" id="home">
      <style>{`

        }
      `}</style>

      <div className="banner-accent-blob" />
      <div className="banner-accent-blob-2" />

      <div className="banner-inner">
        {/* Left: text */}
        <div className="banner-text-col">
          <div className="banner-tag">
            <span className="banner-tag-dot" />
            Building Real Products, Not Just Code
          </div>

          <p className="banner-intro">Hello, I'm</p>
          <h1 className="banner-name">Ayo.</h1>

          <div className="banner-role-line">
            <span className="banner-role-prefix">a</span>
            <span className="banner-typewriter">{text}</span>
          </div>

          <p className="banner-body">
            Most apps don't fail because of a bad idea — they fail because of{' '}
            <strong>poor execution.</strong>
            <br /><br />
            I'm Lawal Ayomide, a Flutter & full-stack developer with{' '}
            <strong>3+ years</strong> of experience turning startup ideas into
            polished, production-ready apps.{' '}
            <strong>Clean UI. Solid backend. Real results.</strong>
          </p>

          <button className="banner-cta">
            Let's Build Something
            <span className="banner-cta-arrow">→</span>
          </button>

          <div className="banner-stats">
            <div>
              <div className="banner-stat-num">3+</div>
              <div className="banner-stat-label">Years Experience</div>
            </div>
            <div>
              <div className="banner-stat-num">20+</div>
              <div className="banner-stat-label">Projects Shipped</div>
            </div>
            <div>
              <div className="banner-stat-num">2</div>
              <div className="banner-stat-label">Core Stacks</div>
            </div>
          </div>
        </div>

        {/* Right: image */}
        <div className="banner-image-col">
          <div className="banner-img-frame">
            <img src={my_logo} alt="Lawal Ayomide" />
            <div className="banner-img-badge">
              <div className="banner-img-badge-num">3+</div>
              <div className="banner-img-badge-label">Yrs Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;