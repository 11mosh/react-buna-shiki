import { Link, useNavigate } from 'react-router-dom'
import './index.scss'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { buscarPedidosPorCliente } from '../../../api/pedidoApi'


export default function Index(props) {
    const navigate = useNavigate()
    const [isPedidoEmAndamento, setIsPedidoEmAndamento] = useState()

    function logout() {
        storage.remove('usuario-logado');
        storage.remove('id-assinatura');
        storage.remove('itens-selecionados');
        storage.remove('endereco-selecionado');
        storage.remove('usuario-pedido')
        navigate('/')
    }
    
    function selecionarLink(Nomelink){
        if(props.selecionar === Nomelink) 
            return 'selecionado'
    }
    async function buscarPedidos() {
        if(storage('usuario-logado')){
            const resp = await buscarPedidosPorCliente(storage('usuario-logado').id)
            if(resp.length !== 0){
                if(resp.find(item => item.situacao === 'Pagamento') || resp.find(item => item.situacao === 'Pedido realizado') ||  resp.find(item => item.situacao === 'Pedido em preparo') || resp.find(item => item.situacao === 'À caminho')){
                    setIsPedidoEmAndamento(true)
                }
            }
        }
    }
    function verificarPedidos() {
        if(isPedidoEmAndamento)
            return 'flex'
        else
            return 'none'
    }

    useEffect(() => {
        buscarPedidos()
    }, [])
    
    return(
        <div id='comp-barra-navegacao-conta'>
            <nav>
                <div className="listra"></div>
                    <nav>
                        <Link to={'/conta/dados-pessoais'} className={selecionarLink('DadosPessoais')}>Dados Pessoais</Link> <hr className="desaparece" />
                        <Link to={'/conta/cartoes'} className={selecionarLink('Cartões')}>Cartões</Link> <hr className="desaparece" />
                        <Link to={'/conta/assinaturas'} className={selecionarLink('Assinaturas')}>Assinaturas</Link> <hr className="desaparece" />
                        <Link to={'/conta/enderecos'} className={selecionarLink('Endereços')}>Endereços</Link> <hr className="desaparece" />
                        <div>
                            <Link to={'/conta/meus-pedidos'} className={selecionarLink('MeusPedidos')} >Meus Pedidos</Link> <hr className="desaparece" />
                            <div id='bolinha' style={{display: verificarPedidos()}}></div>
                        </div>
                        <Link to={'/'} onClick={logout}>Sair</Link>
                    </nav>
            </nav>
        </div>
    )
}