import './custom.css'

function Avaliacao ({umaEstrela, duasEstrelas, tresEstrelas, quatroEstrelas, cincoEstrelas}) {
    return (
      <div className="corpo-principal">
        <h2>Avalie nosso produto!</h2>
        <div>
        <button onClick={umaEstrela}>
          <img src="/assets/images/Star 24.png" alt="" />
        </button>
        <button onClick={duasEstrelas}>
          <img src="/assets/images/Star 24.png" alt="" />
        </button>
        <button onClick={tresEstrelas}>
          <img src="/assets/images/Star 24.png" alt="" />  
        </button>
        <button onClick={quatroEstrelas}>
          <img src="/assets/images/Star 24.png" alt="" />
        </button>
        <button onClick={cincoEstrelas}>
          <img src="/assets/images/Star 24.png" alt="" />
        </button>
        </div>

      </div>
    );
  }
  
  export default Avaliacao;