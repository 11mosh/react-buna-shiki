import { useEffect, useState } from 'react'
import './index.scss'
import { buscarPedidoPorId } from '../../../api/pedidoApi'
import { useNavigate, useParams } from 'react-router'
import storage from 'local-storage'
import { toast } from 'react-toastify'

export default function Index(props) {
    const navigate = useNavigate()
    const [pedido, setPedido] = useState({dt_entrega: '', dt_pedido: '', itens: [], endereco: {}});

async function buscarPedido(){
        try{
            const respPedido = await buscarPedidoPorId(props.idPedido)
            
            console.log(respPedido);
            if(respPedido.id_cliente !== storage('usuario-logado').id)
                navigate('/conta/meus-pedidos')
            else{
                setPedido(respPedido)
            }
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/login')
        }
        else{
            buscarPedido()
        }

        // eslint-disable-next-line
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
                                <p className='valor detalheComprido'> <span> {pedido.tp_entrega} </span> prevista para o dia {pedido.dt_entrega.substring(0, 10)} </p>
                            </div>
                        </article>
                        <article>
                            <div>
                                <p> Codigo do pedido:</p>
                                <p className='valor'>{pedido.codigo}</p>
                            </div>
                            <div>
                                <p> Data do pedido:</p>
                                <p className='valor'>{pedido.dt_pedido.substring(0, 10)} {pedido.dt_pedido.substring(11, 8)}</p>
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
                                    <h4> {item.produto.produto} {item.produto.categoria === 'Café em grãos' || item.produto.categoria === 'Café em pó' ? item.produto.detalhes.peso : ''}</h4>
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