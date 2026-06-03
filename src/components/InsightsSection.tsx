import { ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "How AI Automation Saves Small Businesses Hours Every Week",
    summary: "Discover practical ways to eliminate repetitive tasks, reduce manual work, and free up your team to focus on strategic growth.",
    category: "Automation",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442d019cecf8e5c5b4ef1ea9d123?w=800&h=450&fit=crop",
    slug: "ai-automation-saves-hours",
  },
  {
    id: 2,
    title: "The Anatomy of a High-Converting Business Website",
    summary: "Learn the key elements that separate websites that generate leads from those that just exist. Psychology, design, and strategy combined.",
    category: "Design",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    slug: "high-converting-website-anatomy",
  },
  {
    id: 3,
    title: "5 Costly Website Mistakes Most Businesses Make",
    summary: "Avoid these common pitfalls that drain budget and kill conversions. From technical issues to UX failures—we cover what to avoid.",
    category: "Web Design",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    slug: "costly-website-mistakes",
  },
  {
    id: 4,
    title: "Choosing the Right Tech Stack for Your Business Website",
    summary: "Frontend, backend, hosting, and tools—we break down the decisions that affect your site's performance, maintenance, and scale.",
    category: "Technology",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop",
    slug: "tech-stack-guide",
  },
  {
    id: 5,
    title: "When Should a Business Invest in Automation?",
    summary: "Is automation right for your business? We break down the signs, ROI calculations, and exactly when to make the investment.",
    category: "Strategy",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    slug: "when-to-invest-automation",
  },
];

const categoryColors: Record<string, string> = {
  Automation: "bg-purple-100 text-purple-700 border-purple-200",
  Design: "bg-orange-100 text-orange-700 border-orange-200",
  "Web Design": "bg-blue-100 text-blue-700 border-blue-200",
  Technology: "bg-green-100 text-green-700 border-green-200",
  Strategy: "bg-pink-100 text-pink-700 border-pink-200",
};

export default function InsightsSection() {
  return (
    <section className="relative border-t border-border bg-gradient-warm px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Knowledge</span>
          </div>
          <h2 className="font-brand text-4xl font-extrabold leading-tight lg:text-5xl">
            <span className="text-gradient-brand">Insights</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Thoughts, strategies, and practical guides on websites, automation, AI, and digital growth.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-glow hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-card/70">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold border ${
                      categoryColors[article.category] || "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Meta */}
                <div className="mb-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {article.readTime}
                </div>

                {/* Title */}
                <h3 className="font-brand text-lg font-extrabold leading-tight text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm leading-6 text-muted-foreground mb-6 line-clamp-2 flex-1">
                  {article.summary}
                </p>

                {/* Link */}
                <a
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Featured/Curated Message */}
        <div className="mb-16 rounded-2xl border border-border bg-card p-8 text-center shadow-card lg:p-12">
          <p className="text-foreground">
            <span className="font-semibold">Curated insights</span> on building high-performing digital products, automating business workflows, and leveraging AI for growth. Written for ambitious founders and decision-makers.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button
            asChild
            variant="brand"
            size="lg"
            className="rounded-full px-8"
          >
            <a href="/insights">
              Explore All Insights
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Future-ready note (hidden, for development) */}
        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground">
            💡 Future: Search, category filtering, newsletter signup, and dynamic content loading
          </p>
        </div>
      </div>
    </section>
  );
}
