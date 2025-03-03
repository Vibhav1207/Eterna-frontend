'use client'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">The Future of Secure, Time-Locked Storage</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          EternaVaultX is a next-gen digital vault designed to store messages, files, and smart contracts with
          time-locked encryption and blockchain security.
        </p>
        <Button size="lg" className="text-lg px-8 py-4" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
          Join the Waitlist
        </Button>
      </div>
    </section>
  )
}

