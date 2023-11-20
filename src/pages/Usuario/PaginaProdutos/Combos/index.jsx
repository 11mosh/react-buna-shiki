import './index.scss';
import CabecalhoUsuario from '../../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../../components/Usuario/UsuarioRodape'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { buscarCombos } from '../../../../api/comboApi';
import storage from 'local-storage'
import { useNavigate } from 'react-router';

export default function Combos(){
    const [combos, setCombos] = useState([{produtos: [{ produto: { detalhes: {}}}]}])
    const [renderizar, setRenderizar] = useState('')
    const cores = ['#C3937D', '#883715', '#31231D']
    const navigate = useNavigate()

    function adicionarCarrinho(indexCombo) {
        if(storage('usuario-logado')){
            let pedido = storage('usuario-pedido')
            
            for(let cont = 0; cont < combos[indexCombo].produtos.length; cont++){
                let extraindoProdutos = combos[indexCombo].produtos[cont].produto
                extraindoProdutos.qtd = 1
                pedido.produtos = [...pedido.produtos, extraindoProdutos ]
            }
            setRenderizar('renderizando')
            storage('usuario-pedido', pedido)
        }
        else{
            toast.info('Faça login ou cadastro para inserir um combo no carrinho')
            navigate('/login/combos')
        }
    }       


    async function buscarCombosExibir() {
        try{
            let resp = await buscarCombos()

            if(resp.length === 0)
                toast.info('Não há combos cadastrados')
            else{
                for(let cont = 0; cont < resp.length; cont++){
                    
                    if(cont === 0){
                        let combosTrocar = [...resp]
                        combosTrocar[cont].cor = cores[0]
                        resp = combosTrocar
                    }
                    else{
                        
                        let ultimaCor = resp[cont - 1].cor
                        if(ultimaCor === '#C3937D'){
                            let combosTrocar = [...resp]
                            combosTrocar[cont].cor = cores[1]
                            resp = combosTrocar
                        }
                        else if(ultimaCor === '#883715'){
                            let combosTrocar = [...resp]
                            combosTrocar[cont].cor = cores[2]
                            resp = combosTrocar
                        }
                        else if(ultimaCor === '#31231D'){
                            let combosTrocar = [...resp]
                            combosTrocar[cont].cor = cores[0]
                            resp = combosTrocar
                        } 
                    }
                }
                setCombos(resp)
            }

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

    // function verificarCorBorda(index, array) {
    //     if(combos.length !== 0){
    //         if(index === 0){
    //             let combosTrocar = [...array]
    //             combosTrocar[index].cor = cores[0]
    //             setCombos(combosTrocar)
    //         }
    //         else{
    //             let ultimaCor = array[--index].cor
    //             if(ultimaCor === '#C3937D'){
    //                 let combosTrocar = [...array]
    //                 combosTrocar[index].cor = cores[1]
    //                 setCombos(combosTrocar)
    //             }
    //             else if(ultimaCor === '#883715'){
    //                 let combosTrocar = [...array]
    //                 combosTrocar[index].cor = cores[2]
    //                 setCombos(combosTrocar)
    //             }
    //             else if(ultimaCor === '#31231D'){
    //                 let combosTrocar = [...array]
    //                 combosTrocar[index].cor = cores[0]
    //                 setCombos(combosTrocar)
    //             }
    //         }
    //     }
    // }

    useEffect(() => {
        buscarCombosExibir()

        // eslint-disable-next-line
    }, [])
    
    
    
    
    
    
    
    return(
        <div id='page-combos'>
            <CabecalhoUsuario categoriaSelecionada='Combos' linha='aparecer'/>
            {combos[0].nome
            
             ?  <main id='conteudo'>
                    {combos.map((combo, indexCombo, arrayCombos) => {
                        
                        return(
                            <section id='s1' style={{borderColor: combo.cor}}>
                                <article id='a1'>
                                    <h2> {combo.nome} </h2>
                                    <div>
                                        {combo.produtos.map((item, indexProdutos, array) => {
                                            
                                            return(
                                                <div key={item.produto.id}>
                                                    <section>
                                                        <img  src={item.produto.imagem} alt='' />
                                                        <p> {item.produto.produto} {item.produto.categoria === 'Café em grãos' || item.produto.categoria === 'Café em pó' ? item.produto.peso : ''} </p>
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

            : <></> }
            <UsuarioRodape />
        </div>
    )
}