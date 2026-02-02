"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { CheckCircle, Mail, Calendar, ArrowRight } from "lucide-react";

export default function SuccessPage() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

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
                    Payment Successful!
                </h1>

                <p className="text-xl text-muted-foreground mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    Welcome to True Purpose! Your transformation journey begins now.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                    <div className="card-premium animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <Mail className="w-8 h-8 text-[#191970] mx-auto mb-3" />
                        <h3 className="font-semibold text-foreground mb-2">Check Your Email</h3>
                        <p className="text-sm text-muted-foreground">
                            We've sent your confirmation and next steps to your inbox
                        </p>
                    </div>
                    <div className="card-premium animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        <Calendar className="w-8 h-8 text-[#191970] mx-auto mb-3" />
                        <h3 className="font-semibold text-foreground mb-2">Save the Date</h3>
                        <p className="text-sm text-muted-foreground">
                            Workshop details and calendar invite are on the way
                        </p>
                    </div>
                </div>

                {sessionId && (
                    <p className="text-xs text-muted-foreground mb-6">
                        Order ID: {sessionId}
                    </p>
                )}

                <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
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

                <p className="text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    Questions? Contact us at support@tpurpose.com
                </p>
            </div>
        </div>
    );
}
