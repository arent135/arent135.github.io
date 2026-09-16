import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Inquiry / Collaboration', message: '' });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setTimeout(() => {
        setSentSuccess(false);
        onClose();
        setFormData({ name: '', email: '', subject: 'Inquiry / Collaboration', message: '' });
      }, 2000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#3c4b35]/50 shadow-2xl relative p-6 sm:p-8 space-y-6 bg-[#121412] text-[#dae6d0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-[#3c4b35]/30">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#baccb0] animate-pulse"></span>
              <span className="font-code text-[10px] text-[#baccb0] uppercase tracking-widest">SECURE_COMM_CHANNEL</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#dae6d0]">
              Initialize Contact
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#baccb0] hover:text-[#dae6d0] transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Quick Contact & Cryptographic Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div 
            onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
            className="p-3.5 bg-white/5 hover:bg-white/10 rounded border border-[#3c4b35]/40 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-center text-xs font-code text-[#baccb0]">
              <span>DIRECT_EMAIL</span>
              <span className="material-symbols-outlined text-sm group-hover:text-[#dae6d0]">
                {copiedKey === 'email' ? 'check' : 'content_copy'}
              </span>
            </div>
            <p className="font-code text-sm font-semibold text-[#dae6d0] mt-1">
              {CONTACT_INFO.email}
            </p>
            {copiedKey === 'email' && (
              <span className="text-[10px] font-code text-[#baccb0]">Copied to clipboard!</span>
            )}
          </div>

          <div 
            onClick={() => copyToClipboard(CONTACT_INFO.pgpFingerprint, 'pgp')}
            className="p-3.5 bg-white/5 hover:bg-white/10 rounded border border-[#3c4b35]/40 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-center text-xs font-code text-[#baccb0]">
              <span>PGP_FINGERPRINT</span>
              <span className="material-symbols-outlined text-sm group-hover:text-[#dae6d0]">
                {copiedKey === 'pgp' ? 'check' : 'key'}
              </span>
            </div>
            <p className="font-code text-xs truncate text-[#e3b5ff] mt-1 font-mono">
              {CONTACT_INFO.pgpFingerprint}
            </p>
            {copiedKey === 'pgp' && (
              <span className="text-[10px] font-code text-[#baccb0]">Key copied!</span>
            )}
          </div>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {sentSuccess ? (
            <div className="p-6 bg-[#baccb0]/10 border border-[#baccb0]/30 rounded text-center space-y-2">
              <span className="material-symbols-outlined text-3xl text-[#baccb0]">verified</span>
              <h4 className="font-headline text-lg font-bold text-[#dae6d0]">Message Transmitted</h4>
              <p className="font-code text-xs text-[#baccb0]">Encrypted envelope delivered to inbox. Expect response within 24h.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-code text-[11px] text-[#baccb0] uppercase">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-[#3c4b35]/50 rounded font-body text-sm text-[#dae6d0] outline-none focus:border-[#baccb0] transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-code text-[11px] text-[#baccb0] uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@skynet.net"
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-[#3c4b35]/50 rounded font-body text-sm text-[#dae6d0] outline-none focus:border-[#baccb0] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-code text-[11px] text-[#baccb0] uppercase">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-[#3c4b35]/50 rounded font-body text-sm text-[#dae6d0] outline-none focus:border-[#baccb0] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="font-code text-[11px] text-[#baccb0] uppercase">Message Body</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline project specifications, roles, or security audit inquiries..."
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-[#3c4b35]/50 rounded font-body text-sm text-[#dae6d0] outline-none focus:border-[#baccb0] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 bg-[#baccb0] text-[#0c1609] font-code font-bold text-xs rounded hover:bg-[#dae6d0] transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                {isSending ? (
                  <>
                    <span className="w-3 h-3 border-2 border-[#0c1609] border-t-transparent rounded-full animate-spin"></span>
                    <span>ENCRYPTING & TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-base">send</span>
                    <span>SEND ENCRYPTED MESSAGE</span>
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
