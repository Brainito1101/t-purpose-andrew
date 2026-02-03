import LockScreen from "@/components/lock-screen"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Private Access - True Purpose",
    description: "Restricted area. Please login.",
}

export default function LockPage() {
    return <LockScreen />
}
