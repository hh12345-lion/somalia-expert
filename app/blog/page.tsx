import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog | Somalia Expert",
  description:
    "Articles for solicitors on Somalia expert reports, CPIN gaps, case-specific country evidence, and instructing a Somalia country expert.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-GB",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
          })),
        }}
      />
      <PageShell
        title="Somalia Expert Blog"
        subtitle="Practitioner-facing articles on Somalia country evidence, CPIN analysis, and instructing a Somalia expert witness."
        breadcrumbs={crumbs}
      >
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/#enquire"
            className="inline-flex min-h-[48px] items-center justify-center bg-[#7A3048] px-7 text-sm font-semibold text-white hover:bg-[#5E2438]"
          >
            Enquire
          </Link>
          <Link
            href="/guides"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#D4D8DE] bg-white px-7 text-sm font-semibold text-[#1C1F24] hover:border-[#7A3048] hover:text-[#7A3048]"
          >
            Browse guides
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-[#4A5058]">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug} className="overflow-hidden border border-[#D4D8DE] bg-white">
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#4A5058]">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span className="normal-case tracking-normal">{post.readingTime}</span>
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold text-[#1C1F24]">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#7A3048]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A5058]">{post.description}</p>
                  <p className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-[#7A3048] hover:text-[#5E2438]"
                    >
                      Read article →
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageShell>
    </>
  );
}
