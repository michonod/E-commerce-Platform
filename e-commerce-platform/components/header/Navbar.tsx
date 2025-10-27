import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import styles from "./Navbar.module.css";
import { navbarCategories } from "@utils/index";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} width={50} alt="Logo" />
      <nav className={styles.navbar}>
        <ul>
          {navbarCategories.map((category) => (
            <li key={category.key}>{category.name}</li>
          ))}
        </ul>
      </nav>
      <SearchBar />
    </header>
  );
};
