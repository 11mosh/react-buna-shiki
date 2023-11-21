import './index.scss';
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho';
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify'
import { buscarAssinaturas, buscarAssinaturasPorStatus, ordenarAssinaturas, pesquisarAssinaturas, trocarStatusAssinatura } from '../../../api/assinaturasApi';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router';

export default function ConsultaAssinaturas () {
    const [assinaturas, setAssinaturas] = useState([{dt_inicio: '', cliente: {}, endereco: {}}]);
    const [pesquisa, setPesquisa] = useState(0);
    const [ordenar, setOrdenar] = useState(0);
    const [status, setStatus] = useState(0);
    const redir = useNavigate();

    async function buscarAssinaturasLocal(){
      try{
        const assinaturasResp = await buscarAssinaturas()

        setAssinaturas(assinaturasResp)
      }
      catch(err){
        if(err.response)
            toast.error(err.response.data.erro)
        else
            toast.error(err.message)
      }
    }

    async function filtrarPorStatusAssinaturasLocal(status) {
      try{
        let assinaturasResp = await buscarAssinaturasPorStatus(status)
        if(assinaturasResp.length === 0)
          toast.info('Não há assinaturas com esse status.')
        setAssinaturas(assinaturasResp)
      }
      catch(err){
        if(err.response)
            toast.error(err.response.data.erro)
        else
            toast.error(err.message)
      }
    }

    async function ordenarAssinaturasLocal(ordem) {
      try{
        let assinaturasResp = await ordenarAssinaturas(ordem)

        setAssinaturas(assinaturasResp)
      }
      catch(err){
        if(err.response)
            toast.error(err.response.data.erro)
        else
            toast.error(err.message)
      }
    }

    async function pesquisarAssinaturasLocal() {
      try{
        let assinaturasResp = await pesquisarAssinaturas(pesquisa)

        setAssinaturas(assinaturasResp)

      }
      catch(err){
        if(err.response)
            toast.error(err.response.data.erro)
        else
            toast.error(err.message)
      }
    }

    async function trocarStatusLocal(novoStatus, id, index){
      let antigoStatus = assinaturas[index].situacao
       
      confirmAlert({
          title: 'Trocar status',
          message: `Tem certeza que deseja trocar o status da assinatura com id ${id}, de "${antigoStatus}" para "${novoStatus}" ?`,
          buttons: [
              {
                  label: 'Sim',
                  onClick: async () => {
                      try{
                          await trocarStatusAssinatura(id, novoStatus)

                          toast.info('Status trocado')
                          buscarAssinaturasLocal()
                      }
                      catch(err){
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
          ]
      })
    }

    function verificarNome(nome){
      if(nome){
        let posicaoEspaco = nome.indexOf(' ')
        let primerioNome = nome.substring(0, posicaoEspaco)
        
        if(posicaoEspaco === -1) 
          return nome
        else
          return primerioNome
      }
  
    }

    useEffect(() => {
      buscarAssinaturasLocal()
    }, [])

    return (
        <div id='page-consulta-assinaturas'>
      <CabecalhoAdm />
      <main>
        <section id='s1'>
          <h1> Consulta de assinaturas </h1>
        </section>
        <section id='s2'>
          <input type='text' placeholder='Busque por cliente ou código de assinatura' onKeyDown={(event) => {if (event.key === 'Enter') { pesquisarAssinaturasLocal() }} } onChange={e => {setPesquisa(e.target.value); setStatus(0); setOrdenar(0)}}/>
          <article onClick={pesquisarAssinaturasLocal}>
            <img src='/assets/images/lupa-dark.svg' alt='icon-busca' />
          </article>
        </section>
        <section id='s3'>
          <article>
            <h3> Ordenar por:</h3>
            <div>
              <select value={ordenar} onChange={e => {ordenarAssinaturasLocal(e.target.value); setPesquisa(''); setStatus(0); setOrdenar(e.target.value)}}>
                <option value={0}> Selecionar</option>
                <option value='Mais caro'> Mais caro </option>
                <option value='Mais barato'> Mais barato </option>
              </select>
            </div>
          </article>
          <article>
            <h3> Filtrar por status: </h3>
            <div>
              <select value={status} onChange={e => {filtrarPorStatusAssinaturasLocal(e.target.value); setPesquisa(''); setOrdenar(0); setStatus(e.target.value)}}>        
                <option value={0}> Selecionar</option>
                <option> Pago</option>
                <option> Não Pago</option>
                <option> Cancelado </option>
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
                <th className='desaparece4'> Inicio </th>
                <th className='desaparece3'> Status </th>
              </tr>
            </thead>
            <hr />
            <tbody>
                {assinaturas.map((item, index) => {
                  return(
                    <tr onClick={() => redir(`/adm/consulta-assinaturas/${item.id}`)}>
                      <div>
                        <td className='id desaparece5'> {item.id} </td>
                        <td className='desaparece'> {verificarNome(item.cliente.nome)} </td>
                        <td className='desaparece1'> {item.endereco.cep} </td>
                        <td className='desaparece2'> R${item.mensalidade} </td>
                        <td className='desaparece4'> {item.dt_inicio.substring(0, 10)} </td>
                        <td className=''> 
                            <select value={item.situacao} onChange={e => trocarStatusLocal(e.target.value, item.id, index)}>
                                <option value='Não pago'> Não pago </option>
                                <option value='Pago'> Pago</option>
                                <option value='Cancelado'> Cancelado </option>
                            </select>
                        </td>
                      </div>
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