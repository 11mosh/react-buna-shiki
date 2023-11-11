import axios from 'axios'
import {URLRota } from '../constants'

const api = axios.create({
    baseURL: URLRota
})

export async function login(email, senha) {
    const resp = await api.post('/adm', {
        email: email,
        senha: senha
    })

    return resp.data
}
