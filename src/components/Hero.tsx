import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20 md:pt-32">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-orange-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-50 to-orange-50 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 lg:px-0">
        {/* Eyebrow */}
        <div className="mb-8 md:mb-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-200/50 rounded-full">
            <span className="text-sm font-medium text-gray-700 tracking-wide">
              Websites • AI Systems • Automation
            </span>
          </div>
        </div>

        {/* Primary Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-8 md:mb-10">
          <span className="text-gray-900">
            Websites and AI systems
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            built to help businesses grow
          </span>
          <span className="text-gray-900">.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
          We help businesses launch high-performing websites, automate repetitive work, and create digital experiences that drive measurable growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20">
          <a href="https://cal.com/threxa/threxa-free-audit">
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-white border-0"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#portfolio">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-lg border-2 border-gray-300 hover:border-purple-500/50 hover:bg-gray-50 transition-all duration-300"
            >
              View Our Work
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center text-sm md:text-base text-gray-700">
          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="font-medium">Fast delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="font-medium">Direct founder collaboration</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="font-medium">Custom-built solutions</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 md:mt-28 pt-12 md:pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
                12+
              </div>
              <p className="text-sm md:text-base text-gray-600">Websites shipped</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-sm md:text-base text-gray-600">Automations built</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <p className="text-sm md:text-base text-gray-600">Hours saved</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <p className="text-sm md:text-base text-gray-600">Brands partnered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
