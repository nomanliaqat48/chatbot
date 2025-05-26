import type React from "react"
export interface Feature {
  text: string
  included: boolean
}

export interface PricingPlan {
  icon: {
    color: string
    svg: React.ReactNode
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
  highlighted?: boolean
}

export interface PricingSectionProps {
  title?: string
  subtitle?: string
  plans?: PricingPlan[]
}
