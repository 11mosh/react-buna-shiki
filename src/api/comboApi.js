import axios from 'axios'
import { URLRota } from '../constants'


const api = axios.create({
    baseURL: URLRota
})

export async function buscarCombos(){
    const resp = await api.get('/combos')

    return resp.data
}