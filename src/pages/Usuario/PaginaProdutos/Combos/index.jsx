import './index.scss';
import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { buscarCombos } from '../../../../api/comboApi';
import storage from 'local-storage'

export default function Combos(){
    const [combos, setCombos] = useState([])



    function adicionarCarrinho(indexCombo) {
        let pedido = storage('usuario-pedido')
        
        for(let cont = 0; cont < combos[indexCombo].produtos.length; cont++){
            let extraindoProdutos = combos[indexCombo].produtos[cont].produto
            extraindoProdutos.qtd = 1
            console.log(extraindoProdutos);
            pedido.produtos = [...pedido.produtos, extraindoProdutos ]
        }

        storage('usuario-pedido', pedido)
    }       


    async function buscarCombosExibir() {
        try{
            const resp = await buscarCombos()
            console.log(resp);
            setCombos(resp)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    function verificarAparicao(id, index, array){
        if(combos.length !== 0){
            
            if(id === array[array.length - 1].id){
                return 'none'
            }
            else
                return ''
        }
    }

    function verificarClasse(index){
        if(index === 1)
            return 'some'
        else
            return ''
    }

    useEffect(() => {
        buscarCombosExibir()

        // eslint-disable-next-line
    }, [])
    
    
    
    
    
    
    
    return(
        <div id='page-combos'>
            <CabecalhoUsuario />
            <main id='conteudo'>
                {combos.map((combo, indexCombo) => {
                    
                    return(
                        <section id='s1'>
                            <article id='a1'>
                                <h2> {combo.nome} </h2>
                                <div>
                                    {combo.produtos.map((item, indexProdutos, array) => {
                                        
                                        return(
                                            <div key={item.produto.id}>
                                                <section>
                                                    <img  src={item.produto.imagem} alt='' />
                                                    <p> {item.produto.produto} {item.produto.categoria === 'Café em grãos' || item.produto.categoria === 'Café em pó' ? item.produto.id : ''} </p>
                                                    <h5 className='precoMarrom'> R${item.produto.preco}</h5>
                                                </section>
                                                <img className={verificarClasse(indexProdutos)} style={{display: verificarAparicao(item.id, indexProdutos, array)}} src='/assets/images/icon-mais.png' alt='' />
                                            </div>
                                        )
                                    })}
                                </div>
                            </article>
                            <article id='a2'>
                                <div>
                                    <h2> Por apenas </h2>
                                    <h2 className='precoMarrom'> R$ {combo.preco} </h2>
                                </div>
                                <button className='btLaranja' onClick={() => adicionarCarrinho(indexCombo)}> Adicionar no carrinho</button>
                            </article>
                        </section>
                    )
                })}
            </main>
            <UsuarioRodape />
        </div>
    )
}