import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { projectsData } from "@/data/projects";
import { ArrowLeft, Calendar, MapPin, Building2, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm z-10" />
          <div 
            className="w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20 max-w-6xl">
          <Link href="/#projects" className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:text-white transition-colors mb-8 bg-slate-900 border border-primary/20 hover:border-primary px-4 py-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs px-4 py-2 w-fit mb-6">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-8">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 md:gap-12 text-slate-300 font-medium bg-slate-900/50 p-6 border border-slate-800 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Timeline</span>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-lg">{project.year}</span>
              </div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden md:block" />
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Duration</span>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-lg">{project.duration}</span>
              </div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden md:block" />
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Location</span>
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg">{project.location}</span>
              </div>
            </div>
            <div className="w-px h-10 bg-slate-800 hidden md:block" />
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase text-slate-500 font-bold tracking-wider">Client</span>
              <div className="flex items-center gap-2 text-white">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-lg">{project.client}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-slate-900 bg-[size:40px_40px] opacity-20 pointer-events-none" />
        <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-black uppercase text-white mb-6 flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-primary block" /> Project Overview
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Scope of Work */}
              <div>
                <h2 className="text-3xl font-black uppercase text-white mb-6 flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-primary block" /> Scope of Work
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-4 hover:border-primary/50 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem & Solution Card */}
              <div className="bg-slate-900 border border-slate-800 p-8 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHBhdGggZD0nTTEwIDBMMCAxMFYwSDEwWicgZmlsbD0nI2VhYjMwOCcgLz4KPC9zdmc+')] opacity-5 group-hover:opacity-10 transition-opacity" />
                
                <h3 className="text-xl font-black uppercase text-primary mb-4 tracking-wider">The Challenge</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-medium mb-10 pl-4 border-l-2 border-slate-800">
                  {project.challenge}
                </p>

                <h3 className="text-xl font-black uppercase text-primary mb-4 tracking-wider">Our Solution</h3>
                <p className="text-lg text-slate-300 leading-relaxed font-medium pl-4 border-l-2 border-slate-800">
                  {project.solution}
                </p>
              </div>

              {/* Project Impact */}
              <div>
                <h2 className="text-3xl font-black uppercase text-white mb-6 flex items-center gap-4">
                  <span className="w-12 h-1.5 bg-primary block" /> Project Impact
                </h2>
                <div className="bg-primary/10 border-l-4 border-primary p-6">
                  <p className="text-xl text-white font-medium leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Sidebar */}
            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary block" /> Image Library
              </h2>
              {project.gallery.map((img, i) => (
                <div key={i} className="aspect-video w-full overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-xl group">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </div>
              ))}
              <div className="bg-slate-900 border border-slate-800 p-8 text-center mt-12 space-y-4">
                 <h4 className="text-white font-bold uppercase text-xl">Start a project</h4>
                 <p className="text-slate-400 text-sm">Have a similar infrastructural requirement?</p>
                 <Link href="/#contact" className="inline-block w-full bg-primary text-primary-foreground font-bold uppercase py-3 hover:bg-primary/90 transition-colors">
                   Get a Quote
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
