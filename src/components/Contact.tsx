import React, { useState } from 'react';
import { Mail, Instagram, Send, Copy, Check, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Telegram custom SVG
const TelegramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24-.03.48z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    emailOrHandle: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.emailOrHandle || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#090b10] text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-mono mb-2">Get In Touch</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Contact & Connect
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to say hi? Reach out through any of the channels below.
          </p>
        </div>

        {/* 3 Prominent Contact Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Telegram Card */}
          <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-colors group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <TelegramIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-blue-400">Direct Chat</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">Telegram</h3>
                <p className="text-xs font-mono text-blue-300 mt-0.5">
                  {PORTFOLIO_DATA.personal.telegram.username}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Fastest way to get in touch with me directly for instant messaging and quick project discussions.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800/80 mt-5">
              <a
                href={PORTFOLIO_DATA.personal.telegram.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Message on Telegram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-pink-500/50 transition-colors group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-pink-950/40 border border-pink-800/40 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-pink-400">Social</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">Instagram</h3>
                <p className="text-xs font-mono text-pink-300 mt-0.5">
                  @{PORTFOLIO_DATA.personal.instagram.username}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Check out my profile, stay in touch, or send a direct message on Instagram.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800/80 mt-5">
              <a
                href={PORTFOLIO_DATA.personal.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Open Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Gmail Card */}
          <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">Email</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">Gmail</h3>
                <p className="text-xs font-mono text-slate-300 break-all mt-0.5">
                  {PORTFOLIO_DATA.personal.email}
                </p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Preferred for formal job inquiries, contracts, detailed project scopes, or partnerships.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800/80 mt-5 flex items-center gap-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="py-2 px-3 text-xs font-mono bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Direct Message Box */}
        <div className="bg-[#0e1320] border border-slate-800 rounded-xl p-6 sm:p-8">
          <div className="max-w-xl mb-6">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Quick Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Leave your contact info and note here, and I'll get back to you promptly.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-10 h-10 bg-emerald-950/60 border border-emerald-600/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Thank you, {formData.name}!</h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                Your message has been recorded. You can also reach out directly via{' '}
                <a
                  href={PORTFOLIO_DATA.personal.telegram.url}
                  className="text-blue-400 hover:underline"
                >
                  Telegram (@karolpro)
                </a>{' '}
                for faster response.
              </p>
              <button
                onClick={() => {
                  setFormData({ name: '', emailOrHandle: '', message: '' });
                  setFormSubmitted(false);
                }}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer mt-2"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Telegram, Email or Phone *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.emailOrHandle}
                    onChange={(e) => setFormData({ ...formData, emailOrHandle: e.target.value })}
                    placeholder="@username or email"
                    className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help you? Project details, questions..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
