import { Button } from "@/components/ui/button";

const KrislHero = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              CUSTOM PROMOTIONAL ITEMS
              <span className="block text-orange-500">WITH YOUR LOGO</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Boost your brand with high-quality promotional products. 
              From drinkware to apparel, we customize everything with your logo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              >
                START YOUR ORDER
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              >
                VIEW CATALOG
              </Button>
            </div>
          </div>

          {/* Right Content - Product Images */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <img 
                  src="/api/placeholder/200/250" 
                  alt="Pink tumbler"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="/api/placeholder/200/250" 
                  alt="Black tumbler"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="/api/placeholder/200/250" 
                  alt="Teal tumbler"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">24hr</div>
            <div className="text-gray-600">Rush Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">Free</div>
            <div className="text-gray-600">Setup & Artwork</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">10k+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KrislHero;