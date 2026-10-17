import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Rocket, 
  FileText, 
  ArrowUp, 
  Sparkles 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onResumeClick: () => void;
  onDeployGuideClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onResumeClick, onDeployGuideClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-base flex items-center justify-center shadow-md">
              D
            </div>
            <div>
              <div className="font-bold text-white text-base">Devika E.K.S</div>
              <div className="text-xs text-slate-500">React Specialist • Java & Spring Boot • Gen AI Developer</div>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
           

            

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

       
      </div>
    </footer>
  );
};
