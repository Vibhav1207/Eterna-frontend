import Link from "next/link";
import { Shield, Lock, Clock, Upload, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Secure Time-Locked Digital Storage
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Store your files securely with time-lock encryption. Access your data only when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lock,
                title: "End-to-End Encryption",
                description: "Your files are encrypted before they leave your device, ensuring maximum security."
              },
              {
                icon: Clock,
                title: "Time-Lock Technology",
                description: "Schedule when your files become accessible with precise time-lock controls."
              },
              {
                icon: Upload,
                title: "Easy File Management",
                description: "Intuitive drag & drop interface for uploading and organizing your files."
              },
              {
                icon: Download,
                title: "Secure Access",
                description: "Access your files from anywhere with our secure authentication system."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload & Encrypt",
                description: "Upload your files through our secure platform. All files are automatically encrypted."
              },
              {
                step: "02",
                title: "Set Time Lock",
                description: "Choose when your files should become accessible. Set a specific date and time."
              },
              {
                step: "03",
                title: "Access When Ready",
                description: "When the time comes, your files will be automatically unlocked and ready for access."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 absolute -top-6 left-0">{step.step}</div>
                <div className="pt-8">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to secure your digital assets?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of users who trust EternaVaultX for their secure storage needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/dashboard">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Shield className="h-6 w-6 text-primary mr-2" />
              <span className="text-lg font-bold">EternaVaultX</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} EternaVaultX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}