export default function TechnicalSkills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      skills: [
        { name: "PHP"},
        { name: "JavaScript"},
        { name: "SQL"},
        { name: "TypeScript"},
      ],
    },
    {
      title: "Frameworks & Ecosystem",
      icon: "fas fa-cubes",
      skills: [
        { name: "Codeigniter"},
        { name: "Laravel"},
        { name: "Next JS"},
        { name: "Node JS"},
        { name: "Jquery"},
      ],
    },
    {
      title: "Frontend",
      icon: "fas fa-palette",
      skills: [
        { name: "Bootstrap"},
        { name: "Tailwind CSS"},
      ],
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL"},
        { name: "PostgreSQL"},
        { name: "SQL Server 2008 R2"},
      ],
    },
    {
      title: "API & Integrations",
      icon: "fas fa-plug",
      skills: [
        { name: "RESTful API Design"},
        { name: "Payment Gateways (Midtrans, Xendit)"},
        { name: "Google Drive API"},
      ],
    },
    {
    title: "Developer Tools & Workflow",
    icon: "fas fa-tools",
    skills: [
      { name: "Git (Github / Gitlab)"},
      { name: "Trello"},
      { name: "Ticketing System (Issue Tracking)"},
    ],
  },
  ];

  return (
    <section id="stack" className="py-5">
      <div className="container">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="fw-bold text-white text-uppercase fs-6 tracking-wider">
            STACK
          </span>
          <div className="flex-grow-1 border-top"></div>
        </div>
        <h3 className="section-title">Driven by Continuous Growth</h3>
        <p>I prioritize mastering core technologies deeply over jumping <br/> between tools without true expertise.</p>
        <div className="row g-4 row-skills">
          {skillCategories.map((category, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="skill-card">
                <div className="skill-header">
                  <i className={`skill-icon ${category.icon}`}></i>
                  <h5 className="skill-title">{category.title}</h5>
                </div>
                <div className="skill-list">
                  {category.skills.map((skill, idx) => (
                    <div className="skill-item" key={idx}>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}