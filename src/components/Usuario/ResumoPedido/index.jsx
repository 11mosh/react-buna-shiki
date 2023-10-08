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
                            <p> Data de envio: <span> Entrega Express </span> prevista para o dia 06/06/2023</p>
                        </article>
                        <article>
                            <p> Codigo do pedido: 0001-0003 </p>
                            <p> Data do pedido: 04/06/2023 20:15:06 </p>
                            <p> Endereço de envio: Rua lopes trovão 251, Sâo Paulo, 05326-442</p>
                        </article>
                        <article>
                            <p>Subtotal: R$ 344, 97</p>
                            <p> Frete:   20,00 </p>
                            <p> Total:   366, 97</p> 
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
                    </section>
                </main>
            </div>
        </div>
    )
}