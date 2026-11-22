import styles from "./styles.module.css"

export function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.headerTopo}>
                <p>DATA</p>
                <p>HORA</p>
                <p>LOCALIZAÇÃO</p>
                <p>CLIMA</p>
            </div>
            <div>
                <h1>Kortex News</h1>
                <p>Jornalismo Tecnológico e Independente</p>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}