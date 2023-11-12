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
                    console.log(novaQtd);
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
        let subtotalCalc = produtos.reduce((total, item) => {
            total = total + (item.preco * item.qtd)
            return total
        }, 0)

        let trocandoSubtotal = storage('usuario-pedido')
        trocandoSubtotal.subtotal = subtotalCalc
        storage('usuario-pedido', trocandoSubtotal)

        setSubtotal(subtotalCalc)
    }

    useEffect(() => {
        const pedido = storage('usuario-pedido')
        setProdutos(storage('usuario-pedido').produtos)
        // { imagem: '/assets/images/cafeteiraa.png', produto: 'Orfeu intenso', detalhes: { peso: ' 1kg ' }, qtd: 0, preco: 135.50}
        pedido.produtos = [{ imagem: '/assets/images/cafeteiraa.png', estoque: 5, id: 1, produto: 'Orfeu intenso', detalhes: { peso: ' 1kg ' }, qtd: 3, preco: 135.50}, { id: 2, estoque: 5, imagem: '/assets/images/cafeteiraa.png', produto: 'Orfeu intenso', detalhes: { peso: ' 1kg ' }, qtd: 3, preco: 135.50}, { id: 3, estoque: 5, imagem: '/assets/images/cafeteiraa.png', produto: 'Orfeu intenso', detalhes: { peso: ' 1kg ' }, qtd: 3, preco: 135.50}, {  id: 4, estoque: 5, imagem: '/assets/images/cafeteiraa.png', produto: 'Orfeu intenso', detalhes: { peso: ' 1kg ' }, qtd: 3, preco: 135.50}]

        storage('usuario-pedido', pedido)
    }, [])

    useEffect(() => {
        calcularSubtotal()
    }, [produtos])

    return (    
      <div className="page-carrinho">
        <Cabecalho />
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
                                                <p> {item.produto} {item.detalhes.peso}</p>
                                                <p> R${item.preco} </p>
                                                <div> 
                                                    <button onClick={() => diminuirQtd(item.id, index, item.qtd)}> 
                                                        <p>-</p>
                                                    </button>
                                                    {item.qtd}
                                                    <button onClick={() => aumentarQtd(index, item.qtd)}>
                                                        <p>+</p>
                                                    </button>
                                                </div>
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
                                <p> R$ {subtotal} </p>
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