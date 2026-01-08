import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="reveal">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-grid">
        <a href="https://tabuku.id/" target="_blank" rel="noopener noreferrer">
          <div className="project">
            <div className="project-images">
              <Image src="/img/tabuku.jpg" alt="Tabuku" width={600} height={400} />
            </div>
            <div className="project-content">
              <h3>Tabuku</h3>
              <p>Children’s Book E-Commerce Platform</p>
              <div className="tech">Codeigniter · Javascript · Bootstrap</div>
            </div>
          </div>
        </a>
        <a href="https://kopaci.or.id/" target="_blank" rel="noopener noreferrer">
          <div className="project">
            <div className="project-images">
              <Image src="/img/kopaci.jpg" alt="Kopaci" width={600} height={400} />
            </div>
            <div className="project-content">
              <h3>Kopaci</h3>
              <p>Sistem internal perusahaan untuk mengelola data koperasi karyawan.</p>
              <div className="tech">Next JS · PHP · MySQL</div>
            </div>
          </div>
        </a>
        <a href="https://rsudadj.com/" target="_blank" rel="noopener noreferrer">
          <div className="project">
            <div className="project-images">
              <Image src="/img/sisdarlin.jpg" alt="Sisdarlin" width={600} height={400} />
            </div>
            <div className="project-content">
              <h3>Sisdarlin</h3>
              <p>Hospital Online Service Registration System to facilitate patient registration and queue number management.</p>
              <div className="tech">Codeigniter · Javascript · Bootstrap</div>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}
