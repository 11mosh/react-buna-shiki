import './index.scss';

export default function DetalhesPedido() {
    return(
        <div id='comp-detalhes-pedido'> 
            <h3> Resumo do pedido: </h3>
            <main>
                <section id='s1'>
                    <article>
                        <p> Codigo do pedido: 000000</p>
                        <p> Status do pedido: <span> status </span></p>
                        <p> Data de entrega: <span> tipo de entrega </span> data </p>
                    </article>
                    <article>
                        <p> Data do pedido: teste</p>
                        <p> Endereço de envio: teste </p>
                        <p> Subtotal    teste</p>
                        <p> Frete       teste</p>
                        <p> Total       teste</p>
                    </article>
                </section>
                <section id='s2'>
                    <article>
                        <img src='/assets/images/cafe3coracoes.png' />  
                        <div>
                            3
                        </div>
                    </article>
                    <article>
                        Orfeu 
                        <span> preço </span>
                    </article>
                </section> 
            </main>
        </div>
    )
}