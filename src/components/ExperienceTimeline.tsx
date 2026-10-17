import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Users, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');

  return (
    <section id="experience" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Academic Journey
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            From technical training and university distinction to production-grade engineering at KG Genius Labs.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'work'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Work Experience ({PORTFOLIO_DATA.experience.length})
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Education & Honors ({PORTFOLIO_DATA.education.length})
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Work Experience Items */}
          {(activeTab === 'all' || activeTab === 'work') && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-400">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </div>

              {PORTFOLIO_DATA.experience.map((exp, index) => (
                <div
                  key={exp.company + exp.period}
                  className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all shadow-lg group"
                >
                  {/* Status Indicator */}
                  {exp.current && (
                    <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Present Role</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-indigo-400 flex items-center gap-2">
                        <span>{exp.company}</span>
                        {exp.impactBadge && (
                          <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-normal">
                            {exp.impactBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mt-2 sm:mt-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2 mb-5">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/60">
                    <span className="text-xs text-slate-400 font-mono mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education & Academic Honors */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-400">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Academic Honors</span>
              </div>

              {PORTFOLIO_DATA.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/40 transition-all shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        {edu.gradeOrHonor && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-600/60 text-amber-300 text-xs font-semibold">
                            <Award className="w-3.5 h-3.5 text-amber-400" />
                            <span>{edu.gradeOrHonor}</span>
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-medium text-purple-400">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-2 sm:mt-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-700/30">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">Meta Certifications & Distinctions</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div key={cert.title} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-indigo-300">{cert.issuer}</div>
                  <div className="text-sm font-semibold text-white leading-tight">{cert.title}</div>
                  <div className="text-[11px] text-slate-400">{cert.focus}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
