import Container from "@/Components/Container";
import style from "./TopProducts.module.scss";
import SectionTitle from "@/Components/SectionTitle";
import ProductCard from "@/Components/ProductCard";

const TopProducts = () => {
  return (
    <section className={style["top-products"]}>
      <Container>
        <div className={style["top-products__wrapper"]}>
          <SectionTitle>Топ продаж</SectionTitle>
          <div className={style["top-products__items"]}>
            <ProductCard name={"SB Dunk Low"} brand={"Nike"} price={"4500"} />
            <ProductCard
              name={"SB Dunk Low"}
              brand={"Nike"}
              price={"4500"}
              oldprice={"8000"}
            />
            <ProductCard
              name={"SB Dunk Low"}
              brand={"Nike"}
              price={"4500"}
              oldprice={"12000"}
            />
            <ProductCard name={"SB Dunk Low"} brand={"Nike"} price={"4500"} />
            <ProductCard name={"SB Dunk Low"} brand={"Nike"} price={"4500"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopProducts;
