import React, { useState } from 'react';
import { Mail, Instagram, Code2, ArrowDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Telegram SVG Icon
const TelegramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24-.03.48z" />
  </svg>
);

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-12 pb-16 md:py-20 border-b border-slate-800/80 bg-[#090b10]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Column: Bio & Intro */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Available for collaborations & direct contact</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-blue-400">{PORTFOLIO_DATA.personal.name}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium">
              {PORTFOLIO_DATA.personal.title}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Get in Touch</span>
                <Mail className="w-3.5 h-3.5" />
              </a>

              <a
                href="#about"
                className="px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>About Me</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Quick Social Badges */}
            <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
              <span className="text-slate-500 text-xs">Direct reach:</span>

              <a
                href={PORTFOLIO_DATA.personal.telegram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900/90 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-500/50 rounded-md text-slate-300 hover:text-blue-300 transition-colors"
                title="Telegram @karolpro"
              >
                <TelegramIcon className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-[11px]">{PORTFOLIO_DATA.personal.telegram.username}</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900/90 hover:bg-pink-950/40 border border-slate-800 hover:border-pink-500/50 rounded-md text-slate-300 hover:text-pink-300 transition-colors"
                title="Instagram @abrorbek_757"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span className="font-mono text-[11px]">@{PORTFOLIO_DATA.personal.instagram.username}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Portrait */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-slate-800 bg-[#121622] shadow-2xl">
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-6 text-center">
                  <Code2 className="w-10 h-10 text-blue-500 mb-2 opacity-80" />
                  <p className="font-semibold text-white text-sm">{PORTFOLIO_DATA.personal.name}</p>
                  <p className="text-xs text-slate-400">{PORTFOLIO_DATA.personal.title}</p>
                </div>
              )}

              <img
                src="/src/assets/images/portrait_developer_1791810092516.jpg"
                alt="Abrorbek Ollaberganov"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
