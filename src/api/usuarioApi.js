import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
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


// Deletando

export async function deletarEndereco(id){
   await api.delete(`/endereco?id=${id}`)
}