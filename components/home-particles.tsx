"use client"

import { Particles } from "@/components/ui/particles"

export function HomeParticles() {
  return (
    <>
      {/* White Background */}
      <div className="fixed inset-0 -z-20 bg-white dark:bg-slate-950" />
      
      {/* Black Particles */}
      <Particles
        className="fixed inset-0 -z-10"
        quantity={100}
        ease={80}
        color="#000000"
        size={0.6}
        staticity={50}
        refresh
      />
    </>
  )
}
