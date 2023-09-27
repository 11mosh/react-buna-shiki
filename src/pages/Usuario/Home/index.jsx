import './index.scss';
import UsuarioRodape from '../../../components/Usuario/UsuarioRodape';
import Cabecalho from '../../../components/Usuario/UsuarioCabecalho';
import { Link } from 'react-router-dom';


function Home () {


    return (
        <main className='home'>
            <Cabecalho />
            <article className='banner-cafe'>
                    <h1>Presente nos seus melhores momentos de conforto, nossa empresa transforma cada xícara em um momento especial.</h1>
            </article>
            <article className='categorias-carrossel'>
                <h1>Categorias</h1>
                <nav>
                    <div><img src="/assets/images/graosz-cat.png" alt="" /> <p>Grãos</p></div>
                    <div><img src="/assets/images/poo-cat.png" alt="" /> <p>Café em pó</p></div>
                    <div><img src="/assets/images/cafeteiraa-cat.png" alt="" /> <p>Cafeteiras</p></div>
                    <div><img src="/assets/images/cat-graoss.png" alt="" /> <p>Combos</p></div>
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
                <h3>Combo Iniciante</h3>
                <div className='agrupamento-itens-combo'>
                    <div className='item-combo'>
                        <img src="/assets/images/cafee3.png" alt="" />
                        <p>Café 3 Corações Orgânico 250g</p>
                        <b><p>R$20,00 x 3</p></b>
                    </div>
                    <p> + </p>
                    <div className='item-combo'>
                        <img src="/assets/images/moedorr.png" alt="" />
                        <p>Moedor de café Hamilton Beach</p>
                        <b><p>R$369,45</p></b>
                    </div>
                    <p> + </p>
                    <div className='item-combo' id='filtro'>
                        <img src="/assets/images/filtroo.png" alt="" />
                        <p>Filtro de papel N4 Melitta 30 unidades</p>
                        <b><p>R$6,50</p></b>
                    </div>
                    <p> + </p>
                    <div className='item-combo' id='cafeteira'>
                        <img src="/assets/images/cafeteiraa.png" alt="" />
                        <p>Cafeteira Elétrica Cadence Desperta Contrast</p>
                        <b><p>R$104,90</p></b>
                    </div>

                    <div className='preco-combo'>
                        <h2>
                        Por apenas <br></br>
                        <b>R$430,00 </b>
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