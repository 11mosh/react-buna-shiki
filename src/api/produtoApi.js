import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function buscarTodos(){
    const resp = await api.get('/produtos')

    return resp.data
}

export async function excluir(idProduto, idDetalhe) {
    console.log(idProduto);
    console.log(idDetalhe);
    await api.delete(`/deletar/produto`, {
        data: {
            idDetalhe: idDetalhe,
            idProduto: idProduto
        }
    })
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

export async function excluirImagens(idFotosExcluir, idProduto){
    await api.put(`/${idProduto}/imagens`, {
        deletar: idFotosExcluir
    })

}

export async function alterar(alteracoes, idDetalhe, idProduto){
    const resp = await api.put(`/produto/${idProduto}/detalhes/${idDetalhe}`, alteracoes)

    return resp;
}

export async function buscarCategorias(){
    const resp = await api.get('/categorias')

    return resp.data
}

export async function buscarAdms(){
    const resp = await api.get('/adms')

    return resp.data
}


