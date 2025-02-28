'use client'
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Be Part of the Future of Digital Security</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the EternaVaultX waitlist today and be among the first to experience the next generation of secure,
          time-locked storage.
        </p>
        <Button size="lg" className="text-lg px-8 py-4" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
          Join the Waitlist Now
        </Button>
      </div>
    </section>
  )
}

