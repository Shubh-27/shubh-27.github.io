export default function Hero({ hero }) {
  return (
    <section id="overview" className="hero wrap" aria-label="Overview & Positioning">
      <div className="hero-header-meta">
        <div className="hero-kicker-pill">{hero.kicker}</div>
        {hero.location && (
          <div className="hero-location-badge">
            <span className="location-dot" aria-hidden="true"></span>
            <span>{hero.location}</span>
          </div>
        )}
      </div>
      <h1>{hero.headline}</h1>
      <p className="hero-lede">{hero.subheadline}</p>

      <div className="hero-stack-bar" aria-label="Primary Technical Specialization">
        <span className="hero-stack-label">Core Specialization:</span>
        <div className="hero-stack-tags">
          {hero.primaryStack.map((tech, idx) => (
            <span key={idx} className="hero-tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-actions">
        <a href={hero.cta.primary.href} className="btn btn-primary">
          {hero.cta.primary.label}
        </a>
        {hero.cta.linkedin && (
          <a
            href={hero.cta.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {hero.cta.linkedin.label} ↗
          </a>
        )}
        <a
          href={hero.cta.github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          {hero.cta.github.label} ↗
        </a>
        <a
          href={hero.cta.resume.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          {hero.cta.resume.label} ↓
        </a>
      </div>
    </section>
  );
}
