import KrislHeader from "@/components/KrislHeader";
import KrislHero from "@/components/KrislHero";
import KrislFeaturedProducts from "@/components/KrislFeaturedProducts";
import KrislAboutSection from "@/components/KrislAboutSection";
import KrislProductGrid from "@/components/KrislProductGrid";
import KrislBlogSection from "@/components/KrislBlogSection";
import KrislFooter from "@/components/KrislFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <KrislHeader />
      <main>
        <KrislHero />
        <KrislFeaturedProducts />
        <KrislAboutSection />
        <KrislProductGrid />
        <KrislBlogSection />
      </main>
      <KrislFooter />
    </div>
  );
};

export default Index;
