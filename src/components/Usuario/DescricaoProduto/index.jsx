import CabecalhoUsuario from '../UsuarioCabecalho';
import UsuarioRodape from '../UsuarioRodape';
import { Link } from 'react-router-dom';
import './index.scss';

export default function DescricaoProduto () {

    
return (
    <main className='descricao-produto'>
        <CabecalhoUsuario/>
        <nav style={{padding: '20px'}}>
                <Link to='/' style={{ decoration: 'dashed', color: 0}}> Home page </Link>
                 &gt;
                <p>Café em grão </p>
                &gt;
                <p>Descrição</p>
        </nav>
        
        <hr />

        <article className='corpo-site'>
         <section className="agrupamento">
            <main className="imagem-tipos">
                <article className='imagem-principal'>
                    <img src="/assets/images/filtroo.png" alt="" />
                    <nav className='imagens-produto'>
                        <div className="imagem-baixa">
                            <img src="/assets/images/filtroo.png" alt="" />
                        </div>
                        <div className="imagem-baixa">
                            <img src="/assets/images/filtroo.png" alt="" />
                        </div>
                    </nav>
                </article>

                <div className="detalhes-produto">
                    <div className="tipos">
                        <section className="tipo-imagem">
                            <img src="/assets/images/intensidade.png" alt="" />
                        </section>
                        <p><b>Intensidade</b></p>
                        <p>Baixa</p>
                    </div>
                    <div className="tipos">
                        <section className="tipo-imagem">
                            <img src="/assets/images/docura.png" alt="" />
                        </section>
                        <p><b>Doçura</b></p>
                        <p>Alta</p>
                    </div>
                    <div className="tipos">
                        <section className="tipo-imagem">
                            <img src="/assets/images/acidez.png" alt="" />
                        </section>
                        <p><b>Acidez</b></p>
                        <p>Alta</p>
                    </div>
                    <div className="tipos">
                        <section className="tipo-imagem">
                            <img src="/assets/images/torra.png" alt="" />
                        </section>
                        <p><b>Torra</b></p>
                        <p>Média</p>
                    </div>
                </div>
            </main>

            <main className="compra-categoria">
             <article className='compra'>
                    <nav className="nome-preco">
                        <h1>Orfeu Clássico 1kg Grão</h1>
                        <h5>De: <b style={{textDecoration: 'line-through'}}>R$103,90</b></h5>
                        <h2>POR: <b>R$87,99</b></h2>
                    </nav>

                    <nav className="botoes">
                        <button className='botao'>
                            Comprar
                        </button>
                        <button className='botao'>
                            Adicionar ao Carrinho
                        </button>
                    </nav>

                    <div className="formas-entrega">
                        <p style={{fontSize: '18px'}}>Calcular valores e formas de entrega</p>
                        <div className="input-botao">
                            <input type="number" placeholder='Digite seu CEP'/>
                            <button className="botao">Calcular</button>
                        </div>
                    </div>

                    <div className="opcoes-entrega">
                        <div>
                            <p>Entrega Econômica</p>
                            <img src="/assets/images/sedex-logo.png" alt="" />
                            <p>Receba em até <b>4 dias</b> por <b>R$6,00</b></p>
                        </div>
                        <div>
                            <p>Entrega Express</p>
                            <img src="/assets/images/loggi-logo.png" alt="" id='loggi-logo'/>
                            <p id='texto-loggi'>Receba em até <b>2 dias</b> por <b>R$11,00</b></p>
                        </div>
                    </div>
                </article>

                <div className="categoria"><h1><b>CATEGORIA:</b> CAFÉ EM GRÃO</h1> <img src="/assets/images/cafe-categoria.png" alt="" /></div>
            </main>
            </section>

            <section className="descricao">
                <h1>Descrição</h1>
                <p>O Café em Grãos Orfeu Clássico 1KG é um café especial em grãos 100% Arábica, equilibrado e de torra média. O grão de café apresenta notas florais, frutadas e de caramelo. Possui doçura alta, acidez equilibrada, corpo aveludado e aromas complexos, com uma finalização persistente e prazerosa.</p>
            </section>

            <section className='detalhes-tecnicos'>
                <h1 style={ {marginTop: '20px ', marginBottom: '10px'} }>Detalhes técnicos</h1>

                <div className='tabelas'>
                    <table id='tabela1'>
                        <tbody>
                        <tr>
                            <td>Marca</td>
                            <td>Categoria</td>
                            <td>Informações sobre alergia</td>
                            <td>Peso</td>
                            <td>Dimensões do produto</td>
                        </tr>
                        </tbody>
                    </table>

                    <table id='tabela2'>
                        <tbody>
                        <tr>
                            <td>ORFEU</td>
                            <td>Grãos</td>
                            <td>Não contém glúten</td>
                            <td>1000 gramas</td>
                            <td>15 x 9 x 29cm</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                
            </section>
            <h1>Você pode precisar</h1>

            <section className="voce-pode-precisar">

                <div className='produtos-necessidade'>
                    {/* <button>&gt;</button> */}
                        <div className="produto">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Cafeteira Elétrica Cadence Desperta</p>
                            <p className='preco-produto'><b>R$104,99</b></p>
                        </div>
                        <div className="produto">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Cafeteira Elétrica Cadence Desperta</p>
                            <p className='preco-produto'><b>R$104,99</b></p>
                        </div>
                        <div className="produto">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Cafeteira Elétrica Cadence Desperta</p>
                            <p className='preco-produto'><b>R$104,99</b></p>
                        </div>
                        <div className="produto">
                            <img src="/assets/images/cafeteiraa.png" alt="" />
                            <p>Cafeteira Elétrica Cadence Desperta</p>
                            <p className='preco-produto'><b>R$104,99</b></p>
                        </div>
                    {/* <button>&gt;</button> */}
                </div>
            </section>
        </article>
        <UsuarioRodape />
    </main>
 )
}