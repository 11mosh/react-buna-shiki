import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function buscarTodos(){
    const resp = await api.get('/produtos')

    return resp.data
}

export async function excluir(idProduto, idDetalhe) {
    const resp = await api.delete(`/deletar/produto?idDetalhe=${idDetalhe}&idProduto=${idProduto}`)
    console.log(resp);
    return resp
}

export async function buscarIdProduto(id) {
    const resp = await api.get(`/produto/${id}`)

    return resp.data
}

export async function buscarIdDetalhe(id){
    const resp = await api.get(`/detalhes/${id}`)

    return resp.data
}

export async function buscarIdImagens(idProduto){
    const resp  = await api.get(`/${idProduto}/imagens`)

    return resp.data
}

export async function alterar(alteracoes, idDetalhe, idProduto){
    const resp = await api.put(`/produto/${idProduto}/detalhes/${idDetalhe}`, alteracoes)

    return resp;
}


