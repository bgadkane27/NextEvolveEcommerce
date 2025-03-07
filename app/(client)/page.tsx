import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";


export default function Home() {
  return (
    <div className="bg-[url('/back.svg')] bg-cover bg-center bg-no-repeat min-h-screen w-full">
      <Container className="py-10">
        <HomeBanner />
      </Container>
    </div>
  );
}
