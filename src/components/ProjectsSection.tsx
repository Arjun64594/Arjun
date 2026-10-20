import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Cpu, 
  Check, 
  X, 
  Play, 
  Send,
  Kanban,
  CheckCircle2,
  Clock,
  AlertCircle,
  HelpCircle,
  Terminal,
  RefreshCw
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

type CategoryFilter = 'Full Stack' | 'Cyber Security' ;

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Mini-simulation states for project demos
  // 1. AI Assistant simulator state
  const [aiPrompt, setAiPrompt] = useState('Explain Spring Boot @RestController vs @Controller');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // 2. Ticket Kanban state
  const [tickets, setTickets] = useState([
    { id: 'TCK-101', title: 'OAuth Token refresh timeout', priority: 'High', status: 'In Progress' },
    { id: 'TCK-102', title: 'React 19 Server Components audit', priority: 'Medium', status: 'To Do' },
    { id: 'TCK-103', title: 'PostgreSQL connection pool optimization', priority: 'Critical', status: 'Done' }
  ]);

  // 3. Quiz LMS simulator state
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const filteredProjects: Project[] = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  const handleRunAiDemo = () => {
    setIsGenerating(true);
    setAiResponse(null);
    setTimeout(() => {
      if (aiPrompt.toLowerCase().includes('controller')) {
        setAiResponse(
          `@Controller: Traditional Spring MVC controller returning view names (like JSP or Thymeleaf). Requires @ResponseBody on methods to return JSON.\n\n@RestController: Convenience annotation combining @Controller and @ResponseBody. Designed specifically for RESTful APIs returning JSON or XML directly.`
        );
      } else {
        setAiResponse(
          `Arjun M's Gen AI Pipeline Processed "${aiPrompt}":\n\nOptimized with prompt template:\n• System Prompt: Senior Software Engineer\n• Grounding: Spring Boot + React Ecosystem\n• Code synthesis ready with zero hallucinations.`
        );
      }
      setIsGenerating(false);
    }, 600);
  };

  const handleToggleTicket = (id: string) => {
    setTickets(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'To Do' ? 'In Progress' : t.status === 'In Progress' ? 'Done' : 'To Do';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production & Enterprise Projects
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Real systems spanning Generative AI tooling, enterprise LMS portals, service desk automation, and microservices.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {(['All', 'Gen AI', 'Full Stack', 'Java & Spring Boot', 'Frontend'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden group"
            >
              {/* Card Header Top */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                    project.category === 'Gen AI'
                      ? 'bg-purple-950/80 border-purple-700/60 text-purple-300'
                      : project.category === 'Java & Spring Boot'
                      ? 'bg-amber-950/80 border-amber-700/60 text-amber-300'
                      : project.category === 'Full Stack'
                      ? 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300'
                      : 'bg-cyan-950/80 border-cyan-700/60 text-cyan-300'
                  }`}>
                    {project.category}
                  </span>

                  {project.metrics && (
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-indigo-300 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5 text-xs text-slate-400">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Bottom */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto">
                <div className="flex flex-wrap gap-1.5 py-3 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Interactive Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail & Interactive Demo Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left">
            
            {/* Close button */}
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-4">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/60">
                {activeProjectModal.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                {activeProjectModal.title}
              </h3>
              <p className="text-sm text-indigo-300">
                {activeProjectModal.tagline}
              </p>
            </div>

            {/* Overview & Architecture */}
            <div className="space-y-4 text-sm text-slate-300 mb-6">
              <p>{activeProjectModal.description}</p>
              
              {activeProjectModal.architectureNotes && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                  <div className="text-indigo-400 font-bold mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>System Architecture:</span>
                  </div>
                  {activeProjectModal.architectureNotes}
                </div>
              )}

              {/* Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Capabilities:
                </div>
                {activeProjectModal.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Sandbox Simulator based on project type */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-950/80 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-indigo-400" />
                <span>Live Interactive Sandbox Simulation</span>
              </div>

              {/* 1. Gen AI Prompt Simulator */}
              {activeProjectModal.demoType === 'ai-prompt' && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-300">
                    Test the model prompt orchestration pipeline:
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="Ask a technical or architectural query..."
                      className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      onClick={handleRunAiDemo}
                      disabled={isGenerating}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                    >
                      {isGenerating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                      <span>Run</span>
                    </button>
                  </div>

                  {aiResponse && (
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-emerald-300 whitespace-pre-line animate-fade-in">
                      {aiResponse}
                    </div>
                  )}
                </div>
              )}

              {/* 2. Kanban Ticket Simulator */}
              {activeProjectModal.demoType === 'ticket-kanban' && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-300 flex items-center justify-between">
                    <span>Click a ticket to advance status lifecycle:</span>
                    <span className="text-[11px] text-slate-500 font-mono">Simulating REST & WebSockets</span>
                  </div>
                  <div className="space-y-2">
                    {tickets.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => handleToggleTicket(t.id)}
                        className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer flex items-center justify-between text-xs transition-colors"
                      >
                        <div>
                          <span className="font-mono text-indigo-400 font-bold mr-2">{t.id}</span>
                          <span className="text-white">{t.title}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          t.status === 'Done' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                          t.status === 'In Progress' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                          'bg-slate-800 text-slate-400'
                        }`}>
                          {t.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Quiz LMS Simulator */}
              {activeProjectModal.demoType === 'interactive-quiz' && (
                <div className="space-y-3">
                  <div className="text-xs font-medium text-slate-300">
                    Q: In React 19, what hook handles form actions and optimistic UI updates seamlessly?
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['useActionState', 'useMemo', 'useReducer', 'useCallback'].map((opt, idx) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setQuizAnswer(idx);
                          setQuizSubmitted(true);
                        }}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          quizAnswer === idx
                            ? idx === 0
                              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                              : 'bg-rose-950/80 border-rose-500 text-rose-300'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {quizSubmitted && (
                    <div className="text-xs font-mono text-emerald-400">
                      {quizAnswer === 0 ? "Correct! useActionState integrates with server actions." : "Incorrect. The modern React hook is useActionState."}
                    </div>
                  )}
                </div>
              )}

              {/* 4. Default / Code testing runner simulator */}
              {(!activeProjectModal.demoType || activeProjectModal.demoType === 'metrics-dashboard') && (
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-slate-400 flex items-center justify-between">
                    <span>Java Spring Boot Sandbox Runner:</span>
                    <span className="text-emerald-400">PASSED 14/14 UNIT TESTS</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 text-slate-300 text-[11px] leading-relaxed">
                    <code>
                      [INFO] Running com.arjun.assessment.AlgorithmEvaluatorTest<br/>
                      [INFO] Tests run: 14, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.412 s<br/>
                      [INFO] Memory Peak: 48.2 MB | CPU Execution Score: 99.4/100
                    </code>
                  </div>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeProjectModal.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
