import './index.scss';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { buscarProdutosPorMarca } from '../../../api/produtoApi';
import { toast } from 'react-toastify';


export default function Index(){
    const categorias = [{categoria: 'cafeemgraos', secoes: [{marca: '3 Corações: Edição Gourmet', marcaBusca: '3 coracoes', imagemSuporte: '/assets/images/categorias/apresentacao/graos/cafe3coracoes.svg'}, {marca: 'Orfeu: 100% arábica', marcaBusca: 'orfeu', imagemSuporte: '/assets/images/categorias/apresentacao/graos/cafeOrfeu.png'}, {marca: 'Santa Mônica', marcaBusca: 'santa monica' , imagemSuporte: '/assets/images/categorias/apresentacao/graos/cafeSantaMonica.png'}]}, {categoria: 'filtros', secoes: [ {marca: 'Chemex: Bonded Filters', marcaBusca: 'chemex' , imagemSuporte: '/assets/images/categorias/apresentacao/filtros/chemex.png'}, {marca: 'Hario V60', marcaBusca: 'hario' , imagemSuporte: '/assets/images/categorias/apresentacao/filtros/hario.png'}, {marca: '3 corações', marcaBusca: '3 coracoes' ,  imagemSuporte: '/assets/images/categorias/apresentacao/filtros/3coracoes.png'}]}, {categoria: 'moedores', secoes: [ {marca: 'Tramontina ', marcaBusca: 'tramontina', imagemSuporte: '/assets/images/categorias/apresentacao/moedores/tramontina.png'}, {marca: 'Hario', marcaBusca:'hario' , imagemSuporte: '/assets/images/categorias/apresentacao/moedores/hario.png'}, {marca: 'Hamilton Beach', marcaBusca: 'hamilton', imagemSuporte: '/assets/images/categorias/apresentacao/moedores/hamilton.png'}]}, {categoria: 'cafeteiras', secoes: [ {marca: 'Oster', marcaBusca: 'oster', imagemSuporte: '/assets/images/categorias/apresentacao/cafeteiras/oster.png'}, {marca: 'Nespresso', marcaBusca: 'nespresso', imagemSuporte: '/assets/images/categorias/apresentacao/cafeteiras/nespresso.png'}, {marca: 'DeLonghi', marcaBusca: 'delonghi', imagemSuporte: '/assets/images/categorias/apresentacao/cafeteiras/delonghi.png'}]}, {categoria: 'capsulas', secoes: [{marca: 'Orfeu', marcaBusca: 'orfeu', imagemSuporte: '/assets/images/categorias/apresentacao/capsulas/orfeu.png'}, {marca: `L'or Expresso`, marcaBusca: `l'or`, imagemSuporte: '/assets/images/categorias/apresentacao/capsulas/lor.png'},{marca: 'Baggio Café', marcaBusca: 'baggio', imagemSuporte: '/assets/images/categorias/apresentacao/capsulas/baggio.png'}]}, {categoria: 'cafeempo', secoes: [{marca: 'Baggio Café', marcaBusca: 'baggio', imagemSuporte: '/assets/images/categorias/apresentacao/cafePo/baggio.png'}, {marca: 'Melitta', marcaBusca: 'melitta', imagemSuporte: '/assets/images/categorias/apresentacao/cafePo/melitta.png'}, {marca: 'Starbucks', marcaBusca: 'starbucks', imagemSuporte: '/assets/images/categorias/apresentacao/cafePo/starbucks.png'}]}, {categoria: 'acessorios', secoes: [{marca: 'Garrafas térmicas Stanley', marcaBusca: 'stanley', imagemSuporte: '/assets/images/categorias/apresentacao/acessorios/stanley.png'} , {marca: 'Coadores Hario', marcaBusca: 'hario', imagemSuporte: '/assets/images/categorias/apresentacao/acessorios/hario.png'}, {marca: 'Bules Electrolux', marcaBusca: 'electrolux', imagemSuporte: '/assets/images/categorias/apresentacao/acessorios/electrolux.png'}]}]
    
    const [categoriaAtual, setCategoriaAtual] = useState([{marca: '', imagemSuporte: ''}, {marca: '', imagemSuporte: ''}, {marca: '', imagemSuporte: ''}])
    const { categoria } = useParams()
    const [produtos, setProdutos] = useState([[], [], []])
    const [produtosAtuais, setProdutosAtuais] = useState([[], [], []])
    const [posicoes, setPosicoes] = useState(['', '', '']) 
        
    const navigate = useNavigate()

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

    function verificarCategoria() {
        if(categoria === 'cafeempo')
            return 'Café em pó'
        else if(categoria === 'cafeteiras')
            return 'Cafeteiras'
        else if(categoria === 'filtros')
            return 'Filtros'
        else if(categoria === 'moedores')
            return 'Moedores'
        else if(categoria === 'capsulas')
            return 'Cápsulas'
        else if(categoria === 'acessorios')
            return 'Acessórios'
        else if(categoria === 'cafeemgraos')
            return 'Café em grãos'
    }

    function verificarPosicao(secao) {
        if(produtos[secao].length !== 0){
            if(produtos[secao].length > 4){
                let produtosSecao = produtosAtuais[secao]
                let novoArray = []

                if(posicoes[secao] === 'contraria'){

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

                        setPosicoes(novoArray)


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
            <Cabecalho categoriaSelecionada={verificarCategoria()}/>
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
                                    <p> {item.produto} {item.categoria === 'Café em grãos' || item.categoria === 'Café em pó' ? item.detalhes.peso : ''}</p>
                                    <button onClick={() => navigate(`/descricao/${item.id}`)}> Mais detalhes </button>
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
                                    <p> {item.produto} {item.categoria === 'Café em grãos' || item.categoria === 'Café em pó' ? item.detalhes.peso : ''}</p>
                                    <button onClick={() => navigate(`/descricao/${item.id}`)}> Mais detalhes </button>
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
                                    <p> {item.produto} {item.categoria === 'Café em grãos' || item.categoria === 'Café em pó' ? item.detalhes.peso : ''}</p>
                                    <button onClick={() => navigate(`/descricao/${item.id}`)}> Mais detalhes </button>
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