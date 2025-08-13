import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  colors: string[];
  description: string;
  isOnSale?: boolean;
}

interface KrislProductCardProps {
  product: Product;
}

const KrislProductCard = ({ product }: KrislProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group relative overflow-hidden border-0 shadow-md hover:shadow-xl focus-within:shadow-xl transition-all duration-300 bg-white focus-within:ring-2 focus-within:ring-orange-400 focus-within:ring-offset-2">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        {/* SALE Badge */}
        {product.isOnSale && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 text-xs">
              SALE
            </Badge>
          </div>
        )}

        <img
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full h-10 w-10"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              aria-label={isLiked ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            >
              <Heart
                className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full h-10 w-10"
              aria-label={`Quick view ${product.name}`}
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full h-10 w-10"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Sale Badge */}
        {product.id <= 4 && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3 bg-red-500 text-white font-semibold px-2 py-1"
          >
            SALE
          </Badge>
        )}
      </div>

      <CardContent className="p-4 lg:p-6">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 text-base lg:text-lg leading-tight">
          {product.name}
        </h3>

        {/* Color Options */}
        <div className="flex items-center space-x-2 mb-4">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`w-6 h-6 lg:w-7 lg:h-7 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 ${
                selectedColor === color
                  ? 'border-gray-800 scale-110 shadow-md'
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
              aria-pressed={selectedColor === color}
            />
          ))}
        </div>

        {/* Price */}
        <div className="text-xl lg:text-2xl font-bold text-gray-900">
          {product.price}
        </div>
      </CardContent>
    </Card>
  );
};

export default KrislProductCard;