export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="d-flex align-items-center gap-3 mb-4">
        <span className="fw-bold text-white text-uppercase fs-6 tracking-wider">
          EXPERIENCE
        </span>
        <div className="flex-grow-1 border-top"></div>
      </div>
      <h3 className="section-title">Where I Make an Impact</h3>
      <p>Experience is listed from the most recent. Alongside my full-time roles, I have also <br/> been involved in contract, part-time, and freelance work in parallel.</p>
      <div className="experience-grid">
        <div className="experience-card">
          <h5>Fullstack Development - Bimasakti Seluler Indonesia, PT (Fulltime Remote)</h5>
          <p>Sep 2024 - May 2026</p>
          <div className="tech">
            PHP · PHP Native · Codeigniter · Next.js · Bootstrap · Tailwind Css · Jquery · Javascript · Mysql · Wordpress · Github
          </div>
          <p className="experience-description">
            • Maintained, enhanced, and optimized the performance of the Tabuku childrenʼs e-commerce platform, particularly in data loading, to ensure a stable and responsive user &nbsp;&nbsp;experience.
            <br/>• Provided technical support and developed the <strong>Simpro (System Management Project)</strong> module, an integrated system to manage cross division activities, improving &nbsp;&nbsp;operational efficiency, transparency, and document control.
            <br/>• Developed and maintained an internal budget management system to support submission, approval, and realtime monitoring of operational budgets between branch &nbsp;&nbsp;offices and headquarters.
            <br/>• Managed and optimized database systems to improve performance, ensure data accuracy, and maintain data integrity across applications.
            <br/>• Implemented security and authentication mechanisms to protect user data and enhance overall system reliability.
            <br/>• Designed and developed a cooperative management system to support employee data management and operational processes.
            <br/>• Collaborated with developers and third-party vendors to maintain IT infrastructure, while continuously tracking bugs via a ticketing system to support new feature &nbsp;&nbsp;development and system optimization reporting.
          </p>
        </div>

        <div className="experience-card">
          <h5>IT Software Development - Abudisa Perkasa Indonesia, PT (Fulltime Remote)</h5>
          <p>Jul 2023 - Jul 2024</p>
          <div className="tech">
            PHP · Codeigniter · Javascript · Custom Design · Bootstrap · Jquery · Mysql · Github
          </div>
          <p className="experience-description">
            • Responsible for the end to end design and development of the Tabuku childrenʼs e-commerce platform, from initial concept to production deployment, ensuring scalability &nbsp;&nbsp;and maintainability.
            <br />• Developed and optimized project management system integration modules to streamline workflows, eliminate operational bottlenecks, and enhance cross functional team &nbsp;&nbsp;collaboration.
            <br />• Enhanced database efficiency and reliability through continuous monitoring, maintenance, and optimization efforts, supporting accurate data management and stable &nbsp;&nbsp;application performance.
            <br />• Collaborated with developers and third-party vendors to maintain IT infrastructure, while continuously tracking bugs via a ticketing system to support new feature &nbsp;&nbsp;development and system optimization reporting.
          </p>
        </div>

        <div className="experience-card">
          <h5>Fullstack Development - Freelance (Onsite) / Fulltime Remote</h5>
          <p>Jan 2021 - Jun 2023</p>
          <div className="tech">
            PHP · Codeigniter · Laravel · Custom Design · Bootstrap · Javascript . Jquery . Mysql · SQL Server 2008 R2 · PostgreSql · Gitlab 
          </div>
          <p className="experience-description">
            • Developed and implemented hospital registration systems <strong>(Sipandawa & Sisdarlin)</strong> to improve patient onboarding efficiency and support service digitalization.
            <br />• Built web based solutions for <strong>MTM (ICT Provider)</strong> to support business operations and enhance system usability.
            <br />• Conducted requirements analysis and optimized systems for the <strong>EDUMAS</strong> public complaint platform to improve service performance and user experience.
          </p>
        </div>

        <div className="experience-card">
          <h5>Programmer - Galeri Teknologi Bersama, PT</h5>
          <p>Dec 2020 - Dec 2021</p>
          <div className="tech">
            PHP · Codeigniter · Custom Design · Bootstrap · Javascript · Mysql · RESTful API · Gitlab
          </div>
          <p className="experience-description">
            • Built and optimized <strong>SmartERP</strong>, including an online print queue system and a web based <strong>WhatsApp Gateway</strong>.
            <br />• Designed a scalable database architecture to ensure system reliability in handling high volume data. 
            <br />• Integrated REST APIs to seamlessly connect software with the print queue numbering system.
            <br />• Automated PDF reporting processes and conducted rigorous application testingto ensure high quality releases. 
          </p>
        </div>

      </div>
    </section>
  );
}
