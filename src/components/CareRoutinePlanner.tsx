import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  Circle,
  Bell,
  Heart,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Pill,
  Utensils,
  Footprints,
  Moon
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PetRoutineTemplate {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  defaultSchedule: {
    time: string;
    period: 'Morning' | 'Midday' | 'Evening' | 'Night';
    title: string;
    category: 'Feeding' | 'Walk' | 'Medication' | 'Care' | 'Rest';
    icon: typeof Utensils;
    notes: string;
  }[];
}

const PET_TEMPLATES: PetRoutineTemplate[] = [
  {
    id: 'dog',
    name: 'Active Dog',
    emoji: '🐕',
    tagline: 'Balanced routine for daily exercise, nutrition, and joint health',
    defaultSchedule: [
      {
        time: '07:30 AM',
        period: 'Morning',
        title: 'Morning Walk & Bathroom Break',
        category: 'Walk',
        icon: Footprints,
        notes: '20–30 min brisk walk around the neighborhood'
      },
      {
        time: '08:15 AM',
        period: 'Morning',
        title: 'Nutritious Breakfast & Fresh Water',
        category: 'Feeding',
        icon: Utensils,
        notes: '1.5 cups kibble + fresh cool filtered water'
      },
      {
        time: '01:30 PM',
        period: 'Midday',
        title: 'Hydration Refill & Quick Stretch',
        category: 'Care',
        icon: Heart,
        notes: 'Garden play & interactive chew toy'
      },
      {
        time: '06:00 PM',
        period: 'Evening',
        title: 'Evening Dinner & Joint Supplement',
        category: 'Medication',
        icon: Pill,
        notes: 'Evening meal + Glucosamine joint chew'
      },
      {
        time: '09:30 PM',
        period: 'Night',
        title: 'Final Bedtime Turn-Out',
        category: 'Rest',
        icon: Moon,
        notes: 'Quick relief & cozy kennel settle down'
      }
    ]
  },
  {
    id: 'cat',
    name: 'Curious Cat',
    emoji: '🐈',
    tagline: 'Stress-free routine for hydration, indoor enrichment, and grooming',
    defaultSchedule: [
      {
        time: '08:00 AM',
        period: 'Morning',
        title: 'Wet Food Serving & Fountain Clean',
        category: 'Feeding',
        icon: Utensils,
        notes: '1 pouch wet food + check water fountain level'
      },
      {
        time: '11:00 AM',
        period: 'Midday',
        title: 'Interactive Feather Wand Play',
        category: 'Care',
        icon: Heart,
        notes: '15 minutes laser / feather chase session'
      },
      {
        time: '04:00 PM',
        period: 'Midday',
        title: 'Coat Brushing & Litter Box Scoop',
        category: 'Care',
        icon: Sparkles,
        notes: 'Gentle deshedding + fresh litter refresh'
      },
      {
        time: '07:30 PM',
        period: 'Evening',
        title: 'Evening Dry Food & Dental Treat',
        category: 'Feeding',
        icon: Utensils,
        notes: 'Measured portion in puzzle feeder'
      },
      {
        time: '10:00 PM',
        period: 'Night',
        title: 'Nighttime Calm & Snuggle Routine',
        category: 'Rest',
        icon: Moon,
        notes: 'Calming pheromone spray & warm perch'
      }
    ]
  },
  {
    id: 'rabbit',
    name: 'Happy Bunny',
    emoji: '🐇',
    tagline: 'High-fiber diet schedule, free-roam exercise, and quiet bonding',
    defaultSchedule: [
      {
        time: '07:00 AM',
        period: 'Morning',
        title: 'Fresh Timothy Hay & Water Bowl',
        category: 'Feeding',
        icon: Utensils,
        notes: 'Unlimited hay pile + bowl clean & fill'
      },
      {
        time: '09:00 AM',
        period: 'Morning',
        title: 'Morning Free-Roam Exercise',
        category: 'Walk',
        icon: Footprints,
        notes: 'Living room zoomies & cardboard tunnel explore'
      },
      {
        time: '06:00 PM',
        period: 'Evening',
        title: 'Fresh Leafy Greens & Pellet Portion',
        category: 'Feeding',
        icon: Utensils,
        notes: 'Romaine lettuce, cilantro & 2 tbsp pellets'
      },
      {
        time: '09:30 PM',
        period: 'Night',
        title: 'Litter Check & Night Habitat Settle',
        category: 'Rest',
        icon: Moon,
        notes: 'Spot clean hay bedding & lock enclosure secure'
      }
    ]
  },
  {
    id: 'bird',
    name: 'Feathered Friend',
    emoji: '🦜',
    tagline: 'Stimulating routine for socialization, foraging, and cage hygiene',
    defaultSchedule: [
      {
        time: '07:30 AM',
        period: 'Morning',
        title: 'Morning Cover Unveil & Seed/Chop',
        category: 'Feeding',
        icon: Utensils,
        notes: 'Uncover cage, fresh chop mix + clean bath bowl'
      },
      {
        time: '12:00 PM',
        period: 'Midday',
        title: 'Out-of-Cage Play & Training',
        category: 'Care',
        icon: Sparkles,
        notes: 'Flight practice & step-up reward training'
      },
      {
        time: '05:30 PM',
        period: 'Evening',
        title: 'Foraging Toy Reload & Pellets',
        category: 'Feeding',
        icon: Heart,
        notes: 'Hide treats inside foraging puzzles'
      },
      {
        time: '08:00 PM',
        period: 'Night',
        title: 'Dark Cover & Quiet Night Rest',
        category: 'Rest',
        icon: Moon,
        notes: 'Cover cage for undisturbed 10-hour rest'
      }
    ]
  }
];

export default function CareRoutinePlanner() {
  const [selectedPet, setSelectedPet] = useState<string>('dog');
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const currentTemplate = PET_TEMPLATES.find((p) => p.id === selectedPet) || PET_TEMPLATES[0];

  const toggleTask = (taskIndex: number) => {
    const key = `${selectedPet}-${taskIndex}`;
    const nextState = !completedTasks[key];
    setCompletedTasks((prev) => ({ ...prev, [key]: nextState }));

    if (nextState) {
      confetti({
        particleCount: 28,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#059669', '#10B981', '#34D399', '#6EE7B7']
      });
    }
  };

  const completedCount = currentTemplate.defaultSchedule.filter(
    (_, idx) => completedTasks[`${selectedPet}-${idx}`]
  ).length;
  const progressPercent = Math.round(
    (completedCount / currentTemplate.defaultSchedule.length) * 100
  );

  return (
    <section id="planner" className="py-20 sm:py-28 bg-[#F8FAF9] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Care Routine Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Preview Your Pet&apos;s Ideal Daily Routine
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3.5 font-normal leading-relaxed">
            Select your pet type below to view a veterinarian-inspired daily schedule. Tap any task to simulate completing it, just like inside the Pet Horizon Android app!
          </p>
        </div>

        {/* Pet Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {PET_TEMPLATES.map((pet) => {
            const isSelected = selectedPet === pet.id;
            return (
              <button
                key={pet.id}
                onClick={() => setSelectedPet(pet.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-emerald-50/70 border border-slate-200/90'
                }`}
              >
                <span className="text-lg">{pet.emoji}</span>
                <span>{pet.name}</span>
              </button>
            );
          })}
        </div>

        {/* Planner Workspace Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs max-w-4xl mx-auto">
          
          {/* Header of Workspace */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{currentTemplate.emoji}</span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {currentTemplate.name} Routine
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                {currentTemplate.tagline}
              </p>
            </div>

            {/* Progress Badge */}
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-2xl">
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Simulated Completion
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {completedCount} of {currentTemplate.defaultSchedule.length} Tasks ({progressPercent}%)
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-black text-xs">
                {progressPercent}%
              </div>
            </div>
          </div>

          {/* Schedule Task List */}
          <div className="py-6 space-y-3.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPet}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                {currentTemplate.defaultSchedule.map((item, index) => {
                  const Icon = item.icon;
                  const isDone = Boolean(completedTasks[`${selectedPet}-${index}`]);

                  return (
                    <div
                      key={index}
                      onClick={() => toggleTask(index)}
                      className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start sm:items-center justify-between gap-4 cursor-pointer ${
                        isDone
                          ? 'bg-emerald-50/50 border-emerald-200 shadow-2xs'
                          : 'bg-slate-50/70 hover:bg-slate-100/70 border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start sm:items-center gap-3.5 truncate">
                        {/* Status Checkbox */}
                        <button
                          type="button"
                          className="mt-0.5 sm:mt-0 text-emerald-600 shrink-0 transition-transform group-hover:scale-110"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300 group-hover:text-emerald-500" />
                          )}
                        </button>

                        {/* Category Icon */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                            isDone
                              ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                              : 'bg-white text-slate-600 border-slate-200'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Task Details */}
                        <div className="text-left truncate">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm sm:text-base font-bold tracking-tight truncate ${
                                isDone
                                  ? 'text-emerald-900 line-through decoration-emerald-500/60'
                                  : 'text-slate-900'
                              }`}
                            >
                              {item.title}
                            </span>
                            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500 shrink-0">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 truncate mt-0.5">
                            {item.notes}
                          </p>
                        </div>
                      </div>

                      {/* Time Pill */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs shrink-0 shadow-2xs">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Callout & CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium text-center sm:text-left">
              <Bell className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                In the real Android app, Pet Horizon rings before each task with customizable tones &amp; family push sync.
              </span>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.PetHorizon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <span>Sync to Your Phone</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
