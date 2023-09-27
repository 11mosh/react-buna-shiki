import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link } from 'react-router-dom';




function ConsultaPedidos() {
  return (
    <div id='page-adm-pedidos'>
      <CabecalhoAdm />
      <main>

      <section id='s1'>
        <Link className='link' to={'/adm/'}>Tela inicial</Link>
        <img src='/assets/images/adm-consultas/icon-seta-direita.svg' alt='icon-seta-direita' />
        <Link> Visualizar pedido </Link>
      </section>
      <hr />
      <section id='s2'>
        <h1> Visualizar pedidos </h1>
      </section>
      <section id='s3'>
        <input type='text' placeholder='Busque por clientes, código do pedido, id'/>
        <article>
          <img src='/assets/images/lupa-dark.svg' alt='icon-busca'/>
        </article>
      </section>
      <section id='s4'>
        <article>
          <h3> Ordenar por:</h3>
          <div>
            <select>
              <option className='option' > Selecionar </option>
              <option > Selecionar </option>
              <option > Selecionar </option>
              <option> Selecionar </option>
              <option > Selecionar </option>
            </select>
          </div>
        </article>
        <article>
          <h3> Pedidos: </h3>
          <div>
            <select>
              <option> Selecionar </option>
            </select>
          </div>
        </article>
        <article>
          <h3> Filtrar por categoria: </h3>
          <div>
            <select>
              <option> Selecionar </option>
            </select>
          </div>
        </article>
      </section>
      <section id='s5'>
        <table>
          <thead>
            <th>
              <td className='id desaparece4'> ID </td>
              <td> Produto </td>
              <td className='desaparece2'> Cliente </td>
              <td className='desaparece'> Status </td>
              <td className='desaparece2'> Data </td>
              <td className='desaparece3'> Faturamento </td>
              <td className='desaparece'> Pagamento </td>
            </th>
          </thead>
          <hr />
          <tbody>
            <tr>
              <div>
                <td className='id desaparece4'> 7 </td>
                <td id='img'> 
                  <img src='/assets/images/cafe3coracoes.png' alt=''/>
                </td>
                <td className='desaparece2'> Cafeiteiras </td>
                <td className='desaparece'> eu </td>
                <td className='desaparece2'> 8 </td>
                <td className='desaparece3'> 32.55 </td>
                <td className='desaparece' > - </td>
              </div>
              <td id='acoes'>
                <img src='/assets/images/adm-consultas/icon-alterar.svg' alt='icon-alterar' />
                <img src='/assets/images/adm-consultas/icon-lixeira.svg' alt='icon-lixeira' />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      </main>
    </div>
  )
}

export default ConsultaPedidos;