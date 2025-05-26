import PricingCard from "./pricing-card"
import { pricingContent } from "@/data/pricing-content"

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
            {pricingContent.header.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto leading-relaxed">
            {pricingContent.header.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingContent.plans.map((plan, index) => (
            <PricingCard
              key={index}
              icon={plan.icon}
              planName={plan.planName}
              description={plan.description}
              price={plan.price}
              button={plan.button}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
