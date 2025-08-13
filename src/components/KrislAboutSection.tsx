import campingCoffee from "@/assets/camping-coffee.jpg";

const KrislAboutSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={campingCoffee}
              alt="Person camping with promotional drinkware"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Right Content - Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gray-900">
              ABOUT US
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
              At Krisl, we specialize in creating high-quality promotional products that help 
              businesses build strong brand recognition and lasting customer relationships. 
              Our commitment to excellence and customer satisfaction has made us a trusted 
              partner for companies of all sizes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
              With over 15 years of experience in the promotional products industry, we understand 
              the importance of quality, timely delivery, and exceptional service. Our team works 
              closely with each client to ensure their promotional campaigns achieve maximum impact.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
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