import './index.scss';
import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Avaliacao from './avaliacao/telaAvaliacao';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta';
import storage from 'local-storage';
import { URLRota } from '../../../../constants.js';
import { useNavigate} from 'react-router-dom';

export default function MeusPedidos () {

    // const [idPedido, setIdPedido] = useState(0);
    const [pedidos, setPedidos] = useState([{total: '', dt_pedido: '', id: 0, item: {}}]);
    const redir = useNavigate();

    async function avaliacao (id) {
        const opcoes = {
            customUI: ({onClose}) => {
                return (
                    <Avaliacao
                    idPedido={id}
                    fechar={onClose}
                    />
                )
            }
        }
        confirmAlert(opcoes);
    }

    async function chamarPedidos () {
        const idUsuario = storage('usuario-logado').id
        const url = URLRota + '/pedidos/primeiro-item/' + idUsuario;
        const resposta = await axios.get(url);
        const dados = resposta.data;
        console.log(dados)
        setPedidos(dados);
    };

    useEffect(() => {
        if(!storage('usuario-logado')){
            redir('/login/conta')
        }
        else{
            chamarPedidos();
        }
        // eslint-disable-next-line 
    }, []);
    
    return (
        <main className='meusPedidos'>
            <CabecalhoUsuario linha='aparecer'/>

        <div className="corpo">
            
            <BarraNavegacao selecionar='MeusPedidos'/>
            <article className='aba-pedidos'>

                {pedidos.map((item) => {
                    return (
                        <section className="pedido">
                            <nav className='dados-pedido'>
                                <p id='desaparece1'>Pedido realizado em: {(item.dt_pedido).substring(0, 10)}</p>
                                <p>Status: <b>{item.situacao}</b></p>
                                <p id='desaparece2'>N° do pedido: {(item.id).toString().padStart(4, 0)}</p>
                            </nav>

                            <article className='corpo-pedido'>
                                <div className='agrupamento-principal'>
                                    <img src={item.item.imagem} alt="" style={{maxHeight: '160px'}}/>
                                    <div className='descricao-pedido'>
                                        <p> <b>{item.item.produto}</b></p>
                                        <p style={{ marginTop: '10px'}}> Total: <b style={{color: '#661515'}}>R${item.total.replace('.', ',')}</b></p>
                                    </div>
                                </div>
                                
                                <div className='links'>
                                    <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => redir(`/conta/meus-pedidos/resumo-pedido/${item.id}`)}>Exibir detalhes do pedido</h4>
                                    {(item.situacao === 'Entregue') 
                                    ? <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {avaliacao(item.id);}}>Avalie o pedido</h4>
                                    : <></>
                                    }
                                </div>
                            </article>
                        </section>
                    )
                })}

                <hr style={{width: '90%'}}/>

                <h3 style={ {opacity: 0.5, marginTop: '5px' }}>Seus pedidos acabam por aqui.</h3>
                <img src="/assets/images/pedidosAcabam.png" alt="" style={{height: '80px', opacity: 0.5, marginBottom: '40px'}}/>
            </article>
        </div>
            <UsuarioRodape />
 
        </main>
    )
}