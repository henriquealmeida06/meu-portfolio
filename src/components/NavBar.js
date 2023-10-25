import styles from './NavBar.module.css'


function NavBar(){
    return(
        <nav>
            <div>
                <p className={styles.p_portifolio}>Portfólio</p>
            </div>
            <ul>
                <li>Página Inicial</li>
                <li>Sobre mim</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Contatos</li>
            </ul>
        </nav>
    )
}
export default NavBar