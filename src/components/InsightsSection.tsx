import { ArrowUpRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    title: "How AI Automation Saves Businesses Hours Every Week",
    summary: "Eliminate repetitive tasks and free up your team to focus on growth.",
    category: "Automation",
    readTime: "8 min",
    slug: "ai-automation-saves-hours",
  },
  {
    id: 2,
    title: "The Anatomy of a High-Converting Website",
    summary: "Learn what separates websites that generate leads from those that don't.",
    category: "Design",
    readTime: "10 min",
    slug: "high-converting-website",
  },
  {
    id: 3,
    title: "Choosing Your Tech Stack: A Strategic Guide",
    summary: "Frontend, backend, hosting — decisions that affect performance and scale.",
    category: "Technology",
    readTime: "12 min",
    slug: "tech-stack-guide",
  },
  {
    id: 4,
    title: "When Should You Invest in Automation?",
    summary: "Signs, ROI calculations, and exactly when to make the investment.",
    category: "Strategy",
    readTime: "9 min",
    slug: "when-to-automate",
  },
];

const categoryColors: Record<string, string> = {
  Automation: "bg-purple-100/50 text-purple-700 border-purple-200/50",
  Design: "bg-orange-100/50 text-orange-700 border-orange-200/50",
  Technology: "bg-green-100/50 text-green-700 border-green-200/50",
  Strategy: "bg-pink-100/50 text-pink-700 border-pink-200/50",
};

const CAL = "https://cal.com/threxa/design-audit";

export default function InsightsSection() {
  return (
    <section id="insights" className="relative border-t border-border bg-gradient-warm px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Knowledge
              </span>
            </div>
            <h2 className="font-brand text-3xl font-extrabold lg:text-4xl">
              <span className="text-gradient-brand">Insights</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full hidden md:inline-flex"
          >
            <a href="/insights">
              View All
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Articles Grid - 2x2 */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          {articles.map((article, idx) => (
            <a
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/30 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-md hover:-translate-y-0.5 opacity-0 translate-y-6 animate-in"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {/* Category Badge */}
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    categoryColors[article.category] ||
                    "bg-gray-100/50 text-gray-700 border-gray-200/50"
                  }`}
                >
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-brand text-lg font-extrabold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                {article.summary}
              </p>

              {/* Link */}
              <div className="text-sm font-semibold text-primary group-hover:gap-1 flex items-center gap-0 transition-all">
                Read more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA - Mobile and fallback */}
        <div className="flex justify-center md:hidden">
          <Button
            asChild
            variant="brand"
            size="sm"
            className="rounded-full"
          >
            <a href="/insights">
              Explore All Insights
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
