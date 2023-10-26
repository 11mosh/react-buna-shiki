import { useState, useRef, useEffect } from 'react';
import CabecalhoLink from '../../../components/Usuario/CabecalhoLink';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';
import { toast } from 'react-toastify'
import {CadastrarCliente, CadastrarEndereco } from '../../../api/usuarioApi';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import { useNavigate, Link } from 'react-router-dom';
import storage from 'local-storage'

export default function Index() {
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [cep, setCEP] = useState('')
    const [rua, setRua] = useState('Rua')
    const [cidade, setCidade] = useState('Cidade')
    const [complemento, setComplemento] = useState('')
    const [nrEndereco, setNrEndereco] = useState('')
    const [carregando, setCarregando] = useState(false)
    const [buscaCepRepetido, setBuscaCepRepetido] = useState('')

    const ref = useRef()
    const navigate = useNavigate()

    async function Cadastrar(){
        setCarregando(true)
        try{
            if(buscaCepRepetido !== cep){
                let certo = await BuscarCep()
                if(certo === true){
                    let infoCliente = undefined
                    if(!infoCliente){
                        infoCliente = await CadastrarCliente(nome, cpf, telefone, email, senha)
                    }
                    await CadastrarEndereco(cep, rua, cidade, complemento, nrEndereco, infoCliente.id)
                    toast.success('Cadastro finalizado!')
                    ref.current.continuousStart()
                    storage('usuario-logado', infoCliente)
                    setTimeout(() => {
                        navigate('/cliente')
                    }, 3000)
                }

            }
            else if (cidade !== 'Cidade' && rua !== 'Rua' && rua !== undefined && cidade !== undefined && rua !== '' && cidade !== ''){
                let infoCliente = undefined
                if(!infoCliente){
                    infoCliente = await CadastrarCliente(nome, cpf, telefone, email, senha)
                }
                await CadastrarEndereco(cep, rua, cidade, complemento, nrEndereco, infoCliente.id)
                toast.success('Cadastro finalizado!')
                ref.current.continuousStart()
                storage('usuario-logado', infoCliente)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            }
            else{
                toast.error('CEP inválido')
                setCarregando(false)
            }
        }
        catch(err){ 
            setCarregando(false)
            ref.current.complete();
            toast.warn(err.response.data.erro)
        }

    }

    async function BuscarCep() {
        try{
            setBuscaCepRepetido(cep)
            if(buscaCepRepetido !== cep){
                let buscaCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                if(buscaCep){
                    setRua(buscaCep.data.logradouro)
                    setCidade(buscaCep.data.localidade)
                    return true
                }
                else{
                    setCarregando(false)
                }
            }
        }
        catch(err){
            toast.error('CEP inválido')
        }
    }
    
    useEffect(() => {
        if(storage('usuario-logado'))
            navigate('/')
    })

    function verificarTecla(e){
        if(e.key === 'Enter')
            Cadastrar()
    }

    return(
        <div className='pag-cadastro'>
            <CabecalhoLink />
            <LoadingBar color='#F47E3C' ref={ref}/>
                <section>
                    <article id='background'></article>
                    <article>
                        <h1>
                            CADASTRAR-SE
                        </h1>
                        <form>
                            <article>
                                <div>
                                    <h3> Informações pessoais: </h3>
                                    <img src='/assets/images/asterisco.svg' alt='asterisco'/>
                                </div>
                                <input className='input' type='text' placeholder='Nome Completo' value={nome} onChange={e => setNome(e.target.value)}/>
                                <input className='input' type='text' placeholder='CPF' value={cpf} onChange={e => setCPF(e.target.value)}/>
                                <input className='input' type='text' placeholder='Telefone' value={telefone} onChange={e => setTelefone(e.target.value)} />
                                <input className='input' type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                                <input className='input' type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                            </article>
                            <article>
                                <div id='residencial'>
                                    <h3> Informações residenciais: </h3>
                                    <img src='/assets/images/asterisco.svg' alt='asterisco'/>
                                </div>
                                <input className='input inputResidenciais' type='text' placeholder='CEP' value={cep} onChange={e => setCEP(e.target.value)} />
                                <div className='input enderecoPreenchido'>{rua}</div>
                                <div className='input enderecoPreenchido'>{cidade}</div>
                                <input className='input inputResidenciais' type='text' placeholder='Número da casa' value={nrEndereco} onChange={e => {setNrEndereco(e.target.value); BuscarCep() }} />
                                <input className='input inputResidenciais' type='text' placeholder='Complemento' value={complemento} onChange={e => setComplemento(e.target.value)} onKeyDown={verificarTecla} />
                            </article>
                        </form>
                        <div id='cadastrar'>
                            <button onClick={Cadastrar} disabled={carregando}> Finalizar cadastro </button>
                            <div>
                                <div>
                                    <p> Já tem uma conta? </p>
                                </div>
                                <div>
                                    <Link to='/login'>Faça login!</Link>
                                </div>
                            </div>
                        </div>

                    </article>
                </section>
            <UsuarioRodape />
        </div>
    ) 
}