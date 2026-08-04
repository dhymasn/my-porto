"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-detail");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="reveal">
      <h2 className="section-title">Portfolio</h2>

      <div className="portfolio-grid">

        <a
          href="https://tabuku.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project">
            <div className="project-images">
              <Image src="/img/tabuku.jpg" alt="Tabuku" width={600} height={400} />
            </div>

            <div className="project-content">
              <h3>Tabuku</h3>

              <div className="tech">
                Codeigniter · Javascript · Jquery · Bootstrap · MySQL · Custom Design
              </div>

              <div className="project-detail">
                An integrated children's book e-commerce platform designed
                to streamline product management, order processing, and
                digital transactions efficiently.
              </div>
            </div>
          </div>
        </a>

        <a href="https://kopaci-b6509d.netlify.app/" target="_blank" rel="noopener noreferrer" >
          <div className="project">
            <div className="project-images">
              <Image src="/img/kopaci.jpg" alt="Kopaci" width={600} height={400} />
            </div>

            <div className="project-content">
              <h3>Kopaci</h3>

              <div className="tech">
                Next JS · PHP Native · MySQL · Jquery · Javascript · Tailwind CSS · Bootstrap
              </div>

              <div className="project-detail">
                An internal corporate platform designed to streamline member data management, savings and loan transactions, and financial reporting for employee cooperatives.
              </div>
            </div>
          </div>
        </a>

        <a href="https://asosiasisampah.co.id/" target="_blank" rel="noopener noreferrer" >
          <div className="project">
            <div className="project-images">
              <Image src="/img/web-apsi.png" alt="APSI" width={600} height={400} />
            </div>

            <div className="project-content">
              <h3>APSI</h3>

              <div className="tech">
                Codeigniter · Javascript · Jquery · Bootstrap · MySQL
              </div>

              <div className="project-detail">
                A web based information system, sales, and inventory management platform designed for recycling businesses. The system streamlines stock management, sales transactions, and inventory tracking, enabling recycling business owners to manage their operations more efficiently. By providing centralized data management and operational reporting, the platform helps improve inventory accuracy, optimize business processes, and support informed decision-making. This project demonstrates the development of a functional and user-friendly solution tailored to the needs of the recycling industry.
              </div>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}