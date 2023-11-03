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

    async function buscarProdutos(secoes) {
        try {
            let produtosBanco = []
            
            // buscando produtos por cada marca dessa categoria e armazenando na variavel produtosBanco
            
            for(let cont = 0; cont < 3; cont++){
                produtosBanco[cont] = await buscarProdutosPorMarca(secoes[cont].marcaBusca, categoria)
            }
            
            console.log(produtosBanco);
            setProdutos(produtosBanco)
            trocarProdutosAtuais(0, true, produtosBanco)
            trocarProdutosAtuais(1, true, produtosBanco)
            trocarProdutosAtuais(2, true, produtosBanco)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    function trocarProdutosAtuais(secao, primeiraVez, produtosBanco){
        if(!primeiraVez){
            console.log('oi1');
            let produtosSecao = produtosAtuais[secao]
            let ultimaPosicaoProdutosSecao 
            if(produtosSecao.length === 1)
                ultimaPosicaoProdutosSecao = 0
            else
                ultimaPosicaoProdutosSecao = produtos[secao].indexOf(produtosSecao[produtosSecao.length - 1 ].id)

            if(produtos[secao][ultimaPosicaoProdutosSecao + 4]){
                let proximosProdutos = produtos[secao].slice(ultimaPosicaoProdutosSecao + 1, ultimaPosicaoProdutosSecao + 5 )
                let produtosAtuaisTroca = produtosAtuais
                produtosAtuaisTroca[secao] = proximosProdutos
                setProdutosAtuais(produtosAtuaisTroca)
            }
            else{
                let ultimaPosicao = produtos[secao].length - 1
                if(produtos[secao].lenght === 1)
                    ultimaPosicao = 1
                let produtosRestantes = produtos[secao].slice([ultimaPosicaoProdutosSecao + 1, ultimaPosicao])
                let produtosAtuaisTroca = produtosAtuais
                produtosAtuaisTroca[secao] = produtosRestantes
                setProdutosAtuais(produtosAtuaisTroca)
            }
        }
        else{
            console.log('oi2');

            let produtosSecao = produtosBanco[secao]
            // console.log(produtosSecao);
            if(produtosSecao.length < 4){
                // console.log(produtosBanco);
                let produtosAtuaisTroca = produtosBanco
                let ultimaPosicao = produtosSecao.length - 1;
                if(produtosSecao.length === 1)
                    ultimaPosicao = 1
                produtosAtuaisTroca[secao] = produtosBanco[secao].slice(0, ultimaPosicao)
                setProdutosAtuais(produtosAtuaisTroca)
            }
            else{
                let produtosAtuaisTroca = produtosBanco
                produtosAtuaisTroca[secao] = produtosSecao.slice(0, 4)
                setProdutosAtuais(produtosAtuaisTroca)
            }
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
                <section className='faixaProdutos faixaProdutos1'>
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
                <section className='faixaApresentacao faixaApresentacao2'>
                    <img src={categoriaAtual[1].imagemSuporte} alt='imagem-suporte-cafeOrfeu' />
                    <article>
                        <article>
                            <div>
                                <h3> {categoriaAtual[1].marca}</h3>
                            </div>
                        </article>
                    </article>
                </section>
                <section className='faixaProdutos faixaProdutos2'>
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
                        <button onClick={() => trocarProdutosAtuais(0, false)}>
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
                <section className='faixaProdutos faixaProdutos3'>
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
                        <button onClick={() => trocarProdutosAtuais(0, false)}>
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