import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-semibold mb-4">QEELIN COUTURE</h2>
            <p className="text-background/70 max-w-md leading-relaxed">
              Crafting timeless elegance for the modern woman. Premium quality, contemporary designs, and unmatched
              sophistication in every piece.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 border border-background/20 hover:bg-background/10 transition-colors rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 border border-background/20 hover:bg-background/10 transition-colors rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 border border-background/20 hover:bg-background/10 transition-colors rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wider">SHOP</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections/kurti-sets"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Kurti Sets
                </Link>
              </li>
              <li>
                <Link href="/collections/tops" className="text-background/70 hover:text-background transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/collections/jeans" className="text-background/70 hover:text-background transition-colors">
                  Jeans
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-background/70 hover:text-background transition-colors">
                  All Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wider">CONTACT</h3>
            <ul className="space-y-3 text-background/70">
              <li>support@qeelincouture.com</li>
              <li>+91 98765 43210</li>
              <li className="pt-2">
                <Link href="/admin" className="text-accent hover:underline">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Qeelin Couture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
