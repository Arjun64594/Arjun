import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Award, 
  Check, 
  Copy, 
  Briefcase, 
  GraduationCap, 
  Code2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl my-6 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/90 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Devika E.K.S - Official Resume</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 hidden sm:inline">
              Verified Profile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body Container */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-900 text-slate-200 space-y-7">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              DEVIKA E.K.S
            </h1>
            <p className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">
              Software Developer • React Specialist • Java & Spring Boot • MERN • Generative AI
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 pt-2 font-mono">
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
                {copiedType === 'email' && <Check className="w-3 h-3 text-emerald-400" />}
              </button>

              <span className="text-slate-600">•</span>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
                {copiedType === 'phone' && <Check className="w-3 h-3 text-emerald-400" />}
              </button>

              <span className="text-slate-600">•</span>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-indigo-300"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <span className="text-slate-600">•</span>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-indigo-300"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>github.com/DevikaEKS</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Passionate software developer with a strong focus on creating responsive, user-friendly interfaces using modern frameworks like React, TypeScript, and Material-UI, paired with robust backend services in Java, Spring Boot, and the MERN stack. University Rank Holder in MCA and Meta Certified developer dedicated to delivering seamless web experiences, microservices, and cutting-edge Generative AI workflows through clean, efficient, and well-tested code.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </h2>

            {/* KG Genius Labs */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-white text-base">Frontend Developer</span>
                  <span className="text-slate-400"> — KG Genius Labs</span>
                </div>
                <span className="font-mono text-slate-400 text-xs">Nov 2023 - Present</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                <li>Architected and developed responsive, user-centric web applications using modern JavaScript (ES6+), React.js, and component libraries like Material-UI and Tailwind CSS.</li>
                <li>Collaborated closely with UX/UI designers to translate high-fidelity designs and user workflows into interactive, visually appealing, and accessible frontend interfaces.</li>
                <li>Optimized website performance, achieving sub-second load times, high rendering efficiency, and strict accessibility (WCAG) compliance.</li>
                <li>Integrated enterprise RESTful APIs with microservice backends (Java Spring Boot, Node.js) and explored Generative AI capabilities for smart workflow automation.</li>
              </ul>
            </div>

            {/* KG Microcollege */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-white text-base">Technical Trainer</span>
                  <span className="text-slate-400"> — KG Microcollege</span>
                </div>
                <span className="font-mono text-slate-400 text-xs">June 2023 - Nov 2023</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                <li>Delivered and led online classes for 500+ students across India in modern Frontend Engineering, React, JavaScript, and CSS architectures.</li>
                <li>Conducted hands-on offline bootcamps and intensive technical workshops across colleges in Tamil Nadu and Kerala.</li>
                <li>Guided students through real-world capstone projects, code reviews, and industry-standard Git collaboration practices.</li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <Code2 className="w-4 h-4" />
              <span>Key Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Learning Management System (LMS)</div>
                <p className="text-slate-400">Comprehensive educational platform with course modules, student tracking, quiz engines, and instructor dashboards.</p>
                <div className="font-mono text-[11px] text-indigo-300">Stack: React.js, MERN Stack, MongoDB, Express, Material UI</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Intelligent IT Ticketing & Service Tool</div>
                <p className="text-slate-400">End-to-end ticketing platform featuring automated priority assignment, SLA countdowns, and real-time status progression.</p>
                <div className="font-mono text-[11px] text-indigo-300">Stack: React.js, Node.js, MongoDB, Tailwind CSS, REST APIs</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Automated Code Testing & Assessment Platform</div>
                <p className="text-slate-400">Evaluation platform screening developer candidates with automated code evaluation, timer constraints, and test suites.</p>
                <div className="font-mono text-[11px] text-indigo-300">Stack: Java, Spring Boot, React.js, PostgreSQL, Docker Sandboxing</div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Gen AI Knowledge & Code Intelligence Assistant</div>
                <p className="text-slate-400">Context-aware developer copilot leveraging LLMs, streaming token completion, and semantic document search.</p>
                <div className="font-mono text-[11px] text-indigo-300">Stack: React, Gen AI (Gemini / OpenAI), TypeScript, Node.js</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2 border-b border-slate-800 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="font-bold text-white">Master of Computer Applications (MCA)</span>
                  <span className="text-indigo-400 font-semibold"> — University Rank Holder</span>
                  <div className="text-slate-400">KGISL Institute of Information Management</div>
                </div>
                <span className="font-mono text-slate-400">Sep 2021 - Apr 2023</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1">
                <div>
                  <span className="font-bold text-white">B.Sc. Mathematics</span>
                  <div className="text-slate-400">Sri Krishna Arts and Science College</div>
                </div>
                <span className="font-mono text-slate-400">June 2018 - Apr 2021</span>
              </div>
            </div>
          </div>

          {/* Technical Skills & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Technical Skills
              </h3>
              <div className="space-y-1 text-xs text-slate-300">
                <p><span className="text-white font-semibold">Languages & Frameworks:</span> HTML5, CSS3, JavaScript (ES6+), TypeScript, React JS, Java, Spring Boot, MERN Stack (Node, Express, MongoDB)</p>
                <p><span className="text-white font-semibold">UI & Styling:</span> Tailwind CSS, Material-UI, Bootstrap, Responsive Design</p>
                <p><span className="text-white font-semibold">Next-Gen & AI:</span> Generative AI, LLM Integration, Prompt Engineering, RAG Concepts</p>
                <p><span className="text-white font-semibold">Databases & Tools:</span> SQL, PostgreSQL, MongoDB, Git, GitHub Pages, REST APIs</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Certifications & Honors
              </h3>
              <div className="space-y-1 text-xs text-slate-300">
                <p>• <span className="text-white font-medium">React JS Certification</span> — Meta</p>
                <p>• <span className="text-white font-medium">Front-End Developer Certification</span> — Meta</p>
                <p>• <span className="text-amber-400 font-medium">University Rank Holder</span> in Master of Computer Applications (MCA)</p>
                <p className="pt-1"><span className="text-white font-semibold">Languages:</span> English, Malayalam, Tamil</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="no-print p-4 border-t border-slate-800 bg-slate-950/80 rounded-b-2xl flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Direct Contact: <strong className="text-white">devikasatheesan489@gmail.com</strong>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
