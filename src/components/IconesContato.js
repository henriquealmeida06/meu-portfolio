import styles from "./IconesContato.module.css";
import { MdOutlineEmail } from "react-icons/md";

function IconesContato({ icone, categoria, valor, onClick }) {
  return (
    <div onClick={onClick} className={styles.containerIcones}>
      <span>{icone}</span>

      <p className={styles.categoriaContato}>{categoria}</p>
      <p className={styles.valorContato}>{valor}</p>
    </div>
  );
}
export default IconesContato;
