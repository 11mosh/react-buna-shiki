import axios from 'axios'
import { URLRota } from '../constants'

const api = axios.create({
    baseURL: URLRota
})

export async function buscarAssinaturas() {
    const resp = await api.get('/assinaturas')

    return resp.data
}

export async function trocarStatusAssinatura(id, status) {
    await api.put(`/assinatura/status/${id}/${status}`)

}

export async function ordenarAssinaturas(ordem) {
    const resp = await api.get(`/assinaturas/ordenar/${ordem}`)

    return resp.data
}

export async function buscarAssinaturasPorStatus(status){
    const resp = await api.get(`/assinaturas/status/${status}`)

    return resp.data
}

export async function pesquisarAssinaturas(pesquisa){
    const resp = await api.get(`/assinaturas/pesquisa/${pesquisa}`)

    return resp.data
}