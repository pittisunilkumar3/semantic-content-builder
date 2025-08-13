import KrislHeader from "@/components/KrislHeader";
import KrislHero from "@/components/KrislHero";
import KrislFeaturedProducts from "@/components/KrislFeaturedProducts";
import KrislAboutSection from "@/components/KrislAboutSection";
import KrislProductShowcase from "@/components/KrislProductShowcase";
import KrislProductGrid from "@/components/KrislProductGrid";
import KrislLifestyleSection from "@/components/KrislLifestyleSection";
import KrislBrandGallery from "@/components/KrislBrandGallery";
import KrislFooter from "@/components/KrislFooter";





const Index = () => {
  return (
    <div className="min-h-screen">
      <KrislHeader />
      <main>
        <KrislHero />
        <KrislFeaturedProducts />
        <KrislAboutSection />
        <KrislProductShowcase />
        <KrislProductGrid />
        <KrislLifestyleSection />
        <KrislBrandGallery />
      </main>
      <KrislFooter />
    </div>
  );
};

export default Index;
