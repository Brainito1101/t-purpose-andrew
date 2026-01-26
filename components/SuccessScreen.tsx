"use client";

import Image from "next/image";
import { CheckCircle, Mail, Calendar, ArrowRight } from "lucide-react";
import { SelectedAddons } from "./UpsellFlow";

interface SuccessScreenProps {
  selectedAddons: SelectedAddons;
}

const SuccessScreen = ({ selectedAddons }: SuccessScreenProps) => {
  const purchasedItems = [
    { included: true, name: "2-Day Transformation Workshop", price: "$197" },
    { included: selectedAddons.vip, name: "VIP Upgrade", price: "$297" },
    { included: selectedAddons.vip, name: "FREE 15-Minute Consultation", price: "Included" },
    { included: selectedAddons.consultation, name: "1-Hour Deep Dive Consultation", price: "$495" },
    { included: selectedAddons.coaching3m, name: "3-Month Coaching Program", price: "$1,875" },
    { included: selectedAddons.coaching12m, name: "12-Month Transformation Journey", price: "$7,495" },
    { included: selectedAddons.coaching12mMonthly, name: "12-Month Journey (Monthly)", price: "$649/mo" },
  ].filter(item => item.included);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-[#191970]" />
          </div>
          
          <Image
            src="https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695f932380b2a067c604c7f0.png"
            alt="True Purpose"
            width={96}
            height={96}
            className="w-24 h-24 mx-auto mb-6 object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 chrome-text animate-slide-up">
          Welcome to True Purpose!
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Your transformation journey begins now
        </p>

        <div className="card-premium mb-10 text-left animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="font-semibold text-foreground mb-4 text-center">Your Order Summary</h3>
          <div className="space-y-3">
            {purchasedItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#191970] flex-shrink-0" />
                  <span className="text-foreground">{item.name}</span>
                </div>
                <span className="text-muted-foreground font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="card-premium animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Mail className="w-8 h-8 text-[#191970] mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Check Your Email</h3>
            <p className="text-sm text-muted-foreground">
              We've sent your confirmation and next steps to your inbox
            </p>
          </div>
          <div className="card-premium animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Calendar className="w-8 h-8 text-[#191970] mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Save the Date</h3>
            <p className="text-sm text-muted-foreground">
              Workshop details and calendar invite are on the way
            </p>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <a 
            href="https://www.tpurpose.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#191970] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#0f0f4d]"
          >
            Visit True Purpose
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Questions? Contact us at support@tpurpose.com
        </p>
      </div>
    </div>
  );
};

export default SuccessScreen;
