
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';
import { AiAssistant } from './components/AiAssistant';

export default function App() {
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <Navbar
        onAiAssistantClick={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero
          onAiAssistantClick={() => setIsAiAssistantOpen(true)}
        />

        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Assistant Floating Button */}
      <aside
        aria-label="Quick Actions"
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5"
      >
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 active:scale-95 transition-all"
          title="Chat with Devika's AI Assistant"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span>Talk with Devika's AI</span>
        </button>
      </aside>

      {/* AI Assistant */}
      <AiAssistant
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />
    </div>
  );
}
