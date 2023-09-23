import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link } from 'react-router-dom';




function Consulta() {
  return (
    <div id='page-adm-produtos'>
      <CabecalhoAdm />
      <main>

      <section id='s1'>
        <Link className='link' to={'/adm/'}>Tela inicial</Link>
        <img src='/assets/images/adm-consultas/icon-seta-direita.svg' alt='icon-seta-direita' />
        <Link> Visualizar produto </Link>
      </section>
      <hr />
      <section id='s2'>
        <h1> Consulta de produtos </h1>
        <button> Adicionar um produto </button>
      </section>
      <section id='s3'>
        <input type='text' placeholder='Busque por produtos, id do produto'/>
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
          <h3> Filtrar por categoria: </h3>
          <div>
            <select>
              <option> Selecionar </option>
            </select>
          </div>
        </article>
        <article>
          <h3> Filtrar por ADM:</h3>
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
              <td className='desaparece2'> Categoria </td>
              <td className='desaparece'> ADM </td>
              <td className='desaparece2'> Estoque </td>
              <td className='desaparece3'> Preço </td>
              <td className='desaparece'> Promocional </td>
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

export default Consulta;