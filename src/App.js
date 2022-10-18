import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const carro1 = {
    nomeDoCarro: "Fusca",
    ano: 1970,
    cor: "Azul",
    flex: false
  }
  const carro2 = {
    nomeDoCarro: "Brasília",
    ano: 1965,
    cor: "Amarela",
    flex: false
  }
  const carro3 = {
    nomeDoCarro: "Opala",
    ano: 1984,
    cor: "Verde",
    flex: true
  }
  const carro4 = {
    nomeDoCarro: "Siena",
    ano: 2012,
    cor: "Prata",
    flex: true
  }
  const carro5 = {
    nomeDoCarro: "Gol",
    ano: 2001,
    cor: "Cinza",
    flex: false
  }
  const carro6 = {
    nomeDoCarro: "Voyage",
    ano: 2010,
    cor: "Preto",
    flex: true
  }
  const carro7 = {
    nomeDoCarro: "Ferrari",
    ano: 2022,
    cor: "Vermelho",
    flex: true
  }

  function apresentacao(nome){
    alert(`Bem-vindos á garagem de ${nome}`)
  }
  
  return (
    <div>
      <Garagem 
      nome={"Carlos"}
      fusca={carro1}
      brasilia={carro2}
      opala={carro3}
      funcao={apresentacao}
      siena={carro4}
      gol={carro5}
      voyage={carro6}
      ferrari={carro7}
      />
    </div>
  );
}
