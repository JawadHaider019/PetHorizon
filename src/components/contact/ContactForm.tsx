import React from 'react';
import {
  User,
  Mail,
  Zap,
  RefreshCw,
  Send,
  MessageSquare
} from 'lucide-react';
import { SUPPORT_TOPICS } from './contactData';

interface ContactFormProps {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  selectedTopicId: string;
  setSelectedTopicId: (v: string) => void;
  priority: 'normal' | 'urgent';
  setPriority: (v: 'normal' | 'urgent') => void;
  message: string;
  setMessage: (v: string) => void;
  formErrors: Record<string, string | undefined>;
  clearError: (field: string) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({
  name,
  setName,
  email,
  setEmail,
  selectedTopicId,
  setSelectedTopicId,
  priority,
  setPriority,
  message,
  setMessage,
  formErrors,
  clearError,
  isSubmitting,
  onSubmit
}: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col h-full justify-between">
      <div>
        {/* Form Title */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Direct Support Request
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Submit a Support Ticket
            </h3>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearError('name');
                }}
                placeholder="Alex Smith"
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                  formErrors.name ? 'border-rose-300' : 'border-slate-200 focus:border-emerald-500'
                }`}
              />
            </div>
            {formErrors.name && <p className="text-[11px] text-rose-600 mt-1 font-medium">{formErrors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearError('email');
                }}
                placeholder="alex@example.com"
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                  formErrors.email ? 'border-rose-300' : 'border-slate-200 focus:border-emerald-500'
                }`}
              />
            </div>
            {formErrors.email && <p className="text-[11px] text-rose-600 mt-1 font-medium">{formErrors.email}</p>}
          </div>
        </div>

        {/* Topic Category Selection */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-700 mb-2">
            Inquiry Category <span className="text-rose-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SUPPORT_TOPICS.map((topic) => {
              const Icon = topic.icon;
              const isSelected = selectedTopicId === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`} />
                  <span className="truncate">{topic.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Priority Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="inline-flex rounded-full p-1 bg-slate-100 border border-black/[0.05]">
            <button
              type="button"
              onClick={() => setPriority('normal')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                priority === 'normal' ? 'bg-white text-slate-800 shadow-2xs' : 'text-slate-600'
              }`}
            >
              Normal Priority
            </button>
            <button
              type="button"
              onClick={() => setPriority('urgent')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                priority === 'urgent' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>Urgent</span>
            </button>
          </div>
          <span className="text-[11px] text-slate-400">
            {priority === 'urgent' ? 'Priority turnaround target: < 6 hours' : 'Typical turnaround: < 24 hours'}
          </span>
        </div>

        {/* Message */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-700">
              Message Details <span className="text-rose-500">*</span>
            </label>
            <span className="text-[10px] text-slate-400 font-mono">{message.length}/1500 chars</span>
          </div>
          <textarea
            rows={4}
            maxLength={1500}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clearError('message');
            }}
            placeholder="Please describe your question or issue in detail..."
            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
              formErrors.message ? 'border-rose-300' : 'border-slate-200 focus:border-emerald-700'
            }`}
          />
          {formErrors.message && <p className="text-[11px] text-rose-600 mt-1 font-medium">{formErrors.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>Sending Ticket...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Support Ticket</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
