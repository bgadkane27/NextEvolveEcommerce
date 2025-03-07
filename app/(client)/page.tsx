import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";


export default function Home() {
  return (
    <div className="bg-[url('/back.svg')] bg-cover bg-center bg-no-repeat w-full">
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}
