import "./global.css"
import { Button } from "./components/button"
import { useMessage } from "./hooks/useMessage"
import styles from "./app.module.css"

export function App() {

  const { show } = useMessage()

  return <div className={styles.container}>
    <h1>Hello World!</h1>
    <Button name="Criar" onClick={() => show()} />
    <Button name="Editar" onClick={() => alert("Editar")} />
    <Button name="Remover" onClick={() => alert("Remover")} />
  </div>
}

