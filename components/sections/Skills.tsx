"use client"

import { Workflow, Brain, Code2, Globe, BarChart3, Puzzle } from "lucide-react"

const skills = [
  {
    icon: Workflow,
    title: "n8n & Workflow Automation",
    desc: "Xây dựng 30+ workflow tự động hóa từ đơn giản đến phức tạp. Trigger-based, error handling, retry logic.",
    tags: ["n8n", "Make", "Zapier"],
    color: "#818cf8",
    colorBg: "rgba(129,140,248,0.1)",
    colorBorder: "rgba(129,140,248,0.25)",
  },
  {
    icon: Brain,
    title: "AI & LLM Integration",
    desc: "Kết nối GPT-4, Claude, Gemini vào workflow business thực tế. Build AI agents tự động.",
    tags: ["OpenAI API", "LangChain", "Agents"],
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,0.1)",
    colorBorder: "rgba(167,139,250,0.25)",
  },
  {
    icon: Code2,
    title: "Google Apps Script",
    desc: "Tự động hóa toàn bộ Google Workspace: Sheets, Gmail, Calendar, Drive.",
    tags: ["Apps Script", "Workspace API", "GAS"],
    color: "#34d399",
    colorBg: "rgba(52,211,153,0.1)",
    colorBorder: "rgba(52,211,153,0.25)",
  },
  {
    icon: Globe,
    title: "API Integration",
    desc: "REST API, Webhook, OAuth 2.0. Kết nối bất kỳ hệ thống nào với nhau không cần code phức tạp.",
    tags: ["REST API", "Webhook", "OAuth 2.0"],
    color: "#22d3ee",
    colorBg: "rgba(34,211,238,0.1)",
    colorBorder: "rgba(34,211,238,0.25)",
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    desc: "Pipeline data từ nhiều nguồn, tự động tạo report và gửi cho stakeholders mỗi sáng.",
    tags: ["Google Sheets", "Looker Studio", "BigQuery"],
    color: "#fbbf24",
    colorBg: "rgba(251,191,36,0.1)",
    colorBorder: "rgba(251,191,36,0.25)",
  },
  {
    icon: Puzzle,
    title: "Low-code Platforms",
    desc: "Bubble, Glide, AppSheet — build internal tools và app nhanh không cần code từ đầu.",
    tags: ["Bubble", "AppSheet", "Glide"],
    color: "#fb7185",
    colorBg: "rgba(251,113,133,0.1)",
    colorBorder: "rgba(251,113,133,0.25)",
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills & Tech Stack
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
          Công cụ tôi dùng hằng ngày
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
          Không chỉ biết dùng tool — tôi hiểu khi nào nên dùng cái gì để đạt hiệu quả cao nhất.
        </p>
      </div>

      {/* Bento grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.title}
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "16px",
                padding: "24px",
                transition: "border-color 0.3s, transform 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = skill.colorBorder
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(var(--border))"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  padding: "10px",
                  borderRadius: "10px",
                  background: skill.colorBg,
                  border: `1px solid ${skill.colorBorder}`,
                  marginBottom: "16px",
                  color: skill.color,
                }}
              >
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "hsl(var(--foreground))",
                  marginBottom: "8px",
                }}
              >
                {skill.title}
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontSize: "14px",
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                }}
              >
                {skill.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: "hsl(var(--muted))",
                      color: "hsl(var(--muted-foreground))",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}