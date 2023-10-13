import { useState } from 'react';
import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';


export default function Index() {
    const [entregaExpress, setEntregaExpress] = useState(false)
    const [entregaEconomica, setEntregaEconomica] = useState(false)

    
    return(
        <div id='page-pagamento'>
            <CabecalhoUsuario />
            <main id='conteudo'>
                <section id='s1'>
                    <div className='etapas'>
                        <h3>Resumo do pedido</h3>
                    </div>
                    <article>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    <button>
                                        <img src='/assets/images/icon-mais.svg' alt='icon-mais' />
                                    </button>
                                    3
                                    <button>
                                        <img src='/assets/images/icon-menos.svg' alt='icon-menos' />
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </article>
                </section>
                <div id='s2'>
                    <section id='entrega'>
                        <div className='etapas'>
                            <h3> Entrega </h3>
                        </div>
                        <div id='entrega-conteudo'>
                            <select>
                                <option> Selecionar endereço </option>
                            </select>
                            <section>
                                <h5> Selecione o tipo de pagamento: </h5>
                                <div>
                                    <article>
                                        <div id={entregaEconomica === true ? 'tipoEntregaSelecionado' : ''} onClick={() => {setEntregaEconomica(!entregaEconomica); setEntregaExpress(false)}}>
                                            <p> Entrega Econômica </p>
                                        </div>
                                        <figure>
                                            <img src='/assets/images/sedex-logo.png' alt='logo da sedex' />
                                        </figure>
                                        <p> Receba em até <b> 4 dias </b> por R$6,00 </p>
                                    </article>
                                    <article>
                                        <div id={entregaExpress === true ? 'tipoEntregaSelecionado' : ''} onClick={() => {setEntregaExpress(!entregaExpress); setEntregaEconomica(false)}}>
                                            <p> Entrega Express</p>
                                        </div>
                                        <figure>
                                            <img src='/assets/images/loggi-logo.png' alt='logo da loggi' />
                                        </figure>
                                        <p> Receba em até <b> 2 dias </b> por R$11,00 </p>
                                    </article>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section id='pagamento'>
                        <div className='etapas'> 
                            <h3> Pagamento </h3> 
                        </div>
                        <div id='total'>
                            <div>
                                <p>Subtotal</p>
                                <p className='preco'> R$ 344, 97</p>
                            </div>
                            <div>
                                <p>Frete</p>
                                <p className='preco'> R$ 11,00</p>
                            </div>
                            <div>
                                <strong>Total</strong>
                                <strong className='preco'> R$ 355, 97</strong>
                            </div>
                        </div>
                        <select>
                            <option> Selecionar cartão </option>
                        </select>
                        <div id='pagamentoPix'>
                            <div>
                                <img src='/assets/images/formas de pagamento/pix.svg' alt='simbolo do pix' />
                                <p> Pix </p>
                            </div>
                            <p> Chave aleatória: 00000000000000 </p>
                        </div>
                        <div id='alinharButton'>
                            <button> Finalizar pedido </button>
                        </div>
                    </section>
                </div>
            </main>
            <UsuarioRodape />
        </div>
    )
}