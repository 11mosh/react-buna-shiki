import { URLRota } from '../constants'
import axios from 'axios'


const api = axios.create({
    baseURL: URLRota
})


export async function buscarEstatisticas(inicio, fim, campo){
    const resp = await api.get(`/estatisticas?dtInicio=${inicio}&dtFim=${fim}&campo=${campo}`)

    return resp.data.qtd
}