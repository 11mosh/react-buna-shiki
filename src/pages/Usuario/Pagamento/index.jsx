import { useEffect, useState } from 'react';
import CabecalhoUsuario from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import './index.scss';
import { buscarCartoes, buscarEnderecos } from '../../../api/usuarioApi';
import storage from 'local-storage'
import { useNavigate } from 'react-router';
import { cadastrarItensPedido, cadastrarPedido } from '../../../api/pedidoApi';
import { toast } from 'react-toastify';

export default function Index() {
    const [entregaExpress, setEntregaExpress] = useState(false)
    const [entregaEconomica, setEntregaEconomica] = useState(false)
    const [enderecoEscolhido, setEnderecoEscolhido] = useState(0)
    const [enderecos, setEnderecos] = useState([])
    const [cartoes, setCartoes] = useState([])
    const [cartaoEscolhido, setCartaoEscolhido] = useState(0)
    const [tipoEntregaEscolhido, setTipoEntregaEscolhido] = useState({tipo: '', valor: 0})
    const [pagamentoPix, setPagamentoPix] = useState(false)
    const [formaPagamento, setFormaPagamento] = useState('')
    const [total, setTotal] = useState(0)
    const [produtos, setProdutos] = useState([])
    const [subtotal, setSubtotal] = useState(0)
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

    async function finalizarPedido() {
        try{
            let dtEntrega = new Date()
            if(tipoEntregaEscolhido.tipo === 'Entrega Express')
                dtEntrega.setDate(dtEntrega.getDate() + 1)
            else if(tipoEntregaEscolhido.tipo === 'Entrega Econômica')
                dtEntrega.setDate(dtEntrega.getDate() + 2)
            dtEntrega = dtEntrega.toISOString()
            dtEntrega = dtEntrega.substr(0, 10)
            
            const pedido = {
                id_cartao: cartaoEscolhido,
                id_endereco: enderecoEscolhido,
                total: total,
                frete: tipoEntregaEscolhido.valor,
                tp_entrega: tipoEntregaEscolhido.tipo,
                subtotal: subtotal,
                forma_pagamento: formaPagamento,
                id_cliente: storage('usuario-logado').id,
                dt_entrega: dtEntrega
            }
            const resp = await cadastrarPedido(pedido)
            await cadastrarItensPedido(produtos, resp.id)

            storage('usuario-pedido', { produtos: [] })
            setTimeout(() => {
                navigate(`/pedido-finalizado/${resp.id}`)
            }, 1000)
            
        }
        catch(err){
            if(err.response)
                toast.warn(err.response.data.erro)
            else
                toast.warn(err.message)
        }

        
    }

    async function buscarEnderecosClick() {
        const id = storage('usuario-logado').id
        const resp = await buscarEnderecos(id)

        setEnderecos(resp)
    }

    async function buscarCartoesClick() {
        const id = storage('usuario-logado').id
        const resp = await buscarCartoes(id)

        setCartoes(resp)
    }

    function verificarNome(nome){
        let posicaoEspaco = nome.indexOf(' ')
        let primeiroNome = nome.substring(0, posicaoEspaco)
        let segundaNome = nome.substring(posicaoEspaco + 1, posicaoEspaco + 2)
        let nomeFormado = `${primeiroNome} ${segundaNome}.`

        return nomeFormado
    }

    function completarCampos() {
        if(storage('usuario-pedido').id_cartao)
            setCartaoEscolhido(storage('usuario-pedido').id_cartao)

        if(storage('usuario-pedido').forma_pagamento)
            setFormaPagamento(storage('usuario-pedido').forma_pagamento)

        if(storage('usuario-pedido').id_endereco)
            setEnderecoEscolhido(storage('usuario-pedido').id_endereco)

        setProdutos(storage('usuario-pedido').produtos)
        setSubtotal(storage('usuario-pedido').subtotal)
        
        if(storage('usuario-pedido').tp_entrega && storage('usuario-pedido').frete){
            setTipoEntregaEscolhido({tipo: storage('usuario-pedido').tp_entrega, valor: storage('usuario-pedido').frete})
            if(storage('usuario-pedido').tp_entrega === 'Entrega Econômica')
                setEntregaEconomica(true)
            else if(storage('usuario-pedido').tp_entrega === 'Entrega Express')
                setEntregaExpress(true)
    
            if(storage('usuario-pedido').forma_pagamento === 'Pix')
                setPagamentoPix(true)
        }
    }

    function trocarValoresStorage(campo, valor){
        if(campo === 'pagamento'){
            let pedido = storage('usuario-pedido')
            pedido.id_cartao = valor.id
            pedido.forma_pagamento = valor.forma
            storage('usuario-pedido', pedido)
        }
        else if(campo === 'endereco'){
            let pedido = storage('usuario-pedido')
            pedido.id_endereco = valor
    
            storage('usuario-pedido', pedido)
        }
        else if(campo === 'entrega') {
            let pedido = storage('usuario-pedido')
            pedido.tp_entrega = valor.tipo
            pedido.frete = valor.valor
            storage('usuario-pedido', pedido)
        }
    }
    
    useEffect(() => {
        if(storage('usuario-pedido').subtotal) {
            let totalCalc = storage('usuario-pedido').subtotal + tipoEntregaEscolhido.valor 
            setTotal(totalCalc)
        }

    }, [tipoEntregaEscolhido])

    useEffect(() => {
        if(storage('usuario-logado')){
            if(storage('usuario-pedido').produtos.length !== 0){
                buscarEnderecosClick()
                buscarCartoesClick()
                completarCampos()
            }
            else{
                navigate('/carrinho')
            }
        }
        else
            navigate('/login')
        
        // eslint-disable-next-line
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
                        {produtos.map(item => {
                            return(
                                <div id='produto'>
                                    <figure>
                                        <img src={item.imagem} alt='cafeteira' />
                                    </figure>
                                    <aside> 
                                        <h5> {item.produto} {item.categoria === 'Café em grãos' || item.categoria === 'Café em pó' ? item.detalhes.peso : ''} </h5>
                                        {item.promocao === "0.00"
                                            ? <b> R${item.preco} </b>
                                            : <b> R${item.promocao} </b>}
                                        <div>
                                            {item.qtd}
                                        </div>
                                    </aside>
                                </div>
                            )
                        })}
                    </article>
                </section>
                <div id='s2'>
                    <section id='entrega'>
                        <div className='etapas'>
                            <h3> Entrega </h3>
                        </div>
                        <div id='entrega-conteudo'>
                            <select value={enderecoEscolhido} onChange={e => {setEnderecoEscolhido(Number(e.target.value)); trocarValoresStorage('endereco', e.target.value)}}>
                                <option value={0}> Selecionar endereço </option>
                                {enderecos.map(item => {
                                    return(
                                        <option value={item.id} key={item.id}> <b>CEP:</b> {item.cep} - {item.rua}, {item.numero} </option>
                                    )
                                })}
                            </select>
                            <section>
                                <h5> Selecione o tipo de pagamento: </h5>
                                <div>
                                    <article onClick={() => {setEntregaEconomica(!entregaEconomica); setEntregaExpress(false); mudarTipoEntrega('Entrega Econômica'); trocarValoresStorage('entrega', {tipo: 'Entrega Econômica', valor: 6.00})}}>
                                        <div id={entregaEconomica === true ? 'tipoEntregaSelecionado' : ''}>
                                            <p> Entrega Econômica </p>
                                        </div>
                                        <figure>
                                            <img src='/assets/images/sedex-logo.png' alt='logo da sedex' />
                                        </figure>
                                        <p> Receba em até <b> 2 dias </b> por R$6,00 </p>
                                    </article>
                                    <article onClick={() => {setEntregaExpress(!entregaExpress); setEntregaEconomica(false); mudarTipoEntrega('Entrega Express'); trocarValoresStorage('entrega', {tipo: 'Entrega Express', valor: 11.00 })}}>
                                        <div id={entregaExpress === true ? 'tipoEntregaSelecionado' : ''}>
                                            <p> Entrega Express</p>
                                        </div>
                                        <figure>
                                            <img src='/assets/images/loggi-logo.png' alt='logo da loggi' />
                                        </figure>
                                        <p> Receba em até <b> 1 dia </b> por R$11,00 </p>
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
                                <p className='preco'> R$ {subtotal}</p>
                            </div>
                            <div>
                                <p>Frete</p>
                                <p className='preco'> R$ {tipoEntregaEscolhido.valor + ',00'} </p>
                            </div>
                            <div>
                                <strong>Total</strong>
                                <strong className='preco'> R$ {total}</strong>
                            </div>
                        </div>
                        <select value={cartaoEscolhido} onChange={e => {setCartaoEscolhido(Number(e.target.value)); setFormaPagamento('Cartão'); setPagamentoPix(false); trocarValoresStorage('pagamento', {id: e.target.value, forma: 'Cartão'})}}>
                            <option value={0}> Selecionar cartão </option>
                            {cartoes.map(item => {
                                return(
                                    <option value={item.id} key={item.id}> Final: {item.numero.substr(12,16)} - {verificarNome(item.nome)}</option>
                                )
                            })}
                        </select>
                        <div className='pagamentoPix' id={verificarPagamentoPix()} onClick={() => {setPagamentoPix(!pagamentoPix); setFormaPagamento('Pix'); trocarValoresStorage('pagamento', {id: 0, forma: 'Pix'}); setCartaoEscolhido(0)}} >
                            <div>
                                <img src='/assets/images/formas de pagamento/pix.svg' alt='simbolo do pix' />
                                <p> Pix </p>
                            </div>
                            <p> Chave CNPJ: xx.xxx.xxx/0001-xx </p>
                        </div>
                        <div id='alinharButton'>
                            <button onClick={finalizarPedido}> Finalizar pedido </button>
                        </div>
                    </section>
                </div>
            </main>
            <UsuarioRodape />
        </div>
    )
}