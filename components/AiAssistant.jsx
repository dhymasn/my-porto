"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, Bot, Globe } from "lucide-react";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("id"); // 'id' | 'en'
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Kamus Teks (Dictionary) untuk UI Multi-bahasa
  const t = {
    id: {
      buttonTrigger: "TANYA AI DHYMS",
      headerSubtitle: "Powered by Dhyms",
      welcomeTitle: "Halo! Ada yang ingin ditanyakan?",
      welcomeDesc: "Coba tanya seputar tech stack, keahlian, atau pengalaman kerja Dhymas.",
      suggestion1: "💡 Apa saja tech stack Dhymas?",
      suggestion2: "💼 Bagaimana pengalaman kerjanya?",
      placeholder: "Ketik pertanyaan...",
      errorServer: "Maaf, terjadi kesalahan pada server.",
      errorConnect: "Gagal terhubung ke server.",
      typing: "Sedang mengetik...",
    },
    en: {
      buttonTrigger: "ASK DHYMAS AI",
      headerSubtitle: "Powered by Dhyms",
      welcomeTitle: "Hello! How can I help you?",
      welcomeDesc: "Feel free to ask about Dhymas's tech stack, skills, or work experience.",
      suggestion1: "💡 What is Dhymas's tech stack?",
      suggestion2: "💼 Tell me about his work experience.",
      placeholder: "Type a message...",
      errorServer: "Sorry, a server error occurred.",
      errorConnect: "Failed to connect to the server.",
      typing: "Typing...",
    },
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: query }];
    setMessages(newMessages);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Mengirimkan parameter 'lang' ke API backend
        body: JSON.stringify({ messages: newMessages, lang }),
      });

      const data = await res.json();
      if (data.role) {
        setMessages((prev) => [...prev, data]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: t[lang].errorServer },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: t[lang].errorConnect },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderFormattedText = (text) => {
    return text.split("\n").map((line, lineIdx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={lineIdx} style={{ display: "block", marginBottom: line.trim() ? "4px" : "8px" }}>
          {parts.map((part, partIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={partIdx} style={{ color: "#00D0A7", fontWeight: "600" }}>
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Tombol Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
            backgroundColor: "#00D0A7",
            color: "#000",
            padding: "12px 20px",
            borderRadius: "50px",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0, 229, 163, 0.4)",
            transition: "all 0.3s ease",
          }}
        >
          <Sparkles className="w-5 h-5 text-black" />
          <span>{t[lang].buttonTrigger}</span>
        </button>
      )}

      {/* Modal Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "380px",
            maxWidth: "90vw",
            height: "520px",
            maxHeight: "85vh",
            zIndex: 9999,
            backgroundColor: "#0d1322",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
            color: "#fff",
          }}
          className="animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div
            style={{
              padding: "16px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  padding: "8px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(0, 229, 163, 0.1)",
                  color: "#00D0A7",
                }}
              >
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "13px", fontWeight: "bold", color: "#fff" }}>
                  MY AI ASSISTANT
                </h3>
                <p style={{ margin: 0, fontSize: "11px", color: "#00D0A7", fontWeight: "500" }}>
                  {t[lang].headerSubtitle}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Tombol Switch Bahasa */}
              <button
                onClick={toggleLanguage}
                title="Switch Language"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#00D0A7",
                  cursor: "pointer",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div
            style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "12px",
            }}
          >
            {messages.length === 0 ? (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(0, 229, 163, 0.1)",
                    color: "#00D0A7",
                    marginBottom: "12px",
                  }}
                >
                  <Sparkles className="w-7 h-7" />
                </div>
                <h4 style={{ margin: "0 0 6px 0", fontSize: "14px", fontWeight: "600" }}>
                  {t[lang].welcomeTitle}
                </h4>
                <p style={{ margin: "0 0 20px 0", color: "#94a3b8", fontSize: "11px", lineHeight: "1.5" }}>
                  {t[lang].welcomeDesc}
                </p>

                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button
                    onClick={() => handleSend(lang === "id" ? "Apa saja tech stack Dhymas?" : "What is Dhymas's tech stack?")}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#e2e8f0",
                      fontSize: "11px",
                      cursor: "pointer",
                    }}
                  >
                    {t[lang].suggestion1}
                  </button>
                  <button
                    onClick={() => handleSend(lang === "id" ? "Bagaimana pengalaman kerjanya?" : "Tell me about his work experience.")}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#e2e8f0",
                      fontSize: "11px",
                      cursor: "pointer",
                    }}
                  >
                    {t[lang].suggestion2}
                  </button>
                </div>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "12px",
                      borderRadius: "12px",
                      backgroundColor: msg.role === "user" ? "#00D0A7" : "rgba(255,255,255,0.08)",
                      color: msg.role === "user" ? "#000" : "#e2e8f0",
                      fontWeight: msg.role === "user" ? "600" : "normal",
                      lineHeight: "1.6",
                    }}
                  >
                    {msg.role === "user" ? msg.content : renderFormattedText(msg.content)}
                  </div>
                </div>
              ))
            )}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "#94a3b8",
                    fontSize: "11px",
                  }}
                >
                  {t[lang].typing}
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Footer */}
          <div
            style={{
              padding: "12px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t[lang].placeholder}
                style={{
                  flex: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  fontSize: "12px",
                  color: "#fff",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                style={{
                  padding: "10px",
                  backgroundColor: "#00D0A7",
                  color: "#000",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  opacity: !input.trim() || loading ? 0.4 : 1,
                }}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}