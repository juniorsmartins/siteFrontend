import "./global.css"
import styles from "./app.module.css"
import { Header } from "./components/Header"

export function App() {

  return (
    <main className={styles.container}>
      <Header />
      <div>
        <h1>Hello World!</h1>
        <a>Link Teste</a>
      </div>
    </main>
  )
}

