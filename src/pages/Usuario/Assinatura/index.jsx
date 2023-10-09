import './index.scss';
import { useState } from 'react';
import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';


export default function Assinatura () {


    return (
        <main className="assinatura">
            <CabecalhoUsuario/>
            <main className='corpo-site'>
                <h1>Receba mensalmente os sabores marcantes que você adora, no conforto de sua casa: grãos ou moídos!</h1>
                <section className='texto-apresentacao'>
                    <p>Nós selecionamos uma lista dos melhores sabores de café pelos quais você pode se interessar, além de alguns itens que possam ser necessários.  :)</p>
                    <ul>
                        <li> Nossos produtos são enviados sempre o mais fresco possível;</li>
                        <li> Os produtos têm 5% de desconto ao final do pagamento;</li>
                        <li> Muito mais conforto e comodidade.</li>
                    </ul>
                </section>

                <section className='selecionar-itens'>
                    <nav className='titulo'>
                        <h1>1 - Escolha entre os principais sabores disponíveis e quantidade:</h1>
                        <select name="" id=""></select>
                    </nav>

                    <div className="itens-cafe">
                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className='trocar-produtos'>
                            <img src="/assets/images/setadropdown.png" alt="" />
                        </div>
                    </div>
                </section>

                <section className="selecionar-cartao">
                <h2>2 - Cadastre ou escolha um cartão de crédito:</h2>

                    <article className='info-cartao'>
                        <div className='titulo'>
                            <p>Não tem? Cadastre um agora!</p>
                            &darr;
                        </div>
                        
                    </article>
                    <select name="" id="">
                        <option value="">CEFDS</option>
                        <option value="">CEFDS</option>
                        <option value="">CEFDS</option>
                        <option value="">CEFDS</option>
                    </select>
                </section>

                <section className='selecionar-endereco'>
                    <h2>3 - Cadastre ou escolha um endereço de entrega:</h2>
                    <article className='info-endereco'>
                        <div className='titulo'>
                            <p>Não tem? Cadastre um agora!</p>
                            &darr;
                        </div>
                        <div className="campo1">
                            <div>
                                <label htmlFor="">Informe o CEP &nbsp; &nbsp; *</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Informe o número &nbsp; &nbsp; *</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="campo2">
                            <label htmlFor=""></label>
                            <input type="text" />
                            <div className='enderecoPreenchido'></div>
                            <div className='enderecoPreenchido'></div>
                        </div>

                        <button>Cadastrar</button>
                    </article>
                    <select name="Selecionar endereço" id="">
                        <option value="">CEFDS</option>
                    </select>
                </section>

                <button>
                    Continuar
                    <img src="/assets/images/icon-seta-longa-esquerda.png" alt="" style={{transform: 'rotate(180deg)', width: '50px'}}/>
                </button>

                <section className="texto-ajuda">
                    <h2>Você pode se perguntar:</h2>
                    <h2>Como funciona a assinatura mensal?</h2>
                    <p>Nosso método de pagamento nessa modalidade aceita apenas <b>cartão de crédito</b>.</p>
                    <p>1 - Você escolhe quais produtos deseja levar;</p>
                    <p>2 - Cadastra o cartão de crédito e efetua o primeiro pagamento</p>
                    <p>3 - Todos os meses, no mesmo dia em que o primeiro pagamento foi confirmado, uma nova cobrança chegará no cartão cadastrado e nós separaremos os produtos <b>selecionados por você</b>;</p>
                    <p>4 - A qualquer momento <b>você pode alterar</b> os produtos envolvidos na assinatura, <b>porém</b>, uma vez que o pagamento for confirmado, as alterações só serão atendidas no próximo mês!</p>
                </section>
            </main>
        </main>
    )
}