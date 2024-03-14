import Link from "next/link";
import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link href="/" className={style["logo"]}>
      <span className={style["logo__icon-wrapper"]}>
        <img src="/logo/1.png" alt="" />
      </span>
      <p>Abhudance</p>
    </Link>
  );
};

export default Logo;
