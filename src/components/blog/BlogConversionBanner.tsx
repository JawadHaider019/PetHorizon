import { PLAY_STORE_URL } from '../../config/siteConfig';

interface BlogConversionBannerProps {
  onOpenQrModal?: () => void;
}

export default function BlogConversionBanner({ onOpenQrModal }: BlogConversionBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
      <div className="rounded-3xl bg-gradient-to-br from-[#0c1b1a] to-[#123630] p-8 md:p-12 text-center text-white shadow-xl">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Ready to Keep Your Pet Healthy &amp; Organized?
        </h3>
        <p className="mt-3 text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
          Eliminate missed vaccinations, stop double-feeding confusion, and track expenses effortlessly with PetHorizon.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-[#0c1b1a] hover:bg-gray-100 transition shadow-sm"
          >
            Download on Google Play
          </a>
          {onOpenQrModal && (
            <button
              type="button"
              onClick={onOpenQrModal}
              className="rounded-xl bg-[#126c55] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#0e5644] transition shadow-sm cursor-pointer"
            >
              Scan QR Code
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
