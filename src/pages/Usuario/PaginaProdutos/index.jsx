import './index.scss';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buscarProdutosPorMarca } from '../../../api/produtoApi';
import { toast } from 'react-toastify';


export default function Index(){
    const categorias = [{categoria: 'cafeemgraos', secoes: [{marca: '3 Corações: Edição Gourmet', marcaBusca: '3 coracoes', imagemSuporte: '/assets/images/produtos/graos/cafe3coracoes.svg'}, {marca: 'Orfeu: 100% arábica', marcaBusca: 'orfeu', imagemSuporte: '/assets/images/produtos/graos/cafeOrfeu.png'}, {marca: 'Santa Mônica', marcaBusca: 'santa monica' , imagemSuporte: '/assets/images/produtos/graos/cafeSantaMonica.png'}]}, {categoria: 'filtros', secoes: [{marca: 'Hario V60', marcaBusca: 'hario' , imagemSuporte: ''}, {marca: 'Chemex: Bonded Filters', marcaBusca: 'chemex' , imagemSuporte: ''}, {marca: '3 corações', marcaBusca: '3 coracoes' ,  imagemSuporte: ''}]}, {categoria: 'moedores', secoes: [{marca: 'Hario', marcaBusca:'hario' , imagemSuporte: ''}, {marca: 'Tramontina ', marcaBusca: 'tramontina', imagemSuporte: ''}, {marca: 'Hamilton Beach', marcaBusca: 'hamilton', imagemSuporte: ''}]}, {categoria: 'cafeteiras', secoes: [{marca: 'Nespresso', marcaBusca: 'nespresso', imagemSuporte: ''}, {marca: 'Oster', marcaBusca: 'oster', imagemSuporte: ''}, {marca: 'DeLonghi', marcaBusca: 'delonghi', imagemSuporte: ''}]}, {categoria: 'capsulas', secoes: [{marca: 'Orfeu Cafés Especiais', marcaBusca: 'orfeu', imagemSuporte: ''}, {marca: 'Baggio Café', marcaBusca: 'baggio', imagemSuporte: ''}, {marca: `L'or Expresso`, marcaBusca: `l'or`, imagemSuporte: ''}]}, {categoria: 'cafeempo', secoes: [{marca: 'Baggio Café', marcaBusca: 'baggio', imagemSuporte: ''}, {marca: 'Starbucks', marcaBusca: 'starbucks', imagemSuporte: ''}, {marca: 'Melitta', marcaBusca: 'melitta', imagemSuporte: ''}]}, {categoria: 'acessorios', secoes: [{marca: 'Garrafas térmicas Stanley', marcaBusca: 'stanley', imagemSuporte: ''}, {marca: 'Bules Electrolux', marcaBusca: 'electrolux', imagemSuporte: ''}, {marca: 'Coadores Hario', marcaBusca: 'hario', imagemSuporte: ''}]}]
    const [categoriaAtual, setCategoriaAtual] = useState([{marca: '', imagemSuporte: ''}, {marca: '', imagemSuporte: ''}, {marca: '', imagemSuporte: ''}])
    const { categoria } = useParams()
    const [produtos, setProdutos] = useState([[], [], []])
    const [produtosAtuais, setProdutosAtuais] = useState([[], [], []])
    const [posicoes, setPosicoes] = useState(['', '', ''])

    async function buscarProdutos(secoes) {
        try {
            let todosProdutosBanco = []
            
            // buscando produtos por cada marca dessa categoria e armazenando na variavel produtosBanco
            for(let cont = 0; cont < 3; cont++){
                todosProdutosBanco[cont] = await buscarProdutosPorMarca(secoes[cont].marcaBusca, categoria)
            }
            
            setProdutos(todosProdutosBanco)
            trocarProdutosAtuais(0, true, todosProdutosBanco)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    function verificarPosicao(secao) {
        if(produtos[secao].length !== 0){
            if(produtos[secao].length > 4){
                let produtosSecao = produtosAtuais[secao]
                let novoArray = []
                console.log(posicoes);
                if(posicoes[secao] === 'contraria'){
                    // console.log(produtos);
                    if(produtosSecao[0].id === produtos[secao][0].id){
                        if(secao === 0)
                            novoArray = ['', posicoes[1], posicoes[2]]
                        if(secao === 1)
                            novoArray = [posicoes[0], '', posicoes[2]]
                        if(secao === 2)
                            novoArray = [posicoes[0], posicoes[1], '']
                            
                        setPosicoes(novoArray)
                        return ''
                    }
                    else{
                        return 'faixaAoContrario'
                        
                    }
                }
                
                else if(posicoes[secao] === ''){
                    // console.log(produtos);
                    if(produtosSecao[produtosSecao.length - 1].id === produtos[secao][produtos[secao].length - 1].id){
                        if(secao === 0)
                            novoArray = ['contraria', posicoes[1], posicoes[2]]
                        if(secao === 1)
                            novoArray = [posicoes[0], 'contraria', posicoes[2]]
                        if(secao === 2)
                            novoArray = [posicoes[0], posicoes[1], 'contraria']
                        console.log('oi1');
                        setPosicoes(novoArray)
                        // console.log(posicoes);
                        console.log(novoArray);
                        return 'faixaAoContrario'
                    }
                    else {
                    // console.log('oi2'); 
                        
                        return ''
                    }
                }
            }
        }
    } 

    function trocarProdutosAtuais(secao, primeiraVez, produtosBanco){
        if(!primeiraVez){

            if(produtos[secao].length > 4){
                let posicao = verificarPosicao(secao)
                if(posicao === ''){
                    console.log('normal');
                    let produtosSecao = produtosAtuais[secao]
                    let ultimaPosicaoProdutosSecao = produtos[secao].indexOf(produtosSecao[produtosSecao.length - 1])
                    // console.log(ultimaPosicaoProdutosSecao);
                    let proximosProdutos = produtos[secao].slice(ultimaPosicaoProdutosSecao + 1, ultimaPosicaoProdutosSecao + 5 )
                    // console.log(proximosProdutos);
                    let novoArray = []
                    if(secao === 0)
                        novoArray = [proximosProdutos, produtosAtuais[1], produtosAtuais[2]]
                    if(secao === 1)
                        novoArray = [produtosAtuais[0], proximosProdutos, produtosAtuais[2]]
                    if(secao === 2)
                        novoArray = [produtosAtuais[0], produtosAtuais[1], proximosProdutos]
                    console.log(novoArray);
                    setProdutosAtuais(novoArray)
                }
                else if(posicao === 'faixaAoContrario'){
                    if(produtosAtuais[secao][0].id !== produtos[secao][0].id){
                        console.log('reverse');
                        let produtosSecao = produtosAtuais[secao]
                        let ultimaPosicaoProdutosSecao = produtos[secao].indexOf(produtosSecao[0])
                        // console.log(ultimaPosicaoProdutosSecao);

                        let produtosAnteriores = ''
                        if(ultimaPosicaoProdutosSecao === 4){
                            trocarProdutosAtuais(0, true, produtos)
                        }
                        else{
                            produtosAnteriores = produtos[secao].slice(ultimaPosicaoProdutosSecao - 4, ultimaPosicaoProdutosSecao)
        
                            let novoArray = []
                            if(secao === 0)
                                novoArray = [produtosAnteriores, produtosAtuais[1], produtosAtuais[2]]
                            else if(secao === 1)
                                novoArray = [produtosAtuais[0], produtosAnteriores, produtosAtuais[2]]
                            else if(secao === 2)
                                novoArray = [produtosAtuais[0], produtosAtuais[1], produtosAnteriores]
                            console.log(novoArray);
                            setProdutosAtuais(novoArray)
                        }   
                    }
                }
                // console.log('oi1');
                // let produtosSecao = produtosAtuais[secao]
                // let ultimaPosicaoProdutosSecao = produtos[secao].indexOf(produtosSecao[produtosSecao.length - 1 ].id)
    
                // console.log(produtos);
                // if(produtos[secao][ultimaPosicaoProdutosSecao + 4]){
                //     let proximosProdutos = produtos[secao].slice(ultimaPosicaoProdutosSecao + 1, ultimaPosicaoProdutosSecao + 5 )
                //     let produtosAtuaisTroca = produtosAtuais
                //     produtosAtuaisTroca[secao] = proximosProdutos
                //     setProdutosAtuais(produtosAtuaisTroca)
                //     console.log('tem mais');
                // }
                // else{
                //     let ultimaPosicao = produtos[secao].length - 1
                //     // if(produtos[secao].lenght === 1)
                //     //     ultimaPosicao = 0
                //     let produtosRestantes = produtos[secao].slice([ultimaPosicaoProdutosSecao + 1, ultimaPosicao])
                //     let produtosAtuaisTroca = produtosAtuais
                //     produtosAtuaisTroca[secao] = produtosRestantes
                //     setProdutosAtuais(produtosAtuaisTroca)
                //     console.log('não tem mais');
                // }
            }
        }
        else{
            let novoArray = []

            for(let cont = 0; cont < 3; cont++){
                let primeirosProdutos = produtosBanco[cont].slice(0, 4)
                
                if(cont === 0){
                    novoArray = [primeirosProdutos]
                }
                else if(cont === 1){
                    novoArray = [novoArray[0], primeirosProdutos]
                }
                else if(cont === 2){
                    novoArray = [novoArray[0], novoArray[1], primeirosProdutos]
                }
            }

            setProdutosAtuais(novoArray)
        }
    }


    useEffect(() => {
        for(let item of categorias){
            
            if(item.categoria === categoria){
                setCategoriaAtual(item.secoes)
                buscarProdutos(item.secoes)
            }
        }
        // eslint-disable-next-line
    }, [categoria])
    
    return(
        <div id='page-produtos'>
            <Cabecalho />
            <main id='conteudo'>
                <section className='faixaApresentacao'>
                    <article>
                        <div>
                            <h3> {categoriaAtual[0].marca} </h3>
                        </div>
                    </article> 
                    <img src={categoriaAtual[0].imagemSuporte} alt='imagem-suporte-cafe3coracoes' />
                </section>
                <section id={verificarPosicao(0)} className='faixaProdutos faixaProdutos1' >
                    <article>
                        {produtosAtuais[0].map(item => {
                            return(
                                <div>
                                    <img src={item.imagem}alt='' />
                                    <p> {item.produto} {item.detalhes.peso}</p>
                                    <button> Mais detalhes </button>
                                </div>
                            )
                        })}
                    </article>
                    <aside>
                        <button onClick={() => trocarProdutosAtuais(0, false)}>
                            <img src='/assets/images/divisa-branca-direita.png' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <section className='faixaApresentacao faixaApresentacao2' >
                    <img src={categoriaAtual[1].imagemSuporte} alt='imagem-suporte-cafeOrfeu' />
                    <article>
                        <article>
                            <div>
                                <h3> {categoriaAtual[1].marca}</h3>
                            </div>
                        </article>
                    </article>
                </section>
                <section id={verificarPosicao(1)} className='faixaProdutos faixaProdutos2'>
                    <article>
                        {produtosAtuais[1].map(item => {
                            return(
                                <div>
                                    <img src={item.imagem}alt='' />
                                    <p> {item.produto} {item.detalhes.peso}</p>
                                    <button> Mais detalhes </button>
                                </div>
                            )
                        })}
                    </article>
                    <aside>
                        <button onClick={() => trocarProdutosAtuais(1, false)}>
                            <img src='/assets/images/divisa-branca-direita.png' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <section className='faixaApresentacao faixaApresentacao3'>
                    <article>
                        <div>
                            <h3> {categoriaAtual[2].marca}</h3>
                        </div>
                    </article>
                    <img src={categoriaAtual[2].imagemSuporte} alt='imagem-suporte-cafeSantaMonica' />
                </section>
                <section id={verificarPosicao(2)} className='faixaProdutos faixaProdutos3'>
                    <article>
                        {produtosAtuais[2].map(item => {
                            return(
                                <div>
                                    <img src={item.imagem}alt='' />
                                    <p> {item.produto} {item.detalhes.peso}</p>
                                    <button> Mais detalhes </button>
                                </div>
                            )
                        })}
                    </article>
                    <aside>
                        <button onClick={() => trocarProdutosAtuais(2, false)}>
                            <img src='/assets/images/divisa-branca-direita.png' alt='' />
                        </button>
                        <h4> Visualizar mais produtos</h4>
                    </aside>
                </section>
                <hr />
                <section id='formasPagamento'>
                    <h4> Aceitamos as seguintes formas de pagamento:</h4>
                    <article>
                        <div>
                            <img src='/assets/images/formas de pagamento/pix.svg' alt='' />
                            <p> Pix </p>
                        </div>
                        <div>
                            <img src='/assets/images/formas de pagamento/cartao.svg' alt='' />
                            <p> Cartão de Débito/Crédito </p>
                        </div>
                    </article>
                    <article id='empresas'>
                        <img src='/assets/images/formas de pagamento/empresas/payPal.svg' alt='pay pal' />
                        <img src='/assets/images/formas de pagamento/empresas/visaMastercardElo.svg' alt='visa/mastercard/elo' />
                        <img id='pix' src='/assets/images/formas de pagamento/empresas/pix.svg' alt='pix'/>
                        <img id='compraSegura' src='/assets/images/formas de pagamento/empresas/compraSegura.svg' alt='compra segura' />
                    </article>
                </section>
            </main>
            <UsuarioRodape />
        </div>
    )

}