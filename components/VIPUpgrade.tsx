"use client";

import Image from "next/image";
import { Crown, Video, FileText, MessageCircle, Gift, Star } from "lucide-react";

interface VIPUpgradeProps {
  onDecision: (acceptVIP: boolean) => void;
}

const VIPUpgrade = ({ onDecision }: VIPUpgradeProps) => {
  const vipBenefits = [
    {
      icon: Crown,
      title: "Extra Day at Workshop",
      description: "An exclusive third day of deep-dive training and personalized attention",
    },
    {
      icon: Video,
      title: "All Workshop Recordings",
      description: "Lifetime access to replay every session at your own pace",
    },
    {
      icon: FileText,
      title: "Downloadable Materials",
      description: "Complete workbook, templates, and resources to continue your journey",
    },
    {
      icon: MessageCircle,
      title: "Extended Q&A Session",
      description: "Extra hour after workshop for personal questions and clarity",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        <Image
          src="https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695f932380b2a067c604c7f0.png"
          alt="True Purpose"
          width={96}
          height={96}
          className="w-24 h-24 mx-auto mb-6 object-contain animate-fade-in"
        />

        <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Star className="w-4 h-4 text-[#191970]" />
          <span className="text-[#191970] font-semibold text-sm uppercase tracking-wide">Exclusive Upgrade</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 chrome-text animate-slide-up">
          Unlock the VIP Experience
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Maximize your transformation with premium benefits
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {vipBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card-premium text-left glow-effect animate-slide-up"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#191970]/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#191970]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-premium chrome-border mb-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-6 h-6 text-[#191970]" />
            <span className="text-accent font-semibold">Bonus Included</span>
          </div>
          <p className="text-foreground text-lg">
            FREE 15-Minute Personal Consultation
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            A one-on-one session to map your personal transformation path
          </p>
        </div>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block">
            <span className="text-muted-foreground text-lg line-through mr-3">$497</span>
            <span className="text-4xl font-bold text-foreground">$297</span>
          </div>
          <p className="text-muted-foreground mt-2">Add VIP to your workshop experience</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.7s" }}>
          <button 
            onClick={() => onDecision(true)}
            className="inline-flex items-center justify-center rounded-lg bg-[#191970] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#0f0f4d]"
          >
            Yes! Upgrade to VIP — $297
          </button>
          <button 
            onClick={() => onDecision(false)}
            className="px-8 py-4 rounded-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            No thanks, continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VIPUpgrade;
