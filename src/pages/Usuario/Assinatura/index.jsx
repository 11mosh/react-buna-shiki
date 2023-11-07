import './index.scss';
import { useEffect, useState } from 'react';
import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import storage from 'local-storage';
import ItemDisponivel from './Item';
import { filtrarPorCategorias } from '../../../api/produtoApi.js';
import { CadastrarEndereco, buscarCep } from '../../../api/usuarioApi';
import {toast} from 'react-toastify';
import { URLRota } from '../../../constants.js';

export default function Assinatura () {

    const [numeroCartao, setNumeroCartao] = useState(0);
    const [validade, setValidade] = useState('');
    const [cvv, setCvv] = useState('');
    const [nomeTitular, setNomeTitular] = useState('');
    const [cpf, setCpf] = useState('');

    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    const [rua, setRua] = useState('Rua')
    const [cidade, setCidade] = useState('Cidade')

    const [exibirCartao, setExibirCartao] = useState(false);
    const [exibirEndereco, setExibirEndereco] = useState(false);
    const [itensDisponiveis, setItensDisponiveis] = useState([]);
    const [cartoes, setCartoes] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [filtrarPorCategoria, setFiltrarPorCategoria] = useState(0);
    const [enderecos, setEnderecos] = useState([]);

    const [itensSelecionados, setItensSelecionados] = useState([]);
    const [qtdSelecionado, setQtdSelecionado] = useState(0);

    const [isBotaoDisponivel, setIsBotaoDisponivel] = useState(false);

    const [opcaoCartao, setOpcaoCartao] = useState(0);
    const [opcaoEndereco, setOpcaoEndereco] = useState(0);

    const redir = useNavigate()

    async function chamarAssinaturas () {
        const produto = await axios.get(URLRota + '/produtos');
        const resp = produto.data.filter((item) => item.assinatura === 1);
        for (let item of resp) {
            item.quantidade = 0;
        };

        setItensDisponiveis(resp);
    }

    function diminuirItens (qtd, index) {
        if (qtd > 0) {
            let qtdItem = qtd 
            qtdItem--
            let novoArray = []
            for(let cont = 0; cont < itensDisponiveis.length; cont++){
                novoArray[cont] = itensDisponiveis[cont]
                if(cont === index){
                    novoArray[cont].quantidade = qtdItem
                }
            }
            setItensDisponiveis(novoArray);
        }
    };

    function aumentarItens (qtd, index) {
        let qtdItem = qtd 
        qtdItem++
        let novoArray = []
        for(let cont = 0; cont < itensDisponiveis.length; cont++){
            novoArray[cont] = itensDisponiveis[cont];

            if(cont === index){
                novoArray[cont].quantidade = qtdItem
            }
        }
        setItensDisponiveis(novoArray);
        // console.log(itensDisponiveis)
    }

    async function chamarCategorias () {
        const categoriass = await axios.get(URLRota + '/categorias');
        const resposta = categoriass.data;

        setCategorias(resposta);
    }

    async function chamarCartoes () {
        const idUsuario = storage('usuario-logado').id
        const cartoess = await axios.get(URLRota + '/cartoes/' + idUsuario);
        setCartoes(cartoess.data)
    }

    async function chamarEnderecos () {
        const idUsuario = storage('usuario-logado').id
        const enderecoss = await axios.get(URLRota + '/enderecos/' + idUsuario);
        setEnderecos(enderecoss.data)
    }

    async function filtrarPorCategoriasClick(idCategoria){
        try {
            const produtosCategoria = await filtrarPorCategorias(idCategoria)
            const produtosFiltrados = produtosCategoria.filter((item) => item.assinatura === 1);
      
            for (let item of produtosFiltrados) {
                item.quantidade = 0;
            };

          if(produtosFiltrados.length === 0 && idCategoria !== '0' && filtrarPorCategoria !== 0)
            toast.info('Não há produtos com essa categoria.')
    
          setItensDisponiveis(produtosFiltrados)
        }
        catch(err){
          toast.error(err.response.data.erro)
        }
      }

    async function novoCartao () {
        try {     
            const idUsuario = storage('usuario-logado').id
            const urlCartao = URLRota + '/cartao/' + idUsuario;
            const infoCartao = {
                idCliente: idUsuario,
                numeroCartao: numeroCartao,
                validade: validade,
                cvv: cvv,
                titular: nomeTitular,
                identidade: cpf
            };

            const resposta = await axios.post(urlCartao, infoCartao);
            toast.success('Novo cartão cadastrado!');

            setNumeroCartao('');
            setValidade('');
            setCvv('');
            setNomeTitular('');
            setCpf('');
            chamarCartoes();

        } catch(err){
            toast.error(err.response.data.erro)
        }
    };

    function nomeNoCartao (item) {
        const nome = item.nome
        const espaco = nome.indexOf(' ');

        return (nome.substring(0, (espaco + 2)) + '.').toUpperCase();
    }

    async function BuscarCep(alteracao) {
        try{
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
            toast.error('CEP inválido')
        }
    }

    

    async function cadastrarEndereco () {
        try{
            const id = storage('usuario-logado').id
            if(!cep)
                toast.warn('CEP obrigatório')
            else if(!cidade)
                toast.warn('CEP incorreto')
            else if(!rua)
                toast.warn('CEP incorreto')
            else if(!numero)
                toast.warn('Número da casa obrigatório')
            else{
                await CadastrarEndereco(cep, rua, cidade, complemento, numero, id)
                
                toast.success('Cadastro finalizado!')

                setCep('');
                setNumero('');
                setComplemento('');
                setRua('Rua');
                setCidade('Cidade');

                chamarEnderecos();
            }
        }
        catch(err){ 
            toast.warn(err.response.data.erro)
        }
    }

    useEffect(() => {
        if (storage('usuario-logado')) {
            const id = storage('usuario-logado').id
            chamarAssinaturas();
            chamarCategorias();
            filtrarPorCategoriasClick();
            chamarCartoes();
            chamarEnderecos();
        } else {
            redir('/cadastro');
        }
    }, []);

    function verificarQtd () {
        const a = itensDisponiveis.filter((item) => item.quantidade > 0);
        let qtd = 0;
        for (let item of itensSelecionados){
            qtd = item.quantidade + qtd; 
        }

        // console.log(qtd)
        console.log(itensSelecionados);
        setQtdSelecionado(qtd);
        setItensSelecionados(a);
    };

    function enviarStorage () {
        storage('itens-selecionados', itensSelecionados);
    };

    useEffect(() => {
        if (opcaoCartao == 0 || opcaoEndereco == 0 || qtdSelecionado < 3) {
            setIsBotaoDisponivel(false);
        } else if (opcaoCartao != 0 && opcaoEndereco != 0 && qtdSelecionado >= 3) {
            setIsBotaoDisponivel(true)
        }
    }, [opcaoCartao, opcaoEndereco, qtdSelecionado]);

    return (
        <main className="assinatura">
            <CabecalhoUsuario/>
            <main className='corpo-site'>
                <h1>Receba mensalmente os sabores marcantes que você adora, no conforto de sua casa: grãos ou moídos!</h1>
                <section className='texto-apresentacao'>
                    <p>Nós selecionamos uma lista dos melhores sabores de café pelos quais você pode se interessar, além de alguns itens que possam ser necessários.  :)</p>
                    <ul>
                        <li> Nossos produtos são enviados sempre o mais fresco possível;</li>
                        <li> Os produtos têm 5% de desconto ao final do pagamento;</li>
                        <li> Muito mais conforto e comodidade.</li>
                    </ul>
                </section>

                <section className='selecionar-itens'>
                    <nav className='titulo'>
                        <h1 >Escolha entre os principais sabores disponíveis e quantidade:</h1>
                        <select name="" id="" value={filtrarPorCategoria} onChange={e => { filtrarPorCategoriasClick(e.target.value); setFiltrarPorCategoria(e.target.value); }}>
                            <option value={0}>Selecionar</option>
                            {categorias.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}> {item.nome} </option>
                                )
                            })}
                        </select>
                    </nav>

                    <div className="itens-cafe" >
                        {itensDisponiveis.map((item, index) => {
                            return (
                                <main>
                                    <div className="item">
                                        <div className="imagem">
                                            <img src={item.imagem} alt="" />
                                        </div>
                                        <p>{item.produto}</p>
                                        <div className='quantidade-item'>
                                            <p className='adicionar' onClick={() => {diminuirItens(item.quantidade, index); verificarQtd();}}>-</p>
                                            <p>{item.quantidade}</p>
                                            <p className='adicionar' onClick={() => {aumentarItens(item.quantidade, index); verificarQtd();}}>+</p>
                                        </div>
                                    </div>
                                </main>           
                            )
                        })}                                
                    </div>
                </section>

                <section className="selecionar-cartao">
                <h2 style={{marginBottom: '8px'}}> Cadastre ou escolha um cartão de crédito:</h2>

                    <div className="agrupamento">
                        <article className='info-cartao'>
                            <div className='titulo'>
                                <p>Não tem? Cadastre um agora!</p>
                                <input type="checkbox" name="checkbox1" id="checkbox1" style={{display: 'none'}}/>
                                <label htmlFor="checkbox1">
                                    <img src="/assets/images/setadropdown.png" alt="" onClick={() => setExibirCartao(!exibirCartao)}/>
                                </label>
                            </div>
                            {exibirCartao 
                            ? <div className='campo-inputs'>
                            <div>
                                <label htmlFor="">Número do cartão *</label>
                                <input type="text" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)}/>
                            </div>
                            <article className='secao2'>
                                <div>
                                    <label htmlFor="">Validade *</label>
                                    <input type="text" name="" id="" value={validade} onChange={e => setValidade(e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="">CVV *</label>
                                    <input type="number" value={cvv} onChange={e => setCvv(e.target.value)}/>
                                </div>
                            </article>
                            <div>
                                <label htmlFor="">Nome do títular *</label>
                                <input type="text" value={nomeTitular} onChange={e => setNomeTitular(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="">CPF/CNPJ do títular *</label>
                                <input type="number" value={cpf} onChange={e => setCpf(e.target.value)}/>
                            </div>
                        <button onClick={() => novoCartao()}>Cadastrar</button>

                        </div>

                            : (<></>)
                            }
                            
                        </article>
                        <select name="" value={opcaoCartao} id="" onChange={e => {setOpcaoCartao(e.target.value);}}>/   
                            <option value={0}>Selecionar cartão</option>
                            {cartoes.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>Final: {item.numero.substring(12, 16)} - {nomeNoCartao(item)}</option>                                
                                )
                            })}
                    </select>
                    </div>
                </section>
                

                <section className='selecionar-endereco'>
                    <h2 style={{marginBottom: '8px'}}>Cadastre ou escolha um endereço de entrega:</h2>
                    <div className="agrupamento">
                    <article className='info-endereco'>
                        <div className='titulo'>
                            <p>Não tem? Cadastre um agora!</p>
                            <input type="checkbox" name="checkbox2" id="checkbox2" style={{display: 'none'}}/>
                            <label htmlFor="checkbox2">
                                <img src="/assets/images/setadropdown.png" alt="" onClick={() => setExibirEndereco(!exibirEndereco)}/>
                            </label>
                        </div>
                        {exibirEndereco
                        ? <div className="resto">
                        <div className="campo1">
                            <div>
                                <label htmlFor="">Informe o CEP  *</label>
                                <input type="number" id="" value={cep} onChange={e => {
                                                                                        const valor = e.target.value;
                                                                                        if (valor.length <= 8) {
                                                                                            setCep(valor);
                                                                                            BuscarCep(valor);
                                                                                        }
                                                                                    }} />
                            </div>
                            <div>
                                <label htmlFor="">Informe o número *</label>
                                <input type="number" value={numero} onChange={e => setNumero(e.target.value)}/>
                            </div>
                        </div>

                        <div className="campo2">
                            <label htmlFor="">Complemento</label>
                            <input type="text" value={complemento} onChange={e => setComplemento(e.target.value)}/>
                            <input type="text" disabled className='endereco-usuario' placeholder={rua}/>
                            <input type="text" disabled className='endereco-usuario' placeholder={cidade}/>
                        </div>

                        <button onClick={cadastrarEndereco}>Cadastrar</button>
                        </div>
                        : <></>
                        }
                        
                    </article>
                    <select name="" value={opcaoEndereco} id="" onChange={e => {setOpcaoEndereco(e.target.value);}}>/
                        <option value={0}>Selecionar endereço</option>
                        {enderecos.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>CEP: {item.cep} - {item.rua}, {item.numero}</option>                                
                            )
                        })}
                    </select>
                    </div>
                    
                </section>
                
                
                     
                <button style={{ backgroundColor: isBotaoDisponivel ? '#F47E3C' : 'gray' }}>
                    {isBotaoDisponivel
                    ?   <Link to={{pathname: '/assinatura/confirmacao'}} onClick={() => enviarStorage()}>
                            <img src="/assets/images/icon-s.png" alt="" id='imagem-fantasma' />
                            <p>Continuar</p>
                            <img src="/assets/images/icon-seta-longa-esquerda.png" alt="" style={{transform: 'rotate(180deg)', width: '50px'}}/>
                        </Link>
                    :   <a>
                            <img src="/assets/images/icon-s.png" alt="" id='imagem-fantasma' />
                            <p>Continuar</p>
                            <img src="/assets/images/icon-seta-longa-esquerda.png" alt="" style={{transform: 'rotate(180deg)', width: '50px'}}/>
                        </a>
                    }
                    
                </button>

                <section className="texto-ajuda">
                    <h2>Você pode se perguntar:</h2>
                    <h2>Como funciona a assinatura mensal?</h2>
                    <div>
                        <p>Nosso método de pagamento nessa modalidade aceita apenas <b>cartão de crédito</b>.</p>
                        <p>1 - Você escolhe quais produtos deseja levar (mínimo de 3 itens);</p>
                        <p>2 - Cadastra o cartão de crédito e efetua o primeiro pagamento;</p>
                        <p>3 - Todos os meses, no mesmo dia em que o primeiro pagamento foi confirmado, uma nova cobrança chegará no cartão cadastrado e nós separaremos os produtos <b>selecionados por você</b>.</p>
                    </div>
                </section>
            </main>
            <UsuarioRodape />
        </main>
    )
}