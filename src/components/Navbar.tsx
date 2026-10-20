import React, { useState } from 'react';
import { 
  Code2, 
  Menu, 
  X, 
  FileText, 
  Sparkles, 
  Rocket, 
  ExternalLink, 
  Github, 
  Linkedin,
  Mail,
  HelpCircle,
  Download
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
  onDeployGuideClick: () => void;
  onAiAssistantClick: () => void;
  onDownloadCodeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onResumeClick, 
  onDeployGuideClick, 
  onAiAssistantClick,
  onDownloadCodeClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Status */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-lg shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-105">
              <span>D</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Arjun M
              </div>
              <div className="text-xs text-slate-400 hidden sm:block">
               Cyber Security & Software Engineer 
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* GitHub Pages Deploy Guide trigger */}
          

            {/* AI Copilot shortcut */}
           


           

            {/* Social links */}
            <div className="flex items-center pl-2 ml-1 border-l border-slate-800 gap-1.5 text-slate-400">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onResumeClick}
              className="px-2.5 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-lg flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-slate-900 border-b border-slate-800 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-indigo-400 hover:bg-slate-800/80 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

         

          <div className="pt-2 flex items-center justify-center gap-4 text-slate-400">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-1 text-xs hover:text-white"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
