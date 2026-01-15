import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { NEWS_ITEMS } from "@/components/news/news-data";
import CustomBreadcrumb from "@/tools/CustomBreadcrumb";
import PageLayout from "@/tools/PageLayout";
import { notFound } from "next/navigation";

const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const newsItem = NEWS_ITEMS.find((item) => item.id === id);

  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <CustomBreadcrumb
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "News",
            href: "/news",
          },
          {
            name: newsItem.title,
            isCurrent: true,
          },
        ]}
      />
      <PageLayout paddingSize="small">
        <article className="space-y-6">
          <header className="space-y-4">
            <div className="flex items-center flex-wrap gap-3 text-[11px] text-muted-foreground">
              <Badge
                variant="outline"
                className="text-[10px] font-semibold rounded-full px-2 py-0.5 border-primary/40 text-primary"
              >
                {newsItem.category}
              </Badge>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {newsItem.publishedAt}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {newsItem.time}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              {newsItem.title}
            </h1>
          </header>

          <div className="relative w-full h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover"
            />
          </div>

          <section className="space-y-4 text-sm md:text-base text-foreground leading-relaxed">
            <p className="font-medium text-muted-foreground">{newsItem.summary}</p>
            <p>
              Malo Africa is building a trusted marketplace that connects buyers,
              sellers, and service providers across Zambia. This story is part of
              our ongoing updates about how the platform is growing and what it
              means for local communities.
            </p>
            <p>
              As the ecosystem expands, we continue focusing on reliability,
              faster delivery, and better discovery for everyday products and
              services. Each update you read here reflects feedback from
              customers, merchants, and partners using the platform in their
              daily lives.
            </p>
          </section>
        </article>
      </PageLayout>
    </>
  );
};

export default NewsDetailPage;
