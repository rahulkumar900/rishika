"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail } from "lucide-react";

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
    window.location.href = `mailto:Rishikacservice@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Project <span className="text-primary">Inquiries</span>
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Ready to start a new infrastructural project? Send us your query or visit our operational headquarters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Query Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-950 p-8 border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold uppercase mb-6 text-foreground">Submit a Query</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase text-slate-500">Full Name</label>
                  <Input name="name" required placeholder="John Doe" className="h-12 border-slate-300 dark:border-slate-800 focus-visible:ring-primary rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase text-slate-500">Phone Number</label>
                  <Input name="phone" type="tel" required placeholder="+91 00000 00000" className="h-12 border-slate-300 dark:border-slate-800 focus-visible:ring-primary rounded-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase text-slate-500">Email Address</label>
                <Input name="email" type="email" required placeholder="john@example.com" className="h-12 border-slate-300 dark:border-slate-800 focus-visible:ring-primary rounded-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase text-slate-500">Project Details</label>
                <Textarea 
                  name="details"
                  required
                  placeholder="Describe your construction or maintenance requirements..." 
                  className="min-h-[150px] border-slate-300 dark:border-slate-800 focus-visible:ring-primary rounded-none resize-none" 
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
                Send Inquiry <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Map & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-none border border-primary/30">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-foreground">Headquarters</h4>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    1st Floor, Rishika Tower,<br/> Sathopur, Biharsharif,<br/> Nalanda, Bihar - 803101
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-none border border-primary/30">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-foreground">Call Us</h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      +91-91109-53990<br/>+91-91020-13708
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-none border border-primary/30">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-foreground">Email</h4>
                    <p className="text-slate-500 text-sm mt-1">Rishikacservice@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow w-full h-[300px] lg:h-auto border-4 border-slate-200 dark:border-slate-800 relative bg-slate-200 dark:bg-slate-950 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2618991206103!2d85.50974861499767!3d25.198305983896593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f5bb4d400263%3A0xeab50d876d5462a!2sBihar%20Sharif%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.8)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rishika Headquarters Map"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              {/* Overlay to enforce industrial aesthetic */}
              <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
