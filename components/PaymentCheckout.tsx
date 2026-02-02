"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Loader2 } from "lucide-react";

interface PaymentCheckoutProps {
    selectedAddons: {
        vip: boolean;
        consultation: boolean;
        coaching3m: boolean;
        coaching12m: boolean;
        coaching12mMonthly: boolean;
    };
    onBack: () => void;
}

const PaymentCheckout = ({ selectedAddons, onBack }: PaymentCheckoutProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePayNow = async () => {
        // Validation
        if (!name.trim() || !email.trim()) {
            setError("Please provide your name and email");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please provide a valid email address");
            return;
        }

        setError("");
        setIsLoading(true);

        try {
            // Map selectedAddons to service + addons format
            const addons: string[] = [];

            if (selectedAddons.vip) {
                addons.push("vip_upgrade");
            }
            if (selectedAddons.consultation) {
                addons.push("consultation_1hour");
            }
            if (selectedAddons.coaching3m) {
                addons.push("coaching_3month");
            }
            if (selectedAddons.coaching12m) {
                addons.push("coaching_12month_full");
            }
            if (selectedAddons.coaching12mMonthly) {
                addons.push("coaching_12month_monthly");
            }

            // Call checkout API
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    service: "workshop_2day",
                    addons,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to create checkout session");
            }

            if (data.url) {
                // Redirect to Stripe Checkout
                window.location.href = data.url;
            } else {
                throw new Error("No checkout URL returned");
            }
        } catch (err: any) {
            console.error("Checkout error:", err);
            setError(err.message || "Something went wrong. Please try again.");
            setIsLoading(false);
        }
    };

    // Calculate displayed items
    const purchasedItems = [
        { included: true, name: "2-Day Transformation Workshop", price: "$197" },
        { included: selectedAddons.vip, name: "VIP Upgrade", price: "$297" },
        { included: selectedAddons.consultation, name: "1-Hour Deep Dive Consultation", price: "$495" },
        { included: selectedAddons.coaching3m, name: "3-Month Coaching Program", price: "$1,875" },
        { included: selectedAddons.coaching12m, name: "12-Month Transformation Journey", price: "$7,495" },
        { included: selectedAddons.coaching12mMonthly, name: "12-Month Journey (Monthly)", price: "$649/mo" },
    ].filter((item) => item.included);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full text-center">
                <Image
                    src="https://storage.googleapis.com/msgsndr/wcFeePbK2OSXkafPwdjz/media/695f932380b2a067c604c7f0.png"
                    alt="True Purpose"
                    width={96}
                    height={96}
                    className="w-24 h-24 mx-auto mb-6 object-contain animate-fade-in"
                />

                <h1 className="text-4xl md:text-5xl font-bold mb-4 chrome-text animate-slide-up">
                    Complete Your Purchase
                </h1>

                <p className="text-xl text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    You're one step away from your transformation journey
                </p>

                {/* Order Summary */}
                <div className="card-premium mb-8 text-left animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <h3 className="font-semibold text-foreground mb-4 text-center">Your Order Summary</h3>
                    <div className="space-y-3">
                        {purchasedItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-[#191970] flex-shrink-0" />
                                    <span className="text-foreground">{item.name}</span>
                                </div>
                                <span className="text-muted-foreground font-medium">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Information Form */}
                <div className="card-premium mb-8 text-left animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                Full Name *
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#191970]"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email Address *
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#191970]"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
                    <button
                        onClick={handlePayNow}
                        disabled={isLoading}
                        className="inline-flex items-center justify-center rounded-lg bg-[#191970] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#0f0f4d] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            "Proceed to Payment"
                        )}
                    </button>
                    <button
                        onClick={onBack}
                        disabled={isLoading}
                        className="px-8 py-4 rounded-lg font-semibold text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                    >
                        Go Back
                    </button>
                </div>

                <p className="text-sm text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    🔒 Secure checkout powered by Stripe • 100% satisfaction guaranteed
                </p>
            </div>
        </div>
    );
};

export default PaymentCheckout;
