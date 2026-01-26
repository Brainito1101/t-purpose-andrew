"use client";

import { useState } from "react";
import WorkshopConfirmation from "./WorkshopConfirmation";
import VIPUpgrade from "./VIPUpgrade";
import CoachingAddons from "./CoachingAddons";
import SuccessScreen from "./SuccessScreen";

export type FlowStep = "workshop" | "vip" | "addons" | "success";

export interface SelectedAddons {
  vip: boolean;
  consultation: boolean;
  coaching3m: boolean;
  coaching12m: boolean;
  coaching12mMonthly: boolean;
}

const UpsellFlow = () => {
  const [currentStep, setCurrentStep] = useState<FlowStep>("workshop");
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddons>({
    vip: false,
    consultation: false,
    coaching3m: false,
    coaching12m: false,
    coaching12mMonthly: false,
  });

  const handleWorkshopConfirm = () => {
    setCurrentStep("vip");
  };

  const handleVIPDecision = (acceptVIP: boolean) => {
    setSelectedAddons(prev => ({ ...prev, vip: acceptVIP }));
    setCurrentStep("addons");
  };

  const handleAddonsComplete = (addons: Partial<SelectedAddons>) => {
    setSelectedAddons(prev => ({ ...prev, ...addons }));
    setCurrentStep("success");
  };

  const handleSkipAddons = () => {
    setCurrentStep("success");
  };

  return (
    <div className="min-h-screen bg-background">
      {currentStep === "workshop" && (
        <WorkshopConfirmation onConfirm={handleWorkshopConfirm} />
      )}
      {currentStep === "vip" && (
        <VIPUpgrade onDecision={handleVIPDecision} />
      )}
      {currentStep === "addons" && (
        <CoachingAddons
          isVIP={selectedAddons.vip}
          onComplete={handleAddonsComplete}
          onSkip={handleSkipAddons}
        />
      )}
      {currentStep === "success" && (
        <SuccessScreen selectedAddons={selectedAddons} />
      )}
    </div>
  );
};

export default UpsellFlow;
