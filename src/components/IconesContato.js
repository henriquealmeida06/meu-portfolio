import styles from './IconesContato.module.css'
import {MdOutlineEmail} from 'react-icons/md'

function IconesContato({icone, categoria, valor}){
    return(
        <div className={styles.containerIcones}>
            
            <span>{icone}</span>
            
            <p className={styles.categoriaContato}>{categoria}</p>
            <p className={styles.valorContato}>{valor}</p>
            


        </div>
    )
}
export default IconesContato