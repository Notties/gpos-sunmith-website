import { Link } from "@/i18n/routing";

export default async function ProductPage() {
  const products = [
    { id: "1", name: "Product 1" },
    { id: "2", name: "Product 2" },
    { id: "3", name: "Product 3" },
  ];

  return (
    <div>
      <h2>Products page</h2>
      <p>Select a product to view details.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={{
                pathname: "/product/[...slug]",
                params: { slug: [product.id] },
              }}
            >
              - {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
