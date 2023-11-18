import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { Link, useNavigate } from 'react-router-dom';
import { buscarAdms, buscarCategorias, excluir, filtrarPorAdm, filtrarPorCategorias, filtrarPorAssinatura, buscarTodosProdutos, ordernarProdutosPorColuna, pesquisaInput } from '../../../api/produtoApi';
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert'


export default function Consulta() {
  const [buscaInput, setBuscaInput] = useState('')
  const [produtos, setProdutos] = useState([])
  const [adms, setAdms] = useState([])
  const [categorias, setCategorias] = useState([])
  const [disponivelAssinatura, setDisponivelAssinatura] = useState(0)
  const [filtrarPorCategoria, setFiltrarPorCategoria] = useState(0)
  const [filtrarAdm, setFiltrarAdm] = useState(0)
  const [ordenarPorColuna, setOrdenarPorColuna] = useState(0)

  const navigate = useNavigate()

  async function pesquisa() { 
    try{
      if(buscaInput === ''){
        const respProdutos = await buscarTodosProdutos()

        if(respProdutos.length === 0){
          toast.info('Não há produtos cadastrados')
          setProdutos([])
        }
        else{
          setProdutos(respProdutos)
        }
      }
      else {
        const produtosRetornados = await pesquisaInput(buscaInput)
        if(produtosRetornados.length === 0)
          toast.info('Não há produtos com esse nome ou id')
        setProdutos(produtosRetornados)
      }
    }
    catch(err){
      if(err.response)
                toast.warn(err.response.data.erro)
            else
                toast.warn(err.message)
    }
  }
  
  function excluirClick(idProduto, idDetalhe, nome) {
    confirmAlert({
    title: 'Excluir produto',
    message: `Deseja mesmo excluir o produto "${nome}" ?`,
    buttons:[
      {
        label: 'Sim',
        onClick: async () => {
          try{
            await excluir(idProduto, idDetalhe)
            toast.success('Produto excluido!')
            const removendoDeletado = produtos.filter(item => item.id !== idProduto)
            setProdutos(removendoDeletado)
          }
          catch(err){ 
            setProdutos([])
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
          }
        }
      },
      {
        label: 'Não'
      }
      ]})
  }

  function verResumo(id, campoClass) {
    if(campoClass !== 'fa-regular fa-pen-to-square' && campoClass !== 'fa-regular fa-trash-can')
      navigate(`/adm/${id}/revisao-produto`)
  }

  function alterar(id){
    navigate(`/adm/${id}/alterar-produto`)
  }

  async function buscarCategoriasFiltro(){
    try{
      const categoriasResp = await buscarCategorias()
      setCategorias(categoriasResp)
    }
    catch(err){
      toast.error('Não foi possível buscar as categorias disponíveis para filtro')
    }
  }

  async function buscarAdmsFiltro(){
    try{
      const admsResp = await buscarAdms()

      setAdms(admsResp)
    }
    catch(err){
      toast.error('Não foi possível buscar os adms disponíveis para filtro')
    }
  }

  useEffect(() => {
    buscarCategoriasFiltro()
    buscarAdmsFiltro()
    pesquisa()
    // eslint-disable-next-line
  }, [])

  async function filtrarPorCategoriasClick(idCategoria){
    try {
      const produtosFiltrados = await filtrarPorCategorias(idCategoria)
  
  
      if(produtosFiltrados.length === 0 && idCategoria !== '0')
        toast.info('Não há produtos com essa categoria.')

      setProdutos(produtosFiltrados)
    }
    catch(err){
      toast.error(err.response.data.erro)
    }
  }

  async function filtrarPorAdmClick(idAdm){
    try {

      const produtosFiltrados = await filtrarPorAdm(idAdm)
      if(produtosFiltrados.length === 0 && idAdm !== '0')
        toast.info('Não há produtos cadastrados por esse administrador.')

      setProdutos(produtosFiltrados)
    }
    catch(err){
      toast.error(err.response.data.erro)
    }
  }

  async function filtrarPorAssinaturaClick(valor) {
    try{
      const produtosFiltrados = await filtrarPorAssinatura(valor)

      if(produtosFiltrados.length === 0 && valor === 'true')
        toast.info('Não há produtos disponíveis para assinatura.')
      if(produtosFiltrados.length === 0 && valor === 'false')
        toast.info('Não há produtos que não estejam disponíveis para assinatura.')

      setProdutos(produtosFiltrados)
    } 
    catch(err){
      toast.error(err.message)
    }
  }
  
  async function ordenarProdutos(coluna) {
    try {
      const produtosOrdenados = await ordernarProdutosPorColuna(coluna)
      console.log(produtosOrdenados);
      setProdutos(produtosOrdenados)
    }
    catch(err){
      toast.error(err.response.data.erro)
    }
  }

  function apertoEnter(e) {
    if(e.key === 'Enter')
      pesquisa()
  }

  return (
    <div id='page-adm-produtos'>
      <CabecalhoAdm />
      <main>
        <section id='s1'>
          <h1> Consulta de produtos </h1>
          <Link to='/adm/cadastro-produto'> Adicionar um produto </Link>
        </section>
        <section id='s2'>
          <input type='text' placeholder='Busque por produtos, id do produto' value={buscaInput} onChange={e => setBuscaInput(e.target.value)} onKeyDown={apertoEnter}/>
          <article>
            <img src='/assets/images/lupa-dark.svg' alt='icon-busca'onClick={pesquisa}/>
          </article>
        </section>
        <section id='s3'>
          <article>
            <h3> Ordenar por:</h3>
            <div>
              <select value={ordenarPorColuna} onChange={e => {ordenarProdutos(e.target.value); setOrdenarPorColuna(e.target.value); setFiltrarPorCategoria(0); setDisponivelAssinatura(0); setFiltrarAdm(0)}}>
                <option value={0}> Selecionar </option>
                <option value='qtd_estoque desc' > Estoque (do maior para o menor) </option>
                <option value='qtd_estoque' > Estoque (do menor para o maior) </option>
                <option value='vl_preco desc' > Preço </option>
                <option value='vl_preco_promocional desc' > Promocional </option>
              </select>
            </div>
          </article>
          <article>
            <h3> Filtrar por categoria: </h3>
            <div>
              <select value={filtrarPorCategoria}  onChange={e => { filtrarPorCategoriasClick(e.target.value); setOrdenarPorColuna(0); setFiltrarPorCategoria(e.target.value); setDisponivelAssinatura(0); setFiltrarAdm(0)   }}>
                <option value={0}> Selecionar </option>
                {categorias.map(item => {
                  return(
                    <option key={item.id} value={item.id}> {item.nome} </option>
                  )
                })}
              </select>
            </div>
          </article>
          <article>
            <h3> Filtrar por ADM:</h3>
            <div>
              <select value={filtrarAdm} onChange={e => {filtrarPorAdmClick(e.target.value); setFiltrarAdm(e.target.value); setFiltrarPorCategoria(0); setDisponivelAssinatura(0); setOrdenarPorColuna(0)}}>
                <option value={0}> Selecionar </option>
                {adms.map(item => {
                  return(
                    <option key={item.id} value={item.id}> {item.usuario}</option>
                  )
                })}
              </select>
            </div>
          </article>
          <article>
            <h3> Disponível para assinatura:</h3>
            <div>
              <select value={disponivelAssinatura} onChange={e => {filtrarPorAssinaturaClick(e.target.value); setDisponivelAssinatura(e.target.value); setFiltrarAdm(0); setFiltrarPorCategoria(0); setOrdenarPorColuna(0)}}>
                <option value={0}> Selecionar </option>
                <option value={true}> Disponível </option>
                <option value={false}> Não disponível </option>
              </select>
            </div>
          </article>
        </section>
        <section id='s4'>
          <table>
            <thead>
              <tr>
                  <th className='id desaparece4'> ID </th>
                <th className='img'> Produto </th>
                <th className='desaparece2 categoria'> Categoria </th>
                <th className='desaparece'> ADM </th>
                <th className='desaparece2'> Estoque </th>
                <th className='desaparece3'> Preço </th>
                <th className='desaparece'> Promocional </th>
              </tr>
            </thead>
            <hr />
            <tbody>
              {produtos.map(item => {
                return(
                  <tr key={item.id} onClick={(e) => verResumo(item.id, e.target.className )}>
                    <div>
                        <td className='id desaparece4'> {item.id} </td>
                      <td className='img'> 
                        <img src={item.imagem} alt=''/>
                      </td>
                      <td className='desaparece2 categoria'> {item.categoria} </td>
                      <td className='desaparece'> {item.admin} </td>
                      <td className='desaparece2'> {item.estoque} </td>
                      <td className='desaparece3'> {item.preco} </td>
                      <td className='desaparece' > {item.promocao ? item.promocao : '-'} </td>
                    </div>
                    <td id='acoes'>
                      <i className="fa-regular fa-pen-to-square" onClick={() => alterar(item.id)}></i>
                      <i className="fa-regular fa-trash-can" onClick={() => excluirClick(item.id, item.id_detalhe, item.produto)}></i>
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
