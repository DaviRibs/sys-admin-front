import BannerSection from "@/components/BannerSection"
import CategorySection from "@/components/CategorySection"
import NewSletterSection from "@/components/NewsletterSection"
import PageWrapper from "@/components/PageWrapper"
import ProductsSection from "@/components/ProductsSection"

export default function Home() {
  return (
    <PageWrapper>
      <BannerSection />
      <CategorySection />
      <ProductsSection />
      <NewSletterSection />
    </PageWrapper>
  )
}
