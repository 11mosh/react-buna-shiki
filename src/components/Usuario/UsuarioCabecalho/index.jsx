import { Link } from 'react-router-dom';
import './index.scss'
import { useState } from 'react'

export default function CabecalhoUsuario() {

    const [pesquisa, setPesquisa] = useState('');
    const [mostrarInput, setMostrarInput] = useState(false)

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
            <div>
                <section>
                    <article>
                        <img src='/assets/images/icon-carrinho.svg' alt='carrinho'/>
                        <p> Carrinho </p>
                    </article>
                    <article>
                        <img src='/assets/images/icon-conta.svg' alt='conta'/>
                    <p>Conta</p>
                    </article>
                </section>
                <div>
                    <img src='/assets/images/logo.svg' alt="Erro ao exibir imagem"/>
                </div>
                <div className='lupa'>
                    {mostrarInput 
                        ? (<input type="text" placeholder='Pesquise por produtos aqui...' value={pesquisa} onChange={e => setPesquisa(e.target.value)} onKeyDown={teste} />) 
                        : ( <></> )}F
                    <img src='/assets/images/lupa.svg' alt="Erro ao exibir imagem" onClick={exibirPesquisa}/>
                </div>
            </div>
            <nav className='categorias-nav'>
                <Link to='/produtos/cafe-em-po'>Café em pó</Link>
                <Link to='/produtos/combos'>Combos</Link>
                <Link to='/produtos/graos'>Grãos</Link>
                <Link to='/produtos/cafeteiras'>Cafeteiras</Link>
                <Link to='/produtos/filtros'>Filtros</Link>
                <Link to='/produtos/capsulas'>Cápsulas</Link>
                <Link to='/produtos/moedores'>Moedores</Link>
            </nav>
        </div>
    )
}