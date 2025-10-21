"use client"

import { Particles } from "@/components/ui/particles"

export default function TestParticles() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">Particles Test</h1>
          <p className="text-slate-400">
            Move your mouse to see the particles react
          </p>
        </div>

        {/* Test 1: Simple Black Background with White Particles */}
        <div className="relative h-[600px] w-full rounded-lg border-4 border-white/20 bg-black overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-white mb-4">
                Test 1
              </h2>
              <p className="text-2xl text-white/70">
                White particles on black
              </p>
            </div>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={200}
            ease={50}
            color="#ffffff"
            size={2}
            staticity={30}
          />
        </div>

        {/* Test 2: Orange Particles */}
        <div className="relative h-[600px] w-full rounded-lg border-4 border-orange-500/20 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-white mb-4">
                Test 2
              </h2>
              <p className="text-2xl text-white/70">
                Orange particles
              </p>
            </div>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={60}
            color="#fe8e22"
            size={1.5}
            staticity={40}
          />
        </div>

        {/* Test 3: Blue Particles with Movement */}
        <div className="relative h-[600px] w-full rounded-lg border-4 border-blue-500/20 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-white mb-4">
                Test 3
              </h2>
              <p className="text-2xl text-white/70">
                Blue particles with movement
              </p>
            </div>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={180}
            ease={70}
            color="#0a4d9e"
            size={1.2}
            staticity={50}
            vx={0.3}
            vy={-0.2}
          />
        </div>

        <div className="text-center text-white/60 text-sm mt-12">
          <p>If you don&apos;t see particles, check browser console (F12) for errors</p>
        </div>
      </div>
    </div>
  )
}
