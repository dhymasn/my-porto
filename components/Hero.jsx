
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" class="hero reveal">
        <div>
        <h1>Hi, I’m Dhymas Nanda Yusuf</h1>
        <h2>Software Engineer</h2>
        <p>Fullstack Developer with 2+ years of professional experience, specializing in transforming complex ideas and business processes into efficient and scalable digital solutions. Proficient in PHP Development, Laravel, CodeIgniter, Node.js, and SQL database management, with experience across Software Houses, Healthcare, IT Consulting, and Infrastructure & Technology. Beyond developing web applications, I focus on delivering solutions that effectively address business challenges rather than merely writing code.</p>
        <div class="cta">
            <a href="#contact" class="btn">Get in Touch</a>
        </div>
        <div class="social-cta">
            <a href="https://www.linkedin.com/in/dhymas-nanda-yusuf-52233318b/" target="_blank" class="btn social linkedin">
                <svg viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8z"/>
                </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6285925395074" target="_blank" class="btn social whatsapp">
                <svg viewBox="0 0 24 24">
                    <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 22c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 012 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm5.5-7.5c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.1-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-1-2.2-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 3 1.2 3.2c.1.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.3 1.6.3 2.2.2.7-.1 1.7-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3z"/>
                </svg>
            </a>
        </div>
        </div>
        <div class="hero-photo">
        <Image src="/img/profile.png" alt="Profile" width={450} height={450} />
        </div>
    </section>
  );
}
