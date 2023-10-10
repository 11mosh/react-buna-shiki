import './index.scss'

export default function Index() {
    return(
        <div id='comp-resumo-pedido'>
            <div id='conteudo'>
                <h3>Resumo do pedido:</h3>
                <main>
                    <section id='detalhes'>
                        <article>
                            <p> Status do pedido: <span> Aguardando pagamento...</span></p>
                            <div>
                                <p> Data de envio:</p>
                                <p className='detalheComprido'> <span> Entrega Express </span> prevista para o dia 06/06/2023 </p>
                            </div>
                        </article>
                        <article>
                            <p> Codigo do pedido: 0001-0003 </p>
                            <p> Data do pedido: 04/06/2023 20:15:06 </p>
                            <div>
                                <p id='endereco'> Endereço de envio: </p>
                                <p className='detalheComprido'> Rua lopes trovão 251, Sâo Paulo, 05326-442</p>
                            </div>
                        </article>
                        <article id='detalhesPagamento'>
                            <div>
                                <p>Subtotal:</p>
                                <div >
                                    <p> R$ 344, 97</p>
                                </div>
                            </div>
                            <div>
                                <p> Frete:</p>
                                <div>
                                    <p>R$ 20,00</p>
                                </div>
                            </div>
                            <div>
                                <p> Total:</p> 
                                <div>
                                    <p> R$366, 97</p>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section id='produtos'>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.png" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                    </section>
                </main>
            </div>
        </div>
    )
}