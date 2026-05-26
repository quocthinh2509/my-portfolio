import { workflows } from "@/data/workflows"

export default function WorkflowShowcase() {
  return (
    <section
      id="workflows"
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
          Automation Workflows
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
          Workflows tôi đã build
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "hsl(var(--muted-foreground))",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Không chỉ biết vẽ flowchart — đây là các hệ thống thực tế đang chạy production.
        </p>
      </div>

      {/* Workflow cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {workflows.map((wf) => (
          <div
            key={wf.slug}
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "16px",
              overflow: "hidden",
              transition: "border-color 0.3s, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = wf.categoryColor
              e.currentTarget.style.transform = "translateY(-4px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "hsl(var(--border))"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            {/* Top bar */}
            <div
              style={{
                padding: "20px 20px 16px",
                borderBottom: "1px solid hsl(var(--border))",
                background: wf.categoryBg,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <span style={{ fontSize: "32px" }}>{wf.emoji}</span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "3px 10px",
                    borderRadius: "6px",
                    background: wf.categoryBg,
                    color: wf.categoryColor,
                    border: `1px solid ${wf.categoryColor}40`,
                  }}
                >
                  {wf.category}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "hsl(var(--foreground))",
                  marginBottom: "6px",
                }}
              >
                {wf.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {wf.description}
              </p>
            </div>

            {/* Flow diagram */}
            <div style={{ padding: "16px 20px", borderBottom: "1px solid hsl(var(--border))" }}>
              <p
                style={{
                  fontSize: "11px",
                  color: "hsl(var(--muted-foreground))",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "10px",
                  fontWeight: 500,
                }}
              >
                Flow
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                {wf.steps.map((step, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: `${step.color}18`,
                        color: step.color,
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {step.label}
                    </span>
                    {i < wf.steps.length - 1 && (
                      <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "12px" }}>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                padding: "14px 20px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
              }}
            >
              {Object.entries(wf.stats).map(([key, value]) => (
                <div key={key} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "hsl(var(--foreground))",
                      margin: 0,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "hsl(var(--muted-foreground))",
                      margin: "2px 0 0",
                      textTransform: "capitalize",
                    }}
                  >
                    {key === "runs" ? "Executions" : key === "saved" ? "Saved" : "Accuracy"}
                  </p>
                </div>
              ))}
            </div>

            {/* Nodes used */}
            <div
              style={{
                padding: "0 20px 16px",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              {wf.nodes.map((node) => (
                <span
                  key={node}
                  style={{
                    fontSize: "11px",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "hsl(var(--muted))",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}