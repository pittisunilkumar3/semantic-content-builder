import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, ShoppingCart, User, Heart } from "lucide-react";

const KrislHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-gray-800 py-2 hidden md:block">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <span>FREE SHIPPING ON ORDERS $50+</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">CONTACT</a>
              <a href="#" className="hover:text-orange-400 transition-colors">HELP</a>
              <a href="#" className="hover:text-orange-400 transition-colors">ACCOUNT</a>
            </div>
          </div>
        </div>

        {/* Main Header */}




        <div className="flex h-16 items-center justify-between">

          {/* Logo */}

          <div className="flex items-center space-x-2">
            <div className="text-2xl lg:text-3xl font-bold">
              <span className="text-white">K</span><span className="text-orange-400">risl</span>
            </div>
          </div>

          {/* Desktop Navigation */}


          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">PRODUCTS</a>
            <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">TEMPLATES</a>
            <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">QUICK LINKS</a>
            <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">BLOG</a>
            <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">ABOUT US</a>
            <a href="#" className="text-sm font-medium hover:text-orange-400 transition-colors">SELL ON KRISL</a>
          </nav>

          {/* Desktop Actions */}


          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-48 lg:w-64 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-400 hover:bg-gray-900 min-h-[44px] min-w-[44px]" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-400 hover:bg-gray-900 min-h-[44px] min-w-[44px]" aria-label="User account">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-orange-400 hover:bg-gray-900 min-h-[44px] min-w-[44px]" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}


          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-gray-900 focus:ring-2 focus:ring-orange-400"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}

        
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-800" role="navigation" aria-label="Mobile navigation menu">
            <div className="py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-400"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                <a href="#" className="block py-3 px-4 text-sm font-medium hover:text-orange-400 hover:bg-gray-900 rounded transition-colors">PRODUCTS</a>
                <a href="#" className="block py-3 px-4 text-sm font-medium hover:text-orange-400 hover:bg-gray-900 rounded transition-colors">TEMPLATES</a>
                <a href="#" className="block py-3 px-4 text-sm font-medium hover:text-orange-400 hover:bg-gray-900 rounded transition-colors">QUICK LINKS</a>
                <a href="#" className="block py-3 px-4 text-sm font-medium hover:text-orange-400 hover:bg-gray-900 rounded transition-colors">BLOG</a>
                <a href="#" className="block py-3 px-4 text-sm font-medium hover:text-orange-400 hover:bg-gray-900 rounded transition-colors">ABOUT US</a>
                <a href="#" className="block py-3 px-4 text-sm font-medium hover:text-orange-400 hover:bg-gray-900 rounded transition-colors">SELL ON KRISL</a>
              </nav>

              {/* Mobile Actions */}
              <div className="flex space-x-2 pt-4 border-t border-gray-800">
                <Button variant="ghost" className="flex-1 text-white hover:text-orange-400 hover:bg-gray-900">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="flex-1 text-white hover:text-orange-400 hover:bg-gray-900">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button variant="ghost" className="flex-1 text-white hover:text-orange-400 hover:bg-gray-900">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default KrislHeader;