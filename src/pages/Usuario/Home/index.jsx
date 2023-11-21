import './index.scss';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarCategorias } from '../../../api/produtoApi';
import { toast } from 'react-toastify';
import { URLRota } from '../../../constants';
import axios from 'axios';
import storage from 'local-storage';
import { buscarComboPorNome } from '../../../api/comboApi';


function Home () {

    const [categorias, setCategorias] = useState([]);
    const [categoriasAtual, setCategoriasAtual] = useState([]);
    const [assinante, setAssinante] = useState();
    // const redir = useNavigate();
    const [idAssinatura, setIdAssinatura] = useState();
    const [combo, setCombo] = useState({preco: '', promocao: '', produtos: []})

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
    };

    function adicionarCarrinho() {
        let pedido = storage('usuario-pedido')
        let produto = {}
        
        for(let cont = 0 ; cont < combo.produtos.length; cont++){
            produto = combo.produtos[cont].produto
            produto.qtd = 1
            pedido.produtos = [...pedido.produtos, produto]
        }

        storage('usuario-pedido', pedido)
    }

    async function buscarCombo() {
        try{
            const respCombo = await buscarComboPorNome('combo iniciante')

            setCombo(respCombo)
        }
        catch(err){
            if(err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    function verificarPosicao() {
        if(categorias.length !== 0){
            if(categoriasAtual[3].id === categorias[categorias.length - 1].id)
                return 'posicaoContraria'
            else 
                return ''
        }
    };
  

    async function verificarAssinatura (id) {

        try {
            const url = URLRota + '/verificar-assinatura/' + id;
        const resposta = await axios.get(url);
        const dados = resposta.data;
        
        
        
        if (dados.length > 0) {
            setAssinante(true);
            storage('id-assinatura', {idAssinatura: idAssinatura});
            const idAssinaturaa = dados[0].id_assinatura;
        setIdAssinatura(idAssinaturaa);
        } else if (dados.length === 0) {
            setAssinante(false);
        }
        } catch (error) {
            toast.error(error.message)
        }

        
    }
    
    function trocarCategorias() {
        let posicao = verificarPosicao()

        if(posicao === 'posicaoContraria'){
            let novasCategorias = []

            for (let index = 0; index < 4; index++) {
                novasCategorias[index] = categorias[index]
            }
            setCategoriasAtual(novasCategorias)
        }
        else{
            let novasCategorias = []
            let cont = 4
            for (let index = 0; index < 4; index++) {
                novasCategorias[index] = categorias[cont]
                cont++
            }
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

    function verificarSeperador(index, campo) {
        if(index === 3 && !campo)
            return 'hidden'
        if(campo === 'excluir' && index === 1)
            return 'separadorSumir'
        else 
            return ''
    }
    

    useEffect(() => {
        buscarCategoriasExibicao();
        buscarCombo()
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (storage('usuario-logado')) {
            const idCliente = storage('usuario-logado').id;
            verificarAssinatura(idCliente);

            
            if(storage('id-assinatura')) {
                const idAssinaturaa = storage('id-assinatura').idAssinatura;
                setIdAssinatura(idAssinaturaa);
            }
        }      
        
        // eslint-disable-next-line
    }, [assinante]);


    return (
        <main className='home'>
            <Cabecalho/>
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
            <h3 style={{fontSize: '24px'}}>{combo.nome}</h3>

                <div className='agrupamento-principal'>
                    <div className='agrupamento-itens-combo'>
                        <div className="divisoria1">
                            {combo.produtos.map((item, index) => {
                                return(
                                    <div>
                                        <div className='item-combo'>
                                            <img src="/assets/images/cafee3.png" alt="" />
                                            <p> {item.produto.produto} {item.produto.categoria === 'Café em grãos' || item.produto.categoria === 'Café em pó' ? item.produto.detalhes.peso : ''}</p>
                                            <b><p>R${ item.produto.promocao !== '0.00'
                                                        ? item.produto.promocao.replace('.', ',')
                                                        : item.produto.preco.replace('.', ',')}
                                            </p></b>
                                        </div>
                                        <p id='separacao-moedor' className={verificarSeperador(index, 'excluir')} style={{visibility: verificarSeperador(index)}}> + </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='preco-combo'>
                        <h2>
                        Por apenas <br></br>
                        <b style={{color: '#661515'}}>R${ combo.preco.replace('.', ',')} </b>
                        </h2>
                        <button className='botão' onClick={adicionarCarrinho}>
                            Adicionar ao carrinho
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
                    {assinante 
                    ? <Link to={'/conta/assinaturas'}>Mais informações</Link>
                    : <Link to={'/assinatura'}>Mais informações</Link>
                }
                </button>
            </article>
            <UsuarioRodape />
        </main>
    )
}

export default Home;