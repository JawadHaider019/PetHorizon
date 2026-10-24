import { useState, useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { Mail, ChevronRight, ExternalLink } from 'lucide-react';
import { PRIVACY_POLICY, DATA_DELETION_GUIDE, LegalDocument } from '../data/legalData';
import LegalNavbar from './LegalNavbar';
import LegalSidebar from './LegalSidebar';
import LegalSectionsList from './LegalSectionsList';

interface LegalPortalProps {
  initialDoc?: 'privacy' | 'deletion';
  onNavigateHome: () => void;
  onSelectDoc?: (docId: 'privacy' | 'deletion') => void;
}

export default function LegalPortal({
  initialDoc = 'privacy',
  onNavigateHome,
  onSelectDoc
}: LegalPortalProps) {
  const [activeDocId, setActiveDocId] = useState<'privacy' | 'deletion'>(initialDoc);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [readPercent, setReadPercent] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setActiveDocId(initialDoc);
  }, [initialDoc]);

  const currentDoc: LegalDocument =
    activeDocId === 'privacy' ? PRIVACY_POLICY : DATA_DELETION_GUIDE;

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setReadPercent(Math.min(100, Math.round(latest * 100)));
    });
  }, [scrollYProgress]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentDoc.sections.length > 0) {
      setActiveSectionId(currentDoc.sections[0].id);
    }
  }, [activeDocId]);

  const handleDocChange = (id: 'privacy' | 'deletion') => {
    setActiveDocId(id);
    if (onSelectDoc) onSelectDoc(id);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-800 antialiased">
      <LegalNavbar
        activeDocId={activeDocId}
        onDocChange={handleDocChange}
        onNavigateHome={onNavigateHome}
        scaleX={scaleX}
        readPercent={readPercent}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <LegalSidebar
            currentDoc={currentDoc}
            activeSectionId={activeSectionId}
            onScrollToSection={scrollToSection}
            readPercent={readPercent}
          />

          <div className="lg:col-span-8 space-y-10">
            <LegalSectionsList
              currentDoc={currentDoc}
              activeSectionId={activeSectionId}
            />

            {/* Bottom Document Switcher */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => handleDocChange(activeDocId === 'privacy' ? 'deletion' : 'privacy')}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all text-left group cursor-pointer shadow-xs"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Switch Document
                </div>
                <div className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm flex items-center justify-between">
                  <span>{activeDocId === 'privacy' ? 'Data Deletion Guide' : 'Privacy Policy'}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-left flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-emerald-950">Questions or inquiries?</h5>
                  <p className="text-[11px] text-emerald-800">Email our engineering team directly.</p>
                </div>
                <a
                  href="mailto:pethorizon2026@gmail.com"
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        Pet Horizon &copy; {new Date().getFullYear()} &bull; Google Play Developer Policy Compliant &bull; pethorizon2026@gmail.com
      </footer>
    </div>
  );
}
