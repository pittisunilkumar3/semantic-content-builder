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
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            BLOG POSTS
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 lg:p-8">
                <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 font-semibold transition-colors"
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