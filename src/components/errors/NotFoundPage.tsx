import { Home, Compass, PawPrint, ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateBlog?: () => void;
}

export default function NotFoundPage({ onNavigateHome, onNavigateBlog }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Paw Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center border border-emerald-200/60 shadow-xs">
          <PawPrint className="w-10 h-10 animate-bounce" />
        </div>

        {/* Status Tag */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-black uppercase tracking-wider mb-4 border border-rose-200">
          404 Error &bull; Missing Trail
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          This Page Wandered Off!
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
          We couldn&apos;t find the page you were looking for. It might have been moved, renamed,
          or Luna might have chased it into the backyard.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          {onNavigateBlog && (
            <button
              onClick={onNavigateBlog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Pet Care Guides</span>
            </button>
          )}
        </div>

        {/* Back Link */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go back to previous page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
