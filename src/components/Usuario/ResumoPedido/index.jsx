import { useEffect, useState } from 'react';
import { buscarPedidoPorId } from '../../../api/pedidoApi'
import './index.scss'

export default function Index(props) {

    const [pedido, setPedido] = useState({dt_entrega: ''})

    async function buscarPedido(){
        let pedidoResp = await buscarPedidoPorId(props.idPedido)
        console.log(pedidoResp);
        setPedido(pedidoResp)
    }
    
    useEffect(() => {
        buscarPedido()
    }, [])
    
    return(
        <div id='comp-resumo-pedido'>
            <div id='conteudo'>
                <h3>Resumo do pedido:</h3>
                <main>
                    <section id='detalhes'>
                        <article>
                            <div>
                                <p> Status do pedido: </p>
                                <span className='valor'> {pedido.situacao}...</span>
                            </div>
                            <div>
                                <p> Data de envio:</p>
                                <p className='valor detalheComprido'> <span> {pedido.tp_entrega} </span> prevista para o dia {pedido.dt_entrega.substr(0,10)} </p>
                            </div>
                        </article>
                        <article>
                            <div>
                                <p> Codigo do pedido:</p>
                                <p className='valor'>{pedido.codigo}</p>
                            </div>
                            <div>
                                <p> Data do pedido:</p>
                                <p className='valor'>{pedido.dt_pedido}</p>
                            </div>
                            <div>
                                <p id='endereco'> Endereço de envio: </p>
                                <p className='valor detalheComprido'> Rua lopes trovão 251, Sâo Paulo, 05326-442</p>
                            </div>
                        </article>
                        <article id='detalhesPagamento'>
                            <div>
                                <p>Subtotal:</p>
                                <div >
                                    <p className='valor'> R$ 344, 97</p>
                                </div>
                            </div>
                            <div>
                                <p> Frete:</p>
                                <div>
                                    <p className='valor'>R$ 20,00</p>
                                </div>
                            </div>
                            <div>
                                <p> Total:</p> 
                                <div>
                                    <p className='valor'> R$366, 97</p>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section id='produtos'>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                    </section>
                </main>
            </div>
        </div>
    )
}