import { Button } from "./components/button"

export function App() {

  return <div>
    <h1>Hello World!</h1>
    <Button name="Criar" onClick={() => alert("Criar")} />
    <Button name="Editar" onClick={() => alert("Editar")} />
    <Button name="Remover" onClick={() => alert("Remover")} />
  </div>
}
