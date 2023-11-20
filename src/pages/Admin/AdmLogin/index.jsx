import { useState, useRef, useEffect } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
import { login } from '../../../api/admApi';
import storage from 'local-storage'

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('')

    const navigate = useNavigate();
    const ref = useRef();


    async function loginClick() {
        ref.current.continuousStart();
        setCarregando(true)
        try{
            const resp = await login(email, senha)
            storage('adm-logado', resp)

            setTimeout(() => {
                navigate('/adm/inicio')
            }, 3000)
        }
        catch(err){
            ref.current.complete();
            setCarregando(false)
            setErro(err.response.data.erro)
        }
    }

    function teclaPressionada(e) {
        if(e.key === 'Enter'){
            loginClick()
        }
    }

    useEffect(() => {
        if(storage('adm-logado')){
            navigate('/adm/inicio')
        }
    })
    return(
        <div className='page-adm-login'>
            <LoadingBar color='#FF7223' ref={ref}/>
            <section className='cabecalho'>
                <img src='/assets/images/logo.svg' alt='logo' />
            </section>
            <section className='conteudo'>
                <article className='img'>
                    <img src='/assets/images/login-adm/logo-adm.svg' alt='logo' />
                </article>
                <article className='login'>
                    <main>
                        <h2> LOGIN </h2>
                        <input type='txt' value={email} onKeyUp={teclaPressionada} onChange={e => {setEmail(e.target.value); setErro('')}} placeholder='Email'/>
                        <input type='password' value={senha} onKeyUp={teclaPressionada} onChange={e => {setSenha(e.target.value); setErro('')}} placeholder='Password'/>
                        <button onClick={loginClick} disabled={carregando}> Login </button>
                        <p style={{color: 'red', fontWeight: 500}}>{erro}</p>
                    </main>
                </article>
            </section>
        </div>
    )
}