"use client"

import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"
import WorkflowShowcase from "@/components/sections/WorkflowShowcase"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
      <Hero />
      <Skills />
      <WorkflowShowcase />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}