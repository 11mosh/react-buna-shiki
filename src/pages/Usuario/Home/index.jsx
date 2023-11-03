import './index.scss';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarCategorias } from '../../../api/produtoApi';
import { toast } from 'react-toastify';

function Home () {

    const [categorias, setCategorias] = useState([]) 
    const [categoriasAtual, setCategoriasAtual] = useState([])

    async function buscarCategoriasExibicao(){
        try{
            const categoriasBanco = await buscarCategorias()
            
            let primeirasCategorias = []
            for(let cont = 0; cont < 4; cont++){
                primeirasCategorias[cont] = categoriasBanco[cont] 
            }
            setCategorias(categoriasBanco)
            setCategoriasAtual(primeirasCategorias)
        }
        catch(err){
            toast.error('Erro técnico: não foi possível buscar as categorias existentes')
        }
    }

    function verificarPosicao() {
        if(categorias.length !== 0){
            if(categoriasAtual[3].id === categorias[categorias.length - 1].id)
                return 'posicaoContraria'
            else 
                return ''
        }
    }
    function trocarCategorias() {
        let posicao = verificarPosicao()

        if(posicao === 'posicaoContraria'){
            let novasCategorias = []

            for (let index = 0; index < 4; index++) {
                novasCategorias[index] = categorias[index]
            }
            console.log('novasCategorias');
            setCategoriasAtual(novasCategorias)
        }
        else{
            let novasCategorias = []
            let cont = 4
            for (let index = 0; index < 4; index++) {
                novasCategorias[index] = categorias[cont]
                cont++
            }
            console.log('novasCategorias2');
            setCategoriasAtual(novasCategorias)
        }   
    }

    function verificarLinkCategoria(categoria){
        if(categoria === 'Café em grãos'){
            return '/produtos/cafeemgraos'
        }
        else if(categoria === 'Café em pó'){
            return '/produtos/cafeempo'
        }
        else if(categoria === 'Cafeteiras'){
            return '/produtos/cafeteiras'
        }
        else if(categoria === 'Combos'){
            return '/combos'
        }
        else if(categoria === 'Filtros'){
            return '/produtos/filtros'
        }
        else if(categoria === 'Moedores'){
            return '/produtos/moedores'
        }
        else if(categoria === 'Acessórios'){
            return '/produtos/acessorios'
        }
        else if(categoria === 'Cápsulas'){
            return '/produtos/capsulas'
        }
    }
    

    useEffect(() => {
        buscarCategoriasExibicao()
    }, [])



    return (
        <main className='home'>
            <Cabecalho />
            <article className='banner-cafe'>
                    <h1>Presente nos seus melhores momentos de conforto, nossa empresa transforma cada xícara em um momento especial.</h1>
            </article>

            
            <article className='categorias-carrossel'>
                <h1>Categorias</h1>
                
                
                <nav id={verificarPosicao()}>
                    <nav>
                        {categoriasAtual.map(item => {
                            return(
                                <Link to={verificarLinkCategoria(item.nome)} key={item.id}><img src={item.img} alt="" /> <p>{item.nome}</p></Link>
                            )
                        })}
                    </nav>
                    <div className='botao-categoria' onClick={() => trocarCategorias()} style={{backgroundColor: '#F47e3C', padding: '10px 16px', borderRadius: '100px', cursor: 'pointer'}}> 
                        <img src='/assets/images/divisa-branca-direita.png' alt="" />
                    </div>
                </nav>

            </article>
            <article className="banner-ambiental">
                <h1>Compromisso Ambiental</h1>
                <div className='conteudo'>
                    <div>
                        <h3>Cada produto que você adquire não apenas traz qualidade, mas também contribui para um planeta mais sustentável. Junte-se a nós e faça parte dessa mudança positiva. Juntos, podemos construir um futuro melhor para todos. <br></br> <br></br> Descubra uma nova forma de fazer a diferença. Na nossa empresa, parte dos nossos lucros é destinada à causa ambiental. </h3>
                        <button className='botão'>
                            <Link to={'/sustentabilidade'}>Saiba Mais</Link>
                        </button>
                    </div>
                    <img src="/assets/images/ongflorescerr.png" alt="" />
                </div>
            </article>
            <article className="combo-iniciante">
            <h3 style={{fontSize: '24px'}}>Combo Iniciante</h3>

                <div className='agrupamento-principal'>
                    <div className='agrupamento-itens-combo'>
                        <div className="divisoria1">
                            <div className='item-combo'>
                                <img src="/assets/images/cafee3.png" alt="" />
                                <p>Café 3 Corações Orgânico</p>
                                <b><p>R$20,00 x 3</p></b>
                            </div>
                            <p id='separacao-moedor'> + </p>
                            <div className='item-combo'>
                                <img src="/assets/images/moedorr.png" alt="" />
                                <p>Moedor de café Hamilton </p>
                                <b><p>R$369,45</p></b>
                            </div>
                            <p id='separacao-meio'> + </p>
                        </div>
                        <div className="divisoria2">
                            <div className='item-combo' id='filtro'>
                                <img src="/assets/images/filtroo.png" alt="" />
                                <p>Filtro de papel Melitta</p>
                                <b><p>R$6,50</p></b>
                            </div>
                            <p id='separacao-cafeteira'> + </p>
                            <div className='item-combo' id='cafeteira'>
                                <img src="/assets/images/cafeteiraa.png" alt="" />
                                <p>Cafeteira Elétrica Cadence </p>
                                <b><p>R$104,90</p></b>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='preco-combo'>
                        <h2>
                        Por apenas <br></br>
                        <b style={{color: '#661515'}}>R$430,00 </b>
                        </h2>
                        <button className='botão'>
                         <Link to={'/carrinho'}>Adicionar ao carrinho</Link>
                        </button>
                </div>
                </div>
                
            </article>

            <article className="assinatura-mensal">
                <h3>Faça parte do nosso clube de assinatura mensal!
                    <br></br> <br></br>
                    Você pode escolher quais produtos deseja receber mensalmente no conforto de sua casa.
                    <br></br> <br></br>
                    - Mais comodidade; <br></br>
                    - Novas chances de descobrir novos sabores;<br></br>
                    - Preço mais econômico
                </h3>
                <button className='botão'>
                    <Link to={'/assinatura'}>Mais informações</Link>
                </button>
            </article>
            <UsuarioRodape />
        </main>
    )
}

export default Home;