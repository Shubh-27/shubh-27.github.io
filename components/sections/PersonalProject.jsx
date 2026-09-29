export default function PersonalProject({ project }) {
  if (!project) return null;

  return (
    <section id="open-source" className="wrap section-personal-project" aria-label="Personal Open Source Project">
      <div className="section-head">
        <div>
          <h2>Open Source Engineering</h2>
          <p className="section-subhead">
            Personal software development showcasing live public source code, cross-platform architecture, and automated testing.
          </p>
        </div>
        <span className="count">public repository</span>
      </div>

      <div className="personal-project-card">
        <div className="personal-card-header">
          <div className="personal-meta-top">
            <span className="badge-personal-open-source">{project.badge || 'Personal / Open Source'}</span>
            {project.testMetric && <span className="badge-test-metric">{project.testMetric}</span>}
          </div>

          <div className="personal-title-row">
            <div>
              <h3 className="personal-title">{project.title}</h3>
              <p className="personal-domain">{project.domain}</p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-external"
              aria-label={`View on GitHub: ${project.title} repository`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub ↗
            </a>
          </div>
        </div>

        <div className="personal-role-box">
          <span className="role-label">Role & Scope:</span>
          <span className="role-text">{project.role}</span>
        </div>

        <p className="personal-summary">{project.summary}</p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="personal-highlights-grid">
            {project.highlights.map((item, idx) => (
              <div className="personal-highlight-item" key={idx}>
                <strong>{item.label}</strong> {item.text}
              </div>
            ))}
          </div>
        )}

        <div className="personal-footer-row">
          <div className="tech-stack-pills">
            {project.technologies.map((tech, idx) => (
              <span className="tech-pill" key={idx}>
                {tech}
              </span>
            ))}
          </div>
          <div className="personal-cta-buttons">
            <a
              href={`#/project/${project.id}`}
              className="btn-details"
              aria-label={`Inspect Architecture & Tests for ${project.title}`}
            >
              Inspect Architecture & Tests ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
