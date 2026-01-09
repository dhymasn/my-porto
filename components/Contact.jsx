
export default function Contact() {
  return (
    <section id="contact" class="reveal">
      <h2 class="section-title">Contact</h2>
      <p class="contact">Let’s work together.</p>
      <div class="contact-cards">
        <div class="contact-card">
          <svg viewBox="0 0 24 24">
            <path
              d="M2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13 22 6.01V6H2zm0 12h20V8l-10 6-10-6v10z" />
          </svg>
          <h4>Email</h4>
          <a href="mailto:dhymasnandayusuf@gmail.com">dhymasnandayusuf@gmail.com</a>
        </div>
        <div class="contact-card">
          <svg viewBox="0 0 24 24">
            <path
              d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.1 22 2 13.9 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
          </svg>
          <h4>Phone</h4>
          <a href="tel:+6285925395074">+62 859 2539 5074</a>
        </div>
        <div class="contact-card">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 2C7.6 2 4 5.5 4 9.9c0 5.4 7.1 11.6 7.4 11.8.4.3.9.3 1.3 0 .3-.2 7.4-6.4 7.4-11.8C20 5.5 16.4 2 12 2zm0 11.1c-1.8 0-3.2-1.4-3.2-3.2S10.2 6.7 12 6.7s3.2 1.4 3.2 3.2S13.8 13.1 12 13.1z" />
          </svg>
          <h4>Location</h4>
          <p>Pasaman, West Sumatera, Indonesia</p>
          <p>Remote(Global)</p>
        </div>
      </div>
    </section>
  );
}
