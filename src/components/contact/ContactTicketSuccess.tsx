import { useState } from 'react';
import { CheckCircle2, Copy, Check, Mail, Send, ArrowRight } from 'lucide-react';
import { TicketData, DISPLAY_SUPPORT_EMAIL } from './contactData';

interface ContactTicketSuccessProps {
  ticket: TicketData;
  onReset: () => void;
}

export default function ContactTicketSuccess({ ticket, onReset }: ContactTicketSuccessProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ticket.ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoSubject = encodeURIComponent(`[${ticket.ticketId}] ${ticket.topic.subjectTag}: Inquiry from ${ticket.name}`);
  const mailtoBody = encodeURIComponent(
    `Hello Pet Horizon Team,\n\nTicket ID: ${ticket.ticketId}\nCategory: ${ticket.topic.label}\nUser: ${ticket.name} (${ticket.email})\nPriority: ${ticket.priority}\n\nDetails:\n${ticket.message}\n`
  );

  return (
    <div className="flex flex-col h-full justify-between py-2">
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Delivered to {DISPLAY_SUPPORT_EMAIL}</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            Received at {ticket.submittedAt}
          </span>
        </div>

        <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
          Thank You, {ticket.name}!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
          Your inquiry has been assigned a priority tracking ID. Our core support team will review it and reply directly to{' '}
          <strong className="text-slate-800">{ticket.email}</strong>.
        </p>

        {/* Ticket Reference Summary */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 mb-6 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Ticket Reference ID
              </span>
              <span className="text-lg font-black text-emerald-800 font-mono">{ticket.ticketId}</span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy ID'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400 text-[11px] block">Category</span>
              <span className="font-bold text-slate-800">{ticket.topic.label}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">Priority</span>
              <span className={`font-bold capitalize ${ticket.priority === 'urgent' ? 'text-amber-600' : 'text-slate-800'}`}>
                {ticket.priority}
              </span>
            </div>
          </div>
        </div>

        {/* Backup Direct Mailer Action */}
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Need to attach screenshots or diagnostic logs?</span>
          </div>
          <a
            href={`mailto:${DISPLAY_SUPPORT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Open in Mail Client</span>
            <Send className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-4">
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
        >
          <span>Submit Another Ticket</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
