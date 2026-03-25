"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Droplets, PaintRoller, Wrench } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Construction & Contracting",
      description: "Platform construction, railway station management, and large-scale Public Health Engineering Department (PHED) projects.",
      icon: <Building2 className="w-10 h-10 text-primary" />,
      delay: 0.1,
    },
    {
      title: "Overhead Tank Maintenance",
      description: "Expert maintenance and construction of RCC Overhead Tanks across Bihar's PHED Eastern Zone.",
      icon: <Droplets className="w-10 h-10 text-primary" />,
      delay: 0.2,
    },
    {
      title: "Water Filtration Services",
      description: "Panchayat-level water filter cleaning and maintenance under the Har Ghar Nal Ka Jal Yojna.",
      icon: <Wrench className="w-10 h-10 text-primary" />,
      delay: 0.3,
    },
    {
      title: "Painting & Renovation",
      description: "G.I. Tower repainting, structural painting, and maintenance works like the NIIT Ganga Ghat steps.",
      icon: <PaintRoller className="w-10 h-10 text-primary" />,
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              Core <span className="text-primary">Capabilities</span>
            </h2>
            <div className="w-20 h-2 bg-primary mt-4 mb-4"></div>
            <p className="text-lg text-muted-foreground font-medium">
              We deliver specialized, robust solutions tailored for intensive infrastructure and public health engineering projects.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300 bg-slate-50 dark:bg-slate-950 group rounded-none hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-6 border-2 border-slate-200 dark:border-slate-800 w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-900 group-hover:border-primary transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold uppercase">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400 font-medium">
                    {service.description}
                  </CardDescription>
                </CardContent>
                {/* Decorative bottom bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 group-hover:bg-primary transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
