"use client"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
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
          Featured Projects
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
          Các hệ thống đã build
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
          Mỗi project đều có Problem → Solution → Measurable Impact thực tế.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "16px",
              overflow: "hidden",
              transition: "border-color 0.3s, transform 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = project.categoryColor
              e.currentTarget.style.transform = "translateY(-4px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "hsl(var(--border))"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                height: "140px",
                background: project.categoryBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid hsl(var(--border))",
                fontSize: "56px",
              }}
            >
              {project.emoji}
            </div>

            {/* Content */}
            <div style={{ padding: "20px" }}>
              {/* Category badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "3px 10px",
                  borderRadius: "6px",
                  marginBottom: "12px",
                  background: project.categoryBg,
                  color: project.categoryColor,
                }}
              >
                {project.category}
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
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                {project.description}
              </p>

              {/* Impact */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#4ade80",
                  fontWeight: 500,
                  marginBottom: "14px",
                }}
              >
                📈 {project.impact}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag) => (
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
          </div>
        ))}
      </div>
    </section>
  )
}