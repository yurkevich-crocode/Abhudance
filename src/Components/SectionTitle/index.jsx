import style from "./SectionTitle.module.scss";

const SectionTitle = ({ children }) => {
  return <p className={style["section-title"]}>{children}</p>;
};

export default SectionTitle;
