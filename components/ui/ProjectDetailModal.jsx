'use client';

import Modal from '@/components/ui/Modal';
import { useHashParam } from '@/lib/hooks';
import { getProjectById } from '@/lib/content';

export default function ProjectDetailModal() {
  const [projectId, setProjectId] = useHashParam('#/project/');
  const project = getProjectById(projectId);

  const handleClose = () => {
    setProjectId(null);
  };

  if (!project) return null;

  return (
    <Modal
      isOpen={Boolean(project)}
      onClose={handleClose}
      ariaLabelledBy="modal-project-title"
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
    </Modal>
  );
}
