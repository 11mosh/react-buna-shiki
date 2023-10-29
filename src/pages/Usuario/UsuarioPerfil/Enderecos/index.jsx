import './index.scss'
import BarraNavegacaoConta from '../../../../components/Usuario/BarraNavegacaoConta'
import UsuarioCabecalho from '../../../../components/Usuario/UsuarioCabecalho'
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import storage from 'local-storage'
import { CadastrarEndereco, alterarEndereco, buscarCep, buscarEnderecos, deletarEndereco } from '../../../../api/usuarioApi'
import { confirmAlert } from 'react-confirm-alert'

export default function Index(){
    const [mostrarTabela, setMostrarTabela] = useState('none')
    const [enderecos, setEnderecos] = useState([])
    const [cep, setCEP] = useState()
    const [numero, setNumero] = useState()
    const [rua, setRua] = useState()
    const [complemento, setComplemento] = useState()
    const [cidade, setCidade] = useState()
    const [id, setId] = useState(0)

    async function buscarCepClick(alteracao){
        try {
            setCEP(alteracao)
            
            if(alteracao.length === 8){
                const resp = await buscarCep(alteracao)

                if(resp.erro){
                    toast.error('CEP inválido')
                    setCidade('')
                    setRua('')
                }
                else{
                    setCidade(resp.localidade)
                    setRua(resp.logradouro)
                }
            }

            else if(alteracao.length > 8 || alteracao.length < 8){
                setCidade('')
                setRua('')
            }
        }
        catch(err){
            toast.error('Erro ao buscar o cep')
        }
    }

    async function cadastrarEnderecoClick(){
        try{
            if(id === 0) {
                const id = storage('usuario-logado').id
                await CadastrarEndereco(cep, rua, cidade, complemento, numero, id)
                limparInputs()
                toast.success('Endereço cadastrado!!')
                buscarTodos()
            }
            else{
                const endereco = {
                    complemento: complemento,
                    rua: rua,
                    cidade: cidade,
                    numero: numero,
                    cep: cep,
                    id: id
                }
                await alterarEndereco(endereco)
                toast.success('Endereço alterado!')
                limparInputs()
                buscarTodos()
            }
        }
        catch(err){
            toast.error(err.response.data.erro)
        }
    }

    function completarInputs(endereco) {
        setCEP(endereco.cep)
        setCidade(endereco.cidade)
        setRua(endereco.rua)
        setNumero(endereco.numero)
        setComplemento(endereco.complemento)
        setId(endereco.id)
    }

    function limparInputs(){
        setCEP('')
        setCidade('')
        setRua('')
        setNumero('')
        setComplemento('')
        setId(0)
    }
    function mostrarTabelaClick(){
        if(mostrarTabela === 'flex'){
            setMostrarTabela('none')
        }
        else if(enderecos.length !== 0){
            setMostrarTabela('flex')
        }
    }

    async function buscarTodos(){
        try{
            const id = storage('usuario-logado').id
            const enderecosResp = await buscarEnderecos(id)
            if(enderecosResp.length === 0)
                toast.info('Você não possui nenhum endereço cadastrado')
            setEnderecos(enderecosResp)
        }
        catch(err){
            toast.error(err.message)
        }
    }


    async function deletarEnderecoClick(item) {
        
        console.log(item);
        confirmAlert({
            title: "Deletar endereço",
            message: `Tem certeza que deseja deletar o endereço da rua "${item.rua}" ?`,
            buttons: [
                {
                label: "Sim",
                onClick: async () => {
                    try{
                        await deletarEndereco(item.id)

                        buscarTodos()

                        toast.success('Endereço deletado!')
                    }
                    catch(err){
                        toast.error(err.response.data.erro)
                    }
                }
            },
            {
                label: "Não"
            }
        ]
        })

    }

    function verificarTecla(e){
        if(e.key === 'Enter')
            cadastrarEnderecoClick()
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
                                        <tr key={item.id}> 
                                            <tr>
                                                <td>
                                                    CEP: {item.cep} | {item.rua}, {item.numero }
                                                </td>
                                                <td>
                                                    <i className="fa-regular fa-pen-to-square" onClick={() => completarInputs(item)}></i>
                                                    <i className="fa-regular fa-trash-can" onClick={() => deletarEnderecoClick(item)}></i>
                                                </td>
                                            </tr>
                                            { index !== array.length - 1 ? <hr style={{display: mostrarTabela}}/> : <></>} 

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
                                    <input type='txt' placeholder='Informe um cep' value={cep} onChange={e => buscarCepClick(e.target.value)} onKeyDown={(e) => verificarTecla(e)}/>
                                </div>
                                <div>
                                    <label> Número </label>
                                    <input type='txt' placeholder='Informe um número' value={numero} onChange={e => setNumero(e.target.value)} onKeyDown={(e) => verificarTecla(e)}/>
                                </div>
                            </div>
                            <div>
                                <label> Complemento </label>
                                <input type='txt' placeholder='Informe um complemento se tiver' value={complemento} onChange={e => setComplemento(e.target.value)} onKeyDown={(e) => verificarTecla(e)}/>
                            </div>
                            <div>
                                <label> Rua </label>
                                <input type='txt' disabled value={rua}/>
                            </div>
                            <div>
                                <label> Cidade </label>
                                <input type='txt' disabled value={cidade}/>
                            </div>
                        </div>
                        <button onClick={cadastrarEnderecoClick}> {id === 0 ? 'Cadastrar' : 'Alterar'} </button>
                    </section>
                </main>
            </div>
            <UsuarioRodape />
        </div>
    )
}