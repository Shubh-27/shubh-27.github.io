export default function TechnicalArticles({ articles }) {
  return (
    <section id="articles" className="wrap section-articles" aria-label="Technical Deep Dives">
      <div className="section-head">
        <div>
          <h2>Engineering Notes & Deep Dives</h2>
          <p className="section-subhead">
            Architectural patterns, query optimization techniques, and cloud troubleshooting notes from production experience.
          </p>
        </div>
        <span className="count">4 technical notes</span>
      </div>

      <div className="articles-grid">
        {articles.map((art) => (
          <article className="article-card" key={art.id}>
            <div className="article-top">
              <span className="article-category">{art.category}</span>
              <span className="article-badge">{art.readTime}</span>
            </div>

            <h3 className="article-title">{art.title}</h3>
            <p className="article-summary">{art.summary}</p>

            <div className="article-takeaways">
              <h4>Core Engineering Insights:</h4>
              <ul>
                {art.takeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="article-tags">
              {art.tags.map((tag, idx) => (
                <span className="article-tag-pill" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
