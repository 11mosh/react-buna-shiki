import axios from 'axios';
import { URLRota } from '../constants'

const api = axios.create({
    baseURL: URLRota
})

// Cadastrando 

export async function CadastrarCliente(nome, cpf, telefone, email, senha) {
    const resp = await api.post('/cliente', {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        senha: senha
    })
    return resp.data
}
export async function CadastrarEndereco(cep, rua, cidade, complemento, numero, id){
    const resp = await api.post(`/endereco/${id}`, {
        cep: cep,
        rua: rua,
        cidade: cidade,
        complemento: complemento,
        numero: numero
    })

    return resp.data
}


// Buscando

export async function Login(email, senha){
    const resp = await api.post('/cliente/login', {
        email: email,
        senha: senha
    })

    return resp.data
}

export async function buscarEnderecos(idCliente){
    const resp = await api.get(`/enderecos/${idCliente}`)

    return resp.data
}

export async function buscarCep(cep){
    const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return resp.data
}

export async function buscarCartoes(id){
    const resp = await api.get('/cartoes/' + id);

    return resp.data
}

export async function buscarPedidosCliente(id) {
    const resp = await api.get(`/pedidos/primeiro-item/${id}`)

    return resp.data
}


// Alterando

export async function alterarEndereco(endereco){
    await api.put(`/endereco/${endereco.id}`, {
        rua: endereco.rua,
        cidade: endereco.cidade,
        complemento: endereco.complemento,
        cep: endereco.cep,
        numero: endereco.numero
    })
}

export async function alterarCliente(id, dados){
    await api.put(`/cliente/${id}`, {
        telefone: dados.telefone,
        email: dados.email,
        nome: dados.nome,
        nascimento: dados.nascimento,
        cpf: dados.cpf
    })
}


// Deletando

export async function deletarEndereco(id){
   await api.delete(`/endereco?id=${id}`)
}