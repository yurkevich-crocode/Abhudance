import Link from "next/link";
import Container from "../Container";
import Logo from "../Logo";
import style from "./Footer.module.scss";

const Footer = ({ color }) => {
  return (
    <footer
      className={
        color === "black"
          ? `${style["footer"]} ${style["footer--black"]}`
          : `style["footer"]`
      }
    >
      <div className={style["footer__top"]}>
        <Container>
          <div className={style["footer__wrapper"]}>
            <Logo />
            <div className={style["footer__nav-wrapper"]}>
              <div className={style["footer__search-wrapper"]}>
                <input
                  type="text"
                  className={style["footer__search"]}
                  placeholder="Поиск..."
                />
                <Link href="#">
                  <span className={style["footer__search-icon"]}>
                    <img src="/icons/search.svg" alt="" />
                  </span>
                </Link>
              </div>
              <div className={style["footer__nav-item"]}>
                <p className={style["footer__item-name"]}>Каталог</p>
                <ul className={style["footer__subitems"]}>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Кроссовки</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Кеды</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Спортивная обувь</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Мужские</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Женские</Link>
                  </li>
                </ul>
              </div>
              <div className={style["footer__nav-item"]}>
                <p className={style["footer__item-name"]}>Информация</p>
                <ul className={style["footer__subitems"]}>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">О нас</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Доставка</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Обмен и возврат</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Гарантия</Link>
                  </li>
                  <li className={style["footer__subitem"]}>
                    <Link href="#">Политика конфиденциальности</Link>
                  </li>
                </ul>
              </div>
              <div className={style["footer__nav-item"]}>
                <p className={style["footer__item-name"]}>Контакты</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={style["footer__bottom"]}>
        <Container>
          <span className={style["footer__copyright"]}>
            ©{new Date().getFullYear()}. Все права защищены.
          </span>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
