export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid hsl(var(--border))",
        padding: "32px 24px",
        marginTop: "48px",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div>
          <span style={{ fontWeight: 700, fontSize: "16px" }}>
            <span style={{ color: "#818cf8" }}>VA</span>
            <span style={{ color: "hsl(var(--muted-foreground))" }}>.dev</span>
          </span>
          <p style={{ fontSize: "13px", color: "hsl(var(--muted-foreground))", margin: "4px 0 0" }}>
            Business Analyst & Automation Specialist
          </p>
        </div>

        <p style={{ fontSize: "13px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
          © 2025 Nguyen Van A · Built with Next.js & ☕
        </p>
      </div>
    </footer>
  )
}