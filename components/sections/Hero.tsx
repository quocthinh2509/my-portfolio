"use client"
import { useEffect, useState } from "react"
import { ArrowRight, Zap } from "lucide-react"

const roles = [
  "Business Analyst",
  "Automation Specialist",
  "Low-code Developer",
  "n8n Workflow Builder",
]

const metrics = [
  { value: "30+", label: "Workflows built" },
  { value: "80%", label: "Time saved avg" },
  { value: "15+", label: "APIs integrated" },
  { value: "5★", label: "Client rating" },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "96px 24px 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(99,102,241,0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "896px",
          margin: "0 auto",
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            padding: "6px 16px",
            borderRadius: "9999px",
            marginBottom: "32px",
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
            color: "#818cf8",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
              display: "inline-block",
            }}
          />
          Available for freelance & full-time
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
            color: "hsl(var(--foreground))",
          }}
        >
          Nguyen Van A
        </h1>

        {/* Typing */}
        <div
          style={{
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              fontSize: "clamp(20px, 4vw, 28px)",
              fontWeight: 600,
              background: "linear-gradient(90deg, #818cf8, #22d3ee, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            {displayed}
            <span style={{ WebkitTextFillColor: "#818cf8" }}>|</span>
          </p>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "18px",
            color: "hsl(var(--muted-foreground))",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Tôi biến quy trình thủ công thành{" "}
          <span style={{ color: "hsl(var(--foreground))", fontWeight: 500 }}>
            hệ thống tự động thông minh
          </span>{" "}
          — dùng n8n, AI agents và Google Apps Script.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "12px",
              fontWeight: 500,
              color: "#fff",
              background: "#6366f1",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Xem projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "12px",
              fontWeight: 500,
              color: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--border))",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "hsl(var(--border))")}
          >
            <Zap size={18} color="#818cf8" />
            Liên hệ ngay
          </a>
        </div>

        {/* Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "16px",
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                padding: "16px",
                borderRadius: "12px",
                textAlign: "center",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "hsl(var(--muted-foreground))",
                  marginTop: "4px",
                  marginBottom: 0,
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}