import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';
import ResumoPedido from '../../../components/Usuario/ResumoPedido'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { buscarPedidoPorId } from '../../../api/pedidoApi';
import { toast } from 'react-toastify';

export default function Index() {
    const [pedido, setPedido] = useState({situacao: ''})
    const {id} = useParams()
    
    async function buscarPedido(){
        const pedidoResp = await buscarPedidoPorId(id)
        // if(pedidoResp.situacao === 'Entregue'){
        //     toast.info('Pedido já entregue')
        // }
        // else if(pedidoResp.situacao === 'Cancelado'){
        //     toast.info('Pedido cancelado')
        // }
        // else{
            setPedido(pedidoResp)
        // }
        
    }

    function verificarIconFinalizado(icon){
        if(icon === 'pagamento'){
            if(pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue')
                return ''
            else{
                return 'none'
            }
        }
        else if(icon === 'pedido em preparo'){
            if(pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return ''
            }
            else {
                return 'none'
            }
        }
        else if(icon === 'a caminho'){
            if(pedido.situacao === 'À caminho')
                return ''
            else{
                return 'none'
            }
        }
        else if(icon === 'entregue'){
            return 'none'
        }
    }

    function verificarEstagio(nEstagio) {
        if(nEstagio === 2 ){
            if(pedido.situacao == 'Pedido em preparo' || pedido.situacao == 'À caminho' || pedido.situacao == 'Entregue') {
                return 'concluido'
            }
            else{
                return ''
            }
        }
        else if(nEstagio === 3){
            if(pedido.situacao == 'À caminho' || pedido.situacao == 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        else if(nEstagio === 4){
            if(pedido.situacao == 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }


    }

    function verificarBarraProgresso(linha) {
        if(linha == 2){
            if(pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        if(linha == 3){
            if(pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        if(linha == 4){
            if(pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
    }

    useEffect(() => {
        buscarPedido()
    }, [])

    return(
        <div>
            { pedido.situacao !== '' 
            
            ? <div id='page-acompanhar-pedido'>
                <CabecalhoUsuario />
                <div id='conteudo'>
                    <main id='progressoPedido'>
                        <section id='icons'>
                            <figure>
                                <img className='icon' src='/assets/images/pedido/acompanhar-pedido/carrinho.png' alt='carrinho'/>
                                <img className='icon-finalizado' src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                            </figure>
                            <figure>
                                <img className='icon' src='/assets/images/pedido/acompanhar-pedido/icon-pagamento.png' alt='celular com sifrão'/>
                                <img className='icon-finalizado' style={{display: verificarIconFinalizado('pagamento')}} src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                            </figure>
                            <figure>
                                <img className='icon' src='/assets/images/pedido/acompanhar-pedido/icon-preparo.png' alt='relógio'/>
                                <img className='icon-finalizado' style={{display: verificarIconFinalizado('pedido em preparo')}} src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                            </figure>
                            <figure>
                                <img className='icon' src='/assets/images/pedido/acompanhar-pedido/icon-entrega.png' alt='caminhão entrega'/>
                                <img className='icon-finalizado' style={{display: verificarIconFinalizado('a caminho')}} src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                            </figure>
                            <figure>
                                <img className='icon' src='/assets/images/pedido/acompanhar-pedido/pedido entregue.png' alt='caixa aberta com seta'/>
                                <img className='icon-finalizado' style={{display: verificarIconFinalizado('entregue')}} src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
                            </figure>
                        </section>
                        <section id='status'>
                            <div>
                                <p> Pedido realizado</p>
                            </div>
                            <div>
                                <p id='statusAtual'> Pagamento...</p>
                            </div>
                            <div>
                                <p> Pedido em preparo </p>
                            </div>
                            <div>
                                <p> À caminho </p>
                            </div>
                            <div>
                                <p> Entregue</p>
                            </div>
                        </section>
                        <section id='barraProgresso'>
                            <article id='estagios'>
                                <div className='concluido'></div>
                                <div className={verificarEstagio(2)}></div>
                                <div className={verificarEstagio(3)}></div>
                                <div className={verificarEstagio(4)}></div>
                                <div className={verificarEstagio(5)}></div>
                            </article>
                            <article id='barra'>
                                <div className='concluido'></div>
                                <div className={verificarBarraProgresso(2)}></div>
                                <div className={verificarBarraProgresso(3)}></div>
                                <div className={verificarBarraProgresso(4)}></div>
                            </article>
                        </section>
                    </main>
                    <ResumoPedido idPedido={id}/>
                    <section>
                        <button> Cancelamento do pedido :(</button>
                        <p> Algo de errado no pedido ? Ligue-nos ou mande uma mensagem</p>
                        <p> Seu pedido não chegou ? Ligue-nos ou mande uma mensagem</p>
                    </section>
                </div>
                <UsuarioRodape />
            </div>
            : <></>}
        </div>
    )
}