const KrislAboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              ABOUT US
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Krisl, we specialize in creating high-quality promotional products that help 
              businesses build strong brand recognition and lasting customer relationships. 
              Our commitment to excellence and customer satisfaction has made us a trusted 
              partner for companies of all sizes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 15 years of experience in the promotional products industry, we understand 
              the importance of quality, timely delivery, and exceptional service. Our team works 
              closely with each client to ensure their promotional campaigns achieve maximum impact.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From custom drinkware to branded apparel, we offer a comprehensive range of products 
              that can be tailored to meet your specific marketing needs. Let us help you create 
              promotional products that truly represent your brand.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Product Options</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">10k+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">24hr</div>
                <div className="text-gray-600 text-sm">Rush Service</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Team working on promotional products"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KrislAboutSection;