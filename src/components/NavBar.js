import styles from "./NavBar.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [abrirMenu, setAbrirMenu] = useState(false);
  function alternarMenu() {
    setAbrirMenu(!abrirMenu);
  }

  return (
    <nav>
      <p className={styles.p_portifolio}>
        <a href="#home">Portfólio</a>
      </p>

      <div className={styles.menuDesktop}>
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
