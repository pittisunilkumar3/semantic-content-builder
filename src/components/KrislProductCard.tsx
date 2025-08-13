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
}

interface KrislProductCardProps {
  product: Product;
}

const KrislProductCard = ({ product }: KrislProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              <Heart 
                className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} 
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sale Badge */}
        {product.id <= 4 && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 right-2 bg-red-500 text-white"
          >
            SALE
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">
          {product.name}
        </h3>

        {/* Color Options */}
        <div className="flex items-center space-x-1 mb-3">
          {product.colors.map((color, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                selectedColor === color 
                  ? 'border-gray-800 scale-110' 
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>

        {/* Price */}
        <div className="text-lg font-semibold text-gray-900">
          {product.price}
        </div>
      </CardContent>
    </Card>
  );
};

export default KrislProductCard;