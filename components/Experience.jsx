export default function Experience({ experience }) {
  return (
    <section id="experience" className="wrap section-experience" aria-label="Professional Experience">
      <div className="section-head">
        <div>
          <h2>Professional Experience</h2>
          <p className="section-subhead">
            Continuous tenure at Prioxis Technologies progressing from feature development to architecture ownership.
          </p>
        </div>
        <span className="count">Aug 2022 – Dec 2025</span>
      </div>

      <div className="experience-card">
        <div className="exp-main-header">
          <div className="exp-title-block">
            <h3 className="exp-role">{experience.role}</h3>
            <div className="exp-company">
              {experience.company} <span className="exp-note">({experience.companyNote})</span>
            </div>
          </div>
          <div className="exp-period-badge">{experience.period}</div>
        </div>

        <p className="exp-summary">{experience.summary}</p>

        <div className="exp-progression-timeline">
          <h4>Engineering Progression</h4>
          <div className="progression-grid">
            {experience.progression.map((item, idx) => (
              <div className="progression-step" key={idx}>
                <div className="step-header">
                  <span className="step-tag">{item.timeframe}</span>
                  <h5 className="step-title">{item.stage}</h5>
                </div>
                <p className="step-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="exp-achievements-block">
          <h4>Key Milestones & Contributions</h4>
          <ul className="achievements-list">
            {experience.keyAchievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {experience.additionalContributions && (
          <div className="exp-additional-block">
            <h4>Additional Client Engagements</h4>
            <p className="exp-additional-text">{experience.additionalContributions}</p>
          </div>
        )}
      </div>
    </section>
  );
}
