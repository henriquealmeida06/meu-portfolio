import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto(!menuAberto);
  }

  return (
    <nav>
      <div className={styles.menuResponse} onClick={alternarMenu}>
        <GiHamburgerMenu />
      </div>

      <p className={styles.p_portifolio}>
        <a href="#home">Portfólio</a>
      </p>

      <div
        className={`${styles.menuDesktop} ${menuAberto ? styles.active : ""}`}
      >
        <ul>
          <li>
            <a href="#home">Página Inicial</a>
          </li>
          <li>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
