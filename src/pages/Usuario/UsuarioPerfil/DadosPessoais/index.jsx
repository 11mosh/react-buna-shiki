import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import './index.scss';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta'
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { useNavigate } from 'react-router';
import { alterarCliente } from '../../../../api/usuarioApi';
import { toast } from 'react-toastify';


export default function Index(){
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [dtNascimento, setDtNascimento] = useState('')
    const [botaoSalvar, setBotaoSalvar] = useState(false)
    const navigate = useNavigate()

    function verificarBotaoSalvar() {
        if(botaoSalvar === false)
            return 'none'
        else if(botaoSalvar === true){
            return 'flex'
        }
    }
    function verificarAlteracao(campo, valor){
        let alterou = 'não'
        const cliente = storage('usuario-logado')
        if(campo === 'nome') {
            if(valor !== cliente.nome){
                alterou = 'sim'
            }
            else{
                alterou = 'não'
            }
        }
        else if(campo === 'telefone'){
            if(telefone !== cliente.telefone){
                alterou = 'sim'
            }
            else{
                alterou = 'não'
            }
        }
        else if(campo === 'cpf'){
            if(cpf !== cliente.cpf){
                alterou = 'sim'
            }
            else{
                alterou = 'não'
            }
        }
        else if(campo === 'email'){
            if(valor !== cliente.email){
                alterou = 'sim'
            }
            else{
                alterou = 'não'
            }
        }
        else if(campo === 'nascimento'){
            if(valor !== cliente.nascimento){
                alterou = 'sim'
            }
            else{
                alterou = 'não'
            }
        }

        if(alterou === 'sim'){
            setBotaoSalvar(true)
        }
        else if (alterou === 'não'){
            setBotaoSalvar(false)
        }

    }

    function completandoInputs(){
        const cliente = storage('usuario-logado')

        setNome(cliente.nome)
        setCPF(cliente.cpf)
        setTelefone(cliente.telefone)
        setEmail(cliente.email)
        setDtNascimento(cliente.nascimento)
    }

    async function alterarClienteClick(){
        try {
            const dados = {
                telefone: telefone,
                email: email,
                cpf: cpf,
                nome: nome,
                nascimento: dtNascimento
            }
            const id = storage('usuario-logado').id
            await alterarCliente(id, dados)

            toast.success('Alterações salvas!')
            setBotaoSalvar(false)

            const cliente = storage('usuario-logado')
            cliente.nome = nome
            cliente.telefone = telefone
            cliente.email = email
            cliente.cpf = cpf
            cliente.nascimento = dtNascimento
            storage('usuario-logado', cliente)
        }
        catch(err){
            if(err.response)
                toast.warn(err.response.data.erro)
            else
                toast.warn(err.message)
        }

    }
    
    function mudarCPF(alteracao){
        let novaAlteracao = alteracao.slice(cpf.length)
        novaAlteracao = Number(novaAlteracao)
        
        if(alteracao.length < cpf.length)
            setCPF(alteracao)

        else if(isNaN(novaAlteracao) === false){
            if((alteracao.length === 3 && alteracao.length > cpf.length) || (alteracao.length === 7 && alteracao.length > cpf.length)){
                setCPF(`${alteracao}.`)
            }
            else if(alteracao.length === 11 && alteracao.length > cpf.length){
                setCPF(`${alteracao}-`)
            }
            else if(alteracao.length <= 14){
                setCPF(alteracao)
            }
        }
    }
    function mudarTelefone(alteracao){
        let novaAlteracao = alteracao.slice(telefone.length)
        novaAlteracao = Number(novaAlteracao)
        
        if(alteracao.length < telefone.length)
            setTelefone(alteracao)

        else if(isNaN(novaAlteracao) === false || alteracao === '+'){
            if(telefone.startsWith('+')){
                if((alteracao.length === 3 && alteracao.length > telefone.length) || (alteracao.length === 6 && alteracao.length > telefone.length)) {
                    setTelefone(`${alteracao} `)
                }
                else if(alteracao.length === 12 && alteracao.length > telefone.length){
                    setTelefone(`${alteracao}-`)
                }
                else if(alteracao.length <= 17){
                    setTelefone(alteracao)
                }
            }
            else{
                if(alteracao.length === 2 && alteracao.length > telefone.length) {
                    setTelefone(`${alteracao} `)
                }
                else if(alteracao.length === 8 && alteracao.length > telefone.length){
                    setTelefone(`${alteracao}-`)
                }
                else if(alteracao.length <= 13){
                    setTelefone(alteracao)
                }
            }
        }
    }
    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/login/conta')
        }
        else{
            completandoInputs()
        }
        
        // eslint-disable-next-line
    }, [])
    
    
    return(
        <div id='page-conta-dados-pessoais'>
            <CabecalhoUsuario linha='aparecer'/>
            <div id='conteudo'>
                <main>
                    <BarraNavegacao selecionar='DadosPessoais' />
                    <section>
                        <h2> Dados pessoais</h2>
                        <div id='form'>
                            <article id='a1'>
                                <label> Nome </label>
                                <input type='txt' placeholder='ex.: João Silva' value={nome} onChange={e => {setNome(e.target.value); verificarAlteracao('nome', e.target.value)}}/>
                            </article>
                            <div>
                                <div>
                                    <article>
                                        <label> CPF </label>
                                        <input type='txt' placeholder='000.000.000-00' value={cpf} onChange={e => {mudarCPF(e.target.value); verificarAlteracao('cpf', e.target.value)}}/>
                                    </article>
                                    <article>
                                        <label> E-mail </label>
                                        <input type='txt' placeholder='ex.: exemplo@gmail.com' value={email} onChange={e => {setEmail(e.target.value); verificarAlteracao('email', e.target.value)}}/>
                                    </article>
                                </div>
                                <div>
                                    <article>
                                        <label> Telefone </label>
                                        <input type='tel' placeholder='+00 00 00000-0000' value={telefone} onChange={e => {mudarTelefone(e.target.value); verificarAlteracao('telefone', e.target.value)}}/>
                                    </article>
                                    <article>
                                        <label> Data de nascimento </label>
                                        <input type='date' value={dtNascimento} onChange={e => {setDtNascimento(e.target.value); verificarAlteracao('nascimento', e.target.value)}}/>
                                    </article>
                                </div>
                            </div>
                            <article id='botoes'>
                                <button id='alteracoes' style={{display: verificarBotaoSalvar()}} onClick={alterarClienteClick}> Salvar alterações</button>
                            </article>
                        </div>
                    </section>
                </main>
            </div>
            <UsuarioRodape />
        </div>
    )
}