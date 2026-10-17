import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  ChevronDown, 
  CornerDownLeft, 
  RefreshCw,
  Award,
  Code2,
  Mail,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onResumeClick: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, onResumeClick }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Devika's AI Recruiter Copilot. Ask me anything about Devika's technical background, React and Spring Boot experience, Generative AI projects, or hiring availability!`,
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Tell me about Devika's React & Frontend background",
    "What is her experience with Java & Spring Boot?",
    "What Generative AI skills has she developed?",
    "Summarize her work at KG Genius Labs & Microcollege",
    "How can I contact or schedule an interview with Devika?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('react') || q.includes('frontend')) {
      return `Devika has deep expertise in Frontend engineering with React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, and Material-UI. She currently works as a Frontend Developer at KG Genius Labs (Nov 2023 - Present) building user-centric, high-performance web applications. She is also Meta Certified in React JS and Front-End Development, and has trained 500+ students across India in modern React architectures.`;
    }

    if (q.includes('spring') || q.includes('java') || q.includes('backend')) {
      return `Devika has extensive hands-on experience in Java and Spring Boot for microservices and RESTful API development. She holds an MCA (University Rank Holder) and B.Sc. Mathematics, providing a strong algorithmic base. She built the Automated Code Assessment Platform and backend microservices leveraging Spring Boot, JPA/Hibernate, Spring Security (JWT), and PostgreSQL. She also develops with the MERN stack (Node.js, Express, MongoDB).`;
    }

    if (q.includes('ai') || q.includes('gen ai') || q.includes('generative')) {
      return `Devika is actively working in Generative AI! Her capabilities include:
1. LLM Integration & Orchestration (Google Gemini API, OpenAI).
2. Retrieval-Augmented Generation (RAG) pipelines for contextual knowledge retrieval.
3. Prompt Engineering & AI Agent workflows.
4. Building real-time streaming AI interfaces and developer copilots.
She combines her strong full-stack skills with modern Gen AI techniques to build smart digital products.`;
    }

    if (q.includes('experience') || q.includes('kg genius') || q.includes('microcollege') || q.includes('work')) {
      return `Devika's track record includes:
• Frontend Developer at KG Genius Labs (Nov 2023 - Present): Engineered scalable, responsive web apps with React & TypeScript; optimized load times & WCAG accessibility; integrated REST APIs and Gen AI prototypes.
• Technical Trainer at KG Microcollege (June 2023 - Nov 2023): Taught 500+ students across India in Frontend Engineering; led live coding bootcamps across campuses in Tamil Nadu and Kerala; guided 30+ capstone projects.`;
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('interview')) {
      return `You can reach Devika directly:
• Email: devikasatheesan489@gmail.com
• Phone / WhatsApp: +91 8681995349
• LinkedIn: https://www.linkedin.com/in/devika-e-k-s-8ba583242/
• GitHub: https://github.com/DevikaEKS
She is currently open to full-time engineering roles, hybrid, and remote opportunities!`;
    }

    if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('rank')) {
      return `Devika holds:
1. Master of Computer Applications (MCA) from KGISL Institute of Information Management (2021-2023) — where she was awarded University Rank distinction!
2. B.Sc. Mathematics from Sri Krishna Arts and Science College (2018-2021) — providing strong algorithmic, logical, and quantitative problem-solving foundations.`;
    }

    if (q.includes('projects') || q.includes('portfolio') || q.includes('built')) {
      return `Devika has built key production systems including:
• Gen AI Code & Knowledge Assistant (LLM streaming, prompt engineering)
• Enterprise Learning Management System (LMS) with full MERN stack
• Intelligent IT Ticketing & Service Desk Platform (real-time triage & SLA timers)
• Automated Assessment & Code Testing Platform (Java, Spring Boot, unit-test sandbox)
• Multiple high-converting Corporate Portals (98+ Google Lighthouse scores).`;
    }

    return `Devika E.K.S is a Software & Gen AI Developer with 2+ years of experience across React, Java, Spring Boot, MERN stack, and Generative AI. She is an MCA University Rank Holder and Meta Certified developer. Feel free to ask about her projects, work at KG Genius Labs, or contact details!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAnswer(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText,
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 550);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col h-[600px] max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Devika's Tech & Recruiter Copilot</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Online
                </span>
              </div>
              <div className="text-xs text-slate-400">
                Grounded in Devika's verified resume & projects
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onResumeClick}
              className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hidden sm:inline-block"
            >
              View Resume
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-purple-950 border border-purple-700/60 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 sm:p-4 leading-relaxed whitespace-pre-line shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-indigo-900 border border-indigo-700 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-xs text-slate-400">
              <div className="w-7 h-7 rounded-lg bg-purple-950 border border-purple-700/60 flex items-center justify-center text-purple-300">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              </div>
              <span className="italic">Copilot is searching Devika's portfolio data...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Queries Chips */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/60 flex gap-2 overflow-x-auto no-scrollbar">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 border-t border-slate-800 bg-slate-950/90 flex gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Devika's React, Java, MERN, or Gen AI skills..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 disabled:opacity-50 transition-all"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Ask</span>
          </button>
        </form>

      </div>
    </div>
  );
};
