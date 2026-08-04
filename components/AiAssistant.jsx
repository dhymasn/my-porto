"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

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
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      if (data.role) {
        setMessages((prev) => [...prev, data]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Maaf, terjadi kesalahan pada server." },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Gagal terhubung ke server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Tombol Trigger (Pojok Kanan Bawah) */}
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
          <span>TANYA AI DHYMAS</span>
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
                  Powered by Dhyms
                </p>
              </div>
            </div>

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
                  Halo! Ada yang ingin ditanyakan?
                </h4>
                <p style={{ margin: "0 0 20px 0", color: "#94a3b8", fontSize: "11px", lineHeight: "1.5" }}>
                  Coba tanya seputar tech stack, keahlian, atau pengalaman kerja Dhymas.
                </p>

                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <button
                    onClick={() => handleSend("Apa saja tech stack Dhymas?")}
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
                    💡 Apa saja tech stack Dhymas?
                  </button>
                  <button
                    onClick={() => handleSend("Bagaimana pengalaman kerjanya?")}
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
                    💼 Bagaimana pengalaman kerjanya?
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
                    {msg.role === "user" ? (
                      msg.content
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => <p style={{ margin: "0 0 8px 0" }} {...props} />,
                          ul: ({ node, ...props }) => (
                            <ul style={{ margin: "4px 0 8px 0", paddingLeft: "16px", listStyleType: "disc" }} {...props} />
                          ),
                          ol: ({ node, ...props }) => (
                            <ol style={{ margin: "4px 0 8px 0", paddingLeft: "16px", listStyleType: "decimal" }} {...props} />
                          ),
                          li: ({ node, ...props }) => <li style={{ marginBottom: "4px" }} {...props} />,
                          strong: ({ node, ...props }) => (
                            <strong style={{ fontWeight: "600", color: "#00D0A7" }} {...props} />
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
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
                  Sedang mengetik...
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
                placeholder="Ketik pertanyaan..."
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