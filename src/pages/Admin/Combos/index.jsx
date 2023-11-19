import { Link } from 'react-router-dom'
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho'
import './index.scss'


export default function Index() {
    return (
        <div id='page-adm-combos'>
            <CabecalhoAdm />
            <main>
                <section id='s1'>
                    <h1> Consulta de combos </h1>
                    <Link to='/adm/cadastro-combo'> Adicionar um combo </Link>
                    </section>
                <section id='s2'>
                    <input type='text' placeholder='Busque por combos, id de combos' />
                    <article>
                        <img src='/assets/images/lupa-dark.svg' alt='icon-busca'/>
                    </article>
                </section>
                <section id='s3'>
                    <article>
                        <h3> Ordenar por:</h3>
                        <div>
                        <select >
                            <option >  Selecionar </option>
                            <option> Preço (maior ao menor)</option>
                            <option  > Preço (menor ao maior) </option>
                        </select>
                        </div>
                    </article>
                    <article>
                        <h3> Filtrar por ADM:</h3>
                        <div>
                        <select >
                            <option value={0}> Selecionar </option>

                                <option> </option>
                        </select>
                        </div>
                    </article>
                </section>
                <section id='s4'>
                <table>
                    <thead>
                    <tr>
                        <th className='desaparece3'> ID </th>
                        <th className='maior'> Nome </th>
                        <th className='desaparece medio'> ADM</th>
                        <th className='desaparece2 medio'> Preço </th>
                    </tr>
                    </thead>
                    <hr />
                    <tbody>
                        <tr>
                            <div>
                                <td className='desaparece3'> 12 </td>
                                <td className='maior'> Combo experiente</td>
                                <td className='desaparece medio'> Eduardo </td>
                                <td className='desaparece2 medio'> R$ 150,00 </td>
                            </div>
                            <td id='acoes'>
                                <i className="fa-regular fa-pen-to-square"></i>
                                <i className="fa-regular fa-trash-can"></i>
                            </td>
                        </tr>

                    </tbody>
                </table>
                </section>
            </main>
        </div>
    )
}