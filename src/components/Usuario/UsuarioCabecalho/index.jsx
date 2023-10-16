import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react'
import { buscarCategorias } from '../../../api/produtoApi';
import { toast } from 'react-toastify';

export default function CabecalhoUsuario() {

    const [pesquisa, setPesquisa] = useState('');
    const [mostrarInput, setMostrarInput] = useState(false)
    const [categorias, setCategorias] = useState([])
    const caminhos = ['/produtos/graos', '/produtos/cafe-em-po', '/produtos/cafeteiras', '/produtos/combos', '/produtos/filtros', '/produtos/capsulas', '/produtos/moedores', '/produtos/acessorios' ]

    function exibirPesquisa () {
        setMostrarInput(!mostrarInput)
            if(mostrarInput === false)
                return 'none'
    }

    function zerarPesquisa(event) {
        if (event.key === "Enter") {
            setPesquisa('');
        }
    }


    async function buscarCategoriasExibicao(){
        try{
            const categoriasBanco = await buscarCategorias()
            setCategorias(categoriasBanco)
        }
        catch(err){
            toast.error(err.response.data.erro)
        }
    }

    useEffect(() => {
        buscarCategoriasExibicao()
    }, [])

    return(
        <div className='comp-usuario-cabecalho'>
            <div>
                <section id='s1'>
                    <section style={{ "display": exibirPesquisa}}>
                        <Link to='/carrinho'>
                            <img src='/assets/images/icon-carrinho.svg' alt='carrinho'/>
                            <p> Carrinho </p>
                        </Link>
                        <Link to='/conta/cartoes'>
                            <img src='/assets/images/icon-conta.svg' alt='conta'/>
                            <p>Conta</p>
                        </Link>
                    </section>
                    <div id='logo'>
                        <Link to={'/'}><img src='/assets/images/logo.svg'  alt="Erro ao exibir imagem"/></Link>
                    </div>
                    <div id='invisivel'>
                        <Link to={'/'}><img src='/assets/images/logo-xicara-6.svg'  alt="Erro ao exibir imagem"/></Link>
                    </div>
                    <div className='lupa'>
                        {mostrarInput 
                            ? (<input type="text" placeholder='Pesquise por produtos aqui...' value={pesquisa} onChange={e => setPesquisa(e.target.value)} onKeyDown={zerarPesquisa} />) 
                            : ( <></> )}
                        <img src='/assets/images/lupa-1.svg' alt="Erro ao exibir imagem" onClick={exibirPesquisa}/>
                    </div>
                </section>
                <section id='s2'>
                    <div>
                        <input type="text" placeholder='Pesquise por produtos aqui...' value={pesquisa} onChange={e => setPesquisa(e.target.value)} onKeyDown={zerarPesquisa} />
                        <img src='/assets/images/lupa-dark.svg' alt="Erro ao exibir imagem" onClick={exibirPesquisa}/>
                    </div>
                </section>
            </div>
            <nav className='categorias-nav'>
                <section>
                    {categorias.map(item => {
                        return(
                            <Link to={caminhos[item.id - 1]}>{item.nome}</Link>
                        )
                    })}
                </section>
            </nav>
            <hr />
        </div>
    )
}