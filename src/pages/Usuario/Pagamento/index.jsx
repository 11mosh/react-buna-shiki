import { useEffect, useState } from 'react';
import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';
import { buscarCartoes, buscarEnderecos } from '../../../api/usuarioApi';
import storage from 'local-storage'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Index() {
    const [entregaExpress, setEntregaExpress] = useState(false)
    const [entregaEconomica, setEntregaEconomica] = useState(false)
    const [enderecos, setEnderecos] = useState([])
    const [cartoes, setCartoes] = useState([])
    const [tipoEntregaEscolhido, setTipoEntregaEscolhido] = useState({tipo: '', valor: 0})
    const [pagamentoPix, setPagamentoPix] = useState(false)
    const navigate = useNavigate()

    function mudarTipoEntrega(tipo){
        if(tipo === 'Entrega Express'){
            let novoObject = {tipo: tipo, valor: 11.00 }
            setTipoEntregaEscolhido(novoObject)
        }
        else if(tipo === 'Entrega Econômica'){
            let novoObject = {tipo: tipo, valor: 6.00}
            setTipoEntregaEscolhido(novoObject)
        }
    }
    function verificarPagamentoPix(){
        if(pagamentoPix === true)
            return 'pagamentoPixSelecionado'
        else
            return ''
    }

    async function buscarEnderecosClick() {
        const id = storage('usuario-logado').id
        const resp = await buscarEnderecos(id)

        setEnderecos(resp)
    }

    async function buscarCartoesClick() {
        const id = storage('usuario-logado').id
        const resp = await buscarCartoes(id)

        console.log(resp);
        setCartoes(resp)
    }

    function verificarNome(nome){
        let posicaoEspaco = nome.indexOf(' ')
        // console.log(posicaoEspaco);
        let primeiroNome = nome.substring(0, posicaoEspaco)
        // console.log(primeiroNome);
        let segundaNome = nome.substring(posicaoEspaco + 1, posicaoEspaco + 2)
        console.log(segundaNome);
        let nomeFormado = `${primeiroNome} ${segundaNome}.`

        return nomeFormado
    }

    useEffect(() => {
        if(storage('usuario-logado')){
            buscarEnderecosClick()
            buscarCartoesClick()
        }
        else
            navigate('/login')
        
    }, [])

    
    return(
        <div id='page-pagamento'>
            <CabecalhoUsuario />
            <main id='conteudo'>
                <section id='s1'>
                    <div className='etapas'>
                        <h3>Resumo do pedido</h3>
                    </div>
                    <article>
                         <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    3
                                </div>
                            </aside>
                        </div>
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    3
                                </div>
                            </aside>
                        </div>
                        
                        <div id='produto'>
                            <figure>
                                <img src='/assets/images/cafeteiraa.png' alt='cafeteira' />
                            </figure>
                            <aside> 
                                <h5> Cafeteira </h5>
                                <b> R$150,00</b>
                                <div>
                                    3
                                </div>
                            </aside>
                        </div>
                    </article>
                </section>
                <div id='s2'>
                    <section id='entrega'>
                        <div className='etapas'>
                            <h3> Entrega </h3>
                        </div>
                        <div id='entrega-conteudo'>
                            <select required autoFocus>
                                <option> Selecionar endereço </option>
                                {enderecos.map(item => {
                                    return(
                                        <option> <b>CEP:</b> {item.cep} - {item.rua}, {item.numero} </option>
                                    )
                                })}
                            </select>
                            <section>
                                <h5> Selecione o tipo de pagamento: </h5>
                                <div>
                                    <article onClick={() => {setEntregaEconomica(!entregaEconomica); setEntregaExpress(false); mudarTipoEntrega('Entrega Econômica')}}>
                                        <div id={entregaEconomica === true ? 'tipoEntregaSelecionado' : ''}>
                                            <p> Entrega Econômica </p>
                                        </div>
                                        <figure>
                                            <img src='/assets/images/sedex-logo.png' alt='logo da sedex' />
                                        </figure>
                                        <p> Receba em até <b> 4 dias </b> por R$6,00 </p>
                                    </article>
                                    <article onClick={() => {setEntregaExpress(!entregaExpress); setEntregaEconomica(false); mudarTipoEntrega('Entrega Express')}}>
                                        <div id={entregaExpress === true ? 'tipoEntregaSelecionado' : ''}>
                                            <p> Entrega Express</p>
                                        </div>
                                        <figure>
                                            <img src='/assets/images/loggi-logo.png' alt='logo da loggi' />
                                        </figure>
                                        <p> Receba em até <b> 2 dias </b> por R$11,00 </p>
                                    </article>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section id='pagamento'>
                        <div className='etapas'> 
                            <h3> Pagamento </h3> 
                        </div>
                        <div id='total'>
                            <div>
                                <p>Subtotal</p>
                                <p className='preco'> R$ 344, 97</p>
                            </div>
                            <div>
                                <p>Frete</p>
                                <p className='preco'> R$ {tipoEntregaEscolhido.valor + ',00'} </p>
                            </div>
                            <div>
                                <strong>Total</strong>
                                <strong className='preco'> R$ 355, 97</strong>
                            </div>
                        </div>
                        <select>
                            <option> Selecionar cartão </option>
                            {cartoes.map(item => {
                                return(
                                    <option> Final: {item.numero.substr(12,16)} - {verificarNome(item.nome)}</option>
                                )
                            })}
                        </select>
                        <div className='pagamentoPix' id={verificarPagamentoPix()} onClick={() => setPagamentoPix(!pagamentoPix)} >
                            <div>
                                <img src='/assets/images/formas de pagamento/pix.svg' alt='simbolo do pix' />
                                <p> Pix </p>
                            </div>
                            <p> Chave aleatória: 00000000000000 </p>
                        </div>
                        <div id='alinharButton'>
                            <Link> Finalizar pedido </Link>
                        </div>
                    </section>
                </div>
            </main>
            <UsuarioRodape />
        </div>
    )
}