import { useEffect, useState } from 'react'
import './index.scss'
import { useNavigate, Link } from 'react-router-dom'
import storage from 'local-storage'

export default function CabecalhoAdm() {
    const [adm, setAdm] = useState({})
    const navigate = useNavigate()

    // useEffect(() => {
    //     if(!storage('adm-logado')){
    //         navigate('/adm')
    //     }else{
    //         setAdm(storage('adm-logado'))
    //     }
    // }, [navigate])
   
    return(
        <div className='comp-adm-cabecalho'>
            <section>
                <Link to='/adm/inicio'>
                    <img src='/assets/images/icon-adm-casa.svg' alt='casa'/>
                    <p> Tela Inicial </p>
                </Link>
            </section>
            <div className='logo'>
                <img id='logo' src='/assets/images/logo.svg' alt='logo' />
                <img id='logo-xicara' src='/assets/images/logo-xicara-6.svg' alt='logo-xicara' />
            </div>
            <div className='adm'>
                <article>
                    <h4> Bem vindo, {adm.nome ? adm.nome : '' }! </h4>
                </article>
                <img src={adm.img ? adm.img : '/assets/images/img-adm-wagner.svg'} alt='adm'/>
            </div>
        </div>
    )
}