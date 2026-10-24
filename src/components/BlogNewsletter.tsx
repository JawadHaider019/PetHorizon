import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

interface BlogNewsletterProps {
  onNavigateLegal?: (doc: 'privacy' | 'deletion') => void;
}

export default function BlogNewsletter({ onNavigateLegal }: BlogNewsletterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setEmail(''), 3000);
    }
  };

  return (
    <div className="bg-white border-2 border-emerald-100/90 rounded-3xl p-8 sm:p-10 text-slate-800 shadow-sm relative overflow-hidden text-center max-w-3xl mx-auto my-12">
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200/80">
          <Mail className="w-3.5 h-3.5 text-emerald-600" />
          VIP Pet Parent Weekly Digest
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          Never miss a pet health breakthrough or routine guide
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
          Join 12,000+ pet parents receiving veterinary nutrition advice, vaccination schedules, and caretaking tips every Sunday.
        </p>

        {subscribed ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs font-bold text-emerald-800 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Thank you! You have been added to the VIP Pet Care Digest.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-2xs"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm shadow-emerald-700/20 cursor-pointer whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-[11px] text-slate-500 mt-3 font-medium">
          Zero spam. Unsubscribe anytime. Read our{' '}
          <button
            type="button"
            onClick={() => onNavigateLegal?.('privacy')}
            className="underline hover:text-emerald-700 text-slate-700 font-semibold cursor-pointer"
          >
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </div>
  );
}
