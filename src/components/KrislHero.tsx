import { Button } from "@/components/ui/button";
import heroTumblers from "@/assets/hero-tumblers.jpg";

const KrislHero = () => {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              CUSTOM PROMOTIONAL ITEMS
              <span className="block text-orange-500 mt-2">WITH YOUR LOGO</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              Boost your brand with high-quality promotional products. 
              From drinkware to apparel, we customize everything with your logo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-md"
              >
                START YOUR ORDER
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-md"
              >
                VIEW CATALOG
              </Button>
            </div>
          </div>

          {/* Right Content - Product Images */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
              <img 
                src={heroTumblers}
                alt="Custom promotional tumblers - pink, black, and teal"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KrislHero;