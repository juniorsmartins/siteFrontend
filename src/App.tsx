import "./global.css"
import { Button } from "./components/button"
import "./styles.css"

export function App() {

  return <div className="container">
    <h1>Hello World!</h1>
    <Button className="btn" name="Criar" onClick={() => alert("Criar")} />
    <Button className="btn" name="Editar" onClick={() => alert("Editar")} />
    <Button className="btn" name="Remover" onClick={() => alert("Remover")} />
  </div>
}

