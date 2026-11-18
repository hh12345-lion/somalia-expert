import { PageHero } from "@/components/ui/PageHero";
import { sectionPhotos } from "@/lib/page-photos";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/ui/CTASection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getBlogBySlug, getAllBlogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { markdownToHtml } from "@/lib/markdown";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const base = createMetadata({
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  if (!post.image) return base;

  const imageUrl = `${SITE_URL}${post.image}`;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: [{ url: imageUrl, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof base.title === "string" ? base.title : post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();
  // Cross-link posts so each has more than one internal link (previously only from /blog).
  const morePosts = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          image: post.image ? `${SITE_URL}${post.image}` : undefined,
          inLanguage: "en-GB",
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: url,
          url,
        }}
      />
      <PageHero
        title={post.title}
        subtitle={post.description}
        photo={{ src: post.image || sectionPhotos.blog.src, alt: post.image ? post.imageAlt || post.title : sectionPhotos.blog.alt }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Article" }]}
      />

      <article className="prose-content mx-auto max-w-3xl border-t border-mistline px-4 py-14 sm:px-6 lg:px-8">
        <p className="not-prose mb-8 flex flex-wrap items-center gap-x-3 font-display text-sm text-slate">
          <time dateTime={post.updated || post.date} className="font-semibold text-navy">
            {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-peach" />
          <span>{post.readingTime}</span>
        </p>
        <div className="mt-10" dangerouslySetInnerHTML={{ __html: html }} />

        {morePosts.length > 0 ? (
          <nav aria-labelledby="more-from-blog" className="mt-12">
            <h2 id="more-from-blog" className="text-lg font-semibold">
              More from the blog
            </h2>
            <ul className="mt-4 space-y-3">
              {morePosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="font-semibold text-[#29324D] hover:text-[#1C2338]">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <p className="not-prose mt-12 border-t border-[#C6CCDC] pt-8 text-sm">
          <Link href="/blog" className="font-semibold text-[#29324D] hover:text-[#1C2338]">
            Back to the blog
          </Link>
          <span className="mx-3 text-[#4B5168]/50">·</span>
          <Link href="/how-to-instruct" className="font-semibold text-[#29324D] hover:text-[#1C2338]">
            How to instruct
          </Link>
        </p>
      </article>
      <CTASection />
    </>
  );
}
