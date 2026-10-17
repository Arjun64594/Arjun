import React, { useState } from 'react';
import { 
  X, 
  Rocket, 
  Check, 
  Copy, 
  Terminal, 
  FileCode, 
  Settings, 
  ExternalLink, 
  Globe, 
  ShieldCheck,
  AlertTriangle,
  Download
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadProjectZip } from '../utils/projectDownloader';

interface GitHubPagesGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadCodeClick?: () => void;
}

export const GitHubPagesGuideModal: React.FC<GitHubPagesGuideModalProps> = ({ 
  isOpen, 
  onClose,
  onDownloadCodeClick 
}) => {
  const [activeTab, setActiveTab] = useState<'actions' | 'ghpages' | 'vite'>('actions');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      if (onDownloadCodeClick) {
        onDownloadCodeClick();
      } else {
        await downloadProjectZip();
      }
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const githubActionsYaml = `name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site with Vite
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  const ghPagesCommands = `# 1. Install gh-pages as dev dependency
npm install gh-pages --save-dev

# 2. Add homepage & scripts into your package.json:
# "homepage": "https://devikaeks.github.io/portfolio",
# "scripts": {
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# }

# 3. Deploy to gh-pages branch in 1 command:
npm run deploy`;

  const viteBaseSnippet = `// In your vite.config.ts:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Use relative base './' or your repo name '/portfolio/'
  base: './', 
  plugins: [react(), tailwindcss()],
});`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-semibold mb-2">
            <Rocket className="w-3.5 h-3.5 text-indigo-400" />
            <span>Zero-Cost Hosting Walkthrough</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Publish & Deploy to GitHub Pages for Free
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Want to run this locally or push from your computer?</span>
              </div>
              <div className="text-[11px] text-slate-300">
                Download the complete React repository archive (.zip) with package.json, Vite config, and all components.
              </div>
            </div>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/30 transition-all shrink-0 active:scale-95 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'Bundling ZIP...' : 'Download Code (.zip)'}</span>
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 mb-6 gap-2">
          <button
            onClick={() => setActiveTab('actions')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'actions'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Method 1: GitHub Actions (Recommended)
          </button>
          <button
            onClick={() => setActiveTab('ghpages')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'ghpages'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Method 2: gh-pages CLI
          </button>
          <button
            onClick={() => setActiveTab('vite')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'vite'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Vite Configuration Check
          </button>
        </div>

        {/* Tab 1: GitHub Actions */}
        {activeTab === 'actions' && (
          <div className="space-y-5 text-sm">
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/40 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white">Best Practice: </span>
                GitHub Actions automatically builds your Vite React code and publishes it whenever you push to <span className="font-mono text-indigo-300">main</span>.
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <div className="font-semibold text-white">Push Code to your GitHub Repository</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Create a repository (e.g. <span className="font-mono text-slate-300">portfolio</span>) on <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">github.com/DevikaEKS</a> and push this codebase.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">Create Workflow File: <code className="text-indigo-300 text-xs">.github/workflows/deploy.yml</code></span>
                    <button
                      onClick={() => handleCopy(githubActionsYaml, 'actions-yaml')}
                      className="text-xs flex items-center gap-1 text-indigo-400 hover:text-indigo-300 bg-slate-800 px-2 py-1 rounded"
                    >
                      {copiedKey === 'actions-yaml' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === 'actions-yaml' ? 'Copied YAML!' : 'Copy YAML'}</span>
                    </button>
                  </div>
                  <pre className="mt-2 p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto max-h-48">
                    {githubActionsYaml}
                  </pre>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <div className="font-semibold text-white">Enable GitHub Actions in Settings</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Navigate to your GitHub repo &rarr; <span className="font-semibold text-slate-200">Settings</span> &rarr; <span className="font-semibold text-slate-200">Pages</span> &rarr; Under <span className="font-semibold text-slate-200">"Build and deployment &gt; Source"</span>, select <span className="text-emerald-400 font-semibold">GitHub Actions</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <div>
                  <div className="font-semibold text-white">Live in ~60 Seconds!</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Your site will be live at <span className="text-emerald-400 font-mono">https://devikaeks.github.io/&lt;repo-name&gt;/</span> with free SSL and global CDN.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: gh-pages */}
        {activeTab === 'ghpages' && (
          <div className="space-y-4 text-sm">
            <p className="text-xs text-slate-300">
              Prefer command-line deployments without setting up Actions? Use the official <code className="text-indigo-300 font-mono">gh-pages</code> npm package.
            </p>

            <div className="relative">
              <button
                onClick={() => handleCopy(ghPagesCommands, 'gh-commands')}
                className="absolute top-2 right-2 text-xs flex items-center gap-1 text-indigo-400 hover:text-indigo-300 bg-slate-800/90 px-2 py-1 rounded"
              >
                {copiedKey === 'gh-commands' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'gh-commands' ? 'Copied' : 'Copy'}</span>
              </button>
              <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300 overflow-x-auto">
                {ghPagesCommands}
              </pre>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400">
              <strong className="text-white">Note:</strong> When using <code className="text-indigo-300">gh-pages</code>, make sure your GitHub repo has GitHub Pages source set to the <code className="text-emerald-300 font-mono">gh-pages</code> branch.
            </div>
          </div>
        )}

        {/* Tab 3: Vite config */}
        {activeTab === 'vite' && (
          <div className="space-y-4 text-sm">
            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/40 text-xs text-amber-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Important:</strong> Because GitHub Pages hosts repositories under a subpath (e.g. <code className="font-mono">/portfolio/</code>), setting <code className="font-mono">base: './'</code> ensures your assets (JS, CSS, images) load properly without 404 errors.
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() => handleCopy(viteBaseSnippet, 'vite-snippet')}
                className="absolute top-2 right-2 text-xs flex items-center gap-1 text-indigo-400 hover:text-indigo-300 bg-slate-800/90 px-2 py-1 rounded"
              >
                {copiedKey === 'vite-snippet' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === 'vite-snippet' ? 'Copied' : 'Copy'}</span>
              </button>
              <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto">
                {viteBaseSnippet}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href="https://docs.github.com/en/pages/getting-started-with-github-pages"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Official GitHub Pages Docs</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
          >
            Got it, Let's Build!
          </button>
        </div>

      </div>
    </div>
  );
};
