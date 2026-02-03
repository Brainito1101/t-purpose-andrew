"use client"

import { useState } from "react"
import { Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function LockScreen() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [shake, setShake] = useState(false)
    const [isVerifying, setIsVerifying] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsVerifying(true)

        // Simulate a brief delay for UX (and to make it feel like a real check)
        await new Promise(resolve => setTimeout(resolve, 600))

        if (username === "tpurpose" && password === "weT19UP0bG8l") {
            // Set cookie for middleware
            document.cookie = `site_access=true; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax` // 30 days

            // Also keep sessionStorage for backward compatibility/redundancy if needed, but cookie is primary now
            sessionStorage.setItem("is_authenticated", "true")

            // Refresh to trigger middleware re-evaluation or redirect
            router.refresh()
            router.push("/")
        } else {
            setError("Invalid credentials")
            setShake(true)
            setIsVerifying(false)
            setTimeout(() => setShake(false), 500)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 font-sans text-slate-100 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale pointer-events-none" />

            <Card className={`relative w-full max-w-md border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-300 z-10 ${shake ? 'animate-shake ring-2 ring-red-500/50' : ''}`}>
                <CardHeader className="space-y-1 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 ring-1 ring-white/20 shadow-inner">
                        <Lock className="h-8 w-8 text-indigo-400" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight text-white mb-2">
                        Private Access
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-base">
                        This content is protected. Please enter your credentials to verify your identity.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-5">
                        <div className="space-y-2 text-left">
                            <Label htmlFor="username" className="text-slate-200 font-medium ml-1">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                    setError("")
                                }}
                                className="h-11 border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 transition-all rounded-xl"
                                autoComplete="off"
                                disabled={isVerifying}
                            />
                        </div>
                        <div className="space-y-2 text-left">
                            <Label htmlFor="password" className="text-slate-200 font-medium ml-1">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError("")
                                }}
                                className="h-11 border-white/10 bg-black/20 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/50 focus-visible:border-indigo-500/50 transition-all rounded-xl"
                                disabled={isVerifying}
                            />
                        </div>
                        {error && (
                            <div className="flex items-center justify-center p-2 rounded-lg bg-red-500/10 border border-red-500/20 animate-in fade-in slide-in-from-top-1">
                                <p className="text-sm font-medium text-red-400">
                                    {error}
                                </p>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="pt-2 pb-6">
                        <Button
                            type="submit"
                            className="h-11 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/40 transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isVerifying}
                        >
                            {isVerifying ? 'Verifying...' : 'Verify & Enter'}
                            {!isVerifying && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
        </div>
    )
}
