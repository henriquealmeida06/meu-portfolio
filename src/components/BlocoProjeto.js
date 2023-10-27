import styles from './BlocoProjeto.module.css'
import Urna from './../assets/img/urna.png'
import {IoLogoJavascript} from 'react-icons/io5'

function BlocoProjeto({imagem, nome, tecnologia1, tecnologia2, tecnologia3, tecnologia4}){
    return(
        <div className={styles.containerGeral}>
       
           
        <div className={styles.containerBloco}>
            <img className={styles.imgProjeto} src={imagem}/>
            
            
            </div>
           
            <div className={styles.divVerMais}>
                <div className={styles.nomeProjeto}>
                <p>{nome}</p>
                </div>
                <div className={styles.tecnologias}>
                <span>{tecnologia1}{tecnologia2}{tecnologia3}{tecnologia4}</span>
                
                </div>
                
            </div>
        </div>
    )
}
export default BlocoProjeto