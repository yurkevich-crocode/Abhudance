import Container from "@/Components/Container";
import style from "./Category.module.scss";
import SectionTitle from "@/Components/SectionTitle";
import Link from "next/link";

const Category = () => {
  return (
    <section className={style["category"]}>
      <Container>
        <div className={style["category__wrapper"]}>
          <SectionTitle>Категории</SectionTitle>
          <div className={style["category__items"]}>
            <Link href="#" className={style["category__item"]}>
              <img src="/images/category-man.jpg" alt="" />
              <p className={style["category__item-name"]}>
                Мужская <br /> обувь
              </p>
            </Link>
            <Link href="#" className={style["category__item"]}>
              <img src="/images/category-woman.jpg" alt="" />
              <p className={style["category__item-name"]}>
                Женская <br /> обувь
              </p>
            </Link>
            <Link href="#" className={style["category__item"]}>
              <img src="/images/category-clothes.webp" alt="" />
              <p className={style["category__item-name"]}>
                {" "}
                Спортивная <br /> обувь
              </p>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Category;
