export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#1e2029",
        color: "#ffffff",
        paddingTop: "28px",
        paddingBottom: "24px",
        paddingLeft: "16px",
        paddingRight: "16px",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Copyright Bar (Sesuai Referensi Gambar) */}
      <div
        style={{
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "14px",
          opacity: 0.9,
        }}
      >
        {currentYear} <strong className="text-white">Dhymas</strong>. All Rights Reserved.
      </div>
    </footer>
  );
}