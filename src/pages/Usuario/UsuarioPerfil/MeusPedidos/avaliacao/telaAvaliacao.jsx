import './custom.scss'

function Avaliacao ({avaliar}) {
    return (
      <div className="corpo-principal-avaliacao">
        <h2>Avalie nosso produto!</h2>
        <div>
          <img src="/assets/images/Star 22.svg" alt="" onClick={() => avaliar(1)}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={() => avaliar(2)}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={() => avaliar(3)}/>  
          <img src="/assets/images/Star 22.svg" alt="" onClick={() => avaliar(4)}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={() => avaliar(5)}/>
        </div>
      </div>
    );
  }
  
  export default Avaliacao;