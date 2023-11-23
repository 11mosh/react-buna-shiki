import CabecalhoAdm from '../../../../components/Admin/AdmCabecalho'
import { Link, useParams, useSearchParams } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import { URLRota } from '../../../../constants.js';
import axios from 'axios';

export default function RevisaoAssinaturaADM () {

    const {id} = useParams();
    const [info, setInfo] = useState([]);
    const [mensalidade, setMensalidade] = useState('');
    const [fim, setFim] = useState('');

    async function chamarAssinatura () {
        const url = URLRota + '/procurar-assinatura-completa/' + id;
        // const url = URLRota + '/procurar-assinatur                                                                     a/' + id;
        console.log(id)
        const resposta = await axios.get(url);
        console.log(resposta.data);
        const mensal = (resposta.data)[0].vl_mensalidade;
        const fimm = ((resposta.data)[0].dt_fim).substring(0, 10);
        setFim(fimm)
        setMensalidade(mensal)
        setInfo(resposta.data);
    }

    useEffect(() => {
        chamarAssinatura()

        // eslint-disable-next-line
    }, [])

    return (
        <main className="revisao-assinatura-adm">
            <CabecalhoAdm />
            <div id='revisao'>
                <Link to='/adm/consulta-assinaturas' className='voltar'>
                    <img src='/assets/images/icon-seta-preta.svg' alt='seta-dark-esquerda' />
                    <h3>Voltar à pagina de consulta da assinatura</h3>
                </Link>
                <div id='apresentacao'>
                    <h3>Resumo da assinatura:</h3>
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
                                {info.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.nm_produto}</td>
                                            <td>{item.qtd_itens}</td>
                                            <td>R${item.vl_preco}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            {/* 
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

                            </tbody> */}
                        </table>
                        <table className='duasInformacoes' id='continuacaoDetalhesProdutos'>
                                        <tbody>
                                            <tr>
                                                <td className='topico'>Frete: </td>
                                                <td className='valor'>R$</td>
                                            </tr>
                                            <tr className='ultimaLinha'>
                                                <td className='topico'>Valor Total: </td>
                                                <td >R${mensalidade}</td>
                                            </tr>
                                        </tbody>
                        </table>
                    </section>
                    <section id='s2'>
                        <table className='duasInformacoes' id='detalhesPedido'>
                            <tbody>
                                <tr>
                                    <td> Código da assinatura: </td>
                                    <td className='valor'> 0000001-00</td>
                                </tr>
                                <tr id='select-assinatura'>
                                    <td> Status da assinatura: </td>
                                    <td className='valor'>
                                        <select name="" id="">
                                            <option>Aguardando pagamento</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td> Início: </td>
                                    <td className='valor'> 04/06/2023 21:30:65</td>
                                </tr>
                                <tr>
                                    <td> Fim: </td>
                                    <td className='valor'> {fim}</td>
                                </tr>
                                <tr>
                                    <td> Endereço de envio: </td>
                                    <td className='valor'> Entrega Express</td>
                                </tr>
                                <tr className='ultimaLinha'></tr>
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