"use client";

import { Download, FileText, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import "./cv.css";

export default function CVPage() {
  return (
    <main className="cv-container">
      <div className="cv-content-wrapper">
        <div className="cv-header">
          <Link href="/" className="back-btn">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <div className="cv-title-area">
            <h1 className="cv-title">
              <FileText className="cv-icon" size={32} /> My <span>Curriculum Vitae</span>
            </h1>
            <p className="cv-subtitle">View and download Tanuj Gupta&apos;s professional resume for 2026</p>
          </div>
        </div>

        <div className="cv-viewer-container glass-panel">
          {/* Clean CV Access Card (Used for both Desktop & Mobile) */}
          <div className="cv-card">
            <div className="cv-file-thumbnail">
              <FileText size={72} className="thumbnail-icon" />
              <span className="file-type-badge">PDF</span>
            </div>
            <h3>Tanuj Gupta - Resume 2026</h3>
            <p>Graphic Designer & Video Editor</p>
            <div className="cv-action-buttons">
              <a href="/tanuj-resume-2026.pdf" download="Tanuj_Gupta_Resume_2026.pdf" className="download-btn-premium">
                <Download size={18} /> Download Resume
              </a>
              <a href="/tanuj-resume-2026.pdf" target="_blank" rel="noopener noreferrer" className="view-btn-secondary">
                <ExternalLink size={18} /> View PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
