import axios from 'axios'
import { URLRota } from '../constants'

const api = axios.create({
    baseURL: URLRota
})

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

export async function trocarStatusPedido(status, id){
    await api.put(`/pedido/status?status=${status}&id=${id}`)
}

export async function buscarPedidoPorId(id){
    const resp = await api.get(`/pedido/${id}`)

    return resp.data
}