import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    agency: '',
    monthlyLeads: '50-200 leads',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setIsSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-14 py-16 space-y-24">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-pixel text-xs uppercase tracking-widest text-white/50">
          CONNECT // 05
        </span>
        <h1 className="text-3xl sm:text-5xl uppercase font-light tracking-wide text-white leading-tight">
          Contact & Pilot Booking
        </h1>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
          We are accepting 3 pilot real estate agencies. Fixed scope, agreed price before work begins, and direct communication with founder Ammara.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/20 pt-16">
        {/* Left Column: Direct Links & TODO Placeholders */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-white/20 p-6 sm:p-8 bg-[#0B0B0B] space-y-6">
            <div className="space-y-1">
              <span className="font-pixel text-xs uppercase text-white/50">DIRECT CHANNELS</span>
              <h2 className="text-xl uppercase font-light tracking-wide text-white">
                Direct Communication
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              {/* WhatsApp */}
              <a
                href="https://wa.me/TODO"
                target="_blank"
                rel="noreferrer"
                className="block p-4 border border-white/15 bg-black hover:border-white/40 transition-colors"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold uppercase tracking-wider text-white">WhatsApp</span>
                  <span className="font-pixel text-white/50">FASTEST</span>
                </div>
                <div className="font-mono text-white/70">Number: TODO</div>
                <div className="text-white/40 mt-1">Direct message with Ammara</div>
              </a>

              {/* Email */}
              <a
                href="mailto:TODO"
                className="block p-4 border border-white/15 bg-black hover:border-white/40 transition-colors"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold uppercase tracking-wider text-white">Official Email</span>
                  <span className="font-pixel text-white/50">4-HR REPLY</span>
                </div>
                <div className="font-mono text-white/70">Email: TODO</div>
                <div className="text-white/40 mt-1">Written scope and inquiries</div>
              </a>

              {/* Booking link */}
              <div className="p-4 border border-white/15 bg-black">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold uppercase tracking-wider text-white">15-Min Discovery Call</span>
                  <span className="font-pixel text-white/50">CALENDAR</span>
                </div>
                <div className="font-mono text-white/70">Booking link: TODO</div>
                <div className="text-white/40 mt-1">Schedule video or phone consult</div>
              </div>

              {/* LinkedIn */}
              <div className="p-4 border border-white/15 bg-black">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold uppercase tracking-wider text-white">LinkedIn</span>
                  <span className="font-pixel text-white/50">PROFILE</span>
                </div>
                <div className="font-mono text-white/70">Ammara Arshad (Software Engineer)</div>
              </div>
            </div>
          </div>

          <div className="border border-white/15 p-5 bg-[#0B0B0B] text-xs text-white/70 space-y-2">
            <span className="font-pixel uppercase text-white/50 block">PILOT GUARANTEE</span>
            <p className="leading-relaxed">
              We cap active pilot onboarding at 3 partners to maintain personal oversight and daily prompt optimization.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="border border-white/20 p-8 sm:p-10 bg-[#0B0B0B] space-y-6">
            <div className="space-y-1">
              <span className="font-pixel text-xs uppercase text-white/50">INQUIRY FORM</span>
              <h2 className="text-2xl uppercase font-light tracking-wide text-white">
                Apply For A Pilot Spot
              </h2>
            </div>

            {isSent ? (
              <div className="p-6 border border-white/30 bg-black space-y-3">
                <div className="font-pixel text-sm uppercase text-white tracking-widest">
                  INQUIRY RECEIVED
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Thank you, <strong className="text-white">{formState.name}</strong>.
                  Your message has been received. Ammara will follow up at <strong className="text-white">{formState.email}</strong> within 4 business hours with pilot onboarding details.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="font-pixel text-xs text-red-500 hover:text-red-400 uppercase pt-2 cursor-pointer"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-pixel uppercase text-white/60 block">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. David Thompson"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-black border border-white/20 px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-pixel uppercase text-white/60 block">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. david@primeproperties.co.uk"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-black border border-white/20 px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="agency" className="font-pixel uppercase text-white/60 block">
                      Agency / Portal Name
                    </label>
                    <input
                      id="agency"
                      type="text"
                      placeholder="e.g. Prime Properties London"
                      value={formState.agency}
                      onChange={(e) => setFormState({ ...formState, agency: e.target.value })}
                      className="w-full bg-black border border-white/20 px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="leads" className="font-pixel uppercase text-white/60 block">
                      Monthly Inbound Leads
                    </label>
                    <select
                      id="leads"
                      value={formState.monthlyLeads}
                      onChange={(e) => setFormState({ ...formState, monthlyLeads: e.target.value })}
                      className="w-full bg-black border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white/60 text-xs"
                    >
                      <option value="Under 50 leads">Under 50 leads / month</option>
                      <option value="50-200 leads">50 – 200 leads / month</option>
                      <option value="200-500 leads">200 – 500 leads / month</option>
                      <option value="500+ leads">500+ leads / month</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-pixel uppercase text-white/60 block">
                    Agency Context / Current CRM
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us what CRM you currently use and whether you receive after-hours WhatsApp leads..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-black border border-white/20 p-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/60 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-red-500 hover:bg-red-400 text-white font-semibold uppercase tracking-widest text-xs transition-colors cursor-pointer"
                >
                  Submit Pilot Inquiry
                </button>

                <p className="font-pixel text-[11px] text-white/40 text-center">
                  Direct review by Ammara Arshad. No sales spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
