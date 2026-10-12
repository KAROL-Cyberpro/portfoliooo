import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { User, MapPin, Terminal, Heart, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-800/80 bg-[#090b10] text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-mono mb-2">Introduction</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            About Me
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A look into my background, technical interests, and how I build software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main narrative */}
          <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              {PORTFOLIO_DATA.about.story}
            </p>
            <p>
              I take pride in writing clean, readable, and maintainable code. Whether building a full-stack platform from scratch, improving an existing codebase, or integrating third-party APIs, I strive for high performance, intuitive design, and rock-solid reliability.
            </p>
            <p>
              When I'm not coding, I enjoy exploring emerging web technologies, optimizing workflows, and discussing product ideas. I am always open to connecting with fellow engineers, entrepreneurs, and teams.
            </p>

            <div className="pt-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Core Highlights</h4>
              <div className="space-y-2">
                {[
                  'Developing responsive, dynamic user interfaces with React, Next.js, and TypeScript',
                  'Engineering reliable backend services, RESTful endpoints, and database models',
                  'Dedicated to high code quality, accessible design, and performance optimization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Facts Card */}
          <div className="md:col-span-5 bg-[#0e1320] border border-slate-800 rounded-xl p-6 space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase font-mono tracking-wider">
              Quick Overview
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-slate-500 block">Name</span>
                <span className="text-white font-medium text-sm">{PORTFOLIO_DATA.personal.name}</span>
              </div>

              <div>
                <span className="text-slate-500 block">Role</span>
                <span className="text-slate-200 font-medium">{PORTFOLIO_DATA.personal.title}</span>
              </div>

              <div>
                <span className="text-slate-500 block">Location</span>
                <span className="text-slate-200 font-medium">{PORTFOLIO_DATA.personal.location}</span>
              </div>

              <div>
                <span className="text-slate-500 block">Status</span>
                <span className="text-blue-400 font-medium">{PORTFOLIO_DATA.personal.status}</span>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-slate-500 block mb-1">Direct Channels</span>
                <div className="flex flex-col gap-1.5 text-slate-300 font-mono text-[11px]">
                  <span>Telegram: <strong className="text-blue-400">@karolpro</strong></span>
                  <span>Instagram: <strong className="text-pink-400">@abrorbek_757</strong></span>
                  <span>Email: <strong className="text-slate-200">{PORTFOLIO_DATA.personal.email}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
