import "./index.scss";
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Carrinho () {
    const [produtos, setProdutos] = useState(["teste"])
    
    return (    
      <div className="page-carrinho">
        <Cabecalho />
            <main id="conteudo">
                {produtos.length === 0
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
                        <main>
                            <section>
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
                                    <i className="fa-regular fa-trash-can"></i>
                                </article>
                            </section>
                        </main>
                        <hr />
                        <section id="s2">
                            <p> Subtotal </p>
                            <p> R$ 345,00 </p>
                        </section>
                        <section id="s3">
                            <Link id="marrom"> Adicionar mais produtos</Link>
                            <Link id="laranja"> Ir para o pagamento </Link>
                        </section>
                    </div>
                }
            </main>
        <UsuarioRodape/>
      </div>

    )
}