import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';
import ResumoPedido from '../../../components/Usuario/ResumoPedido'

export default function Index() {
    return(
        <div id='page-acompanhar-pedido'>
            <CabecalhoUsuario />
            <div id='conteudo'>
                <main id='progressoPedido'>
                    <section id='icons'>
                        <figure>
                            <img className='icon' src='/assets/images/pedido/icon-pedido-realizado.svg' alt='carrinho'/>
                            <img className='icon-finalizado' src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                        </figure>
                        <figure>
                            <img className='icon' id='pagamento' src='/assets/images/pedido/icon-aguardando-pagamento.svg' alt='celular com sifrão'/>
                            <img className='icon-finalizado' src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                        </figure>
                        <figure>
                            <img className='icon' src='/assets/images/pedido/icon-pedido-em-preparo.svg' alt='relógio'/>
                            <img className='icon-finalizado' src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                        </figure>
                        <figure>
                            <img className='icon' src='/assets/images/pedido/icon-a-caminho.svg' alt='caminhão entrega'/>
                            <img className='icon-finalizado' src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                        </figure>
                        <figure>
                            <img className='icon' src='/assets/images/pedido/icon-entregue.svg' alt='caixa aberta com seta'/>
                            <img className='icon-finalizado' src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                        </figure>
                    </section>
                    <section id='barraProgresso'>
                        <article id='estagios'>
                            <div className='concluido'></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </article>
                        <article id='barra'>
                            <div className='concluido'></div>
                            <div className='não-concluido'></div>
                            <div className='não-concluido'></div>
                            <div className='não-concluido'></div>
                            <div className='não-concluido'></div>
                        </article>
                    </section>
                    <section id='status'>
                        <p> Pedido realizado</p>
                        <p id='statusAtual'> Aguardando pagamento...</p>
                        <p> Pedido em preparo </p>
                        <p> À caminho </p>
                        <p> Entregue</p>
                    </section>
                </main>
                <ResumoPedido />
                <section>
                    <button> Cancelamento do pedido :(</button>
                    <p> Algo de errado no pedido ? Ligue-nos ou mande uma mensagem</p>
                    <p> Seu pedido não chegou ? Ligue-nos ou mande uma mensagem</p>
                </section>
            </div>
            <UsuarioRodape />
        </div>
    )
}