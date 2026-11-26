import "./global.css"
import styles from "./app.module.css"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Capa } from "./components/Capa"

export function App() {

  return (
    <main className={styles.container}>
      <Header />
      <Capa />
      <Footer />
    </main>
  )
}

