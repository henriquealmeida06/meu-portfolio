import styles from './Contato.module.css'
import IconesContato from '../components/IconesContato'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


function Contato(){
    return(
        <div className={styles.containerContato}>
            <h1>Contatos</h1>
            <div className={styles.iconesContato}>
            <IconesContato icone={<HiOutlineMail/>} categoria="Email" valor="marceloh500@gmail.com"/>
            <IconesContato icone={<BsTelephone/>} categoria="Telefone" valor="(82) 99821-2896"/>
            <IconesContato icone={<FaLinkedinIn/>} categoria="Linkedin" valor="@henriquealmeida06"/>
            <IconesContato icone={<FaGithub/>} categoria="Github" valor="@henriquealmeida06"/>
            </div>
            

        </div>
    )
}
export default Contato