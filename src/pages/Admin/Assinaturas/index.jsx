import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';


export default function ConsultaAssinaturas () {

    return (
        <div id='page-consulta-assinaturas'>
      <CabecalhoAdm />
      <main>
        <section id='s1'>
          <h1> Consulta de assinaturas </h1>
        </section>
        <section id='s2'>
          <input type='text' placeholder='Busque por cliente ou código de assinatura' />
          <article>
            <img src='/assets/images/lupa-dark.svg' alt='icon-busca' />
          </article>
        </section>
        <section id='s3'>
          <article>
            <h3> Ordenar por:</h3>
            <div>
              <select>
                <option> Mais caro </option>
                <option> Mais barato </option>
              </select>
            </div>
          </article>
          <article>
            <h3> Filtrar por status: </h3>
            <div>
              <select>                
                <option> Pago</option>
                <option> Não Pago</option>
              </select>
            </div>
          </article>
        </section>
        <section id='s4'>
          <table>
            <thead>
              <tr>
                <th className='id desaparece5'> ID </th>
                <th className='img'> Cliente </th>
                <th className='desaparece1'> Endereço </th>
                <th className='desaparece2'> Valor </th>
                <th className='desaparece4'> Código </th>
                <th className='desaparece3'> Status </th>
              </tr>
            </thead>
            <hr />
            <tbody>
              {/* {produtos.map(item => {
                return( */}
                  <tr >
                    <div>
                      <td className='id desaparece5'> 12 </td>
                      <td className='desaparece'> Pietro </td>
                      <td className='desaparece1'> 32142-131 </td>
                      <td className='desaparece2'> R$212,12 </td>
                      <td className='desaparece4'> ASV23-12 </td>
                      <td className='desaparece3' > PAGO </td>
                    </div>
                  </tr>
                {/* ) */}
              {/* })} */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
    )
}