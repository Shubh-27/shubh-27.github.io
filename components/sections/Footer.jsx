export default function Footer({ footer }) {
  return (
    <footer role="contentinfo">
      <div className="wrap footer-wrap">
        <div className="footer-left">
          <strong>{footer.tagline}</strong>
        </div>
        <div className="footer-right">
          <span>{footer.note}</span>
          <span>© 2026 Shubh Thakkar. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
