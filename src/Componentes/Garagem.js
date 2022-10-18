import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome} </h1>
      <button onClick={()=>props.funcao(props.nome)}>Boas Vindas</button>
      <Carro 
      carro={props.fusca}
      />
      <Carro 
      carro={props.brasilia}
      />
      <Carro 
      carro={props.opala}
      />


      <h1> Segunda Garagem do {props.nome}</h1>
      <button onClick={()=>props.funcao(props.nome)} >Boas Vindas</button>
      <Carro
      carro={props.siena}
      />
      <Carro
      carro={props.gol}
      />
      <Carro
      carro={props.voyage}
      />
      <Carro
      carro={props.ferrari}
      />
    
      
    </div>

  );
}

export default Garagem;
