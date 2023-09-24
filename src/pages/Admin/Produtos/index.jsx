import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link } from 'react-router-dom';
import { buscarTodos, excluir } from '../../../api/produtoApi';
import { useState } from 'react';
import {toast} from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'


export default function Consulta() {
  const [buscaInput, setBuscaInput] = useState('')
  const [produtos, setProdutos] = useState([])

  async function buscarTodosClick() { 
    try{
      if(buscaInput === ''){
        const respProdutos = await buscarTodos()
        setProdutos(respProdutos)
      }
    }
    catch(err){
      toast.error(err.response.data.erro)
    }
  }
  
  function excluirClick(idProduto, idDetalhe) {
    confirmAlert({
    title: 'Excluir produto',
    message: 'Deseja excluir esse produto ?',
    buttons:[
      {
        label: 'sim',
        onClick: async () => {
          try{
            const resp = await excluir(idProduto, idDetalhe)
            toast.success('Produto excluido!')
            buscarTodosClick()
          }
          catch(err){
            toast.error(err.response.data.erro)
          }
        }
      },
      {
        label: 'não'
      }
      ]})
  }

  
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
        <input type='text' placeholder='Busque por produtos, id do produto' />
        <article>
          <img src='/assets/images/lupa-dark.svg' alt='icon-busca' value={buscaInput} onClick={buscarTodosClick}/>
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
            {produtos.map(item => {
              return(
                <tr key={item.id}>
                  <div>
                    <td className='id desaparece4'> {item.id} </td>
                    <td id='img'> 
                      <img src='/assets/images/cafe3coracoes.png' alt=''/>
                    </td>
                    <td className='desaparece2'> {item.categoria} </td>
                    <td className='desaparece'> {item.admin} </td>
                    <td className='desaparece2'> {item.estoque} </td>
                    <td className='desaparece3'> {item.preco} </td>
                    <td className='desaparece' > {item.promocao ? item.promocao : '-'} </td>
                  </div>
                  <td id='acoes'>
                    <i className="fa-regular fa-pen-to-square"></i>
                    <i className="fa-regular fa-trash-can" onClick={() => excluirClick(item.id, item.id_detalhe)}></i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
      </main>
    </div>
  )
}
