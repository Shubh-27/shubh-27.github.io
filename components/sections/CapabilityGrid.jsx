export default function CapabilityGrid({ capabilities }) {
  return (
    <section id="capabilities" className="wrap" aria-label="What I Work On">
      <div className="section-head">
        <div>
          <h2>What I Work On</h2>
          <p className="section-subhead">
            Core technical domains and capabilities applied across backend systems and production infrastructure.
          </p>
        </div>
        <span className="count">{capabilities.length} disciplines</span>
      </div>

      <div className="capability-grid capability-grid-3col">
        {capabilities.map((cap) => (
          <div className="capability-card" key={cap.id}>
            <div className="capability-header">
              <h3>{cap.title}</h3>
              <p className="capability-desc">{cap.description}</p>
            </div>
            <div className="capability-tags">
              {cap.skills.map((skill, sIdx) => (
                <span className="skill-pill" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
