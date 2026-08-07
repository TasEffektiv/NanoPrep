import { notFound } from "next/navigation";
import DetailHero from "@/components/ui/DetailHero";
import FeatureStrip from "@/components/ui/FeatureStrip";
import ContentBlocks from "@/components/ui/ContentBlocks";
import { products, getProduct } from "@/content/products";
import { buildMetadata } from "@/lib/metadata";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <DetailHero
        tag="Product"
        title={product.heroTitle}
        sub={product.heroSub}
        image={product.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.breadcrumbLabel },
        ]}
        style={product.slug === "nanoprep" ? { minHeight: 300, height: 300 } : undefined}
      />
      <FeatureStrip items={product.featurePills} />
      <ContentBlocks blocks={product.blocks} cta={product.cta} />
    </>
  );
}
