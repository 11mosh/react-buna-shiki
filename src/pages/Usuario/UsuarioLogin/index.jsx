import { Link, useNavigate } from 'react-router-dom';
import CabecalhoLink from '../../../components/Usuario/CabecalhoLink';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify'
import { Login } from '../../../api/usuarioApi';
import LoadingBar from 'react-top-loading-bar'
import storage from 'local-storage'

export default function Index() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [carregando, setCarregando] = useState(false)

    const ref = useRef()
    const navigate = useNavigate()

    async function LoginClick(){
        ref.current.continuousStart()
        setCarregando(true)
        try{
            const resp = await Login(email, senha)
            storage('usuario-logado', resp)
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
        catch(err){
            setCarregando(false)
            ref.current.complete()
            toast.warn(err.response.data.erro)
        }
    }
    
    function teclaPressionada(e){
        if(e.key === 'Enter')
            LoginClick()
    }

    useEffect(() => {
        if(storage('usuario-logado'))
            navigate('/')
    })


    return(
        <div className='pag-login'>
            <LoadingBar color='#F47E3C' ref={ref}/>
            <CabecalhoLink />
                <section>
                    <article id='background'></article>
                    <article id='conteudo'>
                        <h1> LOGIN </h1>
                        <div>
                            <article>
                                <input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} onKeyUp={teclaPressionada}/>
                                <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} onKeyUp={teclaPressionada}/>
                            </article>
                            <button onClick={LoginClick} disabled={carregando}> Logar </button>
                            <article>
                                <Link>Esqueceu a senha?</Link>
                                <div id='ajuda'>
                                    <div>
                                        <p> Não tem um conta? </p>
                                    </div>
                                    <div>
                                        <Link to='/cadastro'>Cadastre-se!</Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                </section>
            <UsuarioRodape />
        </div>
    )
}