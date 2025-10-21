"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"

export default function ParticlesDemo() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Particles Demo</h1>
          <p className="text-muted-foreground">
            Interactive particle effect with mouse tracking
          </p>
        </div>

        {/* Demo 1: Basic - Dark Background with White Particles */}
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-slate-950 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-slate-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent z-10">
            Particles
          </span>
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color="#ffffff"
            refresh
          />
        </div>

        {/* Demo 2: With Primary Color - Larger Particles */}
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-primary md:shadow-xl">
          <span className="pointer-events-none text-center text-6xl font-bold text-primary-foreground z-10">
            SMK Bina Mandiri
          </span>
          <p className="pointer-events-none text-center text-xl text-primary-foreground/80 mt-4 z-10">
            Unggul, Inovatif, Berkarakter
          </p>
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={70}
            color="#ffffff"
            size={1.2}
            refresh
          />
        </div>

        {/* Demo 3: With Secondary Color - Moving Particles */}
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-secondary md:shadow-xl">
          <span className="pointer-events-none text-center text-6xl font-bold text-secondary-foreground z-10">
            Bergabunglah
          </span>
          <p className="pointer-events-none text-center text-xl text-secondary-foreground/80 mt-4 z-10">
            Wujudkan Masa Depan Gemilang
          </p>
          <Particles
            className="absolute inset-0"
            quantity={120}
            ease={60}
            color="#002147"
            size={1.0}
            vx={0.2}
            vy={-0.1}
            refresh
          />
        </div>

        {/* Demo 4: High Contrast Test */}
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black md:shadow-xl">
          <span className="pointer-events-none text-center text-6xl font-bold text-white z-10">
            High Contrast Test
          </span>
          <p className="pointer-events-none text-center text-xl text-white/80 mt-4 z-10">
            Move your mouse to see particles
          </p>
          <Particles
            className="absolute inset-0"
            quantity={200}
            ease={50}
            color="#fe8e22"
            size={1.5}
            staticity={30}
            refresh
          />
        </div>
      </div>
    </div>
  )
}
