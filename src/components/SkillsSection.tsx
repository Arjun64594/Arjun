import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Server, 
  Database, 
  Languages, 
  CheckCircle2, 
  Sliders, 
  Briefcase,
  Star,
  Brain
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type SkillCategory = 'all' | 'genAi' | 'frontend' | 'backend' | 'databaseDevOps';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('Full Stack Developer');

  const roleProfiles: Record<string, { match: number; highlights: string[]; matchTags: string[] }> = {
    'Full Stack Developer': {
      match: 96,
      highlights: [
        'End-to-end expertise spanning React.js frontend and Java/Spring Boot & Node.js backends.',
        'Proven capability in database modeling (PostgreSQL, MySQL, MongoDB) and REST API security.',
        'Production experience building real-world enterprise applications at KG Genius Labs.'
      ],
      matchTags: ['React.js', 'Java', 'Spring Boot', 'MERN', 'REST APIs', 'SQL', 'MongoDB']
    },
    'Frontend / React Specialist': {
      match: 98,
      highlights: [
        'Meta Certified Front-End & React Developer with advanced state management knowledge.',
        'Expert in responsive Tailwind CSS, Material-UI, mobile-first design, and web accessibility.',
        'Delivered 500+ student training sessions and high-performance production corporate sites.'
      ],
      matchTags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Material-UI', 'JavaScript ES6+', 'HTML5/CSS3']
    },
    'Generative AI Engineer': {
      match: 92,
      highlights: [
        'Proficient in prompt engineering, LLM integration pipelines (Gemini API & OpenAI), and AI agent workflows.',
        'RAG architecture integration with vector retrieval and streaming response UX in React.',
        'Hands-on experience converting AI models into interactive client-facing solutions.'
      ],
      matchTags: ['Generative AI', 'LLMs', 'RAG Pipelines', 'Prompt Engineering', 'AI Web Apps']
    },
    'Java & Spring Boot Engineer': {
      match: 90,
      highlights: [
        'Strong object-oriented Java foundation backed by B.Sc. Mathematics & MCA distinction.',
        'Experienced in Spring Boot REST microservices, JPA/Hibernate, and relational database schemas.',
        'Engineered automated candidate evaluation systems with unit test graders.'
      ],
      matchTags: ['Java', 'Spring Boot', 'SQL', 'Microservices', 'RESTful Services', 'Spring Data']
    }
  };

  const getSkillsList = () => {
    if (activeCategory === 'genAi') return PORTFOLIO_DATA.skills.genAi;
    if (activeCategory === 'frontend') return PORTFOLIO_DATA.skills.frontend;
    if (activeCategory === 'backend') return PORTFOLIO_DATA.skills.backend;
    if (activeCategory === 'databaseDevOps') return PORTFOLIO_DATA.skills.databaseDevOps;
    
    // 'all'
    return [
      ...PORTFOLIO_DATA.skills.genAi,
      ...PORTFOLIO_DATA.skills.frontend,
      ...PORTFOLIO_DATA.skills.backend,
      ...PORTFOLIO_DATA.skills.databaseDevOps,
    ];
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/30 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/50 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered Across Stacks & Paradigms
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            From modern React interfaces and Java microservices to Generative AI workflows and database architecture.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory('genAi')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'genAi'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Brain className="w-3 h-3 text-purple-300" />
              <span>Generative AI ({PORTFOLIO_DATA.skills.genAi.length})</span>
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'frontend'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Code2 className="w-3 h-3 text-cyan-300" />
              <span>Frontend & UI ({PORTFOLIO_DATA.skills.frontend.length})</span>
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'backend'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Server className="w-3 h-3 text-amber-300" />
              <span>Java & MERN Backend ({PORTFOLIO_DATA.skills.backend.length})</span>
            </button>
            <button
              onClick={() => setActiveCategory('databaseDevOps')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === 'databaseDevOps'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Database className="w-3 h-3 text-emerald-300" />
              <span>Databases & Git ({PORTFOLIO_DATA.skills.databaseDevOps.length})</span>
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {getSkillsList().map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-indigo-950/70 border border-indigo-800/40 text-indigo-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Recruiter Role Compatibility Card */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-purple-950/40 border border-indigo-700/40 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sliders className="w-4 h-4" />
                <span>Interactive Recruiter Assessment Tool</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Role Fit & Compatibility Analysis
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select your open position to evaluate Devika's qualifications against target requirements.
              </p>
            </div>

            {/* Role Selectors */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(roleProfiles).map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRoleFilter(role)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedRoleFilter === role
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Match Score & Highlights */}
          {selectedRoleFilter && roleProfiles[selectedRoleFilter] && (
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Match Dial */}
              <div className="lg:col-span-3 flex flex-col items-center justify-center p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <div className="text-4xl font-extrabold text-gradient-cyan mb-1">
                  {roleProfiles[selectedRoleFilter].match}%
                </div>
                <div className="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Strong Match</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  for {selectedRoleFilter}
                </div>
              </div>

              {/* Highlights & Tags */}
              <div className="lg:col-span-9 space-y-4">
                <div className="space-y-2">
                  {roleProfiles[selectedRoleFilter].highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-xs text-slate-400 font-mono">Matched Technologies:</span>
                  {roleProfiles[selectedRoleFilter].matchTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Spoken Languages & Communication */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.languages.map((lang) => (
            <div key={lang.name} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-300 font-bold text-xs">
                  {lang.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{lang.name}</div>
                  <div className="text-xs text-slate-400">{lang.proficiency}</div>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
