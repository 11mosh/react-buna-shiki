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


