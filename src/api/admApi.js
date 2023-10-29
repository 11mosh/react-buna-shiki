import axios from 'axios'
import { nuvem } from '../constants'

const api = axios.create({
    baseURL: nuvem
})

export async function login(email, senha) {
    const resp = await api.post('/adm', {
        email: email,
        senha: senha
    })

    return resp.data
}
