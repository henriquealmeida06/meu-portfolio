import styles from './Projetos.module.css'
import BlocoProjeto from '../components/BlocoProjeto'
import Urna from './../assets/img/urna.png'
import Clima from './../assets/img/clima.png'
import Calculadora from './../assets/img/calculadora.png'
import Todo from './../assets/img/todolist.png'
import {FaHtml5, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io5'
import {SiStyledcomponents} from 'react-icons/si'


function Projetos(){
    return(
        <div className={styles.containerProjetos}>
            <h1>Projetos</h1>
            
            <div className={styles.projetos}>
                <BlocoProjeto imagem={Urna} nome="Urna Eletrônica" tecnologia1={<FaHtml5/>} tecnologia2={<SiStyledcomponents/>} tecnologia3={<IoLogoJavascript/>} tecnologia4={<FaReact/>}/>
                <BlocoProjeto imagem={Clima} nome="Clima do Tempo" tecnologia1={<FaHtml5/>} tecnologia2={<SiStyledcomponents/>} tecnologia3={<IoLogoJavascript/>} tecnologia4={<FaReact/>} />
                <BlocoProjeto imagem={Calculadora} nome="Calculadora Xiaomi Dark" tecnologia1={<FaHtml5/>} tecnologia2={<SiStyledcomponents/>} tecnologia3={<IoLogoJavascript/>} tecnologia4={<FaReact/>}/>
                <BlocoProjeto imagem={Todo} nome="Lista de Tarefas" tecnologia1={<FaHtml5/>} tecnologia2={<SiStyledcomponents/>} tecnologia3={<IoLogoJavascript/>} tecnologia4={<FaReact/>}/>

        
            </div>

        </div>
    )
}
export default Projetos