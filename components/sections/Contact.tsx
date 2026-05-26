"use client"
import { useState } from "react"
import { Send, GitBranch as Github, Link as Linkedin, Mail, MessageSquare } from "lucide-react"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/mnjrglqk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("done")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputStyle = {
    width: "100%",
    background: "hsl(var(--muted))",
    border: "1px solid hsl(var(--border))",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "hsl(var(--foreground))",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  }

  return (
    <section
      id="contact"
      style={{
        padding: "96px 24px",
        maxWidth: "1152px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: "12px",
          }}
        >
          Get in touch
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "hsl(var(--foreground))",
            marginBottom: "16px",
          }}
        >
          Làm việc cùng nhau?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "hsl(var(--muted-foreground))",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Tôi nhận dự án freelance và cơ hội full-time. Hãy kể cho tôi nghe về bài toán của bạn.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ fontSize: "13px", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "6px" }}>
              Họ tên
            </label>
            <input
              name="name"
              required
              placeholder="Enter your full name"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
            />
          </div>

          <div>
            <label style={{ fontSize: "13px", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "6px" }}>
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="hello@company.com"
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
            />
          </div>

          <div>
            <label style={{ fontSize: "13px", color: "hsl(var(--muted-foreground))", display: "block", marginBottom: "6px" }}>
              Bạn cần giúp gì?
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Mô tả ngắn về quy trình bạn muốn tự động hóa..."
              style={{ ...inputStyle, resize: "none" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "done"}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: 500,
              fontSize: "15px",
              color: "#fff",
              background: status === "done" ? "#22c55e" : "#6366f1",
              border: "none",
              cursor: status === "sending" || status === "done" ? "not-allowed" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
              transition: "all 0.2s",
            }}
          >
            <Send size={16} />
            {status === "idle" && "Gửi tin nhắn"}
            {status === "sending" && "Đang gửi..."}
            {status === "done" && "✓ Đã gửi! Tôi phản hồi trong 24h"}
            {status === "error" && "Lỗi — thử lại nhé"}
          </button>
        </form>

        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { icon: Mail, label: "Email", value: "thinhtq2509@gmail.com", href: "mailto:thinhtq2509@gmail.com", color: "#818cf8" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname", color: "#22d3ee" },
            { icon: Github, label: "GitHub", value: "github.com/quocthinh2509", href: "https://github.com/quocthinh2509", color: "#a78bfa" },
            { icon: MessageSquare, label: "Zalo / Telegram", value: "+84 396 699 469", href: "#", color: "#34d399" },
          ].map(({ icon: Icon, label, value, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--card))",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.transform = "translateX(4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))"
                e.currentTarget.style.transform = "translateX(0)"
              }}
            >
              <div
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  background: `${color}18`,
                  color: color,
                  display: "flex",
                }}
              >
                <Icon size={18} />
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                  {label}
                </p>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "hsl(var(--foreground))", margin: 0 }}>
                  {value}
                </p>
              </div>
            </a>
          ))}

          {/* Response time box */}
          <div
            style={{
              padding: "16px",
              borderRadius: "12px",
              background: "rgba(99,102,241,0.05)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))", margin: "0 0 6px" }}>
              ⏱ Response time:{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}>
                dưới 24 giờ
              </span>
            </p>
            <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
              🌏 Timezone:{" "}
              <span style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}>
                GMT+7 · Ho Chi Minh City
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}