const KrislBrandGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop&crop=center",
      alt: "Promotional items in office setting",
      title: "Office Essentials"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center",
      alt: "Person using branded drinkware",
      title: "Lifestyle Products"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&crop=center",
      alt: "Corporate branded apparel",
      title: "Corporate Wear"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center",
      alt: "Promotional bags and accessories",
      title: "Accessories"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      alt: "Tech accessories with branding",
      title: "Tech Items"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
      alt: "Event promotional materials",
      title: "Event Materials"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Gallery Grid - No header to match reference */}

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KrislBrandGallery;
