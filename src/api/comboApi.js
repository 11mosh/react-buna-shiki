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
        nome: combo.nome,
        preco: combo.preco
    })

    return resp.data
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