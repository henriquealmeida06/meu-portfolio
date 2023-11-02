import styles from "./Home.module.css";
import Logo from "./../assets/img/fotoPortfolio.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Home() {
  function abrirLinkedin() {
    window.open("https://www.linkedin.com/in/henriquealmeida06/", "_blank");
  }

  function abrirGithub() {
    window.open("https://github.com/henriquealmeida06", "_blanck");
  }

  function enviarEmail() {
    window.open("mailto:marceloh500@gmail.com", "_blank");
  }

  return (
    <div className={styles.container_home}>
      <div className={styles.conteudo}>
        <div className={styles.apresentacao}>
          <p className={styles.p_ola}>Olá! Eu sou</p>
          <p className={styles.p_nome}>Henrique Almeida</p>
          <p className={styles.p_descricao}>Desenvolvedor Front-End</p>
          <div className={styles.buttonsContatos}>
            <button onClick={abrirLinkedin} className={styles.buttonContato}>
              <FaLinkedinIn />
            </button>
            <button onClick={abrirGithub} className={styles.buttonContato}>
              <FaGithub />
            </button>
            <button onClick={enviarEmail} className={styles.buttonContato}>
              <MdOutlineEmail />
            </button>
          </div>
        </div>
        <img className={styles.imgFoto} src={Logo} />
      </div>
    </div>
  );
}
export default Home;
