import Image from "next/image";
import searchIcon from "../../public/icons/search.svg";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search here"
      />
      <div className={styles.searchIcon}>
        <Image
          src={searchIcon}
          alt="Search"
          width={24}
          height={24}
          className={styles.searchIcon}
        />
      </div>
    </div>
  );
};
