import Container from "@/Components/Container";
import style from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={style["banner"]}>
      <Container>
        <div className={style["banner__wrapper"]}>
          <div className={style["banner__img-wrapper"]}>
            <img src="/images/banner.jpg" alt="" />
          </div>
          <p className={style["banner__text"]}>
            Доверьтесь нам, откройтие мир выгодных цен и быстрой доставки
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
