// components/Experience.jsx
export default function Experience({ t }) {
  // Helper fungsi sederhana untuk mengubah string **teks** menjadi <strong>teks</strong>
  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="experience" className="reveal">
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="fw-bold text-white text-uppercase fs-6 tracking-wider">
          {t?.badge || "EXPERIENCE"}
        </span>
        <div className="flex-grow-1 border-top"></div>
      </div>
      
      <h3 className="section-title">{t?.title || "Where I Make an Impact"}</h3>
      <p>{t?.subtitle}</p>

      <div className="experience-grid">
        {t?.jobs?.map((job, index) => (
          <div className="experience-card" key={index}>
            <h5>{job.role}</h5>
            <p className="period">{job.period}</p>
            <div className="tech">{job.tech}</div>
            <ul className="experience-description-list">
              {job.description.map((item, itemIdx) => (
                <li key={itemIdx}>{renderFormattedText(item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}