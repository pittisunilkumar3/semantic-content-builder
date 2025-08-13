import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const KrislBlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "PROMOTING SUSTAINABLE CORPORATE GIVEAWAYS",
      excerpt: "Learn how to choose eco-friendly promotional products that align with your company's sustainability goals and make a positive environmental impact.",
      image: "/api/placeholder/600/400",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "PROMOTING HIGH QUALITY CORPORATE GIVEAWAYS", 
      excerpt: "Discover the key factors that make promotional products effective for brand building, customer retention, and long-term marketing success.",
      image: "/api/placeholder/600/400",
      date: "March 10, 2024"
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
            BLOG POSTS
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white border-0">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 lg:p-6">
                <div className="text-xs lg:text-sm text-gray-500 mb-2 lg:mb-3">{post.date}</div>
                <h3 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3 text-gray-900 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm px-4 py-2"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KrislBlogSection;