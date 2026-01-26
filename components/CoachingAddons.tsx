"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Calendar, CalendarDays, Check, Gift } from "lucide-react";
import { SelectedAddons } from "./UpsellFlow";

interface CoachingAddonsProps {
  isVIP: boolean;
  onComplete: (addons: Partial<SelectedAddons>) => void;
  onSkip: () => void;
}

const CoachingAddons = ({ isVIP, onComplete, onSkip }: CoachingAddonsProps) => {
  const [selectedOptions, setSelectedOptions] = useState({
    consultation: false,
    coaching3m: false,
    coaching12m: false,
    coaching12mMonthly: false,
  });

  const handleToggle = (key: keyof typeof selectedOptions) => {
    if (key === "coaching12m" && selectedOptions.coaching12mMonthly) {
      setSelectedOptions(prev => ({ ...prev, coaching12mMonthly: false, [key]: !prev[key] }));
    } else if (key === "coaching12mMonthly" && selectedOptions.coaching12m) {
      setSelectedOptions(prev => ({ ...prev, coaching12m: false, [key]: !prev[key] }));
    } else {
      setSelectedOptions(prev => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedOptions.consultation) total += 495;
    if (selectedOptions.coaching3m) total += 1875;
    if (selectedOptions.coaching12m) total += 7495;
    if (selectedOptions.coaching12mMonthly) total += 649; // First month payment
    return total;
  };

  const hasSelection = Object.values(selectedOptions).some(v => v);

  const coachingOptions = [
    {
      key: "consultation" as const,
      icon: Clock,
      title: "1-Hour Deep Dive Consultation",
      description: "Personalized strategy session to clarify your path and remove obstacles",
      price: "$495",
      priceNote: "One-time",
    },
    {
      key: "coaching3m" as const,
      icon: Calendar,
      title: "3-Month Coaching Program",
      description: "Bi-weekly sessions with full support to implement lasting change",
      price: "$1,875",
      priceNote: "3 months",
    },
    {
      key: "coaching12m" as const,
      icon: CalendarDays,
      title: "12-Month Transformation Journey",
      description: "Complete year of coaching with unlimited support and accountability",
      price: "$7,495",
      priceNote: "Pay in full (Save $1,293)",
    },
    {
      key: "coaching12mMonthly" as const,
      icon: CalendarDays,
      title: "12-Month Journey — Monthly Plan",
      description: "Same comprehensive program with flexible monthly payments",
      price: "$649/mo",
      priceNote: "12 payments",
      badge: "Most Flexible",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <Image
          src="https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695f932380b2a067c604c7f0.png"
          alt="True Purpose"
          width={80}
          height={80}
          className="w-20 h-20 mx-auto mb-6 object-contain animate-fade-in"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4 chrome-text animate-slide-up">
          Accelerate Your Transformation
        </h1>
        
        <p className="text-lg text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Select any coaching options to continue your journey
        </p>

        {isVIP && (
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <Gift className="w-4 h-4 text-[#191970]" />
            <span className="text-[#191970] font-medium text-sm">
              Your FREE 15-min consultation is confirmed!
            </span>
          </div>
        )}

        <div className="space-y-4 mb-10">
          {coachingOptions.map((option, index) => (
            <div 
              key={option.key}
              onClick={() => handleToggle(option.key)}
              className={`card-premium cursor-pointer text-left transition-all duration-300 animate-slide-up ${
                selectedOptions[option.key] 
                  ? "chrome-border glow-effect" 
                  : "hover:border-muted-foreground/30"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                  selectedOptions[option.key] 
                    ? "bg-primary border-primary" 
                    : "border-muted-foreground"
                }`}>
                  {selectedOptions[option.key] && (
                    <Check className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{option.title}</h3>
                        {option.badge && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                            {option.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl font-bold text-foreground">{option.price}</div>
                      <div className="text-xs text-muted-foreground">{option.priceNote}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasSelection && (
          <div className="mb-6 animate-fade-in">
            <p className="text-muted-foreground">
              Total: <span className="text-2xl font-bold text-foreground">${calculateTotal().toLocaleString()}</span>
              {selectedOptions.coaching12mMonthly && <span className="text-sm text-muted-foreground"> (first month)</span>}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {hasSelection ? (
            <button 
              onClick={() => onComplete(selectedOptions)}
              className="inline-flex items-center justify-center rounded-lg bg-[#191970] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#0f0f4d]"
            >
              Add to My Order
            </button>
          ) : null}
          <button 
            onClick={onSkip}
            className="px-8 py-4 rounded-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            {hasSelection ? "Skip additional coaching" : "Continue without add-ons"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachingAddons;
