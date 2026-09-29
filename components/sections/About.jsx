export default function About({ about }) {
  return (
    <section id="about" className="wrap section-about" aria-label="About and Engineering Philosophy">
      <div className="section-head">
        <div>
          <h2>{about.heading}</h2>
          <p className="section-subhead">
            Background, technical discipline, and engineering approach to building scalable systems.
          </p>
        </div>
        <span className="count">Background</span>
      </div>

      <div className="about-grid-layout">
        <div className="about-narrative">
          {about.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <div className="about-principles-grid">
            {about.principles.map((pr, idx) => (
              <div className="principle-item" key={idx}>
                <h3>{pr.title}</h3>
                <p>{pr.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-sidebar">
          <div className="about-focus-box">
            <h3>{about.openTo.heading}</h3>
            <ul className="focus-list">
              {about.openTo.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
