import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react'
import { buscarCategorias } from '../../../api/produtoApi';
import { toast } from 'react-toastify';

export default function CabecalhoUsuario() {

    const [pesquisa, setPesquisa] = useState('');
    const [mostrarInput, setMostrarInput] = useState(false)
    const [categorias, setCategorias] = useState([]);
    const [exibirSugestao, setExibirSugestao] = useState(false);
    const caminhos = ['/produtos/graos', '/produtos/cafe-em-po', '/produtos/cafeteiras', '/produtos/combos', '/produtos/filtros', '/produtos/capsulas', '/produtos/moedores', '/produtos/acessorios' ];

    const frutas = [
        { nome: 'Maçã', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Banana', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Morango', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Pêra', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Uva', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Abacaxi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Laranja', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Melancia', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Cereja', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' },
        { nome: 'Kiwi', imagem: '/assets/images/cafeteiraa.png' }
      ];
      

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
            toast.error('Erro técnico: não foi possível buscar as categorias existentes')
        }
    };


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
                            ? (<div>
                                    <div className='input-pesquisar'>
                                        <input type="text" placeholder='Pesquise por produtos aqui...' value={pesquisa}
                                        onChange={e => setPesquisa(e.target.value)} onKeyDown={zerarPesquisa} />
                                    </div>

                                    <div className="dropdown">
                                        {frutas
                                            .filter((item) => {
                                            const usuPesquisa = pesquisa.toLowerCase();
                                            const fullName = item.nome.toLowerCase();

                                            return (
                                                usuPesquisa &&
                                                fullName.startsWith(usuPesquisa) 
                                            );
                                            })
                                            .slice(0, 8)
                                            .map((item) => (
                                            <div
                                                onClick={() => setPesquisa('')}
                                                className="dropdown-row"
                                                key={item.nome}
                                            >
                                                <div>
                                                    <img src={item.imagem} alt="" srcset="" />
                                                    <h2>{item.nome}</h2>
                                                </div>
                                                <hr />
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                    )
                                    : (<></>)}
                                
                        <img src='/assets/images/lupa-1.svg' alt="Erro ao exibir imagem" onClick={exibirPesquisa}/>
                    </div>
                </section>
                <section id='s2'>
                    <div className='campo1'>
                        <input type="text" placeholder='Pesquise por produtos aqui...' value={pesquisa} onChange={e => setPesquisa(e.target.value)} onKeyDown={zerarPesquisa} />
                        <img src='/assets/images/lupa-dark.svg' alt="Erro ao exibir imagem" onClick={exibirPesquisa}/>
                    </div>
                    <div className="dropdown">
                        {frutas
                            .filter((item) => {
                            const usuPesquisa = pesquisa.toLowerCase();
                            const fullName = item.nome.toLowerCase();

                            return (
                                usuPesquisa &&
                                fullName.startsWith(usuPesquisa) 
                            );
                            })
                            .slice(0, 8)
                            .map((item) => (
                            <div
                                onClick={() => setPesquisa('')}
                                className="dropdown-row"
                                key={item.nome}
                            >
                                <div>
                                    <img src={item.imagem} alt="" srcset="" />
                                    <h2>{item.nome}</h2>
                                </div>
                                <hr />
                            </div>
                        ))}
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
            <hr id='hrsumir'/>
        </div>
    )
}