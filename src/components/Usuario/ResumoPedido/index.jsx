import './index.scss'

export default function Index() {
    return(
        <div id='comp-resumo-pedido'>
            <div id='conteudo'>
                <h3>Resumo do pedido:</h3>
                <main>
                    <section id='detalhes'>
                        <article>
                            <div>
                                <p> Status do pedido: </p>
                                <span className='valor'> Aguardando pagamento...</span>
                            </div>
                            <div>
                                <p> Data de envio:</p>
                                <p className='valor detalheComprido'> <span> Entrega Express </span> prevista para o dia 06/06/2023 </p>
                            </div>
                        </article>
                        <article>
                            <div>
                                <p> Codigo do pedido:</p>
                                <p className='valor'>0001-0003</p>
                            </div>
                            <div>
                                <p> Data do pedido:</p>
                                <p className='valor'>04/06/2023 20:15:06</p>
                            </div>
                            <div>
                                <p id='endereco'> Endereço de envio: </p>
                                <p className='valor detalheComprido'> Rua lopes trovão 251, Sâo Paulo, 05326-442</p>
                            </div>
                        </article>
                        <article id='detalhesPagamento'>
                            <div>
                                <p>Subtotal:</p>
                                <div >
                                    <p className='valor'> R$ 344, 97</p>
                                </div>
                            </div>
                            <div>
                                <p> Frete:</p>
                                <div>
                                    <p className='valor'>R$ 20,00</p>
                                </div>
                            </div>
                            <div>
                                <p> Total:</p> 
                                <div>
                                    <p className='valor'> R$366, 97</p>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section id='produtos'>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
                                <div id='qtd'> 3 </div>
                            </div>
                            <h4> Orfeu Intenso 1kg</h4>
                            <span> R$ 366, 97 </span>
                        </article>
                        <article>
                            <div>
                                <img src="/assets/images/cafe3coracoes.svg" alt="produto" />
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