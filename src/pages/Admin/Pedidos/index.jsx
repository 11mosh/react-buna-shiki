import { useEffect, useState } from 'react';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import './index.scss';
import {toast} from 'react-toastify'
import { buscarPedidosPorData, buscarPesquisa, buscarPorFormaPagamento, buscarPorStatus, buscarTodosPedidos, ordenarPedidos, trocarStatusPedido } from '../../../api/pedidoApi';
import { confirmAlert } from 'react-confirm-alert'
import { useNavigate } from 'react-router';

export default function Index() {
    const [ordenar, setOrdenar] = useState('')
    const [statusPedido, setStatusPedido] = useState('')
    const [tpPagamento, setTpPagamento] = useState('')
    const [dataPedido, setDataPedido] = useState('')
    const [pesquisa, setPesquisa] = useState('')
    const [pedidos, setPedidos] = useState([])
    const navigate = useNavigate()

    async function buscarPedidosClick(){
        try{
            const resp = await buscarTodosPedidos()


            if(resp.length === 0)
                toast.info('Não há pedidos em processo no momento')
            setPedidos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    async function buscarPesquisaClick(){
        try{
            const resp = await buscarPesquisa(pesquisa)
            if(resp.length === 0)
                toast.info('Não há clientes com esse nome ou pedidos com esse código')
            setPedidos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else{
                toast.error(err.message)
            }
        }
    }

    async function ordenarPedidosClick(){
        
        try{
            const resp = await ordenarPedidos(ordenar)

            setPedidos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else{
                toast.error(err.message)
            }
        }
    }

    async function buscarPorFormaPagamentoClick(){
        try{
            const resp = await buscarPorFormaPagamento(tpPagamento)

            if(resp.length === 0)
                toast.info('Não há pedidos com essa forma de pagamento')

            setPedidos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else{
                toast.error(err.message)
            }
        }
    }

    async function buscarPorStatusClick(){
        try{
            const resp = await buscarPorStatus(statusPedido)

            if(resp.length === 0)
                toast.info('Não há pedidos com esse status')

            
            setPedidos(resp) 
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
        console.log('oi');
    }

    async function buscarPorData(){
        try{
            const resp = await buscarPedidosPorData(dataPedido)

            if(resp.length === 0)
                toast.info('Não há pedidos realizados nessa data')

            setPedidos(resp)
        }
        catch(err){ 
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    async function trocarStatus(novoStatus, id, index){
        let antigoStatus = pedidos[index].situacao
         
        confirmAlert({
            title: 'Trocar status',
            message: `Tem certeza que deseja trocar o status do pedido com id ${id}, de "${antigoStatus}" para "${novoStatus}" ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try{
                            await trocarStatusPedido(novoStatus, id)

                            toast.info('Status trocado')
                            buscarPedidosClick()
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

    function verificarNomeCliente(nome){
        if(nome.length > 16){
            let posicaoEspaco = nome.indexOf(' ')
            let primerioNome = nome.substring(0, posicaoEspaco)
            let letramaiucula = primerioNome[0].toUpperCase()
            let primerioNomeResto = primerioNome.slice(1)
            let primeiroNomeCompleto = `${letramaiucula}${primerioNomeResto}`
            let segundoNome = nome.substring(posicaoEspaco, posicaoEspaco + 2)
            let segundoNomeMaiusculo = segundoNome.toUpperCase()
            const nomeFormado = `${primeiroNomeCompleto} ${segundoNomeMaiusculo}.`

            return nomeFormado
        }
        else
            return nome
    }

    function verResumo(id) {
        navigate(`/adm/pedidos/resumo/${id}`)
    }

    function verificarTecla(e){
        if(e.key === 'Enter')
            buscarPesquisaClick()

    }

    useEffect(() => {
        if(ordenar !== '')
            ordenarPedidosClick()

        // eslint-disable-next-line
    }, [ordenar])

    useEffect(() => {
        if(dataPedido !== '')
            buscarPorData()

        // eslint-disable-next-line
    }, [dataPedido])

    useEffect(() => {
        if(statusPedido !== '')
            buscarPorStatusClick()

        // eslint-disable-next-line
    }, [statusPedido])

    useEffect(() => {
        if(tpPagamento !== '') {
            buscarPorFormaPagamentoClick()
        }
        
        // eslint-disable-next-line
    }, [tpPagamento])


    useEffect(() => {
        buscarPedidosClick()

    }, [])
    
    return ( 
        <div id='page-adm-pedidos'>
            <CabecalhoAdm />
            <main>
                <section id='s1'>
                    <h1>Visualizar pedidos</h1>
                    <input type='text' placeholder='Busque por clientes, códigos de pedidos' value={pesquisa} onKeyDown={e => verificarTecla(e)} onChange={e => {setPesquisa(e.target.value); setStatusPedido(''); setTpPagamento(''); setDataPedido(''); setOrdenar('');}}/>
                    <article>
                        <img src='/assets/images/lupa-dark.svg' alt='icon-busca' onClick={buscarPesquisaClick} />
                    </article>
                </section>
                <section id='s2'>
                    <article> 
                        <h3> Ordenar por:</h3>
                        <div>
                            <select value={ordenar} onChange={e => {setOrdenar(e.target.value); setPesquisa(''); setStatusPedido(''); setTpPagamento(''); setDataPedido('')}}>
                                <option value=''> Selecionar </option>
                                <option value='faturamento'> Faturamento </option>
                                <option value='cliente'> Cliente </option>
                                <option value='data'> Data </option>
                            </select>
                        </div>
                    </article>
                    <article>
                        <h3> Status do pedido: </h3>
                        <div>
                            <select value={statusPedido} onChange={e => {setStatusPedido(e.target.value); setOrdenar(''); setTpPagamento(''); setDataPedido(''); setPesquisa('')}}>
                                <option value=''> Selecionar </option>
                                <option value='Pedido realizado'> Pedido realizado </option>
                                <option value='Aguardando pagamento'> Pagamento</option>
                                <option value='Pedido em preparo'> Pedido em preparo </option>
                                <option value='À caminho'> À caminho </option>
                                <option value='Entregue'> Entregue </option>
                                <option value='Cancelado'> Cancelado </option>
                            </select>
                        </div> 
                    </article>
                    <article>
                        <h3> Tipo de pagamento:</h3>
                        <div>
                            <select value={tpPagamento} onChange={e => {setTpPagamento(e.target.value); setOrdenar(''); setStatusPedido(''); setPesquisa(''); setDataPedido('') }}>
                                <option value=''> Selecionar </option>
                                <option value='Cartão de crédito'> Cartão de crédito </option>
                                <option value='Cartão de débito'> Cartão de débito </option>
                                <option value='Pix'> Pix </option>
                            </select>
                        </div>
                    </article>
                    <article>
                        <h3> Data do pedido:</h3>
                        <div>
                            <input type="date" value={dataPedido} onChange={e => {setDataPedido(e.target.value); setOrdenar(''); setStatusPedido(''); setTpPagamento(''); setPesquisa('')}}/>
                        </div>
                    </article>
                </section>
                <section id='s3'>
                    <table>
                    <thead>
                        <tr>
                        <th className='pequeno'> ID </th>
                        <th className='desaparece4 grande'> Cliente </th>
                        <th className='grande'> Status </th>
                        <th className='desaparece2 medio'> Data </th>
                        <th className='desaparece3 medio'> Faturamento </th>
                        <th className='desaparece medio'> Pagamento </th>
                        </tr>
                    </thead>
                    <hr />
                    <tbody>
                        {pedidos.map((item, index) => {
                            return(
                                <tr key={item.id} onClick={() => verResumo(item.id)}>
                                    <td className='pequeno'> {item.id} </td>
                                    <td className='desaparece4 grande'> {verificarNomeCliente(item.cliente)} </td>
                                    <td className='grande'> 
                                        <select value={item.situacao} onChange={ e => trocarStatus(e.target.value, item.id, index)}>
                                            <option value='Pedido realizado'> Pedido realizado </option>
                                            <option value='Pagamento'> Pagamento</option>
                                            <option value='Pedido em preparo'> Pedido em preparo </option>
                                            <option value='À caminho'> À caminho </option>
                                            <option value='Entregue'> Entregue </option>
                                            <option value='Cancelado'> Cancelado </option>
                                        </select>
                                    </td>
                                    <td className='desaparece2 medio'> {item.dt_pedido.substr(0,10)} </td>
                                    <td className='desaparece3 medio'> R$ {item.total} </td>
                                    <td className='desaparece medio' > {item.forma_pagamento} </td>
                                </tr>
                            )
                        })}     
                    </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
}