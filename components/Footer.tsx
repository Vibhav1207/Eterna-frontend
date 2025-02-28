import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EternaVaultX</h3>
            <p className="text-sm text-muted-foreground">Secure your future, today.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#waitlist" className="text-sm hover:text-primary">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
             
              <Link href="https://instagram.com/aryanm830" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com/srujalmenghare" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EternaVaultX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

