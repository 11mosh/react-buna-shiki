import axios from 'axios'
import { URLRota } from '../constants'

const api = axios.create({
    baseURL: URLRota
})



// Cadastrando

export async function cadastrarPedido(pedido){
    const resp = await api.post('/pedido', {
        id_cliente: pedido.id_cliente,
        id_endereco: pedido.id_endereco,
        id_cartao: pedido.id_cartao,
        tp_entrega: pedido.tp_entrega,
        forma_pagamento: pedido.forma_pagamento,
        dt_entrega: pedido.dt_entrega,
        subtotal: pedido.subtotal,
        frete: pedido.frete,
        total: pedido.total,
        dt_pedido: pedido.dt_pedido
    })

    return resp.data
}

export async function cadastrarItensPedido(itens, id_pedido){
    let arrayResp = []

    for(let cont = 0; cont < itens.length; cont++){
        const resp = await api.post('/pedido/item', {
            id_pedido: id_pedido,
            id_produto: itens[cont].id,
            qtd: itens[cont].qtd
        })
        arrayResp[cont] = resp.data
    }

    return arrayResp
}














// Buscando

export async function buscarTodosPedidos(){
    const resp = await api.get('/pedidos')

    return resp.data
}

export async function buscarPesquisa(pesquisa){
    const resp = await api.get(`/pedidos/pesquisa/${pesquisa}`)

    return resp.data
}

export async function ordenarPedidos(campo){
    const resp = await api.get(`/pedidos/ordenar/${campo}`)

    return resp.data
}


export async function buscarPorFormaPagamento(forma){
    const resp = await api.get(`/pedidos/forma-pagamento/${forma}`)

    return resp.data
}

export async function buscarPorStatus(status){
    const resp = await api.get(`/pedidos/status/${status}`)

    return resp.data
}

export async function buscarPedidosPorData(data){
    const resp = await api.get(`/pedidos/data/${data}`)

    return resp.data
}


export async function buscarPedidoPorId(id) {
    const resp = await api.get(`/pedido/${id}`)

    return resp.data
}

export async function buscarPedidosPorCliente(idCliente) {
    const resp = await api.get(`/pedidos/primeiro-item/${idCliente}`)

    return resp.data;
}


// Alterando 

export async function trocarStatusPedido(status, id){
    await api.put(`/pedido/status?status=${status}&id=${id}`)
}