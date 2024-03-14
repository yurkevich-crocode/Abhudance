import Container from "@/Components/Container";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={style["hero"]}>
      <Container>
        <div className={style["hero__wrapper"]}>
          <div className={style["hero__text-wrapper"]}>
            <h1 className={style["hero__title"]}>
              В хорошей обуви можно попасть в&nbsp;хорошие места
            </h1>
          </div>
          <div className={style["hero__img-wrapper"]}>
            <img src="/images/Nike-Shoe.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
