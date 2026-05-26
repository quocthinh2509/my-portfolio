import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "96px 24px",
        maxWidth: "800px",
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
          Career Journey
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
          Kinh nghiệm làm việc
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
          Hành trình từ Data Analyst đến Automation Specialist.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "16px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "hsl(var(--border))",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              style={{
                display: "flex",
                gap: "32px",
                paddingLeft: "8px",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "16px",
                  height: "16px",
                  minWidth: "16px",
                  borderRadius: "50%",
                  background: exp.color,
                  marginTop: "4px",
                  boxShadow: `0 0 0 4px hsl(var(--background)), 0 0 0 5px ${exp.color}`,
                }}
              />

              {/* Content */}
              <div
                style={{
                  flex: 1,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = exp.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border))"
                }}
              >
                {/* Period */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "hsl(var(--muted-foreground))",
                    marginBottom: "6px",
                    fontFamily: "monospace",
                  }}
                >
                  {exp.period}
                </p>

                {/* Role + Company */}
                <div style={{ marginBottom: "12px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "hsl(var(--foreground))",
                      marginBottom: "2px",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: exp.color,
                      fontWeight: 500,
                    }}
                  >
                    {exp.company}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  {exp.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.tags.map((tag) => (
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
      </div>
    </section>
  )
}