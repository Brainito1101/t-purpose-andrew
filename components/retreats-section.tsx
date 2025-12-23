import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const retreats = [
  {
    month: "Dec",
    day: "07",
    location: "Chula Vista, California",
    type: "Week Long Advanced Retreat",
    dateRange: "December 07 - 13, 2025",
  },
  {
    month: "Jan",
    day: "04",
    location: "Marco Island, Florida",
    type: "Week Long Advanced Retreat",
    dateRange: "January 04 - 10, 2026",
  },
  {
    month: "Feb",
    day: "02",
    location: "Riviera Maya, Mexico",
    type: "Week Long Advanced Retreat",
    dateRange: "February 02 - 08, 2026",
  },
  {
    month: "Mar",
    day: "07",
    location: "Chula Vista, California",
    type: "Advanced Follow Up Retreat",
    dateRange: "March 07 - 10, 2026",
  },
  {
    month: "Apr",
    day: "04",
    location: "Aurora, Colorado",
    type: "Week Long Advanced Retreat",
    dateRange: "April 04 - 10, 2026",
  },
  {
    month: "May",
    day: "10",
    location: "Grapevine, Texas",
    type: "Week Long Advanced Retreat",
    dateRange: "May 10 - 16, 2026",
  },
]

export default function RetreatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Upcoming Retreats
          </h2>
        </div>

        {/* Retreats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {retreats.map((retreat, index) => (
            <Card
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                {/* Top Section: Date and Badge */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  {/* Date */}
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                      {retreat.month}
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                      {retreat.day}
                    </div>
                    <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-[#191970] mt-1"></div>
                  </div>

                  {/* Tickets Available Badge */}
                  <div className="bg-[#191970] text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded">
                    Tickets Available
                  </div>
                </div>

                {/* Location */}
                <div className="mb-2 sm:mb-3">
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-[#191970]">
                    {retreat.location}
                  </p>
                </div>

                {/* Retreat Type */}
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    {retreat.type}
                  </p>
                </div>

                {/* Date Range */}
                <div className="pt-2 sm:pt-3 border-t border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-500">
                    {retreat.dateRange}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Browse Retreats Button */}
        <div className="text-center">
          <Link href="/workshop">
            <Button
              className="bg-[#191970] hover:bg-[#0f0f4d] text-white px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg"
            >
              Browse Retreats
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

