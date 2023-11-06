'use client'
import BannerSection from "@/components/organisms/BannerSection/BannerSection";
import FixedIncomeDealsSection from "@/components/organisms/FixedIncomeDealsSection/FixedIncomeDealsSection";

export default function Home() {
  return (
    <>
      <BannerSection data-testid="banner-section" />
      <FixedIncomeDealsSection data-testid="fixed-income-deals-section" />
    </>
  )
}
