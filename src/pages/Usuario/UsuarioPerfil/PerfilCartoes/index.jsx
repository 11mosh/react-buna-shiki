import './index.scss';
import Cabecalho from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cartoes () {

    const [exibirCartao, setExibirCartao] = useState(false)

    return (
        <main className="perfil-cartoes">
            <Cabecalho/>
            <main className="corpo">
                <nav>
                    <div className="listra"></div>
                    <nav>
                        <Link to={'/conta/cartoes'} style={{color: '#F47E3C'}}>Cartões</Link> <hr className="desaparece" />
                        <Link to={'/conta/assinaturas'}>Assinaturas</Link> <hr className="desaparece" />
                        <Link to={'/conta/dados-pessoais'}>Dados Pessoais</Link> <hr className="desaparece" />
                        <Link to={'/conta/enderecos'}>Endereços</Link> <hr className="desaparece" />
                        <Link to={'/conta/meus-pedidos'}>Meus Pedidos</Link> <hr className="desaparece" />
                        <Link to={'/'}>Sair</Link>
                    </nav>
                </nav>

                <main className="aba-cartoes">
                    <article className="cadastro-cartao">
                    <article className='info-cartao'>
                            <div className='titulo'>
                                <p>Cadastrar um novo cartão</p>
                                <input type="checkbox" name="checkbox1" id="checkbox1" style={{display: 'none'}}/>
                                <label htmlFor="checkbox1">
                                    <img src="/assets/images/setadropdown.png" alt="" onClick={() => setExibirCartao(!exibirCartao)}/>
                                </label>
                            </div>
                            {exibirCartao 
                            ? <div className='campo-inputs'>
                            <div>
                                <label htmlFor="">Número do cartão *</label>
                                <input type="text" />
                            </div>
                            <article className='secao2'>
                                <div>
                                    <label htmlFor="">Validade *</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">CVV *</label>
                                    <input type="text" />
                                </div>
                            </article>
                            <div>
                                <label htmlFor="">Nome do títular *</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">CPF/CNPJ do títular *</label>
                                <input type="text" />
                            </div>
                        <button>Cadastrar</button>

                        </div>

                            : <></>
                            }
                            
                        </article>
                        
                    </article>
                    <hr style={{width: '95%', marginTop: '20px'}}/>

                    <article className="cartoes-existentes">
                        <h3>Cartões cadastrados</h3>

                        <div className="cartoes">
                            <section className="cartao">
                                <h3>Eduardo Rodrigues</h3>
                                <p>1111 2222 3333 4444</p>

                                <div className="agrupamento">
                                    <div className="validade-cvv">

                                        <div className="validade">
                                            <p>Validade</p>
                                            <p className='fonte-maior'>08/30</p>
                                        </div>
                                        <div className="cvv">
                                            <p>CVV</p>
                                            <p className='fonte-maior'>492</p>
                                        </div>
                                    </div>
                                    <div className="imagens">
                                        <img src="/assets/images/formas de pagamento/empresas/.svg" alt="dfsfds" />
                                        <img src="" alt="fdsfds" />
                                    </div>
                                </div>
                            </section>
                            <section className="cartao">
                                <h3>Eduardo Rodrigues</h3>
                                <p>1111 2222 3333 4444</p>

                                <div className="agrupamento">
                                    <div className="validade-cvv">

                                        <div className="validade">
                                            <p>Validade</p>
                                            <p className='fonte-maior'>08/30</p>
                                        </div>
                                        <div className="cvv">
                                            <p>CVV</p>
                                            <p className='fonte-maior'>492</p>
                                        </div>
                                    </div>
                                    <div className="imagens">
                                        <img src="/assets/images/formas de pagamento/empresas/.svg" alt="dfsfds" />
                                        <img src="" alt="fdsfds" />
                                    </div>
                                </div>
                            </section>
                            <section className="cartao">
                                <h3>Eduardo Rodrigues</h3>
                                <p>1111 2222 3333 4444</p>

                                <div className="agrupamento">
                                    <div className="validade-cvv">

                                        <div className="validade">
                                            <p>Validade</p>
                                            <p className='fonte-maior'>08/30</p>
                                        </div>
                                        <div className="cvv">
                                            <p>CVV</p>
                                            <p className='fonte-maior'>492</p>
                                        </div>
                                    </div>
                                    <div className="imagens">
                                        <img src="/assets/images/formas de pagamento/empresas/.svg" alt="dfsfds" />
                                        <img src="" alt="fdsfds" />
                                    </div>
                                </div>
                            </section>
                            <section className="cartao">
                                <h3>Eduardo Rodrigues</h3>
                                <p>1111 2222 3333 4444</p>

                                <div className="agrupamento">
                                    <div className="validade-cvv">

                                        <div className="validade">
                                            <p>Validade</p>
                                            <p className='fonte-maior'>08/30</p>
                                        </div>
                                        <div className="cvv">
                                            <p>CVV</p>
                                            <p className='fonte-maior'>492</p>
                                        </div>
                                    </div>
                                    <div className="imagens">
                                        <img src="/assets/images/formas de pagamento/empresas/.svg" alt="dfsfds" />
                                        <img src="" alt="fdsfds" />
                                    </div>
                                </div>
                            </section>

                            <section className="cartao">
                                <h3>Eduardo Rodrigues</h3>
                                <p>1111 2222 3333 4444</p>

                                <div className="agrupamento">
                                    <div className="validade-cvv">

                                        <div className="validade">
                                            <p>Validade</p>
                                            <p className='fonte-maior'>08/30</p>
                                        </div>
                                        <div className="cvv">
                                            <p>CVV</p>
                                            <p className='fonte-maior'>492</p>
                                        </div>
                                    </div>
                                    <div className="imagens">
                                        <img src="/assets/images/formas de pagamento/empresas/.svg" alt="dfsfds" />
                                        <img src="" alt="fdsfds" />
                                    </div>
                                </div>
                            </section>

                            
                        </div>
                    </article>
                </main>
            </main>
            <UsuarioRodape/>
        </main>
    )
}