import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="Footer bg-gray-900 text-gray-200">
      <div className="FooterDiv max-w-7xl mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h2 className="FooteraboutH2 text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            We transform spaces into beautiful, functional interiors that reflect your style and lifestyle. From concept to completion, your vision is our design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="FooterQuickH2 text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services / Advantages */}
        <div>
          <h2 className="FooterServicesH2 text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Residential Interiors</li>
            <li>Commercial Spaces</li>
            <li>Space Planning</li>
            <li>Custom Furniture Design</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h2 className="FooterContactH2 text-xl font-semibold mb-4">Contact Us</h2>
          <p className="FooterContactp text-gray-400 mb-2">South Avenue NSW , Sydney , Australia.</p>
          <p className="FooterContactp text-gray-400 mb-2">Email: info@cozyinc.com</p>
          <p className="FooterContactLastp text-gray-400 mb-4">Phone: +081 2863560</p>
          <div className="flex space-x-4 gap-3">
            <Link href="#"><FaFacebookF className="hover:text-white transition"/></Link>
            <Link href="#"><FaInstagram className="hover:text-white transition"/></Link>
            <Link href="#"><FaLinkedinIn className="hover:text-white transition"/></Link>
            <Link href="#"><FaTwitter className="hover:text-white transition"/></Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="FooterBottom mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CozyInc. All rights reserved.
      </div>
    </footer>
  );
}
