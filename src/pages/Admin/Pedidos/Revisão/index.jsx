import { Link } from 'react-router-dom'
import CabecalhoAdm from '../../../../components/Admin/AdmCabecalho'
import './index.scss'



export default function Index() {
    return(
        <main className='page-adm-pedidos-revisao'>
            <CabecalhoAdm />
            <div id='revisao'>
                <Link to='/adm/pedidos' className='voltar'>
                    <img src='/assets/images/icon-seta-preta.svg' alt='seta-dark-esquerda' />
                    <h3>Voltar a pagina de consulta de pedidos</h3>
                </Link>
                <div id='apresentacao'>
                    <h3>Resumo do pedido:</h3>
                </div>

                <div id='tabelas'>
                    <section id='s1'>
                        <table className='detalhesProdutos'>
                            <thead>
                                <tr>
                                        <th>
                                            <b>Itens</b>
                                        </th>
                                        <th>
                                            <b>Qtd</b>
                                        </th>
                                        <th>
                                            <b>Valor</b>
                                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Café Orfeu Clássico 1kg</td>
                                    <td>1</td>
                                    <td>R$87,999</td>
                                </tr>
                                <tr>
                                    <td>Café Orfeu Bourbon Amarelo 250g</td>
                                    <td>1</td>
                                    <td>R$87,99</td>
                                </tr>
                                <tr>
                                    <td>Café Orfeu Clássico 1kg</td>
                                    <td>1</td>
                                    <td>R$87,999</td>
                                </tr>
                                <tr>
                                    <td>Café Orfeu Clássico 1kg</td>
                                    <td>1</td>
                                    <td>R$87,999</td>
                                </tr>
                                <tr>
                                    <td>Café Orfeu Clássico 1kg</td>
                                    <td>1</td>
                                    <td>R$118,99</td>
                                </tr>

                            </tbody>
                        </table>
                        <table className='duasInformacoes' id='continuacaoDetalhesProdutos'>
                            <tbody>
                                <tr>
                                    <td className='topico'>Frete: </td>
                                    <td className='valor'>R$11,64</td>
                                </tr>
                                <tr className='ultimaLinha'>
                                    <td className='topico'>Valor Total: </td>
                                    <td >R$121,62</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section id='s2'>
                        <table className='duasInformacoes' id='detalhesPedido'>
                            <tbody>
                                <tr>
                                    <td> Código do pedido: </td>
                                    <td className='valor'> 0000001-00</td>
                                </tr>
                                <tr>
                                    <td> Status do pedido: </td>
                                    <td className='valor'>
                                        <select name="" id="">
                                            <option>Aguardando pagamento</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td> Data do pedido: </td>
                                    <td className='valor'> 04/06/2023 21:30:65</td>
                                </tr>
                                <tr>
                                    <td> Tipo de entrega: </td>
                                    <td className='valor'> Entrega Express</td>
                                </tr>
                                <tr className='ultimaLinha'>
                                    <td> Forma de pagamento: </td>
                                    <td className='valor'> Cartão de crédito </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className='duasInformacoes' id='detalhesCliente'>
                            <tbody>
                                <tr>
                                    <td> Cliente: </td>
                                    <td className='valor'> Josadac Mesquita</td>
                                </tr>
                                <tr>
                                    <td> CPF: </td>
                                    <td className='valor'>999.999.999-99</td>
                                </tr>
                                <tr>
                                    <td> Telefone: </td>
                                    <td className='valor'> 99999-9999</td>
                                </tr>
                                <tr className='ultimaLinha'>
                                    <td> Email: </td>
                                    <td className='valor'> pietroteste@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </main>
    )
}