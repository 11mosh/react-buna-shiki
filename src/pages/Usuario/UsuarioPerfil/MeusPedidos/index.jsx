import './index.scss';
import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import Avaliacao from './avaliacao/telaAvaliacao';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta'

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
    
    return (
        <main className='meusPedidos'>
            <CabecalhoUsuario />

        <div className="corpo">
            
            <BarraNavegacao selecionar='MeusPedidos'/>
            <article className='aba-pedidos'>

                <section className="pedido">
                    <nav className='dados-pedido'>
                        <p id='desaparece1'>Pedido realizado em: 04/06/2023</p>
                        <p>Status: <b>Entregue</b></p>
                        <p id='desaparece2'>N° do pedido: 0001-0003</p>
                    </nav>

                    <article className='corpo-pedido'>
                        <div className='agrupamento-principal'>
                            <img src="/assets/images/cafeteiraa.png" alt="" style={{height: '160px'}}/>
                            <div className='descricao-pedido'>
                                <p> <b>Cafeteira Cadence Desperta</b></p>
                                <p style={{ marginTop: '10px'}}> Total: <b style={{color: '#661515'}}>R$344,97</b></p>
                            </div>
                        </div>
                        
                        <div className='links'>
                            <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}}>Exibir detalhes do pedido</h4>
                            <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}} onClick={avaliacao}>Avalie o pedido</h4>
                        </div>
                    </article>
                </section>

                <section className="pedido">
                    <nav className='dados-pedido'>
                        <p id='desaparece1'>Pedido realizado em: 04/06/2023</p>
                        <p>Status: <b>Entregue</b></p>
                        <p id='desaparece2'>N° do pedido: 0001-0003</p>
                    </nav>

                    <article className='corpo-pedido'>
                        <div className='agrupamento-principal'>
                            <img src="/assets/images/cafeteiraa.png" alt="" style={{height: '160px'}}/>
                            <div className='descricao-pedido'>
                                <p> <b>Cafeteira Cadence Desperta</b></p>
                                <p style={{ marginTop: '10px'}}> Total: <b style={{color: '#661515'}}>R$344,97</b></p>
                            </div>
                        </div>
                        
                        <div className='links'>
                            <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}}>Exibir detalhes do pedido</h4>
                            <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}} onClick={avaliacao}>Avalie o pedido</h4>
                        </div>
                    </article>
                </section><section className="pedido">
                    <nav className='dados-pedido'>
                        <p id='desaparece1'>Pedido realizado em: 04/06/2023</p>
                        <p>Status: <b>Entregue</b></p>
                        <p id='desaparece2'>N° do pedido: 0001-0003</p>
                    </nav>

                    <article className='corpo-pedido'>
                        <div className='agrupamento-principal'>
                            <img src="/assets/images/cafeteiraa.png" alt="" style={{height: '160px'}}/>
                            <div className='descricao-pedido'>
                                <p> <b>Cafeteira Cadence Desperta</b></p>
                                <p style={{ marginTop: '10px'}}> Total: <b style={{color: '#661515'}}>R$344,97</b></p>
                            </div>
                        </div>
                        
                        <div className='links'>
                            <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}}>Exibir detalhes do pedido</h4>
                            <h4 style={ {color: '#0071A1', textDecoration: 'underline', cursor: 'pointer'}} onClick={avaliacao}>Avalie o pedido</h4>
                        </div>
                    </article>
                </section>
                <hr style={{width: '90%'}}/>

                <h3 style={ {opacity: 0.5, marginTop: '5px' }}>Seus pedidos acabam por aqui.</h3>
                <img src="/assets/images/pedidosAcabam.png" alt="" style={{height: '80px', opacity: 0.5, marginBottom: '40px'}}/>
            </article>
        </div>
            <UsuarioRodape />

        </main>
    )
}