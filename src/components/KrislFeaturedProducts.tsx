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
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&crop=center",
      colors: ["#22c55e", "#3b82f6", "#f59e0b", "#9c27b0", "#ef4444"],
      description: "BPA-free water bottle with custom branding"
    },
    {
      id: 2,
      name: "Canvas Tote Bag",
      category: "Bags",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
      colors: ["#92400e", "#f59e0b", "#10b981", "#ef4444"],
      description: "Heavy-duty canvas tote with custom print",
      isOnSale: true
    },
    {
      id: 3,
      name: "Travel Coffee Mug",
      category: "Drinkware",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=400&fit=crop&crop=center",
      colors: ["#1f2937", "#22c55e", "#ec4899", "#f59e0b"],
      description: "Insulated travel mug with leak-proof lid"
    },
    {
      id: 4,
      name: "Custom Polo Shirt",
      category: "Apparel",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
      colors: ["#1f2937", "#ffffff", "#3b82f6", "#ef4444"],
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
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            BUILD A STRONG REPUTATION
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <KrislProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KrislFeaturedProducts;