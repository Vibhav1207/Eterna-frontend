import { Shield, Clock, Database, Lock } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-10 w-10" />,
    title: "End-to-End Encryption",
    description: "AES-256 & RSA-based hybrid encryption for maximum security.",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Time-Locked Storage",
    description: "Set access dates and let the vault unlock only when the time is right.",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Blockchain-Powered Integrity",
    description: "Immutable record-keeping ensures data authenticity.",
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: "Decentralized File Storage",
    description: "IPFS-backed storage for enhanced security and accessibility.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

