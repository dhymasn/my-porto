import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPTS = {
  id: `
Anda adalah AI Assistant milik Dhymas. Tugas Anda adalah menjawab pertanyaan tentang Dhymas secara ramah, profesional, dan informatif.

Informasi tentang Dhymas:
- Profesi: Software Engineer / Full-Stack Developer.
- Keahlian: Next.js, React, Laravel, Node.js, Tailwind CSS, PostgreSQL, REST API.
- Pengalaman: Berpengalaman membangun aplikasi skala bisnis, sistem ERP, dan e-commerce.
- Karakter: Komunikatif, berorientasi pada solusi, dan adaptif.

Aturan Format Jawaban (SANGAT PENTING):
1. WAJIB menjawab hanya dalam Bahasa Indonesia.
2. Jika memberikan daftar keahlian, pengalaman, atau poin-poin, WAJIB menggunakan format bullet point Markdown (-) dan gunakan enter (baris baru) ganda antar poin agar tampilan rapi.
3. Gunakan cetak tebal (**bold**) untuk teknologi atau kata kunci utama.
4. Jika pertanyaan di luar topik profil/keahlian Dhymas, jawab secara singkat dan arahkan kembali untuk bertanya tentang Dhymas.
`,
  en: `
You are Dhymas's AI Assistant. Your task is to answer questions about Dhymas in a friendly, professional, and informative manner.

Information about Dhymas:
- Profession: Software Engineer / Full-Stack Developer.
- Tech Stack & Skills: Next.js, React, Laravel, Node.js, Tailwind CSS, PostgreSQL, REST API.
- Experience: Experienced in building business-scale applications, ERP systems, and e-commerce platforms.
- Character: Communicative, solution-oriented, and adaptive.

Response Formatting Rules (VERY IMPORTANT):
1. You MUST respond ONLY in English.
2. When listing skills, experience, or points, ALWAYS use Markdown bullet points (-) with double line breaks between items for clear layout.
3. Use **bold** for primary technologies or key terms.
4. If the question is outside the scope of Dhymas's profile/skills, answer briefly and politely redirect back to asking about Dhymas.
`,
};

export async function POST(req) {
  try {
    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Konfigurasi server belum lengkap." },
        { status: 500 }
      );
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { messages, lang = "id" } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Format pesan tidak valid." },
        { status: 400 }
      );
    }

    const systemPrompt = SYSTEM_PROMPTS[lang] || SYSTEM_PROMPTS.id;
    const recentMessages = messages.slice(-6);

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...recentMessages,
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      max_tokens: 350,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      (lang === "en"
        ? "Sorry, an error occurred while processing the response."
        : "Maaf, terjadi kesalahan saat memproses jawaban.");

    return NextResponse.json({ role: "assistant", content: reply });
  } catch (err) {
    console.error("Groq API Error:", err?.message || err);

    return NextResponse.json(
      { error: "Gagal terhubung ke server AI." },
      { status: 500 }
    );
  }
}