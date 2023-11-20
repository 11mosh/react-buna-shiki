import { Link } from 'react-router-dom'
import CabecalhoAdm from '../../../components/Admin/AdmCabecalho'
import './index.scss'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { buscarCombosAdm, excluirCombo, excluirItemCombo, excluirItensCombo, filtrarCombosPorAdm, ordenarCombosPorCampo, pesquisarCombos } from '../../../api/comboApi'
import { buscarAdms } from '../../../api/admApi'
import { confirmAlert } from 'react-confirm-alert'

export default function Index() {
    const [combos, setCombos] = useState([])
    const [ordenar, setOrdenar] = useState(0)
    const [pesquisa, setPesquisa] = useState('')
    const [filtroAdm, setFiltroAdm] = useState(0)
    const [adms, setAdms] = useState([])

    async function buscarCombos() {
        try{
            const resp = await buscarCombosAdm()
            if(resp.length === 0)
                toast.info('Não há combos cadastrados no momento')
            setCombos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    function excluirComboClick(id, nome) {
        confirmAlert({
            title: `Excluir combo`,
            message: `Deseja mesmo excluir o combo "${nome}" ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try{
                            await excluirItensCombo(id)
                            await excluirCombo(id)
                            toast.success('Combo excluido!')
                            buscarCombos()
                        }
                        catch(err) {
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

    async function ordenarCombos(campo) {
        try{
            const resp = await ordenarCombosPorCampo(campo)

            setCombos(resp)
        }   
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    async function filtrarPorAdm(id){
        try{
            const resp = await filtrarCombosPorAdm(id)

            setCombos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }
    
    async function buscarAdmsFiltro(){
        try{
            const resp = await buscarAdms()

            if(resp.length === 0)
                toast.info('Não há combos com feitos por esse ADM')

            setAdms(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    async function pesquisar() {
        try{
            const resp = await pesquisarCombos(pesquisa)

            if(resp.length === 0)
                toast.info('Não há combos com esse nome ou id')

            setCombos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else    
                toast.error(err.message)
        }
    }

    function verificarTecla(e) {
        if(e.key === 'Enter')
            pesquisar()
    }

    useEffect(() => {
        buscarCombos()
        buscarAdmsFiltro()
        // eslint-disable-next-line
    }, [])
    
    
    return (
        <div id='page-adm-combos'>
            <CabecalhoAdm />
            <main>
                <section id='s1'>
                    <h1> Consulta de combos </h1>
                    <Link to='/adm/cadastro-combo'> Adicionar um combo </Link>
                    </section>
                <section id='s2'>
                    <input type='text' placeholder='Busque por combos, id de combos' onKeyDown={e => verificarTecla(e)} onChange={e => {setPesquisa(e.target.value); setOrdenar(0); setFiltroAdm(0)}}/>
                    <article onClick={pesquisar}>
                        <img src='/assets/images/lupa-dark.svg' alt='icon-busca'/>
                    </article>
                </section>
                <section id='s3'>
                    <article>
                        <h3> Ordenar por:</h3>
                        <div>
                        <select onChange={e => { setOrdenar(e.target.value); setPesquisa(''); setFiltroAdm(0); ordenarCombos(e.target.value)}}>
                            <option value={0}>  Selecionar </option>
                            <option value='Preço (maior ao menor)'> Preço (maior ao menor)</option>
                            <option  value='Preço (menor ao maior)'> Preço (menor ao maior) </option>
                        </select>
                        </div>
                    </article>
                    <article>
                        <h3> Filtrar por ADM:</h3>
                        <div>
                            <select onChange={e => {setFiltroAdm(e.target.value); setPesquisa(''); setOrdenar(0); filtrarPorAdm(e.target.value)}}>
                                <option value={0}> Selecionar </option>
                                {adms.map((item) => {
                                    return(
                                        <option value={item.id}> {item.usuario} </option>
                                    )
                                })}
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
                        {combos.map((item) => {
                            return(
                                <tr>
                                    <div>
                                        <td className='desaparece3'> {item.id} </td>
                                        <td className='maior'> {item.nome }</td>
                                        <td className='desaparece medio'> {item.admin} </td>
                                        <td className='desaparece2 medio'> R${item.preco} </td>
                                    </div>
                                    <td id='acoes'>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                        <i className="fa-regular fa-trash-can" onClick={() => excluirComboClick(item.id, item.nome)}></i>
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