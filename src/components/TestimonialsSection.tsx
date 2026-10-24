import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  petName: string;
  petBreed: string;
  petSpecies: string;
  rating: number;
  badge: string;
  avatarBg: string;
  quote: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah & Michael Jenkins',
    role: 'Two-Pet Household',
    location: 'Austin, Texas',
    petName: 'Cooper & Luna',
    petBreed: 'Golden Retriever & Frenchie',
    petSpecies: 'Dogs',
    rating: 5,
    badge: 'Verified Family Hub User',
    avatarBg: 'bg-amber-100 text-amber-800',
    quote:
      'Before Pet Horizon, my husband and I were constantly texting back and forth: "Did you feed Cooper?" or "Did Luna get her evening allergy pill?". The Family Hub with instant QR joining eliminated 100% of the confusion. When he checks off morning breakfast, my phone updates right away.',
    highlight: 'Eliminated our daily communication breakdown completely.'
  },
  {
    id: '2',
    author: 'Dr. Elena Rostova, DVM',
    role: 'Veterinary Clinical Advisor',
    location: 'Seattle, Washington',
    petName: 'Clinical Practice',
    petBreed: 'Small Animal Medicine',
    petSpecies: 'Veterinary Professional',
    rating: 5,
    badge: 'Verified DVM Endorsement',
    avatarBg: 'bg-emerald-100 text-emerald-800',
    quote:
      'When pet owners arrive at our clinic with Pet Horizon’s complete health and vaccination logs, clinical assessments are twice as accurate. The medication reminders significantly boost client treatment compliance for chronic conditions like kidney disease and canine heartworm.',
    highlight: 'Significantly improves patient medication compliance.'
  },
  {
    id: '3',
    author: 'Marcus & David Chen',
    role: 'Senior Pet Rescuer',
    location: 'San Francisco, CA',
    petName: 'Mochi & Miso',
    petBreed: 'Domestic Shorthairs (Ages 12 & 14)',
    petSpecies: 'Senior Cats',
    rating: 5,
    badge: 'Verified Multi-Pet Parent',
    avatarBg: 'bg-blue-100 text-blue-800',
    quote:
      'Managing two geriatric cats on separate prescription renal diets and insulin regimens was terrifying. The multi-profile switcher lets us toggle diets effortlessly and the medicine stock count warns us 4 days before refills run dry. It is an absolute lifesaver.',
    highlight: 'Prescription diets and insulin alarms made manageable.'
  },
  {
    id: '4',
    author: 'Emily K. Rodriguez',
    role: 'Exotic Pet Enthusiast',
    location: 'Denver, Colorado',
    petName: 'Barnaby & Pip',
    petBreed: 'Holland Lop Rabbit & Green-Cheek Conure',
    petSpecies: 'Small Animals & Birds',
    rating: 5,
    badge: 'Verified Multi-Species Caretaker',
    avatarBg: 'bg-purple-100 text-purple-800',
    quote:
      'Almost every pet app out there assumes you only have a dog. Pet Horizon genuinely supports rabbits and birds with customizable feeding intervals, weight tracking in both grams and ounces, and daily photo memories. Five stars!',
    highlight: 'Finally a care tracker that understands non-dog pets.'
  }
];

const METRICS = [
  { label: 'Google Play Rating', value: '4.9 ★', sub: 'From verified Android reviews' },
  { label: 'Meals & Meds Logged', value: '50,000+', sub: 'Across active pet households' },
  { label: 'On-Time Reminder Rate', value: '99.8%', sub: 'Zero missed medication alerts' },
  { label: 'Supported Species', value: '15+', sub: 'Dogs, Cats, Birds, Rabbits & more' },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F5F6F8] relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/30" />
            <span>Real Stories From Real Pet Parents</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Loved by Modern Pet Families Everywhere
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            See how households, pet sitters, and veterinary advisors use Pet Horizon every day to keep companions healthy, happy, and on schedule.
          </p>
        </div>

        {/* High-Trust Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16">
          {METRICS.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight text-emerald-700">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                {m.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2x2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-12">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Top Accent Quote Icon */}
              <div className="absolute top-6 right-6 text-emerald-100 pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Stars and Verification Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Highlight Callout */}
                <p className="text-slate-900 font-bold text-base sm:text-lg leading-snug mb-3">
                  "{item.highlight}"
                </p>

                {/* Main Quote */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author & Pet Metadata Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full font-black text-sm flex items-center justify-center shrink-0 shadow-2xs ${item.avatarBg}`}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    🐾 {item.petName}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium max-w-[120px] truncate">
                    {item.petBreed}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Trust Endorsements Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Verified Pet Parent Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No Sponsored or Paid Placements</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Bank-Grade Local &amp; Cloud Security</span>
          </div>
        </div>

      </div>
    </section>
  );
}
