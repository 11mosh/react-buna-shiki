import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import './index.scss';

export default function index() {

    return (
        <div id='page-adm-pedidos'>
            <CabecalhoAdm />
            <main>
                <section id='s1'>
                    <h1>Visualizar pedidos</h1>
                    <input type='text' placeholder='Busque por clientes, códigos de pedidos' />
                    <article>
                        <img src='/assets/images/lupa-dark.svg' alt='icon-busca' />
                    </article>
                </section>
                <section id='s2'>
                    <article>
                        <h3> Ordenar por:</h3>
                        <div>
                            <select>
                                <option> Selecionar </option>
                                <option> Faturamento </option>
                                <option> Cliente </option>
                                <option value=""> Data </option>
                            </select>
                        </div>
                    </article>
                    <article>
                        <h3> Status do pedido: </h3>
                        <div>
                            <select>
                                <option> Selecionar </option>
                                <option> Pedido realizado </option>
                                <option> Aguardando pagamento</option>
                                <option> Pedido em preparo </option>
                                <option> À caminho </option>
                                <option> Entregue </option>
                            </select>
                        </div>
                    </article>
                    <article>
                        <h3> Tipo de pagamento:</h3>
                        <div>
                            <select>
                                <option> Selecionar </option>
                                <option> Cartão de crédito </option>
                                <option> Cartão de débito </option>
                                <option> Pix </option>
                            </select>
                        </div>
                    </article>
                    <article>
                        <h3> Data do pedido:</h3>
                        <div>
                            <input type="date" name="" id="" />
                        </div>
                    </article>
                </section>
                <section id='s3'>
                    <table>
                    <thead>
                        <tr>
                        <th className='desaparece4 pequeno'> Código </th>
                        <th className='grande'> Cliente </th>
                        <th className='desaparece2 grande'> Status </th>
                        <th className='desaparece medio'> Data </th>
                        <th className='desaparece2 medio'> Faturamento </th>
                        <th className='desaparece3 grande'> Pagamento </th>
                        </tr>
                    </thead>
                    <hr />
                    <tbody>
                        <tr>
                            <td className='desaparece4 pequeno'> 12 </td>
                            <td className='desaparece2 grande'> cliente cliente </td>
                            <td className='desaparece grande'> 
                                <select>
                                    <option> Pedido realizado </option>
                                    <option> Aguardando pagamento</option>
                                    <option> Pedido em preparo </option>
                                    <option> À caminho </option>
                                    <option> Entregue </option>
                                </select>
                            </td>
                            <td className='desaparece2 medio'> 01/05/2000 </td>
                            <td className='desaparece3 medio'> R$ 32,55 </td>
                            <td className='desaparece grande' > Cartão de crédito </td>
                        </tr>
                    </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
}