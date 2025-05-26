import LayersIcon from "../app/components/icons/layers-icon";
import StarIcon from "../app/components/icons/star-icon"
import ShieldCheckIcon from "../app/components/icons/shield-check-icon"

export const pricingContent = {
  header: {
    title: "Simple pricing for startups of all sizes",
    subtitle:
      "Affordable plans tailored to grow with your business - no hidden fees, just the tools you need to succeed.",
  },
  plans: [
    {
      icon: {
        color: "bg-green-500",
        component: LayersIcon,
      },
      planName: "Basic",
      description: "Get access to one of Vanilla app for free. Forever. Great to try Vanilla.",
      price: {
        amount: "$0",
        period: "one app free forever",
      },
      button: {
        text: "Start for free!",
        variant: "secondary" as const,
      },
      features: [
        { text: "Lifetime updates", included: true },
        { text: "Free forever", included: true },
        { text: "Unlimited users", included: true },
      ],
    },
    {
      icon: {
        color: "bg-red-500",
        component: StarIcon,
      },
      planName: "Premium",
      description: "Unlimited access to all existing and future apps in Vanilla.",
      price: {
        amount: "$10",
        originalPrice: "$20",
        period: "per user per month",
        badge: {
          text: "early adopters",
          color: "bg-red-500",
        },
      },
      button: {
        text: "Get started",
        variant: "primary" as const,
      },
      features: [
        { text: "Lifetime updates", included: true },
        { text: "Sync between apps", included: true },
        { text: "Scale as you go", included: true },
      ],
    },
    {
      icon: {
        color: "bg-blue-500",
        component: ShieldCheckIcon,
      },
      planName: "Enterprise",
      description: "Having a huge team and need access to all apps? Contact us!",
      price: {
        amount: "Custom",
        period: "contact us for an amazing offer",
      },
      button: {
        text: "Contact us",
        variant: "outline" as const,
      },
      features: [
        { text: "Lifetime updates", included: true },
        { text: "Priority support", included: true },
        { text: "Scale as you go", included: true },
      ],
    },
  ],
}
