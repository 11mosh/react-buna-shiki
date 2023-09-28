import "./index.scss";
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Carrinho () {
    const [produtos, setProdutos] = useState([])
    
    return (    
      <main className="page-carrinho">
        <Cabecalho />
            {produtos.length > 0
            ?   <div id="carrinho-vazio">
                    <img src="/assets/images/carrinhoo.svg" alt="carrinho"/>
                    <p id="textoMaior">
                        Ops!
                    </p>
                    <p>
                        Seu carrinho esta vazio.
                    </p>
                    <p>
                        Navegue pelo site para adicionar 
                        produtos ao seu carrinho.
                    </p>
                    <button>Adicionar produtos</button>
                </div>
            :   <div id="carrinho-cheio">   
                    <h2> MEU CARRINHO </h2>
                    <section id="s1">
                        <article id="a1">
                            <div>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                            </div>
                            <div id="detalhes">
                                <p> Orfeu intenso </p>
                                <p> 1kg </p>
                                <div> 
                                    <button> 
                                        <img src='/assets/images/icon-menos.svg' alt=''/>
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt=''/>
                                    </button>
                                </div>
                            </div>
                        </article>
                        <article id="a2">
                            <img src='/assets/images/icon-lixeira.svg' alt='' />
                        </article>
                    </section>
                    <hr />
                    <section id="s2">
                        <p> Subtotal </p>
                        <p> R$ 345,00 </p>
                    </section>
                    <section id="s3">
                        <Link> Adicionar mais produtos</Link>
                        <Link> Ir para o pagamento </Link>
                    </section>
                </div>
            }
        <UsuarioRodape/>
      </main>

    )
}