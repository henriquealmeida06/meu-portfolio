import styles from './NavBar.module.css'


function NavBar(){
    return(
        <nav>
            <div>
                <p className={styles.p_portifolio}><a href='#home'>Portfólio</a></p>
            </div>
            <ul>
                <li><a href='#home'>Página Inicial</a></li>
                <li><a href='#sobre'>Sobre mim</a></li>
                <li><a href='#habilidades'>Habilidades</a></li>
                <li><a href='#projetos'>Projetos</a></li>
                <li><a href='#contatos'>Contatos</a></li>
            </ul>
        </nav>
    )
}
export default NavBar