// app/layout.js
import "./globals.css";
import "./portfolio.css";
import AiAssistant from "../components/AiAssistant";

export const metadata = {
  title: "Dhymas Nanda - Software Engineer",
  description: "Dhymas Nanda Yusuf | Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* AiAssistant berada di tingkat root agar tidak terganggu animasi/layout page */}
        <AiAssistant />
      </body>
    </html>
  );
}