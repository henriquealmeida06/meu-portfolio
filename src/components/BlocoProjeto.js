import styles from './BlocoProjeto.module.css'
import Urna from './../assets/img/urna.png'

function BlocoProjeto({imagem}){
    return(
        <div className={styles.containerBloco}>
            <img className={styles.imgProjeto} src={imagem}/>

        </div>
    )
}
export default BlocoProjeto