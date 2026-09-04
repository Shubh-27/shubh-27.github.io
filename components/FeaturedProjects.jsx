export default function FeaturedProjects({ projects }) {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="featured-projects" className="wrap section-featured" aria-label="Featured Projects">
      <div className="section-head">
        <div>
          <h2>Featured Systems</h2>
          <p className="section-subhead">
            Core production platforms showcasing backend architecture, high-volume calculation engines, and SQL optimizations.
          </p>
        </div>
        <span className="count">4 featured</span>
      </div>

      <div className="featured-list">
        {featured.map((project) => (
          <article className="featured-card" key={project.id}>
            <div className="featured-card-header">
              <div className="featured-meta-top">
                <span className="confidential-tag">{project.confidentiality}</span>
                <span className="category-tag">{project.category}</span>
              </div>
              <h3 className="featured-title">{project.title}</h3>
              <p className="featured-domain">{project.domain}</p>
            </div>

            <div className="featured-role-box">
              <span className="role-label">Role & Ownership:</span>
              <span className="role-text">{project.role}</span>
            </div>

            <p className="featured-summary">{project.summary}</p>

            <div className="featured-ownership-block">
              <h4>Key Engineering Responsibilities:</h4>
              <ul className="ownership-list">
                {project.ownership.slice(0, 3).map((item, oIdx) => (
                  <li key={oIdx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="featured-tech-row">
              <div className="tech-stack-pills">
                {project.technologies.map((tech, tIdx) => (
                  <span className="tech-pill" key={tIdx}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={`#/project/${project.id}`}
                className="btn-details"
                aria-label={`Inspect Architecture & SQL for ${project.title}`}
              >
                Inspect Architecture & SQL ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
