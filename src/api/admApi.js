import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function login(email, senha) {
    const resp = await api.post('/adm/login', {
        email: email,
        senha: senha
    })

    return resp.data
}