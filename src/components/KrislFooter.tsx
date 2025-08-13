import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const KrislFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

  const footerSections = {
    "CATEGORIES": [
      "Drinkware",
      "Apparel", 
      "Bags & Totes",
      "Tech Accessories",
      "Office Supplies",
      "Custom Items"
    ],
    "QUICK LINKS": [
      "Build Your Kit",
      "Samples",
      "Size Guides",
      "Art Templates",
      "Shipping Info",
      "Returns"
    ],
    "COMPANY": [
      "About Us",
      "Contact",
      "Careers",
      "Press",
      "Blog",
      "Reviews"
    ],
    "SOCIAL LINKS": [
      "Facebook",
      "Twitter", 
      "Instagram",
      "LinkedIn",
      "YouTube",
      "Pinterest"
    ]
  };

  const paymentLogos = [
    { name: "Visa", logo: "/api/placeholder/40/25" },
    { name: "Mastercard", logo: "/api/placeholder/40/25" },
    { name: "American Express", logo: "/api/placeholder/40/25" },
    { name: "PayPal", logo: "/api/placeholder/40/25" },
    { name: "Apple Pay", logo: "/api/placeholder/40/25" }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              SIGN UP FOR OUR NEWSLETTER
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest updates on new products and exclusive offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400 py-3"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold"
              >
                {isSubmitting ? "Subscribing..." : "SUBSCRIBE"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold mb-6">
              <span className="text-white">K</span><span className="text-orange-400">risl</span>
            </div>
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              Your trusted partner for high-quality promotional products that build lasting brand recognition.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">1-800-KRISL-US</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">info@krisl.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">123 Business Ave, City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-6 text-base">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-400 text-base transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 text-base font-medium">We Accept:</span>
              <div className="flex space-x-3">
                {paymentLogos.map((payment, index) => (
                  <img
                    key={index}
                    src={payment.logo}
                    alt={payment.name}
                    className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 text-base font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-base">
            <div className="text-gray-400">
              © 2024 Krisl. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KrislFooter;