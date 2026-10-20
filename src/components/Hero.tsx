import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Award, 
  Code2, 
  BrainCircuit, 
  Layers, 
  Server, 
  CheckCircle2,
  PhoneCall,
  Rocket,
  Download
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onResumeClick: () => void;
  onDeployGuideClick: () => void;
  onAiAssistantClick: () => void;
  onDownloadCodeClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onResumeClick, 
  onDeployGuideClick, 
  onAiAssistantClick,
  onDownloadCodeClick 
}) => {
  const techPills = [
    { name: "React.js", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300" },
    { name: "Java & Spring Boot", color: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300" },
    { name: "MERN Stack", color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300" },
    { name: "Generative AI", color: "from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300" },
    { name: "TypeScript", color: "from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300" },
    { name: "Tailwind CSS", color: "from-sky-500/20 to-cyan-500/20 border-sky-500/40 text-sky-300" },
    { name: "SQL & Databases", color: "from-violet-500/20 to-purple-500/20 border-violet-500/40 text-violet-300" }
  ];

  return (
    <section id="about" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-500/10 blur-[130px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-600/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Available for Software & Cyber Security Roles, Remote & Hybrid
              </span>
              <span className="text-xs text-indigo-400 bg-indigo-950/70 px-2 py-0.5 rounded-md font-mono hidden sm:inline">
                Remote / Hybrid
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="text-gradient">Arjun M</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200">
                  Full Stack & Cyber Security Engineer
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                Engineering fast, responsive web systems with <span className="text-white font-semibold">React</span>, robust backend services with <span className="text-white font-semibold">Java & Spring Boot</span>, full-stack <span className="text-white font-semibold">MERN</span> architectures, and next-generation <span className="text-purple-300 font-semibold">Generative AI</span> integrations.
              </p>
            </div>

           
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

             
            </div>

            {/* Direct Connect links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              <a 
                href={PORTFOLIO_DATA.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>
              <a 
                href={PORTFOLIO_DATA.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right interactive card: Devika's Developer Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">devika-profile.config.ts</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                  active_state: READY
                </div>
              </div>

              {/* Code / Profile Preview */}
              <div className="py-4 space-y-3 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                <p>
                  <span className="text-purple-400">const</span> <span className="text-amber-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Arjun M"</span>,
                </p>
               
               
                <p className="pl-4">
                  <span className="text-slate-400">stacks:</span> [
                  <span className="text-indigo-300">"React"</span>, <span className="text-amber-300">"Java/Spring Boot"</span>, <span className="text-emerald-300">"MERN"</span>, <span className="text-pink-300">"Gen AI"</span>
                  ],
                </p>
               
               
                <p className="pl-4">
                  <span className="text-slate-400">passions:</span> [<span className="text-purple-300">"UI Performance"</span>, <span className="text-purple-300">"Cybersecurity"</span>, <span className="text-purple-300">"AI Agents"</span>]
                </p>
                <p>&#125;;</p>
              </div>

              {/* Interactive quick action banner */}
              
            </div>

            {/* Quick tech pills below card */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
              {techPills.map((pill) => (
                <span
                  key={pill.name}
                  className={`text-xs px-2.5 py-1 rounded-full border bg-gradient-to-r font-medium ${pill.color}`}
                >
                  {pill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
    

      </div>
    </section>
  );
};
