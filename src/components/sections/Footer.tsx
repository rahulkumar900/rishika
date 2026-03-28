"use client";

import { Droplets, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white pb-2 overflow-hidden">
              <img src="/logo.png" alt="Rishika Cleaner Service Logo" className="h-20 w-auto object-contain " />
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Premium construction, maintenance, and water facility services across Bihar and Jharkhand since 2019.
            </p>
            <div className="inline-block px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 mt-2">
              GSTIN: 10DZPB0421H1ZD
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 pl-0 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 lg:col-span-2 text-sm">
            <h4 className="font-semibold text-white tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="leading-relaxed">
                  1st Floor, Rishika Tower,<br />
                  Sathopur, Biharsharif, Nalanda,<br />
                  Bihar - 803101
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91-91109-53990 &nbsp;|&nbsp; +91-91020-13708</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:Rishikacservice@gmail.com">Rishikacservice@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Rishika Cleaner Service. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
