"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroFAQ() {
  const [openFaq, setOpenFaq] = useState(null);

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

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section className="pt-2 md:pt-4 pb-12 md:pb-20 bg-white">
      {/* Injecting JSON-LD for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-[#1e3347] mb-2">
            Got Questions?
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Everything you need to know about getting started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                openFaq === idx
                  ? "bg-white border-[#27A395] shadow-xl shadow-[#27A395]/5"
                  : "bg-gray-50/50 border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between py-5 px-6 md:px-8 text-left outline-none"
              >
                <span
                  className={`text-sm md:text-base font-bold transition-colors ${
                    openFaq === idx ? "text-[#27A395]" : "text-[#1e3347]"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                    openFaq === idx
                      ? "bg-[#27A395] text-white rotate-180"
                      : "bg-white text-gray-400 shadow-sm"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-6 px-6 md:px-8">
                      <div className="w-full h-px bg-gray-100 mb-4" />
                      <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
