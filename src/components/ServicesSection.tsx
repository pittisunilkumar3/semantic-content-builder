import { Card, CardContent } from "@/components/ui/card";
import { Palette, Truck, Clock, Award, Users, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Our expert designers will create stunning artwork that perfectly represents your brand identity.",
      features: ["Logo placement", "Color matching", "Multiple formats"]
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get your promotional items quickly with our streamlined production process and express shipping.",
      features: ["48-hour rush", "Real-time tracking", "Guaranteed delivery"]
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We ensure every product meets our high-quality standards with a 100% satisfaction guarantee.",
      features: ["Premium materials", "Quality control", "Defect protection"]
    },
    {
      icon: Users,
      title: "Bulk Ordering",
      description: "Save more with volume discounts. Perfect for large events, corporate gifts, and marketing campaigns.",
      features: ["Volume discounts", "Flexible quantities", "Bulk packaging"]
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders over $100. We deliver nationwide with tracking included.",
      features: ["Free over $100", "Nationwide delivery", "Insured shipping"]
    },
    {
      icon: Zap,
      title: "Easy Ordering",
      description: "Simple online ordering process with instant quotes and easy artwork upload.",
      features: ["Instant quotes", "Easy upload", "Order tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose PromoGear?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We make promotional product ordering simple, fast, and reliable. 
            Here's what makes us the preferred choice for businesses everywhere.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-card"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of businesses who trust us with their promotional needs. 
            Get a free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              View Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;