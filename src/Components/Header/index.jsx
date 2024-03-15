import Link from "next/link";
import Container from "../Container";
import Logo from "../Logo";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style["header"]}>
      <div className={style["header__top"]}>
        <Container>
          <div className={style["header__top-items"]}>
            <Link href="#">Каталог</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Гарантия</Link>
            <Link href="#">Доставка</Link>
          </div>
        </Container>
      </div>
      <div className={style["header__main"]}>
        <Container>
          <div className={style["header__wrapper"]}>
            <Logo />

            <div className={style["header__right-side"]}>
              <button className={style["header__login-btn"]}>
                <img src="/icons/login.svg" alt="" />
              </button>
              <button className={style["header__search-btn"]}>
                <img src="/icons/search.svg" alt="" />
              </button>
              <button className={style["header__categories-btn"]}>
                <span className={style["header__categories-icon"]} />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
