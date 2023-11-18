import './index.scss';
import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import storage from 'local-storage'
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { URLRota } from '../../../../constants.js';

export default function Confirmacao () {

    const [preco, setPreco] = useState(0);
    const [localEntrega, setLocalEntrega] = useState([]);
    const [precoFinal, setPrecoFinal] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [dataAtual, setDataAtual] = useState((new Date().toISOString()).substring(0, 10));
    const [proximaData, setProximaData] = useState([]);
    const [itensSelecionados, setItensSelecionados] = useState(storage('itens-selecionados'));
    const redir = useNavigate();
    
    const notificacao = () => {
        toast('Seja bem-vindo à nossa assinatura! :)', {
            icon: (
                <img
                    src="/assets/images/bunashikiSeta.svg"
                    alt='Erro ao encontrar imagem!'
                    style={{width: '40px', height: '40px', margin: '-8px'}}
                />
            ),
        })
    }

    function calcularPreco () {
        try {
            let precos = 0;
            for (let item of itensSelecionados) {
                precos = (Number(item.preco) * item.quantidade) + precos;
            }

            
            let descontoCalc = precos * 0.05;
            let ponto = (descontoCalc.toString().indexOf('.'));
            const desconto = (descontoCalc.toString().substring(0, (ponto + 3)));
            let total = (precos - descontoCalc).toString().substring(0, (ponto + 4));

            setDesconto(desconto);
            setPreco(precos);
            setPrecoFinal(total);
        } catch (error) {
            toast.warn(error.message);
        }
        
    }

    async function finalizar () {
        try {
            const assinatura = {
                idCliente: storage('usuario-logado').id,
                idEndereco: Number(storage('endereco-selecionado').idEndereco),
                mensalidade: Number(precoFinal)
            }
            console.log(assinatura)
            const resposta = await axios.post((URLRota + '/concluir-assinatura/'), assinatura);
            const dados = resposta.data;
            const idAssinatura = dados.id;
            storage('id-assinatura', {idAssinatura: idAssinatura});
            for (let item of itensSelecionados) {
                const produto = {
                    idProduto: item.id,
                    idAssinatura: idAssinatura,
                    qtd: item.quantidade
                };
                const url = URLRota + '/concluir-assinatura/produtos';
                const resposta = await axios.post(url, produto);
            };
            notificacao();
            redir('/conta/assinaturas')
        } catch (error) {
            toast.warn(error.message)
        }
        
    };

    async function localizacao () {
        try {
            const id = Number(storage('endereco-selecionado').idEndereco);
            const url = URLRota + '/enderecos/' + id;
            const resposta = await axios.get(url);
            const dados = resposta.data
            setLocalEntrega([... dados]);
        } catch (error) {
            toast.warn(error.message)
        }
        
    }

    useEffect(() => {
        calcularPreco();
        localizacao();
        const data = new Date();
        data.setDate(data.getDate() + 30);
        setProximaData((data.toISOString()).substring(0, 10));
    }, [])

    return (
        <main className='confirmacao-assinatura'>
            <CabecalhoUsuario/>
            <nav className='navegador' onClick={() => {storage.remove('itens-selecionados'); storage.remove('endereco-selecionado')}}>
                <Link to={'/assinatura'}>
                    <img src="/assets/images/icon-seta-preta.png" alt="" />
                    <h1>Voltar à etapa anterior</h1>
                </Link>
            </nav>

            <section className='conteudo'>
            <h1>Revise sua assinatura:</h1>

            <section className='cartao-principal'>
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
                            {itensSelecionados.map((item) => {
                                return (
                                        <tr>
                                            <td>{item.produto}</td>
                                            <td>{item.quantidade}</td>
                                            <td>R${item.preco}</td>
                                        </tr>
                                )
                            })}
                            <tr>
                                <td>
                                    Total
                                </td>
                                <td></td>
                                <td>R${preco}</td>
                            </tr>
                            <tr>
                                <td>
                                    Desconto de 5%
                                </td>
                                <td></td>
                                <td>-R${desconto}</td>
                            </tr>
                            <tr>
                                <td>
                                    Valor Final
                                </td>
                                <td></td>
                                <td>R${precoFinal}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

                <div className="detalhes-assinatura">
                    {localEntrega.map((item) => {
                        return (
                            <p>Local de entrega: {item.cidade} - {item.rua}, nº {item.numero}.</p>
                        )
                    })}
                    <p>Primeiro pagamento: {dataAtual}</p>
                    <p>Próximo pagamento: {proximaData}</p>
                </div>

                <div className="permanencia">
                    Ao assinar este plano você concorda com o tempo mínimo de manutenção e permanência de 3 meses. As solicitações de cancelamento não serão acatadas antes da permanência mínima.
                </div>

                <button onClick={() => {finalizar();}}>Confirmar o pagamento</button>
                </section>
            </section>

            <UsuarioRodape/>
        </main>
    )
}