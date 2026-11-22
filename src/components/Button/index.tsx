import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
    text: string
}

export function Button({ text, ...rest }: Props) {

    return <button type="button" className={styles.button} {...rest}> {text} </button>
}