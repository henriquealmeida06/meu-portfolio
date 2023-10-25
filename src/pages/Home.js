import styles from './Home.module.css'
import Logo from './../assets/img/FotoPrincipal.png'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'


function Home(){
    return(    
        <div className={styles.container_home}>
        <div className={styles.conteudo}>
        <div className={styles.apresentacao}>
            <p className={styles.p_ola}>Olá! Eu sou</p>
            <p className={styles.p_nome}>Henrique Almeida</p>
            <p className={styles.p_descricao}>Desenvolvedor Front-End</p>
            <div className={styles.buttonsContatos}>
            <button className={styles.buttonContato}><FaLinkedinIn/></button>
            <button className={styles.buttonContato}><FaGithub/></button>
            <button className={styles.buttonContato}><MdOutlineEmail/></button>
            </div>
            

        </div>
        <img className={styles.imgFoto} src={Logo}/>
        </div>
        </div>
        
    )
}
export default Home