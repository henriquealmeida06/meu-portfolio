import styles from './IconesHabilidades.module.css'
import {FaReact} from 'react-icons/fa'

function IconesHabilidades({habilidade, icone}){
    return(
        <div className={styles.containerIcones}>
            <p className={styles.p_habilidade}>{habilidade}</p>
            <span>{icone}</span>


        </div>
    )
}
export default IconesHabilidades