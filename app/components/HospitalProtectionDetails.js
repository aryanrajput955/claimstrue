"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Zap, 
  Clock, 
  TrendingUp, 
  Search, 
  LayoutGrid, 
  Globe, 
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Database,
  BarChart3,
  Stethoscope,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const HospitalProtectionDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  const plans = [
    {
      name: "Starter Plan",
      price: "₹1,499",
      period: "/month",
      target: "Small Clinics — Up to 10 Patients",
      desc: "Lays the foundational infrastructure for organised, compliant claim documentation.",
      audience: ["Small clinics", "Emerging facilities", "Single-specialty practices", "Diagnostic centers"],
      features: [
        { t: "Claim Tracking", d: "Systematic digital organisation across the claim lifecycle." },
        { t: "Compliance Templates", d: "Pre-built, insurer-aligned checklists ensuring 100% data hygiene." },
        { t: "Policy Review", d: "Each file reviewed against specific insurance policy terms." },
        { t: "Proactive Corrections", d: "Identification and fixing of errors prior to submission." }
      ],
      extraLabel: "Add. Patient: ₹169/patient beyond 10 base limit.",
      color: "bg-blue-600"
    },
    {
      name: "Enterprise Plan",
      price: "₹3,999",
      period: "/month",
      target: "Growing Hospitals — Up to 25 Patients",
      desc: "Ideal for hospitals seeking to maximise efficiency and expand network partnerships.",
      audience: ["Growing hospitals", "Multi-specialty facilities", "Hospitals seeking empanelment", "Digital-first facilities"],
      features: [
        { t: "Complete File Management", d: "Centralised repo for updates and audit-ready management." },
        { t: "Patient Portal", d: "Digital patient framework for secure document uploads." },
        { t: "Technical Support", d: "Dedicated assistance for patients and clinical staff." },
        { t: "Free Empanelment Support", d: "Liaison support to join major insurance networks." }
      ],
      extraLabel: "Add. Patient: ₹169/patient beyond 25 base limit.",
      color: "bg-[#27A395]"
    }
  ];

  const benefits = [
    { 
      title: "Reduced Rejection Rates", 
      icon: <ShieldAlert className="w-8 h-8" />,
      desc: "Documented reduction in rejections by 40–60%. Pre-submission reviews ensure files meet insurer standards before they leave your desk."
    },
    { 
      title: "Improved Compliance", 
      icon: <Search className="w-8 h-8" />,
      desc: "Standardised checklists eliminate inconsistencies. Audit-ready record management supports regulatory and quality reviews effortlessly."
    },
    { 
      title: "Operational Efficiency", 
      icon: <Zap className="w-8 h-8" />,
      desc: "Centralised file management reduces administrative time. Digital portals eliminate paper handling and courier delays."
    },
    { 
      title: "Faster Reimbursements", 
      icon: <Clock className="w-8 h-8" />,
      desc: "Average processing time reduced by 30–40%. Compliant files accelerate insurer processing and improve your cash flow cycles."
    }
  ];

  const onboardingSteps = [
    { title: "Setup & Integration", week: "Week 1-2", items: ["Credentials Provision", "System Configuration", "HMS Integration", "Role Assignment"] },
    { title: "Training", week: "Week 2-3", items: ["Staff Training Sessions", "Workflow Setup", "Template Customisation", "Practice Sessions"] },
    { title: "Go-Live", week: "Week 4+", items: ["Live Claim Processing", "Dedicated Support", "Regular Check-ins", "Optimization"] }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 
          1. PROFESSIONAL HERO 
      */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hospital-hero.png" 
            alt="Hospital Hallway" 
            className="w-full h-full object-cover brightness-[0.35] lg:brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3347] via-[#1e3347]/80 lg:from-white lg:via-white/70 to-transparent z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#27A395]/10 border border-[#27A395]/20 mb-8"
            >
              <Building2 className="w-4 h-4 text-[#27A395]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#27A395]">Provider Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.05] text-white lg:text-[#1e3347] tracking-tight"
            >
              Maximize Your  Hospital <br />
              <span className="text-[#27A395]">Revenue With</span><br/>Zero Error Claim Management
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-white/80 lg:text-slate-500 mb-12 leading-relaxed font-medium max-w-xl"
            >
              Transform your claim documentation from a bottleneck into a competitive advantage. 40–60% reduction in rejection rates guaranteed.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full px-12 py-5 bg-[#1e3347] text-white rounded-2xl font-black text-lg transition-all hover:bg-[#27A395] shadow-xl shadow-[#1e3347]/20 flex items-center justify-center gap-3">
                  Empanel Your Hospital
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
          2. IMPACT STATS 
      */}
      <section className="py-20 bg-[#1e3347] text-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Rejection Reduction", val: "60%", icon: <TrendingUp className="w-5 h-5" /> },
                { label: "Faster Settlements", val: "40%", icon: <Clock className="w-5 h-5" /> },
                { label: "Patient Satisfaction", val: "95%", icon: <Users className="w-5 h-5" /> },
                { label: "Network Growth", val: "2x", icon: <Globe className="w-5 h-5" /> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start p-6 rounded-3xl bg-white/5 border border-white/10">
                   <div className="text-[#27A395] mb-4">{stat.icon}</div>
                   <div className="text-4xl font-black mb-1">{stat.val}</div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 
          3. PLAN SELECTION (Bento Grid)
      */}
      <section className="py-32 bg-[#fcfdfe]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3347] mb-6 tracking-tight">Enterprise-Grade Plans</h2>
            <p className="text-slate-500 font-medium">Scalable solutions for clinics and multi-specialty hospitals.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
             {plans.map((plan, i) => (
               <div key={i} className="relative group bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col h-full">
                  <div className={`absolute top-0 right-10 -translate-y-1/2 px-6 py-2 rounded-full ${plan.color} text-white text-[10px] font-black tracking-widest uppercase`}>
                    {plan.target}
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="text-4xl font-black text-[#1e3347] mb-4">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-[#1e3347]">{plan.price}</span>
                      <span className="text-slate-400 font-bold">{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-500 font-medium mb-10 leading-relaxed">{plan.desc}</p>

                  <div className="grid grid-cols-1 gap-6 mb-12 flex-grow">
                     {plan.features.map((f, j) => (
                       <div key={j} className="flex gap-4">
                          <div className="shrink-0 w-6 h-6 rounded-full bg-[#27A395]/10 flex items-center justify-center text-[#27A395]">
                             <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                             <p className="text-sm font-black text-[#1e3347] leading-tight mb-1">{f.t}</p>
                             <p className="text-xs text-slate-400 font-medium">{f.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100 mt-auto">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">{plan.extraLabel}</p>
                     <Link href="/contact" className="w-full">
                        <button className={`w-full py-5 rounded-2xl font-black text-white transition-all shadow-xl ${plan.color} hover:scale-[1.02] active:scale-95`}>
                           Get Started
                        </button>
                      </Link>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 
          4. KEY BENEFITS (Modern Grid)
      */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3347] mb-4 tracking-tight">The Hospital Advantage</h2>
             <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em]">Operational Excellence Built-in</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             {benefits.map((benefit, i) => (
               <div key={i} className="flex gap-8 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                  <div className="shrink-0 w-16 h-16 rounded-[1.5rem] bg-white text-[#27A395] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                     {benefit.icon}
                  </div>
                  <div>
                     <h3 className="text-2xl font-black text-[#1e3347] mb-4">{benefit.title}</h3>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 
          5. EMPANELMENT SECTION (Premium Deep Blue)
      */}
      <section className="py-32 bg-[#1e3347] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Database className="w-full h-full text-white" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
             <div className="lg:w-1/2">
                <div className="inline-flex px-4 py-2 rounded-full bg-[#27A395]/20 text-[#27A395] text-[10px] font-black uppercase tracking-widest mb-8">
                  Enterprise Exclusive
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic leading-tight">Mastering <br />Empanelment.</h2>
                <p className="text-xl text-white/50 font-medium mb-12">Expand your network to reach 10x more patients. We handle the bureaucracy, so you can handle the treatments.</p>
                
                <div className="space-y-6">
                   {[
                     { t: "Application Assistance", d: "End-to-end guidance on applying for network partnerships." },
                     { f: "Insurance Liaison", d: "Dedicated coordination with insurance companies on your behalf." },
                     { s: "Success-Based Structure", d: "No implementation cost—pay only upon successful empanelment." }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                        <CheckCircle2 className="w-6 h-6 text-[#27A395] shrink-0" />
                        <p className="text-sm font-bold text-white/80">{Object.values(item)[0]} – <span className="text-white/40">{Object.values(item)[1]}</span></p>
                     </div>
                   ))}
                </div>
             </div>

             <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-[3rem] p-10 text-[#1e3347] shadow-4xl">
                   <h3 className="text-2xl font-black mb-8 border-b border-slate-100 pb-6">Success-Based Fee</h3>
                   <div className="space-y-8">
                      <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl">
                         <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Monthly Cost</div>
                         <div className="text-2xl font-black">₹0 EXTRA</div>
                      </div>
                      <div className="flex justify-between items-center bg-[#27A395]/10 p-6 rounded-2xl border border-[#27A395]/20">
                         <div className="text-sm font-bold text-[#27A395] uppercase tracking-widest">Post-Approval Fee</div>
                         <div className="text-2xl font-black text-[#27A395]">₹9,999*</div>
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold italic leading-relaxed">*Success-based fee applicable per insurance company. Initial prep takes 2-4 weeks.</p>
                      <Link href="/contact" className="block text-center mt-6">
                        <button className="w-full py-5 bg-[#1e3347] text-white rounded-[1.5rem] font-black transition-all hover:bg-[#27A395] flex items-center justify-center gap-3">
                           Download Application Guide
                           <Briefcase className="w-4 h-4" />
                        </button>
                      </Link>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 
          6. IMPLEMENTATION JOURNEY 
      */}
      <section className="py-32 bg-[#fcfdfe]">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3347] mb-6 tracking-tighter italic">From Onboarding to Go-Live</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">A comprehensive 4-week transition</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-100 lg:top-14" />
              
              {onboardingSteps.map((step, i) => (
                <div key={i} className="relative text-center">
                   <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-8 border-slate-100 flex flex-col items-center justify-center mx-auto mb-10 z-10 relative shadow-xl">
                      <span className="text-xs font-black text-[#27A395] uppercase mb-1">{step.week}</span>
                      <span className="text-xs font-bold text-slate-300">Phase {i+1}</span>
                   </div>
                   <h3 className="text-2xl font-black text-[#1e3347] mb-6">{step.title}</h3>
                   <div className="flex flex-col gap-2">
                      {step.items.map((item, j) => (
                        <div key={j} className="text-sm font-bold text-slate-500 py-2 border-b border-slate-50 w-fit mx-auto">{item}</div>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 
          7. FINAL CORPORATE CTA 
      */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-gradient-to-br from-[#1e3347] to-[#12202b] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden text-white">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,#ffffff11_1px,transparent_0)] bg-[size:40px_40px] opacity-20" />
              <div className="relative z-10">
                 <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">Scale Your Hospital's <br /><span className="text-[#27A395]">Claim Efficiency.</span></h2>
                 <p className="text-white/50 text-xl font-medium mb-16 max-w-2xl mx-auto">Join the digital documentation revolution. Organize, verify, and settle claims faster than ever before.</p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link href="/contact" className="w-full sm:w-auto">
                       <button className="px-16 py-7 bg-[#27A395] text-white rounded-[2rem] font-black text-2xl hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(39,163,149,0.3)] transition-all duration-500">
                          BOOK FREE DEMO
                       </button>
                    </Link>
                    <div className="flex flex-col items-start gap-1">
                       <span className="text-xs font-black uppercase tracking-[0.2em] text-[#27A395]">Emergency Onboarding?</span>
                       <span className="text-sm font-bold text-white/40">Ready within 48 hours for critial needs.</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalProtectionDetails;
