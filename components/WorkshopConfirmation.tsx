"use client";

import Image from "next/image";
import { Check, Calendar, Clock, Users } from "lucide-react";

interface WorkshopConfirmationProps {
  onConfirm: () => void;
}

const WorkshopConfirmation = ({ onConfirm }: WorkshopConfirmationProps) => {
  const benefits = [
    "Discover your authentic life purpose",
    "Create a clear action plan for transformation",
    "Connect with like-minded individuals",
    "Learn proven strategies for lasting change",
    "Access exclusive workshop materials",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <Image
          src="https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695f932380b2a067c604c7f0.png"
          alt="True Purpose"
          width={128}
          height={128}
          className="w-32 h-32 mx-auto mb-8 object-contain animate-fade-in"
        />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 chrome-text animate-slide-up">
          You're Almost There!
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Complete your registration for the 2-Day Transformation Workshop
        </p>

        <div className="card-premium mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#191970]" />
              <span className="text-foreground">2-Day Intensive</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#191970]" />
              <span className="text-foreground">Live Interactive Sessions</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#191970]" />
              <span className="text-foreground">Limited Seats</span>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">What You'll Experience:</h3>
            <ul className="space-y-3 text-left">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#191970] mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="inline-block">
            <span className="text-muted-foreground text-lg line-through mr-3">$297</span>
            <span className="text-4xl font-bold text-foreground">$197</span>
          </div>
          <p className="text-muted-foreground mt-2">One-time investment in your transformation</p>
        </div>

        <button 
          onClick={onConfirm}
          className="inline-flex items-center justify-center rounded-lg bg-[#191970] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#0f0f4d] animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          Confirm My Spot — $197
        </button>

        <p className="text-sm text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          🔒 Secure checkout • 100% satisfaction guaranteed
        </p>
      </div>
    </div>
  );
};

export default WorkshopConfirmation;
