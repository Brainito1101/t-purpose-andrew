'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Mail, ArrowRight, Users, Star, Trophy } from 'lucide-react';

interface SuccessPageProps {
  instructorName?: string;
  workshopTitle?: string;
  onJoinWorkshop?: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({
  instructorName = "Andrew",
  workshopTitle = "Awaken the Purpose Within",
  onJoinWorkshop
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCurrentStep(1), 500);
    const timer2 = setTimeout(() => setCurrentStep(2), 1500);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  const handleJoinWorkshop = () => {
    if (onJoinWorkshop) {
      onJoinWorkshop();
    }
    console.log('Joining workshop...');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Side - Success Confirmation */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg space-y-8">
            
            {/* Animated Success Badge */}
            <div className={`transform transition-all duration-1000 ${currentStep >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative inline-block">
                <div className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  BOOKING CONFIRMED
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Main Success Message */}
            <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${currentStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                You're All Set,
                <br />
                <span className="text-[#191970]">Success!</span>
              </h1>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#191970] mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    Your one-on-one session with <span className="font-semibold text-gray-900">{instructorName}</span> is secured
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#191970] mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    Confirmation details are heading to your inbox
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 delay-700 ${currentStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 text-[#191970] mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-gray-600">Students Transformed</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 text-[#191970] mb-1">
                  <Star className="w-4 h-4" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Workshop Opportunity */}
        <div className="bg-gradient-to-br from-[#191970] to-[#483D8B] text-white flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1] to-[#6A5ACD]"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
          </div>

          <div className="relative z-10 max-w-lg space-y-8">
            
            {/* Workshop Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4169E1] text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Trophy className="w-4 h-4" />
              EXCLUSIVE OPPORTUNITY
            </div>

            {/* Workshop Title */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Ready for Your Next
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Breakthrough?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                While you wait for your session, why not accelerate your journey with {instructorName}'s transformative workshop:
              </p>
            </div>

            {/* Workshop Details Card */}
            <div className="bg-gradient-to-r from-[#483D8B] to-[#4169E1] rounded-2xl p-6 border border-blue-500">
              <h3 className="text-2xl font-bold mb-2 text-white">
                "{workshopTitle}"
              </h3>
              <p className="text-blue-200 mb-4">
                Experience the same breakthrough methods that have transformed hundreds of lives
              </p>
              
              {/* Benefits List */}
              <div className="space-y-2 mb-6">
                {[
                  "Live interactive sessions",
                  "Proven transformation techniques", 
                  "Exclusive community access"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-blue-100">
                    <CheckCircle className="w-4 h-4 text-blue-300" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Preview */}
            <div className="bg-[#2E2E48] rounded-xl p-8 text-center border border-blue-500">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4169E1] to-[#6A5ACD] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-white ml-1"></div>
              </div>
              <p className="text-gray-400">Watch Workshop Preview</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleJoinWorkshop}
              className="w-full bg-gradient-to-r from-[#4169E1] to-[#6A5ACD] hover:from-[#191970] hover:to-[#483D8B] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              <span>Join the Workshop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center text-gray-400 text-sm">
              Limited spots available • Join 500+ successful participants
            </p>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default SuccessPage;