import axios from 'axios'
import { URL } from '../constants'

const api = axios.create({
    baseURL: URL
})

export async function login(email, senha) {
    const resp = await api.post('/adm', {
        email: email,
        senha: senha
    })

    return resp.data
}
