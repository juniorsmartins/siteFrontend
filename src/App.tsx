import "./global.css"
import styles from "./app.module.css"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Button } from "./components/Button"

export function App() {

  return (
    <main className={styles.container}>
      <Header />
      <div>
        <h1>Hello World!</h1>
        <a>Link Teste</a>
        <Button text="Clique Aqui!" />
      </div>
      <Footer />
    </main>
  )
}

