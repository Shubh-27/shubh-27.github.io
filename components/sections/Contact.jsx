'use client';

import { useClipboard } from '@/lib/hooks';

export default function Contact({ contact }) {
  const { copy, isCopied } = useClipboard(2000);

  const copyIcon = (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );

  const checkIcon = (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <section id="contact" className="wrap section-contact" aria-label="Contact Information">
      <div className="contact-box">
        <div className="contact-copy">
          <h2>{contact.heading}</h2>
          <p>{contact.subtext}</p>
          <div className="contact-location-note">
            <span className="location-icon">📍</span> {contact.location}
          </div>
        </div>

        <div className="contact-actions-list">
          {/* Email Item */}
          <div className="contact-item-row">
            <a
              href={`mailto:${contact.email}`}
              className="contact-item-main"
              title="Open in default mail client"
            >
              <span className="contact-action-type">Email:</span>
              <span className="contact-action-val">{contact.email}</span>
            </a>
            <button
              type="button"
              className={`contact-copy-btn ${isCopied('email') ? 'copied' : ''}`}
              onClick={copy('email', contact.email)}
              aria-label={isCopied('email') ? 'Email copied to clipboard' : 'Copy email address'}
              title={isCopied('email') ? 'Copied!' : 'Copy email'}
            >
              {isCopied('email') ? checkIcon : copyIcon}
            </button>
          </div>

          {/* LinkedIn Item */}
          <div className="contact-item-row">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-main"
              title="Open LinkedIn in new tab"
            >
              <span className="contact-action-type">LinkedIn:</span>
              <span className="contact-action-val">linkedin.com/in/shubh-thakkar&nbsp;↗</span>
            </a>
            <button
              type="button"
              className={`contact-copy-btn ${isCopied('linkedin') ? 'copied' : ''}`}
              onClick={copy('linkedin', contact.linkedin)}
              aria-label={isCopied('linkedin') ? 'LinkedIn URL copied to clipboard' : 'Copy LinkedIn URL'}
              title={isCopied('linkedin') ? 'Copied!' : 'Copy LinkedIn URL'}
            >
              {isCopied('linkedin') ? checkIcon : copyIcon}
            </button>
          </div>

          {/* GitHub Item */}
          <div className="contact-item-row">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-main"
              title="Open GitHub in new tab"
            >
              <span className="contact-action-type">GitHub:</span>
              <span className="contact-action-val">github.com/Shubh-27&nbsp;↗</span>
            </a>
            <button
              type="button"
              className={`contact-copy-btn ${isCopied('github') ? 'copied' : ''}`}
              onClick={copy('github', contact.github)}
              aria-label={isCopied('github') ? 'GitHub URL copied to clipboard' : 'Copy GitHub URL'}
              title={isCopied('github') ? 'Copied!' : 'Copy GitHub URL'}
            >
              {isCopied('github') ? checkIcon : copyIcon}
            </button>
          </div>

          {/* Resume Download Button */}
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-resume-download"
            aria-label="Download Resume PDF"
          >
            Download Resume PDF ↓
          </a>
        </div>
      </div>
    </section>
  );
}
