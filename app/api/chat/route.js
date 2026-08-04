import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `
Anda adalah AI Assistant milik Dhymas. Tugas Anda adalah menjawab pertanyaan tentang Dhymas secara ramah, profesional, dan informatif.

Informasi tentang Dhymas:
- Profesi: Software Engineer / Full-Stack Developer.
- Keahlian: Next.js, React, Laravel, Node.js, Tailwind CSS, PostgreSQL, REST API.
- Pengalaman: Berpengalaman membangun aplikasi skala bisnis, sistem ERP, dan e-commerce.
- Karakter: Komunikatif, berorientasi pada solusi, dan adaptif.

Gunakan bahasa Indonesia yang santai tapi tetap profesional. Jika ada pertanyaan di luar topik profil/keahlian Dhymas, jawab secara singkat dan arahkan kembali untuk bertanya tentang Dhymas.
`;

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

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Format pesan tidak valid." },
        { status: 400 }
      );
    }

    const recentMessages = messages.slice(-6);

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      max_tokens: 350,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Maaf, terjadi kesalahan saat memproses jawaban.";

    return NextResponse.json({ role: "assistant", content: reply });
  } catch (err) {
    console.error("Groq API Error:", err?.message || err);

    return NextResponse.json(
      { error: "Gagal terhubung ke server AI." },
      { status: 500 }
    );
  }
}