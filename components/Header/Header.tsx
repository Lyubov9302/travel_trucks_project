import Link from "next/link";
import css from "./Header.module.css";


const Header = async () => {
  return (
    <header className={css.header}>
         <div className={`container ${css.headerContainer}`}>
         <Link
          className={css.logo}
          href="/"
          aria-label="logotype">
          <svg
            className={css.logoIcon}
            width={136}
            height={16}>
            <use href="/icons.svg#icon-logo" />
          </svg>
        </Link>

     
      <nav className={css.navigation}>
            <Link className={css.navigationLink} href="/">Home</Link>
            <Link className={css.navigationLink} href="/catalog">Catalog</Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;