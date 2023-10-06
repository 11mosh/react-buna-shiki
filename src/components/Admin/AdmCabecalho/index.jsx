import { useEffect, useState } from 'react'
import './index.scss'
import { useNavigate, Link } from 'react-router-dom'
import storage from 'local-storage'

export default function CabecalhoAdm() {
    const [adm, setAdm] = useState('')
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
                <img src='/assets/images/logo.svg' alt='logo' />
            </div>
            <div className='adm'>
                <article>
                    <h4> Bem vindo, {adm.nome}! </h4>
                </article>
                <img src={adm.img === null ? '/assets/images/img-adm-wagner.svg' : adm.img} alt='adm'/>
            </div>
        </div>
    )
}