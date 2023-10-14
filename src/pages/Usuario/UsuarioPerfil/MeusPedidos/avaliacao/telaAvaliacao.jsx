import './custom.scss'

function Avaliacao ({umaEstrela, duasEstrelas, tresEstrelas, quatroEstrelas, cincoEstrelas}) {
    return (
      <div className="corpo-principal-avaliacao">
        <h2>Avalie nosso produto!</h2>
        <div>
          <img src="/assets/images/Star 22.svg" alt="" onClick={umaEstrela}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={duasEstrelas}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={tresEstrelas}/>  
          <img src="/assets/images/Star 22.svg" alt="" onClick={quatroEstrelas}/>
          <img src="/assets/images/Star 22.svg" alt="" onClick={cincoEstrelas}/>
        </div>
      </div>
    );
  }
  
  export default Avaliacao;