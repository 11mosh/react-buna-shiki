import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import './index.scss';

export default function index() {

    return (
        <div id='page-adm-pedidos'>
            <CabecalhoAdm />
            <main>
                <section id='s1'>
                    <h1>Visualizar pedidos</h1>
                    <input type='text' placeholder='Busque por clientes, códigos de pedidos, ' />
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
                            </select>
                        </div>
                    </article>
                    <article>
                        <h3> Status do pedido: </h3>
                        <div>
                            <select>
                                <option> Selecionar </option>
                            </select>
                        </div>
                    </article>
                    <article>
                        <h3> Tipo de pagamento:</h3>
                        <div>
                            <select>
                                <option> Selecionar </option>
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
                        <th className='id desaparece4'> Código </th>
                        <th> Cliente </th>
                        <th className='desaparece2'> Status </th>
                        <th className='desaparece'> Data </th>
                        <th className='desaparece2'> Faturamento </th>
                        <th className='desaparece3'> Pagamento </th>
                        </tr>
                    </thead>
                    <hr />
                    <tbody>
                        <tr>
                            <td className='desaparece4 tdPequeno'> 12 </td>
                            <td className='desaparece2 tdGrande'> cliente </td>
                            <td className='desaparece tdGrande'> status </td>
                            <td className='desaparece2 tdMedio'> 01/05/2000 </td>
                            <td className='desaparece3 tdMedio'> R$ 32,55 </td>
                            <td className='desaparece tdGrande' > Cartão de crédito </td>
                        </tr>
                    </tbody>
                    </table>
                </section>
            </main>
        </div>
    )
}