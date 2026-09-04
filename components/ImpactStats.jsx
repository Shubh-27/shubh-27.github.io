export default function ImpactStats({ stats }) {
  return (
    <section id="impact" className="wrap section-impact" aria-label="Engineering Impact">
      <div className="section-head">
        <div>
          <h2>Engineering Impact</h2>
          <p className="section-subhead">
            Measurable performance gains, architectural foundations, and automation delivered in production.
          </p>
        </div>
        <span className="count">evidence-based</span>
      </div>

      <div className="impact-grid">
        {stats.map((item, idx) => (
          <div className="impact-card" key={idx}>
            <div className="impact-metric-top">
              <span className="impact-num">{item.metric}</span>
              <span className="impact-badge">{item.subtitle}</span>
            </div>
            <h3 className="impact-title">{item.title}</h3>
            <p className="impact-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
