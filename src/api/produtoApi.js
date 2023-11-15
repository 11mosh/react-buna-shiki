import axios from 'axios'
import { URLRota } from '../constants'

const api = axios.create({
    baseURL: URLRota
})


// Buscando 

export async function buscarTodosProdutos(){
    const resp = await api.get('/produtos')

    return resp.data
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


export async function buscarCategorias(){
    const resp = await api.get('/categorias')

    return resp.data
}

export async function buscarAdms(){
    const resp = await api.get('/adms')

    return resp.data
}

export async function filtrarPorCategorias(idCategoria){
    const resp = await api.get(`/filtro/produtos/categorias/${idCategoria}`)

    return resp.data
}

export async function filtrarPorAdm(idAdm){
    const resp = await api.get(`/filtro/produtos/adm/${idAdm}`)

    return resp.data
}

export async function filtrarPorAssinatura(valorBoolean){

    const resp = await api.get(`/filtro/produtos/disponivelAssinatura/${valorBoolean}`)

    return resp.data
}

export async function ordernarProdutosPorColuna(coluna){
    const resp = await api.get(`/filtro/produtos/ordenar/${coluna}`)
    console.log(coluna);
    return resp.data
}

export async function pesquisaInput(pesquisaValor) {
    const resp = await api.get(`/filtro/produtos/pesquisa/${pesquisaValor}`)

    return resp.data
}

export async function buscarProdutosPorMarca(marca, categoria){
    const resp = await api.get(`/produtos/marca?marca=${marca}&categoria=${categoria}`)

    return resp.data
}


















// Alterando

export async function alterar(alteracoes, idDetalhe, idProduto){
    await api.put(`/produto/${idProduto}/detalhes/${idDetalhe}`, alteracoes)
}















// Deletando

export async function excluirImagens(idFotosExcluir, idProduto){
    await api.delete(`/${idProduto}/imagens`, {
        data:{
            deletar: idFotosExcluir,
        }
    })

}

export async function excluir(idProduto, idDetalhe) {
    await api.delete(`/deletar/produto`, {
        data: {
            idDetalhe: idDetalhe,
            idProduto: idProduto
        }
    })
}









