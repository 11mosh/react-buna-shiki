import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';
import ResumoPedido from '../../../components/Usuario/ResumoPedido'
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { buscarPedidoPorId, trocarStatusPedido } from '../../../api/pedidoApi';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

export default function Index() {
    const [pedido, setPedido] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    async function buscarPedido(){
        const pedidoResp = await buscarPedidoPorId(id)

        if(pedidoResp.situacao === 'Entregue'){
            setPedido({ situacao: 'Entregue' })
            toast.info('Pedido já entregue')
            setTimeout(() => {
                navigate('/conta/meus-pedidos')
            }, 2000)
        }
        else if(pedidoResp.situacao === 'Cancelado'){
            toast.info('Pedido cancelado')
            setTimeout(() => {
                navigate('/conta/meus-pedidos')
            }, 2000)
        }
        else{
            setPedido(pedidoResp)
        }
        
    }

    async function cancelarPedido(){
        confirmAlert({
            title: 'Cancelar pedido',
            message: 'Tem certeza que deseja cancelar o pedido ? Devolveremos o dinheiro recebido em até 24 horas.',
            buttons: [{
                label: 'Sim',
                onClick: async () => {
                    await trocarStatusPedido('Cancelado', id)
                    toast.info('Pedido cancelado, retornaremos o dinheiro.')
                    setTimeout(() => {
                        navigate('/')
                    }, 3000)
                }
            }, 
            {
                label: 'Não'
            }]
        })
    }

    function verificarIconFinalizado(icon){
        if(icon === 'pedido realizado'){
            if(pedido.situacao === 'Pedido realizado' || pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue' || pedido.situacao === 'Pagamento'){
                return ''
            }
            else {
                return 'none'
            }
        }
        else if(icon === 'pagamento'){
            if( pedido.situacao === 'Pagamento'||pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue')
                return ''
            else{
                return 'none'
            }
        }
        else if(icon === 'pedido em preparo'){
            if( pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return ''
            }
            else {
                return 'none'
            }
        }
        else if(icon === 'a caminho'){
            if(pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue')
                return ''
            else{
                return 'none'
            }
        }
        else if(icon === 'entregue'){
            if(pedido.situacao === 'Entregue')
                return ''
            else {
                return 'none'
            }
        }
    }

    function verificarEstagio(nEstagio) {
        if(nEstagio === 1){
            if(pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue' || pedido.situacao === 'Pagamento' || pedido.situacao === 'Pedido realizado'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        else if(nEstagio === 2 ){
            if( pedido.situacao === 'Pagamento' ||pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue') {
                return 'concluido'
            }
            else{
                return ''
            }
        }
        else if(nEstagio === 3){
            if(pedido.situacao === 'Pedido em preparo' ||pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        else if(nEstagio === 4){
            if(pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        else if(nEstagio === 5){
            if(pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
    }

    function verificarBarraProgresso(linha) {
        if(linha === 1){
            if(pedido.situacao === 'Pedido realizado' || pedido.situacao === 'Pagamento' || pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue')
                return 'concluido'
            else
                return ''
        }
        if(linha === 2){
            if(pedido.situacao === 'Pagamento' || pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        if(linha === 3){
            if(pedido.situacao === 'Pedido em preparo' || pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
        if(linha === 4){
            if(pedido.situacao === 'À caminho' || pedido.situacao === 'Entregue'){
                return 'concluido'
            }
            else{
                return ''
            }
        }
    }

    function verificarStatus(status, campo) {
        if(!campo){
            if(pedido.situacao == status)
                return 'statusAtual'
            else
                return ''
        }
        else{
            if(pedido.situacao == status)
                return '...'
            else
                return ''
        }
    }

    useEffect(() => {
        buscarPedido()

        // eslint-disable-next-line
    }, [])

    return(
        <div>
            <div id='page-acompanhar-pedido'>
                <CabecalhoUsuario linha='aparecer'/>
                <div onClick={() => window.history.back()} className='back-to-page'>
                    <img src="/assets/images/icon-seta-preta.png" alt="Erro ao exibir a imagem"/>
                    <h3>Voltar para a página anterior</h3>
                </div>

                <div id='conteudo'>
                    <main id='progressoPedido'>
                        <section id='icons'>
                            <figure>
                                <img className='icon' src='/assets/images/pedido/acompanhar-pedido/carrinho.png' alt='carrinho'/>
                                <img className='icon-finalizado' style={{display: verificarIconFinalizado('pedido realizado')}} src='/assets/images/pedido/icon-finalizado.svg' alt='icon visto/certo'/>
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
                                <p id={verificarStatus('Pedido realizado')}> Pedido realizado{verificarStatus('Pedido realizado', 'pontos')}</p>
                            </div>
                            <div>
                                <p id={verificarStatus('Pagamento')}> Pagamento{verificarStatus('Pagamento', 'pontos')}</p>
                            </div>
                            <div>
                                <p id={verificarStatus('Pedido em preparo')}> Pedido em preparo{verificarStatus('Pedido em preparo', 'pontos')} </p>
                            </div>
                            <div>
                                <p id={verificarStatus('À caminho')}> À caminho{verificarStatus('À caminho', 'pontos')} </p>
                            </div>
                            <div>
                                <p id={verificarStatus('Entregue')}> Entregue</p>
                            </div>
                        </section>
                        <section id='barraProgresso'>
                            <article id='estagios'>
                                <div className={verificarEstagio(1)}></div>
                                <div className={verificarEstagio(2)}></div>
                                <div className={verificarEstagio(3)}></div>
                                <div className={verificarEstagio(4)}></div>
                                <div className={verificarEstagio(5)}></div>
                            </article>
                            <article id='barra'>
                                <div className={verificarBarraProgresso(1)}></div>
                                <div className={verificarBarraProgresso(2)}></div>
                                <div className={verificarBarraProgresso(3)}></div>
                                <div className={verificarBarraProgresso(4)}></div>
                            </article>
                        </section>
                    </main>
                    <ResumoPedido idPedido={id}/>
                    <section>
                        <button onClick={cancelarPedido}> Cancelamento do pedido :(</button>
                        <p> Algo de errado no pedido ? Ligue-nos ou mande uma mensagem</p>
                        <p> Seu pedido não chegou ? Ligue-nos ou mande uma mensagem</p>
                    </section>
                </div>
                <UsuarioRodape />
            </div>
        </div>
    )
}