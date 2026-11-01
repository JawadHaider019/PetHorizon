import BentoFeatures from '../BentoFeatures';
import FamilyHubSection from '../FamilyHubSection';
import DailyJournalSection from '../DailyJournalSection';
import InteractiveTour from '../InteractiveTour';
import TestimonialsSection from '../TestimonialsSection';
import SpeciesGrid from './SpeciesGrid';
import DayTimeline from './DayTimeline';
import PricingSection from '../PricingSection';
import HomeSeoHubSection from './HomeSeoHubSection';
import FAQSection from '../FAQSection';
import ContactUs from '../ContactUs';
import DownloadCTA from '../DownloadCTA';
import { ExtendedAppView } from '../../hooks/useAppNavigation';

interface HomeBelowFoldProps {
  onNavigate: (view: ExtendedAppView) => void;
  onSelectArticle: (slug: string) => void;
  onOpenQrModal: () => void;
  onOpenIosModal: () => void;
}

export default function HomeBelowFold({
  onNavigate,
  onSelectArticle,
  onOpenQrModal,
  onOpenIosModal
}: HomeBelowFoldProps) {
  return (
    <>
      <BentoFeatures />
      <FamilyHubSection />
      <DailyJournalSection />
      <InteractiveTour />
      <TestimonialsSection />
      <SpeciesGrid />
      <DayTimeline />
      <PricingSection />
      <HomeSeoHubSection
        onNavigate={onNavigate}
        onSelectArticle={onSelectArticle}
      />
      <FAQSection />
      <ContactUs />
      <DownloadCTA
        onOpenQrModal={onOpenQrModal}
        onOpenIosModal={onOpenIosModal}
      />
    </>
  );
}
