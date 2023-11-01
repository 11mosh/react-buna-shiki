import './index.scss';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buscarProdutosPorMarca } from '../../../api/produtoApi';
import { toast } from 'react-toastify';


export default function Index(){
    const categorias = [{categoria: 'cafeemgraos', secoes: [{marca: '3 Corações: Edição Gourmet', imagemSuporte: '/assets/images/produtos/graos/cafe3coracoes.svg'}, {marca: 'Orfeu: 100% arábica', imagemSuporte: '/assets/images/produtos/graos/cafeOrfeu.png'}, {marca: 'Santa Mônica', imagemSuporte: '/assets/images/produtos/graos/cafeSantaMonica.png'}]}, {categoria: 'filtros', secoes: [{marca: 'Hario V60', imagemSuporte: ''}, {marca: 'Chemex: Bonded Filters', imagemSuporte: ''}, {marca: '3 corações', imagemSuporte: ''}]}, {categoria: 'moedores', secoes: [{marca: 'Hario', imagemSuporte: ''}, {marca: 'Tramontina ', imagemSuporte: ''}, {marca: 'Hamilton Beach', imagemSuporte: ''}]}, {categoria: 'cafeteiras', secoes: [{marca: 'Nespresso', imagemSuporte: ''}, {marca: 'Oster', imagemSuporte: ''}, {marca: 'DeLonghi', imagemSuporte: ''}]}, {categoria: 'capsulas', secoes: [{marca: 'Orfeu Cafés Especiais', imagemSuporte: ''}, {marca: 'Baggio Café', imagemSuporte: ''}, {marca: `L'or Expresso`, imagemSuporte: ''}]}, {categoria: 'cafeempo', secoes: [{marca: 'Baggio Café', imagemSuporte: ''}, {marca: 'Starbucks', imagemSuporte: ''}, {marca: 'Melitta', imagemSuporte: ''}]}, {categoria: 'acessorios', secoes: [{marca: 'Garrafas térmicas Stanley', imagemSuporte: ''}, {marca: 'Bules Electrolux', imagemSuporte: ''}, {marca: 'Coadores Hario', imagemSuporte: ''}]}]
    const [categoriaAtual, setCategoriaAtual] = useState([{marca: '', imagemSuporte: ''}, {marca: '', imagemSuporte: ''}, {marca: '', imagemSuporte: ''}])
    const { categoria } = useParams()
    const [produtos, setProdutos] = useState([])
    
    async function buscarProdutos() {
        try {
            let produtosBanco = []
            // console.log(categoriaAtual);
            if(categoriaAtual[0].marca !== ''){
                console.log('oi');
                for(let cont = 0; cont < 3; cont++){
                    produtosBanco[cont] = await buscarProdutosPorMarca(categoriaAtual[cont].marca)
                }
            }
            setProdutos(produtosBanco)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }



    useEffect(() => {
        for(let item of categorias){
            if(item.categoria === categoria){
                setCategoriaAtual(item.secoes)
                console.log(categoriaAtual);
                buscarProdutos()
            }
        }
    }, [])
    
    return(
        <div id='page-produtos'>
            <Cabecalho />
            <main id='conteudo'>
                <section className='faixaApresentacao'>
                    <article>
                        <div>
                            <h3> {categoriaAtual[0].marca} </h3>
                        </div>
                    </article> 
                    <img src={categoriaAtual[0].imagemSuporte} alt='imagem-suporte-cafe3coracoes' />
                </section>
                <section className='faixaProdutos faixaProdutos1'>
                    <article >
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                    </article>
                    <aside>
                        <button>
                            <img src='/assets/images/divisa-branca-direita.png' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <section className='faixaApresentacao faixaApresentacao2'>
                    <img src={categoriaAtual[1].imagemSuporte} alt='imagem-suporte-cafeOrfeu' />
                    <article>
                        <article>
                            <div>
                                <h3> {categoriaAtual[1].marca}</h3>
                            </div>
                        </article>
                    </article>
                </section>
                <section className='faixaProdutos faixaProdutos2'>
                    <article>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                    </article>
                    <aside>
                        <button>
                            <img src='/assets/images/divisa-branca-direita.png' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <section className='faixaApresentacao faixaApresentacao3'>
                    <article>
                        <div>
                            <h3> {categoriaAtual[2].marca}</h3>
                        </div>
                    </article>
                    <img src={categoriaAtual[2].imagemSuporte} alt='imagem-suporte-cafeSantaMonica' />
                </section>
                <section className='faixaProdutos faixaProdutos3'>
                    <article>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.svg' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                    </article>
                    <aside>
                        <button>
                            <img src='/assets/images/divisa-branca-direita.png' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <hr />
                <section id='formasPagamento'>
                    <h4> Aceitamos as seguintes formas de pagamento:</h4>
                    <article>
                        <div>
                            <img src='/assets/images/formas de pagamento/pix.svg' alt='' />
                            <p> Pix </p>
                        </div>
                        <div>
                            <img src='/assets/images/formas de pagamento/cartao.svg' alt='' />
                            <p> Cartão de Débito/Crédito </p>
                        </div>
                    </article>
                    <article id='empresas'>
                        <img src='/assets/images/formas de pagamento/empresas/payPal.svg' alt='pay pal' />
                        <img src='/assets/images/formas de pagamento/empresas/visaMastercardElo.svg' alt='visa/mastercard/elo' />
                        <img id='pix' src='/assets/images/formas de pagamento/empresas/pix.svg' alt='pix'/>
                        <img id='compraSegura' src='/assets/images/formas de pagamento/empresas/compraSegura.svg' alt='compra segura' />
                    </article>
                </section>
            </main>
            <UsuarioRodape />
        </div>
    )

}