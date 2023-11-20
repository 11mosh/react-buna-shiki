import './index.scss';
import Cabecalho from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import BarraNavegacao from '../../../../components/Usuario/BarraNavegacaoConta';
import CancelarAssinatura from './CancelarAssinatura';
import { confirmAlert } from 'react-confirm-alert';
import { useEffect, useState } from 'react';
import { URLRota } from '../../../../constants.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import storage from 'local-storage';

export default function PerfilAssinatura () {

    function cancelarAssinatura () {
        const cancelamento = {
            customUI: ({onClose}) => {
                return (
                    <CancelarAssinatura
                    sim={async () => {
                        const url = URLRota + '/cancelar-assinatura/' + idAssinatura;
                        await axios.delete(url);
                        setAssinante(false);
                        onClose();
                    }}
                    nao={() =>{
                        onClose();
                    }}
                    /> 
                )
            }
        }

        confirmAlert(cancelamento);
    }

    const [infoAssinatura, setInfoAssinatura] = useState([]);
    const [idAssinatura, setIdAssinatura] = useState('');
    const [mensalidade, setMensalidade] = useState();
    const [assinante, setAssinante] = useState(false);
    const [proximaData, setProximaData] = useState();
    const [codigo, setCodigo] = useState('');
    const navigate = useNavigate()

    async function verificarAssinatura (id) {
        const url = URLRota + '/verificar-assinatura/' + id;
        const resposta = await axios.get(url);
        const dados = resposta.data;
        
        if (dados.length > 0) {
            setAssinante(true);
        } else if (dados.length === 0) {
            setAssinante(false)
        }
    }
    
    async function chamarAssinatura (id) {
        if (assinante) {
            const url = URLRota + '/procurar-assinatura/' + id;
            const resposta = await axios.get(url);
            const dados = resposta.data;
            // console.log(dados)

            const mensalidadee = dados[0].vl_mensalidade;
            const fim = dados[0].dt_fim;
            const fimFormatado = fim.toString().substring(0, 10)
            const codigoFormatado = (storage('id-assinatura').idAssinatura).toString().padStart(4, '0');
            setMensalidade(mensalidadee);
            setInfoAssinatura(dados);
            setProximaData(fimFormatado);
            setCodigo(codigoFormatado);
        }
       
    }

    useEffect(() => {
        if (storage('usuario-logado')) {
            const idCliente = storage('usuario-logado').id;
            verificarAssinatura(idCliente);
            if(storage('id-assinatura')) {
                const idAssinaturaa = storage('id-assinatura').idAssinatura;
                setIdAssinatura(idAssinaturaa);
                chamarAssinatura(idAssinaturaa);
            }
        }
        else{
            navigate('/login/conta')
        }

       // eslint-disable-next-line
    }, [assinante])

    useEffect(() => {
        if (storage('usuario-logado')) {
            const idCliente = storage('usuario-logado').id;
            verificarAssinatura(idCliente);
            console.log(assinante)
            
            if(storage('id-assinatura')) {
                const idAssinaturaa = storage('id-assinatura').idAssinatura;
                setIdAssinatura(idAssinaturaa);
                chamarAssinatura(idAssinaturaa);
            } 
        }    

        // eslint-disable-next-line   
    }, [])


    return (
        <main className="perfil-assinatura">
            <Cabecalho linha='aparecer'/>
            <main className="corpo">

                <BarraNavegacao selecionar='Assinaturas' />

                <main className="aba-assinatura">
                
                {assinante
                ? <section className='cartao-principal'>
                <div className="imagem-tabela">
                    <img src="/assets/images/bunashikiSetaCinza.png" alt="" />
                    
                    <table>
                        <thead>
                            <tr>
                                <td><b>Itens</b></td>
                                <td><b>Quantidade</b></td>
                                <td><b>Valor</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {infoAssinatura.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.nm_produto}</td>
                                        <td>{item.qtd_itens}</td>
                                        <td>R${item.vl_preco}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td>
                                    Valor Total
                                </td>
                                <td></td>
                                <td>R${mensalidade}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

                <div className="detalhes-assinatura">
                    <p>Código da assinatura: #BSA-{codigo}</p>
                    <p>Próximo pagamento: {proximaData}</p>
                </div>

                <div className="permanencia" style={{marginTop: '70px', alignSelf: 'center'}}>
                1: Após o cancelamento da assinatura, você perderá o acesso aos recursos exclusivos e conteúdo premium que estava desfrutando.
                <br></br>
                2: Não haverá mais cobranças recorrentes em sua conta associadas à assinatura de café.
                <br></br>
                3: Mesmo após um possível cancelamento, esperamos ainda tê-lo como parte de nossa comunidade de apreciadores de café.
                <br></br>
                </div>
                <button onClick={() => {cancelarAssinatura(); }}>CANCELAR ASSINATURA</button> 
                </section>

                : <section className='cartao-principal' style={{display: 'flex', alignItems: 'center'}}>
                    <h1 style={{margin: '10px 0px  20px 0px'}}>Aparentemente você não possui nenhuma assinatura... </h1>
                    <p style={{marginBottom: '40px'}}>Faça parte do nosso clube de assinatura mensal!
                    <br />
                    Você pode escolher quais produtos deseja receber mensalmente no conforto de sua casa.
                    <br />
                    - Mais comodidade;
                    <br />
                    - Novas chances de descobrir novos sabores;
                    <br />
                    - Preço mais econômico
                    </p >
                    <Link to={'/assinatura'} style={{textDecoration: 'none', color: 'white', fontWeight: '700', backgroundColor: '#F47E3C', padding: '10px', borderRadius: '10px', alignSelf: 'center'}}>
                        Clique aqui e desfrute de todas as vantagens!
                    </Link>

                    <img src="/assets/images/pedidosAcabam.png" alt="" style={{height: '80px', opacity: 0.5, marginTop: '40px'}}/>
                 </section>
                  
            }
                
                </main>
            </main>
            <UsuarioRodape/>
        </main>
    )
}