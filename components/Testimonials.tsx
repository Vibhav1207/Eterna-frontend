import Image from "next/image"

const testimonials = [
  {
    quote:
      "EternaVaultX has revolutionized how we handle sensitive documents. It's secure, easy to use, and gives us peace of mind.",
    author: "Jane Doe",
    title: "CEO, TechCorp",
  },
  {
    quote:
      "The time-locked feature is a game-changer for our legal contracts. EternaVaultX is now an integral part of our workflow.",
    author: "John Smith",
    title: "Legal Director, LawFirm LLC",
  },
  {
    quote:
      "As a futurist, I'm impressed by EternaVaultX's innovative approach to digital storage. It's truly ahead of its time.",
    author: "Alex Johnson",
    title: "Futurist & Technology Consultant",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={`/placeholder.svg?height=50&width=50`}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

