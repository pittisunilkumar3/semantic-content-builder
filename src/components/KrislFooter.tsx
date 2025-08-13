import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const KrislFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    // More comprehensive email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email.trim());
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Partner/Certification logos for top black section
  const partnerLogos = [
    { name: "ASI", logo: "/images/footer/partners/asi-logo.svg" },
    { name: "PPAI", logo: "/images/footer/partners/ppai-logo.svg" },
    { name: "SAGE", logo: "/images/footer/partners/sage-logo.svg" },
    { name: "4imprint", logo: "/images/footer/partners/4imprint-logo.svg" },
    { name: "Promotional Products Inc", logo: "/images/footer/partners/ppi-logo.svg" }
  ];

  const footerSections = {
    "CATEGORIES": [
      "Bags",
      "Drinkware",
      "Writing Instruments",
      "Technology",
      "Apparel",
      "Awards & Recognition"
    ],
    "QUICK LINKS": [
      "About",
      "Blog",
      "Contact",
      "Samples",
      "Art Guidelines",
      "Size Charts"
    ]
  };

  const paymentLogos = [
    { name: "Visa", logo: "/images/footer/payments/visa-logo.svg" },
    { name: "Mastercard", logo: "/images/footer/payments/mastercard-logo.svg" },
    
  ];

  const securityBadges = [
    { name: "SSL Secure", logo: "/images/footer/certifications/ssl-secure.svg" }
  ];

  return (
    <footer>
      {/* Top Black Section with Partner Logos */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 lg:space-x-12">
            {partnerLogos.map((partner, index) => (
              <img
                key={index}
                src={partner.logo}
                alt={partner.name}
                className="h-6 lg:h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content - Light Gray Background */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Logo and Info */}
            <div>
              <div className="text-2xl font-bold mb-6 text-gray-800">
                <span className="text-orange-500">K</span>risl
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Your trusted partner for high-quality promotional products that build lasting brand recognition.
              </p>
              <p className="text-gray-600 text-sm">
                Phone: 1-800-KRISL-US<br />
                Email: info@krisl.com
              </p>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">CATEGORIES</h4>
              <ul className="space-y-2">
                {footerSections.CATEGORIES.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">QUICK LINKS</h4>
              <ul className="space-y-2">
                {footerSections["QUICK LINKS"].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">SIGN UP FOR OUR NEWSLETTER</h4>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest updates on new products and exclusive offers
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter subscription
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-orange-500 text-sm"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !email.trim()}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white text-sm font-semibold py-2"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? "Subscribing..." : "SUBSCRIBE"}
                </Button>
              </form>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">SOCIAL MEDIA</h5>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-600 text-sm">
              © Promotional Products Industry. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
              {/* Payment Methods */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm">We Accept:</span>
                <div className="flex space-x-2">
                  {paymentLogos.map((payment, index) => (
                    <img
                      key={index}
                      src={payment.logo}
                      alt={payment.name}
                      className="h-5 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
              
              {/* Security Badges */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm">Security:</span>
                <div className="flex space-x-2">
                  {securityBadges.map((badge, index) => (
                    <img
                      key={index}
                      src={badge.logo}
                      alt={badge.name}
                      className="h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KrislFooter;