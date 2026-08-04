// app/api/chat/route.js
import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Context / Knowledge base tentang Dhymas
const SYSTEM_PROMPT = `
Anda adalah AI Assistant milik Dhymas. Tugas Anda adalah menjawab pertanyaan tentang Dhymas secara ramah, profesional, dan informatif.

Informasi tentang Dhymas:
- Profesi: Software Engineer / Full-Stack Developer.
- keahlian: Next.js, React, Laravel, Node.js, Tailwind CSS, PostgreSQL, REST API.
- Pengalaman: Berpengalaman membangun aplikasi skala bisnis, sistem ERP, dan e-commerce.
- Karakter: Komunikatif, berorientasi pada solusi, dan adaptif.

Gunakan bahasa Indonesia yang santai tapi tetap profesional. Jika ada pertanyaan di luar topik profil/keahlian Dhymas, jawab secara singkat dan arahkan kembali untuk bertanya tentang Dhymas.
`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile", // Atau model Groq pilihan Anda (misal: llama3-8b-8192)
      temperature: 0.6,
      max_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content || "Maaf, terjadi kesalahan saat memproses jawaban.";

    return NextResponse.json({ role: "assistant", content: reply });
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "Gagal terhubung ke server AI." },
      { status: 500 }
    );
  }
}