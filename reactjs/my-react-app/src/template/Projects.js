import "./projects.css";
import React, { useState, useRef, useEffect } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Global Financial Innovation",
      client: "Fintech Solutions Inc.",
      category: "fintech",
      description: "Transforming payment infrastructure for emerging markets",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tags: ["Fintech", "Digital Strategy", "Technology"],
      challenge: "Legacy payment systems were unable to handle real-time transactions across multiple currencies.",
      solution: "Implemented a cloud-based microservices architecture with AI-driven fraud detection.",
      result: "45% reduction in transaction time, 99.99% uptime, $2.3M annual savings",
    },
    {
      id: 2,
      title: "Legal Tech Platform Redesign",
      client: "LexisCorp Global",
      category: "legal",
      description: "Modernizing legal research and case management systems",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      tags: ["Legal Consulting", "UX Design", "Digital Transformation"],
      challenge: "Complex legal workflows were scattered across multiple incompatible systems.",
      solution: "Created integrated platform with intuitive UI and advanced search capabilities.",
      result: "70% faster case resolution, 85% user satisfaction increase",
    },
    {
      id: 3,
      title: "Enterprise Digital Transformation",
      client: "Manufacturing Global Ltd.",
      category: "digital",
      description: "End-to-end digital transformation for Fortune 500 company",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Digital Strategy", "IT & Digital", "Change Management"],
      challenge: "Organization needed to modernize operations across 15 global facilities.",
      solution: "Implemented ERP system, cloud migration, and employee training programs.",
      result: "30% operational efficiency gain, $5.1M cost reduction in year one",
    },
    {
      id: 4,
      title: "Marketing Analytics Platform",
      client: "MediaPro International",
      category: "marketing",
      description: "Advanced analytics dashboard for marketing performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tags: ["Marketing", "Analytics", "Data Intelligence"],
      challenge: "Marketing teams lacked unified view of campaign performance across channels.",
      solution: "Built comprehensive analytics platform with real-time dashboards.",
      result: "25% ROI improvement, 50+ automated insights monthly",
    },
    {
      id: 5,
      title: "Sustainability Strategy Initiative",
      client: "Energy Leaders Corp",
      category: "strategy",
      description: "Comprehensive ESG and sustainability transformation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      tags: ["Management Consulting", "Sustainability", "Strategy"],
      challenge: "Need to achieve net-zero emissions while maintaining profitability.",
      solution: "Developed multi-year sustainability roadmap with clear milestones.",
      result: "60% renewable energy adoption, $3.2M green investment attracted",
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      client: "Global Logistics Ventures",
      category: "operations",
      description: "Streamlining operations across 40+ distribution centers",
      image: "https://images.unsplash.com/photo-1586528116261-d2ac7b7e25f0?auto=format&fit=crop&w=1200&q=80",
      tags: ["Operations", "Process Optimization", "Technology"],
      challenge: "Supply chain inefficiencies were costing $8.5M annually.",
      solution: "Implemented AI-powered demand forecasting and route optimization.",
      result: "35% cost reduction, delivery time cut by 4 days on average",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fintech", label: "Fintech" },
    { id: "legal", label: "Legal Consulting" },
    { id: "digital", label: "IT & Digital" },
    { id: "marketing", label: "Marketing" },
    { id: "strategy", label: "Management" },
    { id: "operations", label: "Operations" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const gridRef = useRef(null);

  useEffect(() => {
    // ensure focus outline is visible when keyboard navigation is used
    const el = gridRef.current;
    if (!el) return;
    const onFocus = () => el.classList.add("keyboard-focus");
    const onBlur = () => el.classList.remove("keyboard-focus");
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    return () => {
      el.removeEventListener("focus", onFocus);
      el.removeEventListener("blur", onBlur);
    };
  }, []);

  const handleGridKeyDown = (e) => {
    if (!gridRef.current) return;
    const el = gridRef.current;
    const step = el.clientWidth * 0.8;
    if (e.key === "ArrowRight") {
      el.scrollBy({ left: step, behavior: "smooth" });
    }
    if (e.key === "ArrowLeft") {
      el.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  const handleViewCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main>
      <section className="page-hero-section case-hero">
        <div className="container hero-grid-simple">
          <div>
            <p className="eyebrow">Multidisciplinary Consulting</p>
            <h1>Strategic solutions delivering measurable business impact</h1>
            <p className="hero-description">
              Explore our portfolio of transformational projects across fintech, legal, digital strategy, and operations. Each case study demonstrates our commitment to excellence and results-driven consulting.
            </p>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-section">
            <h3 className="filter-title">Filter by Service</h3>
            <div className="filter-row">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="case-grid-wrapper">
            <div
              className="case-grid"
              ref={gridRef}
              onKeyDown={handleGridKeyDown}
              tabIndex={0}
              role="list"
              aria-label="Projects list"
              style={{ touchAction: "pan-y" }}
            >
              {filteredProjects.map((project, index) => (
                  <article
                  key={project.id}
                    className="case-card"
                    role="listitem"
                    tabIndex={0}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="card-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image"
                    />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <h4 className="client-name">{project.client}</h4>
                        <p className="overlay-description">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="case-content">
                    <div className="tags-section">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="service-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <button
                      className="cta-button"
                      onClick={() => handleViewCaseStudy(project)}
                    >
                      View Case Study
                      <svg
                        className="arrow-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7 10H13M13 10L10 7M13 10L10 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">180+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">45+</div>
              <div className="stat-label">Global Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">94%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className={`modal-overlay ${isModalOpen ? "active" : ""}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <p className="modal-client">{selectedProject.client}</p>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4 className="modal-section-title">Challenge</h4>
                <p>{selectedProject.challenge}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Results</h4>
                <p className="results-highlight">{selectedProject.result}</p>
              </div>

              <div className="modal-tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;