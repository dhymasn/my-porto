export default function About({ t }) {
  return (
    <section id="about" className="reveal">
      <h2 className="section-title">{t?.title || "About Me"}</h2>
      <p className="about">
        {t?.description || 
          "Software Engineer with 2+ years of professional experience, specializing in transforming complex ideas and business processes into efficient and scalable digital solutions. Proficient in PHP Development, Laravel, CodeIgniter, Node.js, and SQL database management, with experience across Software Houses, Healthcare, IT Consulting, and Infrastructure & Technology. Beyond developing web applications, I focus on delivering solutions that effectively address business challenges rather than merely writing code."}
      </p>
    </section>
  );
}