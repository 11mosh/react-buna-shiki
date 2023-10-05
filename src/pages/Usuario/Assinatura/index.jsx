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
                        <li>&bull; Nossos produtos são enviados sempre o mais fresco possível;</li>
                        <li>&bull; Os produtos têm 5% de desconto ao final do pagamento;</li>
                        <li>&bull; Muito mais conforto e comodidade.</li>
                    </ul>
                </section>

                <section className='selecionar-itens'>
                    <nav className='titulo'>
                        <h1>1 - Escolha entre os principais sabores disponíveis e quantidade:</h1>
                        <select name="" id=""></select>
                    </nav>

                    <div className="itens-cafe">
                        <div className="item">
                            <img src="/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="/images/cafeteiraa.png" alt="" />
                            <p>Café Orfeu Clássico 1kg</p>
                            <div className='quantidade-item'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="selecionar-cartao">
                    <article className='info-cartao'>
                        <div className='titulo'>
                            <p>Não tem? Cadastre um agora!</p>
                            &darr;
                        </div>
                        
                    </article>
                    <select name="" id=""></select>
                </section>
            </main>
        </main>
    )
}