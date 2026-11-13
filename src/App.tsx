import "./global.css"
import { useState, useEffect } from "react"
import { Button } from "./components/button"
// import { useMessage } from "./hooks/useMessage"
import styles from "./app.module.css"

export function App() {

  // const { show } = useMessage()
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount((prevState) => prevState + 1)
  }

  function handleRemove() {
    setCount((prevState) => prevState - 1)
  }

  useEffect(() => {
    console.log("Oi! Teste de useEffect.")
  }, [])

  return <div className={styles.container}>
    <h1>Hello World!</h1>
    <Button name="Adicionar" onClick={handleAdd} />
    <Button name="Remover" onClick={handleRemove} />
    <span>{count}</span>
  </div>
}

