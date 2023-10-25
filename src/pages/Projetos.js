import styles from './Projetos.module.css'
import BlocoProjeto from '../components/BlocoProjeto'
import Urna from './../assets/img/urna.png'
import Clima from './../assets/img/clima.png'
import Calculadora from './../assets/img/calculadora.png'
import Todo from './../assets/img/todolist.png'

function Projetos(){
    return(
        <div className={styles.containerProjetos}>
            <h1>Projetos</h1>
            
            <div className={styles.projetos}>
                <BlocoProjeto imagem={Urna}/>
                <BlocoProjeto imagem={Clima}/>
                <BlocoProjeto imagem={Calculadora}/>
                <BlocoProjeto imagem={Todo}/>

        
            </div>

        </div>
    )
}
export default Projetos