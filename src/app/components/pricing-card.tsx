import type React from "react"
import CheckIcon from "./icons/check-icon"

interface Feature {
  text: string
  included: boolean
}

interface PricingCardProps {
  icon: {
    color: string
    component: React.ComponentType
  }
  planName: string
  description: string
  price: {
    amount: string
    originalPrice?: string
    period?: string
    badge?: {
      text: string
      color: string
    }
  }
  button: {
    text: string
    variant: "primary" | "secondary" | "outline"
  }
  features: Feature[]
}

export default function PricingCard({ icon, planName, description, price, button, features }: PricingCardProps) {
  const IconComponent = icon.component

  const getButtonStyles = () => {
    switch (button.variant) {
      case "primary":
        return "bg-white hover:bg-gray-100 text-black"
      case "secondary":
        return "bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white"
      case "outline":
        return "bg-transparent hover:bg-[#3a3a3a39] text-white border border-[#3a3a3a]"
      default:
        return "bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white"
    }
  }

  return (
    <div className="bg-black border border-[#2a2a2a] hover:border-[#393A40] hover:bg-[#3a3a3a39] rounded-2xl p-6 lg:p-8 relative transition-colors duration-200">
      {/* Icon */}
      <div className="mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-start`}>
          <IconComponent />
        </div>
      </div>

      {/* Plan Name */}
      <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">{planName}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm lg:text-base mb-8 leading-relaxed">{description}</p>

      {/* Price */}
      <div className="mb-2 flex items-center gap-3 flex-wrap">
        {price.originalPrice && (
          <span className="text-gray-500 line-through text-xl lg:text-2xl">{price.originalPrice}</span>
        )}
        <span className="text-4xl lg:text-5xl font-bold text-white">{price.amount}</span>
        {price.badge && (
          <span className={`${price.badge.color} text-white text-xs px-2 py-1 rounded-full font-medium`}>
            {price.badge.text}
          </span>
        )}
      </div>
      {price.period && <p className="text-gray-500 text-sm mb-8">{price.period}</p>}

      {/* CTA Button */}
      <button
        className={`w-full flex items-center justify-center h-10 rounded-lg transition-colors duration-200 mb-8 text-[14px] leading-[20px] tracking-[0px] font-[500] font-inter ${getButtonStyles()}`}
      >
        {button.text}
      </button>

      {/* Features */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckIcon />
            </div>
            <span className="text-gray-400 text-sm lg:text-base">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
