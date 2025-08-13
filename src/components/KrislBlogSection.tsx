import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const KrislBlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "PROMOTING SUSTAINABLE CORPORATE GIVEAWAYS",
      excerpt: "Learn how to choose eco-friendly promotional products that align with your company's sustainability goals.",
      image: "/api/placeholder/400/250",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "PROMOTING HIGH QUALITY CORPORATE GIVEAWAYS",
      excerpt: "Discover the key factors that make promotional products effective for brand building and customer retention.",
      image: "/api/placeholder/400/250", 
      date: "March 10, 2024"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            BLOG POSTS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest insights and tips for promotional marketing
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
          >
            VIEW ALL POSTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KrislBlogSection;