import Header from "@/Components/Header";
import Banner from "@/Sections/(landing)/Banner";
import Category from "@/Sections/(landing)/Category";
import Hero from "@/Sections/(landing)/Hero";
import TopProducts from "@/Sections/(landing)/TopProducts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Category />
        <TopProducts />
        <Banner />
      </main>
    </>
  );
}
