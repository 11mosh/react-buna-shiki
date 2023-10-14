import './index.scss';
import Cabecalho from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';


export default function Index(){
    return(
        <div id='page-produtos-graos'>
            <Cabecalho />
            <main id='conteudo'>
                <section className='faixaApresentacao'>
                    <article>
                        <div>
                            <h3> Café 3 Corações: Edição Gourmet</h3>
                        </div>
                    </article>
                    <img src='/assets/images/produtos/graos/cafe3coracoes.svg' alt='imagem-suporte-cafe3coracoes' />
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
                            <img src='/assets/images/icon-seta-direita.svg' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <section className='faixaApresentacao faixaApresentacao2'>
                    <img src='/assets/images/produtos/graos/cafeOrfeu.png' alt='imagem-suporte-cafeOrfeu' />
                    <article>
                        <article>
                            <div>
                                <h3> Café Orfeu: 100% arábica</h3>
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
                            <img src='/assets/images/icon-seta-direita.svg' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <section className='faixaApresentacao faixaApresentacao3'>
                    <article>
                        <div>
                            <h3> Café Santa Mônica</h3>
                        </div>
                    </article>
                    <img src='/assets/images/produtos/graos/cafeSantaMonica.png' alt='imagem-suporte-cafeSantaMonica' />
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
                            <img src='/assets/images/icon-seta-direita.svg' alt='' />
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