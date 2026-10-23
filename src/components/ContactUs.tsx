import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Support',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>We Are Here to Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Get in Touch With Our Team
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal">
            Have questions about Pet Horizon features, need help setting up Family Sharing, or want to suggest an improvement? We would love to hear from you.
          </p>
        </div>

        {/* Split Contact Container */}
        <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-[2.5rem] border border-slate-200 bg-slate-50 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Info Panel (5 Cols) */}
            <div className="md:col-span-5 bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden">
              <div className="flex flex-col gap-6 relative z-10">
                <span className="text-[10px] text-emerald-300 font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-emerald-700 bg-emerald-900/60 w-fit">
                  Direct Support
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                  Built by Pet Lovers, for Pet Lovers.
                </h3>
                
                <p className="text-emerald-100/90 text-sm leading-relaxed font-normal">
                  Our developer and support team are dedicated to making Pet Horizon the most reliable companion tool on your phone.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Email Us</p>
                      <p className="text-sm font-bold text-white">support@pethorizon.app</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Feedback &amp; Ideas</p>
                      <p className="text-sm font-bold text-white">feedback@pethorizon.app</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 text-xs text-emerald-300/80 font-medium relative z-10">
                <span>Typically responds within 24 hours</span>
              </div>
            </div>

            {/* Right Interactive Form (7 Cols) */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center text-left bg-white">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Send a Message</h4>
                      <p className="text-xs text-slate-500 mt-1">Leave your details and we will reply promptly.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ali Raza"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
                      >
                        <option value="Support">General Support</option>
                        <option value="Family Hub">Family Hub &amp; QR Help</option>
                        <option value="Feature Request">Feature Request</option>
                        <option value="Bug Report">Report a Bug</option>
                        <option value="Billing">Premium Billing Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you need help with or share your thoughts..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all text-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900">Thank You, {formData.name}!</h4>
                    <p className="text-sm text-slate-600 max-w-md">
                      Your message has been received. Our support team will get back to you at <span className="font-bold text-slate-800">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: '', email: '', topic: 'Support', message: '' });
                      }}
                      className="mt-2 text-xs font-bold text-emerald-700 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
