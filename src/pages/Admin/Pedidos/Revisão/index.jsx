import { Link, useParams } from 'react-router-dom'
import CabecalhoAdm from '../../../../components/Admin/AdmCabecalho'
import './index.scss'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { buscarPedidoPorId, trocarStatusPedido } from '../../../../api/pedidoApi'
import { confirmAlert } from 'react-confirm-alert'


export default function Index() {
    const {id} = useParams()
    const [pedido, setPedido] = useState({dt_pedido: '', dt_entrega: '', cartao: { numero: ''}, cliente: {}, itens: []})
    const [status, setStatus] = useState('')

    async function buscarPedido() {
        try{
            const pedidoResp = await buscarPedidoPorId(id)
            console.log(pedidoResp);
            setPedido(pedidoResp)
            setStatus(pedidoResp.situacao)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.response)
        }
    }


    async function trocarStatus(novoStatus) {
        confirmAlert({
            title: 'Trocar status',
            message: `Tem certeza que deseja trocar o status do pedido com id ${pedido.id}, de "${pedido.situacao}" para "${novoStatus}" ?`,
            buttons: [{
                label: 'Sim',
                onClick: async () => {
                    try{
                        await trocarStatusPedido(novoStatus, id)
                        setStatus(novoStatus)
                    }
                    catch(err){
                        if(err.response)
                            toast.error(err.response.data.erro)
                        else
                            toast.error(err.message)
                    }
                }
            },
            {
                label: 'Não'
            }
        ]
        })
    }

    function verificarCodigo() {
        if(pedido.id){
            let codigo = `BS - 000${pedido.id}`
            
            return codigo
        }
    }

    function verificarCartao(){
        if(pedido.forma_pagamento === 'Cartão'){
            return pedido.cartao.numero.substring(12, 16)
        }
        else{
            return '-'
        }
    }
 
    useEffect(() => {
        buscarPedido()
        
        // eslint-disable-next-line
    }, [])
    
    return(
        <main className='page-adm-pedidos-revisao'>
            <CabecalhoAdm />
            <div id='revisao'>
                <Link to='/adm/pedidos' className='voltar'>
                    <img src='/assets/images/icon-seta-preta.svg' alt='seta-dark-esquerda' />
                    <h3>Voltar para a página de consulta de pedidos</h3>
                </Link>
                <hr />
                <div id='apresentacao'>
                    <h3>Resumo do pedido:</h3>
                </div>

                <div id='tabelas'>
                    <section id='s1'>
                        <table className='detalhesProdutos'>
                            <thead>
                                <tr>
                                        <th>
                                            <b>Itens</b>
                                        </th>
                                        <th>
                                            <b>Qtd</b>
                                        </th>
                                        <th>
                                            <b>Valor</b>
                                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pedido.itens.map(item => {
                                    return(
                                        <tr>
                                            <td>{item.produto.produto} {item.produto.detalhes.peso}</td>
                                            <td>{item.qtd}</td>
                                            <td>R${item.produto.preco}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <table className='duasInformacoes' id='continuacaoDetalhesProdutos'>
                            <tbody>
                                <tr>
                                    <td className='topico'>Frete: </td>
                                    <td className='valor'>R$ {pedido.frete}</td>
                                </tr>
                                <tr className='ultimaLinha'> 
                                    <td className='topico'>Valor Total: </td>
                                    <td >R$ {pedido.total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='s2'>
                        <table className='duasInformacoes' id='detalhesPedido'>
                            <tbody>
                                <tr>
                                    <td> Código do pedido: </td>
                                    <td className='valor'> {verificarCodigo()}</td>
                                </tr>
                                <tr>
                                    <td> Status do pedido: </td>
                                    <td className='valor'>
                                        <select value={status} onChange={e => trocarStatus(e.target.value)}>
                                            <option value='Pedido realizado'> Pedido realizado </option>
                                            <option value='Pagamento'> Pagamento</option>
                                            <option value='Pedido em preparo'> Pedido em preparo </option>
                                            <option value='À caminho'> À caminho </option>
                                            <option value='Entregue'> Entregue </option>
                                            <option value='Cancelado'> Cancelado </option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td> Data do pedido: </td>
                                    <td className='valor'> {pedido.dt_pedido.substring(0, 10)} {pedido.dt_pedido.substring(11, 19)}</td>
                                </tr>
                                <tr>
                                    <td> Data de entrega: </td>
                                    <td className='valor'> {pedido.dt_entrega.substring(0, 10)} </td>
                                </tr>
                                <tr>
                                    <td> Tipo de entrega: </td>
                                    <td className='valor'> {pedido.tp_entrega}</td>
                                </tr>
                                <tr>
                                    <td> Final do cartão: </td>
                                    <td className='valor'> {verificarCartao()} </td>
                                </tr>
                                <tr className='ultimaLinha'>
                                    <td> Forma de pagamento: </td>
                                    <td className='valor'> {pedido.forma_pagamento} </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='duasInformacoes' id='detalhesCliente'>
                            <tbody>
                                <tr>
                                    <td> Cliente: </td>
                                    <td className='valor'> {pedido.cliente.nome}</td>
                                </tr>
                                <tr>
                                    <td> CPF: </td>
                                    <td className='valor'>{pedido.cliente.cpf}</td>
                                </tr>
                                <tr>
                                    <td> Telefone: </td>
                                    <td className='valor'> {pedido.cliente.telefone}</td>
                                </tr>
                                <tr className='ultimaLinha'>
                                    <td> Email: </td>
                                    <td className='valor'> {pedido.cliente.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </main>
    )
}