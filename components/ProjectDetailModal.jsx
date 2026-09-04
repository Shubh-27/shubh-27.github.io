'use client';

import { useState, useEffect, useRef } from 'react';
import { projects } from '../content/projects';

export default function ProjectDetailModal() {
  const [project, setProject] = useState(null);
  const modalContainerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        const found = projects.find((p) => p.id === projectId);
        setProject(found || null);
      } else {
        setProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClose = () => {
    setProject(null);
    if (window.location.hash.startsWith('#/project/')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  useEffect(() => {
    if (!project) return;

    // Save the element that triggered the modal
    triggerRef.current = document.activeElement;

    // Move focus inside the modal
    const timer = setTimeout(() => {
      if (modalContainerRef.current) {
        const firstFocusable = modalContainerRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable) {
          firstFocusable.focus();
        } else {
          modalContainerRef.current.focus();
        }
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalContainerRef.current) {
        const focusableElements = modalContainerRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';

      // Restore focus to the trigger element on close
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
        triggerRef.current.focus();
      }
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalContainerRef}
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="modal-header">
          <div className="modal-meta-row">
            <span className="confidential-tag">{project.confidentiality}</span>
            <span className="category-tag">{project.category}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close project details"
          >
            ✕ Close
          </button>
        </div>

        <div className="modal-body">
          <h2 id="modal-project-title" className="modal-title">
            {project.title}
          </h2>
          <p className="modal-domain">{project.domain}</p>

          <div className="modal-role-box">
            <div className="role-label">Engineering Role & Scope:</div>
            <div className="role-value">{project.role}</div>
          </div>

          <div className="modal-tech-section">
            <h3>Technologies & Tooling</h3>
            <div className="tech-stack-pills">
              {project.technologies.map((tech, idx) => (
                <span className="tech-pill" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>System Summary</h3>
            <p>{project.summary}</p>
          </div>

          {project.ownership && project.ownership.length > 0 && (
            <div className="modal-section">
              <h3>Direct Ownership & Responsibilities</h3>
              <ul className="modal-list">
                {project.ownership.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && (
            <div className="modal-section">
              <h3>Architecture & Design</h3>
              <p>{project.architecture}</p>
            </div>
          )}

          {project.challenges && (
            <div className="modal-section">
              <h3>Engineering Challenges</h3>
              <p>{project.challenges}</p>
            </div>
          )}

          {project.outcomes && (
            <div className="modal-section">
              <h3>Outcomes & Production Impact</h3>
              <p>{project.outcomes}</p>
            </div>
          )}

          {project.technicalNotes && (
            <div className="modal-section modal-notes-box">
              <h3>Technical Notes & Optimization</h3>
              <p>{project.technicalNotes}</p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={handleClose}>
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
