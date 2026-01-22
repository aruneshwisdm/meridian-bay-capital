"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, User, Mail } from "lucide-react";
import { Card, Button, Badge, Input } from "@/components/ui";
import { articles, articleCategories, type ArticleCategory } from "@/lib/data/insights";
import { formatDate } from "@/lib/utils/formatting";
import { cn } from "@/lib/utils/cn";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | "All">("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-ocean text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="container-main relative z-10 text-center">
          <h1 className="font-heading font-bold text-display-md md:text-display-lg mb-6">
            Market Insights & Resources
          </h1>
          <p className="text-body-lg md:text-heading-lg text-white/90 max-w-2xl mx-auto">
            Expert analysis and practical guidance to help you make informed financial decisions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={cn(
                    "px-4 py-2 rounded-lg font-heading font-medium text-body-sm transition-colors",
                    selectedCategory === "All"
                      ? "bg-primary text-white"
                      : "bg-white text-text-secondary hover:bg-neutral-100 border border-neutral-200"
                  )}
                >
                  All
                </button>
                {articleCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-lg font-heading font-medium text-body-sm transition-colors",
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-white text-text-secondary hover:bg-neutral-100 border border-neutral-200"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/insights/${article.slug}`}>
                      <Card variant="hover" className="h-full group">
                        {/* Image placeholder */}
                        <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 to-primary-50 mb-4 -mx-6 -mt-6">
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-primary-200 font-heading font-bold text-lg">
                              {article.category}
                            </span>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <Badge variant="primary" size="sm" className="mb-3">
                          {article.category}
                        </Badge>

                        {/* Title */}
                        <h2 className="font-heading font-bold text-heading-lg text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-body-sm text-text-secondary mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-caption text-text-tertiary">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <span>{formatDate(article.date, { format: "short" })}</span>
                        </div>
                      </Card>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-text-secondary">No articles found in this category.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter Signup */}
              <Card className="bg-primary-50 border-0">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="font-heading font-semibold text-heading-md text-text">
                    Stay Informed
                  </h3>
                </div>
                <p className="text-body-sm text-text-secondary mb-4">
                  Get our market insights and planning tips delivered to your inbox monthly.
                </p>
                <form className="space-y-3">
                  <Input placeholder="Enter your email" type="email" />
                  <Button variant="primary" className="w-full" size="sm">
                    Subscribe
                  </Button>
                </form>
                <p className="text-caption text-text-tertiary mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </Card>

              {/* Popular Articles */}
              <Card>
                <h3 className="font-heading font-semibold text-heading-md text-text mb-4">
                  Popular Articles
                </h3>
                <div className="space-y-4">
                  {articles.slice(0, 3).map((article) => (
                    <Link
                      key={article.slug}
                      href={`/insights/${article.slug}`}
                      className="block group"
                    >
                      <h4 className="text-body-sm font-medium text-text group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-caption text-text-tertiary mt-1">
                        {article.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Categories */}
              <Card>
                <h3 className="font-heading font-semibold text-heading-md text-text mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {articleCategories.map((category) => {
                    const count = articles.filter((a) => a.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="flex items-center justify-between w-full py-2 text-body-sm text-text-secondary hover:text-primary transition-colors"
                      >
                        <span>{category}</span>
                        <Badge variant="accent" size="sm">
                          {count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
