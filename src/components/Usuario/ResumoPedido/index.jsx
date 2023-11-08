import { useEffect, useState } from 'react'
import './index.scss'
import { buscarPedidoPorId } from '../../../api/pedidoApi'

export default function Index(props) {
    
    const [pedido, setPedido] = useState({dt_entrega: '', dt_pedido: '', itens: []})

    async function buscarPedido(){
        const respPedido = await buscarPedidoPorId(props.idPedido)
        setPedido(respPedido)
        console.log(respPedido);
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
                                <p className='valor detalheComprido'> <span> {pedido.tp_entrega} </span> prevista para o dia {pedido.dt_entrega.substr(0, 10)} </p>
                            </div>
                        </article>
                        <article>
                            <div>
                                <p> Codigo do pedido:</p>
                                <p className='valor'>{pedido.codigo}</p>
                            </div>
                            <div>
                                <p> Data do pedido:</p>
                                <p className='valor'>{pedido.dt_pedido.substr(0, 10)} {pedido.dt_pedido.substr(11, 8)}</p>
                            </div>
                            <div>
                                <p id='endereco'> Endereço de envio: </p>
                                <p className='valor detalheComprido'> Rua {pedido.endereco.rua} {pedido.endereco.numero}, {pedido.endereco.cidade}, {pedido.endereco.cep}</p>
                            </div>
                        </article>
                        <article id='detalhesPagamento'>
                            <div>
                                <p>Subtotal:</p>
                                <div >
                                    <p className='valor'> R$ {pedido.subtotal}</p>
                                </div>
                            </div>
                            <div>
                                <p> Frete:</p>
                                <div>
                                    <p className='valor'>R$ {pedido.frete}</p>
                                </div>
                            </div>
                            <div>
                                <p> Total:</p> 
                                <div>
                                    <p className='valor'> R$ {pedido.total}</p>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section id='produtos'>
                        {pedido.itens.map(item => {
                            return(
                                <article>
                                    <div>
                                        <img src={item.produto.imagem} alt="produto" />
                                        <div id='qtd'> {item.qtd} </div>
                                    </div>
                                    <h4> {item.produto.produto} {item.produto.detalhes.peso}</h4>
                                    <span> R$ {item.produto.preco} </span>
                                </article>
                            )
                        })}
                    </section>
                </main>
            </div>
        </div>
    )
}