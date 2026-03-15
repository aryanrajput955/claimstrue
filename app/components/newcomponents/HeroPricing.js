"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroPricing() {
  const [isHospital, setIsHospital] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const personalPlan = {
    title: "Personal Protection Plan",
    price: "₹499",
    period: "/year",
    subtext: "Comprehensive coverage for individuals and families.",
    features: [
      "Senior Citizen Assistance",
      "Priority Support",
      "Proactive Document Check",
      "Policy Analysis & Guidance",
      "Digital Claim Locker",
    ],
    buttonText: "GET STARTED",
  };

  const hospitalPlans = [
    {
      title: "STARTER",
      price: "₹1,499",
      period: "/mo",
      features: [
        "Up to 50 Monthly Patient Files",
        "Basic Empanelment Support",
        "Email Support",
        "Standard Dashboard Access",
      ],
      buttonText: "REQUEST DEMO",
      isPopular: false,
    },
    {
      title: "ENTERPRISE",
      price: "₹3,999",
      period: "/mo",
      features: [
        "Up to 250 Monthly Patient Files",
        "Priority Empanelment Support",
        "Dedicated Account Manager",
        "Advanced Dashboard & Analytics",
        "Custom Reporting",
      ],
      buttonText: "REQUEST DEMO",
      isPopular: true,
    },
    {
      title: "CUSTOM",
      price: "Contact Us",
      period: "",
      features: [
        "Unlimited Monthly Patient Files",
        "Full Empanelment Management",
        "Dedicated Team",
        "White-Label Solutions",
        "API Integration",
      ],
      buttonText: "REQUEST QUOTE",
      isPopular: false,
      isDark: true,
    },
  ];

  const [activeHospitalIdx, setActiveHospitalIdx] = useState(1); // Default to Enterprise

  const faqs = [
    {
      q: "How do I sign up for the Personal Protection Plan?",
      a: "Signing up is simple! Click the \"GET STARTED\" button above to create your account and choose your payment method.",
    },
    {
      q: "Can I add family members to my plan?",
      a: "Yes, you can! Our Personal Protection Plan covers you and your immediate family members.",
    },
    {
      q: "What if I need assistance with an existing claim?",
      a: "Our experts are here to help. Once you sign up, you can upload your claim documents for immediate review and assistance.",
    },
  ];

  // Helper component for rendering a single hospital pricing card
  const PricingCard = ({ plan, isMobile }) => (
    <div
      className={`relative bg-white rounded-[2rem] border transition-all duration-500 flex flex-col group ${
        plan.isPopular
          ? `border-[#27A395] shadow-[0_32px_64px_-16px_rgba(30,51,71,0.1)] ${isMobile ? "" : "scale-105 z-10"}`
          : "border-gray-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]"
      }`}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#33A8D3] text-white text-[10px] font-black py-1.5 px-4 rounded-full shadow-lg tracking-widest">
          RECOMMENDED
        </div>
      )}

      <div className="p-8 md:p-10 flex-grow flex flex-col">
        <div className="mb-8">
          <span
            className={`text-[10px] font-black uppercase tracking-widest ${
              plan.isPopular ? "text-[#27A395]" : "text-gray-400"
            }`}
          >
            {plan.title === "CUSTOM" ? "High Volume" : "SME Solutions"}
          </span>
          <h3 className="text-2xl font-black text-[#1e3347] mt-1 italic">
            {plan.title}
          </h3>
        </div>

        <div className="mb-10 min-h-[64px]">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-[#1e3347]">
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-base text-gray-400 font-bold">
                {plan.period}
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-4 mb-10 flex-grow">
          {plan.features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start gap-3">
              <div
                className={`mt-1 flex-shrink-0 w-4 h-4 rounded-md flex items-center justify-center ${
                  plan.isPopular
                    ? "bg-[#27A395]/10 text-[#27A395]"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <Check className="w-2.5 h-2.5" strokeWidth={5} />
              </div>
              <span className="text-[13px] font-bold text-gray-600 leading-tight">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 rounded-2xl font-black text-sm tracking-wider transition-all duration-300 ${
            plan.isPopular
              ? "bg-[#27A395] text-white shadow-lg shadow-[#27A395]/20 hover:scale-[1.02]"
              : plan.isDark
              ? "bg-[#1e3347] text-white hover:bg-[#27A395] shadow-lg shadow-[#1e3347]/10"
              : "bg-gray-50 text-[#1e3347] border border-gray-200 hover:bg-white hover:border-[#27A395] hover:text-[#27A395]"
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <section className="pt-16 md:pt-24 pb-0 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-[#27A395]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#33A8D3]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Connective Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27A395]/10 border border-[#27A395]/20 mb-4">
            <span className="text-[#27A395] text-[10px] md:text-xs font-extrabold uppercase tracking-widest">
              Pricing & Plans
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1e3347] mb-4 tracking-tight">
            Flexible Solutions for <span className="text-[#27A395]">Every Need</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg font-medium">
            From protecting your family's future to scaling your hospital's operations — choose the plan that connects you to seamless healthcare.
          </p>
        </div>

        {/* Professional Toggle Switch */}
        <div className="flex justify-center mb-16 md:mb-20">
          <div className="relative p-1.5 bg-gray-100/50 backdrop-blur-sm rounded-2xl flex items-center border border-gray-200 shadow-inner w-full max-w-[440px]">
            <motion.div
              initial={false}
              animate={{ x: isHospital ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-md border border-gray-100"
            />
            <button
              onClick={() => setIsHospital(false)}
              className={`relative flex-1 py-3 text-sm font-bold transition-colors duration-300 z-10 ${
                !isHospital ? "text-[#27A395]" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Personal & Family
            </button>
            <button
              onClick={() => setIsHospital(true)}
              className={`relative flex-1 py-3 text-sm font-bold transition-colors duration-300 z-10 ${
                isHospital ? "text-[#27A395]" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Hospital & Clinic
            </button>
          </div>
        </div>

        {/* Pricing Content */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <AnimatePresence mode="wait">
            {!isHospital ? (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-3xl"
              >
                <div className="relative bg-white rounded-[2.5rem] border-2 border-[#27A395] shadow-[0_32px_64px_-16px_rgba(30,51,71,0.1)] overflow-hidden group">
                  {/* High Clarity Badge */}
                  <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-gradient-to-r from-[#27A395] to-[#33A8D3] text-white text-[9px] md:text-[10px] font-black tracking-widest uppercase shadow-lg shadow-[#27A395]/20">
                    MOST TRUSTED
                  </div>
                  
                  <div className="absolute top-6 right-6 hidden md:flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#27A395] animate-pulse" />
                    <span className="text-[10px] font-black text-[#27A395] uppercase tracking-widest">Recommended for You</span>
                  </div>

                  <div className="grid md:grid-cols-[1.1fr_0.9fr] md:divide-x divide-[#27A395]/10">
                    <div className="px-8 pb-8 pt-32 md:p-12">
                      <div className="mb-10">
                        <div className="text-[#27A395] text-[10px] font-black uppercase tracking-[0.2em] mb-3">Family Security Plan</div>
                        <h3 className="text-3xl md:text-4xl font-black text-[#1e3347] mb-3 leading-tight">
                          {personalPlan.title}
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                          {personalPlan.subtext}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {personalPlan.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#27A395]/10 flex items-center justify-center shrink-0 border border-[#27A395]/20">
                              <Check className="w-3.5 h-3.5 text-[#27A395]" strokeWidth={4} />
                            </div>
                            <span className="text-sm md:text-base font-bold text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 md:p-12 bg-[#27A395]/5 flex flex-col justify-center items-center text-center">
                      <div className="mb-10">
                        <div className="flex items-baseline justify-center gap-1.5">
                          <span className="text-7xl font-black text-[#1e3347] tracking-tighter">
                            {personalPlan.price}
                          </span>
                          <span className="text-xl text-gray-400 font-bold">
                            {personalPlan.period}
                          </span>
                        </div>
                      </div>

                      <button className="w-full py-5 px-8 bg-gradient-to-r from-[#27A395] to-[#33A8D3] text-white rounded-2xl font-black text-base tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#27A395]/30">
                        {personalPlan.buttonText}
                      </button>
                      <p className="text-[11px] text-gray-500 mt-5 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27A395]" />
                        For Individuals & Families
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="w-full">
                {/* Desktop Grid / Mobile Carousel mapping */}
                <div className="relative">
                  {/* Desktop Only Grid */}
                  <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                    {hospitalPlans.map((plan, idx) => (
                      <PricingCard key={idx} plan={plan} />
                    ))}
                  </div>

                  {/* Mobile Only Carousel */}
                  <div className="lg:hidden w-full max-w-sm mx-auto px-2 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeHospitalIdx}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                          if (offset.x < -100 && activeHospitalIdx < hospitalPlans.length - 1) {
                            setActiveHospitalIdx(activeHospitalIdx + 1);
                          } else if (offset.x > 100 && activeHospitalIdx > 0) {
                            setActiveHospitalIdx(activeHospitalIdx - 1);
                          }
                        }}
                      >
                        <PricingCard plan={hospitalPlans[activeHospitalIdx]} isMobile />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons for Mobile */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none">
                      <button
                        onClick={() => setActiveHospitalIdx(Math.max(0, activeHospitalIdx - 1))}
                        disabled={activeHospitalIdx === 0}
                        className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto transition-all ${
                          activeHospitalIdx === 0 ? "opacity-0 scale-50" : "opacity-100 scale-100"
                        }`}
                      >
                        <ChevronLeft className="w-5 h-5 text-[#354B62]" />
                      </button>
                      <button
                        onClick={() => setActiveHospitalIdx(Math.min(hospitalPlans.length - 1, activeHospitalIdx + 1))}
                        disabled={activeHospitalIdx === hospitalPlans.length - 1}
                        className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-auto transition-all ${
                          activeHospitalIdx === hospitalPlans.length - 1 ? "opacity-0 scale-50" : "opacity-100 scale-100"
                        }`}
                      >
                        <ChevronRight className="w-5 h-5 text-[#354B62]" />
                      </button>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                      {hospitalPlans.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveHospitalIdx(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeHospitalIdx === idx
                              ? "w-8 bg-[#27A395]"
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
