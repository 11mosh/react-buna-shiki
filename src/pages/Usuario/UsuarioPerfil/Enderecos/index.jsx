import './index.scss'
import BarraNavegacaoConta from '../../../../components/Usuario/BarraNavegacaoConta'
import UsuarioCabecalho from '../../../../components/Usuario/UsuarioCabecalho'
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import storage from 'local-storage'
import { buscarEnderecos } from '../../../../api/usuarioApi'

export default function Index(){
    const [mostrarTabela, setMostrarTabela] = useState('none')
    const [enderecos, setEnderecos] = useState([])

    function mostrarTabelaClick(){
        if(mostrarTabela === 'flex'){
            setMostrarTabela('none')
        }
        else{
            setMostrarTabela('flex')
        }
    }

    async function buscarTodos(){
        try{
            const id = storage('usuario-logado').id
            const enderecosResp = await buscarEnderecos(id)

            setEnderecos(enderecosResp)
        }
        catch(err){
            toast.error(err.response.data.erro)
        }
    }

    useEffect(() => {
        buscarTodos()
    }, [])

    return(
        <div id='page-conta-enderecos'>
            <UsuarioCabecalho />
            <div id='enderecos'>
                <BarraNavegacaoConta /> 
                <main>
                    <section id='s1'>
                        <div>
                            <div>
                                <img src="" alt="" style={{visibility: "hidden"}}/>
                                <h4>  Ver endereços cadastrados </h4>
                                <input type="checkbox" name="seta" id="seta" />
                                <label htmlFor="seta" >
                                    <img src='/assets/images/setadropdown.png' alt='seta mostra tabela' onClick={mostrarTabelaClick}/>
                                </label>
                            </div>
                            <hr style={{display: mostrarTabela}}/>
                            <table style={{display: mostrarTabela}}>
                                <tbody>
                                    {enderecos.map((item, index, array) => {
                                        return(  
                                        <tr> 
                                            <tr>
                                                <td>
                                                    CEP: {item.cep} | {item.rua} {item.numero }
                                                </td>
                                                <td>
                                                    <i className="fa-regular fa-pen-to-square"></i>
                                                    <i className="fa-regular fa-trash-can"></i>
                                                </td>
                                            </tr>
                                            { index !== array.length - 1 ? <hr style={{display: mostrarTabela}}/> : <></>} 

                                            {/* <hr /> */}
                                        </tr>
                                        )
                                    })}
                                </tbody>
                            </table> 
                        </div>
                    </section>
                    <section id='s2'>
                        <h4>Cadastre um novo endereço</h4>
                        <div id='campos'>
                            <div id='campoDuplo'>
                                <div>
                                    <label> CEP </label>
                                    <input type='txt' placeholder='Informe um cep'/>
                                </div>
                                <div>
                                    <label> Número </label>
                                    <input type='txt' placeholder='Informe um número'/>
                                </div>
                            </div>
                            <div>
                                <label> Complemento </label>
                                <input type='txt' placeholder='Informe um complemento se tiver'/>
                            </div>
                            <div>
                                <label> Rua </label>
                                <input type='txt' disabled />
                            </div>
                            <div>
                                <label> Cidade </label>
                                <input type='txt' disabled />
                            </div>
                        </div>
                        <button> Cadastrar </button>
                    </section>
                </main>
            </div>
            <UsuarioRodape />
        </div>
    )
}