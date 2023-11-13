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
import { URLRota } from '../../../../constants';
import { Link } from 'react-router-dom';

export default function MeusPedidos () {

    async function avaliacao () {
        const opcoes = {
            customUI: () => {
                return (
                    <Avaliacao/>
                )
            }
        }
        confirmAlert(opcoes);
    }

    const [pedidos, setPedidos] = useState([]);

    async function chamarPedidos () {
        const idUsuario = storage('usuario-logado').id
        const url = URLRota + '/pedido/cliente/' + idUsuario;
        const resposta = await axios.get(url);
        const dados = resposta.data;
        setPedidos(dados);
    };

    useEffect(() => {
        chamarPedidos();
    }, []);
    
    return (
        <main className='meusPedidos'>
            <CabecalhoUsuario />

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
                                    <img src="/assets/images/cafeteiraa.png" alt="" style={{height: '160px'}}/>
                                    <div className='descricao-pedido'>
                                        <p> <b>Cafeteira Cadence Desperta</b></p>
                                        <p style={{ marginTop: '10px'}}> Total: <b style={{color: '#661515'}}>R${item.total}</b></p>
                                    </div>
                                </div>
                                
                                <div className='links'>
                                    <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}}>Exibir detalhes do pedido</h4>
                                    {(item.situacao == 'Entregue') 
                                    ? <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}} onClick={avaliacao}>Avalie o pedido</h4>
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