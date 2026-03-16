"use client";

import React, { useState } from 'react';
import { Check, Minus, Info, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalPlan, hospitalPlans, featureGroups } from '../lib/pricingData';
import { PricingCard } from './newcomponents/PricingCardShared';

const Pricing = () => {
  const [isHospital, setIsHospital] = useState(false);
  const [activeTabPlan, setActiveTabPlan] = useState('starter'); // For mobile category switch

  const plansList = [personalPlan, ...hospitalPlans];

  const getFeatureValue = (planId, feature) => {
    const plan = plansList.find(p => p.id === planId);
    if (!plan) return false;

    if (feature === 'Target Audience') return plan.target;
    if (feature === 'Patients Covered') return plan.patients;
    if (feature === 'Additional Patient Rate') return plan.additionalRate || 'N/A';
    
    return plan.features.some(f => f.includes(feature.split(' (')[0]));
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#f8fafc] overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#27A3951A] text-[#27A395] px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Pricing Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6 tracking-tight"
          >
            Flexible Solutions for <span className="text-[#27A395]">Every Need</span>
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the core plan that fits your needs and compare features below.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
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

        {/* Cards Display */}
        <div className="mb-24">
          <AnimatePresence mode="wait">
            {!isHospital ? (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="w-full max-w-4xl mx-auto"
              >
                <PricingCard plan={personalPlan} />
              </motion.div>
            ) : (
              <motion.div
                key="hospital"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {hospitalPlans.map((plan) => (
                  <PricingCard key={plan.id} plan={plan} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Comparison Table Section */}
        <div className="mt-40">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">Detailed Feature Comparison</h3>
            <p className="text-slate-500 max-w-xl mx-auto">Compare every benefit side-by-side to make an informed choice.</p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-8 text-[10px] font-black text-slate-400 uppercase tracking-widest w-1/4">Benefit</th>
                  <th className="p-8 w-1/4 text-lg font-black text-[#1e293b]">{personalPlan.title}</th>
                  {hospitalPlans.slice(0, 2).map(plan => (
                     <th key={plan.id} className="p-8 w-1/4 text-lg font-black text-[#1e293b]">{plan.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {featureGroups.map((group, gIndex) => (
                  <React.Fragment key={gIndex}>
                    <tr className="bg-[#27A395]/5">
                      <td colSpan={4} className="px-8 py-3 text-[10px] font-black text-[#27A395] uppercase tracking-widest">
                        {group.title}
                      </td>
                    </tr>
                    {group.features.map((feature, fIndex) => (
                      <tr key={fIndex} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-8 py-5 text-sm font-bold text-slate-600">{feature}</td>
                        {plansList.slice(0, 3).map(plan => {
                          const value = getFeatureValue(plan.id, feature);
                          return (
                            <td key={plan.id} className="p-8 py-5">
                              {typeof value === 'boolean' ? (
                                value ? (
                                  <div className="w-6 h-6 rounded-full bg-[#27A3951A] flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-[#27A395]" strokeWidth={4} />
                                  </div>
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-200" />
                                )
                              ) : (
                                <span className="text-sm font-black text-[#1e293b]">{value}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison View (Tabbed) */}
          <div className="lg:hidden">
             {/* Plan Selector for Mobile Category Switch */}
             <div className="sticky top-[70px] z-[45] mb-6 p-1.5 bg-slate-100 rounded-2xl flex items-center gap-1 overflow-x-auto scrollbar-hide border border-white shadow-lg">
                <button
                  onClick={() => setActiveTabPlan('personal')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    activeTabPlan === 'personal' ? 'bg-white text-[#27A395] shadow-md' : 'text-gray-400'
                  }`}
                >
                  Personal
                </button>
                <button
                  onClick={() => setActiveTabPlan('starter')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    activeTabPlan === 'starter' ? 'bg-white text-[#27A395] shadow-md' : 'text-gray-400'
                  }`}
                >
                  Starter
                </button>
                <button
                  onClick={() => setActiveTabPlan('enterprise')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    activeTabPlan === 'enterprise' ? 'bg-white text-[#27A395] shadow-md' : 'text-gray-400'
                  }`}
                >
                  Enterprise
                </button>
             </div>

             <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                {featureGroups.map((group, gIndex) => (
                  <div key={gIndex} className="border-b border-slate-50 last:border-0">
                    <div className="px-6 py-4 bg-[#27A395]/5 text-[10px] font-black text-[#27A395] uppercase tracking-widest">
                      {group.title}
                    </div>
                    <div>
                      {group.features.map((feature, fIndex) => {
                        const value = getFeatureValue(activeTabPlan, feature);
                        return (
                          <div key={fIndex} className="px-6 py-5 flex items-center justify-between border-b border-slate-50 last:border-0">
                             <span className="text-sm font-bold text-slate-600 leading-tight w-2/3">{feature}</span>
                             <div className="w-1/3 flex justify-end">
                                {typeof value === 'boolean' ? (
                                  value ? (
                                    <div className="w-7 h-7 rounded-full bg-[#27A3951A] flex items-center justify-center">
                                      <Check className="w-4 h-4 text-[#27A395]" strokeWidth={4} />
                                    </div>
                                  ) : (
                                    <Minus className="w-4 h-4 text-slate-200" />
                                  )
                                ) : (
                                  <span className="text-xs font-black text-[#1e293b] text-right">{value}</span>
                                )}
                             </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
