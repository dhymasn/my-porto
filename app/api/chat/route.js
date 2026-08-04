import Groq from "groq-sdk";
import { NextResponse } from "next/server";

// Menggunakan Edge Runtime agar respon super cepat tanpa cold-start
export const runtime = "edge";

// Context / Knowledge base tentang Dhymas
const SYSTEM_PROMPT = `
Anda adalah AI Assistant milik Dhymas. Tugas Anda adalah menjawab pertanyaan tentang Dhymas secara ramah, profesional, dan informatif.

Informasi tentang Dhymas:
- Profesi: Software Engineer / Full-Stack Developer.
- Keahlian: Next.js, React, Laravel, Node.js, Tailwind CSS, PostgreSQL, REST API.
- Pengalaman: Berpengalaman membangun aplikasi skala bisnis, sistem ERP, dan e-commerce.
- Karakter: Komunikatif, berorientasi pada solusi, dan adaptif.

Gunakan bahasa Indonesia yang santai tapi tetap profesional. Jika ada pertanyaan di luar topik profil/keahlian Dhymas, jawab secara singkat dan arahkan kembali untuk bertanya tentang Dhymas.
`;

export async function POST(_req: Request) {
  try {
    // 1. Proteksi & Cek ketersediaan API Key
    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "Konfigurasi server belum lengkap." },
        { status: 500 }
      );
    }

    // 2. Lazy Initialization (Mencegah error saat Netlify Build)
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const { messages } = await _req.json();

    // Validasi input pesan
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Format pesan tidak valid." },
        { status: 400 }
      );
    }

    // 3. Truncate pesan: Hanya ambil 6 pesan terakhir agar hemat token
    const recentMessages = messages.slice(-6);

    // Pemanggilan ke Groq AI API
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
    const errorMessage =
      err instanceof Error ? err.message : "Internal Server Error";

    console.error("Groq API Error:", errorMessage);

    return NextResponse.json(
      { error: "Gagal terhubung ke server AI." },
      { status: 500 }
    );
  }
}