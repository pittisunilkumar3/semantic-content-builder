const KrislLifestyleSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">


          {/* Left Image - Person with Sunglasses */}



          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&crop=center"
                alt="Person wearing sunglasses with promotional items"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Text Overlay */}


            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <div className="p-4 lg:p-6 text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-2">
                  PREMIUM PROMOTIONAL ITEMS
                </h3>
                <p className="text-sm lg:text-base opacity-90">
                  High-quality products that represent your brand with style and professionalism.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - Person in Plaid Shirt */}



          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=450&fit=crop&crop=center"
                alt="Person in plaid shirt with branded items"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>


            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <div className="p-4 lg:p-6 text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-2">
                  CUSTOM BRANDED APPAREL
                </h3>
                <p className="text-sm lg:text-base opacity-90">
                  Comfortable, stylish clothing options perfect for corporate events and team building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KrislLifestyleSection;
