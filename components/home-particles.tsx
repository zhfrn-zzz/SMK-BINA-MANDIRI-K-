"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"

export function HomeParticles() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [color, setColor] = useState("#000000")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
    }
  }, [resolvedTheme, mounted])

  return (
    <>
      {/* Background - White in light mode, Black in dark mode */}
      <div className="fixed inset-0 -z-20 bg-white dark:bg-slate-950" />

      {/* Particles - Black in light mode, White in dark mode */}
      {mounted && (
        <Particles
          className="fixed inset-0 -z-10"
          quantity={70}
          ease={80}
          color={color}
          size={0.6}
          staticity={50}
          refresh
        />
      )}
    </>
  )
}
