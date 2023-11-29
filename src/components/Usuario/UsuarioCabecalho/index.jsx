import { Link, useNavigate } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react'
import { buscarCategorias } from '../../../api/produtoApi';
import { toast } from 'react-toastify';
import axios from 'axios';
import { URLRota } from '../../../constants.js';
import storage from 'local-storage'
import { buscarPedidosCliente } from '../../../api/usuarioApi';
import { buscarPedidosPorCliente } from '../../../api/pedidoApi';

export default function CabecalhoUsuario(props) {

    const [pesquisa, setPesquisa] = useState('');
    const navigate = useNavigate();
    const [mostrarInput, setMostrarInput] = useState(false)
    const [categorias, setCategorias] = useState([]);
    const [sugestao, setSugestao] = useState([]);
    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [categoriasLugar, setCategoriasLugar] = useState('')
    const [isPedidoEmAndamento, setIsPedidoEmAndamento] = useState(false)
    const caminhos = ['/produtos/cafeemgraos', '/produtos/cafeempo', '/produtos/cafeteiras', '/combos', '/produtos/filtros', '/produtos/capsulas', '/produtos/moedores', '/produtos/acessorios' ];

    async function pesquisaProdutos() {
        try {
            const respostaProdutos = await axios.get(URLRota + '/produtos');
            const produtos = respostaProdutos.data;
            const sugestoes = [];
          
            for (const produto of produtos) {
              const id = produto.id;
              const respostaImagem = await axios.get( URLRota + `/${id}/imagens`);
              const imagem = respostaImagem.data;
     
              const sugestaoobj = {
                nome: produto.produto,
                imagem: imagem[0].caminho,
                idProduto: id
              };
          
              sugestoes.push(sugestaoobj);
            }
          
            setSugestao(sugestoes);
          }
          catch(err){
            toast.error(err.message)
        }
    }
    
    async function buscarPedidos() {
        if(storage('usuario-logado')){
            const resp = await buscarPedidosPorCliente(storage('usuario-logado').id)
            if(resp.length !== 0){
                if(resp.find(item => item.situacao === 'Pagamento') || resp.find(item => item.situacao === 'Pedido realizado') ||  resp.find(item => item.situacao === 'Pedido em preparo') || resp.find(item => item.situacao === 'À caminho')){
                    setIsPedidoEmAndamento(true)
                }
            }
        }
    }
    function verificarPedidos() {
        if(isPedidoEmAndamento)
            return 'flex'
        else
            return 'none'
    }

 
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

    function verificarCategoriaSelecionada(categoria) {
        if(props.categoriaSelecionada === categoria)
            return 'bold'
        else
            return ''
    }

    function verificarLinha() {
        if(props.linha === 'aparecer')
            return 'flex'
        else
            return 'none'
    }


    function verificarMenu() {
        if(mostrarMenu === false)
            return 'none'
        else if(mostrarInput == false)
            return 'flex'
    }

    // async function verificarCompra() {
    //     try {
    //         if(storage('usuario-logado')){
    //             const id = storage('usuario-logado').id
    //             const resp = await buscarPedidosCliente()
    //         }
    //     }
    //     catch(err){
    //         if(err.response)
    //             toast.error(err.response.data.erro)
    //         else
    //             toast.error(err.message)
    //     }
    // }

    function verificarCarrinho(){
        if(storage('usuario-pedido')){
            if(storage('usuario-pedido').produtos.length !== 0 )
                return 'flex'
            else
                return 'none'
        }
        else 
            return 'none'
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

    async function assinatura () {
        
    }

    useEffect(() => {
        buscarCategoriasExibicao();
        pesquisaProdutos();
        verificarCarrinho()
        buscarPedidos()
    }, [])


    return(
        <div className='comp-usuario-cabecalho'>
            <div>
                <section id='s1'>
                    <section style={{ "display": exibirPesquisa}}>
                        <Link to='/carrinho'>
                            <div id='carrinho' style={{display: verificarCarrinho()}}></div>
                            <img src='/assets/images/icon-carrinho.svg' alt='carrinho'/>
                            <p> Carrinho </p>
                        </Link>
                        <Link to='/conta/dados-pessoais' onClick={() => assinatura()}>
                            <div id='conta' style={{display: verificarPedidos()}}></div>
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
                                        {sugestao
                                            .filter((item) => {
                                            const usuPesquisa = pesquisa.toLowerCase();
                                            const fullName = item.nome.toLowerCase();

                                            return (
                                                usuPesquisa &&
                                                fullName.startsWith(usuPesquisa) 
                                            );
                                            })
                                            .slice(0, 8)
                                            .map((item, index, array) => (
                                            <div
                                                onClick={() => {navigate(`/descricao/${item.idProduto}`); setPesquisa('')}}
                                                className="dropdown-row"
                                                key={item.nome}
                                            >
                                                <div>
                                                    <img src={item.imagem} alt="" srcset="" />
                                                    <h2>{item.nome}</h2>
                                                </div>
                                                {index !== array.length - 1 ? <hr /> : (<></>)}
                                            </div>
                                        ))}
                                    </div>
                                    </div>
                                    )
                                    : (<></>)}
                                
                        <img src='/assets/images/lupa.svg' alt="Erro ao exibir imagem" onClick={exibirPesquisa}/>
                        <img onClick={() => setMostrarMenu(!mostrarMenu)} id='menu' src='/assets/images/icon-menu.png' alt='icon-conta'/>
                        <nav style={{display: verificarMenu()}}>
                            {categorias.map(item => {
                                return(
                                    <div>
                                        <Link to={caminhos[item.id - 1]} key={item.id} style={{fontWeight: verificarCategoriaSelecionada(item.nome)}}> {item.nome} </Link>
                                    </div>
                                )
                            })}
                        </nav>
                    </div>
                </section>
                <section id='s2'>
                    <div className='campo1'>
                        <input type="text" placeholder='Pesquise por produtos aqui...' value={pesquisa} onChange={e => setPesquisa(e.target.value)}      />
                        <img src='/assets/images/lupa-dark.svg' alt="Erro ao exibir imagem"/>
                    </div>
                    <div className="dropdown">
                        {sugestao
                            .filter((item) => {
                                const usuPesquisa = pesquisa.toLowerCase();
                                const fullName = item.nome.toLowerCase();

                                return (
                                    usuPesquisa &&
                                    fullName.startsWith(usuPesquisa) 
                                );
                                })
                            .slice(0, 8)
                            .map((item, index, array) => (
                                <div
                                    onClick={() => {navigate(`/descricao/${item.idProduto}`); setPesquisa('')}}
                                    className="dropdown-row"
                                    key={item.nome}
                                >
                                    <div>
                                        <img src={item.imagem} alt="" srcSet="" />
                                        <h2>{item.nome}</h2>
                                    </div>
                                    {index !== array.length - 1 ? <hr /> : (<></>)}
                                </div>
                            ))}
                                    
                    </div>
                </section>
            </div>
            <nav className='categorias-nav'>
                <section>
                    {categorias.map(item => {
                        return(
                            <Link to={caminhos[item.id - 1]} key={item.id} style={{fontWeight: verificarCategoriaSelecionada(item.nome)}}> {item.nome} </Link>
                        )
                    })}
                </section>
            </nav>
            <hr id='hrsumir' style={{display: verificarLinha()}}/>
        </div>
    )
}