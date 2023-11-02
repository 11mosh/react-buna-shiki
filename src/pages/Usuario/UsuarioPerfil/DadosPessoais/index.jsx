import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import './index.scss';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta'
import { useEffect, useState } from 'react';
import storage from 'local-storage'


export default function Index(){
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [dtNascimento, setDtNascimento] = useState('')
    const [botaoExcluir, setBotaoExcluir] = useState(true)
    const [botaoSalvar, setBotaoSalvar] = useState(false)

    function verificarBotaoSalvar() {
        if(botaoSalvar === false)
            return 'none'
        else if(botaoSalvar === true){
            return 'flex'
        }
    }
    function verificarBotaoExcluir() {
        if(botaoExcluir === false)
            return 'none'
        else if(botaoExcluir === true){
            return 'flex'
        }
    }
    function verificarAlteracao(){
        const cliente = storage('usuario-logado')
        // if(cliente.nome === nome)

    }

    function completandoInputs(){
        const cliente = storage('usuario-logado')

        setNome(cliente.nome)
        setCPF(cliente.cpf)
        setTelefone(cliente.telefone)
        setEmail(cliente.email)
        setDtNascimento(cliente.nascimento)
    }
    
    useEffect(() => {
        completandoInputs()
    }, [])
    
    
    return(
        <div id='page-conta-dados-pessoais'>
            <CabecalhoUsuario />
            <div id='conteudo'>
                <main>
                    <BarraNavegacao selecionar='DadosPessoais' />
                    <section>
                        <h2> Dados pessoais</h2>
                        <div id='form'>
                            <article id='a1'>
                                <label> Nome </label>
                                <input type='txt' placeholder='ex.: João Silva' value={nome} onChange={e => {setNome(e.target.value); verificarAlteracao(true)}}/>
                            </article>
                            <div>
                                <div>
                                    <article>
                                        <label> CPF </label>
                                        <input type='txt' placeholder='000.000.000-00' value={cpf} onChange={e => {setCPF(e.target.value); verificarAlteracao(true)}}/>
                                    </article>
                                    <article>
                                        <label> E-mail </label>
                                        <input type='txt' placeholder='ex.: exemplo@gmail.com' value={email} onChange={e => {setEmail(e.target.value); verificarAlteracao(true)}}/>
                                    </article>
                                </div>
                                <div>
                                    <article>
                                        <label> Telefone </label>
                                        <input type='tel' placeholder='00 00000-0000' value={telefone} onChange={e => {setTelefone(e.target.value); verificarAlteracao(true)}}/>
                                    </article>
                                    <article>
                                        <label> Data de nascimento </label>
                                        <input type='date' value={dtNascimento} onChange={e => {setDtNascimento(e.target.value); verificarAlteracao(true)}}/>
                                    </article>
                                </div>
                            </div>
                            <article id='botoes'>
                                <button id='alteracoes' style={{display: verificarBotaoSalvar()}}> Salvar alterações</button>
                                <button style={{display: verificarBotaoExcluir()}}> Excluir conta </button>
                            </article>
                        </div>
                    </section>
                </main>
            </div>
            <UsuarioRodape />
        </div>
    )
}