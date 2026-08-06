import PageHeader from "@/components/ui/PageHeader";
import ProductCard from "@/components/products/ProductCard";
import CompatPanel from "@/components/products/CompatPanel";
import { products } from "@/content/products";
import { buildMetadata } from "@/lib/metadata";
import styles from "./products.module.css";

export const metadata = buildMetadata({
  title: "Products — NanoPrep",
  description:
    "A complete corrosion protection system — from surface preparation to long-term UV and weather resistance — without the cost and disruption of abrasive blasting.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The NanoPrep System"
        title="Our"
        highlight="Products"
        sub="A complete corrosion protection system — from surface preparation to long-term UV and weather resistance — without the cost and disruption of abrasive blasting."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <section className={styles.section}>
        <div className={styles.inner}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
          <CompatPanel />
        </div>
      </section>
    </>
  );
}
