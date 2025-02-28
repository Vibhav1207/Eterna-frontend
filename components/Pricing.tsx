import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: ["5GB Storage", "End-to-End Encryption", "Time-Locked Storage", "Basic Support"],
  },
  {
    name: "Pro",
    price: "$24.99",
    features: ["50GB Storage", "Advanced Encryption", "Blockchain Verification", "Priority Support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Storage", "Custom Security Solutions", "Dedicated Account Manager", "24/7 Premium Support"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

