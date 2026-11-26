import styles from "./styles.module.css";
import { Button } from "../Button";

export function Capa() {

    return (
        <section className={styles.capaSection}>
            <h1>Hello World!</h1>
            <a>Link Teste</a>
            <Button text="Clique Aqui!" />
        </section>
    )
}