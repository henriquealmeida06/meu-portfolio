import styles from './SobreMim.module.css'

function SobreMim(){
    return(
        <div className={styles.containerSobre}>
            <div className={styles.conteudoSobre}>  
            <h1 className={styles.hSobre}>Sobre mim</h1>
            <p className={styles.pSobre}>Olá! Eu sou Henrique, um apaixonado desenvolvedor web de 25 anos. Atualmente, estou cursando uma graduação em Análise e Desenvolvimento de Sistemas, estou constantemente procurando maneiras de me aprimorar e evoluir na minha área.</p>

            <p className={styles.pSobre}>Se você está procurando um desenvolvedor web apaixonado e comprometido, estou pronto para enfrentar desafios e contribuir para projetos inovadores. Vamos criar algo surpreendente juntos!</p>
            </div>
        </div>
    )
}
export default SobreMim