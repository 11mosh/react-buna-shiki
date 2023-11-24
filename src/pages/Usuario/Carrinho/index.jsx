import "./index.scss";
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import storage from 'local-storage'
import { toast } from "react-toastify";


export default function Carrinho () {

    // eslint-disable-next-line
    const [produtos, setProdutos] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [qtdProdutos, setQtdProdutos] = useState(0)

    function diminuirQtd(id, index, qtd) {
        let novoArray = []
        let novaQtd = qtd
        if(qtd <= 1){
            novoArray = produtos.filter(item => item.id !== id)
        }
        else{
            for(let cont = 0; cont < produtos.length; cont++){
                novoArray[cont] = produtos[cont]
                if(index === cont){
                    novoArray[cont].qtd = --novaQtd
                }
            }
        }
        let trocandoProdutos = storage('usuario-pedido')
        trocandoProdutos.produtos = novoArray
        storage('usuario-pedido', trocandoProdutos)
        setProdutos(novoArray)
    }
    
    function aumentarQtd(index, qtd){
        if(produtos[index].estoque !== qtd) {
            let novoArray = []
    
            for(let cont = 0; cont < produtos.length; cont++){
                novoArray[cont] = produtos[cont]
                if(cont === index)
                    novoArray[cont].qtd = ++qtd
            }
            
            let trocandoProdutos = storage('usuario-pedido')
            trocandoProdutos.produtos = novoArray
            storage('usuario-pedido', trocandoProdutos)
            setProdutos(novoArray)
        }
        else{
            toast.info('Não há mais estoque desse produto.')
        }
    }

    function calcularSubtotal() {
        let qtd = 0
        let subtotalCalc = produtos.reduce((total, item) => {
            qtd = qtd + (1 * item.qtd)

            if(item.promocao !== "0.00")
                total = total + (item.promocao * item.qtd)
            else
                total = total + (item.preco * item.qtd)
            
            return total
        }, 0)
        
        setQtdProdutos(qtd)
        let trocandoSubtotal = storage('usuario-pedido')
        trocandoSubtotal.subtotal = subtotalCalc
        storage('usuario-pedido', trocandoSubtotal)

        setSubtotal(subtotalCalc)
    }

    function atribuirProdutos() {
        const produtosStorage = storage('usuario-pedido').produtos
        let produtos = []
        
        let contador = 0
        for(let cont = 0; cont < produtosStorage.length; cont++){
            let repetidoPosicao = ''
            for(let conta = 0; conta < produtos.length; conta++){
                // console.log(contador);
                if(produtos[conta].id === produtosStorage[cont].id){
                    repetidoPosicao = conta
                    console.log(repetidoPosicao);
                    break
                }
            }
            if(repetidoPosicao === ''){
                produtos[contador] = produtosStorage[cont]
                contador++
            }
            else{
                produtos[repetidoPosicao].qtd = ++produtos[repetidoPosicao].qtd
            }
        }

        let pedido = storage('usuario-pedido')
        pedido.produtos = produtos
        // storage('usuario-pedido', pedido)

        setProdutos(produtos)
    }

    function verificarSubtotalProduto(item) {
        let subtotal = 0
        if(item.promocao !== "0.00"){
            subtotal = item.promocao * item.qtd
        }
        else
            subtotal = item.preco * item.qtd

        
        subtotal = String(subtotal).replace('.', ',')

        return subtotal
    }
 
    useEffect(() => {
        if(storage('usuario-pedido'))
            atribuirProdutos()
    }, [])

    useEffect(() => {
        if(produtos.length !== 0)
            calcularSubtotal()

        // eslint-disable-next-line
    }, [produtos])

    return (    
      <div className="page-carrinho">
        <Cabecalho linha='aparecer'/>
            <main id="carrinho">
                {produtos.length === 0
                ?   <div id="carrinho-vazio">
                        <img src="/assets/images/carrinhoo.svg" alt="carrinho"/>
                        <p id="textoMaior">
                            Ops!
                        </p>
                        <p>
                            Seu carrinho esta vazio.
                        </p>
                        <p>
                            Navegue pelo site para adicionar 
                            produtos ao seu carrinho.
                        </p>
                        <Link to='/produtos/cafeemgraos'> Adicionar produtos </Link>
                    </div>
                :   <div id="carrinho-cheio">   
                        <h2> MEU CARRINHO </h2>
                        <main>
                            {produtos.map((item, index) => {
                                return(
                                    <section key={item.id}>
                                        <article id="a1">
                                            <div id="produto">
                                                <img src={item.imagem} alt='' />
                                            </div>
                                            <div id="detalhes">
                                                <p> {item.produto} {item.categoria === 'Café em grãos' || item.categoria === 'Café em pó' ? item.detalhes.peso : ''}</p>
                                                {item.promocao === "0.00"
                                                    ? <p> R${item.preco.replace('.', ',')} </p>
                                                    : <p> R${item.promocao.replace('.', ',')} </p>
                                                }
                                                <div> 
                                                    <button onClick={() => diminuirQtd(item.id, index, item.qtd)}> 
                                                        <p>-</p>
                                                    </button>
                                                    {item.qtd}
                                                    <button onClick={() => aumentarQtd(index, item.qtd)}>
                                                        <p>+</p>
                                                    </button>
                                                </div>
                                                {item.qtd !== 1
                                                    ? <p> Subtotal do produto: {verificarSubtotalProduto(item)} </p>
                                                    : ""
                                                }
                                            </div>
                                        </article>
                                        <article id="a2">
                                            <i onClick={() => diminuirQtd(item.id, index, 0)} className="fa-regular fa-trash-can"></i>
                                        </article>
                                    </section>
                                )
                            })}
                        </main>
                        <section id="s2">
                            <hr />
                            <article>
                                <p id="subtotal"> Subtotal: </p>
                                <p> R$ {subtotal} {`(${qtdProdutos} produtos)`}</p>
                            </article>
                        </section>
                        <section id="s3">
                            <Link id="marrom" to='/produtos/cafeemgraos'> Adicionar mais produtos</Link>
                            <Link id="laranja" to='/pagamento'> Ir para o pagamento </Link>
                        </section>
                    </div>
                }
            </main>
        <UsuarioRodape/>
      </div>

    )
}