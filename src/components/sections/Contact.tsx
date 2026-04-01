"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const details = formData.get("details") as string;

    const subject = encodeURIComponent("New Project Inquiry: " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nProject Details:\n${details}`
    );

    // Redirect to the default mail client securely
    window.location.href = `mailto:rishikacservice@gmail.com?subject=${subject}&body=${body}`;
  };

  const easeExpoOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <section id="contact" className="py-24 md:py-40 bg-primary relative border-t-2 border-black">
      <div className="container px-4 md:px-10 mx-auto w-full">
        
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Left Side: Massive Text & Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: easeExpoOut }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-[#050505] leading-[0.85] mb-8 md:mb-12"
              >
                LET'S <br/>TALK<span className="text-white">.</span>
              </motion.h2>
              <p className="text-base md:text-2xl font-medium text-black/60 max-w-sm mb-10 md:mb-16">
                Ready to initiate a new infrastructural execution? Directly contact our operational headquarters.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/50 mb-2">Operational Base</h4>
                <p className="font-black text-lg md:text-3xl uppercase tracking-tighter text-[#050505]">
                  1st Floor, Rishika Tower,<br/> Sathopur, Biharsharif,<br/> Nalanda, Bihar - 803101
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/50 mb-2">Direct Lines</h4>
                <p className="font-black text-lg md:text-3xl uppercase tracking-tighter text-[#050505]">
                  +91-91109-53990<br/>+91-91020-13708
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Ultra Minimal Form */}
          <div className="w-full md:w-1/2">
            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              onSubmit={handleSubmit} 
              className="flex flex-col gap-10 md:gap-16 mt-4 md:mt-10"
            >
              <div className="relative group">
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="YOUR NAME" 
                  className="w-full bg-transparent border-b-2 border-black/20 text-xl md:text-5xl font-black uppercase tracking-tighter text-[#050505] placeholder:text-black/20 focus:outline-none focus:border-black transition-colors py-4" 
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b-2 border-black/20 text-xl md:text-5xl font-black uppercase tracking-tighter text-[#050505] placeholder:text-black/20 focus:outline-none focus:border-black transition-colors py-4" 
                />
              </div>
              <div className="relative group">
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="PHONE NUMBER" 
                  className="w-full bg-transparent border-b-2 border-black/20 text-xl md:text-5xl font-black uppercase tracking-tighter text-[#050505] placeholder:text-black/20 focus:outline-none focus:border-black transition-colors py-4" 
                />
              </div>
              <div className="relative group">
                <textarea 
                  name="details" 
                  required 
                  placeholder="PROJECT DETAILS" 
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-black/20 text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#050505] placeholder:text-black/20 focus:outline-none focus:border-black transition-colors py-4 resize-none" 
                />
              </div>
              
              <button 
                type="submit" 
                className="group relative flex items-center justify-between w-full border-2 border-black bg-transparent py-6 px-10 hover:bg-[#050505] transition-colors duration-500 overflow-hidden"
              >
                <span className="relative z-10 text-xl md:text-4xl font-black uppercase tracking-tighter text-[#050505] group-hover:text-white transition-colors duration-500">
                  Transmit
                </span>
                <Send className="relative z-10 w-8 h-8 text-[#050505] group-hover:text-white transition-colors duration-500" />
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
