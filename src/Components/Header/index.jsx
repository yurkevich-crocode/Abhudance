import Container from "../Container";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style["header"]}>
      <Container>
        <div className="header__wrapper">
          <h1>Abhudance</h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
