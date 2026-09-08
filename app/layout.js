// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        {children}
        <AiAssistant />
      </body>
    </html>
  );
}