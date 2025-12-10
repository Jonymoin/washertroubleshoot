import React from "react";
import { Wrench, Clock, Shield, Star } from "lucide-react";

export default function HeroIntro() {
  return (
    <div className="text-center mb-12">
      {/* Title and Logo */}
      <div className="flex items-center justify-center mb-4">
        <Wrench className="w-12 h-12 text-blue-400 mr-3" />
        <h1 className="text-4xl font-bold text-white">WasherTroubleshoot SG</h1>
      </div>

      {/* Tagline */}
      <p className="text-xl text-gray-300 mb-6">
        Professional • Affordable • Reliable Service
      </p>

      {/* Key Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-green-500">
          <Clock className="w-8 h-8 text-green-400 mb-3 mx-auto" />
          <h3 className="font-semibold text-white mb-2">Same Day Service</h3>
          <p className="text-gray-300 text-sm">
            Quick response to get your machine running
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
          <Shield className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
          <h3 className="font-semibold text-white mb-2">No Hidden Fees</h3>
          <p className="text-gray-300 text-sm">
            All costs discussed upfront
          </p>
        </div>
        <div className="md:hidden">
            <img src="/wm1.webp" alt="" />
        </div>
        <div className="bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-purple-500">
          <Star className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
          <h3 className="font-semibold text-white mb-2">Expert Technicians</h3>
          <p className="text-gray-300 text-sm">
            Certified professionals with years of experience
          </p>
        </div>
      </div>
    </div>
  );
}
