import './index.scss'
import { useState } from 'react'

export default function CabecalhoUsuario() {

    const [pesquisa, setPesquisa] = useState('');
    const [mostrarInput, setMostrarInput] = useState(false)
    const [mostrarMenu, setMostrarMenu] = useState(false)

    function exibirPesquisa () {
        setMostrarInput(!mostrarInput)
    }

    function teste (event) {
        if (event.key == "Enter") {
            // código para pesquisar
            zerarPesquisa()
        }
    }

    function zerarPesquisa() {
        setPesquisa('');
    }

    return(
        <div className='comp-usuario-cabecalho'>
            <section>
                <article>
                    <img src='/assets/images/icon-carrinho.svg' alt='carrinho'/>
                    <p> Carrinho </p>
                </article>
                <article>
                    <img src='/assets/images/icon-conta.svg' alt='conta'/>
                   <p>Conta</p>
                </article>
                <article id='invisivel'>
                    <img src='/assets/images/tresBarras.svg' alt='tres barras' onClick={e => {if(mostrarMenu === false){setMostrarMenu(true)} else{setMostrarMenu(false)}}}/>
                </article>
            </section>
            <div id='img'>
                <img src='/assets/images/logo.svg' alt="Erro ao exibir imagem"/>
            </div>
            <div className='lupa'>
                {mostrarInput 
                    ? (<input type="text" placeholder='Pesquise por produtos aqui...' value={pesquisa} onChange={e => setPesquisa(e.target.value)} onKeyDown={teste} />) 
                    : ( <></> )}
                <img src='/assets/images/lupa.svg' alt="Erro ao exibir imagem" onClick={exibirPesquisa}/>
            </div>
        </div>
    )
}