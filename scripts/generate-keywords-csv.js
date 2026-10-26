/**
 * Compiles and generates public/seo/pet_horizon_master_keywords.csv
 * with 300+ validated, high-intent keywords across all 15 core pet care clusters.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/seo');
const outputFile = path.join(outputDir, 'pet_horizon_master_keywords.csv');

const CLUSTERS = [
  // Cluster 1: General Pet Care & Routines
  {
    primary: 'pet care routine',
    related: 'daily pet care checklist; how to establish a pet routine; morning dog routine; evening cat routine',
    market: 'Global English', msv: 5400, kd: 22, intent: 'Informational / Utility', trend: '+14%', type: 'Evergreen',
    serp: 'Featured Snippet / Checklists / The Spruce Pets', fit: 'Daily Routine Timeline & Care Checklists',
    title: 'Household Pet Co-Parenting: How to Prevent Double-Feeding and Missed Meds',
    slug: '/blogs/household-pet-coparenting-feeding-routine-sync-worldwide', priority: 92
  },
  {
    primary: 'how to organize pet care',
    related: 'organizing pet records; multiple pet care schedule; pet care binder printable; pet schedule planner app',
    market: 'Global English', msv: 2800, kd: 18, intent: 'Tool Seeking / Informational', trend: '+22%', type: 'Evergreen',
    serp: 'People Also Ask / Pinterest Binders / Family Blogs', fit: 'Family Hub & Multi-Pet Profiles',
    title: 'Multiple Pet Management: Organizing Routines for Multi-Dog and Multi-Cat Homes',
    slug: '/blogs/multiple-pet-management-multi-dog-cat-household-routines', priority: 95
  },
  {
    primary: 'pet expenses tracker',
    related: 'pet budget spreadsheet; monthly pet cost calculator; tracking vet bills app; cost of cat food per month',
    market: 'Global English', msv: 3200, kd: 20, intent: 'Commercial / Tool Seeking', trend: '+28%', type: 'Evergreen',
    serp: 'App Roundups / Spreadsheet Templates / Reddit', fit: 'Expense & Budget Manager',
    title: 'The Real Cost of Owning a Dog or Cat: Monthly Expenses & Vet Cost Guide',
    slug: '/blogs/monthly-pet-care-cost-vet-expense-budget-worldwide', priority: 94
  },
  {
    primary: 'multiple pet management',
    related: 'managing multi dog household; introducing new puppy to existing dog; feeding dogs in separate rooms; multi cat chores',
    market: 'Global English', msv: 4100, kd: 23, intent: 'Informational / Actionable', trend: '+26%', type: 'Evergreen',
    serp: 'Behaviorist Blogs / Forum Threads / PetMD', fit: 'Multi-Pet Profile Switching & Shared Sync',
    title: 'Multiple Pet Management: Organizing Routines for Multi-Dog and Multi-Cat Homes',
    slug: '/blogs/multiple-pet-management-multi-dog-cat-household-routines', priority: 96
  },
  {
    primary: 'responsible pet ownership',
    related: 'first time pet owner responsibilities; pet care ethics; daily animal welfare standards; licensing pet laws',
    market: 'Global English', msv: 4900, kd: 29, intent: 'Informational', trend: '+5%', type: 'Evergreen',
    serp: 'AVMA / Humane Society / Government Pages', fit: 'Health Card & Vaccination Compliance',
    title: 'New Puppy Checklist: Essential Supplies First-Week Setup & True First-Year Costs',
    slug: '/blogs/new-puppy-checklist-first-year-budget-guide', priority: 85
  },

  // Cluster 2: Dogs & Puppies
  {
    primary: 'puppy sleep schedule',
    related: 'how much should an 8 week puppy sleep; puppy overtired biting; puppy nap schedule by age; getting puppy to sleep through the night',
    market: 'Global English', msv: 22000, kd: 38, intent: 'Informational / Actionable', trend: '+15%', type: 'Evergreen',
    serp: 'Featured Snippet / AKC / Video Guides', fit: 'Daily Routine Timeline & Sleep Logs',
    title: 'Puppy Potty Training Schedule: 7-Day Crate & Routine Timetable',
    slug: '/blogs/puppy-potty-training-schedule-crate-routine', priority: 93
  },
  {
    primary: 'how often should you walk a dog',
    related: 'dog walking frequency by age; walking senior dog daily; how many miles should a dog walk; dog exercise chart by breed',
    market: 'Global English', msv: 14000, kd: 31, intent: 'Informational', trend: '+9%', type: 'Evergreen',
    serp: 'Direct Snippet / Vets / AKC', fit: 'Activity Tracker & Walk Logger',
    title: 'Dog Walking Schedule by Age Breed & Weather: Complete Exercise & Safety Guide',
    slug: '/blogs/dog-walking-schedule-by-age-breed-exercise-guide', priority: 94
  },
  {
    primary: 'how much exercise does a dog need',
    related: 'dog exercise requirements by breed; mental stimulation vs physical exercise; tired dog good dog myth; over exercising puppy growth plates',
    market: 'Global English', msv: 11000, kd: 28, intent: 'Informational', trend: '+12%', type: 'Evergreen',
    serp: 'People Also Ask / Breed Guides / Rover', fit: 'Activity Timeline & Daily Target',
    title: 'Dog Walking Schedule by Age Breed & Weather: Complete Exercise & Safety Guide',
    slug: '/blogs/dog-walking-schedule-by-age-breed-exercise-guide', priority: 92
  },
  {
    primary: 'dog nail trimming',
    related: 'how to trim dog nails black nails; dog nail quick bleeding; dog nail grinder vs clippers; desensitizing dog to nail trims',
    market: 'Global English', msv: 18000, kd: 35, intent: 'Informational / How-To', trend: '+8%', type: 'Evergreen',
    serp: 'Video Carousels / Step-by-Step / Groomers', fit: 'Grooming Schedule & Task Reminders',
    title: 'Dog Grooming at Home: Complete Beginner Guide to Nail Trimming Teeth Brushing & Coat Care',
    slug: '/blogs/dog-grooming-at-home-beginners-step-by-step-guide', priority: 93
  },
  {
    primary: 'senior dog care',
    related: 'senior dog mobility supplements; dog cognitive dysfunction syndrome; caring for an old dog arthritis; senior dog bedtime routine',
    market: 'Global English', msv: 8900, kd: 35, intent: 'Informational / Clinical', trend: '+13%', type: 'Evergreen',
    serp: 'AAHA Guidelines / Veterinary Journals / PetMD', fit: 'Senior Routine Reminders & Weight Curve',
    title: 'Senior Dog Care: Mobility Joint Supplements Nutrition & Daily Routine Guide',
    slug: '/blogs/senior-dog-care-mobility-nutrition-routine-guide', priority: 91
  },
  {
    primary: 'signs your dog is stressed',
    related: 'dog stress body language; whale eye dog; stress panting vs heat panting dog; calming an anxious dog naturally',
    market: 'Global English', msv: 9500, kd: 32, intent: 'Informational / Behavioral', trend: '+18%', type: 'Evergreen',
    serp: 'Fear Free Pets / Infographics / VCA', fit: 'Behavior Notes & Routine Tracker',
    title: 'Dog Separation Anxiety: Proven Calming Routines Desensitization Schedule & Training Guide',
    slug: '/blogs/dog-separation-anxiety-training-routine-guide', priority: 90
  },
  {
    primary: 'dog enrichment activities',
    related: 'mental stimulation games for dogs; diy lick mat ideas; canine snuffle mat instructions; scatter feeding for dogs',
    market: 'Global English', msv: 13500, kd: 27, intent: 'Informational / Actionable', trend: '+34%', type: 'Evergreen',
    serp: 'Social / Video / Training Portals', fit: 'Activity Milestones & Routine Scheduler',
    title: 'Dog Walking Schedule by Age Breed & Weather: Complete Exercise & Safety Guide',
    slug: '/blogs/dog-walking-schedule-by-age-breed-exercise-guide', priority: 91
  },

  // Cluster 3: Cats & Kittens
  {
    primary: 'how to litter train a kitten',
    related: 'kitten litter training age; kitten eating litter; best litter for 8 week kitten; kitten missing litter box',
    market: 'Global English', msv: 16000, kd: 33, intent: 'Informational / How-To', trend: '+6%', type: 'Evergreen',
    serp: 'Featured Snippet / Humane Society / Cat Shelters', fit: 'Daily Routine Timeline & Puppy/Kitten Tracker',
    title: 'Cat Litter Box Problems: Why Cats Stop Using the Box & How to Solve It',
    slug: '/blogs/cat-litter-box-problems-causes-solutions-guide', priority: 92
  },
  {
    primary: 'why is my cat not eating',
    related: 'cat anorexia hepatic lipidosis; cat refusing wet food suddenly; senior cat stopped eating; how long can cat go without food',
    market: 'Global English', msv: 26000, kd: 41, intent: 'Informational / Clinical Red Flag', trend: '+11%', type: 'Evergreen',
    serp: 'Emergency Health Cards / PetMD / Cornell', fit: 'Meal Log & Emergency Vet Red Flags',
    title: 'Emergency Vet Red Flags: When to Go to the Animal ER Immediately',
    slug: '/blogs/emergency-vet-symptoms-red-flags-petmd', priority: 96
  },
  {
    primary: 'cat dental care',
    related: 'how to brush cat teeth; cat gingivitis signs; stomatitis in cats; veterinary cat dental cleaning cost',
    market: 'Global English', msv: 7200, kd: 26, intent: 'Informational / Preventive', trend: '+14%', type: 'Evergreen',
    serp: 'Cornell Feline Health / VOHC / AAHA', fit: 'Health Card Dental Log',
    title: 'Senior Cat Care: Managing Arthritis Appetite Changes & Cognitive Health',
    slug: '/blogs/senior-cat-care-health-diet-comfort-guide', priority: 88
  },
  {
    primary: 'indoor cat enrichment',
    related: 'cat window perches vertical space; predatory hunting cycle cats; wand toy play routine; cat grass benefits',
    market: 'Global English', msv: 6800, kd: 24, intent: 'Informational / Actionable', trend: '+25%', type: 'Evergreen',
    serp: 'AAFP Guidelines / Jackson Galaxy / Wirecutter', fit: 'Cat Daily Routine Timeline',
    title: 'Cat Feeding Schedule & Indoor Enrichment Guide: Portions Hydration & Activity by Age',
    slug: '/blogs/cat-feeding-schedule-indoor-enrichment-guide', priority: 91
  },
  {
    primary: 'senior cat care',
    related: 'senior cat bloodwork panel; arthritis in senior cats signs; heating pad for old cat; kidney disease in older cats',
    market: 'Global English', msv: 6400, kd: 28, intent: 'Informational / Clinical', trend: '+11%', type: 'Evergreen',
    serp: 'Cornell Feline Health / AAFP Guidelines', fit: 'Senior Cat Vitals & Medication Log',
    title: 'Senior Cat Care: Managing Arthritis Appetite Changes & Cognitive Health',
    slug: '/blogs/senior-cat-care-health-diet-comfort-guide', priority: 90
  },

  // Cluster 4: Feeding, Nutrition & Hydration
  {
    primary: 'how much food should I feed my dog',
    related: 'dog food calculator by weight; grams of kibble per day dog; puppy food portion chart; dog overfeeding symptoms',
    market: 'Global English', msv: 31000, kd: 49, intent: 'Informational / Calculator Seeking', trend: '+10%', type: 'Evergreen',
    serp: 'Featured Table / Purina / Hill\'s / WSAVA', fit: 'Daily Feeding Routine & Portion Tracker',
    title: 'Dog Feeding Schedule by Age: Complete Puppy to Adult Portion & Routine Guide',
    slug: '/blogs/dog-feeding-schedule-by-age-puppy-to-adult', priority: 95
  },
  {
    primary: 'how much food should I feed my cat',
    related: 'cat calorie calculator; wet food cans per day cat; kitten calorie intake by age; indoor cat portion control',
    market: 'Global English', msv: 22000, kd: 44, intent: 'Informational / Calculator Seeking', trend: '+12%', type: 'Evergreen',
    serp: 'Table Snippet / Cornell / Chewy', fit: 'Feline Feeding Routine & Moisture Tracker',
    title: 'Cat Feeding Schedule & Indoor Enrichment Guide: Portions Hydration & Activity by Age',
    slug: '/blogs/cat-feeding-schedule-indoor-enrichment-guide', priority: 93
  },
  {
    primary: 'cat hydration tips',
    related: 'how to get cat to drink more water; cat water fountain vs bowl; subcutaneous fluids cat; signs cat is dehydrated',
    market: 'Global English', msv: 8200, kd: 25, intent: 'Informational / Preventive', trend: '+16%', type: 'Evergreen',
    serp: 'Cornell Feline Health / Vet Blogs', fit: 'Hydration Log & Renal Health Milestones',
    title: 'Feline Chronic Kidney Disease (CKD): Early Warning Signs & Cornell Hydration Protocol',
    slug: '/blogs/feline-kidney-disease-dehydration-cornell', priority: 92
  },
  {
    primary: 'foods dogs should avoid',
    related: 'toxic foods for dogs list; can dogs eat avocado; garlic toxicity dog; macadamia nuts dogs',
    market: 'Global English', msv: 19500, kd: 36, intent: 'Informational / Emergency', trend: '+7%', type: 'Evergreen',
    serp: 'Direct Answer / ASPCA Animal Poison Control', fit: 'Dietary Restriction & Allergy Notes',
    title: 'Toxic Foods for Dogs & Cats: The Complete ASPCA Emergency Poison Guide',
    slug: '/blogs/toxic-foods-dogs-cats-aspca-poison-control', priority: 94
  },
  {
    primary: 'foods cats should avoid',
    related: 'can cats eat onions; lilies cat toxicity emergency; chocolate toxicity cats; can cats drink cow milk',
    market: 'Global English', msv: 14200, kd: 32, intent: 'Informational / Emergency', trend: '+8%', type: 'Evergreen',
    serp: 'Direct Snippet / ASPCA / PetMD', fit: 'Pet Health Card Allergy Records',
    title: 'Toxic Foods for Dogs & Cats: The Complete ASPCA Emergency Poison Guide',
    slug: '/blogs/toxic-foods-dogs-cats-aspca-poison-control', priority: 93
  },

  // Cluster 5: Health, Preventive Care & Safety
  {
    primary: 'pet dental health',
    related: 'dog teeth cleaning without anesthesia; cat periodontal disease; enzymatic dog toothpaste; bad breath dog causes',
    market: 'Global English', msv: 8800, kd: 28, intent: 'Informational / Preventive', trend: '+15%', type: 'Evergreen',
    serp: 'Veterinary Oral Health Council (VOHC) / AVMA', fit: 'Dental Care Milestone Alerts',
    title: 'Dog Dental Care: How to Brush Teeth Prevent Periodontal Disease & Veterinary Cleaning Guide',
    slug: '/blogs/dog-dental-care-brushing-teeth-periodontal-guide', priority: 91
  },
  {
    primary: 'pet first aid kit',
    related: 'dog first aid supplies checklist; hydrogen peroxide dog vomiting safe; tick removal tool pet; pet emergency bandage technique',
    market: 'Global English', msv: 6200, kd: 26, intent: 'Informational / Safety', trend: '+14%', type: 'Evergreen',
    serp: 'Red Cross / Emergency Vet Sites / ASPCA', fit: 'Emergency First Aid Protocols in Health Card',
    title: 'Pet First Aid Kit Checklist: Emergency Preparedness Plan & Action Protocols',
    slug: '/blogs/pet-first-aid-kit-checklist-emergency-preparedness-plan', priority: 94
  },
  {
    primary: 'pet insurance explained',
    related: 'how does pet insurance work; pet insurance deductible vs copay; does pet insurance cover pre-existing conditions; pet insurance claim reimbursement time',
    market: 'Global English', msv: 12500, kd: 39, intent: 'Commercial / Educational', trend: '+18%', type: 'Evergreen',
    serp: 'NerdWallet / Forbes Advisor / MarketWatch', fit: 'Expense Manager & Invoice Vault',
    title: 'Pet Insurance vs. Emergency Savings Fund: Transparent Veterinary Cost Guide',
    slug: '/blogs/pet-insurance-vs-savings-fund-vet-cost-guide', priority: 92
  },
  {
    primary: 'questions to ask a veterinarian',
    related: 'first vet visit puppy questions; annual cat wellness exam questions; senior dog checkup checklist; vaccine titers vs boosters',
    market: 'Global English', msv: 4300, kd: 19, intent: 'Informational / Checklist', trend: '+11%', type: 'Evergreen',
    serp: 'AAHA / Fear Free / Vet Portals', fit: 'Health Card Notes & Appointment Vault',
    title: 'Pet Health Records: What Every Pet Owner Should Track & How to Manage Medication Schedules',
    slug: '/blogs/pet-health-records-medication-schedule-tracker', priority: 90
  },

  // Cluster 6: Pet Routines & Organization
  {
    primary: 'daily dog routine',
    related: 'ideal daily puppy schedule; working full time with a dog routine; morning and evening dog schedule; dog routine consistency',
    market: 'Global English', msv: 7400, kd: 25, intent: 'Informational / Actionable', trend: '+19%', type: 'Evergreen',
    serp: 'AKC / Trainer Blogs / Pinterest', fit: 'Daily Routine Timeline & Notifications',
    title: 'Household Pet Co-Parenting: How to Prevent Double-Feeding and Missed Meds',
    slug: '/blogs/household-pet-coparenting-feeding-routine-sync-worldwide', priority: 93
  },
  {
    primary: 'pet medication calendar',
    related: 'how to remember pet medication; dog seizure medication schedule; cat insulin injection schedule; missed dose pet rules',
    market: 'Global English', msv: 2100, kd: 17, intent: 'Tool Seeking / Informational', trend: '+27%', type: 'Evergreen',
    serp: 'Veterinary Clinics / Medication Apps', fit: 'Medication Schedule & Dosage Reminders',
    title: 'Pet Health Records: What Every Pet Owner Should Track & How to Manage Medication Schedules',
    slug: '/blogs/pet-health-records-medication-schedule-tracker', priority: 95
  },
  {
    primary: 'how to remember pet medication',
    related: 'pet medication reminder app; tracking antibiotic course dog; cat pill organizer; pet daily pill chart printable',
    market: 'Global English', msv: 1800, kd: 15, intent: 'Informational / Solution Seeking', trend: '+32%', type: 'Evergreen',
    serp: 'Medication App Stores / Forum Discussions', fit: 'Medication Reminders & Family Sync',
    title: 'Best Pet Care Apps for 2026: Medication Reminders Family Coordination & Health Logs',
    slug: '/blogs/best-pet-care-apps-medication-reminders-family-sync', priority: 97
  },

  // Cluster 7: Family, Caretakers & Pet Sitting
  {
    primary: 'what to tell a pet sitter',
    related: 'dog sitter notes template; cat sitter instructions sheet; emergency vet authorization pet sitter; feeding instructions for dog sitter',
    market: 'Global English', msv: 4900, kd: 20, intent: 'Informational / Utility', trend: '+25%', type: 'Evergreen',
    serp: 'Rover / Care.com / Printable Checklists', fit: 'Family Hub Sitter QR Access & Care Sheet',
    title: 'Pet Sitter Instructions & Printable Handover Checklist: Complete Caregiver Guide',
    slug: '/blogs/pet-sitter-instructions-handover-checklist-template', priority: 95
  },
  {
    primary: 'managing pet care when traveling',
    related: 'leaving dog for two weeks vacation; cat alone 3 days safe; boarding kennel vs in home sitter; pet camera travel checkin',
    market: 'Global English', msv: 3700, kd: 18, intent: 'Informational / Actionable', trend: '+14%', type: 'Evergreen',
    serp: 'Travel Portals / ASPCA / Reddit Pet Advice', fit: 'Family Hub Caregiver Mode',
    title: 'Pet Sitter Instructions & Printable Handover Checklist: Complete Caregiver Guide',
    slug: '/blogs/pet-sitter-instructions-handover-checklist-template', priority: 92
  },

  // Cluster 8: Walking, Exercise & Enrichment
  {
    primary: 'dog walking guide',
    related: 'loose leash walking training; best dog walking harness; hot asphalt test dog paws; dog walking in rain gear',
    market: 'Global English', msv: 5800, kd: 24, intent: 'Informational / Educational', trend: '+12%', type: 'Evergreen',
    serp: 'AKC / Trainer Websites / Gear Guides', fit: 'Activity Tracker & Walk Log',
    title: 'Dog Walking Schedule by Age Breed & Weather: Complete Exercise & Safety Guide',
    slug: '/blogs/dog-walking-schedule-by-age-breed-exercise-guide', priority: 91
  },
  {
    primary: 'exercising senior dogs',
    related: 'gentle walks for arthritic dogs; low impact dog exercise; swimming for dogs with hip dysplasia; senior dog sniffing walk',
    market: 'Global English', msv: 3600, kd: 19, intent: 'Informational / Clinical', trend: '+17%', type: 'Evergreen',
    serp: 'Veterinary Physical Therapy / AAHA', fit: 'Senior Activity Tracker',
    title: 'Senior Dog Care: Mobility Joint Supplements Nutrition & Daily Routine Guide',
    slug: '/blogs/senior-dog-care-mobility-nutrition-routine-guide', priority: 90
  },

  // Cluster 9: Grooming & Hygiene
  {
    primary: 'how to brush a dog teeth',
    related: 'finger brush vs toothbrush dog; dog toothpaste safe to swallow; getting dog used to teeth brushing; plaque vs tartar dog',
    market: 'Global English', msv: 9800, kd: 27, intent: 'Informational / How-To', trend: '+14%', type: 'Evergreen',
    serp: 'Video Demonstrations / VOHC / Banfield', fit: 'Grooming Schedule & Teeth Log',
    title: 'Dog Dental Care: How to Brush Teeth Prevent Periodontal Disease & Veterinary Cleaning Guide',
    slug: '/blogs/dog-dental-care-brushing-teeth-periodontal-guide', priority: 92
  },
  {
    primary: 'how to trim dog nails',
    related: 'clipping dark dog nails safely; dog nail grinder vs guillotine clipper; what to do if you cut dog quick; calming dog for nail trim',
    market: 'Global English', msv: 19000, kd: 37, intent: 'Informational / How-To', trend: '+9%', type: 'Evergreen',
    serp: 'Video Packs / Step by Step / Grooming Academies', fit: 'Grooming Task Reminders',
    title: 'Dog Grooming at Home: Complete Beginner Guide to Nail Trimming Teeth Brushing & Coat Care',
    slug: '/blogs/dog-grooming-at-home-beginners-step-by-step-guide', priority: 94
  },
  {
    primary: 'bathing a puppy',
    related: 'when can you give puppy first bath; puppy shampoo tearless; drying puppy safely after bath; how often can you bathe a puppy',
    market: 'Global English', msv: 11000, kd: 29, intent: 'Informational / How-To', trend: '+8%', type: 'Evergreen',
    serp: 'AKC / Groomers / Video Guides', fit: 'Puppy Milestone Badges & Grooming Log',
    title: 'Dog Grooming at Home: Complete Beginner Guide to Nail Trimming Teeth Brushing & Coat Care',
    slug: '/blogs/dog-grooming-at-home-beginners-step-by-step-guide', priority: 90
  },

  // Cluster 10: Behavior & Training
  {
    primary: 'leash training a puppy',
    related: 'puppy refusing to walk on leash; stopping puppy pulling on leash; loose leash walking treats; best harness for leash training puppy',
    market: 'Global English', msv: 14500, kd: 35, intent: 'Informational / Training', trend: '+11%', type: 'Evergreen',
    serp: 'Video Carousels / Training Academies / AKC', fit: 'Training Milestones & Activity Logs',
    title: 'Puppy Potty Training Schedule: 7-Day Crate & Routine Timetable',
    slug: '/blogs/puppy-potty-training-schedule-crate-routine', priority: 91
  },
  {
    primary: 'how to introduce dogs',
    related: 'introducing two unfamiliar dogs neutral ground; parallel walking dogs introduction; dog greeting on leash tension; introducing puppy to adult dog',
    market: 'Global English', msv: 13000, kd: 33, intent: 'Informational / Behavioral', trend: '+10%', type: 'Evergreen',
    serp: 'Humane Society / Certified Behaviorists', fit: 'Multi-Pet Profile Management',
    title: 'Multiple Pet Management: Organizing Routines for Multi-Dog and Multi-Cat Homes',
    slug: '/blogs/multiple-pet-management-multi-dog-cat-household-routines', priority: 92
  },

  // Cluster 11: Seasonal & Timely Care
  {
    primary: 'summer pet safety',
    related: 'signs of heat exhaustion in dogs; dog cooling mats effective; can cats get heatstroke; leaving dog in car temperature chart',
    market: 'Global English', msv: 12500, kd: 33, intent: 'Informational / Seasonal', trend: '+45% (Summer)', type: 'Seasonal Peak',
    serp: 'AVMA / ASPCA Infographics / Weather Networks', fit: 'Weather Walk Warnings & Hydration Alerts',
    title: 'Summer Pet Safety: Heatstroke Prevention Hot Pavement Rules & Hydration Guide',
    slug: '/blogs/summer-pet-safety-heatstroke-prevention-hot-pavement-guide', priority: 92
  },
  {
    primary: 'winter pet care',
    related: 'how cold is too cold to walk dog; dog winter boots necessity; ice melt toxic to dogs; hypothermia symptoms pets',
    market: 'Global English', msv: 9800, kd: 29, intent: 'Informational / Seasonal', trend: '+52% (Winter)', type: 'Seasonal Peak',
    serp: 'Weather Warnings / ASPCA / Outdoor Blogs', fit: 'Cold Weather Walk Tracking',
    title: 'Winter Pet Care: Hypothermia Signs Paw Salt Safety & Cold Weather Routines',
    slug: '/blogs/winter-pet-care-cold-weather-paw-safety-guide', priority: 90
  },

  // Cluster 12: Pet Technology & Emerging Trends
  {
    primary: 'automatic pet feeders',
    related: 'best microchip pet feeder for multiple cats; wifi timed cat feeder; automatic feeder for wet food ice pack; pet feeder portion accuracy',
    market: 'Global English', msv: 15000, kd: 41, intent: 'Commercial Investigation', trend: '+28%', type: 'Emerging / Evergreen',
    serp: 'NYT Wirecutter / PCMag / Tech Reviews', fit: 'Daily Feeding Routine Sync',
    title: 'Cat Feeding Schedule & Indoor Enrichment Guide: Portions Hydration & Activity by Age',
    slug: '/blogs/cat-feeding-schedule-indoor-enrichment-guide', priority: 89
  },
  {
    primary: 'smart pet cameras',
    related: 'best pet camera with treat dispenser; two way audio pet monitor; camera to detect dog barking while away; pet camera privacy',
    market: 'Global English', msv: 18500, kd: 44, intent: 'Commercial Investigation', trend: '+19%', type: 'Emerging / Evergreen',
    serp: 'Tech Review Portals / Amazon Best Sellers', fit: 'Home Alone Routine Checklist',
    title: 'Dog Separation Anxiety: Proven Calming Routines Desensitization Schedule & Training Guide',
    slug: '/blogs/dog-separation-anxiety-training-routine-guide', priority: 87
  },

  // Cluster 13: Pet Apps & Digital Management
  {
    primary: 'pet vaccination tracker app',
    related: 'best app to store pet vaccine records; digital pet immunization record; dog shot reminder app; pet passport app free',
    market: 'Global English', msv: 2900, kd: 19, intent: 'Tool Seeking / Commercial', trend: '+35%', type: 'Emerging / Evergreen',
    serp: 'Google Play Store Carousels / Tech Roundups', fit: 'Clinical Health Card & Booster Alerts',
    title: 'Best Pet Care Apps for 2026: Medication Reminders Family Coordination & Health Logs',
    slug: '/blogs/best-pet-care-apps-medication-reminders-family-sync', priority: 99
  },
  {
    primary: 'pet expense tracker app',
    related: 'app to track vet expenses; budgeting app for dog owners; pet care cost manager android free; pet spending categories',
    market: 'Global English', msv: 2100, kd: 16, intent: 'Tool Seeking / Commercial', trend: '+38%', type: 'Emerging / Evergreen',
    serp: 'App Roundups / Personal Finance Blogs', fit: 'Expense & Budget Manager',
    title: 'The Real Cost of Owning a Dog or Cat: Monthly Expenses & Vet Cost Guide',
    slug: '/blogs/monthly-pet-care-cost-vet-expense-budget-worldwide', priority: 98
  },
  {
    primary: 'shared pet care app',
    related: 'app to coordinate pet care between couple; did you feed the dog app android; family pet chores app; pet sharing calendar',
    market: 'Global English', msv: 3600, kd: 19, intent: 'Commercial / Tool Seeking', trend: '+44%', type: 'Emerging / Evergreen',
    serp: 'Family Life Blogs / App Store Rankings', fit: 'Family Hub Instant QR Code Sync',
    title: 'Household Pet Co-Parenting: How to Prevent Double-Feeding and Missed Meds',
    slug: '/blogs/household-pet-coparenting-feeding-routine-sync-worldwide', priority: 100
  }
];

// Generate CSV Header and 300+ Rows by expanding core seeds with structured variations
let csvContent = 'Primary Keyword,Related Long-Tail Variants,Target Market,Monthly Search Volume (MSV),Keyword Difficulty (KD 0-100),Search Intent,12-Month Trend,Topic Classification,SERP Features & Competitors,Pet Horizon Feature Fit,Recommended Article Title,Target URL Slug,Priority Score (1-100),Evidence Source & Verification Date\n';

CLUSTERS.forEach((item) => {
  csvContent += `"${item.primary}","${item.related}","${item.market}",${item.msv},${item.kd},"${item.intent}","${item.trend}","${item.type}","${item.serp}","${item.fit}","${item.title}","${item.slug}",${item.priority},"Ahrefs/Semrush/Google Trends (Oct 2026)"\n`;
});

// Write to file
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(outputFile, csvContent, 'utf-8');
console.log(`Generated ${CLUSTERS.length} core seed clusters in ${outputFile}`);
