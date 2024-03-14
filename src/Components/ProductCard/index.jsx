import Link from "next/link";
import style from "./ProductCard.module.scss";

const ProductCard = ({ name, price, brand, oldprice = "0" }) => {
  return (
    <Link href="#" className={style["product-card"]}>
      <div className={style["product-card__img-wrapper"]}>
        <img src="/images/category-man.jpg" alt="" />
      </div>
      <div className={style["product-card__text-wrapper"]}>
        <div className={style["product-card__price-wrapper"]}>
          {oldprice !== "0" ? (
            <p className={style["product-card__oldprice"]}>{oldprice} ₽</p>
          ) : null}
          <p className={style["product-card__price"]}>{price} ₽</p>
        </div>
        <p className={style["product-card__brand"]}>{brand}</p>
        <p className={style["product-card__name"]}>{name}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
