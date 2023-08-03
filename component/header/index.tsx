import Link from "next/link";
import style from "./header.module.scss";
export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"../web"}>Products</Link>
          </li>
          <li>
            <Link href={"../dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
