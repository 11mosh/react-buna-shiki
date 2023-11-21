import axios from 'axios'
import { URLRota } from '../constants'


const api = axios.create({
    baseURL: URLRota
})

export async function buscarCombos(){
    const resp = await api.get('/combos')

    return resp.data
}

export async function criarCombo(combo) {
    const resp = await api.post('/combo', {
        id_admin: combo.id_admin,
        nome: combo.nome,
        preco: combo.preco
    })

    return resp.data
}

export async function ordenarCombosPorCampo(campo){
    const resp = await api.get(`/combos/ordenar/${campo}`)

    return resp.data;
}

export async function buscarComboPorId(id) {
    const resp = await api.get(`/combo/${id}`)

    return resp.data
}

export async function pesquisarCombos(pesquisa) {
    const resp = await api.get(`/combos/pesquisa/${pesquisa}`)

    return resp.data
}

export async function excluirCombo(id) {
    await api.delete(`/combo/${id}`)
}

export async function excluirItensCombo(idCombo){
    await api.delete(`/combo/itens/${idCombo}`)
}

export async function adicionarItensCombo(idCombo, itens) {
    let itensResp = []
    for(let cont = 0; cont < itens.length; cont++){
        const resp = await api.post('/combo/item', {
            id_combo: idCombo,
            id_produto: itens[cont].id
        })

        itensResp[cont] = resp.data
    }

    return itensResp
}

export async function buscarCombosAdm() {
    const resp = await api.get('/combos/adm')

    return resp.data
}

export async function filtrarCombosPorAdm(id) {
    const resp = await api.get(`/combos/adm/${id}`)

    return resp.data;
}

export async function buscarComboPorNome(nome) {
    const resp = await api.get(`/combo/nome/${nome}`)

    return resp.data
}


export async function alterarCombo(combo) {
    await api.put(`/combo/${combo.id}`, {
        id_admin: combo.idAdmin,
        nome: combo.nome,
        preco: combo.preco
    })
}

export async function alterarItensCombo(itens, idCombo){
    console.log(itens);
    console.log(idCombo);
    for(let cont = 0; cont < itens.length; cont ++){
        await api.put(`/combo/item/${itens[cont].id_item}`, {
            id_produto: itens[cont].id,
            id_combo: idCombo
        })
    }
}   