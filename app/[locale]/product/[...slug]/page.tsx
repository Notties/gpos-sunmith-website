import Link from "next/link";
import { redirect } from "next/navigation";
export default async function ProductDetails({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = (await params).slug;

  console.log("slug: ", slug);

  if (slug.length >= 5) {
    redirect(`/product`);
  }

  const generateNextSub = (slug: string[]) => {
    const lastSlugPart = slug[slug.length - 1];
    const nextLevel = parseInt(lastSlugPart.split(".").pop() || "0") + 1;
    return `${lastSlugPart}.${nextLevel}`;
  };
  const nextSub = generateNextSub(slug);

  const url = `/product/${slug.join("/")}/${nextSub}`;

  return (
    <div>
      <Link href={`/product`}>{"<- Go to product page"}</Link>
      <h2>Product Details</h2>
      <p>{`/product/${slug.join("/")}`}</p>
      <p>
        <Link href={url}>
          nextpage {"->"} {nextSub}
        </Link>
      </p>
    </div>
  );
}
