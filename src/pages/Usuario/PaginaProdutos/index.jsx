import './index.scss';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { Link } from 'react-router-dom';

export default function Index(){
    return(
        <div id='page-usuario-produtos'>
            <Cabecalho />
            <main>
                <section>
                    <Link to='/'> Home page </Link>
                    <Link to=''> Grãos </Link>
                </section>
                <section>
                    <article>
                        <div>
                            <h3> Café 3 Corações: Edição Gourmet</h3>
                        </div>
                    </article>
                    <article>
                        <img src='' alt='imagem-suporte' />
                    </article>
                </section>
                <section>
                    <article>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> 3 corações arábica 250g</p>
                            <button> Mais detalhes</button>
                        </div>
                    </article>
                    <article>
                        <button>
                            <img src='/assets/images/divisa 1.png' alt='' />
                        </button>
                        <h6> Visualizar mais produtos</h6>
                    </article>
                </section>
                <section>
                    <article>
                        <img src='' alt='imagem-suporte' />
                    </article>
                    <article>
                        <div>
                            <h3> Café Orfeu: 100% arábica</h3>
                        </div>
                    </article>
                </section>
                <section>
                    <article>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Orfeu clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Orfeu clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Orfeu clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Orfeu clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                    </article>
                    <article>
                        <button>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                        </button>
                        <h6> Visualizar mais produtos</h6>
                    </article>
                </section>
                <section>
                    <article>
                        <div>
                            <h3> Café Santa Mônica</h3>
                        </div>
                    </article>
                    <article>
                        <img src='' alt='imagem-suporte' />
                    </article>
                </section>
                <section>
                    <article>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Santa Mônica Clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Santa Mônica Clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Santa Mônica Clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                        <div>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                            <p> Santa Mônica Clássico 1kg</p>
                            <button> Mais detalhes</button>
                        </div>
                    </article>
                    <article>
                        <button>
                            <img src='/assets/images/cafe3coracoes.png' alt='' />
                        </button>
                        <h6> Visualizar mais produtos</h6>
                    </article>
                </section>
                <hr />
                <section>
                    <h5> Aceitamos as seguintes formas de pagamento:</h5>
                    <article>
                        <div>
                            <img src='' alt='' />
                            <p> Pix </p>
                        </div>
                        <div>
                            <img src='' alt='' />
                            <p> Pix </p>
                        </div>
                    </article>
                    <article>
                        <img src='' alt='' />
                    </article>
                </section>
            </main>
            <UsuarioRodape />
        </div>
    )

}