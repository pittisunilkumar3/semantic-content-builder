import campingCoffee from "@/assets/camping-coffee.jpg";

const KrislAboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}


          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=center"
                alt="Person enjoying coffee with branded promotional items"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content - Text */}

          
          <div className="order-1 lg:order-2 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              ABOUT US
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
              At Krisl, we specialize in creating high-quality promotional products that help
              businesses build strong brand recognition and lasting customer relationships.
              Our commitment to excellence and customer satisfaction has made us a trusted
              partner for companies of all sizes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
              With over 15 years of experience in the promotional products industry, we understand
              the importance of quality, timely delivery, and exceptional service. Our team works
              closely with each client to ensure their promotional campaigns achieve maximum impact.
            </p>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
              From custom drinkware to branded apparel, we offer a comprehensive range of products
              that can be tailored to meet your specific marketing needs. Let us help you create
              promotional products that truly represent your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KrislAboutSection;