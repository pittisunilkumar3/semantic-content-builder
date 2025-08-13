import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import KrislProductCard from "./KrislProductCard";
import greenBottle from "@/assets/green-bottle.jpg";
import paperBag from "@/assets/paper-bag.jpg";
import blackMug from "@/assets/black-mug.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
  description: string;
}

const KrislFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Eco Water Bottle",
      category: "Drinkware",
      price: "$18.99",
      image: greenBottle,
      colors: ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0", "#F44336"],
      description: "BPA-free water bottle with custom branding"
    },
    {
      id: 2,
      name: "Canvas Tote Bag",
      category: "Bags",
      price: "$12.99",
      image: paperBag,
      colors: ["#8D6E63", "#FF5722", "#607D8B"],
      description: "Heavy-duty canvas tote with custom print"
    },
    {
      id: 3,
      name: "Travel Coffee Mug",
      category: "Drinkware",
      price: "$16.99",
      image: blackMug,
      colors: ["#424242", "#8BC34A", "#E91E63", "#FF9800"],
      description: "Insulated travel mug with leak-proof lid"
    },
    {
      id: 4,
      name: "Custom Polo Shirt",
      category: "Apparel",
      price: "$29.99",
      image: "/api/placeholder/400/400",
      colors: ["#2E7D32", "#1976D2", "#C62828", "#F57C00"],
      description: "Premium polo shirt with embroidered logo"
    }
  ];

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      setProducts(featuredProducts);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">BUILD A STRONG REPUTATION</h2>
            <p className="text-gray-600">Loading featured products...</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 rounded-lg h-64 mb-4"></div>
                <div className="bg-gray-300 rounded h-4 mb-2"></div>
                <div className="bg-gray-300 rounded h-4 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
            BUILD A STRONG REPUTATION
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <KrislProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KrislFeaturedProducts;