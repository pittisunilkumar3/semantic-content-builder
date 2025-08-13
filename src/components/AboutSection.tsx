import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Globe, Star } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: Star, number: "4.9/5", label: "Customer Rating" },
    { icon: CheckCircle, number: "1M+", label: "Products Delivered" }
  ];

  const benefits = [
    "15+ years of promotional product expertise",
    "In-house design team for custom artwork",
    "Quality guaranteed on every order",
    "Competitive pricing with volume discounts",
    "Eco-friendly and sustainable options available",
    "Dedicated customer support team"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Side  Content*/}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                About PromoGear
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
                Your Trusted Partner for 
                <span className="text-primary block">Promotional Excellence</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Since 2008, PromoGear has been helping businesses of all sizes enhance their brand 
              visibility through high-quality promotional products. From startups to Fortune 500 
              companies, we've delivered exceptional results that drive brand recognition and customer loyalty.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us a leader 
              in the promotional products industry. We combine cutting-edge technology with 
              traditional craftsmanship to create products that truly represent your brand.
            </p>

            

            {/* Bene List */}



            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Stats Side */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-background rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>



            {/* Testimonial Card */}



            <div className="bg-background rounded-xl p-6 shadow-lg mt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "PromoGear has been our go-to partner for promotional products for over 5 years. 
                Their quality and service are unmatched!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Sarah Johnson</div>
                  <div className="text-muted-foreground text-xs">Marketing Director, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;