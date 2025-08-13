import { Button } from "@/components/ui/button";
import heroTumblers from "@/assets/hero-tumblers.jpg";

const KrislHero = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              CUSTOM PROMOTIONAL ITEMS
              <span className="block text-orange-500 mt-2">WITH YOUR LOGO</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Boost your brand with high-quality promotional products.
              From drinkware to apparel, we customize everything with your logo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors"
              >
                SHOP NOW
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-md transition-colors"
              >
                VIEW CATALOG
              </Button>
            </div>
          </div>

          {/* Right Content - 3 Tumblers matching reference */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Pink Tumbler */}
              <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=400&fit=crop&crop=center"
                  alt="Pink Custom Tumbler"
                  className="w-20 h-28 lg:w-24 lg:h-32 object-contain"
                  style={{ filter: 'hue-rotate(320deg) saturate(1.2)' }}
                />
              </div>

              {/* Black Tumbler - Center, slightly larger */}
              <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform scale-110 z-10">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=400&fit=crop&crop=center"
                  alt="Black Custom Tumbler"
                  className="w-20 h-28 lg:w-24 lg:h-32 object-contain"
                />
              </div>

              {/* Teal Tumbler */}
              <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=400&fit=crop&crop=center"
                  alt="Teal Custom Tumbler"
                  className="w-20 h-28 lg:w-24 lg:h-32 object-contain"
                  style={{ filter: 'hue-rotate(180deg) saturate(1.2)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KrislHero;