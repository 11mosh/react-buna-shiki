import './index.scss';
import {Link} from 'react-router-dom';
import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape'

export default function Combos(){
    return(
        <div id='page-combos'>
            <CabecalhoUsuario />
            <main id='conteudo'>
                <section id='s1'>
                    <article id='a1'>
                        <h2> Combo iniciante </h2>
                        <div>
                            <section>
                                <div>
                                    <img id='combo-esquerda' src='/assets/images/cafe3coracoes.png' alt='' />
                                    <img  src='/assets/images/cafe3coracoes.png' alt='' />
                                    <img id='combo-direita' src='/assets/images/cafe3coracoes.png' alt='' />    
                                </div>
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00 x 3</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                        </div>
                    </article>
                    <article id='a2'>
                        <div>
                            <h2> Por apenas </h2>
                            <h2 className='precoMarrom'> R$ 430,00 </h2>
                        </div>
                        <button className='btLaranja'> Adicionar no carrinho</button>
                    </article>
                </section>
                <section id='s2'>
                    <article id='a1'>
                        <h2> Combo 4 cafés variado </h2>
                        <div>
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                        </div>
                    </article>
                    <article id='a2'>
                        <div id='text'>
                            <h2> Por apenas </h2>
                            <h2 className='precoMarrom'> R$ 430,00 </h2>
                        </div>
                        <div id='buttons'>
                            <button className='btMarrom' > Combo Santa Mônica</button>
                            <button className='btMarrom' > Combo 3 corações </button>
                            <button className='btLaranja'> Adicionar no carrinho</button>
                        </div>
                    </article>
                </section>
                <section id='s3'>
                    <article id='a1'>
                        <h2> Combo diversificado </h2>
                        <div>
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                            <img src='/assets/images/icon-mais.png' alt='' />
                            <section>
                                <img src='/assets/images/cafe3coracoes.png' alt='' />
                                <p> Orfeu orgânico 250g </p>
                                <h5 className='precoMarrom'> R$20,00</h5>
                            </section>
                        </div>
                    </article>
                    <article id='a2'>
                        <div>
                            <h2> Por apenas </h2>
                            <h2 className='precoMarrom'> R$ 430,00 </h2>
                        </div>
                        <button className='btLaranja'> Adicionar no carrinho</button>
                    </article>
                </section>
            </main>
            <UsuarioRodape />
        </div>
    )
}